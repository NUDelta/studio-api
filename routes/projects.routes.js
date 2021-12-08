import { Router } from "express";
import bodyParser from "body-parser";

import { Project } from "../models/project/project.js";
import { getSprintLogForProjectName } from "../controllers/sprints/sprintManager.js";

export const projectRouter = new Router();

// fetch all projects
projectRouter.get("/", async (req, res) => {
  try {
    let allProjs = await Project.find()
      .populate('students')
      .populate('sig_head')
      .populate('faculty_mentor');
    res.json(allProjs);
  } catch (error) {
    res.send(`Error when fetching projects: ${ error }`);
  }
});

// fetch sprint log for a project
projectRouter.get("/fetchSprintLogForProject", async (req, res) => {
  try {
    // fetch the project's name from the query that we want the sprint log for, and check if valid
    let projectName = req.query.projectName;
    if (projectName === undefined) {
      throw new Error("projectname parameter not specified.");
    }

    // attempt to get sprint log for personName
    let sprintLogForProject = await getSprintLogForProjectName(projectName);

    // return json of sprint log
    res.json(sprintLogForProject);
  } catch (error) {
    res.send(`Error when fetching sprint log for project: ${ error }`);
  }
});

projectRouter.get("/peopleOnProject", async (req, res) => {
  try {
    // fetch the project's name from the query that we want the sprint log for, and check if valid
    let projectName = req.query.projectName;
    if (projectName === undefined) {
      throw new Error("projectname parameter not specified.");
    }

    // get project
    let relevantProject = await Project.findOne( { name: projectName })
      .populate('students')
      .populate('sig_head')
      .populate('faculty_mentor');
    if (relevantProject === null) {
      throw new Error(`no project found for ${ projectName }`);
    }

    // create an output of the current people on the project
    let output = {
      students: relevantProject["students"].map(currStudent => currStudent.name),
      sig_head: [relevantProject["sig_head"]["name"]],
      faculty_mentor: [relevantProject["faculty_mentor"]["name"]]
    };

    // return json of sprint log
    res.json(output);
  } catch (error) {
    res.send(`Error when fetching people on project for project: ${ error }`);
  }
});

projectRouter.get("/slackChannelForProject", async (req, res) => {
  try {
    // fetch the project's name from the query that we want the slack channel for
    let projectName = req.query.projectName;
    if (projectName === undefined) {
      throw new Error("projectname parameter not specified.");
    }

    // get project
    let relevantProject = await Project.findOne( { name: projectName })
    if (relevantProject === null) {
      throw new Error(`no project found for ${ projectName }`);
    }

    // return json of slack channel for project
    res.json(relevantProject["slack_channel"]);
  } catch (error) {
    res.send(`Error when fetching slack channel for project: ${ error }`);
  }
});

// TODO: be able to search by project name