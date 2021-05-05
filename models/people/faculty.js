import mongoose from "mongoose";
import { Person } from './person.js';

// faculty member
const FacultyPerson = Person.discriminator('Faculty',
  new mongoose.Schema({
    sig_lead: { type: String, required: true }, // this should reference the SIG itself; faculties can lead multiple SIGs
  })
);

export const Faculty = mongoose.model('Faculty');