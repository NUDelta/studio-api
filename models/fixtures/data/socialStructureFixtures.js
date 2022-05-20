import { projectData } from "./projectFixtures.js";

/**
 * Returns a list of all members (students and SIG head) that are part of a sig.
 * @param allProjects list of projects that include fields for students, sig_head, and sig_name.
 * @param sigName string sig to get all members for.
 * @returns {*[]} list of people's names that are members of the sig.
 */
const getAllMembersForSig = (allProjects, sigName) => {
  return Array.from(new Set(
    allProjects.filter(project => {
      return project.sig_name === sigName;
    }).reduce((previousValue, currentValue) => {
      return [...previousValue, currentValue.sig_head, ...currentValue.students];
    }, [])
  ));
};

export const sigSocialStructuresData = [
  {
    name: "Agile Research Studios",
    description: "The Agile Research Studios (ARS) SIG develops novel processes, social structures, and intelligent tools that work together to support learning within a community of researchers by developing students' regulation skills---cognitive, motivational, emotional, metacognitive, and strategic behaviors for reaching desired goals and outcomes---and by distributing support across an entire learning community.",
    members: getAllMembersForSig(projectData, "Agile Research Studios"),
    abbreviation: "ARS",
    slack_channel: "sig-ars",
    sig_head: "Leesha Maliakal Shah",
  },
  {
    name: "Networked Orchestration Technologies",
    description: "The Networked Orchestration Technologies (NOT) SIG develops novel interactions and technologies that will help learners and workers develop effective strategies for orchestrating work in networked communities and organizations.",
    members: getAllMembersForSig(projectData, "Networked Orchestration Technologies"),
    abbreviation: "NOT",
    slack_channel: "sig-not",
    sig_head: "Kapil Garg",
  },
  {
    name: "Collective Experiences",
    description: "The Collective Experiences (CE) SIG develops a novel platform that coordinates people in real spaces in real time to join in shared experiences with strangers and loved ones. This technology opens up a whole new area of interactions to explore the creation of experiences that create opportunistic situational contexts for people from around the world to connect with one another.",
    members: getAllMembersForSig(projectData, "Collective Experiences"),
    abbreviation: "CE",
    slack_channel: "sig-collective-exp",
    sig_head: "Ryan Louie",
  },
  {
    name: "Readily Available Learning Experiences",
    description: "The Readily Available Learning Experiences (RALE) SIG seeks to empower learners to approach every professional website as a resource for learning programming concepts. ",
    members: getAllMembersForSig(projectData, "Readily Available Learning Experiences"),
    abbreviation: "RALE",
    slack_channel: "sig-rale",
    sig_head: "Gobi Dasu",
  },
  {
    name: "Contextually-Aware Metacognitive Practice",
    description: "The Contextually-Aware Metacognitive Practice (CAMP) studies how people and technologies in computer science learning environments (e.g. office hours, lab sections, and online discussion boards) can help monitor, diagnose, and address the metacognitive challenges that students face when learning to program.",
    members: getAllMembersForSig(projectData, "Contextually-Aware Metacognitive Practice"),
    abbreviation: "CAMP",
    slack_channel: "sig-camp",
    sig_head: "Harrison Kwik",
  },
  {
    name: "Summer BBQ",
    description: "The Summer BBQ (BBQ) SIG is the Ph.D. students' SIG, which has projects that they lead in the other SIG areas.",
    members: getAllMembersForSig(projectData, "Summer BBQ"),
    abbreviation: "BBQ",
    slack_channel: "sig-summer-bbq",
    sig_head: "Haoqi Zhang",
  }
];