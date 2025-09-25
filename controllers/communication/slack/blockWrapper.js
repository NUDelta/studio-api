/**
 * Splits a long text into multiple plain text section blocks, each ≤ 3000 chars.
 * @param text string text to include in the blocks.
 * @param isMarkdown optional boolean that specifies text is Markdown text.
 * @returns {Array} Array of Slack section blocks.
 */
export const blockPlainTextSplit = (text, isMarkdown = false) => {
  const MAX_LENGTH = 3000;
  if (!text || text.length <= MAX_LENGTH) {
    return [blockPlainText(text, isMarkdown)];
  }
  const blocks = [];
  let i = 0;
  while (i < text.length) {
    blocks.push(blockPlainText(text.slice(i, i + MAX_LENGTH), isMarkdown));
    i += MAX_LENGTH;
  }
  return blocks;
};
/**
 * This module wraps Slack's Block Kit components for easier composition of messages.
 */

/**
 * Plain text section block component.
 * @param text string text to include in the block.
 * @param isMarkdown optional boolean that specifies text is Markdown text.
 * @returns {{emoji: boolean, text, type: string}}
 */
export const blockPlainText = (text, isMarkdown = false) => {
  if (isMarkdown) {
    return {
      type: 'markdown',
      text: text,
    };
  }
  return {
    type: 'section',
    text: {
      type: 'plain_text',
      text: text,
      ...(isMarkdown ? {} : { emoji: true }),
    },
  };
};

/**
 * Block with a single-item static select drop-down menu.
 * @param descriptorText string descriptor text to help people use the dropdown menu.
 * @param options list of object that include a text field and value field.
 * @param actionId string action identifier for when a value is selected.
 * @param isMarkdown optional boolean that specifies text is Markdown text.
 * @returns {{text: {text, type: (string)}, type: string, accessory: {action_id, options: *, placeholder: {emoji: boolean, text: string, type: string}, type: string}}}
 */
export const blockStaticSingleSelect = (
  descriptorText,
  options,
  actionId,
  isMarkdown = false
) => {
  return {
    type: 'section',
    text: {
      type: isMarkdown ? 'mrkdwn' : 'plain_text',
      text: descriptorText,
    },
    accessory: {
      type: 'static_select',
      placeholder: {
        type: 'plain_text',
        text: 'Select an item',
        emoji: true,
      },
      options: options.map((option) => {
        return {
          text: {
            type: 'plain_text',
            text: option.text,
            emoji: true,
          },
          value: option.value,
        };
      }),
      action_id: actionId,
    },
  };
};

/**
 * Block with a multi-item static select drop-down menu.
 * @param descriptorText string descriptor text to help people use the dropdown menu.
 * @param options list of object that include a text field and value field.
 * @param actionId string action identifier for when a value is selected.
 * @param isMarkdown optional boolean that specifies text is Markdown text.
 * @returns {{text: {text, type: (string)}, type: string, accessory: {action_id, options: *, placeholder: {emoji: boolean, text: string, type: string}, type: string}}}
 */
export const blockStaticMultiSelect = (
  descriptorText,
  options,
  actionId,
  isMarkdown = false
) => {
  return {
    type: 'section',
    text: {
      type: isMarkdown ? 'mrkdwn' : 'plain_text',
      text: descriptorText,
    },
    accessory: {
      type: 'multi_static_select',
      placeholder: {
        type: 'plain_text',
        text: 'Select options',
        emoji: true,
      },
      options: options.map((option) => {
        return {
          text: {
            type: 'plain_text',
            text: option.text,
            emoji: true,
          },
          value: option.value,
        };
      }),
      action_id: actionId,
    },
  };
};

/**
 * Block with selectable check-boxes.
 * @param descriptorText string descriptor text to help people use the dropdown menu.
 * @param options list of object that include a text, description, and value field.
 * @param actionId string action identifier for when a value is selected.
 * @param isMarkdown optional boolean that specifies text is Markdown text.
 * @returns {{text: {text, type: (string)}, type: string, accessory: {action_id, options: *, type: string}}}
 */
export const blockCheckBoxes = (
  descriptorText,
  options,
  actionId,
  isMarkdown = false
) => {
  return {
    type: 'section',
    text: {
      type: isMarkdown ? 'mrkdwn' : 'plain_text',
      text: descriptorText,
    },
    accessory: {
      type: 'checkboxes',
      options: options.map((option) => {
        let optionObj = {
          text: {
            type: isMarkdown ? 'mrkdwn' : 'plain_text',
            text: option.text,
          },
          value: option.value,
        };

        // check if description is included and not empty, and add if so
        if (
          option.description !== undefined &&
          option.description !== null &&
          option.description !== ''
        ) {
          optionObj['description'] = {
            type: isMarkdown ? 'mrkdwn' : 'plain_text',
            text: option.description,
          };
        }
        return optionObj;
      }),
      action_id: actionId,
    },
  };
};
