import { projectData } from './projectFixtures.js';
import { getAllMembersForSig } from './utils.js';

export const sigSocialStructuresData = [
  {
    name: 'Regulation Informed Practice',
    description: 'Regulation Informed Practice SIG',
    members: getAllMembersForSig(projectData, 'Regulation Informed Practice'),
    abbreviation: 'RIP',
    slack_channel: 'sig-rip',
    sig_head: 'Haoqi Zhang',
  },
  {
    name: 'Situated Practice Systems',
    description: 'Situated Practice Systems SIG',
    members: getAllMembersForSig(projectData, 'Situated Practice Systems'),
    abbreviation: 'SPS',
    slack_channel: 'sig-sps',
    sig_head: 'Haoqi Zhang',
  },
  {
    name: 'Human-AI Tools',
    description: 'Human-AI Tools SIG',
    members: getAllMembersForSig(projectData, 'Human-AI Tools'),
    abbreviation: 'HAT',
    slack_channel: 'sig-human-ai-tools',
    sig_head: 'Haoqi Zhang',
  },
  {
    name: 'Experential Computing',
    description: 'Experential Computing SIG',
    members: getAllMembersForSig(projectData, 'Experential Computing'),
    abbreviation: 'HAT-D',
    slack_channel: 'sig-experiential-computing',
    sig_head: 'Haoqi Zhang',
  },
  {
    name: 'Dialectical Technologies',
    description: 'Dialectical Technologies SIG',
    members: getAllMembersForSig(projectData, 'Dialectical Technologies'),
    abbreviation: 'DT',
    slack_channel: 'sig-bb',
    sig_head: 'Haoqi Zhang',
  },
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
