import { DateTime } from "luxon";

// TODO: replace slack_channel names with IDs
// TODO: I think the SIG head and faculty mentor should be inferred from which SIG the project is associated with
// TODO: update dev links
export const projectData = [
  // SIG NOT
  {
    name: "Orchestration Scripting Environments",
    sig_name: "Networked Orchestration Technologies",
    students: ["Rawan Mohamed", "Grace Wang"],
    sig_head: "Kapil Garg",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1BUKFoNGcBHcX7lsCkgt43x6hqhJzo0ivfhNtispFwPM" :
      "https://docs.google.com/spreadsheets/d/1BUKFoNGcBHcX7lsCkgt43x6hqhJzo0ivfhNtispFwPM",
    compass: "",
    practical_research_canvas: "",
    research_research_canvas: "",
    eoq_checklist: "",
    slack_channel: "proj-os",
    status_update_date: DateTime.fromISO("2023-02-03T12:00:00", { zone: "America/Chicago" })
  },
  {
    name: "Orchestrating Planning and Reflection",
    sig_name: "Networked Orchestration Technologies",
    students: ["Alex Feng"],
    sig_head: "Kapil Garg",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1tj8nNu31rHRlSkF0Bsev6D3k-l1pembd73zhD9xnosg" :
      "https://docs.google.com/spreadsheets/d/1tj8nNu31rHRlSkF0Bsev6D3k-l1pembd73zhD9xnosg",
    compass: "",
    practical_research_canvas: "",
    research_research_canvas: "",
    eoq_checklist: "",
    slack_channel: "proj-orch-plan-reflect",
    status_update_date: DateTime.fromISO("2023-02-24T12:00:00", { zone: "America/Chicago" })
  },

  // SIG CE
  {
    name: "Collective Narrative",
    sig_name: "Collective Experiences",
    students: ["Pablo Gupta"],
    sig_head: "Ryan Louie",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1GmSVSBnmqMdIgxxnjNLYCEWvtFV9hXKgwlPPkuNulG8" :
      "https://docs.google.com/spreadsheets/d/1GmSVSBnmqMdIgxxnjNLYCEWvtFV9hXKgwlPPkuNulG8",
    compass: "",
    practical_research_canvas: "",
    research_research_canvas: "",
    eoq_checklist: "",
    slack_channel: "proj-cn",
    status_update_date: DateTime.fromISO("2023-01-20T12:00:00", { zone: "America/Chicago" })
  },
  {
    name: "CE for Relationship Development",
    sig_name: "Collective Experiences",
    students: ["Victoria Tran"],
    sig_head: "Ryan Louie",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1JKRWGhQV9ozLqFX58P4NwttxAaJgNgAiFWvpdWJb1BA" :
      "https://docs.google.com/spreadsheets/d/1JKRWGhQV9ozLqFX58P4NwttxAaJgNgAiFWvpdWJb1BA",
    compass: "",
    practical_research_canvas: "",
    research_research_canvas: "",
    eoq_checklist: "",
    slack_channel: "proj-ce-api",
    status_update_date: DateTime.fromISO("2023-02-17T12:00:00", { zone: "America/Chicago" })
  },

  // SIG RALE
  {
    name: "Knowledge Maps",
    sig_name: "Readily Available Learning Experiences",
    students: ["Mieraf Mulat", "Lev Rosenberg"],
    sig_head: "Gobi Dasu",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1gTwX6QYdSbtaMLOsVZQosT7d_sn6nzeTvCRo4l0EoaM" :
      "https://docs.google.com/spreadsheets/d/1gTwX6QYdSbtaMLOsVZQosT7d_sn6nzeTvCRo4l0EoaM",
    compass: "",
    practical_research_canvas: "",
    research_research_canvas: "",
    eoq_checklist: "",
    slack_channel: "proj-knowledge-maps",
    status_update_date: DateTime.fromISO("2023-03-03T12:00:00", { zone: "America/Chicago" })
  },

  // SIG CAMP
  {
    name: "Path",
    sig_name: "Contextually-Aware Metacognitive Practice",
    students: ["Amy Guo", "Dani Zhang"],
    sig_head: "Haoqi Zhang",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/12s0YU1DlpDosi-qq2KSmVPyBniGr3Qga4teyWlkK5fE" :
      "https://docs.google.com/spreadsheets/d/12s0YU1DlpDosi-qq2KSmVPyBniGr3Qga4teyWlkK5fE",
    compass: "",
    practical_research_canvas: "",
    research_research_canvas: "",
    eoq_checklist: "",
    slack_channel: "proj-path",
    status_update_date: DateTime.fromISO("2023-02-10T12:00:00", { zone: "America/Chicago" })
  },
  {
    name: "Q&A Buddy",
    sig_name: "Contextually-Aware Metacognitive Practice",
    students: ["Li Tan"],
    sig_head: "Haoqi Zhang",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/12NZ39U2Xu3_JgDPkzbU6eyAJOL9iwWRmL0sazUrk_y4" :
      "https://docs.google.com/spreadsheets/d/12NZ39U2Xu3_JgDPkzbU6eyAJOL9iwWRmL0sazUrk_y4",
    compass: "",
    practical_research_canvas: "",
    research_research_canvas: "",
    eoq_checklist: "",
    slack_channel: "proj-cardinal",
    status_update_date: DateTime.fromISO("2023-01-27T12:00:00", { zone: "America/Chicago" })
  },

  // SIG BBQ
  {
    name: "Gobi Proj",
    sig_name: "Summer BBQ",
    students: ["Gobi Dasu"],
    sig_head: "Haoqi Zhang",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1shYj6ZgYFtI3M8AZVzyNJdyjjg71kCABxJENqj2eLPg" :
      "https://docs.google.com/spreadsheets/d/1shYj6ZgYFtI3M8AZVzyNJdyjjg71kCABxJENqj2eLPg",
    compass: "",
    practical_research_canvas: "",
    research_research_canvas: "",
    eoq_checklist: "",
    slack_channel: "proj-gobi"
  },
  {
    name: "Ryan Proj",
    sig_name: "Summer BBQ",
    students: ["Ryan Louie"],
    sig_head: "Haoqi Zhang",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1NwFJQ5apRu04t_Ib5dP5yFULi3SdQKvb4u8z_4RP1WU" :
      "https://docs.google.com/spreadsheets/d/1NwFJQ5apRu04t_Ib5dP5yFULi3SdQKvb4u8z_4RP1WU",
    compass: "",
    practical_research_canvas: "",
    research_research_canvas: "",
    eoq_checklist: "",
    slack_channel: "proj-ryan"
  },
  {
    name: "Kapil Proj",
    sig_name: "Summer BBQ",
    students: ["Kapil Garg"],
    sig_head: "Haoqi Zhang",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1m5yQsnCa3Gv8mCnRPZ0yUtASSTfX8rQ5yFgIWgekbaA" :
      "https://docs.google.com/spreadsheets/d/1m5yQsnCa3Gv8mCnRPZ0yUtASSTfX8rQ5yFgIWgekbaA",
    compass: "",
    practical_research_canvas: "",
    research_research_canvas: "",
    eoq_checklist: "",
    slack_channel: "proj-kapil"
  },
];
