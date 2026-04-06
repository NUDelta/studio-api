import { DateTime } from 'luxon';

export const sprintProcessData = [
  { //TO-DO: Update sprints
    name: 'Sprint 0',
    start_day: DateTime.fromISO('2026-03-29T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2026-04-04T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 1',
    start_day: DateTime.fromISO('2026-04-05T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2026-04-18T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 2',
    start_day: DateTime.fromISO('2026-04-19T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2026-05-02T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 3',
    start_day: DateTime.fromISO('2026-05-03T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2026-05-16T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 4',
    start_day: DateTime.fromISO('2026-05-17T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2026-05-30T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 5',
    start_day: DateTime.fromISO('2026-05-31T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2026-06-06T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
];
