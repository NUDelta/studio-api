import { Router } from 'express';
import {
  fetchAllVenues,
  fetchOfficeHours,
  fetchSigMeetings,
  fetchStudioMeetings,
  fetchVenuesForPerson,
  fetchVenuesForProject,
  fetchVenuesForSig,
  firstInstanceOfVenue,
  lastInstanceOfVenue,
} from '../controllers/venues/fetch.js';

export const venueRouter = new Router();

// TODO: maybe include ability to ask for nextInstance of each venue
// TODO: implement a generic venue route that returns whatever venue is asked for

/**
 * Fetches all venues.
 */
venueRouter.get('/', async (req, res) => {
  try {
    res.json(await fetchAllVenues());
  } catch (error) {
    let msg = `Error in /venues/: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

/**
 * Fetch all SIG meetings.
 */
venueRouter.get('/sig', async (req, res) => {
  try {
    res.json(await fetchSigMeetings());
  } catch (error) {
    let msg = `Error in /venues/sig: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

/**
 * Fetch all office hours.
 */
venueRouter.get('/officehours', async (req, res) => {
  try {
    res.json(await fetchOfficeHours());
  } catch (error) {
    let msg = `Error in /venues/officehours: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

/**
 * Fetches all Studio venues.
 */
venueRouter.get('/studio', async (req, res) => {
  try {
    res.json(await fetchStudioMeetings());
  } catch (error) {
    let msg = `Error in /venues/studio: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

/**
 * Fetch the relevant venues for a project. These include Studio, SIG, and Office Hours.
 */
venueRouter.get('/forProject', async (req, res) => {
  try {
    // fetch the project's name from the query that we want the sprint log for, and check if valid
    let projectName = req.query.projectName;
    if (projectName === undefined) {
      throw new Error('projectName parameter not specified.');
    }

    res.json(await fetchVenuesForProject(projectName));
  } catch (error) {
    let msg = `Error in /venues/forProject: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

/**
 * Fetch the relevant venues for a person. These include Studio, SIG, and Office Hours.
 * TODO: when new students are modeled, also include things like onboarding mentors.
 */
venueRouter.get('/forPerson', async (req, res) => {
  try {
    // fetch the person's name from the query that we want the relevant social structures for
    let personName = req.query.personName;
    if (personName === undefined) {
      throw new Error('personName parameter not specified.');
    }

    res.json(await fetchVenuesForPerson(personName));
  } catch (error) {
    let msg = `Error in /venues/forPerson: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

/**
 * Fetch the relevant venues for a SIG. These include SIG and Office Hours.
 */
venueRouter.get('/forSig', async (req, res) => {
  try {
    // fetch the person's name from the query that we want the relevant social structures for
    let sigName = req.query.sigName;
    if (sigName === undefined) {
      throw new Error('sigName parameter not specified.');
    }

    res.json(await fetchVenuesForSig(sigName));
  } catch (error) {
    let msg = `Error in /venues/forSig: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

/**
 * Fetches the start and end time of the first instance of a venue.
 * For Studio meetings, this is the week of Sprint 0. For all other venues, Sprint 1.
 */
venueRouter.get('/firstInstance', async (req, res) => {
  try {
    // check if venue name was passed in
    let venueName = req.query.venueName;
    if (venueName === undefined) {
      throw new Error('venueName parameter not specified.');
    }

    res.json(await firstInstanceOfVenue(venueName));
  } catch (error) {
    let msg = `Error in /venues/firstInstance: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});

/**
 * Fetches the start and end time of the last instance of a venue.
 * For all venues, this is the week of Sprint 5.
 * TODO: This will probably break for Fall when Sprint 5 is 2 weeks.
 */
venueRouter.get('/lastInstance', async (req, res) => {
  try {
    // check if venue name was passed in
    let venueName = req.query.venueName;
    if (venueName === undefined) {
      throw new Error('venueName parameter not specified.');
    }

    res.json(await lastInstanceOfVenue(venueName));
  } catch (error) {
    let msg = `Error in /venues/lastInstance: ${error}`;
    console.error(msg);
    res.send(msg);
  }
});
