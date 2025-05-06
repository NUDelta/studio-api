import { DateTime } from 'luxon';

// TODO: replace slack_channel names with IDs
// TODO: I think the SIG head and faculty mentor should be inferred from which SIG the project is associated with
// TODO: update dev links
export const projectData = [
  // SIG RIP
  {
    name: 'Regulation Coaching',
    sig_name: 'Regulation Informed Practice',
    students: ['Grace Wang', 'Linh Ly'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1-JzomNWX2wyIOXoTTUacXhPWrSg6d3_yf55gxSlrYvY',
    compass: '',
    research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-os',
    status_update_date: DateTime.fromISO('2025-05-09T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'PATH',
    sig_name: 'Regulation Informed Practice',
    students: ['Jessica Sun', 'Henry Lee'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1xpWuj0yTdLD6nLQLHBVvsu8yrK2ejb5cFgr04KKvhgA',
    compass: '',
    research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-path',
    status_update_date: DateTime.fromISO('2025-04-18T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG SPS
  {
    name: 'Scaling and Improving Coaching with LLMs',
    sig_name: 'Situated Practice Systems',
    students: ['Terry Chen', 'Allyson Lee'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1-WIXECaFPL1TTUHE9_q29mi5D10H--keSewajyN5AYA',
    compass: '',
    research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'sig-sps',
    status_update_date: DateTime.fromISO('2025-04-11T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'CAP Notes',
    sig_name: 'Situated Practice Systems',
    students: ['Sasha Boico'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1-d3aQpc932ZTwzLJhVt6gHFhdrE5A8GCvXjBJtt4hcM',
    compass: '',
    research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-cap-notes',
    status_update_date: DateTime.fromISO('2025-06-06T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG HAT
  {
    name: 'Human-AI tools for concept expression',
    sig_name: 'Human-AI Tools',
    students: ['Diana Whealan', 'Rohit Katakam'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1OBM9EbXWUTAcC0TOIKC3oYiLMzEw7Mu0otaqlURhAZE',
    compass: '',
    research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-human-ai-conception',
    status_update_date: DateTime.fromISO('2025-05-16T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Prototyping with LLMs',
    sig_name: 'Human-AI Tools',
    students: ['Sally So', 'Mahima Ramesh'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1OGRxypxAS0n2Vi-wgNA7WQ1Z_rIYDBuhFAAhFmr4WqM',
    compass: '',
    research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-prototype-llms',
    status_update_date: DateTime.fromISO('2025-05-02T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG HAT-D
  {
    name: 'Human-AI tools for accounting for differences',
    sig_name: 'Experential Computing',
    students: ['Elara Liu', 'Medini Chopra'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1WSZbma9M8pJwkVtBSyqTCQ_dSq-GnjU6eSstvDFoxYc',
    compass: '',
    research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-human-ai-difference',
    status_update_date: DateTime.fromISO('2025-04-25T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Experiential Computing Platform',
    sig_name: 'Experential Computing',
    students: ['Rama Naboulsi', 'Yong-yu Huang'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1i3F-fv3sGdoMOW40fx3NFQ3Nc9s_KG4B0hGKw9d9n9k',
    compass: '',
    research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-exp-computing',
    status_update_date: DateTime.fromISO('2025-05-23T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG DT
  {
    name: 'Dialectical Technologies',
    sig_name: 'Dialectical Technologies',
    students: ['Jay Jeon', 'Nicole Lu'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1w-A8MYlMwQ-7skBj7voJGY9jJ9sdt7ceM-4bW1I8DyU',
    compass: '',
    research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-dialectical',
    status_update_date: DateTime.fromISO('2025-05-30T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
];
