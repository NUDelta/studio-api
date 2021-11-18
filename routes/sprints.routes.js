import { Router } from "express";
import bodyParser from "body-parser";
import { DateTime } from "luxon";

import { Sprint } from "../models/processes/sprints.js";

export const sprintRouter = new Router();

// TODO: may need to rename this module or put it in a subfolder. this is really about the sprint PROCESS, nto the actual sprints themselves

// get all sprints
sprintRouter.get("/", async (req, res) => {
  try {
    let allSprints = await Sprint.find();
    res.json(allSprints);
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

    // attempt to get a sprint process with the provided sprintName
    let relevantSprint = await Sprint.findOne({ name: sprintName });
    if (relevantSprint === null) {
      throw new Error(`sprint not found for sprint name: ${ sprintName }`);
    }

    // return sprint if found
    res.json(relevantSprint);

  } catch (error) {
    res.send(`Error when fetching sprint by name: ${ error }`);
  }
});

// get the current sprint by date. date to look up sprint for can be optionally provided
sprintRouter.get("/currentSprint", async (req, res) => {
  try {
    // check to see if a date was provided
    let dateString = req.query.timestamp;
    let dateObj;

    // TODO: fix this...i dont think it's working rn
    // try to parse a DateTime from the string; otherwise, get the current date/time
    try {
      dateObj = DateTime.fromISO(dateString);
    } catch (error) {
      console.error(`Error in parsing date for /currentSprint: ${ error }`);
      dateObj = DateTime.now();
    }

    // using dateObj, find the sprint that we are currently in
    let relevantSprint = await Sprint.findOne({
      start_day: {
        $lte: dateObj
      },
      end_day: {
        $gte: dateObj
      }
    });

    if (relevantSprint === null) {
      throw new Error(`sprint not found for date: ${ dateObj }`);
    }

    // return sprint if found
    res.json(relevantSprint);
  } catch (error) {
    res.json(`Error when fetching current sprint: ${ error }`);
  }
});