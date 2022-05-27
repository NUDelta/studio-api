import { googleServiceAccountInfo } from "../../../imports/utils/googleAuth.js";
import { GoogleSpreadsheet } from 'google-spreadsheet';

// TODO: comment all the code in this file

/**
 * This class handles the parsing of a Google Sheet Sprint Log document.
 *
 * Data model for Sprint Log:
 * SprintLog {
 *   url: "String"                           // link to Google Drive Spreadsheet
 *   documentId: "String"                    // ID of document parsed from URL
 *   people: [String]                        // student names
 *   sprints: [                              // list of SprintPlans for each sprint in the qtr
 *     SprintPlan {
 *       name: "String",                     // name of sprint (e.g., "Sprint 0")
 *       points: [                           // summary of points for the sprint for each student
 *          name: "String",                  // name of specific student
 *          pointsAvailable: Number,         // number of points student has (for ugrads, typically 8)
 *          pointsCommitted: {               // number of points committed
 *              total: Number,
 *              design: Number,
 *              technology: Number,
 *              research: Number
 *          },
 *          hoursSpent: {                    // number of hours spent
 *              total: Number,
 *              design: Number,
 *              technology: Number,
 *              research: Number
 *          }
 *       ],
 *       totalPoints: {                      // total points planned/spent on sprint (students combined)
 *          pointAvailable: Number,
 *          pointsCommitted: {
 *              total: 0,
 *              design: 0,
 *              technology: 0,
 *              research: 0
 *          },
 *          hoursSpent: {
 *              total: 0,
 *              design: 0,
 *              technology: 0,
 *              research: 0
 *          }
 *       },
 *       url: "String"                         // link to specific Worksheet in Google Drive for this sprint
 *       stories: [                            // list of SprintStories for the SprintPlan
 *         SprintStory {
 *          description: "String",             // description of the story (typically, the risk in project)
 *          purpose: "String",                 // purpose of the story (typically, why the risk is important to address)
 *          deliverables: "String",            // description of the deliverable
 *          totalPointsRequired: Number,       // number of points allocated to this story
 *          totalPointsSpent: Number,          // number of points spend so far on this story
 *          tasks: [                           // list of SprintTasks for each SprintStory
 *           SprintTask {
 *              description: "String",         // description of the task
 *              expectedRoadblocks: "String",  // expected roadblocks for the task (if any)
 *              pointsAllocated: Number,       // number of points allocated for the task
 *              taskCategory: "String",        // category the task is of (D/T/R)
 *              assignee: "String",            // student assigned to the task
 *              taskStatus: "String"           // current status of task (blank, in-progress, backlogged, done)
 *              pointsSpent: Number,           // number of points spent on the task
 *              helpfulLinks: "String",        // helpful links added by user for that task
 *            }
 *          ];
 *         }
 *       ]
 *     }
 *   ]
 * }
 */
export class SprintLog {
  url = ""; // Google Drive URL for Sprint Log
  documentId = ""; // Google Drive spreadsheet id for the current sprint log

  people = []; // list of people the sprint is for
  sprints = []; // list of Sprint objects associated with the sprint log

  constructor(sprintLogUrl) {
    // get documentId and create new google spreadsheet parser
    this.url = sprintLogUrl;
    this.documentId = SprintLog.getSprintLogIdForUrl(sprintLogUrl);
    const sprintLogDoc = new GoogleSpreadsheet(this.documentId);

    return (async () => {
      // TODO: needs to be more granular. When it does fail, wait 60 seconds and try again.
      // Re-try is handled by the caller rn, but I think it should be done here.
      try {
        // authorize GoogleSpreadsheet to get the Spreadsheet
        await sprintLogDoc.useServiceAccountAuth(googleServiceAccountInfo);
        await sprintLogDoc.loadInfo();

        // fetch all Worksheets
        const worksheets = sprintLogDoc.sheetsByIndex;

        // parse each worksheet
        for (let i = 0; i < worksheets.length; i++) {
          // fetch current worksheet's info
          let currWorksheet = worksheets[i];
          let currWorksheetTitle = currWorksheet.title.toLowerCase().trim();

          // parse team worksheet
          if (currWorksheetTitle === "team") {
            await this.#parseTeam(currWorksheet);
          }

          // parse sprint sheets
          if (currWorksheetTitle.startsWith("sprint")) {
            await this.#parseSprints(currWorksheet);
          }
        }

        // return the object back up the caller
        return this;
      } catch (e) {
        console.error(`Error in loading data for worksheet: ${ e }`);
      }

      return undefined;
    })();
  }

