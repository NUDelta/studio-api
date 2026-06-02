import { Router } from 'express';
import { app } from '../index.js';

import { Person } from '../models/people/person.js';
import { Faculty } from '../models/people/faculty.js';
import { PhdStudent } from '../models/people/phdstudent.js';
import { NonPhdStudent } from '../models/people/nonphdstudent.js';

import { Project } from '../models/project/project.js';
import { SigStructure } from '../models/social-structures/sig.js';
import {
  messageChannel,
  messagePersonWithOptions,
} from '../controllers/communication/slack/send.js';
import { formatPeopleForSlackMessage } from '../controllers/communication/slack/payloadGenerator.js';
import {
  blockHeader,
  blockDivider,
  blockButton,
} from '../controllers/communication/slack/blockWrapper.js';

export const slackRouter = new Router();

/*
 TODO: factor all logic out into a controller with generic functions:
  directMessage() [also supports multiple ppl passed in as an array]; channelMessage().
  Routes for specific behavior are ok (e.g., message all projs or SIGs
 */

/**
 * Get all channels (public and private) that Slack Bot can access.
 */
slackRouter.get('/getAllChannels', async (req, res) => {
  try {
    let conversationsList = [];

    // keep getting responses while a next cursor exists
    let nextCursorExists = true;
    let nextCursorStr = '';
    let error;

    while (nextCursorExists) {
      // get the next set of conversations based on the current cursor
      let conversationListResponse = await app.client.conversations.list({
        types: 'public_channel,private_channel',
        cursor: nextCursorStr,
      });

      // check if response is ok before adding to people's list
      if (conversationListResponse['ok']) {
        conversationsList = conversationsList.concat(
          conversationListResponse.channels
        );

        // get next cursor
        nextCursorStr =
          conversationListResponse['response_metadata']['next_cursor'];
        nextCursorExists = nextCursorStr !== '';
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
    let msg = `Error in /slack/getAllChannels: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

/**
 * Get all people in the team.
 */
slackRouter.get('/getAllPeople', async (req, res) => {
  try {
    let peopleList = [];

    // keep getting responses while a next cursor exists
    let nextCursorExists = true;
    let nextCursorStr = '';
    let error;

    while (nextCursorExists) {
      // get the next set of people based on the current cursor
      let peopleListResponse = await app.client.users.list({
        include_locale: true,
        cursor: nextCursorStr,
      });

      // check if response is ok before adding to people's list
      if (peopleListResponse['ok']) {
        peopleList = peopleList.concat(peopleListResponse.members);

        // get next cursor
        nextCursorStr = peopleListResponse['response_metadata']['next_cursor'];
        nextCursorExists = nextCursorStr !== '';
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
    let msg = `Error in /slack/getAllPeople: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

/**
 * Sends a message to all project channels.
 */
// TODO: this should really call the same function that sends data to a single project channel.
slackRouter.post('/messageAllProjectChannels', async (req, res) => {
  try {
    // parse inputs
    let message = (req.body.message ?? '').trim();

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
          slack_id: student.slack_id,
        };
      });

      // create promises to send message to channel
      messagesToSend.push(
        messageChannel(
          channelName,
          formatPeopleForSlackMessage(students),
          message
        )
      );
    }

    // send messages, and return result to caller
    res.json(await Promise.all(messagesToSend));
  } catch (error) {
    let msg = `Error in /slack/messageAllProjectChannels: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

/**
 * Sends a message to all SIG channels.
 */
// TODO: this should really call the same function that sends data to a single sig channel.
slackRouter.post('/messageAllSigChannels', async (req, res) => {
  try {
    // parse inputs
    let message = (req.body.message ?? '').trim();

    // fetch project info
    let allSigs = await SigStructure.find({})
      .populate('members')
      .populate('sig_head');
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
          slack_id: student.slack_id,
        };
      });

      // create promises to send message to channel
      messagesToSend.push(
        messageChannel(
          channelName,
          formatPeopleForSlackMessage(students),
          message
        )
      );
    }

    // send messages, and return result to caller
    res.json(await Promise.all(messagesToSend));
  } catch (error) {
    let msg = `Error in /slack/messageAllSigChannels: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

/**
 * Sends message to a project's Slack Channel.
 */
// TODO: factor this out into a controller
slackRouter.post('/messageProjectChannel', async (req, res) => {
  try {
    // TODO: check if inputs are valid
    // parse inputs
    let projName = (req.body.projName ?? '').trim();
    let message = (req.body.message ?? '').trim();

    // fetch project info
    let relevantProject = await Project.findOne({ name: projName })
      .populate('students')
      .populate('sig_head')
      .populate('faculty_mentor');
    if (relevantProject === null) {
      throw new Error(`no project found for ${projName}`);
    }

    // get channel name
    let channelName = relevantProject.slack_channel;

    // get people and their names
    let students = relevantProject.students.map((student) => {
      return {
        name: student.name,
        slack_id: student.slack_id,
      };
    });

    let sigHead = {
      name: relevantProject.sig_head.name,
      slack_id: relevantProject.sig_head.slack_id,
    };

    let facultyMentor = {
      name: relevantProject.faculty_mentor.name,
      slack_id: relevantProject.faculty_mentor.slack_id,
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
    let msg = `Error in /slack/messageProjectChannel: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

/**
 * Sends message to a SIG's Slack channel.
 */
// TODO: factor this out into a controller
slackRouter.post('/messageSigChannel', async (req, res) => {
  try {
    // TODO: check if inputs are valid
    // parse inputs
    let sigName = (req.body.sigName ?? '').trim();
    let message = (req.body.message ?? '').trim();

    // TODO: replace this with the SIG social structure
    // get SIG info for project name
    let relevantSigVenueInfo = await SigStructure.findOne({
      name: {
        $regex: sigName,
        $options: 'i',
      },
    })
      .populate('sig_head')
      .populate('members');

    if (relevantSigVenueInfo === null) {
      throw new Error(`no SIG found for ${sigName}`);
    }

    let channelName = relevantSigVenueInfo.slack_channel;

    // get students and their names
    let students = relevantSigVenueInfo.members.map((student) => {
      return {
        name: student.name,
        slack_id: student.slack_id,
      };
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
    let msg = `Error in /slack/messageSigChannel: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

/**
 * TODO: implement
 * Sends message to a committee's Slack Channel.
 */
slackRouter.post('/messageCommitteeChannel', async (req, res) => {
  try {
    res.json({});
  } catch (error) {
    let msg = `Error in /slack/messageCommitteeChannel: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

/**
 * Send a direct message (or a group direct message) to a list of people.
 */
slackRouter.post('/messagePeople', async (req, res) => {
  try {
    console.log(req.body.people);

    // parse inputs from request
    let people = JSON.parse(req.body.people ?? '[]').map((person) => {
      return person.trim();
    });
    let message = (req.body.message ?? '').trim();

    // TODO: sorting like this is fine for now, but may want to have more control over user order
    // get slack ids for people
    const allPeople = await Person.find({
      name: {
        $in: people,
      },
    }).sort('role name');

    // get Kapil separately to always have as a recipient
    const kapil = await Person.findOne({ name: 'Kapil Garg' });
    const kapilSlackId = {
      name: kapil.name,
      slack_id: kapil.slack_id,
    };
    const peopleSlackIds = allPeople.map((person) => {
      return {
        name: person.name,
        slack_id: person.slack_id,
      };
    });

    // open a multi-person direct message (MPIM) channel
    // api documentation: https://api.slack.com/methods/conversations.open
    let conversationForPeopleResponse = await app.client.conversations.open({
      return_im: true,
      users: [...peopleSlackIds, kapilSlackId]
        .map((person) => {
          return person.slack_id;
        })
        .join(','),
    });

    // send the message from the request to the MPIM channel
    if (conversationForPeopleResponse['ok']) {
      const channelId = conversationForPeopleResponse['channel']['id'];

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
    let msg = `Error in /slack/messagePeople: ${error}`;
    console.error(msg);
    res.json(msg);
  }
});

/**
 * Presents a set of strategy options to a person which they can choose to have the system track.
 */
slackRouter.post('/presentOptionsToPerson', async (req, res) => {
  try {
    // TODO: check if any params are not included
    // parse inputs from request
    let people = JSON.parse(req.body.people ?? '[]').map((person) => {
      return person.trim();
    });
    let message = (req.body.message ?? '').trim();
    let options = JSON.parse(req.body.options ?? '[]');
    let selectType = (req.body.selectType ?? 'checkbox').trim();

    // TODO: sorting like this is fine for now, but may want to have more control over user order
    // get slack ids for people
    const allPeople = await Person.find({
      name: {
        $in: people,
      },
    }).sort('role name');

    const peopleSlackIds = allPeople.map((person) => {
      return {
        name: person.name,
        slack_id: person.slack_id,
      };
    });

    // open a multi-person direct message (MPIM) channel
    // api documentation: https://api.slack.com/methods/conversations.open
    let conversationForPeopleResponse = await app.client.conversations.open({
      return_im: true,
      users: peopleSlackIds
        .map((person) => {
          return person.slack_id;
        })
        .join(','),
    });

    // send the message from the request to the MPIM channel
    if (conversationForPeopleResponse['ok']) {
      const channelId = conversationForPeopleResponse['channel']['id'];

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
    let msg = `Error in /slack/presentOptionsToPerson: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

/**
 * Sends a CAP note practice reminder to a Slack channel with an anonymous help-seek button.
 * Body params:
 *   practiceTitle       string  short title of the practice (e.g. "Sprint Log Reflection")
 *   practiceDescription string  full text of the practice prompt
 *   dueDate             string  optional due date string (defaults to "end of this week")
 *   channelTarget       string  "all-sigs" | "all-projects" | a specific Slack channel ID/name
 */
slackRouter.post('/messagePracticeReminder', async (req, res) => {
  try {
    const practiceTitle = (req.body.practiceTitle ?? '').trim();
    const practiceDescription = (req.body.practiceDescription ?? '').trim();
    const dueDate = (req.body.dueDate ?? 'end of this week').trim();
    const channelTarget = (req.body.channelTarget ?? '').trim();

    if (!practiceTitle || !practiceDescription || !channelTarget) {
      return res
        .status(400)
        .send('practiceTitle, practiceDescription, and channelTarget are required.');
    }

    const practiceBlocks = [
      blockHeader('CAP Note Practice Reminder'),
      blockDivider(),
      {
        type: 'section',
        text: { type: 'mrkdwn', text: `*${practiceTitle}*` },
      },
      {
        type: 'section',
        text: { type: 'mrkdwn', text: practiceDescription },
      },
      {
        type: 'section',
        text: { type: 'mrkdwn', text: `*Due:* ${dueDate}` },
      },
      blockDivider(),
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'Stuck or need support? Use the button below to anonymously share your question with peers in *#help-seek*.',
        },
      },
      blockButton('I need help with this practice', 'help-seek-trigger', practiceTitle),
    ];

    // resolve target channels + people to mention
    let targets = [];
    if (channelTarget === 'all-sigs') {
      const allSigs = await SigStructure.find({}).populate('members');
      targets = allSigs.map((sig) => ({
        channel: sig.slack_channel,
        people: sig.members.map((m) => ({ name: m.name, slack_id: m.slack_id })),
      }));
    } else if (channelTarget === 'all-projects') {
      const allProjects = await Project.find({}).populate('students');
      targets = allProjects.map((proj) => ({
        channel: proj.slack_channel,
        people: proj.students.map((s) => ({ name: s.name, slack_id: s.slack_id })),
      }));
    } else {
      targets = [{ channel: channelTarget, people: [] }];
    }

    const fallbackText = `CAP Note Practice Reminder: ${practiceTitle} — due ${dueDate}.`;

    const messagesToSend = targets.map(({ channel, people }) => {
      const mentionStr =
        people.length > 0 ? `${formatPeopleForSlackMessage(people)}\n` : '';
      const blocks = mentionStr
        ? [
            { type: 'section', text: { type: 'mrkdwn', text: mentionStr } },
            ...practiceBlocks,
          ]
        : practiceBlocks;

      return app.client.chat.postMessage({
        channel,
        text: `${mentionStr}${fallbackText}`,
        blocks,
      });
    });

    res.json(await Promise.all(messagesToSend));
  } catch (error) {
    const msg = `Error in /slack/messagePracticeReminder: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

/**
 * Notifies the SIG head that an AI draft CAP note is ready for review.
 * In development, sends to DEV_DM_SLACK_ID instead of the real SIG head.
 * Body: { capNoteId, project, sigAbbreviation, sigDate, issueTitles: string[] }
 */
slackRouter.post('/notifyDraftReady', async (req, res) => {
  try {
    const { capNoteId, project, sigAbbreviation, sigDate, issueTitles = [] } = req.body;
    if (!capNoteId || !project || !sigAbbreviation) {
      return res.status(400).json({ error: 'capNoteId, project, and sigAbbreviation are required' });
    }

    const isnUrl = process.env.ISN_URL || 'http://localhost:3000';
    const capNoteUrl = `${isnUrl}/cap-notes/${capNoteId}`;
    const dateStr = sigDate ? new Date(sigDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : '';

    // Resolve recipient: dev overrides to tester ID, prod uses real SIG head
    let recipientSlackId;
    if (process.env.NODE_ENV === 'development' && process.env.DEV_DM_SLACK_ID) {
      recipientSlackId = process.env.DEV_DM_SLACK_ID;
    } else {
      const sig = await SigStructure.findOne({ abbreviation: sigAbbreviation }).populate('sig_head');
      if (!sig?.sig_head?.slack_id) {
        return res.status(404).json({ error: `No SIG head found for ${sigAbbreviation}` });
      }
      recipientSlackId = sig.sig_head.slack_id;
    }

    const issueLines = issueTitles.length > 0
      ? issueTitles.map(t => `• ${t}`).join('\n')
      : '_No issues identified_';

    const blocks = [
      blockHeader(`CAP Note Draft Ready — ${project}`),
      blockDivider(),
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: dateStr ? `*Meeting:* ${dateStr}` : `*Project:* ${project}`
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Issues drafted:*\n${issueLines}`
        }
      },
      blockDivider(),
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `Review, refine, and finalize the notes when ready. Once finalized, students will receive them one hour after the last save.`
        }
      },
      {
        type: 'section',
        text: { type: 'mrkdwn', text: `<${capNoteUrl}|Open CAP Note →>` }
      }
    ];

    const result = await app.client.chat.postMessage({
      channel: recipientSlackId,
      text: `CAP Note draft ready for ${project}${dateStr ? ` (${dateStr})` : ''} — ${capNoteUrl}`,
      blocks
    });

    res.json({ success: true, ts: result.ts, channel: result.channel });
  } catch (error) {
    console.error('Error in /slack/notifyDraftReady:', error);
    res.status(500).json({ error: String(error) });
  }
});

/**
 * Updates the draft-ready DM to reflect finalized status.
 * Body: { ts, channel, project, sigDate, issueTitles: string[] }
 */
slackRouter.post('/updateDraftStatus', async (req, res) => {
  try {
    const { ts, channel, project, sigDate, issueTitles = [] } = req.body;
    if (!ts || !channel) {
      return res.status(400).json({ error: 'ts and channel are required' });
    }

    const isnUrl = process.env.ISN_URL || 'http://localhost:3000';
    const dateStr = sigDate ? new Date(sigDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : '';
    const issueLines = issueTitles.length > 0
      ? issueTitles.map(t => `• ${t}`).join('\n')
      : '_No issues_';

    const blocks = [
      blockHeader(`✅ Closed — ${project}`),
      blockDivider(),
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: dateStr ? `*Meeting:* ${dateStr}` : `*Project:* ${project}`
        }
      },
      {
        type: 'section',
        text: { type: 'mrkdwn', text: `*Issues finalized:*\n${issueLines}` }
      },
      blockDivider(),
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `Notes have been finalized and will be sent to students one hour after the last save.`
        }
      }
    ];

    await app.client.chat.update({
      channel,
      ts,
      text: `CAP Note finalized for ${project}${dateStr ? ` (${dateStr})` : ''} — sending to students soon.`,
      blocks
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Error in /slack/updateDraftStatus:', error);
    res.status(500).json({ error: String(error) });
  }
});

/**
 * Presents a summary to a person, given an list of objects to include.
 * TODO: implement
 */
slackRouter.post('/presentSummaryToPerson', async (req, res) => {
  try {
    res.json({});
  } catch (error) {
    let msg = `Error in /slack/presentOptionsToPerson: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});
