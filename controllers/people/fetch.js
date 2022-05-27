/**
 * This file is responsible for fetching people from the database and returning them as JSON.
 */

import { Person } from "../../models/people/person.js";
import { Faculty } from "../../models/people/faculty.js";
import { PhdStudent } from "../../models/people/phdstudent.js";
import { NonPhdStudent } from "../../models/people/nonphdstudent.js";

/**
 * Fetches all people.
 *
 * @returns {Promise<>} promise that if resolved, returns a list of all people.
 */
export const fetchAllPeople = async () => {
  try {
    // combine data from faculty, phd students, and non-phd students
    // doing this method since those are discriminators of the person model
    return (await Promise.all([
      fetchNonPhdStudents(),
      fetchPhdStudents(),
      fetchFaculty()
    ])).flat();
  } catch (error) {
    console.error(`Error in fetchAllPeople: ${ error }`);
    return error;
  }
};

/**
 * Fetches only faculty members.
 *
 * @returns {Promise<>} promise that if resolved, returns a list of faculty members.
 */
export const fetchFaculty = async () => {
  try {
    return await Faculty.find().lean();
  } catch (error) {
    console.error(`Error in fetchAllPeople: ${ error }`);
    return error;
  }
};

/**
 * Fetches only Ph.D. students.
 *
 * @returns {Promise<>} promise that if resolved, returns a list of Ph.D. students.
 */
export const fetchPhdStudents = async () => {
  try {
    return await PhdStudent.find()
      .populate("sig_head")
      .lean();
  } catch (error) {
    console.error(`Error in fetchAllPeople: ${ error }`);
    return error;
  }
};

/**
 * Fetches students who are not Ph.D. students (i.e., undergraduate and masters students).
 *
 * @returns {Promise<>} promise that if resolved, returns a list of undergraduate/masters students.
 */
export const fetchNonPhdStudents = async () => {
  try {
    return await NonPhdStudent.find()
      .populate("sig_head")
      .lean();
  } catch (error) {
    console.error(`Error in fetchAllPeople: ${ error }`);
    return error;
  }
};

// TODO: add the ability to populate tools for individuals when they are added
/**
 * Fetches information for a person, given the person's name.
 *
 * @param personName string name of person to fetch data for.
 * @returns {Promise<>} promise that if resolved, returns a person with all of their data.
 */
export const fetchPersonByName = async (personName) => {
  try {
    let relevantPerson = await Person.findOne({
      name: personName
    });

    // check if a person was found
    if (relevantPerson === null) {
      return {};
    }

    // check role and populate fields accordingly before returning
    switch(relevantPerson["role"]) {
      case "Faculty":
        return relevantPerson;
      case "NonPhdStudent":
      case "PhdStudent":
        return relevantPerson.populate("sig_head");
    }
  } catch (error) {
    console.error(`Error in getPersonByName: ${ error }`);
    return error;
  }
};
