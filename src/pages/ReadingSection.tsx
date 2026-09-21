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
          <div className="rounded-card bg-cream-dark/50 p-5 text-ink-soft sm:p-6">
            <h2 className="text-section-title mb-3 text-ink">
              {passage.title}
            </h2>
            <div className="text-passage whitespace-pre-line">
              {passage.text}
            </div>
          </div>
        );
      }}
    />
  );
}
