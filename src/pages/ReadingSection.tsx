import { SectionRunner } from "../components/test/SectionRunner";
import { readingPassages, readingQuestions } from "../data";

export function ReadingSection() {
  return (
    <SectionRunner
      section="reading"
      questions={readingQuestions}
      nextRoute="/language-use"
      nextStep="languageUse"
      renderAboveQuestion={(question) => {
        const passage = readingPassages.find((p) =>
          p.questions.some((q) => q.id === question.id),
        );
        if (!passage) return null;
        return (
          <div className="rounded-card bg-cream-dark/50 p-4 text-ink-soft">
            <h2 className="mb-2 font-semibold text-ink">{passage.title}</h2>
            <div className="max-h-72 overflow-y-auto whitespace-pre-line pr-1">
              {passage.text}
            </div>
          </div>
        );
      }}
    />
  );
}
