import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useTest } from "../../context/TestContext";
import type { AnyQuestion, AppStep, SectionId } from "../../types/test";
import { PageShell } from "../layout/PageShell";
import { Card } from "../ui/Card";
import { QuestionCard } from "./QuestionCard";
import { SectionNav } from "./SectionNav";

interface SectionRunnerProps {
  section: SectionId;
  questions: AnyQuestion[];
  /** Route to navigate to once the last question's Next is pressed. */
  nextRoute: string;
  /** App step to record once the last question's Next is pressed. */
  nextStep: AppStep;
  /** Optional content shown above the question (e.g. a reading passage). */
  renderAboveQuestion?: (question: AnyQuestion) => ReactNode;
}

/**
 * Shared runner for the three objective sections: walks through `questions`
 * one at a time, persisting answers via TestContext, and hands off to the
 * next section/results when the last question is completed.
 */
export function SectionRunner({
  section,
  questions,
  nextRoute,
  nextStep,
  renderAboveQuestion,
}: SectionRunnerProps) {
  const { answers, answerQuestion, goToStep } = useTest();
  const navigate = useNavigate();
  // Resume at the first unanswered question (e.g. after a refresh restores
  // a partially-completed section) rather than always starting at 0.
  const [index, setIndex] = useState(() => {
    const firstUnanswered = questions.findIndex((q) => !(q.id in answers));
    if (firstUnanswered === -1) return Math.max(0, questions.length - 1);
    return firstUnanswered;
  });

  const question = questions[index];
  const selectedOptionId = answers[question.id];
  const isLast = index === questions.length - 1;

  function handleNext() {
    if (isLast) {
      goToStep(nextStep);
      navigate(nextRoute);
    } else {
      setIndex((i) => i + 1);
    }
  }

  function handleBack() {
    setIndex((i) => Math.max(0, i - 1));
  }

  return (
    <PageShell>
      <Card>
        <SectionNav
          section={section}
          questionIndex={index}
          totalQuestions={questions.length}
          onBack={index > 0 ? handleBack : undefined}
          onNext={handleNext}
          nextDisabled={!selectedOptionId}
          nextLabel={isLast ? "Continue" : "Next"}
        />
        {renderAboveQuestion && (
          <div className="mt-6">{renderAboveQuestion(question)}</div>
        )}
        <div className="mt-6">
          <QuestionCard
            key={question.id}
            question={question}
            selectedOptionId={selectedOptionId}
            onSelect={(optionId) => answerQuestion(question.id, optionId)}
          />
        </div>
      </Card>
    </PageShell>
  );
}
