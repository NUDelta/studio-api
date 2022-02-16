import { DateTime } from "luxon";

export const sprintProcessData = [
  {
    name: "Sprint 0",
    start_day: DateTime.fromISO("2021-03-29T00:00:00-05:00", { setZone: true }),
    end_day: DateTime.fromISO("2021-04-04T23:59:59-05:00", { setZone: true })
  },
  {
    name: "Sprint 1",
    start_day: DateTime.fromISO("2021-04-05T00:00:00-05:00", { setZone: true }),
    end_day: DateTime.fromISO("2021-04-18T23:59:59-05:00", { setZone: true })
  },
  {
    name: "Sprint 2",
    start_day: DateTime.fromISO("2021-04-19T00:00:00-05:00", { setZone: true }),
    end_day: DateTime.fromISO("2021-05-02T23:59:59-05:00", { setZone: true })
  },
  {
    name: "Sprint 3",
    start_day: DateTime.fromISO("2021-05-03T00:00:00-05:00", { setZone: true }),
    end_day: DateTime.fromISO("2021-05-16T23:59:59-05:00", { setZone: true })
  },
  {
    name: "Sprint 3",
    start_day: DateTime.fromISO("2021-05-03T00:00:00-05:00", { setZone: true }),
    end_day: DateTime.fromISO("2021-05-16T23:59:59-05:00", { setZone: true })
  },
  {
    name: "Sprint 4",
    start_day: DateTime.fromISO("2021-05-17T00:00:00-05:00", { setZone: true }),
    end_day: DateTime.fromISO("2021-05-30T23:59:59-05:00", { setZone: true })
  },
  {
    name: "Sprint 5",
    start_day: DateTime.fromISO("2021-05-31T00:00:00-05:00", { setZone: true }),
    end_day: DateTime.fromISO("2021-06-06T23:59:59-05:00", { setZone: true })
  }
];
