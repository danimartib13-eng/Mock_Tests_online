import { SectionRunner } from "../components/test/SectionRunner";
import { listeningQuestions } from "../data";

export function ListeningSection() {
  return (
    <SectionRunner
      section="listening"
      questions={listeningQuestions}
      nextRoute="/reading"
      nextStep="reading"
    />
  );
}
