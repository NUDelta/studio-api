import { DateTime } from 'luxon';

export const studioData = [
  {
    name: "Studio meeting",
    description: "Weekly studio meeting with all members of the community.",
    day_of_week: "Friday",
    start_time: DateTime.fromISO("2000-01-01T13:00:00", { zone: "America/Chicago" }),
    end_time: DateTime.fromISO("2000-01-01T16:00:00", { zone: "America/Chicago" }),
    slack_channel: "water-cooler"
  }
];

export const sigData = [
  {
    name: "Agile Research Studios SIG",
    description: "Weekly SIG meeting for ARS SIG",
    day_of_week: "Monday",
    start_time: DateTime.fromISO("2000-01-01T12:30:00", { zone: "America/Chicago" }),
    end_time: DateTime.fromISO("2000-01-01T13:00:00", { zone: "America/Chicago" }),
    sig_head: "Leesha Maliakal Shah",
    sig_members: ["Isaac Miller", "Molly Pribble"],
    slack_channel: "sig-ars"
  },
  {
    name: "Networked Orchestration Technologies SIG",
    description: "Weekly SIG meeting for NOT SIG",
    day_of_week: "Wednesday",
    start_time: DateTime.fromISO("2000-01-01T14:00:00", { zone: "America/Chicago" }),
    end_time: DateTime.fromISO("2000-01-01T15:00:00", { zone: "America/Chicago" }),
    sig_head: "Kapil Garg",
    sig_members: ["Jason Friedman", "Hang Yin", "Sydney Smith"],
    slack_channel: "sig-not"
  },
  {
    name: "Collective Experiences SIG",
    description: "Weekly SIG meeting for CE SIG",
    day_of_week: "Thursday",
    start_time: DateTime.fromISO("2000-01-01T16:00:00", { zone: "America/Chicago" }),
    end_time: DateTime.fromISO("2000-01-01T17:00:00", { zone: "America/Chicago" }),
    sig_head: "Ryan Louie",
    sig_members: ["Parveen Dhanoa", "Richard Lam", "Yvan Chu", "Cindy Hu"],
    slack_channel: "sig-collective-exp"
  },
  {
    name: "Readily Available Learning Experiences SIG",
    description: "Weekly SIG meeting for RALE SIG",
    day_of_week: "Thursday",
    start_time: DateTime.fromISO("2000-01-01T13:00:00", { zone: "America/Chicago" }),
    end_time: DateTime.fromISO("2000-01-01T14:00:00", { zone: "America/Chicago" }),
    sig_head: "Gobi Dasu",
    sig_members: ["Roxy Wilcox", "Fardeem Munir", "Natalie Brewster", "Jonathan Liu"],
    slack_channel: "sig-rale"
  },
  {
    name: "Context-Aware Metacognitive Practice SIG",
    description: "Weekly SIG meeting for CAMP SIG",
    day_of_week: "Thursday",
    start_time: DateTime.fromISO("2000-01-01T13:00:00", { zone: "America/Chicago" }),
    end_time: DateTime.fromISO("2000-01-01T14:00:00", { zone: "America/Chicago" }),
    sig_head: "Harrison Kwik",
    sig_members: ["Justin Shi", "Izzy Chun"],
    slack_channel: "sig-camp"
  },
  {
    name: "Summer BBQ SIG",
    description: "Weekly SIG meeting for BBQ SIG",
    day_of_week: "Wednesday",
    start_time: DateTime.fromISO("2000-01-01T10:00:00", { zone: "America/Chicago" }),
    end_time: DateTime.fromISO("2000-01-01T11:00:00", { zone: "America/Chicago" }),
    sig_head: "Haoqi Zhang",
    sig_members: ["Leesha Maliakal Shah", "Gobi Dasu", "Ryan Louie", "Kapil Garg", "Harrison Kwik"],
    slack_channel: "sig-summer-bbq"
  }
];

// TODO: be able to encode different office hours for each project
// TODO: be able to encode ad-hoc office hours
export const officeHoursData = [
  {
    name: "Agile Research Studios Office Hours",
    description: "Weekly office hours for ARS SIG",
    day_of_week: "Wednesday",
    start_time: DateTime.fromISO("2000-01-01T12:30:00", { zone: "America/Chicago" }),
    end_time: DateTime.fromISO("2000-01-01T13:00:00", { zone: "America/Chicago" }),
  },
  {
    name: "Networked Orchestration Technologies Office Hours",
    description: "Weekly office hours for NOT SIG",
    day_of_week: "Monday",
    start_time: DateTime.fromISO("2000-01-01T14:00:00", { zone: "America/Chicago" }),
    end_time: DateTime.fromISO("2000-01-01T15:00:00", { zone: "America/Chicago" }),
  },
  {
    name: "Collective Experiences SIG",
    description: "Weekly office hours for CE SIG",
    day_of_week: "Tuesday",
    start_time: DateTime.fromISO("2000-01-01T16:00:00", { zone: "America/Chicago" }),
    end_time: DateTime.fromISO("2000-01-01T16:30:00", { zone: "America/Chicago" }),
  },
  {
    name: "Context-Aware Metacognitive Practice SIG",
    description: "Weekly office hours for CAMP SIG",
    day_of_week: "Friday",
    start_time: DateTime.fromISO("2000-01-01T11:00:00", { zone: "America/Chicago" }),
    end_time: DateTime.fromISO("2000-01-01T13:00:00", { zone: "America/Chicago" }),
  }
];
