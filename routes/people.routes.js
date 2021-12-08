import { Router } from "express";
import bodyParser from "body-parser";

import { Person } from "../models/people/person.js";
import { Faculty } from "../models/people/faculty.js";
import { PhdStudent } from "../models/people/phdstudent.js";
import { NonPhdStudent } from "../models/people/nonphdstudent.js";

import { getSprintLogForPerson } from "../controllers/sprints/sprintManager.js";
import { Project } from "../models/project/project.js";

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

    // attempt to get sprint log for personName
    let sprintLogForPerson = await getSprintLogForPerson(personName);

    // return json of sprint log
    res.json(sprintLogForPerson);
  } catch (error) {
    console.error(error)
    res.send(`Error when fetching sprint log for person: ${ error }`);
  }
});

userRouter.get("/slackIdForPerson", async (req, res) => {
  try {
    // fetch the person's name from the query that we want the slack channel for
    let personName = req.query.personName;
    if (personName === undefined) {
      throw new Error("personName parameter not specified.");
    }

    // get person
    let relevantPerson = await Person.findOne( { name: personName })
    if (relevantPerson === null) {
      throw new Error(`no person found for ${ personName }`);
    }

    // return json of slack channel for project
    res.json(relevantPerson["slack_id"]);
  } catch (error) {
    res.send(`Error when fetching slack Id for person: ${ error }`);
  }
});