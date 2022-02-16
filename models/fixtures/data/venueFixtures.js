import { DateTime } from 'luxon';

export const studioData = [
  {
    name: "Studio meeting",
    description: "Weekly studio meeting with all members of the community.",
    day_of_week: "Friday",
    start_time: DateTime.fromISO("2000-01-01T12:00:00", { zone: "America/Chicago" }),
    end_time: DateTime.fromISO("2000-01-01T15:00:00", { zone: "America/Chicago" })
  }
];

export const sigData = [
  {
    name: "Agile Research Studios SIG",
    description: "Weekly SIG meeting for ARS SIG",
    day_of_week: "Wednesday",
    start_time: DateTime.fromISO("2000-01-01T09:00:00", { zone: "America/Chicago" }),
    end_time: DateTime.fromISO("2000-01-01T10:00:00", { zone: "America/Chicago" }),
    sig_head: "Leesha Maliakal Shah",
    sig_members: ["Aimee van den Berg", "Ariella Silver", "Neha Sharma", "Molly Pribble"]
  },
  {
    name: "Networked Orchestration Technologies SIG",
    description: "Weekly SIG meeting for NOT SIG",
    day_of_week: "Wednesday",
    start_time: DateTime.fromISO("2000-01-01T12:00:00", { zone: "America/Chicago" }),
    end_time: DateTime.fromISO("2000-01-01T13:00:00", { zone: "America/Chicago" }),
    sig_head: "Kapil Garg",
    sig_members: ["Jason Friedman", "Hang Yin", "Charlotte Jones"]
  }
];

export const officeHoursData = [
  {
    name: "Agile Research Studios Office Hours",
    description: "Weekly office hours for ARS SIG",
    day_of_week: "Monday",
    start_time: DateTime.fromISO("2000-01-01T15:00:00", { zone: "America/Chicago" }),
    end_time: DateTime.fromISO("2000-01-01T16:00:00", { zone: "America/Chicago" }),
  },
  {
    name: "Networked Orchestration Technologies Office Hours",
    description: "Weekly office hours for NOT SIG",
    day_of_week: "Tuesday",
    start_time: DateTime.fromISO("2000-01-01T14:00:00", { zone: "America/Chicago" }),
    end_time: DateTime.fromISO("2000-01-01T15:00:00", { zone: "America/Chicago" }),
  }
];
