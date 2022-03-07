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
  let conversationList = await app.client.conversations.list({
    types: "public_channel,private_channel"
  });
  res.json(conversationList.channels);
});

/**
 * Get all people in the team.
 */
slackRouter.get("/getAllPeople", async (req, res) => {
  let peopleList = await app.client.users.list({
    include_locale: true
  });
  res.json(peopleList.members);
});

/**
 * Sends a message to all project channels.
 */
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
      text: `Hey ${
        students.map((student) => {
          return `${ student.name }`
        }).join(", ")
      }! ${ message }`
    }));
  }

  res.json(await Promise.all(messagesToSend));
});

/**
 * Sends a message to all SIG channels.
 */
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
      text: `Hey ${
        students.map((student) => {
          return `${ student.name }`
        }).join(", ")
      }! ${ message }`
    }));
  }

  res.json(await Promise.all(messagesToSend));
});

/**
 * Sends message to a project's Slack Channel.
 */
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
    text: `Hey ${
      students.map((student) => {
        return `${ student.name }`
      }).join(", ")
    }! ${ message }`
  });

  // return result of slack message
  res.json(result);
});

/**
 * Sends message to a SIG's Slack channel.
 */
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
    text: `Hey ${
      students.map((student) => {
        return `${ student.name }`
      }).join(", ")
    }! ${ message }`
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
 * TODO: implement
 * Sends message to a person's DM.
 */
slackRouter.post("/sendMessageToPerson", async (req, res) => {
  res.json({});
});
