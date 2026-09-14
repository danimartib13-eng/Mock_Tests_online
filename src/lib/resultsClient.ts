import type { AnswerDetailRecord, ResultsSummaryRecord } from "../types/test";

export interface SubmitAttemptPayload {
  summary: ResultsSummaryRecord;
  answers: AnswerDetailRecord[];
}

export interface SubmitAttemptResult {
  success: boolean;
}

/**
 * Abstraction over "wherever results get stored". Today the only
 * implementation is Google Apps Script (see apps-script/Code.gs), but pages
 * only ever depend on this interface — swapping in a real backend later
 * means adding a new implementation here, not touching any page.
 */
export interface ResultsClient {
  submitAttempt(payload: SubmitAttemptPayload): Promise<SubmitAttemptResult>;
}

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL as
  | string
  | undefined;

/**
 * Sends results to the Google Apps Script web app, which appends one row to
 * the "Results" tab and one row per question to the "AnswerDetails" tab,
 * related by attemptId.
 *
 * Uses `text/plain` as the request Content-Type deliberately: Apps Script
 * web apps don't handle CORS preflight (OPTIONS) requests, so the request
 * must qualify as a browser "simple request" to skip preflight entirely.
 * Code.gs parses the text body as JSON on the server side.
 */
export const googleAppsScriptClient: ResultsClient = {
  async submitAttempt(payload) {
    if (!APPS_SCRIPT_URL) {
      throw new Error(
        "VITE_APPS_SCRIPT_URL is not set. Add it to your .env file (see .env.example).",
      );
    }

    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { success: false };
    }

    const data = (await response.json()) as { success?: boolean };
    return { success: Boolean(data.success) };
  },
};

export const resultsClient: ResultsClient = googleAppsScriptClient;
