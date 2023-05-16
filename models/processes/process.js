import mongoose from 'mongoose';

// allow for schema to be inheritable for different kinds of processes
const options = { discriminatorKey: 'kind' };

// base process schema
export const Process = mongoose.model(
  'Process',
  new mongoose.Schema(
    {
      name: { type: String, required: true },
    },
    options
  )
);
