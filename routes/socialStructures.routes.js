import { Router } from "express";
import {
  fetchAllSocialStructures, fetchCommitteeStructures, fetchOnboardingPairings,
  fetchSigStructures, fetchSocialStructuresForPerson, fetchSocialStructuresForProject
} from "../controllers/socialStructures/fetch.js";

export const socialStructureRouter = new Router();

/**
 * Fetch all social structures.
 */
socialStructureRouter.get("/", async (req, res) => {
  try {
    res.json(await fetchAllSocialStructures());
  } catch (error) {
    res.send(`Error in /socialStructures/: ${ error }`);
  }
});

/**
 * Fetch all SIGs.
 */
socialStructureRouter.get("/sigs", async (req, res) => {
  try {
    res.json(await fetchSigStructures());
  } catch (error) {
    res.send(`Error in /socialStructures/sigs: ${ error }`);
  }
});

/**
 * Fetch all committees.
 */
socialStructureRouter.get("/committees", async (req, res) => {
  try {
    res.json(await fetchCommitteeStructures());
  } catch (error) {
    res.send(`Error in /socialStructures/committees: ${ error }`);
  }
});

/**
 * Fetch all onboarding pairs.
 */
socialStructureRouter.get("/onboardingPairs", async (req, res) => {
  try {
    res.json(await fetchOnboardingPairings());
  } catch (error) {
    res.send(`Error in /socialStructures/onboardingPairs: ${ error }`);
  }
});

/**
 * Fetch all social structures that a person is in, given their name.
 */
socialStructureRouter.get("/forPerson", async (req, res) => {
  try {
    // fetch the person's name from the query that we want the relevant social structures for
    let personName = req.query.personName;
    if (personName === undefined) {
      throw new Error("personName parameter not specified.");
    }

    res.json(await fetchSocialStructuresForPerson(personName));
  } catch (error) {
    res.send(`Error in /socialStructures/forPerson: ${ error }`);
  }
});

/**
 * Fetch all social structures that are relevant to a project, given the project name.
 */
socialStructureRouter.get("/forProject", async (req, res) => {
  try {
    // fetch the project's name from the query that we want the sprint log for, and check if valid
    let projectName = req.query.projectName;
    if (projectName === undefined) {
      throw new Error("projectName parameter not specified.");
    }

    res.json(await fetchSocialStructuresForProject(projectName));
  } catch (error) {
    res.send(`Error in /socialStructures/forProject: ${ error }`);
  }
});