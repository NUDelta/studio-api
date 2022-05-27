import mongoose from "mongoose";

export const Project = mongoose.model('Project',
  new mongoose.Schema({
        name: { type: String, required: true },
        sig_name: { type: String, required: true }, // this should reference the SIG itself
        students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }], // this only works for undergrads
        sig_head: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' }, // phd students can have faculty mentor SIG heads
        faculty_mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty' }, // should enable a list if there could be multiple faculty mentors for a student
        sprint_log: { type: String, required: true },
        slack_channel: { type: String, required: true },
        status_update_date: { type: Date, required: false } // just the date is important here
  })
);