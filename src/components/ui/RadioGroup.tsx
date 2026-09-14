import type { QuestionOption } from "../../types/test";

interface RadioGroupProps {
  name: string;
  options: QuestionOption[];
  selectedOptionId?: string;
  onSelect: (optionId: string) => void;
}

export function RadioGroup({
  name,
  options,
  selectedOptionId,
  onSelect,
}: RadioGroupProps) {
  return (
    <div className="flex flex-col gap-3" role="radiogroup">
      {options.map((option) => {
        const isSelected = option.id === selectedOptionId;
        return (
          <label
            key={option.id}
            className={`flex cursor-pointer items-center gap-3 rounded-card border-2 px-5 py-4 text-lg transition-colors ${
              isSelected
                ? "border-orange-500 bg-orange-100"
                : "border-cream-dark bg-surface hover:border-orange-300"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.id}
              checked={isSelected}
              onChange={() => onSelect(option.id)}
              className="h-5 w-5 accent-orange-500"
            />
            <span>{option.text}</span>
          </label>
        );
      })}
    </div>
  );
}
