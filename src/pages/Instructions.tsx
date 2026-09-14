import { useNavigate } from "react-router-dom";
import { PageShell } from "../components/layout/PageShell";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SCORING_MODEL_DISCLAIMER, SPEAKING_NOTE } from "../config/disclaimers";
import { useTest } from "../context/TestContext";

export function Instructions() {
  const { goToStep, studentInfo } = useTest();
  const navigate = useNavigate();

  function handleBegin() {
    goToStep("listening");
    navigate("/listening");
  }

  return (
    <PageShell>
      <Card>
        <h1 className="text-2xl font-bold text-ink">
          {studentInfo ? `Hi ${studentInfo.name}, here's what to expect` : "Instructions"}
        </h1>
        <ol className="mt-4 flex flex-col gap-3 text-ink-soft">
          <li>1. Listening — short audio clips with multiple-choice questions.</li>
          <li>2. Reading — short passages with multiple-choice questions.</li>
          <li>3. Language Use — grammar and vocabulary in context.</li>
        </ol>
        <p className="mt-4 text-sm text-ink-soft">{SPEAKING_NOTE}</p>
        <p className="mt-1 text-sm text-ink-soft">{SCORING_MODEL_DISCLAIMER}</p>
        <Button className="mt-6" onClick={handleBegin}>
          Begin Listening
        </Button>
      </Card>
    </PageShell>
  );
}
