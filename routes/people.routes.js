import { Router } from "express";

import { Person } from "../models/people/person.js";
import {
  fetchAllPeople,
  fetchFaculty,
  fetchNonPhdStudents,
  fetchPhdStudents, fetchPersonByName
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
    let msg = `Error in /people/: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Fetch all people who are Faculty.
 */
peopleRouter.get('/faculty', async (req, res) => {
  try {
    res.json(await fetchFaculty());
  } catch (error) {
    let msg = `Error in /people/faculty: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Fetch all people who are Ph.D. Students.
 */
peopleRouter.get('/phdstudents', async (req, res) => {
  try {
    res.json(await fetchPhdStudents());
  } catch (error) {
    let msg = `Error in /people/phdstudents: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Fetch all people who are Non-Ph.D. Students (i.e., Undergrad and Masters students).
 */
peopleRouter.get('/nonphdstudents', async (req, res) => {
  try {
    res.json(await fetchNonPhdStudents());
  } catch (error) {
    let msg = `Error in /people/nonphdstudents: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});

/**
 * Fetch a specific person, by name.
 */
peopleRouter.get('/byName', async (req, res) => {
  try {
    // fetch the person's name from the query that we want their info for
    let personName = req.query.personName;
    if (personName === undefined) {
      throw new Error("personName parameter not specified.");
    }

    // fetch and return person
    res.json(await fetchPersonByName(personName));
  } catch (error) {
    let msg = `Error in /people/byName: ${ error }`;
    console.error(msg)
    res.send(msg);
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
    let msg = `Error in /people/fetchSprintLogForPerson: ${ error }`;
    console.error(msg)
    res.send(msg);
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
    let msg = `Error in /people/slackIdForPerson: ${ error }`;
    console.error(msg)
    res.send(msg);
  }
});