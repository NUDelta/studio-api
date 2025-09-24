import { DateTime } from 'luxon';

export const sprintProcessData = [
  {
    name: 'Sprint 0',
    start_day: DateTime.fromISO('2025-09-14T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2025-09-20T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 1',
    start_day: DateTime.fromISO('2025-09-21T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2025-10-04T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 2',
    start_day: DateTime.fromISO('2025-10-05T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2025-10-18T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 3',
    start_day: DateTime.fromISO('2025-10-19T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2025-11-01T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 4',
    start_day: DateTime.fromISO('2025-11-02T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2025-11-15T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 5',
    start_day: DateTime.fromISO('2025-11-16T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2025-11-29T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Sprint 6',
    start_day: DateTime.fromISO('2025-11-30T00:00:00', {
      zone: 'America/Chicago',
    }),
    end_day: DateTime.fromISO('2025-12-06T23:59:59', {
      zone: 'America/Chicago',
    }),
  },
];
