// application imports
import Slack from "@slack/bolt"
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser";

import path from "path";
import fs from 'fs';
import http from 'http';
import url from 'url';
import opn from 'open';
import destroyer from 'server-destroy';

// routes
import { userRouter } from "./routes/people.routes.js";
import { venueRouter } from "./routes/venues.routes.js";
import { projectRouter } from "./routes/projects.routes.js";
import { sprintRouter } from "./routes/sprints.routes.js";

// fixtures for development
import { createPeopleFixtures } from "./models/fixtures/peopleFixtures.js";
import { createVenueFixtures } from "./models/fixtures/venueFixtures.js";
import { createProjectFixtures } from "./models/fixtures/projectFixtures.js";
import { createProcessFixtures } from "./models/fixtures/processFixtures.js";

// setup application
const receiver = new Slack.ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

const app = new Slack.App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver: receiver
});

// fetch env variables
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/studio-api";
const NODE_ENV = process.env.NODE_ENV || "development";
const APP_URL = process.env.APP_URL || `http://localhost:${ PORT }`;

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
    // TODO: populate DB with fixtures here
    await createPeopleFixtures();
    await createVenueFixtures();
    await createProjectFixtures();
    await createProcessFixtures();
  }
}

// listen for any errors after initial connection
mongoose.connection.on('error', err => {
  console.error(`MongoDB connection error: ${ err }`);
});


/*
 Setup routes
 */
// TODO: see second answer about how to split up routes: https://stackoverflow.com/questions/25260818/rest-with-express-js-nested-router
app.receiver.app.use(bodyParser.json(), cors());
app.receiver.app.use('/users', userRouter);
app.receiver.app.use('/venues', venueRouter);
app.receiver.app.use('/projects', projectRouter);
app.receiver.app.use('/sprints', sprintRouter);

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
 Setup Slack Bot
 */
// start application
(async () => {
  // start app
  await app.start(PORT);
  console.log(`App running: ${ APP_URL }`);

  console.log(await app.client.conversations.list())

  const result = await app.client.chat.postMessage({
    channel: "C032MMU3JH1",
    text: "test text"
  });
  console.log(result)
})();


// app.use(bodyParser.json(), cors());
// app.use('/users', userRouter);
// app.use('/venues', venueRouter);
// app.use('/projects', projectRouter);
// app.use('/sprints', sprintRouter);


// // catch any undefined routes
// app.all('*', (request, response) => {
//   console.log('Returning a 404 from the catch-all route');
//   return response.sendStatus(404);
// });
//
// /*
//  Start application
//  */
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
//
// app.use((req, res) => {
//   res.send('Welcome to Express');
// });
//
// app.listen(PORT, () => {
//   console.log(`Server running on port ${ PORT }`)
// });
