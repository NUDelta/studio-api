import { Router } from "express";

import { SigMeeting } from "../models/venues/sigMeeting.js";
import { Project } from "../models/project/project.js";
import { Sprint } from "../models/processes/sprints.js";
import { DateTime, Info } from "luxon";
import {
  fetchAllVenues, fetchOfficeHours,
  fetchSigMeetings,
  fetchStudioMeetings, fetchVenuesForPerson, fetchVenuesForProject, fetchVenuesForSig
} from "../controllers/venues/fetch.js";

export const venueRouter = new Router();

// TODO: maybe include ability to ask for nextInstance of each venue

/**
 * Fetches all venues.
 */
venueRouter.get("/", async (req, res) => {
  try {
    res.json(await fetchAllVenues());
  } catch (error) {
    let msg = `Error in /venues/: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Fetch all SIG meetings.
 */
venueRouter.get("/sig", async (req, res) => {
  try {
    res.json(await fetchSigMeetings());
  } catch (error) {
    let msg = `Error in /venues/sig: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Fetch all office hours.
 */
venueRouter.get("/officehours", async (req, res) => {
  try {
    res.json(await fetchOfficeHours());
  } catch (error) {
    let msg = `Error in /venues/officehours: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Fetches all Studio venues.
 */
venueRouter.get("/studio", async (req, res) => {
  try {
    res.json(await fetchStudioMeetings());
  } catch (error) {
    let msg = `Error in /venues/studio: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Fetch the relevant venues for a project. These include Studio, SIG, and Office Hours.
 */
venueRouter.get("/forProject", async (req, res) => {
  try {
    // fetch the project's name from the query that we want the sprint log for, and check if valid
    let projectName = req.query.projectName;
    if (projectName === undefined) {
      throw new Error("projectName parameter not specified.");
    }

    res.json(await fetchVenuesForProject(projectName));
  } catch (error) {
    let msg = `Error in /venues/forProject: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Fetch the relevant venues for a person. These include Studio, SIG, and Office Hours.
 * TODO: when new students are modeled, also include things like onboarding mentors.
 */
venueRouter.get("/forPerson", async (req, res) => {
  try {
    // fetch the person's name from the query that we want the relevant social structures for
    let personName = req.query.personName;
    if (personName === undefined) {
      throw new Error("personName parameter not specified.");
    }

    res.json(await fetchVenuesForPerson(personName));
  } catch (error) {
    let msg = `Error in /venues/forPerson: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Fetch the relevant venues for a SIG. These include SIG and Office Hours.
 */
venueRouter.get("/forSig", async (req, res) => {
  try {
    // fetch the person's name from the query that we want the relevant social structures for
    let sigName = req.query.sigName;
    if (sigName === undefined) {
      throw new Error("sigName parameter not specified.");
    }

    res.json(await fetchVenuesForSig(sigName));
  } catch (error) {
    let msg = `Error in /venues/forSig: ${ error }`;
    console.error(msg)
    res.send(msg);
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
    let relevantSigVenueInfo = await SigMeeting.findOne({
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
    let msg = `Error in /venues/firstSig: ${ error }`;
    console.error(msg)
    res.send(msg);
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
    let relevantSigVenueInfo = await SigMeeting.findOne({
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
    let msg = `Error in /venues/lastSig: ${ error }`;
    console.error(msg)
    res.send(msg);
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