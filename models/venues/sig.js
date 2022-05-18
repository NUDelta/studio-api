import mongoose from "mongoose";
import { Venue } from "./venue.js";

// TODO: model SIG social structure
// TODO: add sig name
export const SIG = Venue.discriminator('SIG',
  new mongoose.Schema({
    sig_head: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
    sig_members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' } ],
    slack_channel: { type: String, required: true }
  })
);