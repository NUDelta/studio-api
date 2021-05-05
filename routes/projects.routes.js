import { Router } from "express";
import bodyParser from "body-parser";

import { Project } from "../models/project/project.js";

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