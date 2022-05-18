import { Person } from "../../../models/people/person.js";
import { Project } from "../../../models/project/project.js";
import { SprintCache } from "../../../models/cache/sprintCache.js";

import { google } from "googleapis";
import { googleDriveAuth } from "../../../imports/utils/googleAuth.js"
import { SprintLog } from "./sprintLogParser.js";
import { fetchCurrentSprint } from "../../processes/sprints/fetch.js";

/**
 * Fetches a sprint log for a project, given a person's name.
 * @param personName
 * @return {Promise<*|*>}
 */
export const getSprintLogForPerson = async (personName) => {
  // attempt to get a project from the db that matches the given project name
  let relevantPerson = await Person.findOne({ name: personName }).exec();
  if (relevantPerson === null) {
    throw new Error(`person not found for ${ personName }`);
  }

  // get a project for the person
  let relevantProject = await Project.findOne({ students: relevantPerson._id }).exec();
  if (relevantProject === null) {
    throw new Error(`no project found for ${ personName }`);
  }

  // get sprint log for the relevant project
  return getSprintLogForProject(relevantProject);
};

/**
 * Fetches a sprint log for a project, given a project name.
 * @param projectName
 * @return {Promise<*|*>}
 */
export const getSprintLogForProjectName = async (projectName) => {
  // attempt to get a project from the db that matches the given project name
  let relevantProject = await Project.findOne({ name: projectName });
  if (relevantProject === null) {
    throw new Error(`no project found for ${ projectName }`);
  }

  // get sprint log for the relevant project
  return getSprintLogForProject(relevantProject);
};

/**
 * Pre-populates sprint cache with parsed sprint log data.
 * @return {Promise<void>}
 */
export const prepopulateSprintCache = async () => {
  console.log("Populating sprint log cache...");

  // clear current cache
  await SprintCache.deleteMany({}).exec();

  // get all projects
  let allProjects = await Project.find({}).exec();

  // create an array of promises to execute
  let cacheUpdatePromises = allProjects.map(project => {
    return getSprintLogForProject(project);
  });
  await Promise.all(cacheUpdatePromises);
  console.log("Sprint log cache populated.");
};

/**
 * Fetches a sprint log for a project.
 * Checks to see if the project is stored in the cache first before parsing a new one from GDrive.
 * @param project
 * @return {Promise<*|*>}
 */
const getSprintLogForProject = async (project) => {
  try {
    // get sprint url from project and last edit timestamp
    let sprintUrl = project["sprint_log"];
    let lastEditDate = await getSprintLogLastUpdate(sprintUrl);
    console.log(`Last Edit Date for ${ project["name"] } Sprint Log: ${ lastEditDate }`);

    // check cache first for the sprint log
    let cachedSprintLog = await getCachedSprintLog(project);
    if (cachedSprintLog !== undefined) {
      // check if cached sprint log is still relevant
      let cacheData = cachedSprintLog['data'];
      let cacheDate = cachedSprintLog['last_modified'];

      // check if version in cache is most recent; if not, remove instance
      if (lastEditDate <= cacheDate) {
        console.log(`Sprint Cache HIT for project ${ project['name'] }. Will not refresh cache.`);

        // add current sprint
        cacheData["current_sprint"] = await getDataForCurrentSprint(cacheData);
        return cacheData;
      }
    }

    // cache miss -- get parsed sprint log
    console.log(`Sprint Cache MISS for project ${ project['name'] }`);

    // attempt to get sprint log, retrying up to 5 times with 60s in between
    let parsedSprintLog = undefined;
    let retryCount = 5;

    while (parsedSprintLog === undefined && retryCount > 0) {
      // attempt to fetch
      parsedSprintLog = await new SprintLog(sprintUrl);

      // if undefined, wait 60 seconds and try again
      if (parsedSprintLog === undefined) {
        console.log(`getSprintLog(${ project['name'] }) -- Rate limit hit. Waiting 60 seconds before trying again. Retries left: ${ retryCount }`);
        await new Promise(resolve => setTimeout(resolve, 60 * 1000));
        console.log(`getSprintLog(${ project['name'] }) -- Attempting to get sprint log again.`);
        retryCount -= 1;
      }
    }

    // add to cache
    if (cachedSprintLog !== undefined) {
      await updateCachedSprintLog(cachedSprintLog, parsedSprintLog, lastEditDate);
    } else {
      await addSprintToCache(project._id, parsedSprintLog, lastEditDate);
    }

    // add current sprint, and return parsed sprint log if successful
    parsedSprintLog["current_sprint"] = await getDataForCurrentSprint(parsedSprintLog);
    return parsedSprintLog;
  } catch (error) {
    console.error(`Error in getSprintLogForProject: ${ error }`);
    return error;
  }
};

