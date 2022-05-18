import { Router } from "express";
import bodyParser from "body-parser";
import { DateTime } from "luxon";

import { Sprint } from "../models/processes/sprints.js";
import {
  fetchAllSprints,
  fetchCurrentSprint, fetchSprintByDate,
  fetchSprintByName
} from "../controllers/processes/sprints/fetch.js";

export const sprintRouter = new Router();

// TODO: may need to rename this module or put it in a subfolder. this is really about the sprint PROCESS, nto the actual sprints themselves

// get all sprints
sprintRouter.get("/", async (req, res) => {
  try {
    res.json(await fetchAllSprints());
  } catch (error) {
    res.send(`Error when fetching all sprints: ${ error }`);
  }
});

// get sprint by sprint name (e.g., sprint 1)
sprintRouter.get("/sprintByName", async (req, res) => {
  try {
    // check to see if a sprint name was provided
    let sprintName = req.query.sprintName;
    if (sprintName === undefined) {
      throw new Error("sprintName parameter not defined");
    }

    // return sprint if found
    res.json(await fetchSprintByName(sprintName));
  } catch (error) {
    res.send(`Error when fetching sprint by name: ${ error }`);
  }
});

/**
 * Gets the current sprint, based on the current time.
 */
sprintRouter.get("/currentSprint", async (req, res) => {
  try {
    // return sprint if found
    res.json(await fetchCurrentSprint());
  } catch (error) {
    res.json(`Error when fetching current sprint: ${ error }`);
  }
});


/**
 * Gets the current sprint, based on the current time.
 */
sprintRouter.get("/sprintByDate", async (req, res) => {
  try {
    // check to see if a date was provided
    let dateString = req.query.timestamp;
    let dateObj;

    // try to parse a DateTime from the string; otherwise, get the current date/time
    try {
      dateObj = DateTime.fromISO(dateString);
    } catch (error) {
      throw new Error("timestamp parameter not defined");
    }

    // return sprint if found
    res.json(await fetchSprintByDate(dateObj));
  } catch (error) {
    res.json(`Error when fetching sprint by date: ${ error }`);
  }
});