  // TODO: better as a utility function for getting the document ID for Google Drive files.
  static getSprintLogIdForUrl(url) {
    let re = new RegExp('[-\\w]{25,}'); // note that this isn't a super robust regex
    let output = url.match(re);
    return output[0];
  }

  async #parseTeam(worksheet) {
    // get all rows
    const rows = await worksheet.getRows();

    // fetch all people associated with this sprint log, and save to class variables
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      this.people.push(rows[rowIndex]["Team Members"])
    }
  }

  async #parseSprints(worksheet) {
    // create a new Sprint object for each sprint worksheet
    let sprintObj = new SprintPlan(worksheet.title.split(":")[0], this.people);

    // load area for sprint log into worksheet
    let loadArea = { startRowIndex: 0, endRowIndex: 100, startColumnIndex: 0, endColumnIndex: 14};
    await worksheet.loadCells(loadArea);

    // get summary about points planned/spend for the current sprint
    sprintObj = await this.#parsePointSummaryForSprint(worksheet, sprintObj);

    // get all stories (and tasks) for the sprint
    sprintObj = await this.#parseStoriesForSprint(worksheet, sprintObj);

    // add sprint to class object
    this.sprints.push(sprintObj);
  }

  async #parsePointSummaryForSprint(worksheet, sprintObj) {
    // area that contains the point summary for the sprint
    let loadArea = { startRowIndex: 0, endRowIndex: 9, startColumnIndex: 0, endColumnIndex: 14}

    // iterate over the point summary area
    let rowIndex = loadArea.startRowIndex;
    let colIndex = loadArea.startColumnIndex;
    while (rowIndex < loadArea.endRowIndex) {
      let currCellValue = worksheet.getCell(rowIndex, colIndex).value;

      // check if the name in this column is a person who is on the sprint log
      if (currCellValue!== null && this.people.includes(currCellValue)) {
        // temp objs to store info while parsing row
        let personName = currCellValue;
        let pointsAvailable = 0;
        let pointsCommitted = {
          total: 0,
          design: 0,
          technology: 0,
          research: 0
        };
        let hoursSpent = {
          total: 0,
          design: 0,
          technology: 0,
          research: 0
        };

        // iterate over the point info and store it into the temp objs above
        while (colIndex < loadArea.endColumnIndex) {
          let currCellValue = worksheet.getCell(rowIndex, colIndex).value;
          switch (colIndex) {
            case 1:
              pointsAvailable = currCellValue;
              break;
            case 3: // this is because the points available cell is merged
              pointsCommitted.total = currCellValue;
              break;
            case 4:
              pointsCommitted.design = currCellValue;
              break;
            case 5:
              pointsCommitted.technology = currCellValue;
              break;
            case 6:
              pointsCommitted.research = currCellValue;
              break;
            case 7:
              hoursSpent.total = currCellValue;
              break;
            case 8:
              hoursSpent.design = currCellValue;
              break;
            case 9:
              hoursSpent.technology = currCellValue;
              break;
            case 10:
              hoursSpent.research = currCellValue;
              break;
            default:
              break;
          }

          // move to the next column
          colIndex++;
        }

        // store data into a sprint object
        sprintObj.updatePointsObjForPerson(personName, "pointsAvailable", pointsAvailable);
        sprintObj.updatePointsObjForPerson(personName, "pointsCommitted", pointsCommitted);
        sprintObj.updatePointsObjForPerson(personName, "hoursSpent", hoursSpent);
      }

      // move to the next row and also reset the column index
      rowIndex++
      colIndex = loadArea.startColumnIndex;
    }

    // add a total points field
    let totalPoints = {
      pointAvailable: 0,
      pointsCommitted: {
        total: 0,
        design: 0,
        technology: 0,
        research: 0
      },
      hoursSpent: {
        total: 0,
        design: 0,
        technology: 0,
        research: 0
      }
    };

    sprintObj.points.map((pointsForPerson) => {
      totalPoints.pointAvailable += pointsForPerson.pointsAvailable;

      totalPoints.pointsCommitted.total += pointsForPerson.pointsCommitted.total;
      totalPoints.pointsCommitted.design += pointsForPerson.pointsCommitted.design;
      totalPoints.pointsCommitted.technology += pointsForPerson.pointsCommitted.technology;
      totalPoints.pointsCommitted.research += pointsForPerson.pointsCommitted.research;

      totalPoints.hoursSpent.total += pointsForPerson.hoursSpent.total;
      totalPoints.hoursSpent.design += pointsForPerson.hoursSpent.design;
      totalPoints.hoursSpent.technology += pointsForPerson.hoursSpent.technology;
      totalPoints.hoursSpent.research += pointsForPerson.hoursSpent.research;
    });

    sprintObj.totalPoints = totalPoints;

    // add url for the current sprint
    sprintObj.url = `https://docs.google.com/spreadsheets/d/${ this.documentId }/edit#gid=${ worksheet.sheetId }`;

    // return the updated sprintObj
    return sprintObj;
  }

  async #parseStoriesForSprint(worksheet, sprintObj) {
    // area that contains the stories and tasks
    let loadArea = { startRowIndex: 10, endRowIndex: 100, startColumnIndex: 0, endColumnIndex: 14}

    // iterate over rows to find stories and their tasks
    let rowIndex = loadArea.startRowIndex;
    let currStory;
    while (rowIndex < loadArea.endRowIndex) {
      let colIndex = loadArea.startColumnIndex;
      let currCellValue = worksheet.getCell(rowIndex, colIndex).value;

      // row can be two cases
      // (1) a story row that is indicated by a non-null value in column 0
      // (2) a task row that is a task for the current story if column 1 is not null

      // case (1): we've found a new story
      if (currCellValue !== null) {
        // if we have a story already, then add it to the sprint object
        if (currStory !== undefined) {
          // compute total points for story
          currStory.computeTotalPoints();

          // add story to sprint
          sprintObj.addStoryToSprint(currStory);
        }

        // fill out information for the current story
        let storyDescription;
        let storyPurpose;
        let storyDeliverable;

        while (colIndex < loadArea.endColumnIndex) {
          let currCellValue = worksheet.getCell(rowIndex, colIndex).value;
          switch (colIndex) {
            case 0:
              storyDescription = currCellValue;
              break;
            case 1: // this is because the points available cell is merged
              storyPurpose = currCellValue;
              break;
            case 2:
              storyDeliverable = currCellValue;
              break;
            default:
              break;
          }

          // move to the next column
          colIndex++;
        }

        // create a new sprint story based on the info we've parsed
        currStory = new SprintStory(storyDescription, storyPurpose, storyDeliverable);
      }
      // case (2): we've found a new task
      else if (worksheet.getCell(rowIndex, colIndex + 1).value !== null) {
        // make sure we have a created story to add this task to
        if (currStory !== undefined) {
          // fill out information for each task
          let description = "";
          let expectedRoadblocks = "";
          let pointsAllocated = 0;
          let taskCategory = "";
          let assignee = "";
          let taskStatus = ""
          let pointsSpent = 0;
          let helpfulLinks = "";

          while (colIndex < loadArea.endColumnIndex) {
            let currCellValue = worksheet.getCell(rowIndex, colIndex).value;
            switch (colIndex) {
              case 1:
                description = currCellValue;
                break;
              case 2:
                expectedRoadblocks = currCellValue;
                break;
              case 3:
                pointsAllocated = currCellValue;
                break;
              case 4:
                if (currCellValue !== null) { taskCategory = "design"; }
                break;
              case 5:
                if (currCellValue !== null) { taskCategory = "technology"; }
                break;
              case 6:
                if (currCellValue !== null) { taskCategory = "research"; }
                break;
              case 7:
                assignee = currCellValue;
                break;
              case 8:
                taskStatus = currCellValue;
                break;
              case 11: // skipping cells because they are merged
                pointsSpent = currCellValue;
                break;
              case 12:
                // TODO: check if just text or hyperlink (and really, capture both in an object)
                helpfulLinks = worksheet.getCell(rowIndex, colIndex).hyperlink;
                break;
              default:
                break;
            }

            // move to the next column
            colIndex++;
          }

          // create a new story task based on the info we've parsed
          let currTask = new SprintTask(description, expectedRoadblocks, pointsAllocated,
            taskCategory, assignee, taskStatus, pointsSpent, helpfulLinks);

          // add the task to the current story
          currStory.addNewTask(currTask);
        }
      }

      // move to the next row
      rowIndex++
    }

    // add the final story that has not been added yet
    if (currStory !== undefined) {
      // compute total points for story
      currStory.computeTotalPoints();

      // add story to sprint
      sprintObj.addStoryToSprint(currStory);
    }

    // return the updated sprintObj
    return sprintObj;
  }
}

