import mongoose from "mongoose";
import { Venue } from "./venue.js";

export const Studio = Venue.discriminator('Studio',
  new mongoose.Schema({
    /* intentionally left blank */
  })
);