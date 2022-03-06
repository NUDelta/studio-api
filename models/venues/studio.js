import mongoose from "mongoose";
import { DateTime } from "luxon";

import { Venue } from "./venue.js";

export const Studio = Venue.discriminator('Studio',
  new mongoose.Schema({
    slack_channel: { type: String, required: true }
  })
);