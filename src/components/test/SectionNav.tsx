import { SECTION_LABELS, type SectionId } from "../../types/test";
import { Button } from "../ui/Button";
import { ProgressBar } from "../ui/ProgressBar";

interface SectionNavProps {
  section: SectionId;
  /** 0-based index of the current question within the section. */
  questionIndex: number;
  totalQuestions: number;
  onBack?: () => void;
  onNext: () => void;
  nextDisabled?: boolean;
  nextLabel?: string;
}

export function SectionNav({
  section,
  questionIndex,
  totalQuestions,
  onBack,
  onNext,
  nextDisabled,
  nextLabel = "Next",
}: SectionNavProps) {
  const currentNumber = questionIndex + 1;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-nav text-orange-600">
          {SECTION_LABELS[section]}
        </span>
        <span className="text-nav text-ink-soft">
          Question {currentNumber} of {totalQuestions}
        </span>
      </div>
      <ProgressBar percentage={(currentNumber / totalQuestions) * 100} />
      <div className="flex justify-between">
        {onBack ? (
          <Button variant="ghost" onClick={onBack}>
            Back
          </Button>
        ) : (
          <span />
        )}
        <Button variant="primary" onClick={onNext} disabled={nextDisabled}>
          {nextLabel}
        </Button>
      </div>
    </div>
  );
}
