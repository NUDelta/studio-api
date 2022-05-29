import mongoose from "mongoose";
import { Person } from './person.js';

// phd student
export const PhdStudent = Person.discriminator('PhdStudent',
  new mongoose.Schema({
    sig_lead: { type: String, required: false }, // this should reference the SIG itself
    sig_member: { type: String, required: true }, // this should reference the SIG itself
    sig_head: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty' }, // should enable a list if there could be multiple faculty mentors for a student
    individual_progress_map: { type: String, required: false },
    mid_quarter_check_in: { type: String, required: false },
    eoq_self_assessment: { type: String, required: false },
  })
);