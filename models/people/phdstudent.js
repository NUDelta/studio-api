import mongoose from "mongoose";
import { Person } from './person.js';

// phd student
export const PhdStudent = Person.discriminator('PhdStudent',
  new mongoose.Schema({
      sig_lead: { type: String, required: false }, // this should reference the SIG itself
      sig_member: { type: String, required: true }, // this should reference the SIG itself
      faculty_mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty' } // should enable a list if there could be multiple faculty mentors for a student
  })
);