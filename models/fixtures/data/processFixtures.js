import { DateTime } from "luxon";

export const sprintProcessData = [
  {
    name: "Sprint 0",
    start_day: DateTime.fromISO("2022-03-28T00:00:00", { zone: "America/Chicago" }),
    end_day: DateTime.fromISO("2022-04-03T23:59:59", { zone: "America/Chicago" })
  },
  {
    name: "Sprint 1",
    start_day: DateTime.fromISO("2022-04-04T00:00:00", { zone: "America/Chicago" }),
    end_day: DateTime.fromISO("2022-04-17T23:59:59", { zone: "America/Chicago" })
  },
  {
    name: "Sprint 2",
    start_day: DateTime.fromISO("2022-04-18T00:00:00", { zone: "America/Chicago" }),
    end_day: DateTime.fromISO("2022-05-01T23:59:59", { zone: "America/Chicago" })
  },
  {
    name: "Sprint 3",
    start_day: DateTime.fromISO("2022-05-02T00:00:00", { zone: "America/Chicago" }),
    end_day: DateTime.fromISO("2022-05-15T23:59:59", { zone: "America/Chicago" })
  },
  {
    name: "Sprint 4",
    start_day: DateTime.fromISO("2022-05-16T00:00:00", { zone: "America/Chicago" }),
    end_day: DateTime.fromISO("2022-05-29T23:59:59", { zone: "America/Chicago" })
  },
  {
    name: "Sprint 5",
    start_day: DateTime.fromISO("2022-05-30T00:00:00", { zone: "America/Chicago" }),
    end_day: DateTime.fromISO("2022-06-05T23:59:59", { zone: "America/Chicago" })
  }
];
