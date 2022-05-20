/**
 * This file is responsible for fetching social structures from the database.
 */

import { SigStructure } from "../../models/social-structures/sig.js";
import { CommitteeStructure } from "../../models/social-structures/committee.js";
import { OnboardingPairing } from "../../models/social-structures/onboardingPairing.js";
import { Person } from "../../models/people/person.js";
import { Project } from "../../models/project/project.js";

/**
 * Fetches all social structures.
 * @returns {Promise<>} promise that if resolved, returns a list of social structures.
 */
export const fetchAllSocialStructures = async () => {
  try {
    // get all social structures
    return (await Promise.all([
      fetchSigStructures(),
      fetchCommitteeStructures(),
      fetchOnboardingPairings()
    ])).flat();
  } catch (error) {
    console.error(`Error in fetchAllSocialStructures: ${ error }`);
    return error;
  }
};

/**
 * Fetches SIG structures. If no filter is provided, fetches all.
 * @param filters optional parameter for filters to pass to the query.
 * @returns {Promise<>} promise that if resolved, returns a list of SIG social structures.
 */
export const fetchSigStructures = async (filters={}) => {
  try {
    // get all SIG Structures
    return await SigStructure.find(filters)
      .populate("members")
      .populate("sig_head")
      .lean();
  } catch (error) {
    console.error(`Error in fetchSigStructures: ${ error }`);
    return error;
  }
};

/**
 * Fetches committee structures. If no filter is provided, fetches all.
 * @param filters optional parameter for filters to pass to the query.
 * @returns {Promise<>} promise that if resolved, returns a list of committee social structures.
 */
export const fetchCommitteeStructures = async (filters={}) => {
  try {
    // get all committee
    return await CommitteeStructure.find(filters)
      .populate("members")
      .populate("committee_heads")
      .lean();
  } catch (error) {
    console.error(`Error in fetchCommitteeStructures: ${ error }`);
    return error;
  }
};

/**
 * Fetches onboarding mentor-mentee pairings. If no filter is provided, fetches all.
 * @param filters optional parameter for filters to pass to the query.
 * @returns {Promise<>} promise that if resolved, returns a list of onboarding mentor-mentee.
 */
export const fetchOnboardingPairings = async (filters={}) => {
  try {
    // get all onboarding pairings
    return await OnboardingPairing.find(filters)
      .populate("mentor")
      .populate("mentee")
      .lean();
  } catch (error) {
    console.error(`Error in fetchOnboardingPairings: ${ error }`);
    return error;
  }
};

/**
 * Fetches social structures that personName is a member of.
 * @param personName string name of person to find relevant social structures for.
 * @returns {Promise<>} promise that if resolved, returns a list of social structures that personName is in.
 */
export const fetchSocialStructuresForPerson = async (personName) => {
  try {
    // get the person object, given their name
    let relevantPerson = await Person.findOne( { name: personName })
    if (relevantPerson === null) {
      throw new Error(`no person found for ${ personName }`);
    }

    // get all social structures that have the person using optional filter
    return (await Promise.all([
      fetchSigStructures({
        $or: [
          { members: relevantPerson._id },
          { sig_head: relevantPerson._id },
        ]
      }),
      fetchCommitteeStructures({
        $or: [
          { members: relevantPerson._id },
          { committee_heads: relevantPerson._id },
        ]
      }),
      fetchOnboardingPairings({
        $or: [
          { mentor: relevantPerson._id },
          { mentee: relevantPerson._id },
        ]
      })
    ])).flat();
  } catch (error) {
    console.error(`Error in fetchAllSocialStructures: ${ error }`);
    return error;
  }
};

/**
 * Fetches social structures that are relevant for a project.
 * Currently, this will only be SIGs that the projects are in.
 * @param projectName string name of project to find relevant structures for.
 * @returns {Promise<>} promise that if resolved, returns a list of social structures that are relevant to projectName.
 */
export const fetchSocialStructuresForProject = async (projectName) => {
  try {
    // get the project object, given its name
    let relevantProject = await Project.findOne( { name: projectName })
    if (relevantProject === null) {
      throw new Error(`no project found for ${ projectName }`);
    }

    // return social structures that are relevant to the project
    // currently, this will only be SIGs
    return (await Promise.all([
      fetchSigStructures({
        name: relevantProject.sig_name
      })
    ])).flat();
  } catch (error) {
    console.error(`Error in fetchAllSocialStructures: ${ error }`);
    return error;
  }
};