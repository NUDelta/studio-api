import mongoose from 'mongoose';
import { Venue } from './venue.js';

export const OfficeHours = Venue.discriminator(
  'OfficeHours',
  new mongoose.Schema({
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
  })
);