/*
  Caching functions
 */

/**
 * Fetches a sprint log object for a project from cache, if found.
 * @param project
 * @return {Promise<(Document<any, any, unknown> & Require_id<unknown>)|undefined>}
 */
const getCachedSprintLog = async (project) => {
  // check if exists
  let cachedSprintLog = await SprintCache.findOne({ project: project._id }).exec();
  if (cachedSprintLog !== null) {
    return cachedSprintLog;
  }

  return undefined;
};

/**
 * Adds a sprint log object to cache.
 * @param projectId
 * @param sprintLogData
 * @param lastUpdated
 * @return {Promise<Document<any, any, unknown> & Require_id<unknown>>}
 */
const addSprintToCache = async (projectId, sprintLogData, lastUpdated) => {
  let newSprintCacheEntry = new SprintCache({
    project: projectId,
    data: sprintLogData,
    last_modified: lastUpdated
  });

  return newSprintCacheEntry.save();
};

/**
 * Updates an cache object for a project's sprint log.
 * @param cachedSprintLog
 * @param updatedData
 * @param updatedDate
 * @return {Promise<*>}
 */
const updateCachedSprintLog = async (cachedSprintLog, updatedData, updatedDate) => {
  cachedSprintLog.data = updatedData;
  cachedSprintLog.last_modified = updatedDate;
  return cachedSprintLog.save();
};

/**
 * Fetches the last modifiedTime of a sprint log sheet from GDrive.
 * @param fileUrl
 * @return {Promise<Date>}
 */
const getSprintLogLastUpdate = async (fileUrl) => {
  // TODO: this will break if "/edit" is included in the url
  // parse out fileId
  let sprintLogFileId = fileUrl.split('https://docs.google.com/spreadsheets/d/')[1];

  // create a google drive instance
  let drive = google.drive('v3');

  // get file information for a sprint log
  try {
    let fileInfo = await drive.files.get({
      auth: googleDriveAuth,
      fileId: sprintLogFileId,
      fields: "*"
    });

    return new Date(fileInfo['data']['modifiedTime']);
  } catch (error) {
    console.error(`Error in getSprintLogLastUpdate: ${ error }`);
    return error;
  }
};


/**
 * Gets the data for the current sprint, based on the current date.
 *
 * @param allSprintLogData object all data from the sprint log.
 * @returns {Promise<null|object>} information for current sprint (if found), else null
 */
const getDataForCurrentSprint = async (allSprintLogData) => {
  try {
    // get current sprint date
    let currentSprint = await fetchCurrentSprint();

    // check if empty sprint log
    if (currentSprint &&
      Object.keys(currentSprint).length === 0 &&
      Object.getPrototypeOf(currentSprint) === Object.prototype) {
      return null;
    }

    // get data for current sprint
    let relevantData = allSprintLogData["sprints"].filter(currentSprintData => {
      return currentSprintData["name"] === currentSprint["name"];
    });

    // check if sprint data was found, and return if so. otherwise, null.
    if (relevantData.length > 0) {
      return relevantData[0];
    }
    return null;
  } catch (error) {
    console.error(`Error in getDataForCurrentSprint: ${ error }`);
    return error;
  }
};
