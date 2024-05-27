/**
 * This file is responsible for fetching information about the sprint process.
 */

import { Sprint } from '../../../models/processes/sprints.js';

/**
 * Fetches all sprint processes.
 *
 * @returns {Promise} promise that if resolved, returns a list of sprint processes.
 */
export const fetchAllSprints = async () => {
  try {
    return await Sprint.find();
  } catch (error) {
    console.error(`Error in fetchAllSprints: ${error}`);
    return error;
  }
};

/**
 * Fetch a sprint by name.
 *
 * @param sprintName string sprint name to search for (e.g., Sprint 0).
 * @returns {Promise} promise that if resolved, returns the sprint based on sprintName.
 */
export const fetchSprintByName = async (sprintName) => {
  try {
    let relevantSprint = await Sprint.findOne({ name: sprintName });
    if (relevantSprint === null) {
      return {};
    }

    return relevantSprint;
  } catch (error) {
    console.error(`Error in fetchAllSprints: ${error}`);
    return error;
  }
};

/**
 * Fetches the sprint based on the passed in date
 *
 * @param date Date object for which to get sprint for.
 * @returns {Promise} promise that if resolved, returns the sprint based on date.
 */
export const fetchSprintByDate = async (date) => {
  try {
    // find the sprint based on the date parameter
    let relevantSprint = await Sprint.findOne({
      start_day: {
        $lte: date,
      },
      end_day: {
        $gte: date,
      },
    });

    // check if no sprint was found
    if (relevantSprint === null) {
      return {};
    }

    return relevantSprint;
  } catch (error) {
    console.error(`Error in fetchSprintByDate: ${error}`);
    return null;
  }
};

/**
 * Fetches the current sprint based on the current date.
 *
 * @returns {Promise} promise that if resolved, returns the current sprint based on the current date.
 */
export const fetchCurrentSprint = async () => {
  try {
    // get the current date
    let currDate = new Date();

    // find the sprint that we're currently in based on the current date
    let relevantSprint = await Sprint.findOne({
      start_day: {
        $lte: currDate,
      },
      end_day: {
        $gte: currDate,
      },
    });

    // check if no sprint was found
    if (relevantSprint === null) {
      return {};
    }

    return relevantSprint;
  } catch (error) {
    console.error(`Error in fetchCurrentSprint: ${error}`);
    return error;
  }
};
