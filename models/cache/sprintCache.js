import mongoose from 'mongoose';
import { Cache } from './cache.js';

// sprint log cache
export const SprintCache = Cache.discriminator(
  'SprintCache',
  new mongoose.Schema({
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  })
);
