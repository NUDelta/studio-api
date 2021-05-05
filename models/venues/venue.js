import mongoose from "mongoose";

// allow for schema to be inheritable for different community roles
const options = { discriminatorKey : 'type' }

// base venue schema
export const Venue = mongoose.model('Venue',
  new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    day_of_week: {
      type: String,
      required: true,
      enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    start_time: { // TODO: need a middleware to extract only the time from the date
      type: Date,
      required: true
    },
    end_time: { // TODO: need a middleware to extract only the time from the date
      type: Date,
      required: true
    }
    }, options)
);

