import mongoose from 'mongoose';
import { Venue } from './venue.js';

export const SigMeeting = Venue.discriminator(
  'SigMeeting',
  new mongoose.Schema({
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
  })
);
