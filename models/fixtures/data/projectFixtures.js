import { DateTime } from "luxon";

export const projectData = [
  // SIG ARS
  // {
  //   name: "Skill Tracking and Development",
  //   sig_name: "Agile Research Studios",
  //   students: ["Aimee van den Berg", "Ariella Silver"],
  //   sig_head: "Leesha Maliakal Shah",
  //   faculty_mentor: "Haoqi Zhang",
  //   sprint_log: process.env.NODE_ENV === "development" ?
  //       "" :
  //       "https://docs.google.com/spreadsheets/d/1IiNI6fisTZKpgg44lUWSpV7KROf_MCvlID9JgZZ3CUY",
  //   slack_channel: "proj-stash",
  //   status_update_date: DateTime.fromISO("2021-04-30T12:00:00-05:00", { setZone: true })
  // },
  {
    name: "MindYoga",
    sig_name: "Agile Research Studios",
    students: ["Isaac Miller", "Molly Pribble"],
    sig_head: "Leesha Maliakal Shah",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1d5_nydelgTsIRFej1qwmhhNyAevRcB19I_5QAVGuCNE" :
      "https://docs.google.com/spreadsheets/d/1qyFSd0kcLsFw0_FsyDUk0go9ua5qz1y_ElKfDdWqoS0",
    slack_channel: "proj-mindyoga",
    status_update_date: DateTime.fromISO("2022-01-28T13:00:00-05:00", { setZone: true })
  },

  // SIG NOT
  {
    name: "Orchestration Scripting Environments",
    sig_name: "Networked Orchestration Technologies",
    students: ["Jason Friedman", "Hang Yin"],
    sig_head: "Kapil Garg",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1YGckE9U7CYrWAG6KSm_sVIkavkVdouDoqBJBuMJsDMY" :
      "https://docs.google.com/spreadsheets/d/17Gj3ApXxZ7fv556kg5CIq8gr16wcz_kaNW1JJ_tbCTE",
    slack_channel: "proj-os",
    status_update_date: DateTime.fromISO("2022-02-11T13:00:00-05:00", { setZone: true })
  },
  {
    name: "Interactive SOAP Notes",
    sig_name: "Networked Orchestration Technologies",
    students: ["Sydney Smith"],
    sig_head: "Kapil Garg",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1EMc1phCXpWd1FueNngun2b36bqK9hlh-nPpbH8X_8eI" :
      "https://docs.google.com/spreadsheets/d/1RcJOJ2g_fexlZMhQi8U-oW7iJJhjhOeqCsAx5GyATLY",
    slack_channel: "proj-soap",
    status_update_date: DateTime.fromISO("2022-01-14T13:00:00-05:00", { setZone: true })
  },

  // SIG CE
  {
    name: "Collective Narrative",
    sig_name: "Collective Experiences",
    students: ["Parveen Dhanoa", "Richard Lam"],
    sig_head: "Ryan Louie",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1zUTPStn9InIBtQ_TGaw84hH_VZxlDKII4_I8Z83niRE" :
      "https://docs.google.com/spreadsheets/d/1EuPW13DP2ICBDn9U9MC5m8Xv0FX1Y0FUi85KSkJdcvQ",
    slack_channel: "proj-cn",
    status_update_date: DateTime.fromISO("2022-03-04T13:00:00-05:00", { setZone: true })
  },
  {
    name: "CE for Relationship Development",
    sig_name: "Collective Experiences",
    students: ["Yvan Chu", "Cindy Hu"],
    sig_head: "Ryan Louie",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1Cf7p_vjox96LATpGERsGcoqhcH20I4HiTHWTtvAc1EQ" :
      "https://docs.google.com/spreadsheets/d/1LUfLfWzEpiFuaTyYvxzbKq7U6KeyP5i-M9KIPZd1rMA",
    slack_channel: "proj-ce-api",
    status_update_date: DateTime.fromISO("2022-01-21T13:00:00-05:00", { setZone: true })
  },

  // SIG RALE
  {
    name: "Knowledge Maps",
    sig_name: "Readily Available Learning Experiences",
    students: ["Roxy Wilcox", "Fardeem Munir"],
    sig_head: "Gobi Dasu",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1Uitdwd4XYcSiDN9H8x3Aldj_67IwwK_X68Pd_HpOtNg" :
      "https://docs.google.com/spreadsheets/d/1yA_GSz9WaYRr7np18raRWquLbM2oCJcDi3rjnkPovhw",
    slack_channel: "proj-knowledge-maps",
    status_update_date: DateTime.fromISO("2022-02-25T13:00:00-05:00", { setZone: true })
  },
  {
    name: "Scaffolded Exercises",
    sig_name: "Readily Available Learning Experiences",
    students: ["Natalie Brewster", "Jonathan Liu"],
    sig_head: "Gobi Dasu",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1O7NOeIAUMd8fyTS0ZrK4QAccu0nXY8lRi_IodoIolZs" :
      "https://docs.google.com/spreadsheets/d/1hFM-88Mk1qdmIq2E0lo76HGz_BEuns5Ug9rmWCfw4HQ",
    slack_channel: "proj-scaffolded-exercises",
    status_update_date: DateTime.fromISO("2022-02-04T13:00:00-05:00", { setZone: true })
  },

  // SIG CAMP
  {
    name: "Q&A Buddy",
    sig_name: "Context-Aware Metacognitive Practice",
    students: ["Justin Shi", "Izzy Chun"],
    sig_head: "Harrison Kwik",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1JMlYA1z8J_BECWs8l7oqsP2hhQ5sE9XdJd9USprjUSY" :
      "https://docs.google.com/spreadsheets/d/1ye_2ImTEfuw6ydJxn5AZqpcIdp_EHuFbAY8Z7OiJWVI",
    slack_channel: "proj-qa-buddy",
    status_update_date: DateTime.fromISO("2022-02-04T13:00:00-05:00", { setZone: true })
  },

  // SIG BBQ
  {
    name: "Compass",
    sig_name: "Summer BBQ",
    students: ["Leesha Maliakal Shah"],
    sig_head: "Haoqi Zhang",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1SrfWq9aSRZQDOhPWFsehemhthKBeUgq5rD55mJMMbUM" :
      "https://docs.google.com/spreadsheets/d/1KLblnxzicyUascGzBI_-E5GsKqlrQxrhE3pdkXU8woI",
    slack_channel: "proj-leesha"
  },
  {
    name: "Gobi Proj",
    sig_name: "Summer BBQ",
    students: ["Gobi Dasu"],
    sig_head: "Haoqi Zhang",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1vz1DsExqY3Jqm0ZA8gXzZYCe34zHw5tuzJIflyjK-TQ" :
      "https://docs.google.com/spreadsheets/d/13Fg3tZmKDzGqfTwTujIkI6z86z-IuuDBqh4vmKqLtUI",
    slack_channel: "proj-gobi"
  },
  {
    name: "Ryan Proj",
    sig_name: "Summer BBQ",
    students: ["Ryan Louie"],
    sig_head: "Haoqi Zhang",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1xnLW-e3wUG_v-BOv6VRYa58h-hHCmidNIb0yycA_OSA" :
      "https://docs.google.com/spreadsheets/d/1gM_v1pl3el7O9m3fc_UKMbM27ncmd1MosJIJoh-5oF0",
    slack_channel: "proj-ryan"
  },
  {
    name: "Kapil Proj",
    sig_name: "Summer BBQ",
    students: ["Kapil Garg"],
    sig_head: "Haoqi Zhang",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1lzGHkgGsaAPmhmGRAJnCXwkStsv5zrl1pd7X9z7CV74" :
      "https://docs.google.com/spreadsheets/d/1V9viRZDgfapTOAu8ZrqAYs0ZezwrZG9MAlEb7LP1Jsg",
    slack_channel: "proj-kapil"
  },
  {
    name: "Harrison Proj",
    sig_name: "Summer BBQ",
    students: ["Harrison Kwik"],
    sig_head: "Haoqi Zhang",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1NjmaKDDjMP9WT7cHBtUQEeWi0ADnv3H4QiZonaASiAw" :
      "https://docs.google.com/spreadsheets/d/12qIcDoXiAAZgt91iGTnfGjj7SZVIC3Ofr3ONnQRsTFk",
    slack_channel: "proj-harrison"
  }
];
