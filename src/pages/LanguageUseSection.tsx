import { SectionRunner } from "../components/test/SectionRunner";
import { languageUseQuestions } from "../data";

export function LanguageUseSection() {
  return (
    <SectionRunner
      section="languageUse"
      questions={languageUseQuestions}
      nextRoute="/results"
      nextStep="results"
    />
  );
}
