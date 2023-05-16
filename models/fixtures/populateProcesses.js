import { Process } from '../processes/process.js';
import { Sprint } from '../processes/sprints.js';

import { sprintProcessData } from './data/processFixtures.js';
import { Person } from '../people/person.js';

/**
 * Creates an array of Promises that, when resolved, create Sprint Process documents.
 * @return {Promise<unknown[]>}
 */
const createSprintProcessDocuments = async () => {
  // store all promises that we need to save
  let sprintProcessDocumentPromises = [];

  // loop over each document and save
  sprintProcessData.forEach((sprintProcess) => {
    let currSprintProcessDocument = new Sprint({
      name: sprintProcess.name,
      start_day: sprintProcess.start_day,
      end_day: sprintProcess.end_day,
    });
    sprintProcessDocumentPromises.push(currSprintProcessDocument.save());
  });

  return Promise.all(sprintProcessDocumentPromises);
};

/**
 * Removes existing documents and executes all Promises to create Process documents.
 * @return {Promise<void>}
 */
export default async function main() {
  // remove all old documents
  await Process.deleteMany({}).exec();

  // populate new documents
  await createSprintProcessDocuments();
}

/**
 * Checks if the Process collection has documents in it.
 * @return {Promise<boolean>}
 */
export const isProcessEmpty = async () => {
  let foundProcesses = await Process.find({});
  return foundProcesses.length === 0;
};
