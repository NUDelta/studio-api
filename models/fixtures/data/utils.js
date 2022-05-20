/**
 * Returns a list of all students that are part of a sig.
 * @param allProjects list of projects that include fields for students, sig_head, and sig_name.
 * @param sigName string sig to get all members for.
 * @returns {*[]} list of people's names that are members of the sig.
 */
export const getAllMembersForSig = (allProjects, sigName) => {
  return Array.from(new Set(
    allProjects.filter(project => {
      return project.sig_name === sigName;
    }).reduce((previousValue, currentValue) => {
      return [...previousValue, ...currentValue.students];
    }, [])
  ));
};