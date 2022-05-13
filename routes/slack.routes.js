// TODO: consider having more generic functions: directMessage() [also supports multiple ppl passed in as an array]; channelMessage()

import { Router } from "express";
import { app } from "../index.js";

import { Person } from "../models/people/person.js";
import { Faculty } from "../models/people/faculty.js";
import { PhdStudent } from "../models/people/phdstudent.js";
import { NonPhdStudent } from "../models/people/nonphdstudent.js";

import { Project } from "../models/project/project.js";
import { SIG } from "../models/venues/sig.js";

export const slackRouter = new Router();

/**
 * Get all channels (public and private) that Slack Bot can access.
 */
slackRouter.get("/getAllChannels", async (req, res) => {
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

  // return response
  if (error !== undefined) {
    res.json(error)
  } else {
    res.json(conversationsList);
  }
});

/**
 * Get all people in the team.
 */
slackRouter.get("/getAllPeople", async (req, res) => {
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

  // return response
  if (error !== undefined) {
    res.json(error)
  } else {
    res.json(peopleList);
  }
});

/**
 * Sends a message to all project channels.
 */
// TODO: this should really call the same function that sends data to a single project channel.
slackRouter.post("/sendMessageToAllProjChannels", async (req, res) => {
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

    // send message to channel
    messagesToSend.push(app.client.chat.postMessage({
      channel: channelName,
      text: `Hey ${formatPeopleForSlackMessage(students)}! ${ message }`
    }));
  }

  res.json(await Promise.all(messagesToSend));
});

/**
 * Sends a message to all SIG channels.
 */
// TODO: this should really call the same function that sends data to a single sig channel.
slackRouter.post("/sendMessageToAllSigChannels", async (req, res) => {
  // parse inputs
  let message = (req.body.message ?? "").trim();

  // fetch project info
  let allSigs = await SIG.find({}).populate("sig_members");
  if (allSigs === null) {
    throw new Error(`no projects found`);
  }

  // iterate over each project and send message
  let messagesToSend = [];
  for (let sig of allSigs) {
    // get channel name
    let channelName = sig.slack_channel;

    // get people and their names
    let students = sig.sig_members.map((student) => {
      return {
        name: student.name,
        slack_id: student.slack_id
      }
    });

    // send message to channel
    messagesToSend.push(app.client.chat.postMessage({
      channel: channelName,
      text: `Hey ${formatPeopleForSlackMessage(students)}! ${ message }`
    }));
  }

  res.json(await Promise.all(messagesToSend));
});

/**
 * Sends message to a project's Slack Channel.
 */
// TODO: factor this out into a controller
slackRouter.post("/sendMessageToProjChannel", async (req, res) => {
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
  const result = await app.client.chat.postMessage({
    channel: channelName,
    text: `Hey ${formatPeopleForSlackMessage(students)}! ${ message }`
  });

  // return result of slack message
  res.json(result);
});

/**
 * Sends message to a SIG's Slack channel.
 */
// TODO: factor this out into a controller
slackRouter.post("/sendMessageToSigChannel", async (req, res) => {
  // TODO: check if inputs are valid
  // parse inputs
  let sigName = (req.body.sigName ?? "").trim();
  let message = (req.body.message ?? "").trim();

  // get SIG info for project name
  let relevantSigVenueInfo = await SIG.findOne({
    name: {
      "$regex": sigName,
      "$options": "i"
    }
  }).populate("sig_head").populate("sig_members");
  if (relevantSigVenueInfo === null) {
    throw new Error(`no SIG found for ${ sigName }`);
  }

  let channelName = relevantSigVenueInfo.slack_channel;

  // get people and their names
  let students = relevantSigVenueInfo.sig_members.map((student) => {
    return {
      name: student.name,
      slack_id: student.slack_id
    }
  });

  // send message to channel
  const result = await app.client.chat.postMessage({
    channel: channelName,
    text: `Hey ${formatPeopleForSlackMessage(students)}! ${ message }`
  });

  // return result of slack message
  res.json(result);
});

/**
 * TODO: implement
 * Sends message to a committee's Slack Channel.
 */
slackRouter.post("/sendMessageToCommitteeChannel", async (req, res) => {
  res.json({});
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
      const result = await app.client.chat.postMessage({
        channel: channelId,
        text: `Hey ${formatPeopleForSlackMessage(peopleSlackIds)}! ${ message }`
      });

      // return result of slack message
      res.json(result);
    }
  } catch (error) {
    // return error if any issues occur
    res.json(`Error in /sendMessageToPeople: ${ error }`);
  }
});


/**
 * Returns a list of slack id's when provided a list of people objects, which can be used to ping each person in a channel or direct message in Slack.
 * @param peopleList list of people objects. each person must contain a slack_id field.
 * @returns {string} string with each person's slack_id concatenated together.
 */
const formatPeopleForSlackMessage = (peopleList) => {
  return peopleList.map((person) => {
    return `<@${ person.slack_id }>`
  }).join(" ");
}