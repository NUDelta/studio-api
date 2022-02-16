import { Project } from "../project/project.js";
import { Faculty } from "../people/faculty.js";
import { PhdStudent } from "../people/phdstudent.js";
import { NonPhdStudent } from "../people/nonphdstudent.js";

import { projectData } from "./data/projectFixtures.js";

/**
 * Creates an array of Promises that, when resolved, create Project documents.
 * @return {Promise<unknown[]>}
 */
const createProjectDocuments = async () => {
  // store all promises that we need to save
  let projectDocumentPromises = [];

  // loop over each document and save
  for (const project of projectData) {
    // get students
    let studentPromises = [];
    for (const studentName of project.students) {
      studentPromises.push(NonPhdStudent.findOne({ name: studentName }));
    }
    let students = await Promise.all(studentPromises);
    let studentIds = students.map((student) => { return student._id; });

    // get sig head
    let sigHead = await PhdStudent.findOne({ name: project.sig_head });

    // get faculty mentor
    let facultyMentor = await Faculty.findOne({ name: project.faculty_mentor });

    // create project document
    let currProjectDocument = new Project({
      name: project.name,
      sig_name: project.sig_name,
      students: studentIds,
      sig_head: sigHead._id,
      faculty_mentor: facultyMentor._id,
      sprint_log: project.sprint_log,
      slack_channel: project.slack_channel,
      status_update_date: project.status_update_date
    });
    projectDocumentPromises.push(currProjectDocument.save());
  }

  return Promise.all(projectDocumentPromises);
};

/**
 * Removes existing documents and executes all Promises to create Project documents.
 * @return {Promise<void>}
 */
export default async function main() {
  // remove all old documents
  if (process.env.NODE_ENV === "development") {
    await Project.deleteMany({}).exec();
  }

  // populate new documents
  await createProjectDocuments();
}