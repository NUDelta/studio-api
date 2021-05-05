import { DateTime } from 'luxon';

import { Venue } from "../venues/venue.js";
import { SIG } from "../venues/sig.js";
import { Studio } from "../venues/studio.js";
import { PhdStudent } from "../people/phdstudent.js";
import { NonPhdStudent } from "../people/nonphdstudent.js";

const createStudio = async () => {
  let studioMeeting = new Studio({
    name: "Studio meeting",
    description: "Weekly studio meeting with all members of the community.",
    day_of_week: "Friday",
    start_time: DateTime.fromISO("2000-01-01T12:00:00-05:00", { setZone: true }),
    end_time: DateTime.fromISO("2000-01-01T15:00:00-05:00", { setZone: true })
  });
  await studioMeeting.save();
};

const createSIGs = async () => {
  // get sig heads
  let leesha = await PhdStudent.findOne({ name: "Leesha Maliakal" });
  let kapil = await PhdStudent.findOne({ name: "Kapil Garg" });

  // get all students for ARS and NOT sigs
  let aimee = await NonPhdStudent.findOne({ name: "Aimee van den Berg" });
  let ariella = await NonPhdStudent.findOne({ name: "Ariella Silver" });
  let neha = await NonPhdStudent.findOne({ name: "Neha Sharma" });
  let molly = await NonPhdStudent.findOne({ name: "Molly Pribble" });

  let jason = await NonPhdStudent.findOne({ name: "Jason Friedman" });
  let hang = await NonPhdStudent.findOne({ name: "Hang Yin" });
  let charlotte = await NonPhdStudent.findOne({ name: "Charlotte Jones" });

  // create ARS sig
  let arsSIG = new SIG({
    name: "ARS SIG Meeting",
    description: "Weekly SIG meeting for ARS SIG",
    day_of_week: "Wednesday",
    start_time: DateTime.fromISO("2000-01-01T09:00:00-05:00", { setZone: true }),
    end_time: DateTime.fromISO("2000-01-01T10:00:00-05:00", { setZone: true }),
    sig_head: leesha._id,
    sig_members: [aimee._id, ariella._id, neha._id, molly._id]
  });
  await arsSIG.save();

  // create NOT sig
  let notSIG = new SIG({
    name: "NOT SIG Meeting",
    description: "Weekly NOT meeting for ARS SIG",
    day_of_week: "Wednesday",
    start_time: DateTime.fromISO("2000-01-01T11:00:00-05:00", { setZone: true }),
    end_time: DateTime.fromISO("2000-01-01T12:00:00-05:00", { setZone: true }),
    sig_head: kapil._id,
    sig_members: [jason._id, hang._id, charlotte._id]
  });
  await notSIG.save();
};

export const createVenueFixtures = async () => {
  // start by clearing out the Venue collection
  await Venue.deleteMany({}).exec();

  // populate studio meeting
  await createStudio();

  // populate sigs
  await createSIGs();
}