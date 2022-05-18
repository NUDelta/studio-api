import { DateTime } from "luxon";

// TODO: replace slack_channel names with IDs
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
  //   status_update_date: DateTime.fromISO("2021-04-30T12:00:00", { zone: "America/Chicago" })
  // },
  {
    name: "MindYoga",
    sig_name: "Agile Research Studios",
    students: ["Molly Pribble"],
    sig_head: "Leesha Maliakal Shah",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/19Udy8hdzGnLNlvEKfNJAwZcKIsJmxSExFyI4J8GKIV0" :
      "https://docs.google.com/spreadsheets/d/1r9AtM6-lFRH5xrV4p-WCpkkdITGEIu4KWfj9hSmO1vU",
    slack_channel: "proj-meta-cog-reflect",
    status_update_date: DateTime.fromISO("2022-04-15T13:00:00", { zone: "America/Chicago" })
  },

  // SIG NOT
  {
    name: "Orchestration Scripting Environments",
    sig_name: "Networked Orchestration Technologies",
    students: ["Jason Friedman", "Hang Yin"],
    sig_head: "Kapil Garg",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1exjITEohnUJBaqMddLj3tNq7xRI6y7Rx9jdjnC8xsWo" :
      "https://docs.google.com/spreadsheets/d/1G4I0NjFOQIBgA4LLvWYj_1fKhlpOoDl9B5hVLlTtcZ4",
    slack_channel: "proj-os",
    status_update_date: DateTime.fromISO("2022-04-22T13:00:00", { zone: "America/Chicago" })
  },
  {
    name: "Interactive SOAP Notes",
    sig_name: "Networked Orchestration Technologies",
    students: ["Sydney Smith"],
    sig_head: "Kapil Garg",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1uoBg4MdBwsoPUUe9dCZSmtev-0p_Cg0pVwspwFg4zSY" :
      "https://docs.google.com/spreadsheets/d/1A-QgKiFlVx5uYkjYW63FYJp_H6mTxvK72dRtNG8QOlg",
    slack_channel: "proj-soap",
    status_update_date: DateTime.fromISO("2022-05-13T13:00:00", { zone: "America/Chicago" })
  },

  // SIG CE
  {
    name: "Collective Narrative",
    sig_name: "Collective Experiences",
    students: ["Parveen Dhanoa", "Richard Lam"],
    sig_head: "Ryan Louie",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1EkMZFqVUAdD-bR08iLYgFc3nuq5MWC_H4_iDAsICTDE" :
      "https://docs.google.com/spreadsheets/d/1EcWC7kYu6spaiNiI8B6QRW1vjRc8QNpUj-RHPefJ4W8",
    slack_channel: "proj-cn",
    status_update_date: DateTime.fromISO("2022-04-08T13:00:00", { zone: "America/Chicago" })
  },
  {
    name: "CE for Relationship Development",
    sig_name: "Collective Experiences",
    students: ["Yvan Chu", "Cindy Hu"],
    sig_head: "Ryan Louie",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1KCxx7lrXmzH2xkW2d0PT6lsO0I6bArs8DLJ-08E2G9I" :
      "https://docs.google.com/spreadsheets/d/17c7oqn_XI0dyUpCBsezqsf5z1Fgj2VLgY21i05Jkolg",
    slack_channel: "proj-ce-api",
    status_update_date: DateTime.fromISO("2022-04-29T13:00:00", { zone: "America/Chicago" })
  },

  // SIG RALE
  {
    name: "Knowledge Maps",
    sig_name: "Readily Available Learning Experiences",
    students: ["Alexandra Andreiu"],
    sig_head: "Gobi Dasu",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1RnT_gHA4t2tG-RtTA_U_q4A-IwoGa4-uDep9WNRd76g" :
      "https://docs.google.com/spreadsheets/d/13W6yKY7lQGiq4k0zRJk9U0SPO4rTgjzcWf58oEY_nFo",
    slack_channel: "proj-knowledge-maps",
    status_update_date: DateTime.fromISO("2022-05-20T13:00:00", { zone: "America/Chicago" })
  },
  {
    name: "Scaffolded Exercises",
    sig_name: "Readily Available Learning Experiences",
    students: ["Jonathan Liu"],
    sig_head: "Gobi Dasu",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1U5_40XunO6q9ERhIjKwfdSKzzllJassM8Y0oiiqb0kE" :
      "https://docs.google.com/spreadsheets/d/1UqYMu2dvSGt1mF6sQO7Rs6FDKy2RzA6vlChWRnPXD-c",
    slack_channel: "proj-scaffolded-ex",
    status_update_date: DateTime.fromISO("2022-06-03T13:00:00", { zone: "America/Chicago" })
  },

  // SIG CAMP
  {
    name: "Cardinal",
    sig_name: "Context-Aware Metacognitive Practice",
    students: ["Lauren Bichelmeir"],
    sig_head: "Harrison Kwik",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1NvUYKiGo_yErw7Dy60qsxj6rr7fs4yLpXL0zGgwNZL4" :
      "https://docs.google.com/spreadsheets/d/1Rp4ObUSWQ_dgsjhkLDGVGqXLQKrWenPQhTKiLlxC69o",
    slack_channel: "proj-cardinal",
    status_update_date: DateTime.fromISO("2022-05-27T13:00:00", { zone: "America/Chicago" })
  },
  {
    name: "Path",
    sig_name: "Context-Aware Metacognitive Practice",
    students: ["Amy Guo"],
    sig_head: "Harrison Kwik",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1tqiUQ5gbu1UBxot_sf7m_yGj-BvKFHW7b72KVCGVBos" :
      "https://docs.google.com/spreadsheets/d/1hOi4OFvwdsv58jJTJLuJy7xVfd-SRtx9t6lFKWGVM28",
    slack_channel: "proj-path",
    status_update_date: DateTime.fromISO("2022-05-06T13:00:00", { zone: "America/Chicago" })
  },

  // SIG BBQ
  {
    name: "Compass",
    sig_name: "Summer BBQ",
    students: ["Leesha Maliakal Shah"],
    sig_head: "Haoqi Zhang",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1AYiT-xYSylo25A6dbZXAQDotuuOGJIvTlPy-xwsEx2Y" :
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
      "https://docs.google.com/spreadsheets/d/1z7gU2fbfXLC915JTVOGZywra8AJu9V72holI9yYgnHA" :
      "https://docs.google.com/spreadsheets/d/1JFdask4LNkLizrm1ZTGPm12nwzJlBHKDZzFC3h7TrXo",
    slack_channel: "proj-gobi"
  },
  {
    name: "Ryan Proj",
    sig_name: "Summer BBQ",
    students: ["Ryan Louie"],
    sig_head: "Haoqi Zhang",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1f-iqykge7bT3enPQGtGMhXBAb7GpTTLIS14jixIF5m4" :
      "https://docs.google.com/spreadsheets/d/1EHxAQaz8X9TPvLnE5X0lhFTd1VkFoqbd4R8f_Fggcio",
    slack_channel: "proj-ryan"
  },
  {
    name: "Kapil Proj",
    sig_name: "Summer BBQ",
    students: ["Kapil Garg"],
    sig_head: "Haoqi Zhang",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1wZTopLFg7E83d1IpKaclpHilHtAntTVI8HTMG1vai7A" :
      "https://docs.google.com/spreadsheets/d/102i3L9N1Vh5EE0G4ffu5GOK4OXA8E3RtvtD6AcZmstM",
    slack_channel: "proj-kapil"
  },
  {
    name: "Harrison Proj",
    sig_name: "Summer BBQ",
    students: ["Harrison Kwik"],
    sig_head: "Haoqi Zhang",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1VC5ZH4mlPeVAMVuj0gsZAHzaJKf8syq4p26WXHPBso4" :
      "https://docs.google.com/spreadsheets/d/1_3EO7VwPAtyIv74bEc_EfuaQa02mG66xPmNfFl_tjHg",
    slack_channel: "proj-harrison"
  }
];
