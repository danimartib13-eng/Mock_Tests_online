import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageShell } from "../components/layout/PageShell";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { LevelBadge } from "../components/ui/LevelBadge";
import { ProgressBar } from "../components/ui/ProgressBar";
import {
  ESTIMATED_LEVEL_DISCLAIMER,
  SCORING_MODEL_DISCLAIMER,
} from "../config/disclaimers";
import { MOCK_TEST_VERSION } from "../config/testVersion";
import { useTest } from "../context/TestContext";
import { questionsBySection } from "../data";
import { buildAnswerDetails } from "../lib/buildAnswerDetails";
import { resultsClient } from "../lib/resultsClient";
import { scoreAttempt } from "../lib/scoring";
import { SECTION_LABELS, type SectionId, type SectionResult } from "../types/test";

const ENCOURAGEMENT_BY_SECTION: Record<SectionId, string> = {
  listening:
    "Keep practicing with short audio clips and focus on catching key details.",
  reading:
    "Keep practicing by reading short texts and identifying the main idea.",
  languageUse:
    "Keep practicing grammar and connectors in meaningful context.",
};

type SubmissionStatus = "idle" | "sending" | "sent" | "error";

export function Results() {
  const { attemptId, studentInfo, answers, startedAt, resetAttempt } = useTest();
  const navigate = useNavigate();
  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const scoring = useMemo(
    () => scoreAttempt(questionsBySection, answers),
    [answers],
  );

  useEffect(() => {
    if (!attemptId || !studentInfo) {
      navigate("/");
    }
  }, [attemptId, studentInfo, navigate]);

  useEffect(() => {
    if (!attemptId || !studentInfo || status !== "idle") return;

    const date = new Date().toISOString();
    const completionTimeMinutes = startedAt
      ? Math.max(
          0,
          Math.round((Date.now() - new Date(startedAt).getTime()) / 60000),
        )
      : 0;

    const summary = {
      attemptId,
      studentName: studentInfo.name,
      studentEmail: studentInfo.email,
      date,
      mockTestVersion: MOCK_TEST_VERSION,
      listeningScore: scoring.sections.listening?.percentage ?? 0,
      readingScore: scoring.sections.reading?.percentage ?? 0,
      languageUseScore: scoring.sections.languageUse?.percentage ?? 0,
      overallScore: scoring.overallPercentage,
      estimatedPracticeLevel: scoring.estimatedLevel,
      completionTimeMinutes,
      tutorNotes: "",
    };

    const answerDetails = buildAnswerDetails({
      attemptId,
      studentName: studentInfo.name,
      date,
      mockTestVersion: MOCK_TEST_VERSION,
      questionsBySection,
      answers,
    });

    setStatus("sending");
    resultsClient
      .submitAttempt({ summary, answers: answerDetails })
      .then((result) => setStatus(result.success ? "sent" : "error"))
      .catch(() => setStatus("error"));
    // Submit exactly once per attempt, not on every scoring recompute.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attemptId, studentInfo]);

  if (!attemptId || !studentInfo) return null;

  const sectionEntries = Object.entries(scoring.sections) as [
    SectionId,
    SectionResult,
  ][];
  const weakestEntry = sectionEntries.sort(
    (a, b) => a[1].percentage - b[1].percentage,
  )[0];
  const weakestSection = weakestEntry?.[0];
  // A high score everywhere shouldn't be met with a "keep practicing X" tip
  // aimed at whichever section happened to be lowest.
  const hasClearWeakSpot = (weakestEntry?.[1].percentage ?? 100) < 90;

  return (
    <PageShell>
      <Card className="flex flex-col items-center gap-6 text-center">
        <div>
          <h1 className="text-3xl font-bold text-ink">
            Great work, {studentInfo.name}!
          </h1>
          <p className="mt-2 text-ink-soft">
            You've completed the Listening, Reading, and Language Use
            sections of this practice simulation.
          </p>
        </div>

        <LevelBadge level={scoring.estimatedLevel} />

        <div className="w-full max-w-sm">
          <p className="mb-1 text-sm font-semibold text-ink">
            Overall score: {scoring.overallPercentage}%
          </p>
          <ProgressBar percentage={scoring.overallPercentage} />
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {(Object.keys(SECTION_LABELS) as SectionId[]).map((section) => (
            <div key={section} className="rounded-card bg-cream-dark/50 p-4">
              <p className="text-sm font-medium text-ink">
                {SECTION_LABELS[section]}
              </p>
              <p className="text-2xl font-bold text-orange-600">
                {scoring.sections[section]?.percentage ?? 0}%
              </p>
            </div>
          ))}
        </div>

        <p className="max-w-md text-sm text-blue-600">
          {weakestSection && hasClearWeakSpot
            ? ENCOURAGEMENT_BY_SECTION[weakestSection]
            : "Excellent work across every section — keep up this level of practice!"}
        </p>

        <div className="max-w-md text-xs text-ink-soft">
          <p>{ESTIMATED_LEVEL_DISCLAIMER}</p>
          <p className="mt-1">{SCORING_MODEL_DISCLAIMER}</p>
        </div>

        <p className="text-xs text-ink-soft" role="status">
          {status === "sending" && "Sending your results to your tutor…"}
          {status === "sent" && "Your results have been sent to your tutor."}
          {status === "error" &&
            "We couldn't send your results automatically. Please let your tutor know."}
        </p>

        <Button
          variant="ghost"
          onClick={() => {
            resetAttempt();
            navigate("/");
          }}
        >
          Start a new attempt
        </Button>
      </Card>
    </PageShell>
  );
}
