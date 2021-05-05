import { Person } from '../people/person.js';
import { NonPhdStudent } from '../people/nonphdstudent.js';
import { PhdStudent } from '../people/phdstudent.js';
import { Faculty } from '../people/faculty.js';

const createFaculty = async () => {
  // Haoqi Zhang
  let haoqi = new Faculty({
    name: "Haoqi Zhang",
    email: "haoqi@northwestern.edu",
    sig_lead: "BBQ"
  });
  await haoqi.save();

  // Nell O'Rourke
  let nell = new Faculty({
    name: "Nell O'Rourke",
    email: "nell@northwestern.edu",
    sig_lead: "BEACH"
  });
  await nell.save();
};

const createPhDStudents = async () => {
  // get mentors
  let hq = await Faculty.findOne({ name: "Haoqi Zhang" });
  let nell = await Faculty.findOne({ name: "Nell O'Rourke" }).exec();

  // get faculty mentor ids
  let hqId = hq._id;
  let nellId = nell._id;

  // Leesha Maliakal
  let leesha = new PhdStudent({
    name: "Leesha Maliakal",
    email: "leesha@northwestern.edu",
    sig_lead: "ARS",
    sig_member: "BBQ",
    faculty_mentor: hqId
  });
  await leesha.save();

  // Gobi Dasu
  let gobi = new PhdStudent({
    name: "Gobi Dasu",
    email: "gobi@northwestern.edu",
    sig_lead: "RALE",
    sig_member: "BBQ",
    faculty_mentor: hqId
  });
  await gobi.save();

  // Ryan Louie
  let ryan = new PhdStudent({
    name: "Ryan Louie",
    email: "ryan@northwestern.edu",
    sig_lead: "CE",
    sig_member: "BBQ",
    faculty_mentor: hqId
  });
  await ryan.save();

  // Kapil Garg
  let kapil = new PhdStudent({
    name: "Kapil Garg",
    email: "kapil@northwestern.edu",
    sig_lead: "NOT",
    sig_member: "BBQ",
    faculty_mentor: hqId
  });
  await kapil.save();

  // Harrison Kwik
  let harrison = new PhdStudent({
    name: "Harrison Kwik",
    email: "harrison@northwestern.edu",
    sig_member: "BBQ",
    faculty_mentor: nellId
  });
  await harrison.save();
};

const createNonPhDStudents = async () => {
  // get sig heads
  let leesha = await PhdStudent.findOne({ name: "Leesha Maliakal" });
  let gobi = await PhdStudent.findOne({ name: "Gobi Dasu" });
  let ryan = await PhdStudent.findOne({ name: "Ryan Louie" });
  let kapil = await PhdStudent.findOne({ name: "Kapil Garg" });

  // get sig head ids
  let leeshaId = leesha._id;
  let gobiId = gobi._id;
  let ryanId = ryan._id;
  let kapilId = kapil._id;

  // SIG ARS
  // Aimee van den Berg
  let aimee = new NonPhdStudent({
    name: "Aimee van den Berg",
    email: "aimee@northwestern.edu",
    sig_member: "Agile Research Studios",
    sig_head: leeshaId
  });
  await aimee.save();

  // Ariella Silver
  let ariella = new NonPhdStudent({
    name: "Ariella Silver",
    email: "ariella@northwestern.edu",
    sig_member: "Agile Research Studios",
    sig_head: leeshaId
  });
  await ariella.save();

  // Neha Sharma
  let neha = new NonPhdStudent({
    name: "Neha Sharma",
    email: "neha@northwestern.edu",
    sig_member: "Agile Research Studios",
    sig_head: leeshaId
  });
  await neha.save();

  // Molly Pribble
  let molly = new NonPhdStudent({
    name: "Molly Pribble",
    email: "molly@northwestern.edu",
    sig_member: "Networked Orchestration Technologies",
    sig_head: leeshaId
  });
  await molly.save();

  // SIG NOT
  // Jason Friedman
  let jason = new NonPhdStudent({
    name: "Jason Friedman",
    email: "jason@northwestern.edu",
    sig_member: "Networked Orchestration Technologies",
    sig_head: kapilId
  });
  await jason.save();

  // Hang Yin
  let hang = new NonPhdStudent({
    name: "Hang Yin",
    email: "hang@northwestern.edu",
    sig_member: "Networked Orchestration Technologies",
    sig_head: kapilId
  });
  await hang.save();

  // Charlotte Jones
  let charlotte = new NonPhdStudent({
    name: "Charlotte Jones",
    email: "charlotte@northwestern.edu",
    sig_member: "Networked Orchestration Technologies",
    sig_head: kapilId
  });
  await charlotte.save();
};

export const createPeopleFixtures = async () => {
  // start by clearing out the People collection
  await Person.deleteMany({}).exec();

  // populate faculty
  await createFaculty();

  // populate phd students
  await createPhDStudents();

  // populate non-phd students
  await createNonPhDStudents();
};