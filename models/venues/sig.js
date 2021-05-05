import mongoose from "mongoose";
import { Venue } from "./venue.js";

export const SIG = Venue.discriminator('SIG',
  new mongoose.Schema({
    sig_head: { type: mongoose.Schema.Types.ObjectId, ref: 'PhdStudent' },
    sig_members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'NonPhdStudent' } ]
  })
);