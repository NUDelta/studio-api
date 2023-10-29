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
    sig_head: 'Haoqi Zhang',
  },
  {
    name: 'Human-AI Tools',
    description:
      'The Human-AI Tools (HAT) SIG develops tools that help people learn and work with AI systems.',
    members: getAllMembersForSig(projectData, 'Human-AI Tools'),
    abbreviation: 'HAT',
    slack_channel: 'sig-human-ai-tools',
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
];

export const onboardingPairData = [
  {
    name: '',
    description: '',
    mentor: 'Kapil Garg',
    mentee: 'Iphigenie Bera',
  },
  {
    name: '',
    description: '',
    mentor: 'Grace Wang',
    mentee: 'Yiran Mo',
  },
  {
    name: '',
    description: '',
    mentor: 'Grace Wang',
    mentee: 'Nuremir Babanov',
  },
  {
    name: '',
    description: '',
    mentor: 'Haoqi Zhang',
    mentee: 'Linh Ly',
  },
  {
    name: '',
    description: '',
    mentor: 'Jiayi Zheng',
    mentee: 'Ella Jones',
  },
  {
    name: '',
    description: '',
    mentor: 'Coumba Ka',
    mentee: 'Jonah Jodlowski',
  },
];
