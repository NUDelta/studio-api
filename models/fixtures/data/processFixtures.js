import { DateTime } from 'luxon';

export const sprintProcessData = [
  {
    name: 'Sprint 0',
    start_day: DateTime.fromISO('2026-01-04T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2026-01-10T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 1',
    start_day: DateTime.fromISO('2026-01-11T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2026-01-24T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 2',
    start_day: DateTime.fromISO('2026-01-25T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2026-02-07T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 3',
    start_day: DateTime.fromISO('2026-02-08T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2026-02-21T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 4',
    start_day: DateTime.fromISO('2026-02-22T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2026-03-07T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 5',
    start_day: DateTime.fromISO('2026-03-08T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2026-03-21T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
];
