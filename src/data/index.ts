import type { AnyQuestion, SectionId } from "../types/test";
import { languageUseQuestions } from "./languageUse";
import { listeningQuestions } from "./listening";
import { readingPassages } from "./reading";

export { languageUseQuestions } from "./languageUse";
export { listeningQuestions } from "./listening";
export { readingPassages } from "./reading";

export const readingQuestions = readingPassages.flatMap((p) => p.questions);

/** Single place pages/scoring pull the active question bank from. */
export const questionsBySection: Record<SectionId, AnyQuestion[]> = {
  listening: listeningQuestions,
  reading: readingQuestions,
  languageUse: languageUseQuestions,
};
