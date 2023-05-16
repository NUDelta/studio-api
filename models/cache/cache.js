import mongoose from 'mongoose';

// allow for schema to be inheritable for different community roles
const options = { discriminatorKey: 'kind' };

// base cache schema
export const Cache = mongoose.model(
  'Cache',
  new mongoose.Schema(
    {
      data: { type: Object, required: true },
      last_modified: { type: Date, required: true },
    },
    options
  )
);
