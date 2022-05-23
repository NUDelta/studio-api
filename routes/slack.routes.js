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
slackRouter.post("/sendMessageToAllProjChannels", async (req, res) => {
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
    let msg = `Error in /slack/sendMessageToAllProjChannels: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Sends a message to all SIG channels.
 */
// TODO: this should really call the same function that sends data to a single sig channel.
slackRouter.post("/sendMessageToAllSigChannels", async (req, res) => {
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
    let msg = `Error in /slack/sendMessageToAllSigChannels: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Sends message to a project's Slack Channel.
 */
// TODO: factor this out into a controller
slackRouter.post("/sendMessageToProjChannel", async (req, res) => {
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
    let msg = `Error in /slack/sendMessageToProjChannel: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Sends message to a SIG's Slack channel.
 */
// TODO: factor this out into a controller
slackRouter.post("/sendMessageToSigChannel", async (req, res) => {
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
    let msg = `Error in /slack/sendMessageToSigChannel: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * TODO: implement
 * Sends message to a committee's Slack Channel.
 */
slackRouter.post("/sendMessageToCommitteeChannel", async (req, res) => {
  try {
    res.json({});
  } catch (error) {
    let msg = `Error in /slack/sendMessageToCommitteeChannel: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Send a direct message (or a group direct message) to a list of people.
 */
slackRouter.post("/sendMessageToPeople", async (req, res) => {
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
    let msg = `Error in /slack/sendMessageToPeople: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

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