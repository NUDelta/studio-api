import { Person } from "../people/person.js"
import { NonPhdStudent } from '../people/nonphdstudent.js';
import { PhdStudent } from '../people/phdstudent.js';
import { Faculty } from '../people/faculty.js';

import { facultyData, phdStudentData, nonPhdStudentData } from "./data/peopleFixtures.js";

/**
 * Creates an array of Promises that, when resolved, create Faculty Member documents.
 * @return {Promise<unknown[]>}
 */
const createFacultyDocuments = async () => {
  // store all promises that we need to save
  let facultyDocumentPromises = [];

  // loop over each document and save
  facultyData.forEach((facultyMember) => {
    let currFacultyDocument = new Faculty({
      name: facultyMember.name,
      email: facultyMember.email,
      slack_id: facultyMember.slack_id,
      sig_member: facultyMember.sig_member,
      sig_lead: facultyMember.sig_lead
    });
    facultyDocumentPromises.push(currFacultyDocument.save());
  });

  return Promise.all(facultyDocumentPromises);
};

/**
 * Creates an array of Promises that, when resolved, create PhD Student documents.
 * @return {Promise<unknown[]>}
 */
const createPhdStudentDocuments = async () => {
  // store all promises that we need to save
  let phdStudentDocumentPromises = [];

  // loop over each document and save
  for (const phdStudent of phdStudentData) {
    // get faculty mentor
    let facultyMentor = await Faculty.findOne({ name: phdStudent.faculty_mentor });

    // create phd student document
    let currPhdStudentDocument = new PhdStudent({
      name: phdStudent.name,
      email: phdStudent.email,
      slack_id: phdStudent.slack_id,
      sig_lead: phdStudent.sig_lead,
      sig_member: phdStudent.sig_member,
      faculty_mentor: facultyMentor._id
    });
    phdStudentDocumentPromises.push(currPhdStudentDocument.save());
  }

  return Promise.all(phdStudentDocumentPromises);
};

/**
 * Creates an array of Promises that, when resolved, create Non-PhD Student (ugrad/MS) documents.
 * @return {Promise<unknown[]>}
 */
const createNonPhdStudentDocuments = async () => {
  // store all promises that we need to save
  let nonPhdStudentDocumentPromises = [];

  // loop over each document and save
  for (const nonPhdStudent of nonPhdStudentData) {
    // get faculty mentor
    let sigHead = await PhdStudent.findOne({ name: nonPhdStudent.sig_head });

    // create non-phd student document
    let currNonPhdStudentDocument = new NonPhdStudent({
      name: nonPhdStudent.name,
      email: nonPhdStudent.email,
      slack_id: nonPhdStudent.slack_id,
      sig_member: nonPhdStudent.sig_member,
      sig_head: sigHead._id,
    });
    nonPhdStudentDocumentPromises.push(currNonPhdStudentDocument.save());
  }

  return Promise.all(nonPhdStudentDocumentPromises);
};

/**
 * Removes existing documents and executes all Promises to create People documents.
 * @return {Promise<void>}
 */
export default async function main() {
  // remove all old documents
  await Person.deleteMany({}).exec();

  // populate new documents
  await createFacultyDocuments();
  await createPhdStudentDocuments();
  await createNonPhdStudentDocuments();
}
