# Studio API
An API for accessing data about [Agile Research Studios (ARS)](http://agileresearch.io/), specifically built for the Northwestern [Design, Technology, and Research (DTR)](http://dtr.northwestern.edu) program. 

## Setup
1. Create a `.env` file as follows:
    ```
    DEBUG=studioapi:server
    NODE_END=development
    PORT=4000
    REFRESH_DB=true
    ```
2. Create your [Google Service Account Credientials](https://github.com/theoephraim/node-google-spreadsheet#service-account-recommended-method) and deposit the credentials at the root of this directory as `google-credentials.json`.

## Development
1. Run `npm install` to download the necessary packages.
2. Run `npm run dev` to start (1) the node app; and (2) the local mongodb.  