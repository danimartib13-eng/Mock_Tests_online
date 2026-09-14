import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";
import {
  clearAttemptState,
  loadAttemptState,
  saveAttemptState,
} from "../lib/persistence";
import type { AnswersMap, AppStep, SectionId, StudentInfo } from "../types/test";

interface TestState {
  attemptId: string | null;
  studentInfo: StudentInfo | null;
  currentStep: AppStep;
  answers: AnswersMap;
  sectionStartedAt: Partial<Record<SectionId, string>>;
  startedAt: string | null;
}

type TestAction =
  | { type: "START_ATTEMPT"; attemptId: string; studentInfo: StudentInfo }
  | { type: "GO_TO_STEP"; step: AppStep }
  | { type: "ANSWER_QUESTION"; questionId: string; optionId: string }
  | { type: "RESET" };

const initialState: TestState = {
  attemptId: null,
  studentInfo: null,
  currentStep: "welcome",
  answers: {},
  sectionStartedAt: {},
  startedAt: null,
};

/**
 * Reads sessionStorage synchronously so a restored attempt is already
 * present on TestProvider's very first render — not one render later via an
 * effect. This matters because pages (e.g. SectionRunner) derive their
 * initial question index from `answers` on mount; if the restore happened
 * asynchronously, that first mount would see an empty answers map and reset
 * progress to question 1 regardless of how far the student had gotten.
 */
function init(): TestState {
  const persisted = loadAttemptState();
  if (!persisted) return initialState;
  return {
    attemptId: persisted.attemptId,
    studentInfo: persisted.studentInfo,
    currentStep: persisted.currentStep,
    answers: persisted.answers,
    sectionStartedAt: persisted.sectionStartedAt,
    startedAt: persisted.startedAt,
  };
}

function reducer(state: TestState, action: TestAction): TestState {
  switch (action.type) {
    case "START_ATTEMPT":
      return {
        ...initialState,
        attemptId: action.attemptId,
        studentInfo: action.studentInfo,
        currentStep: "instructions",
        startedAt: new Date().toISOString(),
      };

    case "GO_TO_STEP": {
      const alreadyStarted = state.sectionStartedAt[action.step as SectionId];
      const sectionStartedAt = alreadyStarted
        ? state.sectionStartedAt
        : {
            ...state.sectionStartedAt,
            [action.step as SectionId]: new Date().toISOString(),
          };
      return { ...state, currentStep: action.step, sectionStartedAt };
    }

    case "ANSWER_QUESTION":
      return {
        ...state,
        answers: { ...state.answers, [action.questionId]: action.optionId },
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

interface TestContextValue extends TestState {
  startAttempt: (studentInfo: StudentInfo) => void;
  goToStep: (step: AppStep) => void;
  answerQuestion: (questionId: string, optionId: string) => void;
  resetAttempt: () => void;
}

const TestContext = createContext<TestContextValue | undefined>(undefined);

export function TestProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, init);

  // Keep sessionStorage in sync once an attempt is underway.
  useEffect(() => {
    if (!state.attemptId || !state.studentInfo) return;
    saveAttemptState({
      attemptId: state.attemptId,
      studentInfo: state.studentInfo,
      currentStep: state.currentStep,
      answers: state.answers,
      sectionStartedAt: state.sectionStartedAt,
      startedAt: state.startedAt ?? new Date().toISOString(),
    });
  }, [state]);

  const value: TestContextValue = {
    ...state,
    startAttempt: (studentInfo) =>
      dispatch({
        type: "START_ATTEMPT",
        attemptId: crypto.randomUUID(),
        studentInfo,
      }),
    goToStep: (step) => dispatch({ type: "GO_TO_STEP", step }),
    answerQuestion: (questionId, optionId) =>
      dispatch({ type: "ANSWER_QUESTION", questionId, optionId }),
    resetAttempt: () => {
      clearAttemptState();
      dispatch({ type: "RESET" });
    },
  };

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
}

export function useTest(): TestContextValue {
  const ctx = useContext(TestContext);
  if (!ctx) {
    throw new Error("useTest must be used within a TestProvider");
  }
  return ctx;
}
