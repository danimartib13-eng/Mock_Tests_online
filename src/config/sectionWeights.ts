import type { SectionId } from "../types/test";

/**
 * Weighting of each section in the overall practice score.
 *
 * This is Descomplilearning's own practice scoring model (currently equal
 * weighting) — it is NOT the official TECS weighting. Adjust freely here;
 * src/lib/scoring.ts always reads from this file. Values are expected to
 * sum to 1.
 */
export const SECTION_WEIGHTS: Record<SectionId, number> = {
  listening: 1 / 3,
  reading: 1 / 3,
  languageUse: 1 / 3,
};
