import { DateTime } from 'luxon';

// TODO: replace slack_channel names with IDs
// TODO: I think the SIG head and faculty mentor should be inferred from which SIG the project is associated with
// TODO: update dev links
export const projectData = [
  // SIG BS
  {
    name: 'Experiential Travel',
    sig_name: 'Between Selves',
    students: ['Conrad Booker', 'Ronghe Chen'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1Bo10CiKLtiSoVcblz3bJYBMdMMAjDBtrz8wuSESc_p8',
    compass: '',
    research_canvas: 'https://docs.google.com/presentation/d/1X6iSvKenCraFb90XFmUMwhKOJK3iYtBwRffZhv6brgI',
    eoq_checklist: '',
    slack_channel: 'C0A26KU197F', // proj-exp-travel
    status_update_date: DateTime.fromISO('2026-05-15T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'CAP Notes and Practice Agents',
    sig_name: 'Between Selves',
    students: ['Diego Perez-Aguilar', 'Ray Sun'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1UYcF9e2q7EVkqcJeJ5cdhQq5aV4J06XyvTCz3XlR1YM',
    compass: '',
    research_canvas: 'https://docs.google.com/presentation/d/12nQ8LN6fpe9xzJvQC-CDrMEqc0J4wYeWhJEkhrcEKc4',
    eoq_checklist: '',
    slack_channel: 'C08HBH1P49X', // proj-cap-notes, proj-soap channel ID placed as a placeholder.
    status_update_date: DateTime.fromISO('2026-04-17T12:00:00', { 
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
      'https://docs.google.com/spreadsheets/d/1Cg9AlRkRMU9FTnbpviEvMbvTTH_zB03mX1auJJP8mAw',
    compass: '',
    research_canvas: 'https://docs.google.com/presentation/d/11zOg5Ep4Jmh_bDTEZZEC9NCZ-1wyD7R5-ZBasvTM-eQ',
    eoq_checklist: '',
    slack_channel: 'C0A2650PAF7', //proj-exp-computing
    status_update_date: DateTime.fromISO('2026-04-10T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'World Learning',
    sig_name: 'Experiential Computing',
    students: ['Yimin Huang', 'Mimi Zhang', 'Ariana DeVito'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1MB51F-5y90YM5LqRycjquin0erlS_Ye7PkoWHAuCh34',
    compass: '',
    research_canvas: 'https://docs.google.com/presentation/d/1dy0LUAFfG8mL8JkZbCVe0UwKy54IL4JTZLQPpvZGJZs',
    eoq_checklist: '',
    slack_channel: 'C08GU79Q2NS', //proj-world-learning
    status_update_date: DateTime.fromISO('2026-05-08T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG Human Learning
  {
    name: 'PATH',
    sig_name: 'Human Learning',
    students: ['Henry Lee', 'Jessica Sun'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1PTMvFnO9RAXBRhL1FzPl3Q68nXVD-8_AQ_7WJkV38is',
    compass: '',
    research_canvas: 'https://docs.google.com/presentation/d/1TfcCICJ17JPiFevZI4LPFRpHsofaHkpwbh1zeLpnOao',
    eoq_checklist: '',
    slack_channel: 'C036KG9MT7T', //proj-path
    status_update_date: DateTime.fromISO('2026-05-29T12:00:00', {
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
      'https://docs.google.com/spreadsheets/d/1iqhsiaB3SS57-czpbCGvT8uiUm6u_jKoYj4raOGngCI',
    compass: '',
    research_canvas: 'https://docs.google.com/presentation/d/1OfRV5Lm3_XRQBJ7ew3QwId-usCQ8CvdtLChEmxQNzsI',
    eoq_checklist: '',
    slack_channel: 'C068GEHQWRF', //proj-dialectical
    status_update_date: DateTime.fromISO('2026-05-22T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG TWV
  {
    name: 'LLMs for Personal Transformation',
    sig_name: 'LLMs for Transforming World Views',
    students: ['Sofia Flores'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1lwv00SHGqtMu7IliKSWEDR9m3QpTN-1XjgO7IVgcghg',
    compass: '',
    research_canvas: 'https://docs.google.com/presentation/d/1gatZYkUmYdIlQuKzpp7H9LjWrPUdJQc-upHHxh9kGng',
    eoq_checklist: '',
    slack_channel: 'C04TVREFMNZ', //proj-collaborative-transformation
    status_update_date: DateTime.fromISO('2026-04-24T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'LLMs for Transforming Researchers',
    sig_name: 'LLMs for Transforming World Views',
    students: ['Kaitlyn Chen', 'Ilya Solovjov'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1tfu3Cg9pKR-OuSp0urHzWp8L7OkwnkSQHyTuXRZGLjQ',
    compass: '',
    research_canvas: 'https://docs.google.com/presentation/d/1cVpSV8dHIz8T0Uk2Xprgc38x0Vv91djfbsQqgCpxnKI',
    eoq_checklist: '',
    slack_channel: 'C0A26A0B6SZ', //proj-transforming-researchers
    status_update_date: DateTime.fromISO('2026-05-01T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  
];
