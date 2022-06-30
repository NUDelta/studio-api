/**
 * This file is responsible for fetching projects from the database and returning them as JSON.
 */

import { Project } from "../../models/project/project.js";
import { getSprintLogForProjectName } from "../tools/sprintLog/sprintManager.js";
import { Person } from "../../models/people/person.js";

/**
 * Fetches all projects and their data.
 *
 * @param shouldPopulateTools optional boolean for if tools should be populated (e.g., sprint log).
 * @returns {Promise} promise that if resolved, returns a list of projects. if rejected, error.
 */
export const fetchAllProjects = async (shouldPopulateTools= false) => {
  try {
    // get all projects from database
    let allProjs = await Project.find()
      .populate('students')
      .populate('sig_head')
      .populate('faculty_mentor')
      .lean();

    // populate tool data, if specified
    if (shouldPopulateTools) {
      return await Promise.all(allProjs.map(project => {
        return populateProjectTools(project);
      }));
    }

    // otherwise, return all projects with links to tools
    return allProjs;
  } catch (error) {
    console.error(`Error in fetchAllProjects: ${ error }`);
    return error;
  }
};

/**
 * Fetches a single project by project name.
 * @param projName string project name to fetch.
 * @param shouldPopulateTools optional boolean for if tools should be populated (e.g., sprint log).
 * @returns {Promise} promise that if resolved, returns a project. if rejected, error
 */
export const fetchProjectByName = async (projName, shouldPopulateTools= false) => {
  try {
    // find project with projName
    let relevantProj = await Project.findOne({
      name: projName
    })
      .populate('students')
      .populate('sig_head')
      .populate('faculty_mentor')
      .lean();

    // check if no project was found
    if (relevantProj === null) {
      return {};
    }

    // populate tool data, if specified
    if (shouldPopulateTools) {
      return await populateProjectTools(relevantProj);
    }

    // otherwise, return all projects with links to tools
    return relevantProj;
  } catch (error) {
    console.error(`Error in fetchProjectByName: ${ error }`);
    return error;
  }
};

/**
 * Fetches a single project for a specified person.
 * @param personName string person name to fetch project for.
 * @param shouldPopulateTools optional boolean for if tools should be populated (e.g., sprint log).
 * @returns {Promise} promise that if resolved, returns a project. if rejected, error
 */
export const fetchProjectForPerson = async (personName, shouldPopulateTools= false) => {
  try {
    // get id for person
    let relevantPerson = await Person.findOne({ name: personName }).exec();
    if (relevantPerson === null) {
      throw new Error(`person not found for ${ personName }`);
    }

    // find project where relevantPerson is a student on the project
    let relevantProj = await Project.findOne({
      students: relevantPerson._id
    })
      .populate('students')
      .populate('sig_head')
      .populate('faculty_mentor')
      .lean();

    // check if no project was found
    if (relevantProj === null) {
      return {};
    }

    // populate tool data, if specified
    if (shouldPopulateTools) {
      return await populateProjectTools(relevantProj);
    }

    // otherwise, return all projects with links to tools
    return relevantProj;
  } catch (error) {
    console.error(`Error in fetchProjectForPerson: ${ error }`);
    return error;
  }
};

/**
 * Populates data from tools linked in the project model.
 *
 * @param project object project to populate tools for.
 * @returns {Promise<any>} promise that, when resolved, returns a project with tool data pulled in.
 */
const populateProjectTools = async (project) => {
  // deep clone project object so that it doesn't modify the passed in value
  let clonedProject = JSON.parse(JSON.stringify(project));

  // populate sprint log data
  clonedProject["sprint_log"] = await getSprintLogForProjectName(clonedProject["name"]);

  // TODO: populate data from microboard for graduate students
  // will need to include previous and current

  // return cloned project with data from tools loaded in
  return clonedProject;
}
