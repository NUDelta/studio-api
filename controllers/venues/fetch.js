/**
 * This file is responsible for fetching venues from the database.
 */

import { Venue } from "../../models/venues/venue.js";
import { SigMeeting } from "../../models/venues/sigMeeting.js";
import { StudioMeeting } from "../../models/venues/studioMeeting.js";
import { OfficeHours } from "../../models/venues/officeHours.js";

import { Person } from "../../models/people/person.js";
import { Project } from "../../models/project/project.js";
import { SigStructure } from "../../models/social-structures/sig.js";

import { getFirstInstanceOfVenue, getLastInstanceOfVenue } from "./computeSpecificInstance.js";

/**
 * Fetches all venues.
 * @returns {Promise<>} promise that if resolved, returns a list of all venues.
 */
export const fetchAllVenues = async () => {
  try {
    // get all venues
    return (await Promise.all([
      fetchSigMeetings(),
      fetchOfficeHours(),
      fetchStudioMeetings(),
    ])).flat();
  } catch (error) {
    console.error(`Error in fetchAllVenues: ${ error }`);
    return error;
  }
};

/**
 * Fetches SIG meetings. If no filter is provided, fetches all.
 * @param filters optional parameter for filters to pass to the query.
 * @returns {Promise<>} promise that if resolved, returns a list of SIG meetings.
 */
export const fetchSigMeetings = async (filters={}) => {
  try {
    // get all SIG Meetings
    return await SigMeeting.find(filters)
      .populate("attendees")
      .populate("projects");
  } catch (error) {
    console.error(`Error in fetchSigMeetings: ${ error }`);
    return error;
  }
};

/**
 * Fetches Office Hours. If no filter is provided, fetches all.
 * @param filters optional parameter for filters to pass to the query.
 * @returns {Promise<>} promise that if resolved, returns a list of Office Hours.
 */
export const fetchOfficeHours = async (filters={}) => {
  try {
    // get all Office Hours
    return await OfficeHours.find(filters)
      .populate("attendees")
      .populate("projects");
  } catch (error) {
    console.error(`Error in fetchOfficeHours: ${ error }`);
    return error;
  }
};

/**
 * Fetches Studio meetings. If no filter is provided, fetches all.
 * @param filters optional parameter for filters to pass to the query.
 * @returns {Promise<>} promise that if resolved, returns a list of studio meetings.
 */
export const fetchStudioMeetings = async (filters={}) => {
  try {
    // get all Studio Meetings
    return await StudioMeeting.find(filters)
      .populate("attendees");
  } catch (error) {
    console.error(`Error in fetchStudioMeetings: ${ error }`);
    return error;
  }
};

/**
 * Fetches all venues that a person attends.
 * @param personName string name of person to find venues for.
 * @returns {Promise<>} promise that if resolved, returns a list of venues relevant to personName.
 */
export const fetchVenuesForPerson = async (personName) => {
  try {
    // get the person object, given their name
    let relevantPerson = await Person.findOne( { name: personName })
    if (relevantPerson === null) {
      throw new Error(`no person found for ${ personName }`);
    }

    // get all social structures that have the person using optional filter
    return (await Promise.all([
      fetchSigMeetings({
        attendees: relevantPerson._id
      }),
      fetchOfficeHours({
        attendees: relevantPerson._id
      }),
      fetchStudioMeetings()
    ])).flat();
  } catch (error) {
    console.error(`Error in fetchVenuesForPerson: ${ error }`);
    return error;
  }
};

/**
 * Fetches all venues that a person attends.
 * @param projectName string name of project to find venues for.
 * @returns {Promise<>} promise that if resolved, returns a list of venues relevant to projectName.
 */
export const fetchVenuesForProject = async (projectName) => {
  try {
    // get the project object, given its name
    let relevantProject = await Project.findOne( { name: projectName })
    if (relevantProject === null) {
      throw new Error(`no project found for ${ projectName }`);
    }

    // get all social structures that have the person using optional filter
    return (await Promise.all([
      fetchSigMeetings({
        projects: relevantProject._id
      }),
      fetchOfficeHours({
        projects: relevantProject._id
      }),
      fetchStudioMeetings()
    ])).flat();
  } catch (error) {
    console.error(`Error in fetchVenuesForProject: ${ error }`);
    return error;
  }
};

/**
 * Fetches all venues for a SIG.
 * @param sigName string name of SIG to find venues for.
 * @returns {Promise<>} promise that if resolved, returns a list of venues relevant to sigName.
 */
export const fetchVenuesForSig = async (sigName) => {
  try {
    // get all projects in the SIG
    let relevantSig = await SigStructure.findOne({ name: sigName }).populate("members");
    if (relevantSig === null) {
      throw new Error(`no project found for ${ sigName }`);
    }

    // get all social structures that have found projects using optional filter
    return (await Promise.all([
      fetchSigMeetings({
        attendees: {
          $in: relevantSig.members
        }
      }),
      fetchOfficeHours({
        attendees: {
          $in: relevantSig.members
        }
      }),
      fetchStudioMeetings()
    ])).flat();
  } catch (error) {
    console.error(`Error in fetchVenuesForSig: ${ error }`);
    return error;
  }
};

/**
 * Fetches the first instance of a venue.
 * @param venueName string name of venue to get the first instance of.
 * @returns {Promise<Date|*>} promise that if resolved, returns the date of first instance of venue.
 */
export const firstInstanceOfVenue = async (venueName) => {
  try {
    // get venue by name
    let relevantVenue = await Venue.findOne({ name: venueName });
    if (relevantVenue === null) {
      throw new Error(`no project found for ${ venueName }`);
    }

    // compute and return first instance of the venue
    return await getFirstInstanceOfVenue(relevantVenue);
  } catch (error) {
    console.error(`Error in firstInstanceOfVenue: ${ error }`);
    return error;
  }
};

/**
 * Fetches the last instance of a venue.
 * @param venueName string name of venue to get the last instance of.
 * @returns {Promise<Date|*>} promise that if resolved, returns the date of last instance of venue.
 */
export const lastInstanceOfVenue = async (venueName) => {
  try {
    // get venue by name
    let relevantVenue = await Venue.findOne({ name: venueName });
    if (relevantVenue === null) {
      throw new Error(`no project found for ${ venueName }`);
    }

    // compute and return first instance of the venue
    return await getLastInstanceOfVenue(relevantVenue);
  } catch (error) {
    console.error(`Error in firstInstanceOfVenue: ${ error }`);
    return error;
  }
};