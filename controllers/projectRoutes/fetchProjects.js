/**
 * This file is responsible for fetching projects from the database and returning them as JSON.
 */

import { Project } from "../../models/project/project.js";
import { getSprintLogForProjectName } from "../sprints/sprintManager.js";

/**
 * Fetches all projects and their data.
 *
 * @param populateTools optional boolean for if tools should be populated (e.g., sprint log).
 * @returns {Promise} promise that if resolved, returns a list of projects. if rejected, error.
 */
export const fetchAllProjects = async (populateTools= false) => {
  try {
    // get all projects from database
    let allProjs = await Project.find()
      .populate('students')
      .populate('sig_head')
      .populate('faculty_mentor').lean();

    // TODO: make this run asynchronously
    // populate tool data, if specified
    if (populateTools) {
      for (let currProjIndex = 0; currProjIndex < allProjs.length; currProjIndex++) {
        // get the current project
        let currProj = allProjs[currProjIndex];

        // populate sprint log
        allProjs[currProjIndex]["sprint_log"] = await getSprintLogForProjectName(currProj["name"]);
      }
    }
    return allProjs;
  } catch (error) {
    console.error(`Error in fetchAllProjects: ${ error }`);
    return error;
  }
};

/**
 * Fetches a single project by project name.
 *
 * @param projName string project name to fetch.
 * @param populateTools optional boolean for if tools should be populated (e.g., sprint log).
 * @returns {Promise} promise that if resolved, returns a project. if rejected, error
 */
export const fetchProjectByName = async (projName, populateTools= false) => {
  try {
    // find project with projName
    let relevantProj = await Project.findOne({ name: projName })
      .populate('students')
      .populate('sig_head')
      .populate('faculty_mentor').lean();

    // check if no project was found
    if (relevantProj === null) {
      return {};
    }

    // populate tool data, if specified
    if (populateTools) {
      relevantProj["sprint_log"] = await getSprintLogForProjectName(relevantProj["name"]);
    }
    return relevantProj;
  } catch (error) {
    console.error(`Error in fetchProjectByName: ${ error }`);
    return error;
  }
};