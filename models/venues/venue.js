import mongoose from "mongoose";

// create require
// from: https://stackoverflow.com/a/65402918
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method

// get a list of timezones
// from: https://github.com/moment/luxon/issues/353#issuecomment-923701822
import { DateTime } from "luxon";
const zones = require('tzdata');

const luxonValidTimezones = [
  ...new Set(
    Object.keys(zones.zones).filter(
      tz => tz.includes('/') && DateTime.local().setZone(tz).isValid
    )
  ),
].sort((a, b) => (a < b ? -1 : 1));

// allow for schema to be inheritable for different community roles
const options = { discriminatorKey : 'type' }

// base venue schema
export const Venue = mongoose.model('Venue',
  new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    day_of_week: {
      type: String,
      required: true,
      enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    start_time: { type: String, required: true }, // HH:MM:SS
    end_time: { type: String, required: true },   // HH:MM:SS
    timezone: { type: String, requrired: true, enum: luxonValidTimezones }
    }, options)
);
