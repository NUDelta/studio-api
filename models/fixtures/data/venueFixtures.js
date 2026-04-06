import { getAllMembersForSig } from './utils.js';
import {
  facultyData,
  phdStudentData,
  nonPhdStudentData,
} from './peopleFixtures.js';
import { projectData } from './projectFixtures.js';

export const studioData = [
  {
    name: 'Studio Meeting',
    description: 'Weekly studio meeting with all members of the community.',
    day_of_week: 'Friday',
    start_time: '13:00:00', // change from typical 12-3 to 1-4 for spring quarter. 04/03/2026
    end_time: '16:00:00',
    timezone: 'America/Chicago',
    attendees: [
      facultyData.map((person) => {
        return person.name;
      }),
      phdStudentData.map((person) => {
        return person.name;
      }),
      nonPhdStudentData.map((person) => {
        return person.name;
      }),
    ].flat(),
  },
];

export const sigMeetingData = [ //TO-DO: Update SIG Meetings and Attendees
  {
    name: 'Between Selves SIG Meeting',
    description: 'Weekly SIG meeting for Between Selves SIG',
    day_of_week: 'Thursday',
    start_time: '11:00:00',
    end_time: '12:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(projectData, 'Between Selves'),
    projects: ['CAP Notes and Practice Agents', 'Experiential Travel'],
  },
  {
    name: 'Experiential Computing SIG Meeting',
    description: 'Weekly SIG meeting for Experiential Computing SIG',
    day_of_week: 'Monday',
    start_time: '14:00:00',
    end_time: '15:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(projectData, 'Experiential Computing'),
    projects: ['Experiential Computing Platform', 'World Learning'],
  },
  {
    name: 'Human Learning SIG Meeting',
    description: 'Weekly SIG meeting for Human Learning SIG',
    day_of_week: 'Monday',
    start_time: '13:00:00',
    end_time: '14:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(projectData, 'Human Learning'),
    projects: ['PATH', 'Dialectical Technologies'],
  },
  {
    name: 'LLMs for Transforming World Views SIG Meeting',
    description: 'Weekly SIG meeting for LLMs for Transforming World Views SIG',
    day_of_week: 'Wednesday',
    start_time: '13:00:00',
    end_time: '14:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(
      projectData,
      'LLMs for Transforming World Views'
    ),
    projects: [
      'LLMs for Personal Transformation',
      'LLMs for Transforming Researchers',
    ],
  },
  // {
  //   name: 'Summer BBQ SIG Meeting',
  //   description: 'Weekly SIG meeting for BBQ SIG',
  //   day_of_week: 'Friday',
  //   start_time: '15:00:00',
  //   end_time: '16:00:00',
  //   timezone: 'America/Chicago',
  //   attendees: getAllMembersForSig(projectData, 'Summer BBQ'),
  //   projects: ['Kapil Proj'],
  // },
];

// TODO: be able to encode ad-hoc office hours
export const officeHoursData = [];

// TODO: add mysore
