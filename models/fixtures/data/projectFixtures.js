import { DateTime } from 'luxon';

// TODO: replace slack_channel names with IDs
// TODO: I think the SIG head and faculty mentor should be inferred from which SIG the project is associated with
// TODO: update dev links
export const projectData = [
  // SIG RIP
  {
    name: 'PATH',
    sig_name: 'Regulation-Informed Learning',
    students: ['Sarah Carley', 'Henry Lee'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1uagLJ4q-QaBHAVy4JTqFg5kagRCnKROKMEYG7OR60PI',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1KA__dzATJLQFVssDRCyPmmh8-OfhDbqsQphtp-gPDCo',
    eoq_checklist: '',
    slack_channel: 'proj-path',
    status_update_date: DateTime.fromISO('2025-05-09T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Understanding regulation-informed coaching',
    sig_name: 'Regulation-Informed Learning',
    students: ['Justina Wang'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1BMS7Dpp3AhDUZATNNn-mdCjLQ4RJcwW28toL3piqcKA',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1RP6TohoGY6XyPin7XsiJOt2Hv_ZKOs3gzTITfqGjv_M',
    eoq_checklist: '',
    slack_channel: 'proj-coaching-regulation',
    status_update_date: DateTime.fromISO('2025-04-18T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG Experential Computing
  {
    name: 'Human-AI tools for accounting for differences',
    sig_name: 'Experential Computing',
    students: ['Elara Liu'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1HOgeVSVV0pDgzy2FBDsjfM7oHk0szxJEUF21zk_nLEw',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1ZXgi3VDkohVMRZ1wzGmwlzV2_AyhphmXqL8w5TcXhe0',
    eoq_checklist: '',
    slack_channel: 'proj-human-ai-difference',
    status_update_date: DateTime.fromISO('2025-04-25T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Experiential Computing Platform',
    sig_name: 'Experential Computing',
    students: ['Yimin Huang'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1OBOcxpMfY9fQtu1nQVmIdofAQIUNLdaOYEo8Bi2U2dI',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1m60WtK8cvkiGu1gXet22XskMEA_kRnZ_qBGKxyPKXYE',
    eoq_checklist: '',
    slack_channel: 'proj-exp-computing',
    status_update_date: DateTime.fromISO('2025-05-23T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG Human Learning
  {
    name: 'Scaling and Improving Coaching with LLMs',
    sig_name: 'Human Learning',
    students: ['Terry Chen', 'Allyson Lee'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1PnqG2lrpThOYxX1rM5FEM_xkHwdWcWEkTZ26-KS8IBU',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/13sJ3XFVYBm3DjESCq10YsjtgoLwERirDEpwMfiTNvBI',
    eoq_checklist: '',
    slack_channel: 'proj-coaching-llms',
    status_update_date: DateTime.fromISO('2025-05-30T12:00:00', {
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
      'https://docs.google.com/spreadsheets/d/1xnJ4N6K-VTmQ7dGXlXah_izK7jrpDx2K_O0vZdm75wU',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1nWN9ojagqZWRlXxokrETLs130k8X3IEZgs_r4nBv6JY',
    eoq_checklist: '',
    slack_channel: 'proj-dialectical',
    status_update_date: DateTime.fromISO('2025-05-30T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG HAT
  {
    name: 'Human-AI tools for concept expression',
    sig_name: 'Human-AI Tools',
    students: ['Diana Whealan', 'Sofia Flores'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1GqVsciVK8LCsrnfU2wRc0vxQhzjjXgzSZ244ATlmsNk',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/18Kv6p_EvHOs09YLwPnJiDFgnpOC2pTp8E7O9EgHgzQ0',
    eoq_checklist: '',
    slack_channel: 'proj-human-ai-conception',
    status_update_date: DateTime.fromISO('2025-05-16T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
];
