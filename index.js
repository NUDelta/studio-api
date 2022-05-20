// application imports
import Slack from "@slack/bolt"
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

// slack responses
import slackResponses from "./imports/slack/cannedResponses.js"

// routes
import { peopleRouter } from "./routes/people.routes.js";
import { venueRouter } from "./routes/venues.routes.js";
import { projectRouter } from "./routes/projects.routes.js";
import { sprintRouter } from "./routes/sprints.routes.js";
import { slackRouter } from "./routes/slack.routes.js";
import { dataRouter } from "./routes/data.routes.js";

// fixtures for development
import createPeopleFixtures, { isPeopleEmpty } from "./models/fixtures/populatePeople.js";
import createProcessFixtures, { isProcessEmpty } from "./models/fixtures/populateProcesses.js";
import createProjectFixtures, { isProjectEmpty } from "./models/fixtures/populateProjects.js";
import createVenueFixtures, { isVenueEmpty } from "./models/fixtures/populateVenues.js";
import createSocialStructureFixtures, { isSocialStructureEmpty } from "./models/fixtures/populateSocialStructures.js";
import { prepopulateSprintCache } from "./controllers/tools/sprints/sprintManager.js";

/*
 Get environment variables.
 */
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/studio-api";
const NODE_ENV = process.env.NODE_ENV || "development";
const SHOULD_REFRESH_DATA = process.env.SHOULD_REFRESH_DATA.trim().toLowerCase() === "true" || false; // TODO: fix
const APP_URL = process.env.APP_URL || `http://localhost:${ PORT }`;

/*
 Setup application.
 */
const receiver = new Slack.ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

export const app = new Slack.App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver: receiver
});

// add canned slack responses
slackResponses.map((responseObject) => {
  app.message(responseObject.cue, responseObject.response);
});

/*
 Setup routes
 */
// TODO: see second answer about how to split up routes: https://stackoverflow.com/questions/25260818/rest-with-express-js-nested-router
app.receiver.app.use(express.json());
app.receiver.app.use(cors());
app.receiver.app.use(express.urlencoded({
  extended: true
}));

app.receiver.app.use('/people', peopleRouter);
app.receiver.app.use('/venues', venueRouter);
app.receiver.app.use('/projects', projectRouter);
app.receiver.app.use('/sprints', sprintRouter);
app.receiver.app.use('/slack', slackRouter);
app.receiver.app.use('/data', dataRouter);

app.receiver.app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.receiver.app.all('*', (request, response) => {
  console.log('Returning a 404 from the catch-all route');
  return response.sendStatus(404);
});

/*
 Start application.
 */
await app.start(PORT);
console.log(`App running: ${ APP_URL }`);

/*
  Setup options for mongodb connection
 */
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

// attempt to connect to mongodb, and detect any connection errors
// TODO: maybe have a case where for production you check if the database is empty and (if so) populate it.
try {
  await mongoose.connect(MONGODB_URI, mongooseOptions);
  console.log(`Connected to MongoDB: ${ MONGODB_URI } with options ${ mongooseOptions }`);
} catch (error) {
  console.error(`Error with connecting to MongoDB: ${ error }`);
} finally {
  if (NODE_ENV === "development") {
    if (SHOULD_REFRESH_DATA) {
      console.log("Development -- Local databases are empty. Populating.");

      // TODO: populate DB with fixtures here
      await createPeopleFixtures();
      await createProcessFixtures();
      await createProjectFixtures();
      await createVenueFixtures();
      await createSocialStructureFixtures();

      // populate sprint cache on startup
      await prepopulateSprintCache();
    } else {
      console.log("Development -- Local databases are populated. Not re-populating.");
    }
  }

  if (NODE_ENV === "production") {
    // check if collections are empty first so that data isn't overwritten
    if (await isPeopleEmpty() && await isProcessEmpty() &&
      await isProjectEmpty() && await isVenueEmpty() &&
      await isSocialStructureEmpty()) {
      console.log("Production -- Databases are empty. Populating.");

      // populate them if they are
      await createPeopleFixtures();
      await createProcessFixtures();
      await createProjectFixtures();
      await createVenueFixtures();
      await createSocialStructureFixtures();

      // populate sprint cache on startup
      await prepopulateSprintCache();
    } else {
      console.log("Production -- Databases are populated. Not re-populating.");
    }
  }
}

// listen for any errors after initial connection
mongoose.connection.on('error', err => {
  console.error(`MongoDB connection error: ${ err }`);
});