import type { AnswersMap, AppStep, SectionId, StudentInfo } from "../types/test";

/**
 * Minimal browser persistence for the in-progress attempt, so an accidental
 * refresh or navigation doesn't lose the student's progress.
 *
 * Deliberately uses sessionStorage (not localStorage): it survives a
 * refresh within the same tab, but clears when the tab/browser closes, so a
 * shared computer doesn't accumulate stale half-finished attempts.
 */

const STORAGE_KEY = "descomplilearning-tecs-mock-attempt";

export interface PersistedAttemptState {
  attemptId: string;
  studentInfo: StudentInfo;
  currentStep: AppStep;
  answers: AnswersMap;
  sectionStartedAt: Partial<Record<SectionId, string>>;
  startedAt: string;
}

export function saveAttemptState(state: PersistedAttemptState): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // sessionStorage unavailable — fail silently, in-memory state still works for this session
  }
}

export function loadAttemptState(): PersistedAttemptState | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as PersistedAttemptState) : null;
  } catch {
    return null;
  }
}

export function clearAttemptState(): void {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