/**
 * This class is a data model for each Sprint that contains a summary of point allocations,
 * and the current stories in the sprint.
 */
export class SprintPlan {
  name = "";    // str name of sprint (e.g., Sprint 1)
  points = [];  // list of objs where each key is a person and values are points available,
                // points committed (total/D/T/R splits), and hours spent (total/D/T/R splits)
  stories = []; // list of SprintStories associated with this specific sprint

  constructor(sprintName, people) {
    this.name = sprintName;

    // create objects for each person
    people.forEach(person => {
      this.points.push({
        name: person,
        pointsAvailable: 0,
        pointsCommitted: {
          total: 0,
          design: 0,
          technology: 0,
          research: 0
        },
        hoursSpent: {
          total: 0,
          design: 0,
          technology: 0,
          research: 0
        }
      })
    });
  }

  updatePointsObjForPerson(person, field, updatedValue) {
    for (let i = 0; i < this.points.length; i++) {
      let currPerson = this.points[i].name;

      // check if we found the person
      if (currPerson.toLowerCase().trim() === person.toLowerCase().trim()) {
        this.points[i][field] = updatedValue;
      }
    }
  }

  addStoryToSprint(sprintStoryToAdd) {
    this.stories.push(sprintStoryToAdd);
  }
}

/**
 * This class is a data model for each story in a sprint that contains a description of the story,
 * the goal of the story, its deliverables, and associated tasks.
 */
