import { DateTime } from 'luxon';

export const sprintProcessData = [
  {
    name: 'Sprint 0',
    start_day: DateTime.fromISO('2023-03-27T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2023-04-02T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 1',
    start_day: DateTime.fromISO('2023-04-03T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2023-04-16T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 2',
    start_day: DateTime.fromISO('2023-04-17T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2023-04-30T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 3',
    start_day: DateTime.fromISO('2023-05-01T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2023-05-14T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 4',
    start_day: DateTime.fromISO('2023-05-15T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2023-05-28T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 5',
    start_day: DateTime.fromISO('2023-05-29T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2023-06-04T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
];
