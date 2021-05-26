import mongoose from "mongoose";
import { Process } from "./process.js";

// sprint process
export const Sprint = Process.discriminator("Sprint",
  new mongoose.Schema({
    start_day: { type: Date, required: true },
    end_day: { type: Date, required: true }
    // TODO: will need to support offsets for each SIG -- have a general start/stop for each sprint, and then separate offsets for each SIG since their sprints start/end on different days [this information is crucial for
  })
);