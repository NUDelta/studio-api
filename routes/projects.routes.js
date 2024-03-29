import { Router } from 'express';
import {
  fetchAllProjects,
  fetchProjectByName,
  fetchProjectForPerson,
} from '../controllers/projects/fetch.js';
import bodyParser from 'body-parser';

import { Project } from '../models/project/project.js';
import { getSprintLogForProjectName } from '../controllers/tools/sprints/sprintManager.js';

// TODO: return error codes with error messages
export const projectRouter = new Router();

/**
 * Fetch all projects.
 */
projectRouter.get('/', async (req, res) => {
  try {
    // get whether tools should be populated
    let shouldPopulateTools =
      (req.query.populateTools ?? '').trim().toLowerCase() === 'true';

    // fetch and return data
    res.json(await fetchAllProjects(shouldPopulateTools));
  } catch (error) {
    let msg = `Error in /projects/: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

/**
 * Fetch a project given a project name.
 */
projectRouter.get('/byName', async (req, res) => {
  try {
    // fetch the project's name from the query that we want the sprint log for, and check if valid
    let projName = req.query.projectName;
    if (projName === undefined) {
      throw new Error('projectName parameter not specified.');
    }

    // get whether tools should be populated
    let shouldPopulateTools =
      (req.query.populateTools ?? '').trim().toLowerCase() === 'true';

    // fetch and return data
    res.json(await fetchProjectByName(projName, shouldPopulateTools));
  } catch (error) {
    let msg = `Error in projects/projectByName: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

/**
 * Fetch a project given a student on the project.
 */
projectRouter.get('/forPerson', async (req, res) => {
  try {
    // fetch the person's name from the query that we want the sprint log for, and check if valid
    let personName = req.query.personName;
    if (personName === undefined) {
      throw new Error('personName parameter not specified.');
    }

    // get whether tools should be populated
    let shouldPopulateTools =
      (req.query.populateTools ?? '').trim().toLowerCase() === 'true';

    res.json(await fetchProjectForPerson(personName, shouldPopulateTools));
  } catch (error) {
    let msg = `Error in projects/forPerson: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

// TODO: probably can deprecate this
// fetch sprint log for a project
projectRouter.get('/fetchSprintLogForProject', async (req, res) => {
  try {
    // fetch the project's name from the query that we want the sprint log for, and check if valid
    let projectName = req.query.projectName;
    if (projectName === undefined) {
      throw new Error('projectname parameter not specified.');
    }

    // attempt to get sprint log for personName
    let sprintLogForProject = await getSprintLogForProjectName(projectName);

    // return json of sprint log
    res.json(sprintLogForProject);
  } catch (error) {
    let msg = `Error in projects/fetchSprintLogForProject: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

// TODO: may not be needed since projects populate with the people
projectRouter.get('/peopleOnProject', async (req, res) => {
  try {
    // fetch the project's name from the query that we want the sprint log for, and check if valid
    let projectName = req.query.projectName;
    if (projectName === undefined) {
      throw new Error('projectname parameter not specified.');
    }

    // get project
    let relevantProject = await Project.findOne({ name: projectName })
      .populate('students')
      .populate('sig_head')
      .populate('faculty_mentor');
    if (relevantProject === null) {
      throw new Error(`no project found for ${projectName}`);
    }

    // create an output of the current people on the project
    let output = {
      students: relevantProject['students'].map(
        (currStudent) => currStudent.name
      ),
      sig_head: [relevantProject['sig_head']['name']],
      faculty_mentor: [relevantProject['faculty_mentor']['name']],
    };

    // return json of sprint log
    res.json(output);
  } catch (error) {
    let msg = `Error in projects/peopleOnProject: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

// TODO: is this needed?
projectRouter.get('/slackChannelForProject', async (req, res) => {
  try {
    // fetch the project's name from the query that we want the slack channel for
    let projectName = req.query.projectName;
    if (projectName === undefined) {
      throw new Error('projectname parameter not specified.');
    }

    // get project
    let relevantProject = await Project.findOne({ name: projectName });
    if (relevantProject === null) {
      throw new Error(`no project found for ${projectName}`);
    }

    // return json of slack channel for project
    res.json(relevantProject['slack_channel']);
  } catch (error) {
    let msg = `Error in projects/slackChannelForProject: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});
