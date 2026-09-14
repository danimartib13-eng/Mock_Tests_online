// Core domain types for the TECS practice mock test.
// This is a practice simulation only — not the official TECS exam.

export type SectionId = "listening" | "reading" | "languageUse";

export const SECTION_IDS: SectionId[] = ["listening", "reading", "languageUse"];

export const SECTION_LABELS: Record<SectionId, string> = {
  listening: "Listening",
  reading: "Reading",
  languageUse: "Language Use",
};

export type AppStep = "welcome" | "instructions" | SectionId | "results";

export function isSectionId(value: string): value is SectionId {
  return (SECTION_IDS as string[]).includes(value);
}

export interface QuestionOption {
  id: string; // e.g. "A"
  text: string;
}

/**
 * Internal, provisional difficulty tag — never shown to the student.
 * Mirrors the three-tier target distribution agreed for the practice
 * simulation (A2 foundational / B1 majority / B1-B2 more challenging).
 */
export type Difficulty = "A2" | "B1" | "B1/B2";

/**
 * Skill/subskill tag used for pedagogical analysis (e.g. which skills a
 * student should keep practicing). Not shown to the student during the
 * test.
 */
export type Skill =
  | "General understanding"
  | "Specific information"
  | "Main idea"
  | "Inference (speaker intention)"
  | "Inference (likely next action)"
  | "Inference"
  | "Vocabulary in context"
  | "Grammar in context"
  | "Connectors"
  | "Sentence completion"
  | "Meaning / speaker intention";

export interface BaseQuestion {
  id: string; // e.g. "L01", "R03", "LU02"
  section: SectionId;
  questionNumber: number; // display order within its section
  difficulty: Difficulty;
  skill: Skill;
  text: string;
  options: QuestionOption[];
  correctOptionId: string;
  points: number;
  /**
   * Why the correct answer is correct. Not shown to the student during the
   * test — kept for tutor review and future feedback features.
   */
  explanation: string;
}

export interface ListeningQuestion extends BaseQuestion {
  section: "listening";
  audio: {
    src: string; // path under /audio, e.g. "/audio/l01.mp3"
    maxPlays: number;
  };
}

export interface ReadingPassage {
  id: string;
  title: string;
  text: string;
  questions: BaseQuestion[]; // each question.section === "reading"
}

export type LanguageUseQuestion = BaseQuestion; // section === "languageUse"

export type AnyQuestion = ListeningQuestion | BaseQuestion;

export interface StudentInfo {
  name: string;
  email: string;
}

/** Maps questionId -> selected option id */
export type AnswersMap = Record<string, string>;

export interface SectionResult {
  section: SectionId;
  rawScore: number;
  maxScore: number;
  percentage: number;
}

export interface ScoringResult {
  sections: Record<SectionId, SectionResult>;
  overallPercentage: number;
  estimatedLevel: string;
}

export interface AnswerDetailRecord {
  attemptId: string;
  studentName: string;
  date: string; // ISO date
  mockTestVersion: string;
  section: SectionId;
  questionId: string;
  questionNumber: number;
  questionText: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  pointsEarned: number;
  maxPoints: number;
}

export interface ResultsSummaryRecord {
  attemptId: string;
  studentName: string;
  studentEmail: string;
  date: string; // ISO date
  mockTestVersion: string;
  listeningScore: number; // percentage
  readingScore: number; // percentage
  languageUseScore: number; // percentage
  overallScore: number; // percentage
  estimatedPracticeLevel: string;
  completionTimeMinutes: number;
  tutorNotes: string; // left blank on submit, filled in by tutor in the Sheet
}
