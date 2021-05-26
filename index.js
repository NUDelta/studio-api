// application imports
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser";

// routes
import { userRouter } from "./routes/people.routes.js";
import { venueRouter } from "./routes/venues.routes.js";
import { projectRouter } from "./routes/projects.routes.js";

// fixtures for development
import { createPeopleFixtures } from "./models/fixtures/peopleFixtures.js";
import { createVenueFixtures } from "./models/fixtures/venueFixtures.js";
import { createProjectFixtures } from "./models/fixtures/projectFixtures.js";

// setup application
const app = express();
const router = express.Router();

// fetch env variables
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/studio-api";
const POOL_SIZE = process.env.POOL_SIZE || 25;
const NODE_ENV = process.env.NODE_ENV || "development";

/*
  Setup options for mongodb connection
 */
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: POOL_SIZE
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
  }
}

// listen for any errors after initial connection
mongoose.connection.on('error', err => {
  console.error(`MongoDB connection error: ${ err }`);
});

/*
  Setup Google Spreadsheets/Google Drive APIs
 */
export const googleServiceAccountAuth = {
  client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY
};

/*
 Setup routes
 */
app.use(bodyParser.json(), cors());
app.use('/users', userRouter);
app.use('/venues', venueRouter);
app.use('/projects', projectRouter);


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
