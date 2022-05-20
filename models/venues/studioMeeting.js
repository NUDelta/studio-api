import mongoose from "mongoose";
import { DateTime } from "luxon";

import { Venue } from "./venue.js";

export const StudioMeeting = Venue.discriminator('StudioMeeting',
  new mongoose.Schema({
    /* intentionally left blank */
  })
);