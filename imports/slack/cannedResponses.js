/**
 * This file provides canned responses for messages sent to the bot.
 * Each response has the following format: {
 *   cue: String,         // message that should trigger the response from the Slack bot
 *   response: Function   // function that executes when cue is detected
 * }
 */

/*
 Introduce self to channel.
 */
const introduceSelf = {
  cue: 'hello!',
  response: async ({ message, say }) => {
    await say(
      "Hello, I'm the Orchestration Bot! I will send messages throughout the week to your project and SIG channels to help you and your mentor progress your projects and learning."
    );
  },
};

/*
 Meaning of life.
 */
const meaningOfLife = {
  cue: 'what is the meaning of life?',
  response: async ({ message, say }) => {
    await say('42.');
  },
};

export default [introduceSelf, meaningOfLife];
