import { projectData } from './projectFixtures.js';
import { getAllMembersForSig } from './utils.js';

export const sigSocialStructuresData = [
  {
    name: 'Human Learning',
    description: 'Human Learning SIG',
    members: getAllMembersForSig(projectData, 'Human Learning'),
    abbreviation: 'HL',
    slack_channel: 'sig-human-learning', // sig-human-learning
    sig_head: 'Haoqi Zhang',
  },
  {
    name: 'Between Selves',
    description: 'Between Selves SIG',
    members: getAllMembersForSig(projectData, 'Between Selves'),
    abbreviation: 'BS',
    slack_channel: 'sig-between-selves',
    sig_head: 'Haoqi Zhang',
  },
  {
    name: 'Experiential Computing',
    description: 'Experiential Computing SIG',
    members: getAllMembersForSig(projectData, 'Experiential Computing'),
    abbreviation: 'EC',
    slack_channel: 'sig-experiential-computing',
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
    slack_channel: 'sig-llm-new-worldview',
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
