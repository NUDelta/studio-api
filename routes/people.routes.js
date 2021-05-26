import { Router } from "express";
import bodyParser from "body-parser";

import { Person } from "../models/people/person.js";
import { Faculty } from "../models/people/faculty.js";
import { PhdStudent } from "../models/people/phdstudent.js";
import { NonPhdStudent } from "../models/people/nonphdstudent.js";
import { Project } from "../models/project/project.js";

import { SprintLog } from "../controllers/sprintLogParser.js";

export const userRouter = new Router();

// fetch all users
userRouter.get("/", async (req, res) => {
  try {
    let allPeople = await Person.find();
    res.json(allPeople);
  } catch (error) {
    res.send(`Error when fetching all users: ${ error }`);
  }
});

// fetch faculty mentors
userRouter.get('/faculty', async (req, res) => {
  try {
    let allFaculty = await Faculty.find();
    res.json(allFaculty);
  } catch (error) {
    res.send(`Error when fetching faculty members: ${ error }`);
  }
});

// fetch phd students
userRouter.get('/phdstudents', async (req, res) => {
  try {
    let allPhdStudents = await PhdStudent.find().populate("faculty_mentor");
    res.json(allPhdStudents);
  } catch (error) {
    res.send(`Error when fetching PhD students: ${ error }`);
  }
});

// fetch non-phd students
userRouter.get('/nonphdstudents', async (req, res) => {
  try {
    let allNonPhdStudents = await NonPhdStudent.find().populate("sig_head");
    res.json(allNonPhdStudents);
  } catch (error) {
    res.send(`Error when fetching non-PhD students: ${ error }`);
  }
});

// fetch sprint log for a person
userRouter.get("/fetchSprintLogForPerson", async (req, res) => {
  try {
    // fetch the person's name from the query that we want the sprint log for, and check if valid
    let personName = req.query.personName;
    if (personName === undefined) {
      throw new Error("personName parameter not specified.");
    }

    // attempt to get a project from the db that matches the given project name
    let relevantPerson = await Person.findOne({ name: personName } );
    if (relevantPerson === null) {
      throw new Error(`person not found for ${ personName }`);
    }

    // get a project for the person
    let relevantProject = await Project.findOne({ students: relevantPerson._id });
    if (relevantProject === null) {
      throw new Error(`no project found for ${ personName }`);
    }

    // parse out a sprint log for a valid project
    let relevantProjectSprintLog = relevantProject.sprint_log;
    let sprintLogForProj = await new SprintLog(relevantProjectSprintLog);

    // return json of sprint log
    res.json(sprintLogForProj);
  } catch (error) {
    res.send(`Error when fetching sprint log for person: ${ error }`);
  }
});