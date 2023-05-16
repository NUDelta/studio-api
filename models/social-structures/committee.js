import mongoose from 'mongoose';
import { SocialStructure } from './socialStructure.js';

// Committee social structure
export const CommitteeStructure = SocialStructure.discriminator(
  'CommitteeStructure',
  new mongoose.Schema({
    slack_channel: { type: String, required: true },
    committee_heads: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }],
  })
);
