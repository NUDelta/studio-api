import { Router } from "express";

import createPeopleFixtures from "../models/fixtures/populatePeople.js";
import createProcessFixtures from "../models/fixtures/populateProcesses.js";
import createProjectFixtures from "../models/fixtures/populateProjects.js";
import createVenueFixtures from "../models/fixtures/populateVenues.js";
import { prepopulateSprintCache } from "../controllers/sprints/sprintManager.js";

export const dataRouter = new Router();

/**
 * Refreshes all data in MongoDB when called.
 */
dataRouter.get("/refreshData", async (req, res) => {
  // clear existing data and refresh with fixtures
  await createPeopleFixtures();
  await createProcessFixtures();
  await createProjectFixtures();
  await createVenueFixtures();

  // populate sprint cache after data is refreshed. run async so that the request can finsh and not timeout
  prepopulateSprintCache();

  res.send("Data refreshed.");
});