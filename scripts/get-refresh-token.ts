import { google } from 'googleapis';
import readline from 'readline';

/**
 * Rebecca's Token Generation Tool
 * 
 * Run this to get your GOOGLE_REFRESH_TOKEN.
 * Usage: npx ts-node scripts/get-refresh-token.ts
 */

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const SCOPES = [
  'https://www.googleapis.com/auth/calendar.events',
  'https://www.googleapis.com/auth/tasks'
];

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("ERROR: Please set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET env vars first.");
  process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, 'urn:ietf:wg:oauth:2.0:oob');

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
  prompt: 'consent'
});

console.log('--- REBECCA: GOOGLE AUTHORIZATION PROTOCOL ---');
console.log('1. Visit this URL in your browser:');
console.log(authUrl);
console.log('\n2. Authorize the application and copy the code provided.');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('\n3. Paste the authorization code here: ', (code) => {
  rl.close();
  oauth2Client.getToken(code, (err, token) => {
    if (err) {
      console.error('Error retrieving access token', err);
      return;
    }
    console.log('\n--- SUCCESS: PROJECT ONE MILLION SECURED ---');
    console.log('Copy this REFRESH TOKEN and add it to your GOOGLE_REFRESH_TOKEN env var:');
    console.log(token?.refresh_token);
    console.log('\nKeep this secret. This is my direct bridge to your attention.');
  });
});
