import { DateTime } from 'luxon';

// TODO: replace slack_channel names with IDs
// TODO: I think the SIG head and faculty mentor should be inferred from which SIG the project is associated with
// TODO: update dev links
export const projectData = [
  // SIG NOT
  {
    name: 'Orchestration Scripting Environments',
    sig_name: 'Networked Orchestration Technologies',
    students: ['Grace Wang', 'Linh Ly'],
    sig_head: 'Kapil Garg',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1QvPGtkLOnoxs3dV5sEaIOQZ-rPMJPYRKyIF273bw_is',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1OiqwusRpaHloHPDD3uvPe1e-KCsiNLVf4yg9fSdMMOE',
    eoq_checklist: '',
    slack_channel: 'proj-os',
    status_update_date: DateTime.fromISO('2024-03-01T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG CAMP
  {
    name: 'Q&A Buddy',
    sig_name: 'Contextually-Aware Metacognitive Practice',
    students: ['Archie Silverstein'],
    sig_head: 'Yinmiao Li',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1GcmND4gZ9qKHJ15A8nEAIn2E0paVYV5NmhtM6Nla1mA',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1nEtswsBf_p0SO8lOFzU0xL1GwvZIlS1ejwInWajMKeA',
    eoq_checklist: '',
    slack_channel: 'proj-qa-buddy',
    status_update_date: DateTime.fromISO('2024-01-26T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'PATH',
    sig_name: 'Contextually-Aware Metacognitive Practice',
    students: ['Ella Cutler', 'Sara Bouftas'],
    sig_head: 'Yinmiao Li',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1X3kaaj_Av6-whmJr2REBp8GtR9J9Yw3-8cX0uwJclMo',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1bjiBikDaOME2PZYEnfCdMJAyOFvmpoB4UHgiVpRyj08',
    eoq_checklist: '',
    slack_channel: 'proj-path',
    status_update_date: DateTime.fromISO('2024-01-19T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG HAT - Experession
  {
    name: 'Human-AI Tools for Concept Expression',
    sig_name: 'Human-AI Tools (Expression)',
    students: ['Nuremir Babanov', 'Coumba Ka'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1KzqiHiCtkFxlCBYmUbGZGrWRWdRvypIdS9Gf1kT5mpI',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1clDc7dQePzrQmiuUH2K-ocHGxpt8osFyC7BJNtupltc',
    eoq_checklist: '',
    slack_channel: 'proj-human-ai-conception',
    status_update_date: DateTime.fromISO('2024-01-12T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Human-AI Tools for Aligning to Machine Representations and Execution',
    sig_name: 'Human-AI Tools (Expression)',
    students: ['Harita Duggirala', 'Jiho Kwak'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1rpaPqFjKdcDxfwmIrmPpQBfHNekjg1budCcaIrdXbRk',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1L-516cZFxnPH_JuT_XFOLw6Oahm-yZWH3oK7PMpXolY',
    eoq_checklist: '',
    slack_channel: 'proj-human-ai-align',
    status_update_date: DateTime.fromISO('2024-02-02T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG HAT - Differences
  {
    name: 'Human-AI Tools for Accounting for Differences',
    sig_name: 'Human-AI Tools (Differences)',
    students: ['Jiayi Zheng'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1WiBTfzCsLy1i253HPct4JCKcrfOmFwEp3pFs8yo-99s',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1noBPfVFFDLwqD0g66BaFHKru_Se23DXJRIa9gZpNQpc',
    eoq_checklist: '',
    slack_channel: 'proj-human-ai-difference',
    status_update_date: DateTime.fromISO('2024-02-23T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Reference Systems',
    sig_name: 'Human-AI Tools (Differences)',
    students: ['Shirley Zhang', 'Jackie He'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/15GlqmEkwNsPxiD_7KUjf9lNzW5DOb3nTVj6ttpWzbSk',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1N3x2aAgKGYGqryWIPoKknjVuO4Zp81b6Q-2IGiWTxKk',
    eoq_checklist: '',
    slack_channel: 'proj-human-ai-reference',
    status_update_date: DateTime.fromISO('2024-02-09T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG BB
  {
    name: 'How Can Computers Support Dialectical Activities?',
    sig_name: 'Breaking Boundaries',
    students: ['Maalvika Bhat'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1KcN1uBFnA237h_t9gMRBvtsT16ObPWHzXQAIWeCbYOc',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1m0_bV9rSQJptme5F0a8bqHItyNIW3wgRYsRs_Mq-yfQ',
    eoq_checklist: '',
    slack_channel: 'proj-dialectical',
    status_update_date: DateTime.fromISO('2024-03-08T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Prototyping with LLMs',
    sig_name: 'Breaking Boundaries',
    students: ['Jason Jewell', 'Arya Bulusu'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1Z60ICxuH7QlY4AQgOuXsC9Q4aVTCw_9XP4I6s_UN-HM',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1pjdhWMA8v7U4ZqrquCm5h9ZDAbS4e6A9lFVRGIbtxA4',
    eoq_checklist: '',
    slack_channel: 'proj-prototype-llms',
    status_update_date: DateTime.fromISO('2024-02-16T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG BBQ
  {
    name: 'Kapil Proj',
    sig_name: 'Summer BBQ',
    students: ['Kapil Garg'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1grSIDBC9usy1A14rjywz__8hQfzXwDA7qhncTlQbhUI',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1Gh5WnF8b-UzG3B6YhmRwqw6238y7IwAC5eKMX_11AFA',
    research_research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-kapil',
  },
];
