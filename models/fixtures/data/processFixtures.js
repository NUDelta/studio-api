import { DateTime } from 'luxon';

export const sprintProcessData = [
  {
    name: 'Sprint 0',
    start_day: DateTime.fromISO('2023-01-02T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2023-01-08T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 1',
    start_day: DateTime.fromISO('2023-01-09T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2023-01-22T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 2',
    start_day: DateTime.fromISO('2023-01-23T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2023-02-05T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 3',
    start_day: DateTime.fromISO('2023-02-06T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2023-02-19T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 4',
    start_day: DateTime.fromISO('2023-02-20T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2023-03-05T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 5',
    start_day: DateTime.fromISO('2023-03-06T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2023-03-12T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
];
