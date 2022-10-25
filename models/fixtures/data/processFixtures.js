import { DateTime } from "luxon";

export const sprintProcessData = [
  {
    name: "Sprint 0",
    start_day: DateTime.fromISO("2022-09-19T00:00:00", { zone: "America/Chicago" }),
    end_day: DateTime.fromISO("2022-09-25T23:59:59", { zone: "America/Chicago" })
  },
  {
    name: "Sprint 1",
    start_day: DateTime.fromISO("2022-09-26T00:00:00", { zone: "America/Chicago" }),
    end_day: DateTime.fromISO("2022-10-09T23:59:59", { zone: "America/Chicago" })
  },
  {
    name: "Sprint 2",
    start_day: DateTime.fromISO("2022-10-10T00:00:00", { zone: "America/Chicago" }),
    end_day: DateTime.fromISO("2022-10-23T23:59:59", { zone: "America/Chicago" })
  },
  {
    name: "Sprint 3",
    start_day: DateTime.fromISO("2022-10-24T00:00:00", { zone: "America/Chicago" }),
    end_day: DateTime.fromISO("2022-11-06T23:59:59", { zone: "America/Chicago" })
  },
  {
    name: "Sprint 4",
    start_day: DateTime.fromISO("2022-11-07T00:00:00", { zone: "America/Chicago" }),
    end_day: DateTime.fromISO("2022-11-20T23:59:59", { zone: "America/Chicago" })
  },
  {
    name: "Sprint 5",
    start_day: DateTime.fromISO("2022-11-21T00:00:00", { zone: "America/Chicago" }),
    end_day: DateTime.fromISO("2022-12-04T23:59:59", { zone: "America/Chicago" })
  }
];
