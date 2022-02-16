import { DateTime } from "luxon";

export const projectData = [
  // SIG ARS
  {
    name: "Skill Tracking and Development",
    sig_name: "Agile Research Studios",
    students: ["Aimee van den Berg", "Ariella Silver"],
    sig_head: "Leesha Maliakal Shah",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: "https://docs.google.com/spreadsheets/d/1IiNI6fisTZKpgg44lUWSpV7KROf_MCvlID9JgZZ3CUY",
    slack_channel: "proj-stash",
    status_update_date: DateTime.fromISO("2021-04-30T12:00:00-05:00", { setZone: true })
  },
  {
    name: "Metacognitive Reflection",
    sig_name: "Agile Research Studios",
    students: ["Neha Sharma", "Molly Pribble"],
    sig_head: "Leesha Maliakal Shah",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: "https://docs.google.com/spreadsheets/d/1QCAMuWS_eWnkwsBidzZ5dqnpSCl5PP1Rt7u1JUvWfAM",
    slack_channel: "proj-mindyoga",
    status_update_date: DateTime.fromISO("2021-05-07T12:00:00-05:00", { setZone: true })
  },

  // SIG NOT
  {
    name: "Orchestration Scripting Environments",
    sig_name: "Networked Orchestration Technologies",
    students: ["Jason Friedman", "Hang Yin"],
    sig_head: "Kapil Garg",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: "https://docs.google.com/spreadsheets/d/162yKb5WZsjJz7mL3pIwUyAtEE2B6XdvV3kw0PnS18Xw",
    slack_channel: "proj-os",
    status_update_date: DateTime.fromISO("2021-04-09T12:00:00-05:00", { setZone: true })
  },
  {
    name: "Interactive SOAP Notes",
    sig_name: "Networked Orchestration Technologies",
    students: ["Charlotte Jones"],
    sig_head: "Kapil Garg",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: "https://docs.google.com/spreadsheets/d/1tnuLymq9V9foosTMc0A8dyp74xPlSE-UmTTs5sHSSFA",
    slack_channel: "proj-soap",
    status_update_date: DateTime.fromISO("2021-05-21T12:00:00-05:00", { setZone: true })
  }
];
