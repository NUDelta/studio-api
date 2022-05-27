import mongoose from "mongoose";
import { SocialStructure } from "./socialStructure.js";

// Onboarding mentor-mentee
export const OnboardingPairing = SocialStructure.discriminator("OnboardingPairing",
  new mongoose.Schema({
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
    mentee: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
  })
);