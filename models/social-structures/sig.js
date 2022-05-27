import mongoose from "mongoose";
import { SocialStructure } from "./socialStructure.js";

// SIG social structure
export const SigStructure = SocialStructure.discriminator("SigStructure",
  new mongoose.Schema({
    abbreviation: { type: String, required: true },
    slack_channel: { type: String, required: true },
    sig_head: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
  })
);