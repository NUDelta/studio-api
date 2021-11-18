// application imports
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser";

import path from "path";
import fs from 'fs';
import { google } from 'googleapis';
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
const app = express();
const router = express.Router();

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
  Authenticate google spreadsheets
 */
export const googleServiceAccountAuth = {
  client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY
};

/*
  Authenticate google drive
  TODO: look at alt version of auth, such as with a service account
  https://stackoverflow.com/questions/45492703/google-drive-api-oauth-and-service-account
  Closer: https://developers.google.com/identity/protocols/oauth2/service-account#python
 */
// TODO: check if already authenticated
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

google.options({ auth: oauth2Client });

async function authenticate(scopes) {
  return new Promise((resolve, reject) => {
    // grab the url that will be used for authorization
    const authorizeUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes.join(' '),
    });
    const server = http
      .createServer(async (req, res) => {
        try {
          if (req.url.indexOf('/oauth2callback') > -1) {
            const qs = new url.URL(req.url, APP_URL).searchParams;
            res.end('Authentication successful! Please return to the console.');
            server.destroy();
            const {tokens} = await oauth2Client.getToken(qs.get('code'));
            oauth2Client.credentials = tokens;
            resolve(oauth2Client);
          }
        } catch (e) {
          reject(e);
        }
      })
      .listen(PORT, () => {
        // open the browser to the authorize url to start the workflow
        opn(authorizeUrl, {wait: false}).then(cp => cp.unref());
      });
    destroyer(server);
  });
}

const scopes =[
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/drive.appdata',
  'https://www.googleapis.com/auth/drive.metadata'
];

try {
  await authenticate(scopes);
  console.log(`Authenticated Google Drive APIs`);
} catch (error) {
  console.error(`Error with authenticated Google Drive APIs to MongoDB: ${ error }`);
}

// TODO: might not be needed since line 86 already adds the oauth client
export const googleDrive = google.drive({
  version: 'v3',
  auth: oauth2Client
});

/*
 Setup routes
 */
app.use(bodyParser.json(), cors());
app.use('/users', userRouter);
app.use('/venues', venueRouter);
app.use('/projects', projectRouter);
app.use('/sprints', sprintRouter);


// catch any undefined routes
app.all('*', (request, response) => {
  console.log('Returning a 404 from the catch-all route');
  return response.sendStatus(404);
});

/*
 Start application
 */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use((req, res) => {
  res.send('Welcome to Express');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${ PORT }`)
});
