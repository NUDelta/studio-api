import { googleServiceAccountInfo } from "../../../imports/utils/googleAuth.js";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { SprintLog } from "../sprintLog/sprintLogParser.js";


// TODO: Think about where the data for MicroBoard should be loaded
// Status update times and weekly reflections are relevant to projects, but the goals are both personal and project-related?
/**
 * This class handles the parsing of a Google Spreadsheet MicroBoard document.
 *
 * Data model for MicroBoard (for each person):
 * MicroBoard {
 *   url: "String",                         // link to Google Drive Spreadsheet
 *   documentId: "String",                  // ID of document parsed from URL
 *   reflectionSheets: [
 *     ReflectionSheet {
 *        name: "String",                   // name of sprint (e.g., "Sprint 0")
 *        url: "String",                    // link to specific Worksheet in Google Drive for this sprint
 *        sprintReflections [
 *          SprintReflection: {
 *            personName: "String"          // name of person sprint reflection is for
 *            previousSprint: {
 *              hitPoints: Boolean,
 *              completedSomeStories: Boolean,
 *              completedSomeDeliverables: Boolean,
 *              riskAddressing:"String",
 *              plannedDeliverable: "String"
 *              completedDeliverable: "String",
 *              linkToDeliverable: "String",
 *              progressReflection: "String"
 *            },
 *           nextSprint: {
 *              knowRisksDeliverables: Boolean,
 *              plannedSprint: Boolean,
 *              fullyCommittedPoints: Boolean,
 *              riskToAddress:"String",
 *              deliverableForRisk: "String"
 *            }
 *          }
 *        ],
 *        meetingNotes: [
 *          MeetingReflectionNotes { // TODO: don't really like this name
 *            personName: "String",
 *            workingProcessReflection: "String",
 *            agendaItems: "String",
 *            discussionNotes: "String"
 *          }
 *        ]
 *     }
 *   ],
 *   quarterGoals: [
 *     QuarterGoals: {
 *       personName: "",
 *       currentQuarter: {
 *         metacognitiveGoal: "String",
 *         projectGoal: "String",
 *       },
 *       previousQuarter: {
 *         metacognitiveGoal: "String",
 *         projectGoal: "String",
 *       }
 *     }
 *   ],
 *   statusUpdates: [
 *     StatusUpdate: {
 *       date: Date,                         // date of status update
 *       presenter: "String",                // name of presenter
 *       helpRequest: "String",              // name of presenter
 *       notes: "String"
 *     }
 *   ]
 * }
 */


export class MicroBoard {
  url = ""; // Google Drive URL for Sprint Log
  documentId = ""; // Google Drive spreadsheet id for the current MicroBoard

  constructor(microBoardUrl) {
    // get documentId and create a new google spreadsheet parser
    this.url = microBoardUrl;
    this.documentId = SprintLog.getSprintLogIdForUrl(microBoardUrl);
    const microBoardDoc = new GoogleSpreadsheet(this.documentId);

    return (async () => {
      try {
        // authorize GoogleSpreadsheet to get the Spreadsheet
        await microBoardDoc.useServiceAccountAuth(googleServiceAccountInfo);
        await microBoardDoc.loadInfo();

        // fetch all Worksheets
        const worksheets = microBoardDoc.sheetsByIndex;

        // parse each worksheet
        for (let i = 0; i < worksheets.length; i++) {
          // fetch current worksheet's info
          let currWorksheet = worksheets[i];
          let currWorksheetTitle = currWorksheet.title.toLowerCase().trim();

          // parse goals sheet
          if (currWorksheetTitle === "metacognitive and project goals") {
            await this.#parseGoalsSheet(currWorksheet);
          }

          // parse status update sign-up sheet
          if (currWorksheetTitle === "status update sign-up") {
            await this.#parseStatusUpdateSignupSheet(currWorksheet);
          }

          // parse sprint reflection sheets
          if (currWorksheetTitle.startsWith("sprint")) {
            await this.#parseSprintReflectionSheet(currWorksheet);
          }
        }

      }  catch (e) {
        console.error(`Error in loading data for worksheet: ${ e }`);
      }

      return undefined;
    })();
  }

  async #parseGoalsSheet(worksheet) {

  }

  async #parseStatusUpdateSignupSheet(worksheet) {

  }

  async #parseSprintReflectionSheet(worksheet) {

  }

  getGoalsForPerson(personName) {

  }
}

class ReflectionSheet {

}

class QuarterGoal {

}

class StatusUpdate {

}
