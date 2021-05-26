import { Router } from "express";
import bodyParser from "body-parser";

import { Project } from "../models/project/project.js";
import { SprintLog } from "../controllers/sprintLogParser.js";

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

    // attempt to get a project from the db that matches the given project name
    let relevantProject = await Project.findOne({ name: projectName });
    if (relevantProject === null) {
      throw new Error(`no project found for ${ projectName }`);
    }

    // parse out a sprint log for a valid project
    let relevantProjectSprintLog = relevantProject.sprint_log;
    let sprintLogForProj = await new SprintLog(relevantProjectSprintLog);

    // return json of sprint log
    res.json(sprintLogForProj);
  } catch (error) {
    res.send(`Error when fetching sprint log for project: ${ error }`);
  }
});