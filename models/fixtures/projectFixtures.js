import { Project } from "../project/project.js";
import { PhdStudent } from "../people/phdstudent.js";
import { Faculty } from "../people/faculty.js";
import { NonPhdStudent } from "../people/nonphdstudent.js";
import { DateTime } from "luxon";

const createProjects = async () => {
  // get faculty
  let hq = await Faculty.findOne({ name: "Haoqi Zhang" });
  let nell = await Faculty.findOne({ name: "Nell O'Rourke" });

  // get sig heads
  let leesha = await PhdStudent.findOne({ name: "Leesha Maliakal" });
  let gobi = await PhdStudent.findOne({ name: "Gobi Dasu" });
  let ryan = await PhdStudent.findOne({ name: "Ryan Louie" });
  let kapil = await PhdStudent.findOne({ name: "Kapil Garg" });

  // get all students for ARS and NOT sigs
  let aimee = await NonPhdStudent.findOne({ name: "Aimee van den Berg" });
  let ariella = await NonPhdStudent.findOne({ name: "Ariella Silver" });
  let neha = await NonPhdStudent.findOne({ name: "Neha Sharma" });
  let molly = await NonPhdStudent.findOne({ name: "Molly Pribble" });

  let jason = await NonPhdStudent.findOne({ name: "Jason Friedman" });
  let hang = await NonPhdStudent.findOne({ name: "Hang Yin" });
  let charlotte = await NonPhdStudent.findOne({ name: "Charlotte Jones" });

  // create ARS projects
  let skillTrackingProj = new Project({
    name: "Skill Tracking and Development",
    sig_name: "Agile Research Studios",
    students: [aimee._id, ariella._id],
    sig_head: leesha._id,
    faculty_mentor: hq._id,
    sprint_log: "https://docs.google.com/spreadsheets/d/1IiNI6fisTZKpgg44lUWSpV7KROf_MCvlID9JgZZ3CUY",
    slack_channel: "proj-stash",
    status_update_date: DateTime.fromISO("2021-04-30T12:00:00-05:00", { setZone: true })
  });
  await skillTrackingProj.save();

  let metacognitiveReflectionProj = new Project({
    name: "Metacognitive Reflection",
    sig_name: "Agile Research Studios",
    students: [neha._id, molly._id],
    sig_head: leesha._id,
    faculty_mentor: hq._id,
    sprint_log: "https://docs.google.com/spreadsheets/d/1QCAMuWS_eWnkwsBidzZ5dqnpSCl5PP1Rt7u1JUvWfAM",
    slack_channel: "proj-mindyoga",
    status_update_date: DateTime.fromISO("2021-05-07T12:00:00-05:00", { setZone: true })
  });
  await metacognitiveReflectionProj.save();

  // create NOT projects
  let osEnvProj = new Project({
    name: "Orchestration Scripting Environments",
    sig_name: "Networked Orchestration Technologies",
    students: [jason._id, hang._id],
    sig_head: kapil._id,
    faculty_mentor: hq._id,
    sprint_log: "https://docs.google.com/spreadsheets/d/162yKb5WZsjJz7mL3pIwUyAtEE2B6XdvV3kw0PnS18Xw",
    slack_channel: "proj-os",
    status_update_date: DateTime.fromISO("2021-04-09T12:00:00-05:00", { setZone: true })
  });
  await osEnvProj.save();

  let soapProj = new Project({
    name: "Interactive SOAP Notes",
    sig_name: "Networked Orchestration Technologies",
    students: [charlotte._id],
    sig_head: kapil._id,
    faculty_mentor: hq._id,
    sprint_log: "https://docs.google.com/spreadsheets/d/1tnuLymq9V9foosTMc0A8dyp74xPlSE-UmTTs5sHSSFA",
    slack_channel: "proj-soap",
    status_update_date: DateTime.fromISO("2021-05-21T12:00:00-05:00", { setZone: true })
  });
  await soapProj.save();
};

export const createProjectFixtures = async () => {
  // start by clearing out the Project collection
  await Project.deleteMany({}).exec();

  // populate projects
  await createProjects();
}