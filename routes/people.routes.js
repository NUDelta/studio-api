import { Router } from "express";
import bodyParser from "body-parser";

import { Person } from "../models/people/person.js";
import {
  fetchAllPeople,
  fetchFaculty,
  fetchNonPhdStudents,
  fetchPhdStudents, getPersonByName
} from "../controllers/people/fetch.js";
import { getSprintLogForPerson } from "../controllers/tools/sprints/sprintManager.js";

export const peopleRouter = new Router();

/**
 * Fetch all people.
 */
peopleRouter.get("/", async (req, res) => {
  try {
    res.json(await fetchAllPeople());
  } catch (error) {
    res.send(`Error when fetching all users: ${ error }`);
  }
});

/**
 * Fetch all people who are Faculty.
 */
peopleRouter.get('/faculty', async (req, res) => {
  try {
    res.json(await fetchFaculty());
  } catch (error) {
    res.send(`Error when fetching faculty members: ${ error }`);
  }
});

/**
 * Fetch all people who are Ph.D. Students.
 */
peopleRouter.get('/phdstudents', async (req, res) => {
  try {
    res.json(await fetchPhdStudents());
  } catch (error) {
    res.send(`Error when fetching PhD students: ${ error }`);
  }
});

/**
 * Fetch all people who are Non-Ph.D. Students (i.e., Undergrad and Masters students).
 */
peopleRouter.get('/nonphdstudents', async (req, res) => {
  try {
    res.json(await fetchNonPhdStudents());
  } catch (error) {
    res.send(`Error when fetching non-PhD students: ${ error }`);
  }
});

peopleRouter.get('/fetchByName', async (req, res) => {
  try {
    // fetch the person's name from the query that we want their info for
    let personName = req.query.personName;
    if (personName === undefined) {
      throw new Error("personName parameter not specified.");
    }

    // fetch and return person
    res.json(await getPersonByName(personName));
  } catch (error) {
    res.send(`Error when fetching person by name: ${ error }`);
  }
});

// TODO: might not be needed
/**
 * Get Sprint Log for a person.
 */
peopleRouter.get("/fetchSprintLogForPerson", async (req, res) => {
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

// TODO: might not be needed
/**
 * Get Slack ID for a person.
 */
peopleRouter.get("/slackIdForPerson", async (req, res) => {
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