export class SprintStory {
  description = ""; // str what the current story is about
  purpose = ""; // str goal of the story
  deliverables = ""; // str deliverables planned for the story
  tasks = []; // list of SprintTasks associated with the story
  totalPointsRequired = 0; // number of points allocated to this story
  totalPointsSpent = 0; // number of points spend so far on this story

  constructor(storyDescription, storyPurpose, storyDeliverable) {
    this.description = storyDescription;
    this.purpose = storyPurpose;
    this.deliverables = storyDeliverable;
  }

  addNewTask(sprintTaskObj) {
    this.tasks.push(sprintTaskObj);
  }

  computeTotalPoints() {
    // reset values
    this.totalPointsRequired = 0;
    this.totalPointsSpent = 0;

    // add values from tasks for each story
    this.tasks.forEach(currTask => {
      this.totalPointsRequired += currTask.pointsAllocated;
      this.totalPointsSpent += currTask.pointsSpent;
    });
  }
}

/**
 * This class is a data model for each task in a sprint story that contains a description of the
 * task, any expected roadblocks, task category, assignee, points allocated, points spent,
 * story status, and helpful links.
 */
export class SprintTask {
  description = ""; // str description of the task
  expectedRoadblocks = ""; // expected roadblocks for the task
  pointsAllocated = 0; // number of points allocated for the task
  taskCategory = ""; // str category the task is of (D/T/R) -- might be better as an enum
  assignee = ""; // str who the task is assigned to
  taskStatus = "" // str current status of task (blank, in-progress, backlogged, done)
  pointsSpent = 0; // number of points spent on the task
  helpfulLinks = ""; // str any helpful links added by user for that task

  constructor(taskDescription, taskExpectedRoadblocks, taskPointsAllocated, taskTaskCategory,
              taskAssignee, taskTaskStatus, taskPointsSpent, taskHelpfulLinks) {
    this.description = taskDescription;
    this.expectedRoadblocks = (taskExpectedRoadblocks === null) ? "" : taskExpectedRoadblocks;
    this.pointsAllocated = (taskPointsAllocated === null) ? 0 : taskPointsAllocated;
    this.taskCategory = taskTaskCategory;
    this.assignee = taskAssignee;
    this.taskStatus = taskTaskStatus;
    this.pointsSpent = (taskPointsSpent === null) ? 0 : taskPointsSpent;
    this.helpfulLinks = taskHelpfulLinks;
  }
}
