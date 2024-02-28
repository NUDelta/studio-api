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
    day_of_week: 'Monday',
    start_time: '17:00:00',
    end_time: '18:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(
      projectData,
      'Networked Orchestration Technologies'
    ),
    projects: ['Orchestration Scripting Environments'],
  },
  {
    name: 'Contextually-Aware Metacognitive Practice SIG Meeting',
    description: 'Weekly SIG meeting for CAMP SIG',
    day_of_week: 'Wednesday',
    start_time: '13:00:00',
    end_time: '14:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(
      projectData,
      'Contextually-Aware Metacognitive Practice'
    ),
    projects: ['Q&A Buddy', 'PATH'],
  },
  {
    name: 'Human-AI Tools (Expression) SIG Meeting',
    description: 'Weekly SIG meeting for HAT-X SIG',
    day_of_week: 'Monday',
    start_time: '14:00:00',
    end_time: '15:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(projectData, 'Human-AI Tools (Expression)'),
    projects: [
      'Human-AI Tools for Concept Expression',
      'Human-AI Tools for Aligning to Machine Representations and Execution',
    ],
  },
  {
    name: 'Human-AI Tools (Differences) SIG Meeting',
    description: 'Weekly SIG meeting for HAT-D SIG',
    day_of_week: 'Monday',
    start_time: '13:00:00',
    end_time: '14:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(projectData, 'Human-AI Tools (Differences)'),
    projects: [
      'Human-AI Tools for Accounting for Differences',
      'Reference Systems',
    ],
  },
  {
    name: 'Breaking Boundaries SIG Meeting',
    description: 'Weekly SIG meeting for BB SIG',
    day_of_week: 'Monday',
    start_time: '10:00:00',
    end_time: '11:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(projectData, 'Breaking Boundaries'),
    projects: [
      'How Can Computers Support Dialectical Activities?',
      'Prototyping with LLMs',
    ],
  },
];

// TODO: be able to encode ad-hoc office hours
export const officeHoursData = [
  {
    name: 'Networked Orchestration Technologies Office Hours',
    description: 'Weekly office hours for NOT SIG',
    day_of_week: 'Wednesday',
    start_time: '11:00:00',
    end_time: '12:00:00',
    timezone: 'America/Chicago',
    projects: ['Orchestration Scripting Environments'],
  },
  {
    name: 'CAMP Q&A Buddy Office Hours',
    description: 'Weekly office hours for Q&A Buddy project',
    day_of_week: 'Wednesday',
    start_time: '14:00:00',
    end_time: '14:45:00',
    timezone: 'America/Chicago',
    projects: ['PATH'],
  },
  {
    name: 'CAMP Q&A Buddy Office Hours',
    description: 'Weekly office hours for Q&A Buddy project',
    day_of_week: 'Monday',
    start_time: '15:00:00',
    end_time: '16:00:00',
    timezone: 'America/Chicago',
    projects: ['Q&A Buddy'],
  },
];
