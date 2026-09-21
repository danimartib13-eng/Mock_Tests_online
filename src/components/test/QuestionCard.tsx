import type { AnyQuestion } from "../../types/test";
import { RadioGroup } from "../ui/RadioGroup";
import { AudioPlayer } from "./AudioPlayer";

interface QuestionCardProps {
  question: AnyQuestion;
  selectedOptionId?: string;
  onSelect: (optionId: string) => void;
}

export function QuestionCard({
  question,
  selectedOptionId,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="flex flex-col gap-5">
      {"audio" in question && (
        <AudioPlayer src={question.audio.src} maxPlays={question.audio.maxPlays} />
      )}
      <p className="text-question whitespace-pre-line text-ink">
        {question.text}
      </p>
      <RadioGroup
        name={question.id}
        options={question.options}
        selectedOptionId={selectedOptionId}
        onSelect={onSelect}
      />
    </div>
  );
}
