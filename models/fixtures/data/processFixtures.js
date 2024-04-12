import { DateTime } from 'luxon';

export const sprintProcessData = [
  {
    name: 'Sprint 0',
    start_day: DateTime.fromISO('2024-03-25T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2024-03-31T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 1',
    start_day: DateTime.fromISO('2024-04-01T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2024-04-14T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 2',
    start_day: DateTime.fromISO('2024-04-15T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2024-04-28T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 3',
    start_day: DateTime.fromISO('2024-04-29T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2024-05-12T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 4',
    start_day: DateTime.fromISO('2024-05-13T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2024-05-26T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 5',
    start_day: DateTime.fromISO('2024-05-27T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2024-06-02T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
];
