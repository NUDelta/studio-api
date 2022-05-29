import { DateTime } from "luxon";

// TODO: replace slack_channel names with IDs
// TODO: I think the SIG head and faculty mentor should be inferred from which SIG the project is associated with
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
    practical_research_canvas: "https://docs.google.com/spreadsheets/d/1jVm0CJb_PCW4S_rNHfIfQfa0NziRd_RH_PyhsXiTOYU",
    research_research_canvas: "https://drive.google.com/open?id=1gNmz7qrErWcS12QGF1wD13rFY8tLGtIH9YPftZUg6Wk",
    eoq_checklist: "https://docs.google.com/document/d/1qNW3-Sqr897DIpuLs9nq8EBlm7YZ_MxRQCPHXyWMbno/edit",
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
    practical_research_canvas: "https://docs.google.com/spreadsheets/d/1IYDaFNGJFuAD2LyVP2XM1QMLiz-WKeqxeJ51syZUai0",
    research_research_canvas: "https://docs.google.com/spreadsheets/d/1QrhTA2vDjvfaXG25Leq1apjkTFqXiPqYRR3pkwffgBk",
    eoq_checklist: "https://docs.google.com/document/d/1vLz2ebRBzEBQF8fPL64QZUelhhi3t8pKNK06xMPv0-E/edit",
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
    practical_research_canvas: "https://docs.google.com/spreadsheets/d/1svJA9ch1oUjeAB-dyeBgp_EULp8zALkaMLOdaWQ_yyQ",
    research_research_canvas: "https://docs.google.com/spreadsheets/d/1jRkTGwsDZA_xO0C1-QkvOIwYAJ7j0eK35tPQ6VGEats/edit?usp=sharing",
    eoq_checklist: "https://docs.google.com/document/d/1LppmtKcHi71yG1JRa6YeqS1OI0Tpdl1-ITHvv0G3KSs/edit",
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
    practical_research_canvas: "https://docs.google.com/spreadsheets/d/1c-6jxYv8SH4lS_nAFGSZt831l0rkbcYRkUzxJI71kzw",
    research_research_canvas: "https://docs.google.com/spreadsheets/d/1-fd_Ub3FMGyU5YTI8Tn1pBoCy9vQaFLGnWv-E_yqq74/edit?usp=sharing",
    eoq_checklist: "https://docs.google.com/document/d/1hoyBVKPOh6N5rOMqE-30mz7rPMdRedjPEp-r8xD5EIo/edit",
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
    practical_research_canvas: "https://docs.google.com/spreadsheets/d/175kb67T4KR1yb3Kk9Ig7BSWEYsbWMAmipOXeR1Upp54",
    research_research_canvas: "https://docs.google.com/spreadsheets/d/1rxprKNeiNwy8aomwYCBT9C5I5lBNwbtJtrILgdmBJZM/edit?usp=sharing",
    eoq_checklist: "https://docs.google.com/document/d/1m7dyhhGUSSu31qDVhqSRGCeSeO24ZMH1GI1S8QxRclI/edit",
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
    practical_research_canvas: "https://docs.google.com/spreadsheets/d/1czEFCtvh7Itqe669uu7bQ_8_2Hj4zqV3ZpJUu3RIN_w",
    research_research_canvas: "https://docs.google.com/spreadsheets/d/1f-1Z9ZmohgRd4YrmS5g2-QLxP3eaezr3NSxJ6P7CZuc",
    eoq_checklist: "https://docs.google.com/document/d/1SRQPQOWHfxFWzphCdwuEjt-lbdEbpYQxAjWjYhT8qcE/edit",
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
    practical_research_canvas: "https://docs.google.com/spreadsheets/d/1ZoYrKLKkgrUuXQ9Ns-peqZ3pbGc89wwNHUimZAkSx9I",
    research_research_canvas: "https://docs.google.com/spreadsheets/d/1lIWJ4H0IRoUErOWMZw8oe2R96SI_ljzNIANEi6skIOI",
    eoq_checklist: "https://docs.google.com/document/d/1Rtg1FuJUgog9aZ1ckbSzyrNJtIMeOkKow8uFEt_DhsA/edit",
    slack_channel: "proj-scaffolded-ex",
    status_update_date: DateTime.fromISO("2022-06-03T13:00:00", { zone: "America/Chicago" })
  },

  // SIG CAMP
  {
    name: "Cardinal",
    sig_name: "Contextually-Aware Metacognitive Practice",
    students: ["Lauren Bichelmeir"],
    sig_head: "Harrison Kwik",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1NvUYKiGo_yErw7Dy60qsxj6rr7fs4yLpXL0zGgwNZL4" :
      "https://docs.google.com/spreadsheets/d/1Rp4ObUSWQ_dgsjhkLDGVGqXLQKrWenPQhTKiLlxC69o",
    practical_research_canvas: "https://docs.google.com/spreadsheets/d/1q1SMVWsKLZpkKNnChPTocrn1GZhh5rml5rkjRxdJH2k/edit#gid=43449030",
    research_research_canvas: "https://docs.google.com/spreadsheets/d/1OsHIXeKpoC4hddkhdFXl6r-Zi_NC0OhgwR8s19ZXyn0/edit#gid=293844242",
    eoq_checklist: "https://docs.google.com/document/d/1QX2vz5fkVHBlWO5IUdgvvEGeAlGFIgDnBsVq-hQBhYE/edit",
    slack_channel: "proj-cardinal",
    status_update_date: DateTime.fromISO("2022-05-27T13:00:00", { zone: "America/Chicago" })
  },
  {
    name: "Path",
    sig_name: "Contextually-Aware Metacognitive Practice",
    students: ["Amy Guo"],
    sig_head: "Harrison Kwik",
    faculty_mentor: "Haoqi Zhang",
    sprint_log: (process.env.NODE_ENV === "development") ?
      "https://docs.google.com/spreadsheets/d/1tqiUQ5gbu1UBxot_sf7m_yGj-BvKFHW7b72KVCGVBos" :
      "https://docs.google.com/spreadsheets/d/1hOi4OFvwdsv58jJTJLuJy7xVfd-SRtx9t6lFKWGVM28",
    practical_research_canvas: "https://docs.google.com/spreadsheets/d/1ezRwGGN_pSvAlxa6FK9zdy9B1F_oX8ECBXKDSVDTMRU/edit?usp=sharing",
    research_research_canvas: "https://docs.google.com/spreadsheets/d/11HPks7WPD_TSW-3pF4FI1FyOp0M6Pv4wumoNVYNw9CQ/edit?usp=sharing",
    eoq_checklist: "https://docs.google.com/document/d/1y6if1RXFDafy9iYkwf70euCoHzxy-njE7our0YnrS4Q/edit",
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
    practical_research_canvas: "https://docs.google.com/spreadsheets/d/1apyb1ObioQ6lHM6ogRW4hY155jD3TmnQW_pu1sMtmNM",
    research_research_canvas: "https://docs.google.com/spreadsheets/d/19ng_K2O8JBatRTuw87FAp003MiwE5uUBuf2pR0nMZwk",
    eoq_checklist: "https://docs.google.com/document/d/1DhLnq0QRSCfx-Dhg9nTSkfAgMGt8xKu3SvFaVq3aKxI/edit",
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
    practical_research_canvas: "https://drive.google.com/open?id=1_O1qhO9muiFK1YsU5w4_fcA4WjrpCvgjQ3fmmr5jueQ",
    research_research_canvas: "https://drive.google.com/open?id=1wbFHCqBLBC4737IDeY-Z-GMIqX3pqquw3y3H5tSMChU",
    eoq_checklist: "https://docs.google.com/document/d/1bjxAYPBdAAJeg2T3klN0Gz6S9hQaHfqAKBCGB37C-50/edit",
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
    practical_research_canvas: "https://docs.google.com/spreadsheets/d/1461r8ONyFJBOrGpVpGQm2PBnUJW7iRMwGRH438ce0m8",
    research_research_canvas: "https://docs.google.com/spreadsheets/d/1S18R4i0kTWxr0mDIKqINo8rxnRb7cMGdBxbrRJEJlqI",
    eoq_checklist: "https://docs.google.com/document/d/1PrW72BXFPl3TrhDS_BHRldXYMeVdDLUcnrmvsMUdMpY/edit",
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
    practical_research_canvas: "https://drive.google.com/open?id=1wDWcmQ06Ir5d3nRuM-v7TavdrNuuUkPzrRApQ0xhIF8",
    research_research_canvas: "https://drive.google.com/open?id=1V5cbxOdwk73ilzjK67gH8ebc2FDUpl_GESZClKCWRhw",
    eoq_checklist: "https://docs.google.com/document/d/1Iij1t0x1z69YWPBuBIFN5XcvfwS8k3D8M9kH0jcyBE4/edit",
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
    practical_research_canvas: "https://docs.google.com/spreadsheets/d/1mazre24O1nqvQlhDBE9k99za3Z4gaGDXu5Bu2Qs_vt0",
    research_research_canvas: "https://docs.google.com/spreadsheets/d/1nUFP757tbZBZmBCtOB0VwHGGos6e9gbs7qHfHvLXCJA",
    eoq_checklist: "https://docs.google.com/document/d/1Xob1YmPlxcoSfahSPS-GAJB_o4DMHOdeOuKlcxRc2bI/edit",
    slack_channel: "proj-harrison"
  }
];
