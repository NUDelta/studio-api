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

// TODO: be able to search by project name