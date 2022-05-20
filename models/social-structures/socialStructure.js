import mongoose from "mongoose";

// allow for different kinds of social structures to subclass this (e.g., SIG; Committee; Onboarding)
const options = { discriminatorKey: "kind" };

// TODO: does members make sense to have for onboarding pairing too? can leave it optional
// base social structure schema
export const SocialStructure = mongoose.model("SocialStructure",
  new mongoose.Schema({
    name: { type: String, required: true },                           // name of the social structure
    description: { type: String, required: true },                    // description of the structure
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }], // people who are associated with structure
  }, options)
);