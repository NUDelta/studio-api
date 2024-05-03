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
      'https://docs.google.com/spreadsheets/d/1xeqRbvQAVwOKUcZ0Di6cs2lsH_2hxQ5DgQNvttwQyng',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1OiqwusRpaHloHPDD3uvPe1e-KCsiNLVf4yg9fSdMMOE',
    eoq_checklist: '',
    slack_channel: 'proj-os',
    status_update_date: DateTime.fromISO('2024-04-12T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG CAMP
  {
    name: 'Q&A Buddy',
    sig_name: 'Contextually-Aware Metacognitive Practice',
    students: ['Billy Kirchgessner'],
    sig_head: 'Yinmiao Li',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/12Wsr1nR94vpC11XbySrPa16O3b9OwUFRuf6w3h6f10s',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1nEtswsBf_p0SO8lOFzU0xL1GwvZIlS1ejwInWajMKeA',
    eoq_checklist: '',
    slack_channel: 'proj-qa-buddy',
    status_update_date: DateTime.fromISO('2024-04-26T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'PATH',
    sig_name: 'Contextually-Aware Metacognitive Practice',
    students: ['Ella Cutler'],
    sig_head: 'Yinmiao Li',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1iyCd5xDHViC_7Gvjpt8o5dahc6kJeDA1tDdyf4sJFA4',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1bjiBikDaOME2PZYEnfCdMJAyOFvmpoB4UHgiVpRyj08',
    eoq_checklist: '',
    slack_channel: 'proj-path',
    status_update_date: DateTime.fromISO('2024-05-24T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG HAT - Experession
  // {
  //   name: 'Human-AI Tools for Conception',
  //   sig_name: 'Human-AI Tools (Expression)',
  //   students: ['Gustavo Mercier', 'Ryan Chu'],
  //   sig_head: 'Haoqi Zhang',
  //   faculty_mentor: 'Haoqi Zhang',
  //   sprint_log:
  //     'https://docs.google.com/spreadsheets/d/1PCj7jsF6cJlcagenP8v_jWv4Gs5ZUJ9e1_s0hq4VBjA',
  //   compass: '',
  //   research_canvas:
  //     'https://docs.google.com/presentation/d/1clDc7dQePzrQmiuUH2K-ocHGxpt8osFyC7BJNtupltc',
  //   eoq_checklist: '',
  //   slack_channel: 'proj-human-ai-conception',
  //   status_update_date: DateTime.fromISO('2024-05-17T12:00:00', {
  //     zone: 'America/Chicago',
  //   }),
  // },

  // SIG HAT - Differences
  {
    name: 'Human-AI Tools for Accounting for Differences',
    sig_name: 'Human-AI Tools (Differences)',
    students: ['Edward Chen'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1o4b4e7N24VzKt3MtcfIjMhQkGmIJo1OOVFCDRQxQ5FI',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1noBPfVFFDLwqD0g66BaFHKru_Se23DXJRIa9gZpNQpc',
    eoq_checklist: '',
    slack_channel: 'proj-human-ai-difference',
    status_update_date: DateTime.fromISO('2024-05-31T12:00:00', {
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
      'https://docs.google.com/spreadsheets/d/1wymM7OIz8k8DxbBFtLtDg8ghdilHms2UEV_P6IAiwe0',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1N3x2aAgKGYGqryWIPoKknjVuO4Zp81b6Q-2IGiWTxKk',
    eoq_checklist: '',
    slack_channel: 'proj-human-ai-reference',
    status_update_date: DateTime.fromISO('2024-05-03T12:00:00', {
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
      'https://docs.google.com/spreadsheets/d/1tGuFSYTJQvIY-BGS58eUXOc8L64wqLZ8d230uW5C8uE',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1m0_bV9rSQJptme5F0a8bqHItyNIW3wgRYsRs_Mq-yfQ',
    eoq_checklist: '',
    slack_channel: 'proj-dialectical',
    status_update_date: DateTime.fromISO('2024-04-19T12:00:00', {
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
      'https://docs.google.com/spreadsheets/d/1pgGp-49Pq6eXa0JJv51SDlvj8TcoHdSqPcrTtnaCR-k',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1pjdhWMA8v7U4ZqrquCm5h9ZDAbS4e6A9lFVRGIbtxA4',
    eoq_checklist: '',
    slack_channel: 'proj-prototype-llms',
    status_update_date: DateTime.fromISO('2024-05-10T12:00:00', {
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
      'https://docs.google.com/spreadsheets/d/1dEWi4etdnTaQvwDQl3ux3hcQiaWKtJSDr1HwkbP6a70',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1Gh5WnF8b-UzG3B6YhmRwqw6238y7IwAC5eKMX_11AFA',
    research_research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-kapil',
    status_update_date: DateTime.fromISO('2024-04-05T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Yinmiao Proj',
    sig_name: 'Summer Beach',
    students: ['Yinmiao Li'],
    sig_head: "Nell O'Rourke",
    faculty_mentor: "Nell O'Rourke",
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1gHRE9AEFVp5gERWXvxChBUvSlxbueZhuZ2Cvz9H-FEg',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1Gh5WnF8b-UzG3B6YhmRwqw6238y7IwAC5eKMX_11AFA',
    research_research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-yinmiao',
  },
];
