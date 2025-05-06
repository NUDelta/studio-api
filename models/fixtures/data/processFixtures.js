import { DateTime } from 'luxon';

export const sprintProcessData = [
  {
    name: 'Sprint 0',
    start_day: DateTime.fromISO('2025-03-31T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2025-04-06T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 1',
    start_day: DateTime.fromISO('2025-04-07T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2025-04-20T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 2',
    start_day: DateTime.fromISO('2025-04-21T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2025-05-04T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 3',
    start_day: DateTime.fromISO('2025-05-05T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2025-05-18T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 4',
    start_day: DateTime.fromISO('2025-05-19T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2025-06-01T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 5',
    start_day: DateTime.fromISO('2025-06-02T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2025-06-08T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
];
