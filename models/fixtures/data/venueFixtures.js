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
    name: 'Regulation Informed Practice SIG Meeting',
    description: 'Weekly SIG meeting for RIP SIG',
    day_of_week: 'Wednesday',
    start_time: '17:00:00',
    end_time: '18:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(projectData, 'Regulation Informed Practice'),
    projects: ['PATH', 'Regulation Coaching'],
  },
  {
    name: 'Situated Practice Systems SIG Meeting',
    description: 'Weekly SIG meeting for SPS SIG',
    day_of_week: 'Wednesday',
    start_time: '10:00:00',
    end_time: '11:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(projectData, 'Situated Practice Systems'),
    projects: ['Scaling and Improving Coaching with LLMs', 'CAP Notes'],
  },
  {
    name: 'Human-AI Tools SIG Meeting',
    description: 'Weekly SIG meeting for HAT SIG',
    day_of_week: 'Friday',
    start_time: '11:00:00',
    end_time: '12:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(projectData, 'Human-AI Tools'),
    projects: [
      'Human-AI tools for concept expression',
      'Prototyping with LLMs',
    ],
  },
  {
    name: 'Experential Computing SIG Meeting',
    description: 'Weekly SIG meeting for HAT-D SIG',
    day_of_week: 'Friday',
    start_time: '10:00:00',
    end_time: '11:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(projectData, 'Experential Computing'),
    projects: [
      'Human-AI tools for accounting for differences',
      'Experiential Computing Platform',
    ],
  },
  {
    name: 'Dialectical Technologies SIG Meeting',
    description: 'Weekly SIG meeting for DT SIG',
    day_of_week: 'Wednesday',
    start_time: '13:00:00',
    end_time: '14:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(projectData, 'Dialectical Technologies'),
    projects: ['Dialectical Technologies'],
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
