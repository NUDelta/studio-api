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
    name: 'Networked Orchestration Technologies SIG Meeting',
    description: 'Weekly SIG meeting for NOT SIG',
    day_of_week: 'Tuesday',
    start_time: '16:30:00',
    end_time: '17:30:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(
      projectData,
      'Networked Orchestration Technologies'
    ),
    projects: [
      'Orchestration Scripting Environments',
      'Situated Reflection Systems',
    ],
  },
  {
    name: 'Contextually-Aware Metacognitive Practice SIG Meeting',
    description: 'Weekly SIG meeting for CAMP SIG',
    day_of_week: 'Wednesday',
    start_time: '13:30:00',
    end_time: '14:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(
      projectData,
      'Contextually-Aware Metacognitive Practice'
    ),
    projects: ['Q&A Buddy'],
  },
  {
    name: 'Human-AI Tools SIG Meeting',
    description: 'Weekly SIG meeting for HAT SIG',
    day_of_week: 'Wednesday',
    start_time: '15:00:00',
    end_time: '16:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(projectData, 'Human-AI Tools'),
    projects: [
      'Human-AI Tools for Accounting for Differences',
      'Human-AI Tools for Concept Expression',
    ],
  },
];

// TODO: be able to encode ad-hoc office hours
export const officeHoursData = [
  {
    name: 'Networked Orchestration Technologies Office Hours for Scripting Envs',
    description: "Weekly office hours for NOT SIG's Orch Scripting Env project",
    day_of_week: 'Thursday',
    start_time: '17:00:00',
    end_time: '17:30:00',
    timezone: 'America/Chicago',
    projects: ['Orchestration Scripting Environments'],
  },
  {
    name: 'Networked Orchestration Technologies Office Hours for Sit Ref',
    description:
      "Weekly office hours for NOT SIG's Situated Reflection Systems",
    day_of_week: 'Thursday',
    start_time: '16:30:00',
    end_time: '17:00:00',
    timezone: 'America/Chicago',
    projects: ['Situated Reflection Systems'],
  },
];
