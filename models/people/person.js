import mongoose from 'mongoose';

// allow for schema to be inheritable for different community roles
const options = { discriminatorKey: 'role' };

// base person schema
export const Person = mongoose.model(
  'Person',
  new mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      slack_id: { type: String, required: true },
      is_active: { type: Boolean, required: true, default: true },
    },
    options
  )
);
