# Studio API

An API for accessing data about [Agile Research Studios (ARS)](http://agileresearch.io/), specifically built for the Northwestern [Design, Technology, and Research (DTR)](http://dtr.northwestern.edu) program.

## Prerequisites

1. Make sure you have [Node.js](https://nodejs.org/en/), [yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable), and [MongoDB](https://www.mongodb.com/docs/guides/server/install/) installed.

## Setup for local development

1. Create a `.env` file as follows:
   ```
   NODE_ENV=development
   PORT=3000
   DEBUG=true
   MONGODB_URI=mongodb://localhost/studio-api
   GOOGLE_SERVICE_ACCOUNT_EMAIL="<GOOGLE_SERVICE_ACCOUNT_EMAIL>"
   GOOGLE_PRIVATE_KEY="<GOOGLE_API_PRIVATE_KEY>"
   SLACK_SIGNING_SECRET="<SLACK_SIGNING_SECRET>"
   SLACK_BOT_TOKEN="<SLACK_BOT_TOKEN>"
   TZ=UTC
   ```
2. Create your [Google Service Account Credientials](https://github.com/theoephraim/node-google-spreadsheet#service-account-recommended-method) and deposit the credentials at the root of this directory as `google-credentials.json`.
3. Set up a [Slack Bot](https://slack.com/help/articles/115005265703-Create-a-bot-for-your-workspace) using the `slack-manifest.json` in this repository.
   1. Note: you will need to fill in the fields for `APPLICATION_NAME` `BOT_USER_NAME`, and `BOT_EVENT_URL`.
   2. For development, use [ngrok](https://ngrok.com/) to tunnel into your localhost and provide your Slack application with the `BOT_EVENT_URL`. In production, use the URL or IP address to your server.

## Development

1. Run `yarn` to download the necessary packages.
2. Install [ngrok](https://ngrok.com/download).
3. Run `yarn run dev` to start the local Node.js application.
4. In a separate tab, start the MongoDB daemon using `mongod --dbpath=<PATH_TO_DB>`.
5. In another separate tab, start ngrok using `ngrok http <PORT_NUMBER>`.

## Deployment

For production, use the following environment variables:

```
NODE_ENV=production
PORT=8080
MONGODB_URI=<url of mongodb>
GOOGLE_SERVICE_ACCOUNT_EMAIL="<GOOGLE_SERVICE_ACCOUNT_EMAIL>"
GOOGLE_PRIVATE_KEY="<GOOGLE_API_PRIVATE_KEY>"
SLACK_SIGNING_SECRET="<SLACK_SIGNING_SECRET>"
SLACK_BOT_TOKEN="<SLACK_BOT_TOKEN>"
TZ=UTC
```

## Data Sources

_Check mark indicates API support for the data source._

- [ ] Venues
- [ ] People
- [ ] Events
- [ ] Sprint Logs
- [ ] Research Canvases
- [ ] Design Log
- [ ] Git Repo
- [ ] The Weekly
- [ ] IDP/LIP
- [ ] Self-Assessment
- [ ] Pair Research

## API Documentation

Coming soon...
