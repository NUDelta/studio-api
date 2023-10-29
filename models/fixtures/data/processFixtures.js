import { DateTime } from 'luxon';

export const sprintProcessData = [
  {
    name: 'Sprint 0',
    start_day: DateTime.fromISO('2023-09-18T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2023-09-24T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 1',
    start_day: DateTime.fromISO('2023-09-25T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2023-10-08T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 2',
    start_day: DateTime.fromISO('2023-10-09T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2023-10-22T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 3',
    start_day: DateTime.fromISO('2023-10-23T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2023-11-05T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 4',
    start_day: DateTime.fromISO('2023-11-06T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2023-11-19T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 5',
    start_day: DateTime.fromISO('2023-11-20T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2023-12-03T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
];
