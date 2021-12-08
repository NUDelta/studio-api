import mongoose from "mongoose";
import { Venue } from "./venue.js";

export const OfficeHours = Venue.discriminator("OfficeHours",
  new mongoose.Schema({
    /* intentionally left blank */
  })
);