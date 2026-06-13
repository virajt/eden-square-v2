import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

/**
 * Rebecca's Google Notification Bridge
 * 
 * This module allows the Agency to push critical alerts directly to the Principal's
 * Google Calendar and Tasks list for mobile notifications.
 */

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

const createAuthClient = () => {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    throw new Error("MISSING_CREDENTIALS: GOOGLE_REFRESH_TOKEN, CLIENT_ID, or CLIENT_SECRET not found.");
  }

  const auth = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);
  auth.setCredentials({ refresh_token: REFRESH_TOKEN });
  return auth;
};

/**
 * Adds a high-priority task to the Principal's To-Do list.
 */
export async function pushTask(title: string, notes: string) {
  try {
    const auth = createAuthClient();
    const tasks = google.tasks({ version: 'v1', auth });

    const response = await tasks.tasks.insert({
      tasklist: '@default',
      requestBody: {
        title: `[REBECCA] ${title}`,
        notes: notes,
        due: new Date(Date.now() + 3600000).toISOString(), // 1 hour from now
      },
    });

    console.log(`[GOOGLE_SYNC] Task created: ${response.data.id}`);
    return response.data;
  } catch (error: any) {
    console.error(`[GOOGLE_SYNC_ERROR] Failed to push task: ${error.message}`);
    throw error;
  }
}

/**
 * Adds a strategic sync event to the Principal's Calendar.
 */
export async function pushCalendarEvent(summary: string, description: string) {
  try {
    const auth = createAuthClient();
    const calendar = google.calendar({ version: 'v3', auth });

    const event = {
      summary: `🚩 ${summary}`,
      description: description,
      start: { dateTime: new Date().toISOString() },
      end: { dateTime: new Date(Date.now() + 1800000).toISOString() }, // 30 min event
      reminders: {
        useDefault: false,
        overrides: [{ method: 'popup', minutes: 5 }],
      },
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
    });

    console.log(`[GOOGLE_SYNC] Calendar event created: ${response.data.htmlLink}`);
    return response.data;
  } catch (error: any) {
    console.error(`[GOOGLE_SYNC_ERROR] Failed to push event: ${error.message}`);
    throw error;
  }
}
