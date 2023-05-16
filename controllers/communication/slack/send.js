/**
 * This module is used to send messages over Slack, including to channels and people.
 */
import { app } from '../../../index.js';
import {
  blockPlainText,
  blockStaticSingleSelect,
  blockStaticMultiSelect,
  blockCheckBoxes,
} from './blockWrapper.js';

/**
 * Messages a channel with a plain-text message.
 * @param channel string channel name or ID.
 * @param peopleIds string list of people ids to "@" in the message; // TODO: maybe use list of ppl.
 * @param message string message to include.
 * @returns {Promise<ChatPostMessageResponse>} message promise from slack API.
 */
export const messageChannel = (channel, peopleIds, message) => {
  let completeMessage = `Hey ${peopleIds}! ${message}`;
  return app.client.chat.postMessage({
    channel: channel,
    blocks: [blockPlainText(completeMessage, true)],
    text: completeMessage,
  });
};

/**
 * Messages a list of people with options to select from.
 * @param channel string channel name or ID.
 * @param peopleIds string list of people ids to "@" in the message; // TODO: maybe use list of ppl.
 * @param message string message to include.
 * @param options list of object that include a text, description, and value field.
 * @param selectType string type of selection message to send.
 * @returns {Promise<ChatPostMessageResponse>} message promise from slack API.
 */
export const messagePersonWithOptions = (
  channel,
  peopleIds,
  message,
  options,
  selectType
) => {
  let completeMessage = `Hey ${peopleIds}! ${message}`;

  // generate message payload based on select type
  let optionBlock = null;
  switch (selectType) {
    case 'single-select':
      optionBlock = blockStaticSingleSelect(
        'Please select a strategy for me to monitor for and execute from the dropdown list.',
        options,
        selectType,
        true
      );
      break;
    case 'multi-select':
      optionBlock = blockStaticMultiSelect(
        'Please select one or more strategies for me to monitor for and execute from the dropdown list.',
        options,
        selectType,
        true
      );
      break;
    case 'checkbox':
      optionBlock = blockCheckBoxes(
        'Please select one or more options from the checklist below.',
        options,
        selectType,
        true
      );
      break;
  }

  let payloadBlocks = [blockPlainText(completeMessage, true)];

  if (optionBlock !== null) {
    payloadBlocks.push(optionBlock);
  }

  // return message
  return app.client.chat.postMessage({
    channel: channel,
    blocks: payloadBlocks,
    text: completeMessage,
  });
};
