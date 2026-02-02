import { DateTime } from 'luxon';

// TODO: replace slack_channel names with IDs
// TODO: I think the SIG head and faculty mentor should be inferred from which SIG the project is associated with
// TODO: update dev links
export const projectData = [
  // SIG BB
  {
    name: 'Experiential Travel',
    sig_name: 'Breaking Boundaries',
    students: ['Conrad Booker', 'Ronghe Chen'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1BFOydDJ1U6DyHXj5zZZRT6a-2xfDAhzNRso-wbIq83w',
    compass: '',
    research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-exp-travel',
    status_update_date: DateTime.fromISO('2026-03-06T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Breaking the Jump',
    sig_name: 'Breaking Boundaries',
    students: ['Summon Gebrelibanos', 'Annie Liu'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/18EaoKZf96J8jl-Kmrg6_3AVTbQKFzRX38WSVfsxx2JY',
    compass: '',
    research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-breaking-the-jump',
    status_update_date: DateTime.fromISO('2026-02-20T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG Experential Computing
  {
    name: 'Experiential Computing Platform',
    sig_name: 'Experiential Computing',
    students: ['Elara Liu', 'Alan Kanne'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1hBezyR_gxdvgjQ8xoYM93CgU6iKA-jnZ8SiG32J_Aks',
    compass: '',
    research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-human-ai-difference',
    status_update_date: DateTime.fromISO('2026-01-30T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'World Learning',
    sig_name: 'Experiential Computing',
    students: ['Yimin Huang', 'Chris Heo'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1ci4ZFTuglN3eLGei95VLm1FwoU1b-wr5FnPlto34UNc',
    compass: '',
    research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-world-learning',
    status_update_date: DateTime.fromISO('2026-02-13T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG Human Learning
  {
    name: 'PATH',
    sig_name: 'Human Learning',
    students: ['Sarah Carley', 'Henry Lee', 'Jessica Sun'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/15tlXTO2QehS8aZ5et52d5F2QEurOEt5wttYAjskLb9Y',
    compass: '',
    research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-path',
    status_update_date: DateTime.fromISO('2026-01-23T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Dialectical Technologies',
    sig_name: 'Human Learning',
    students: ['Jay Jeon', 'Nicole Lu'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/168tLNGwmmYxTfcK7EEu1f7ix3uc0cetzL90YWJyg4tE',
    compass: '',
    research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-dialectical',
    status_update_date: DateTime.fromISO('2026-10-10T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG TWV
  {
    name: 'LLMs for Personal Transformation',
    sig_name: 'LLMs for Transforming World Views',
    students: ['Diana Whealan', 'Sofia Flores'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1fHqH1Ir4rjz6--dKXV3HGhDgArYoj56PNeHBv_0hNmc',
    compass: '',
    research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-collaborative-transformation',
    status_update_date: DateTime.fromISO('2026-02-06T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'LLMs for Transforming Researchers',
    sig_name: 'LLMs for Transforming World Views',
    students: ['Kaitlyn Chen'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1UYrXSd-aBfziAFR9cvFyGqu8ZjoJQj1QtnYfOJE9fc8',
    compass: '',
    research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-transforming-researchers',
    status_update_date: DateTime.fromISO('2026-02-27T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG RIP
  {
    name: 'Tools for Regulation Alignment and Practice',
    sig_name: 'Regulation-Informed Practice',
    students: ['Terry Chen', 'Allyson Lee', 'Justina Wang'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1vuUBddLuWplxrFj_kQop1c1LFBhNkDgIcmCzmwPFXT4',
    compass: '',
    research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-regulation-alignment',
    status_update_date: DateTime.fromISO('2026-11-14T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'CAP Notes and Practice Agents',
    sig_name: 'Regulation-Informed Practice',
    students: ['Diego Perez-Aguilar'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1ZidXJjO2o7ZfEG-o83lsui-2cud9LC7V4sWym6XvQwg',
    compass: '',
    research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-cap-notes',
    status_update_date: DateTime.fromISO('2026-02-27T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
];
