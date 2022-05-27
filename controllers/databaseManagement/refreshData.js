// import fixtures
import createPeopleFixtures, { isPeopleEmpty } from "../../models/fixtures/populatePeople.js";
import createProcessFixtures, { isProcessEmpty } from "../../models/fixtures/populateProcesses.js";
import createProjectFixtures, { isProjectEmpty } from "../../models/fixtures/populateProjects.js";
import createVenueFixtures, { isVenueEmpty } from "../../models/fixtures/populateVenues.js";
import createSocialStructureFixtures, { isSocialStructureEmpty } from "../../models/fixtures/populateSocialStructures.js";

// pre-population of the sprint cache
import { prepopulateSprintCache } from "../tools/sprints/sprintManager.js";

/**
 * Refreshes all data using local fixtures.
 * @param asyncSprintCacheRefresh optional boolean for if the sprint caching should be done asynchronously.
 * @returns {Promise<void>}
 */
export const populateData = async (asyncSprintCacheRefresh=false) => {
  // clear existing data and refresh with fixtures
  await createPeopleFixtures();
  await createProcessFixtures();
  await createProjectFixtures();
  await createVenueFixtures();
  await createSocialStructureFixtures();

  // populate sprint cache after data is refreshed.
  if (asyncSprintCacheRefresh) {
    // usage: run async so that the request can finish and not timeout
    prepopulateSprintCache();
  } else {
    await prepopulateSprintCache();
  }
};

/**
 * Checks if all databases are empty.
 * @returns {Promise<>} promise that, when resolved, return whether all databases are empty.
 */
export const allDatabasesAreEmpty = async () => {
  return (await Promise.all([
    isPeopleEmpty(),
    isProcessEmpty(),
    isProjectEmpty(),
    isVenueEmpty(),
    isSocialStructureEmpty()
  ])).every(Boolean);
};