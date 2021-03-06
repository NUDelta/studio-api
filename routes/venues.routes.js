import { Router } from "express";
import bodyParser from "body-parser";

import { Venue } from "../models/venues/venue.js";
import { Studio } from "../models/venues/studio.js";
import { SIG } from "../models/venues/sig.js";

export const venueRouter = new Router();

// fetch all venues
venueRouter.get("/", async (req, res) => {
  try {
    let allVenues = await Venue.find();
    res.json(allVenues);
  } catch (error) {
    res.send(`Error when fetching all venues: ${ error }`);
  }
});

// fetch studio meeting time
venueRouter.get("/studio", async (req, res) => {
  try {
    let studioMeeting = await Studio.find();
    res.json(studioMeeting);
  } catch (error) {
    res.send(`Error when fetching studio meeting: ${ error }`);
  }
});

// fetch all SIG meetings
venueRouter.get("/sig", async (req, res) => {
  try {
    let allSigMeetings = await SIG.find().populate("sig_head").populate("sig_members");
    res.json(allSigMeetings);
  } catch (error) {
    res.send(`Error when fetching sig meetings: ${ error }`);
  }
});