import mongoose from "mongoose";
import { Venue } from "./venue.js";

// TODO: try to encode office hours time for different projects
export const OfficeHours = Venue.discriminator("OfficeHours",
  new mongoose.Schema({
    /* intentionally left blank */
  })
);