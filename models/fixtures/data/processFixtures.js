import { DateTime } from "luxon";

export const sprintProcessData = [
  {
    name: "Sprint 0",
    start_day: DateTime.fromISO("2022-01-03T00:00:00", { zone: "America/Chicago" }),
    end_day: DateTime.fromISO("2022-01-09T23:59:59", { zone: "America/Chicago" })
  },
  {
    name: "Sprint 1",
    start_day: DateTime.fromISO("2022-01-10T00:00:00", { zone: "America/Chicago" }),
    end_day: DateTime.fromISO("2022-01-23T23:59:59", { zone: "America/Chicago" })
  },
  {
    name: "Sprint 2",
    start_day: DateTime.fromISO("2022-01-24T00:00:00", { zone: "America/Chicago" }),
    end_day: DateTime.fromISO("2022-02-06T23:59:59", { zone: "America/Chicago" })
  },
  {
    name: "Sprint 3",
    start_day: DateTime.fromISO("2022-02-07T00:00:00", { zone: "America/Chicago" }),
    end_day: DateTime.fromISO("2022-02-20T23:59:59", { zone: "America/Chicago" })
  },
  {
    name: "Sprint 4",
    start_day: DateTime.fromISO("2022-02-21T00:00:00", { zone: "America/Chicago" }),
    end_day: DateTime.fromISO("2022-03-06T23:59:59", { zone: "America/Chicago" })
  },
  {
    name: "Sprint 5",
    start_day: DateTime.fromISO("2022-03-07T00:00:00", { zone: "America/Chicago" }),
    end_day: DateTime.fromISO("2022-03-13T23:59:59", { zone: "America/Chicago" })
  }
];
