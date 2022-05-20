import { SocialStructure } from "../social-structures/socialStructure.js";
import { SigStructure } from "../social-structures/sig.js";
import { CommitteeStructure } from "../social-structures/committee.js";
import { OnboardingPairing } from "../social-structures/onboardingPairing.js";

import { sigSocialStructuresData } from "./data/socialStructureFixtures.js";
import { Person } from "../people/person.js";

/**
 * Creates the SIG Social Structure.
 * @returns {Promise<Array<HydratedDocument<unknown, {}, {}>>>}
 */
const createSigSocialStructureDocuments = async () => {
  // store all documents to insert
  let sigStructureDocuments = [];

  // loop over each document and save
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
 * Removes existing documents and insert all SocialStructure documents.
 * @return {Promise<void>}
 */
export default async function main() {
  // remove all old documents
  await SocialStructure.deleteMany({}).exec();

  // populate new documents
  await createSigSocialStructureDocuments();
}

/**
 * Checks if the SocialStructure collection has documents in it.
 * @return {Promise<boolean>}
 */
export const isSocialStructureEmpty = async () => {
  let foundSocialStructures = await SocialStructure.find({});
  return foundSocialStructures.length === 0;
}