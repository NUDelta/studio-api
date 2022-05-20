import { Venue } from "../venues/venue.js";
import { SigMeeting } from "../venues/sigMeeting.js";
import { StudioMeeting } from "../venues/studioMeeting.js";
import { OfficeHours } from "../venues/officeHours.js";

import { Person } from "../people/person.js";

import { studioData, sigMeetingData, officeHoursData } from "./data/venueFixtures.js";
import { Project } from "../project/project.js";

/**
 * Inserts documents for the Studio venue.
 * @return {Promise<unknown[]>}
 */
const createStudioDocuments = async () => {
  // store all documents that we need to insert
  let studioDocuments = [];

  // loop over all data and create documents
  for (const currStudioData of studioData) {
    // get attendees
    let memberPromises = [];
    for (const member of currStudioData.attendees) {
      memberPromises.push(Person.findOne({ name: member }));
    }
    let memberIds = (await Promise.all(memberPromises))
      .map((member) => { return member._id; });

    // create document for current data
    studioDocuments.push({
      name: currStudioData.name,
      description: currStudioData.description,
      day_of_week: currStudioData.day_of_week,
      start_time: currStudioData.start_time,
      end_time: currStudioData.end_time,
      timezone: currStudioData.timezone,
      attendees: memberIds
    });
  }

  // save documents
  return StudioMeeting.insertMany(studioDocuments);
};

/**
 * Inserts documents for the SIG venue.
 * @return {Promise<unknown[]>}
 */
const createSigDocuments = async () => {
  // store all documents that we need to insert
  let sigMeetingDocuments = [];

  // loop over all data and create documents
  for (const currSigMeetingData of sigMeetingData) {
    // get attendees of sig
    let memberPromises = [];
    for (const member of currSigMeetingData.attendees) {
      memberPromises.push(Person.findOne({ name: member }));
    }
    let memberIds = (await Promise.all(memberPromises))
      .map((member) => { return member._id; });

    // get projects of sig
    let projectPromises = [];
    for (const projectName of currSigMeetingData.projects) {
      projectPromises.push(Project.findOne({ name: projectName }));
    }
    let projectIds = (await Promise.all(projectPromises))
      .map((project) => { return project._id });

    // create documents
    sigMeetingDocuments.push({
      name: currSigMeetingData.name,
      description: currSigMeetingData.description,
      day_of_week: currSigMeetingData.day_of_week,
      start_time: currSigMeetingData.start_time,
      end_time: currSigMeetingData.end_time,
      timezone: currSigMeetingData.timezone,
      attendees: memberIds,
      projects: projectIds
    });
  }

  // save documents
  return SigMeeting.insertMany(sigMeetingDocuments);
};

/**
 * Inserts documents for the Office Hours venue.
 * @return {Promise<unknown[]>}
 */
const createOfficeHoursDocuments = async () => {
  // store all documents that we need to insert
  let officeHoursDocuments = [];

  for (const currOfficeHoursData of officeHoursData) {
    // get projects of sig
    let projectPromises = [];
    for (const projectName of currOfficeHoursData.projects) {
      projectPromises.push(Project.findOne({ name: projectName }));
    }
    let projectIds = (await Promise.all(projectPromises))
      .map((project) => { return project._id });

    // create documents
    officeHoursDocuments.push({
      name: currOfficeHoursData.name,
      description: currOfficeHoursData.description,
      day_of_week: currOfficeHoursData.day_of_week,
      start_time: currOfficeHoursData.start_time,
      end_time: currOfficeHoursData.end_time,
      timezone: currOfficeHoursData.timezone,
      projects: projectIds
    });
  }

  // save documents
  return OfficeHours.insertMany(officeHoursDocuments);
};

/**
 * Removes existing documents and executes all Promises to create Venue documents.
 * @return {Promise<void>}
 */
export default async function main() {
  // remove all old documents
  await Venue.deleteMany({}).exec();

  // populate new documents
  await createStudioDocuments();
  await createSigDocuments();
  await createOfficeHoursDocuments();
}

/**
 * Checks if the Venue collection has documents in it.
 * @return {Promise<boolean>}
 */
export const isVenueEmpty = async () => {
  let foundVenues = await Venue.find({});
  return foundVenues.length === 0;
}
