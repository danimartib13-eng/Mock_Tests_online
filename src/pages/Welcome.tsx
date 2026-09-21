import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { PageShell } from "../components/layout/PageShell";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { PRACTICE_SIMULATION_DISCLAIMER, SPEAKING_NOTE } from "../config/disclaimers";
import { useTest } from "../context/TestContext";

export function Welcome() {
  const { startAttempt } = useTest();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim() || !email.trim()) return;
    startAttempt({ name: name.trim(), email: email.trim() });
    navigate("/instructions");
  }

  return (
    <PageShell>
      <Card>
        <h1 className="text-page-title text-ink">TECS Practice Mock Test</h1>
        <p className="text-instructions mt-4 text-ink-soft">
          {PRACTICE_SIMULATION_DISCLAIMER}
        </p>
        <p className="text-instructions mt-1 text-ink-soft">{SPEAKING_NOTE}</p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <label className="flex flex-col gap-2">
            <span className="text-base font-medium text-ink">Your name</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="rounded-card border-2 border-cream-dark px-5 py-4 text-xl outline-none focus:border-orange-500"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-base font-medium text-ink">Your email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="rounded-card border-2 border-cream-dark px-5 py-4 text-xl outline-none focus:border-orange-500"
            />
          </label>
          <Button type="submit" className="mt-2 self-start">
            Start
          </Button>
        </form>
      </Card>
    </PageShell>
  );
}
