import mongoose from "mongoose";
import { Person } from './person.js';

// non-phd student
const NonPhdStudentPerson = Person.discriminator('NonPhdStudent',
  new mongoose.Schema({
    sig_member: { type: String, required: true }, // this should reference the SIG itself
    sig_head: { type: mongoose.Schema.Types.ObjectId, ref: 'PhdStudent' } // should enable a list if there could be multiple SIG heads
    })
);

export const NonPhdStudent = mongoose.model('NonPhdStudent');