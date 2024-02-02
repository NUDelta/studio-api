import { projectData } from './projectFixtures.js';
import { getAllMembersForSig } from './utils.js';

export const sigSocialStructuresData = [
  {
    name: 'Networked Orchestration Technologies',
    description:
      'The Networked Orchestration Technologies (NOT) SIG develops novel interactions and technologies that will help learners and workers develop effective strategies for orchestrating work in networked communities and organizations.',
    members: getAllMembersForSig(
      projectData,
      'Networked Orchestration Technologies'
    ),
    abbreviation: 'NOT',
    slack_channel: 'sig-not',
    sig_head: 'Kapil Garg',
  },
  {
    name: 'Contextually-Aware Metacognitive Practice',
    description:
      'The Contextually-Aware Metacognitive Practice (CAMP) studies how people and technologies in computer science learning environments (e.g. office hours, lab sections, and online discussion boards) can help monitor, diagnose, and address the metacognitive challenges that students face when learning to program.',
    members: getAllMembersForSig(
      projectData,
      'Contextually-Aware Metacognitive Practice'
    ),
    abbreviation: 'CAMP',
    slack_channel: 'sig-camp',
    sig_head: 'Yinmiao Li',
  },
  {
    name: 'Human-AI Tools (Expression)',
    description:
      'The Human-AI Tools (HAT) SIG develops tools that help people learn and work with AI systems.',
    members: getAllMembersForSig(projectData, 'Human-AI Tools (Expression)'),
    abbreviation: 'HAT-X',
    slack_channel: 'sig-human-ai-tools',
    sig_head: 'Haoqi Zhang',
  },
  {
    name: 'Human-AI Tools (Differences)',
    description:
      'The Human-AI Tools (HAT) SIG develops tools that help people learn and work with AI systems.',
    members: getAllMembersForSig(projectData, 'Human-AI Tools (Differences)'),
    abbreviation: 'HAT-D',
    slack_channel: 'sig-hat-difference',
    sig_head: 'Haoqi Zhang',
  },
  {
    name: 'Breaking Boundaries',
    description: 'Breaking Boundaries SIG',
    members: getAllMembersForSig(projectData, 'Breaking Boundaries'),
    abbreviation: 'BB',
    slack_channel: 'sig-bb',
    sig_head: 'Haoqi Zhang',
  },
  {
    name: 'Summer BBQ',
    description:
      "The Summer BBQ (BBQ) SIG is the Ph.D. students' SIG, which has projects that they lead in the other SIG areas.",
    members: getAllMembersForSig(projectData, 'Summer BBQ'),
    abbreviation: 'BBQ',
    slack_channel: 'sig-summer-bbq',
    sig_head: 'Haoqi Zhang',
  },
  {
    name: 'Summer Beach',
    description: 'Summer Beach',
    members: getAllMembersForSig(projectData, 'Summer Beach'),
    abbreviation: 'BBQ',
    slack_channel: 'sig-summer-beach',
    sig_head: "Nell O'Rourke",
  },
];

export const onboardingPairData = [
  // {
  //   name: '',
  //   description: '',
  //   mentor: '',
  //   mentee: '',
  // },
];
