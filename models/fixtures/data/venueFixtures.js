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
    start_time: '12:00:00',
    end_time: '15:00:00',
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

export const sigMeetingData = [
  {
    name: 'Regulation-Informed Learning SIG Meeting',
    description: 'Weekly SIG meeting for Regulation-Informed Learning SIG',
    day_of_week: 'Thursday',
    start_time: '10:00:00',
    end_time: '11:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(projectData, 'Regulation-Informed Learning'),
    projects: [
      'Understanding regulation-informed coaching',
      'Scaling and Improving Coaching with LLMs',
    ],
  },
  {
    name: 'Human Learning SIG Meeting',
    description: 'Weekly SIG meeting for Human Learning SIG',
    day_of_week: 'Thursday',
    start_time: '11:00:00',
    end_time: '12:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(projectData, 'Human Learning'),
    projects: ['PATH', 'Dialectical Technologies'],
  },
  {
    name: 'Experential Computing SIG Meeting',
    description: 'Weekly SIG meeting for Experential Computing SIG',
    day_of_week: 'Thursday',
    start_time: '12:30:00',
    end_time: '13:30:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(projectData, 'Experential Computing'),
    projects: [
      'Human-AI tools for accounting for differences',
      'Experiential Computing Platform',
    ],
  },
  {
    name: 'Human-AI Tools SIG Meeting',
    description: 'Weekly SIG meeting for Human-AI Tools SIG',
    day_of_week: 'Friday',
    start_time: '11:00:00',
    end_time: '11:30:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(projectData, 'Human-AI Tools'),
    projects: ['Human-AI tools for concept expression'],
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
