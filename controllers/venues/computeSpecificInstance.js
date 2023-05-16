/**
 * This module is used to compute specific instances of generic venues,
 * such as a SIG meeting in the second week of the quarter.
 */

import { Sprint } from '../../models/processes/sprints.js';
import { DateTime, Info } from 'luxon';

/**
 * Computes the date and time for a venue in a given week.
 * @param venue object with venue_name, day_of_week, start_time, end_time, and timezone.
 * @param week Date starting date of the week to get specific instance of venue for.
 * @returns {object} object that includes name of venue, start_time of venue, end_time of venue, and timezone.
 */
const computeInstanceOfVenueDuringWeek = (venue, week) => {
  // compute day for venue by first getting the start of the week
  let weekOfFirstSig = DateTime.fromJSDate(week);

  // shift to day of week based on whn SIG is
  let dayOfFirstSig = weekOfFirstSig.set({
    weekday: Info.weekdays().indexOf(venue.day_of_week) + 1,
  });

  // add timezone info
  let venueTz = venue.timezone;
  let timezoneShiftedSigDay = dayOfFirstSig.setZone(venueTz);

  // create dates with start and end time
  let [startHours, startMinutes, startSeconds] = venue.start_time.split(':');
  let firstSigStartTime = timezoneShiftedSigDay.set({
    hour: startHours,
    minute: startMinutes,
    second: startSeconds,
  });

  let [endHours, endMinutes, endSeconds] = venue.end_time.split(':');
  let firstSigEndTime = timezoneShiftedSigDay.set({
    hour: endHours,
    minute: endMinutes,
    second: endSeconds,
  });

  // format and return
  return {
    name: venue.name,
    start_time: firstSigStartTime.toUTC().toJSDate(),
    end_time: firstSigEndTime.toUTC().toJSDate(),
    timezone: venue.timezone,
  };
};

/**
 * Computes the first instance of a venue.
 * Currently, this is computed based on the sprint processes.
 * @param venue object with venue_name, day_of_week, start_time, end_time, and timezone.
 * @returns {Date} date of venue in the given week.
 */
export const getFirstInstanceOfVenue = async (venue) => {
  // check what type of venue it is to determine if we should use sprint 0 or sprint 1
  let relevantSprint = venue.kind === 'StudioMeeting' ? 'Sprint 0' : 'Sprint 1';

  // get processes to figure out when last sprint starts
  let relevantProcess = await Sprint.findOne({
    name: relevantSprint,
  });
  if (relevantProcess === null) {
    throw new Error(`no sprint info found for ${relevantSprint}`);
  }

  // compute and return specific date
  return computeInstanceOfVenueDuringWeek(venue, relevantProcess.start_day);
};

/**
 * Computes the second instance of a venue.
 * Currently, this is computed based on the sprint processes.
 * @param venue object with venue_name, day_of_week, start_time, end_time, and timezone.
 * @returns {Date} date of venue in the given week.
 */
export const getLastInstanceOfVenue = async (venue) => {
  // TODO: I think there's an edge case with Sprint 5 in Fall since there are multiple weeks.
  // get processes to figure out when last sprint starts
  let relevantProcess = await Sprint.findOne({
    name: 'Sprint 5',
  });
  if (relevantProcess === null) {
    throw new Error(`no sprint info found for Sprint 5`);
  }

  // compute and return specific date
  return computeInstanceOfVenueDuringWeek(venue, relevantProcess.start_day);
};
