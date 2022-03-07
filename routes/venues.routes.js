import { Router } from "express";
import bodyParser from "body-parser";

import { Venue } from "../models/venues/venue.js";
import { Studio } from "../models/venues/studio.js";
import { SIG } from "../models/venues/sig.js";
import { OfficeHours } from "../models/venues/officeHours.js";
import { Project } from "../models/project/project.js";
import { Sprint } from "../models/processes/sprints.js";

export const venueRouter = new Router();

// fetch all venues
venueRouter.get("/", async (req, res) => {
  try {
    let allVenues = await Venue.find();
    res.json(allVenues);
  } catch (error) {
    res.send(`Error when fetching all venues: ${ error }`);
  }
});

// fetch studio meeting time
venueRouter.get("/studio", async (req, res) => {
  try {
    let studioMeeting = await Studio.find();
    res.json(studioMeeting);
  } catch (error) {
    res.send(`Error when fetching studio meeting: ${ error }`);
  }
});

// fetch all SIG meetings
venueRouter.get("/sig", async (req, res) => {
  try {
    let allSigMeetings = await SIG.find().populate("sig_head").populate("sig_members");
    res.json(allSigMeetings);
  } catch (error) {
    res.send(`Error when fetching sig meetings: ${ error }`);
  }
});

/**
 * Fetches the start and end time of the first SIG meeting (the start of Sprint 1) for a project.
 * // TODO: I don't think this is quite right
 * // TODO: this should be a separate controller
 */
venueRouter.get("/sig/firstSig", async (req, res) => {
  try {
    // parse inputs
    let projName = (req.query.projName ?? "").trim();

    // fetch project info
    let relevantProject = await Project.findOne( { name: projName })
      .populate('students')
      .populate('sig_head')
      .populate('faculty_mentor');
    if (relevantProject === null) {
      throw new Error(`no project found for ${ projName }`);
    }

    // get SIG info for project name
    let sigName = relevantProject.sig_name;
    let relevantSigVenueInfo = await SIG.findOne({
      name: {
        "$regex": sigName,
        "$options": "i"
      }
    });
    if (relevantSigVenueInfo === null) {
      throw new Error(`no SIG found for ${ projName }`);
    }

    // get processes to figure out when last sprint starts
    let relevantProcess = await Sprint.findOne({
      name: "Sprint 1"
    });
    if (relevantProcess === null) {
      throw new Error(`no sprint info found for Sprint 1`);
    }

    // compute day for venue by first getting the start of the week
    let weekOfLastSig = new Date(relevantProcess.start_day);
    weekOfLastSig.setDate(
      relevantProcess.start_day.getDate() - relevantProcess.start_day.getDay()
    );

    // shift day based on day of week when SIG is
    let firstSigDate = new Date(weekOfLastSig);
    firstSigDate.setDate(
      firstSigDate.getDate() + dayOfWeekToIndex(relevantSigVenueInfo.day_of_week)
    );
    let firstSigStartTime = new Date(firstSigDate);
    firstSigStartTime.setHours(
      relevantSigVenueInfo.start_time.getHours(),
      relevantSigVenueInfo.start_time.getMinutes()
    );
    let finalSigEndTime = new Date(firstSigDate);
    finalSigEndTime.setHours(
      relevantSigVenueInfo.end_time.getHours(),
      relevantSigVenueInfo.end_time.getMinutes()
    );

    res.json({
      start_time: firstSigStartTime,
      end_time: finalSigEndTime
    });
  } catch (error) {
    res.send(`Error when fetching last sig meetings: ${ error }`);
  }
});

/**
 * Fetches the start and end time of the last SIG meeting (the start of Sprint 5) for a project.
 * TODO: this breaks for fall quarter where sprint 5 is 2 weeks and there is a SIG meeting in between.
 */
venueRouter.get("/sig/lastSig", async (req, res) => {
  try {
    // parse inputs
    let projName = (req.query.projName ?? "").trim();

    // fetch project info
    let relevantProject = await Project.findOne( { name: projName })
      .populate('students')
      .populate('sig_head')
      .populate('faculty_mentor');
    if (relevantProject === null) {
      throw new Error(`no project found for ${ projName }`);
    }

    // get SIG info for project name
    let sigName = relevantProject.sig_name;
    let relevantSigVenueInfo = await SIG.findOne({
      name: {
        "$regex": sigName,
        "$options": "i"
      }
    });
    if (relevantSigVenueInfo === null) {
      throw new Error(`no SIG found for ${ projName }`);
    }

    // get processes to figure out when last sprint starts
    let relevantProcess = await Sprint.findOne({
      name: "Sprint 5"
    });
    if (relevantProcess === null) {
      throw new Error(`no sprint info found for Sprint 5`);
    }

    // compute day for venue by first getting the start of the week
    let weekOfLastSig = new Date(relevantProcess.start_day);
    weekOfLastSig.setDate(
      relevantProcess.start_day.getDate() - relevantProcess.start_day.getDay()
    );

    // shift day based on day of week when SIG is
    let finalSigDate = new Date(weekOfLastSig);
    finalSigDate.setDate(
      finalSigDate.getDate() + dayOfWeekToIndex(relevantSigVenueInfo.day_of_week)
    );
    let finalSigStartTime = new Date(finalSigDate);
    finalSigStartTime.setHours(
      relevantSigVenueInfo.start_time.getHours(),
      relevantSigVenueInfo.start_time.getMinutes()
    );
    let finalSigEndTime = new Date(finalSigDate);
    finalSigEndTime.setHours(
      relevantSigVenueInfo.end_time.getHours(),
      relevantSigVenueInfo.end_time.getMinutes()
    );

    res.json({
      start_time: finalSigStartTime.toJSON(),
      end_time: finalSigEndTime.toJSON()
    });
  } catch (error) {
    res.send(`Error when fetching last sig meetings: ${ error }`);
  }
});

// fetch all office hour times
venueRouter.get("/officehours", async (req, res) => {
  try {
    let allOfficeHours = await OfficeHours.find();
    res.json(allOfficeHours);
  } catch (error) {
    res.send(`Error when fetching office hour times: ${ error }`);
  }
});

// TODO: implement a generic venue route that returns whatever venue is asked for

/**
 * Converts a string day of the week to an integer index.
 *
 * @param dayString
 * @return {number}
 */
const dayOfWeekToIndex = function (dayString) {
  let dayIndex;
  switch (dayString) {
    case "Sunday":
      dayIndex = 0;
      break;
    case "Monday":
      dayIndex = 1;
      break;
    case "Tuesday":
      dayIndex = 2;
      break;
    case "Wednesday":
      dayIndex = 3;
      break;
    case "Thursday":
      dayIndex = 4;
      break;
    case "Friday":
      dayIndex = 5;
      break;
    case "Saturday":
      dayIndex = 6;
      break;
  }

  return dayIndex;
};