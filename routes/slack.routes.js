import { Router } from "express";
import { app } from "../index.js";

import { Person } from "../models/people/person.js";
import { Faculty } from "../models/people/faculty.js";
import { PhdStudent } from "../models/people/phdstudent.js";
import { NonPhdStudent } from "../models/people/nonphdstudent.js";

import { Project } from "../models/project/project.js";
import { SigStructure } from "../models/social-structures/sig.js";
import {
  messageChannel,
  messagePersonWithOptions
} from "../controllers/communication/slack/send.js";
import {
  formatPeopleForSlackMessage
} from "../controllers/communication/slack/payloadGenerator.js";

export const slackRouter = new Router();

/*
 TODO: factor all logic out into a controller with generic functions:
  directMessage() [also supports multiple ppl passed in as an array]; channelMessage().
  Routes for specific behavior are ok (e.g., message all projs or SIGs
 */

/**
 * Get all channels (public and private) that Slack Bot can access.
 */
slackRouter.get("/getAllChannels", async (req, res) => {
  try {
    let conversationsList = [];

    // keep getting responses while a next cursor exists
    let nextCursorExists = true;
    let nextCursorStr = "";
    let error;

    while (nextCursorExists) {
      // get the next set of conversations based on the current cursor
      let conversationListResponse = await app.client.conversations.list({
        types: "public_channel,private_channel",
        cursor: nextCursorStr,
      });

      // check if response is ok before adding to people's list
      if (conversationListResponse["ok"]) {
        conversationsList = conversationsList.concat(conversationListResponse.channels);

        // get next cursor
        nextCursorStr = conversationListResponse["response_metadata"]["next_cursor"];
        nextCursorExists = nextCursorStr !== "";
      } else {
        error = conversationListResponse;
        nextCursorExists = false;
      }
    }

    // check if we had any errors
    if (error !== undefined) {
      throw new Error(error);
    }

    // return response
    res.json(conversationsList);
  } catch (error) {
    let msg = `Error in /slack/getAllChannels: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Get all people in the team.
 */
slackRouter.get("/getAllPeople", async (req, res) => {
  try {
    let peopleList = [];

    // keep getting responses while a next cursor exists
    let nextCursorExists = true;
    let nextCursorStr = "";
    let error;

    while (nextCursorExists) {
      // get the next set of people based on the current cursor
      let peopleListResponse = await app.client.users.list({
        include_locale: true,
        cursor: nextCursorStr
      });

      // check if response is ok before adding to people's list
      if (peopleListResponse["ok"]) {
        peopleList = peopleList.concat(peopleListResponse.members);

        // get next cursor
        nextCursorStr = peopleListResponse["response_metadata"]["next_cursor"];
        nextCursorExists = nextCursorStr !== "";
      } else {
        error = peopleListResponse;
        nextCursorExists = false;
      }
    }

    // check if we had any errors
    if (error !== undefined) {
      throw new Error(error);
    }

    // return response
    res.json(peopleList);
  } catch (error) {
    let msg = `Error in /slack/getAllPeople: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Sends a message to all project channels.
 */
// TODO: this should really call the same function that sends data to a single project channel.
slackRouter.post("/messageAllProjectChannels", async (req, res) => {
  try {
    // parse inputs
    let message = (req.body.message ?? "").trim();

    // fetch project info
    let allProjects = await Project.find({}).populate('students');
    if (allProjects === null) {
      throw new Error(`no projects found`);
    }

    // iterate over each project and send message
    let messagesToSend = [];
    for (let project of allProjects) {
      // get channel name
      let channelName = project.slack_channel;

      // get people and their names
      let students = project.students.map((student) => {
        return {
          name: student.name,
          slack_id: student.slack_id
        }
      });

      // create promises to send message to channel
      messagesToSend.push(messageChannel(
        channelName,
        formatPeopleForSlackMessage(students),
        message
      ));
    }

    // send messages, and return result to caller
    res.json(await Promise.all(messagesToSend));
  } catch (error) {
    let msg = `Error in /slack/messageAllProjectChannels: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Sends a message to all SIG channels.
 */
// TODO: this should really call the same function that sends data to a single sig channel.
slackRouter.post("/messageAllSigChannels", async (req, res) => {
  try {
    // parse inputs
    let message = (req.body.message ?? "").trim();

    // fetch project info
    let allSigs = await SigStructure.find({})
      .populate("members")
      .populate("sig_head");
    if (allSigs === null) {
      throw new Error(`no projects found`);
    }

    // iterate over each project and send message
    let messagesToSend = [];
    for (let sig of allSigs) {
      // get channel name
      let channelName = sig.slack_channel;

      // get students who are in the SIG, and their names
      let students = sig.members.map((student) => {
        return {
          name: student.name,
          slack_id: student.slack_id
        }
      });

      // create promises to send message to channel
      messagesToSend.push(messageChannel(
        channelName,
        formatPeopleForSlackMessage(students),
        message
      ));
    }

    // send messages, and return result to caller
    res.json(await Promise.all(messagesToSend));
  } catch (error) {
    let msg = `Error in /slack/messageAllSigChannels: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Sends message to a project's Slack Channel.
 */
// TODO: factor this out into a controller
slackRouter.post("/messageProjectChannel", async (req, res) => {
  try {
    // TODO: check if inputs are valid
    // parse inputs
    let projName = (req.body.projName ?? "").trim();
    let message = (req.body.message ?? "").trim();

    // fetch project info
    let relevantProject = await Project.findOne( { name: projName })
      .populate('students')
      .populate('sig_head')
      .populate('faculty_mentor');
    if (relevantProject === null) {
      throw new Error(`no project found for ${ projName }`);
    }

    // get channel name
    let channelName = relevantProject.slack_channel;

    // get people and their names
    let students = relevantProject.students.map((student) => {
      return {
        name: student.name,
        slack_id: student.slack_id
      }
    });

    let sigHead = {
      name: relevantProject.sig_head.name,
      slack_id: relevantProject.sig_head.slack_id
    };

    let facultyMentor = {
      name: relevantProject.faculty_mentor.name,
      slack_id: relevantProject.faculty_mentor.slack_id
    };

    // send message to channel
    const result = await messageChannel(
      channelName,
      formatPeopleForSlackMessage(students),
      message
    );

    // return result of slack message
    res.json(result);
  } catch (error) {
    let msg = `Error in /slack/messageProjectChannel: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Sends message to a SIG's Slack channel.
 */
// TODO: factor this out into a controller
slackRouter.post("/messageSigChannel", async (req, res) => {
  try {
    // TODO: check if inputs are valid
    // parse inputs
    let sigName = (req.body.sigName ?? "").trim();
    let message = (req.body.message ?? "").trim();

    // TODO: replace this with the SIG social structure
    // get SIG info for project name
    let relevantSigVenueInfo = await SigStructure.findOne(
      {
        name: {
          "$regex": sigName,
          "$options": "i"
        }
      })
      .populate("sig_head")
      .populate("members");

    if (relevantSigVenueInfo === null) {
      throw new Error(`no SIG found for ${ sigName }`);
    }

    let channelName = relevantSigVenueInfo.slack_channel;

    // get students and their names
    let students = relevantSigVenueInfo.members.map((student) => {
      return {
        name: student.name,
        slack_id: student.slack_id
      }
    });

    // send message to channel
    const result = await messageChannel(
      channelName,
      formatPeopleForSlackMessage(students),
      message
    );

    // return result of slack message
    res.json(result);
  } catch (error) {
    let msg = `Error in /slack/messageSigChannel: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * TODO: implement
 * Sends message to a committee's Slack Channel.
 */
slackRouter.post("/messageCommitteeChannel", async (req, res) => {
  try {
    res.json({});
  } catch (error) {
    let msg = `Error in /slack/messageCommitteeChannel: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Send a direct message (or a group direct message) to a list of people.
 */
slackRouter.post("/messagePeople", async (req, res) => {
  try {
    // parse inputs from request
    let people = JSON.parse(req.body.people ?? "[]").map(person => { return person.trim() });
    let message = (req.body.message ?? "").trim();

    // TODO: sorting like this is fine for now, but may want to have more control over user order
    // get slack ids for people
    const allPeople = await Person.find({
      "name": {
        "$in": people
      }
    }).sort("role name");

    const peopleSlackIds = allPeople.map(person => {
      return {
        name: person.name,
        slack_id: person.slack_id
      }
    });

    // open a multi-person direct message (MPIM) channel
    // api documentation: https://api.slack.com/methods/conversations.open
    let conversationForPeopleResponse = await app.client.conversations.open({
      return_im: true,
      users: peopleSlackIds.map(person => { return person.slack_id }).join(",")
    });

    // send the message from the request to the MPIM channel
    if (conversationForPeopleResponse["ok"]) {
      const channelId =  conversationForPeopleResponse["channel"]["id"];

      // send message to channel
      const result = await messageChannel(
        channelId,
        formatPeopleForSlackMessage(peopleSlackIds),
        message
      );

      // return result of slack message
      res.json(result);
    }
  } catch (error) {
    let msg = `Error in /slack/messagePeople: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Presents a set of strategy options to a person which they can choose to have the system track.
 */
slackRouter.post("/presentOptionsToPerson", async (req, res) => {
  try {
    // TODO: check if any params are not included
    // parse inputs from request
    let people = JSON.parse(req.body.people ?? "[]").map(person => { return person.trim() });
    let message = (req.body.message ?? "").trim();
    let options = JSON.parse(req.body.options ?? "[]");
    let selectType = (req.body.selectType ?? "checkbox").trim();

    // TODO: sorting like this is fine for now, but may want to have more control over user order
    // get slack ids for people
    const allPeople = await Person.find({
      "name": {
        "$in": people
      }
    }).sort("role name");

    const peopleSlackIds = allPeople.map(person => {
      return {
        name: person.name,
        slack_id: person.slack_id
      }
    });

    // open a multi-person direct message (MPIM) channel
    // api documentation: https://api.slack.com/methods/conversations.open
    let conversationForPeopleResponse = await app.client.conversations.open({
      return_im: true,
      users: peopleSlackIds.map(person => { return person.slack_id }).join(",")
    });

    // send the message from the request to the MPIM channel
    if (conversationForPeopleResponse["ok"]) {
      const channelId =  conversationForPeopleResponse["channel"]["id"];

      // send message to channel
      const result = await messagePersonWithOptions(
        channelId,
        formatPeopleForSlackMessage(peopleSlackIds),
        message,
        options,
        selectType
      );

      // return result of slack message
      res.json(result);
    }
  } catch (error) {
    let msg = `Error in /slack/presentOptionsToPerson: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Presents a summary to a person, given an list of objects to include.
 * TODO: implement
 */
slackRouter.post("/presentSummaryToPerson", async (req, res) => {
  try {
      res.json({});
  } catch (error) {
    let msg = `Error in /slack/presentOptionsToPerson: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});


/**
 * Create a Slack Slash Command for creating reminders using Organizational Objects.
 * /osRemind @Alex "test message" "before SIG"
 * /osRemind @rawanmohamed2023 @Chase Duvall  "hey rawan/chase! check out this thing: adsasd, asdasd" "after studio"
 * /osRemind #proj-orch-plan-reflect @Alex "test message 2323232" "before OH"
 */
slackRouter.post("/osRemind", async (req, res) => {
  try {
    // parse out request from slack user
    const reqBody = req.body;
    const reminderAuthor = reqBody.user_id;
    const reminderStr = reqBody.text;

    // format reminder string to replace quotes before parsing
    const formattedReminderStr = reminderStr.replace(/“/g, '"').replace(/”/g, '"');

    // parse out message and opportunity
    const betweenQuotesRegexPattern = /(?<=((?<=[\s"]|^)["]))(?:(?=(\\?))\2.)*?(?=\1)/gu;
    let [message, opportunity] = formattedReminderStr.match(betweenQuotesRegexPattern);
    let matchIndices = Array.from(formattedReminderStr.matchAll(betweenQuotesRegexPattern)).map(x => x.index);

    let parsedOpportunity = parseOsOpportunity(opportunity);

    // TODO: should add error handling if we can't parse the opportunity (say that only some things are supported right now)

    // TODO: try this regex pattern for getting the initial matches
    // parse out targets of reminder
    let reminderTargetsArr = formattedReminderStr.slice(0, matchIndices[0] - 1).trim().split("> ");
    const channelRegexPattern = /([#]).*([|])/u;
    const userRegexPattern = /([@]).*([|])/u;
    let parsedTargets = reminderTargetsArr.map(targetStr => {
      // see if we get a channel or user match
      let channelMatch = targetStr.match(channelRegexPattern);
      let userMatch = targetStr.match(userRegexPattern);

      if (channelMatch !== null) {
        return {
          "type": "channel",
          "id": channelMatch[0].replace("|", "").replace("#", "")
        }
      }

      if (userMatch !== null) {
        return {
          "type": "user",
          "id": userMatch[0].replace("|", "").replace("@", "")
        }
      }

      return null;
    });

    // TODO: should add some error handling if any of the targets are null

    // construct final object and return
    let engineObject = {
      author: reminderAuthor,
      targets: parsedTargets,
      message: message,
      opportunity: parsedOpportunity
    };

    res.json(engineObject);
  } catch (error) {
    let msg = `Error in /slack/presentOptionsToPerson: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * osRemind parser
 */
const parseOsOpportunity = (opportunity) => {
  opportunity = opportunity.toLowerCase();

  // parse when into a command using organizational objects
  let osEngineCommand = "";
  switch(opportunity) {
    case "before studio":
      osEngineCommand = `await this.morningOfVenue( 
          await this.venues.find(this.where("name", "Studio Meeting"))
        );`;
      break;
    case "before sig":
      osEngineCommand = `await this.morningOfVenue( 
          await this.venues.find(this.where("kind", "SigMeeting"))
        );`;
      break;
    case "tomorrow":
      // TODO: I think we'd need to write a daysAfter timeHelper for this..
      osEngineCommand = "true";
      break;
    // midweek will ping mentors 4 days before SIG
    case "midweek":
      osEngineCommand = `await this.daysBeforeVenue( 
          await this.venues.find(this.where("kind", "SigMeeting")), 
          4
        );`;
      break;
    default:
      osEngineCommand = "false";
      break;
  }

  return `async function() {
      return ${ osEngineCommand }
    }`
}