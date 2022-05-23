import { SocialStructure } from "../social-structures/socialStructure.js";
import { SigStructure } from "../social-structures/sig.js";
import { CommitteeStructure } from "../social-structures/committee.js";
import { OnboardingPairing } from "../social-structures/onboardingPairing.js";

import { onboardingPairData, sigSocialStructuresData } from "./data/socialStructureFixtures.js";
import { Person } from "../people/person.js";

/**
 * Creates the SIG Social Structure.
 * @returns {Promise<Array<HydratedDocument<unknown, {}, {}>>>}
 */
const createSigSocialStructureDocuments = async () => {
  // store all documents to insert
  let sigStructureDocuments = [];

  // loop over each document and create it
  for (let sigStruct of sigSocialStructuresData) {
    // get members
    let membersPromises = [];
    for (let memberName of sigStruct.members) {
      membersPromises.push(Person.findOne({ name: memberName }));
    }
    let members = await Promise.all(membersPromises);
    let memberIds = members.map(member => { return member._id });

    // get SIG head
    let sigHead = await Person.findOne({ name: sigStruct.sig_head });

    // create document
    sigStructureDocuments.push({
      name: sigStruct.name,
      description: sigStruct.description,
      members: memberIds,
      abbreviation: sigStruct.abbreviation,
      slack_channel: sigStruct.slack_channel,
      sig_head: sigHead._id,
    });
  }

  return SigStructure.insertMany(sigStructureDocuments);
};

/**
 * Creates the Onboarding Pairs social structure.
 * @returns {Promise<Array<HydratedDocument<unknown, {}, {}>>>}
 */
const createOnboardingPairsDocuments = async () => {
  // store all documents to insert
  let onboardingPairsDocuments = [];

  // loop over each document and create it
  for (let onboardingStruct of onboardingPairData) {
    // get mentor and mentee
    let mentor = await Person.findOne({ name: onboardingStruct.mentor });
    let mentee = await Person.findOne({ name: onboardingStruct.mentee });

    // create document
    onboardingPairsDocuments.push({
      name: `${ onboardingStruct.mentor } - ${ onboardingStruct.mentee } onboarding pairing`,
      description: `Mentor-Mentee pairing for ${ onboardingStruct.mentor } and ${ onboardingStruct.mentee }`,
      mentor: mentor._id,
      mentee: mentee._id,
    });
  }

  return OnboardingPairing.insertMany(onboardingPairsDocuments);
};

/**
 * Removes existing documents and insert all SocialStructure documents.
 * @return {Promise<void>}
 */
export default async function main() {
  // remove all old documents
  await SocialStructure.deleteMany({}).exec();

  // populate new documents
  await createSigSocialStructureDocuments();
  await createOnboardingPairsDocuments();
}

/**
 * Checks if the SocialStructure collection has documents in it.
 * @return {Promise<boolean>}
 */
export const isSocialStructureEmpty = async () => {
  let foundSocialStructures = await SocialStructure.find({});
  return foundSocialStructures.length === 0;
}