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
    return res.status(200).json(await fetchAllSprints());
  } catch (error) {
    return res.status(400).send(`Error when fetching all sprints: ${error}`);
  }
});

/**
 * Fetch the current sprint, based on the current datetime.
 */
sprintRouter.get('/currentSprint', async (req, res) => {
  try {
    // return sprint if found
    return res.status(200).json(await fetchCurrentSprint());
  } catch (error) {
    return res.status(400).json(`Error when fetching current sprint: ${error}`);
  }
  4;
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
    return res.status(200).json(await fetchSprintByName(sprintName));
  } catch (error) {
    return res.status(400).send(`Error when fetching sprint by name: ${error}`);
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
    dateObj = DateTime.fromISO(dateString);
    if (!dateObj.isValid) {
      throw new Error('Invalid date provided');
    }

    let data = await fetchSprintByDate(dateObj);
    if (data === null) {
      throw new Error('No sprint found for the given date');
    }

    // return sprint if found
    return res.status(200).json(data);
  } catch (error) {
    console.error(`Error in /byDate: ${error}`);
    return res.status(400).json(`Error when fetching sprint by date: ${error}`);
  }
});
