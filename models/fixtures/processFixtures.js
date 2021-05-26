import { Process } from "../processes/process.js";
import { Sprint } from "../processes/sprints.js";
import { DateTime } from "luxon";

const createSprints = async () => {
  // sprints for S2021 as test fixtures
  let sprint0 = new Sprint({
    name: "Sprint 0",
    start_day: DateTime.fromISO("2021-03-29T00:00:00-05:00", { setZone: true }),
    end_day: DateTime.fromISO("2021-04-04T23:59:59-05:00", { setZone: true })
  });
  await sprint0.save();

  let sprint1 = new Sprint({
    name: "Sprint 1",
    start_day: DateTime.fromISO("2021-04-05T00:00:00-05:00", { setZone: true }),
    end_day: DateTime.fromISO("2021-04-18T23:59:59-05:00", { setZone: true })
  });
  await sprint1.save();

  let sprint2 = new Sprint({
    name: "Sprint 2",
    start_day: DateTime.fromISO("2021-04-19T00:00:00-05:00", { setZone: true }),
    end_day: DateTime.fromISO("2021-05-02T23:59:59-05:00", { setZone: true })
  });
  await sprint2.save();

  let sprint3 = new Sprint({
    name: "Sprint 3",
    start_day: DateTime.fromISO("2021-05-03T00:00:00-05:00", { setZone: true }),
    end_day: DateTime.fromISO("2021-05-16T23:59:59-05:00", { setZone: true })
  });
  await sprint3.save();

  let sprint4 = new Sprint({
    name: "Sprint 4",
    start_day: DateTime.fromISO("2021-05-17T00:00:00-05:00", { setZone: true }),
    end_day: DateTime.fromISO("2021-05-30T23:59:59-05:00", { setZone: true })
  });
  await sprint4.save();

  let sprint5 = new Sprint({
    name: "Sprint 5",
    start_day: DateTime.fromISO("2021-05-31T00:00:00-05:00", { setZone: true }),
    end_day: DateTime.fromISO("2021-06-06T23:59:59-05:00", { setZone: true })
  });
  await sprint5.save();
};

export const createProcessFixtures = async () => {
  // start by clearing out the Process collection
  await Process.deleteMany({}).exec();

  // populate sprints
  await createSprints();
}