/**
 * This module composes the message payload to send using the Slack API.
 */
import {
  blockPlainText,
  blockStaticSingleSelect,
  blockStaticMultiSelect,
  blockCheckBoxes
} from "./blockWrapper.js";

/**
 * Returns a list of slack id's when provided a list of people objects, which can be used to ping each person in a channel or direct message in Slack.
 * @param peopleList list of people objects. each person must contain a slack_id field.
 * @returns {string} string with each person's slack_id concatenated together.
 */
export const formatPeopleForSlackMessage = (peopleList) => {
  return peopleList.map((person) => {
    return `<@${ person.slack_id }>`
  }).join(" ");
};