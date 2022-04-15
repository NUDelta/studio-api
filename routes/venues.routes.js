import { Router } from "express";
import bodyParser from "body-parser";

import { Venue } from "../models/venues/venue.js";
import { Studio } from "../models/venues/studio.js";
import { SIG } from "../models/venues/sig.js";
import { OfficeHours } from "../models/venues/officeHours.js";
import { Project } from "../models/project/project.js";
import { Sprint } from "../models/processes/sprints.js";
import { DateTime, Info } from "luxon";

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
  // TODO: this should be computing the time/date of the next venue (I think) and send that over to the orchestration engine
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
 * TODO: I don't think this is quite right
 * TODO: this should be a separate controller
 * TODO: if not given a project input, return the first SIG meeting for each SIG
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
    let weekOfFirstSig = DateTime.fromJSDate(relevantProcess.start_day);

    // shift to day of week based on whn SIG is
    let dayOfFirstSig = weekOfFirstSig.set({
      weekday: Info.weekdays().indexOf(relevantSigVenueInfo.day_of_week) + 1}
    );

    // add timezone info
    let venueTz = relevantSigVenueInfo.timezone;
    let timezoneShiftedSigDay = dayOfFirstSig.setZone(venueTz);

    // create dates with start and end time
    let [startHours, startMinutes, startSeconds] = relevantSigVenueInfo.start_time.split(":");
    let firstSigStartTime = timezoneShiftedSigDay.set({
      hour: startHours,
      minute: startMinutes,
      second: startSeconds
    });

    let [endHours, endMinutes, endSeconds] = relevantSigVenueInfo.end_time.split(":");
    let firstSigEndTime = timezoneShiftedSigDay.set({
      hour: endHours,
      minute: endMinutes,
      second: endSeconds
    });

    // return as UTC timestamps
    res.json({
      sig_name: sigName,
      start_time: firstSigStartTime.toUTC().toJSDate(),
      end_time: firstSigEndTime.toUTC().toJSDate()
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
    let weekOfLastSig = DateTime.fromJSDate(relevantProcess.start_day);

    // shift to day of week based on whn SIG is
    let dayOfLastSig = weekOfLastSig.set({
      weekday: Info.weekdays().indexOf(relevantSigVenueInfo.day_of_week) + 1}
    );

    // add timezone info
    let venueTz = relevantSigVenueInfo.timezone;
    let timezoneShiftedSigDay = dayOfLastSig.setZone(venueTz);

    // create dates with start and end time
    let [startHours, startMinutes, startSeconds] = relevantSigVenueInfo.start_time.split(":");
    let lastSigStartTime = timezoneShiftedSigDay.set({
      hour: startHours,
      minute: startMinutes,
      second: startSeconds
    });

    let [endHours, endMinutes, endSeconds] = relevantSigVenueInfo.end_time.split(":");
    let lastSigEndTime = timezoneShiftedSigDay.set({
      hour: endHours,
      minute: endMinutes,
      second: endSeconds
    });

    // return as UTC timestamps
    res.json({
      sig_name: sigName,
      start_time: lastSigStartTime.toUTC().toJSDate(),
      end_time: lastSigEndTime.toUTC().toJSDate()
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
 * TODO: probably not needed if using Luxon.
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