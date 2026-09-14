import { LEVEL_THRESHOLDS } from "../config/levelThresholds";
import { SECTION_WEIGHTS } from "../config/sectionWeights";
import type {
  AnswersMap,
  AnyQuestion,
  ScoringResult,
  SectionId,
  SectionResult,
} from "../types/test";

/**
 * Pure scoring functions — no UI, no I/O. Kept independent of React so the
 * scoring model can be unit-tested and adjusted without touching any page.
 *
 * None of this reproduces the official TECS scoring system; it is
 * Descomplilearning's own practice model (see src/config/*).
 */

export function scoreSection(
  section: SectionId,
  questions: AnyQuestion[],
  answers: AnswersMap,
): SectionResult {
  let rawScore = 0;
  let maxScore = 0;

  for (const question of questions) {
    maxScore += question.points;
    if (answers[question.id] === question.correctOptionId) {
      rawScore += question.points;
    }
  }

  const percentage = maxScore === 0 ? 0 : (rawScore / maxScore) * 100;

  return { section, rawScore, maxScore, percentage: round1(percentage) };
}

export function scoreOverall(
  sectionResults: Record<SectionId, SectionResult>,
): number {
  let weightedSum = 0;
  let weightTotal = 0;

  for (const [section, weight] of Object.entries(SECTION_WEIGHTS) as [
    SectionId,
    number,
  ][]) {
    const result = sectionResults[section];
    if (!result) continue;
    weightedSum += result.percentage * weight;
    weightTotal += weight;
  }

  return weightTotal === 0 ? 0 : round1(weightedSum / weightTotal);
}

/**
 * Looks up the estimated practice level for a given overall percentage
 * using the provisional, adjustable cutoffs in config/levelThresholds.ts.
 */
export function estimateLevel(overallPercentage: number): string {
  const sortedDescending = [...LEVEL_THRESHOLDS].sort(
    (a, b) => b.minPercentage - a.minPercentage,
  );
  const match = sortedDescending.find(
    (threshold) => overallPercentage >= threshold.minPercentage,
  );
  return match?.level ?? sortedDescending.at(-1)?.level ?? "A1";
}

export function scoreAttempt(
  questionsBySection: Record<SectionId, AnyQuestion[]>,
  answers: AnswersMap,
): ScoringResult {
  const sections = {} as Record<SectionId, SectionResult>;

  (Object.keys(questionsBySection) as SectionId[]).forEach((section) => {
    sections[section] = scoreSection(
      section,
      questionsBySection[section],
      answers,
    );
  });

  const overallPercentage = scoreOverall(sections);
  const estimatedLevel = estimateLevel(overallPercentage);

  return { sections, overallPercentage, estimatedLevel };
}

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}
