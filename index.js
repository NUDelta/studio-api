// application imports
import Slack from "@slack/bolt"
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

// routes
import { peopleRouter } from "./routes/people.routes.js";
import { socialStructureRouter } from "./routes/socialStructures.routes.js";
import { venueRouter } from "./routes/venues.routes.js";
import { projectRouter } from "./routes/projects.routes.js";
import { sprintRouter } from "./routes/sprints.routes.js";
import { slackRouter } from "./routes/slack.routes.js";
import { dataRouter } from "./routes/data.routes.js";

// fixtures for development
import {
  allDatabasesAreEmpty,
  populateData
} from "./controllers/databaseManagement/refreshData.js";

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

// TODO: have message update the same text so multiple messages aren't coming in
// add handlers for different selection types
app.action("single-select", async ({ body, client, ack, say, logger }) => {
    await ack();
    try {
      // console.log(JSON.stringify(body, null, 2))
      await say("Ok! I will orchestrate the following strategies: \n" +
        `${ body.actions[0].selected_option.text.text }`
      );
    } catch (error) {
      logger.error(error);
    }
  }
);

app.action("multi-select", async ({ body, client, ack, say, logger }) => {
    await ack();
    try {
      // console.log(JSON.stringify(body, null, 2))
      await say("Ok! I will orchestrate the following strategies: \n" +
        `${ body.actions[0].selected_options.map(option => {
          return `${ option.text.text } \n`
        }).join("")}`
      )
    } catch (error) {
      logger.error(error);
    }
  }
);

app.action("checkbox", async ({ body, client, ack, say, logger }) => {
    await ack();
    try {
      // console.log(JSON.stringify(body, null, 2))
      await say("Ok! I will orchestrate the following strategies: \n" +
        `${ body.actions[0].selected_options.map(option => {
          return `${ option.text.text } \n`
        }).join("")}`
      );
    } catch (error) {
      logger.error(error);
    }
  }
);



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
app.receiver.app.use('/socialStructures', socialStructureRouter);
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
try {
  await mongoose.connect(MONGODB_URI, mongooseOptions);
  console.log(`Connected to MongoDB: ${ MONGODB_URI } with options ${ mongooseOptions }`);
} catch (error) {
  console.error(`Error with connecting to MongoDB: ${ error }`);
} finally {
  if (NODE_ENV === "development") {
    if (SHOULD_REFRESH_DATA) {
      console.log("Development -- Local databases are empty. Populating.");

      // TODO: populate database fixtures here
      // populate all data synchronously
      await populateData();
    } else {
      console.log("Development -- Local databases are populated. Not re-populating.");
    }
  }

  if (NODE_ENV === "production") {
    // check if collections are empty first so that data isn't overwritten
    if (await allDatabasesAreEmpty()) {
      console.log("Production -- Databases are empty. Populating.");

      // populate all data synchronously
      await populateData();
    } else {
      console.log("Production -- Databases are populated. Not re-populating.");
    }
  }
}

// listen for any errors after initial connection
mongoose.connection.on('error', err => {
  console.error(`MongoDB connection error: ${ err }`);
});