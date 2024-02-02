import { DateTime } from 'luxon';

export const sprintProcessData = [
  {
    name: 'Sprint 0',
    start_day: DateTime.fromISO('2024-01-01T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2024-01-07T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 1',
    start_day: DateTime.fromISO('2024-01-08T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2024-01-21T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 2',
    start_day: DateTime.fromISO('2024-01-22T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2024-02-04T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 3',
    start_day: DateTime.fromISO('2024-02-05T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2024-02-18T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 4',
    start_day: DateTime.fromISO('2024-02-19T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2024-03-03T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 5',
    start_day: DateTime.fromISO('2024-03-04T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2024-03-10T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
];
