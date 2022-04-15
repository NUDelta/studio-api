import mongoose from "mongoose";
import { Process } from "./process.js";

// sprint process
export const Sprint = Process.discriminator("Sprint",
  new mongoose.Schema({
    start_day: { type: Date, required: true },  // just the date is important here
    end_day: { type: Date, required: true }     // just the date is important here
    // TODO: will need to support offsets for each SIG -- have a general start/stop for each sprint, and then separate offsets for each SIG since their sprints start/end on different days [this information is crucial for the engine to be able to schedule check-ins before/after events for each SIG
  })
);