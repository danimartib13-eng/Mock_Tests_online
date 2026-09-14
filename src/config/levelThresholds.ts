export interface LevelThreshold {
  level: string;
  minPercentage: number;
}

/**
 * Provisional pedagogical thresholds for v1 of the Descomplilearning TECS
 * practice simulation.
 *
 * These are NOT official TECS thresholds and NOT official CEFR cutoffs —
 * they are a starting point chosen for tutoring purposes and are expected
 * to be tuned over time. This is the single place that defines them;
 * src/lib/scoring.ts always reads from here, nothing else hardcodes a cutoff.
 *
 * Order does not matter for correctness (estimateLevel sorts internally),
 * but keeping it highest-to-lowest makes this file easier to read.
 */
export const LEVEL_THRESHOLDS: LevelThreshold[] = [
  { level: "C1", minPercentage: 90 },
  { level: "B2", minPercentage: 75 },
  { level: "B1", minPercentage: 60 },
  { level: "A2", minPercentage: 40 },
  { level: "A1", minPercentage: 0 },
];
