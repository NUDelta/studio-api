import { Router } from 'express';
import { DateTime } from 'luxon';

import {
  fetchAllSprints,
  fetchCurrentSprint,
  fetchSprintByDate,
  fetchSprintByName,
} from '../controllers/processes/sprints/fetch.js';

export const sprintRouter = new Router();

// TODO: may need to rename this module or put it in a subfolder. this is really about the sprint PROCESS, nto the actual sprints themselves

/**
 * Fetch all sprints.
 */
sprintRouter.get('/', async (req, res) => {
  try {
    res.json(await fetchAllSprints());
  } catch (error) {
    res.send(`Error when fetching all sprints: ${error}`);
  }
});

/**
 * Fetch the current sprint, based on the current datetime.
 */
sprintRouter.get('/currentSprint', async (req, res) => {
  try {
    // return sprint if found
    res.json(await fetchCurrentSprint());
  } catch (error) {
    res.json(`Error when fetching current sprint: ${error}`);
  }
});

/**
 * Fetch a sprint by sprint name (e.g., "Sprint 1")
 */
sprintRouter.get('/byName', async (req, res) => {
  try {
    // check to see if a sprint name was provided
    let sprintName = req.query.sprintName;
    if (sprintName === undefined) {
      throw new Error('sprintName parameter not defined');
    }

    // return sprint if found
    res.json(await fetchSprintByName(sprintName));
  } catch (error) {
    res.send(`Error when fetching sprint by name: ${error}`);
  }
});

/**
 * Fetch the current sprint, based on the current time.
 */
sprintRouter.get('/byDate', async (req, res) => {
  try {
    // check to see if a date was provided
    let dateString = req.query.timestamp;
    let dateObj;

    // try to parse a DateTime from the string; otherwise, get the current date/time
    try {
      dateObj = DateTime.fromISO(dateString);
    } catch (error) {
      throw new Error('timestamp parameter not defined');
    }

    // return sprint if found
    res.json(await fetchSprintByDate(dateObj));
  } catch (error) {
    res.json(`Error when fetching sprint by date: ${error}`);
  }
});
