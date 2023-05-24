import { DateTime } from 'luxon';

// TODO: replace slack_channel names with IDs
// TODO: I think the SIG head and faculty mentor should be inferred from which SIG the project is associated with
// TODO: update dev links
export const projectData = [
  // SIG NOT
  {
    name: 'Orchestration Scripting Environments',
    sig_name: 'Networked Orchestration Technologies',
    students: ['Grace Wang', 'Jordan Checkoff'],
    sig_head: 'Kapil Garg',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1lMNZ8x4m-hFH_-JisFXi5B648gol34SsW3dme_q8vLc',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1OiqwusRpaHloHPDD3uvPe1e-KCsiNLVf4yg9fSdMMOE',
    eoq_checklist: '',
    slack_channel: 'proj-os',
    status_update_date: DateTime.fromISO('2023-05-12T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG CE
  {
    name: 'Collective Narrative',
    sig_name: 'Collective Experiences',
    students: ['Oscar Dong', 'Pablo Gupta'],
    sig_head: 'Ryan Louie',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1N6_nmBn8VndX-qLIcub-vQy90j-asSGbG8U1bW-gj9s',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1gOKDrF9WQvrGrI7UdEiRltPD6eQBtps0Zz0r07cgd9E',
    eoq_checklist: '',
    slack_channel: 'proj-cn',
    status_update_date: DateTime.fromISO('2023-04-28T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'CE for Relationship Development',
    sig_name: 'Collective Experiences',
    students: ['Seva Suschenvskiy'],
    sig_head: 'Ryan Louie',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1CcscwSFPYNU4WMi37BCLPCUmCEccDGTzxA8yMEUai8M',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1sni0Q9WhNh98oaYvm5tU59AZZ9bkWcOUtJt0ilmVipY',
    eoq_checklist: '',
    slack_channel: 'proj-ce-api',
    status_update_date: DateTime.fromISO('2023-04-07T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG RALE
  {
    name: 'Knowledge Maps',
    sig_name: 'Readily Available Learning Experiences',
    students: ['Mieraf Mulat', 'Lev Rosenberg'],
    sig_head: 'Gobi Dasu',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1Rpha5twIentgutk23kMPd5kkd7y0zzrUSJxNosOE_G0',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1XTxx93EnhVW4bi5hNcwS6Ow_V0BL-udEFwZt5N7AxNc',
    eoq_checklist: '',
    slack_channel: 'proj-knowledge-maps',
    status_update_date: DateTime.fromISO('2023-04-21T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG CAMP
  {
    name: 'Path',
    sig_name: 'Contextually-Aware Metacognitive Practice',
    students: ['Dani Zhang', 'Ella Cutler'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1V4R0JuGmkg2ldnN7zqTJ2jhhR8hbn_bMOYIMlGGp9ZM',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1bjiBikDaOME2PZYEnfCdMJAyOFvmpoB4UHgiVpRyj08',
    eoq_checklist: '',
    slack_channel: 'proj-path',
    status_update_date: DateTime.fromISO('2023-05-23T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG HAT
  {
    name: 'Human-AI Tools for Concept Expression',
    sig_name: 'Human-AI Tools',
    students: ['Alex Feng', 'Coumba Ka'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/18WrrJfu4OuqcVx3wFYqK-rvZ3U0q0L-N5rGA9xoTywE',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1clDc7dQePzrQmiuUH2K-ocHGxpt8osFyC7BJNtupltc',
    eoq_checklist: '',
    slack_channel: 'proj-human-ai-conception',
    status_update_date: DateTime.fromISO('2023-04-14T12:00:00', {
      zone: 'America/Chicago',
    }),
  },
  {
    name: 'Human-AI Tools for Accounting for Differences',
    sig_name: 'Human-AI Tools',
    students: ['Jiayi Zheng', 'Suhuai Chen'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1YxLsLGCIzpQnNT87e6Dsk2mcTbX3SUfAAzeI7sAuh1s',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1noBPfVFFDLwqD0g66BaFHKru_Se23DXJRIa9gZpNQpc',
    eoq_checklist: '',
    slack_channel: 'proj-human-ai-difference',
    status_update_date: DateTime.fromISO('2023-05-26T12:00:00', {
      zone: 'America/Chicago',
    }),
  },

  // SIG BBQ
  {
    name: 'Gobi Proj',
    sig_name: 'Summer BBQ',
    students: ['Gobi Dasu'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1Z2diPcnmobIazrFPHPV9k7k5v09SoMf5NWzTdEA6VE0',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1wSxNBNyzY9yOo78_FidZR7WByo7hqLISA7Sf94fEAuQ',
    eoq_checklist: '',
    slack_channel: 'proj-gobi',
  },
  {
    name: 'Ryan Proj',
    sig_name: 'Summer BBQ',
    students: ['Ryan Louie'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1HLRjhj20HLXvkNfoDKaCggu6q-UMitSnhYXKI6wULjc',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1LqzKqLgpAEqOMmKu4tVPlrlV3KdE1SOQ95Y-fvPSo94',
    eoq_checklist: '',
    slack_channel: 'proj-ryan',
  },
  {
    name: 'Kapil Proj',
    sig_name: 'Summer BBQ',
    students: ['Kapil Garg'],
    sig_head: 'Haoqi Zhang',
    faculty_mentor: 'Haoqi Zhang',
    sprint_log:
      'https://docs.google.com/spreadsheets/d/1L2v0eGxuwh-T9Q6M7k45-x9IsSHex3Fbb4N2aAlQBgs',
    compass: '',
    research_canvas:
      'https://docs.google.com/presentation/d/1Gh5WnF8b-UzG3B6YhmRwqw6238y7IwAC5eKMX_11AFA',
    research_research_canvas: '',
    eoq_checklist: '',
    slack_channel: 'proj-kapil',
  },
];
