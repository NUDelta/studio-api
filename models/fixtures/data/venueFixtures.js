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

// TODO: update
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
    name: 'Collective Experiences SIG Meeting',
    description: 'Weekly SIG meeting for CE SIG',
    day_of_week: 'Wednesday',
    start_time: '14:00:00',
    end_time: '15:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(projectData, 'Collective Experiences'),
    projects: ['Collective Narrative', 'CE for Relationship Development'],
  },
  {
    name: 'Readily Available Learning Experiences SIG Meeting',
    description: 'Weekly SIG meeting for RALE SIG',
    day_of_week: 'Monday',
    start_time: '15:30:00',
    end_time: '16:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(
      projectData,
      'Readily Available Learning Experiences'
    ),
    projects: ['Knowledge Maps'],
  },
  {
    name: 'Contextually-Aware Metacognitive Practice SIG Meeting',
    description: 'Weekly SIG meeting for CAMP SIG',
    day_of_week: 'Friday',
    start_time: '11:00:00',
    end_time: '12:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(
      projectData,
      'Contextually-Aware Metacognitive Practice'
    ),
    projects: ['Path'],
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
  {
    name: 'Summer BBQ SIG Meeting',
    description: 'Weekly SIG meeting for BBQ SIG',
    day_of_week: 'Friday',
    start_time: '15:00:00',
    end_time: '16:00:00',
    timezone: 'America/Chicago',
    attendees: getAllMembersForSig(projectData, 'Summer BBQ'),
    projects: ['Gobi Proj', 'Ryan Proj', 'Kapil Proj'],
  },
];

// TODO: be able to encode ad-hoc office hours
export const officeHoursData = [
  {
    name: 'Networked Orchestration Technologies Office Hours for Scripting Envs',
    description: "Weekly office hours for NOT SIG's Orch Scripting Env project",
    day_of_week: 'Wednesday',
    start_time: '17:00:00',
    end_time: '18:00:00',
    timezone: 'America/Chicago',
    projects: ['Orchestration Scripting Environments'],
  },
  {
    name: 'Collective Experiences SIG Office Hours for Collective Narrative',
    description:
      "Weekly office hours for CE SIG's Collective Narrative project",
    day_of_week: 'Monday',
    start_time: '15:30:00',
    end_time: '16:15:00',
    timezone: 'America/Chicago',
    projects: ['Collective Narrative'],
  },
  {
    name: 'Collective Experiences SIG Office Hours for Collective Experiences Relationship Dev',
    description:
      "Weekly office hours for CE SIG's Collective Experiences Relationship Dev project",
    day_of_week: 'Sunday',
    start_time: '16:15:00',
    end_time: '17:00:00',
    timezone: 'America/Chicago',
    projects: ['CE for Relationship Development'],
  },
];
