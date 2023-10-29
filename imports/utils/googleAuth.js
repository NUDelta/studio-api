import { google } from 'googleapis';

/*
  Fetch information for service account.
 */
export const googleServiceAccountInfo = {
  client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ?? '',
  private_key: process.env.GOOGLE_PRIVATE_KEY ?? '',
};

/*
  Authenticate Google Drive using a JWT token.
 */
export const googleDriveAuth = new google.auth.JWT(
  googleServiceAccountInfo.client_email,
  null,
  googleServiceAccountInfo.private_key,
  [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/drive.appdata',
    'https://www.googleapis.com/auth/drive.metadata',
  ]
);

googleDriveAuth.authorize(function (err, tokens) {
  if (err) {
    console.log(`Error when authorizing Google Drive:`);
    console.log(err);
  } else {
    console.log('Google Drive successfully authorized.');
  }
});
