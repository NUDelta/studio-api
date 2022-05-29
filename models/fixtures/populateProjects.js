import { Project } from "../project/project.js";
import { Person } from "../people/person.js";
import { Faculty } from "../people/faculty.js";

import { projectData } from "./data/projectFixtures.js";
import { Process } from "../processes/process.js";

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
      studentPromises.push(Person.findOne({ name: studentName }));
    }
    let students = await Promise.all(studentPromises);
    let studentIds = students.map((student) => { return student._id; });

    // get sig head
    let sigHead = await Person.findOne({ name: project.sig_head });

    // get faculty mentor
    let facultyMentor = await Faculty.findOne({ name: project.faculty_mentor });

    // TODO: maybe replace with create and insertMany
    // https://stackoverflow.com/questions/38290684/mongoose-save-vs-insert-vs-create#:~:text=save()%20is%20an%20instance,object%20as%20a%20first%20parameter.
    // create project document
    let currProjectDocument = new Project({
      name: project.name,
      sig_name: project.sig_name,
      students: studentIds,
      sig_head: sigHead._id,
      faculty_mentor: facultyMentor._id,
      sprint_log: project.sprint_log,
      practical_research_canvas: project.practical_research_canvas,
      research_research_canvas: project.research_research_canvas,
      eoq_checklist: project.eoq_checklist,
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
  await Project.deleteMany({}).exec();

  // populate new documents
  await createProjectDocuments();
}

/**
 * Checks if the Project collection has documents in it.
 * @return {Promise<boolean>}
 */
export const isProjectEmpty = async () => {
  let foundProjects = await Project.find({});
  return foundProjects.length === 0;
}