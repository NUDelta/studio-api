# Studio API
An API for accessing data about [Agile Research Studios (ARS)](http://agileresearch.io/), specifically built for the Northwestern [Design, Technology, and Research (DTR)](http://dtr.northwestern.edu) program. 

## Setup
1. Create a `.env` file as follows:
    ```
    NODE_ENV=development
   PORT=3000
   DEBUG=true
   API_URL=http://localhost:3000
   CORS_ORIGINS=http://localhost:8080
   MONGODB_URI=mongodb://localhost/studio-api
   POOL_SIZE=25
    ```
2. Create your [Google Service Account Credientials](https://github.com/theoephraim/node-google-spreadsheet#service-account-recommended-method) and deposit the credentials at the root of this directory as `google-credentials.json`.

## Development
1. Run `npm install` to download the necessary packages.
2. Run `npm run dev` to start the local Node.js application.  

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