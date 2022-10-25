import { getAllMembersForSig } from "./utils.js";
import { facultyData, phdStudentData, nonPhdStudentData } from "./peopleFixtures.js";
import { projectData } from "./projectFixtures.js";

export const studioData = [
  {
    name: "Studio Meeting",
    description: "Weekly studio meeting with all members of the community.",
    day_of_week: "Friday",
    start_time: "12:00:00",
    end_time: "15:00:00",
    timezone: "America/Chicago",
    attendees: [
      facultyData.map(person => { return person.name }),
      phdStudentData.map(person => { return person.name }),
      nonPhdStudentData.map(person => { return person.name }),
    ].flat(),
  }
];

// TODO: update
export const sigMeetingData = [
  {
    name: "Networked Orchestration Technologies SIG Meeting",
    description: "Weekly SIG meeting for NOT SIG",
    day_of_week: "Monday",
    start_time: "16:00:00",
    end_time: "17:00:00",
    timezone: "America/Chicago",
    attendees: getAllMembersForSig(projectData, "Networked Orchestration Technologies"),
    projects: [
      "Orchestration Scripting Environments",
      "Orchestrating Planning and Reflection"
    ],
  },
  {
    name: "Collective Experiences SIG Meeting",
    description: "Weekly SIG meeting for CE SIG",
    day_of_week: "Wednesday",
    start_time: "14:00:00",
    end_time: "15:00:00",
    timezone: "America/Chicago",
    attendees: getAllMembersForSig(projectData, "Collective Experiences"),
    projects: [
      "Collective Narrative",
      "CE for Relationship Development"
    ],
  },
  {
    name: "Readily Available Learning Experiences SIG Meeting",
    description: "Weekly SIG meeting for RALE SIG",
    day_of_week: "Monday",
    start_time: "14:00:00",
    end_time: "15:00:00",
    timezone: "America/Chicago",
    attendees: getAllMembersForSig(projectData, "Readily Available Learning Experiences"),
    projects: [
      "Knowledge Maps",
      "Scaffolded Exercises"
    ],
  },
  {
    name: "Contextually-Aware Metacognitive Practice SIG Meeting",
    description: "Weekly SIG meeting for CAMP SIG",
    day_of_week: "Friday",
    start_time: "10:00:00",
    end_time: "10:30:00",
    timezone: "America/Chicago",
    attendees: getAllMembersForSig(projectData, "Contextually-Aware Metacognitive Practice"),
    projects: [
      "Path"
    ],
  },
  {
    name: "Summer BBQ SIG Meeting",
    description: "Weekly SIG meeting for BBQ SIG",
    day_of_week: "Friday",
    start_time: "15:00:00",
    end_time: "16:00:00",
    timezone: "America/Chicago",
    attendees: getAllMembersForSig(projectData, "Summer BBQ"),
    projects: [
      "Gobi Proj",
      "Ryan Proj",
      "Kapil Proj",
    ],
  }
];

// TODO: be able to encode ad-hoc office hours
export const officeHoursData = [
  {
    name: "Networked Orchestration Technologies Office Hours",
    description: "Weekly office hours for NOT SIG",
    day_of_week: "Thursday",
    start_time: "13:00:00",
    end_time: "14:00:00",
    timezone: "America/Chicago",
    projects: [
      "Orchestration Scripting Environments",
      "Orchestrating Planning and Reflection"
    ],
  },
  {
    name: "Collective Experiences SIG Office Hours for Collective Narrative",
    description: "Weekly office hours for CE SIG's Collective Narrative project",
    day_of_week: "Tuesday",
    start_time: "13:00:00",
    end_time: "13:45:00",
    timezone: "America/Chicago",
    projects: [
      "Collective Narrative"
    ]
  },
  {
    name: "Collective Experiences SIG Office Hours for Collective Experiences Relationship Dev",
    description: "Weekly office hours for CE SIG's Collective Experiences Relationship Dev project",
    day_of_week: "Tuesday",
    start_time: "17:00:00",
    end_time: "17:45:00",
    timezone: "America/Chicago",
    projects: [
      "CE for Relationship Development"
    ]
  },
];
