import { DateTime } from "luxon";

// TODO: replace slack_channel names with IDs
// TODO: I think the SIG head and faculty mentor should be inferred from which SIG the project is associated with
// TODO: update dev links
export const projectData = [
  // SIG NOT
  {
    name: "Orchestration Scripting Environments",
    sig_name: "Networked Orchestration Technologies",
    students: ["Chase Duvall", "Rawan Mohamed"],
    sig_head: "Kapil Garg",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1F6zIPtO7acEtG7l-ju5nByvBLKOhALj9MgEp0blNs3o" :
      "https://docs.google.com/spreadsheets/d/1ikJ2PZix-5VSJ0iUPp0SD9RC8gTlU8B0FQ1BedH2LSI",
    practical_research_canvas: "https://docs.google.com/spreadsheets/d/1IYDaFNGJFuAD2LyVP2XM1QMLiz-WKeqxeJ51syZUai0",
    research_research_canvas: "https://docs.google.com/spreadsheets/d/1QrhTA2vDjvfaXG25Leq1apjkTFqXiPqYRR3pkwffgBk",
    eoq_checklist: "",
    slack_channel: "proj-os",
    status_update_date: DateTime.fromISO("2022-10-14T13:00:00", { zone: "America/Chicago" })
  },
  {
    name: "Orchestrating Planning and Reflection",
    sig_name: "Networked Orchestration Technologies",
    students: ["Alex Feng"],
    sig_head: "Kapil Garg",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1NkAfUNxhmq0dwtlZAB_pUks8W6gSF2yS4FstJi6t_NA" :
      "https://docs.google.com/spreadsheets/d/1t8GYyiVd46XHeTVIA2694wtZMBxQ6KlR0ZBdaToaUuQ",
    practical_research_canvas: "",
    research_research_canvas: "",
    eoq_checklist: "",
    slack_channel: "proj-orch-plan-reflect",
    status_update_date: DateTime.fromISO("2022-11-11T13:00:00", { zone: "America/Chicago" })
  },

  // SIG CE
  {
    name: "Collective Narrative",
    sig_name: "Collective Experiences",
    students: ["Parveen Dhanoa", "Richard Lam"],
    sig_head: "Ryan Louie",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1S6iQyLUVBi6081EJ2J-AFZzSJN9od3yzuAhdBAOVNsQ" :
      "https://docs.google.com/spreadsheets/d/1S6iQyLUVBi6081EJ2J-AFZzSJN9od3yzuAhdBAOVNsQ",
    practical_research_canvas: "https://docs.google.com/spreadsheets/d/1c-6jxYv8SH4lS_nAFGSZt831l0rkbcYRkUzxJI71kzw",
    research_research_canvas: "https://docs.google.com/spreadsheets/d/1-fd_Ub3FMGyU5YTI8Tn1pBoCy9vQaFLGnWv-E_yqq74/edit?usp=sharing",
    eoq_checklist: "",
    slack_channel: "proj-cn",
    status_update_date: DateTime.fromISO("2022-11-18T13:00:00", { zone: "America/Chicago" })
  },
  {
    name: "CE for Relationship Development",
    sig_name: "Collective Experiences",
    students: ["Victoria Tran", "Cindy Hu"],
    sig_head: "Ryan Louie",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1gOFHaqg5Q1tf1vdi1DvfQApjq9dqCP-584OmFQlLD0w" :
      "https://docs.google.com/spreadsheets/d/1gOFHaqg5Q1tf1vdi1DvfQApjq9dqCP-584OmFQlLD0w",
    practical_research_canvas: "https://docs.google.com/spreadsheets/d/175kb67T4KR1yb3Kk9Ig7BSWEYsbWMAmipOXeR1Upp54",
    research_research_canvas: "https://docs.google.com/spreadsheets/d/1rxprKNeiNwy8aomwYCBT9C5I5lBNwbtJtrILgdmBJZM/edit?usp=sharing",
    eoq_checklist: "",
    slack_channel: "proj-ce-api",
    status_update_date: DateTime.fromISO("2022-11-04T13:00:00", { zone: "America/Chicago" })
  },

  // SIG RALE
  {
    name: "Knowledge Maps",
    sig_name: "Readily Available Learning Experiences",
    students: ["Alexandra Andreiu", "Mieraf Mulat"],
    sig_head: "Gobi Dasu",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/16YsqHVxAtUQvCRfUTtIgvMGNnSova-m7PpRcBgAEMUU" :
      "https://docs.google.com/spreadsheets/d/16YsqHVxAtUQvCRfUTtIgvMGNnSova-m7PpRcBgAEMUU",
    practical_research_canvas: "https://docs.google.com/spreadsheets/d/1czEFCtvh7Itqe669uu7bQ_8_2Hj4zqV3ZpJUu3RIN_w",
    research_research_canvas: "https://docs.google.com/spreadsheets/d/1f-1Z9ZmohgRd4YrmS5g2-QLxP3eaezr3NSxJ6P7CZuc",
    eoq_checklist: "",
    slack_channel: "proj-knowledge-maps",
    status_update_date: DateTime.fromISO("2022-10-21T13:00:00", { zone: "America/Chicago" })
  },
  {
    name: "Scaffolded Exercises",
    sig_name: "Readily Available Learning Experiences",
    students: ["Yabi Ayele"],
    sig_head: "Gobi Dasu",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1W-CNY8OITpcLTnvf5VdmvE7jrxfGEWrP8Q2kOpNJljs" :
      "https://docs.google.com/spreadsheets/d/1W-CNY8OITpcLTnvf5VdmvE7jrxfGEWrP8Q2kOpNJljs",
    practical_research_canvas: "https://docs.google.com/spreadsheets/d/1ZoYrKLKkgrUuXQ9Ns-peqZ3pbGc89wwNHUimZAkSx9I",
    research_research_canvas: "https://docs.google.com/spreadsheets/d/1lIWJ4H0IRoUErOWMZw8oe2R96SI_ljzNIANEi6skIOI",
    eoq_checklist: "",
    slack_channel: "proj-scaffolded-ex",
    status_update_date: DateTime.fromISO("2022-10-07T13:00:00", { zone: "America/Chicago" })
  },

  // SIG CAMP
  {
    name: "Path",
    sig_name: "Contextually-Aware Metacognitive Practice",
    students: ["Amy Guo", "Dani Zhang"],
    sig_head: "Haoqi Zhang",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1T4dsdvX9jZxhnpyXsj1mwzz-cntXqqo34nV71IwxUmc" :
      "https://docs.google.com/spreadsheets/d/1vVS3N744F5qrDH7xm6-xvoB1fUIm7OaRnEuUoaOB0Ks",
    practical_research_canvas: "https://docs.google.com/spreadsheets/d/1ezRwGGN_pSvAlxa6FK9zdy9B1F_oX8ECBXKDSVDTMRU/edit?usp=sharing",
    research_research_canvas: "https://docs.google.com/spreadsheets/d/11HPks7WPD_TSW-3pF4FI1FyOp0M6Pv4wumoNVYNw9CQ/edit?usp=sharing",
    eoq_checklist: "",
    slack_channel: "proj-path",
    status_update_date: DateTime.fromISO("2022-09-30T13:00:00", { zone: "America/Chicago" })
  },

  // SIG BBQ
  {
    name: "Gobi Proj",
    sig_name: "Summer BBQ",
    students: ["Gobi Dasu"],
    sig_head: "Haoqi Zhang",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1EwkYViZbSZnEQoUvyJ7p9UKR2271ZMa8kvMbvDQa_Ic" :
      "https://docs.google.com/spreadsheets/d/1EwkYViZbSZnEQoUvyJ7p9UKR2271ZMa8kvMbvDQa_Ic",
    practical_research_canvas: "https://drive.google.com/open?id=1_O1qhO9muiFK1YsU5w4_fcA4WjrpCvgjQ3fmmr5jueQ",
    research_research_canvas: "https://drive.google.com/open?id=1wbFHCqBLBC4737IDeY-Z-GMIqX3pqquw3y3H5tSMChU",
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
      "https://docs.google.com/spreadsheets/d/1mKLkkczywF6Ehca6EItNYrrHag7uxyFgp4BfxjZCTqk" :
      "https://docs.google.com/spreadsheets/d/1mKLkkczywF6Ehca6EItNYrrHag7uxyFgp4BfxjZCTqk",
    practical_research_canvas: "https://docs.google.com/spreadsheets/d/1461r8ONyFJBOrGpVpGQm2PBnUJW7iRMwGRH438ce0m8",
    research_research_canvas: "https://docs.google.com/spreadsheets/d/1S18R4i0kTWxr0mDIKqINo8rxnRb7cMGdBxbrRJEJlqI",
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
      "https://docs.google.com/spreadsheets/d/1F8rmABRVx8binwSN-u2jVTjKh2cfWHA-6jLvDrVGAno" :
      "https://docs.google.com/spreadsheets/d/1F8rmABRVx8binwSN-u2jVTjKh2cfWHA-6jLvDrVGAno",
    practical_research_canvas: "https://drive.google.com/open?id=1wDWcmQ06Ir5d3nRuM-v7TavdrNuuUkPzrRApQ0xhIF8",
    research_research_canvas: "https://drive.google.com/open?id=1V5cbxOdwk73ilzjK67gH8ebc2FDUpl_GESZClKCWRhw",
    eoq_checklist: "",
    slack_channel: "proj-kapil"
  },
];
