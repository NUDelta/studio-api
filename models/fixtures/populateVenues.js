import { Venue } from "../venues/venue.js";
import { SIG } from "../venues/sig.js";
import { Studio } from "../venues/studio.js";
import { OfficeHours } from "../venues/officeHours.js";

import { Person } from "../people/person.js";

import { studioData, sigData, officeHoursData } from "./data/venueFixtures.js";
import { Project } from "../project/project.js";

/**
 * Creates an array of Promises that, when resolved, create Studio documents.
 * @return {Promise<unknown[]>}
 */
const createStudioDocuments = async () => {
  // store all promises that we need to save
  let studioDocumentPromises = [];

  // loop over each document and save
  for (const studio of studioData) {
    let currStudioDocument = new Studio({
      name: studio.name,
      description: studio.description,
      day_of_week: studio.day_of_week,
      start_time: studio.start_time,
      end_time: studio.end_time,
      slack_channel: studio.slack_channel
    });
    studioDocumentPromises.push(currStudioDocument.save());
  }

  return Promise.all(studioDocumentPromises);
};

/**
 * Creates an array of Promises that, when resolved, create SIG documents.
 * @return {Promise<unknown[]>}
 */
const createSigDocuments = async () => {
  // store all promises that we need to save
  let sigDocumentPromises = [];

  // loop over each document and save
  for (const sig of sigData) {
    // get sig head
    let sigHead = await Person.findOne({ name: sig.sig_head });

    // get members of sig
    let studentPromises = [];
    for (const studentName of sig.sig_members) {
      studentPromises.push(Person.findOne({ name: studentName }));
    }
    let students = await Promise.all(studentPromises);
    let studentIds = students.map((student) => { return student._id; });

    // create document
    let currsigDocument = new SIG({
      name: sig.name,
      description: sig.description,
      day_of_week: sig.day_of_week,
      start_time: sig.start_time,
      end_time: sig.end_time,
      sig_head: sigHead._id,
      sig_members: studentIds,
      slack_channel: sig.slack_channel
    });
    sigDocumentPromises.push(currsigDocument.save());
  }

  return Promise.all(sigDocumentPromises);
};

/**
 * Creates an array of Promises that, when resolved, create Office Hours documents.
 * @return {Promise<unknown[]>}
 */
const createOfficeHoursDocuments = async () => {
  // store all promises that we need to save
  let officeHoursDocumentPromises = [];

  // loop over each document and save
  for (const officeHours of officeHoursData) {
    let currOfficeHoursDocument = new OfficeHours({
      name: officeHours.name,
      description: officeHours.description,
      day_of_week: officeHours.day_of_week,
      start_time: officeHours.start_time,
      end_time: officeHours.end_time,
    });
    officeHoursDocumentPromises.push(currOfficeHoursDocument.save());
  }

  return Promise.all(officeHoursDocumentPromises);
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
