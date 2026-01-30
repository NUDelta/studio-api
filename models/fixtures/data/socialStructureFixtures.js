import { projectData } from './projectFixtures.js';
import { getAllMembersForSig } from './utils.js';

export const sigSocialStructuresData = [
  {
    name: 'Human Learning',
    description: 'Human Learning SIG',
    members: getAllMembersForSig(projectData, 'Human Learning'),
    abbreviation: 'HL',
    slack_channel: 'sig-human-learning',
    sig_head: 'Haoqi Zhang',
  },
  {
    name: 'Regulation-Informed Practice',
    description: 'Regulation-Informed Practice SIG',
    members: getAllMembersForSig(projectData, 'Regulation-Informed Practice'),
    abbreviation: 'RIP',
    slack_channel: 'sig-rip',
    sig_head: 'Haoqi Zhang',
  },
  {
    name: 'Experiential Computing',
    description: 'Experiential Computing SIG',
    members: getAllMembersForSig(projectData, 'Experiential Computing'),
    abbreviation: 'EC',
    slack_channel: 'sig-human-ai-tools',
    sig_head: 'Haoqi Zhang',
  },
  {
    name: 'LLMs for Transforming World Views',
    description: 'LLMs for Transforming World Views SIG',
    members: getAllMembersForSig(
      projectData,
      'LLMs for Transforming World Views'
    ),
    abbreviation: 'TWV',
    slack_channel: 'sig-experiential-computing',
    sig_head: 'Haoqi Zhang',
  },
  {
    name: 'Breaking Boundaries',
    description: 'Breaking Boundaries SIG',
    members: getAllMembersForSig(projectData, 'Breaking Boundaries'),
    abbreviation: 'BB',
    slack_channel: 'sig-breaking-boundaries',
    sig_head: 'Haoqi Zhang',
  },
  // {
  //   name: 'Dialectical Technologies',
  //   description: 'Dialectical Technologies SIG',
  //   members: getAllMembersForSig(projectData, 'Dialectical Technologies'),
  //   abbreviation: 'DT',
  //   slack_channel: 'sig-bb',
  //   sig_head: 'Haoqi Zhang',
  // },
  // {
  //   name: 'Summer BBQ',
  //   description:
  //     "The Summer BBQ (BBQ) SIG is the Ph.D. students' SIG, which has projects that they lead in the other SIG areas.",
  //   members: getAllMembersForSig(projectData, 'Summer BBQ'),
  //   abbreviation: 'BBQ',
  //   slack_channel: 'sig-summer-bbq',
  //   sig_head: 'Haoqi Zhang',
  // },
];

export const onboardingPairData = [
  // {
  //   name: '',
  //   description: '',
  //   mentor: '',
  //   mentee: '',
  // },
];
