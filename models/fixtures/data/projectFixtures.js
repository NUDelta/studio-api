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
      'https://docs.google.com/spreadsheets/d/1c8UWlf4H7Wh2nO5XaP7KGhVfdE6wFvMpnta6LLaAyHU',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1OiqwusRpaHloHPDD3uvPe1e-KCsiNLVf4yg9fSdMMOE',
    eoq_checklist: '',
    slack_channel: 'proj-os',
    status_update_date: DateTime.fromISO('2023-11-10T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Situated Reflection Systems',
    sig_name: 'Networked Orchestration Technologies',
    students: ['Ella Jones', 'Jonah Jodlowski'],
    sig_head: 'Kapil Garg',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1DFKReae_G2kLfCrDV6Wsr_-cdMurM1Ih8x4KAJUPSEA',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1H0xMUUrymYYMdsEY3RmG3Tg70XGqdUEV_4dJmMpisqY',
    eoq_checklist: '',
    slack_channel: 'proj-situated-ref-systems',
    status_update_date: DateTime.fromISO('2023-10-20T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG CAMP
  {
    name: 'Q&A Buddy',
    sig_name: 'Contextually-Aware Metacognitive Practice',
    students: ['Iphigenie Bera'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1lRn1WKakZsxbO_rYZBOZO-CyqOERqJrSVFswvgxJtAU',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1nEtswsBf_p0SO8lOFzU0xL1GwvZIlS1ejwInWajMKeA',
    eoq_checklist: '',
    slack_channel: 'proj-qa-buddy',
    status_update_date: DateTime.fromISO('2023-05-23T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG HAT
  {
    name: 'Human-AI Tools for Concept Expression',
    sig_name: 'Human-AI Tools',
    students: ['Nuremir Babanov', 'Coumba Ka'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1NJDzrk_0jHDF2uMzQj-bWPecf_em_8ZR5ao48asQK5k',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1clDc7dQePzrQmiuUH2K-ocHGxpt8osFyC7BJNtupltc',
    eoq_checklist: '',
    slack_channel: 'proj-human-ai-conception',
    status_update_date: DateTime.fromISO('2023-11-03T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Human-AI Tools for Accounting for Differences',
    sig_name: 'Human-AI Tools',
    students: ['Jiayi Zheng', 'Yiran Mo'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1KJRlJ42PVS0Qr7Hp3FTPqpexeFNMGeYBJu41Ehnl1Hg',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1noBPfVFFDLwqD0g66BaFHKru_Se23DXJRIa9gZpNQpc',
    eoq_checklist: '',
    slack_channel: 'proj-human-ai-difference',
    status_update_date: DateTime.fromISO('2023-11-17T12:00:00', {
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
      'https://docs.google.com/spreadsheets/d/1X3K50EzJRgm8RHP1IteMF3WOpi5nCGB6YDNl1n5ZYJk',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1Gh5WnF8b-UzG3B6YhmRwqw6238y7IwAC5eKMX_11AFA',
    research_research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-kapil',
  },
];
