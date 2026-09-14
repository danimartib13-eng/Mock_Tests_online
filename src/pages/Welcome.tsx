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
        <h1 className="text-3xl font-bold text-ink">TECS Practice Mock Test</h1>
        <p className="mt-3 text-ink-soft">{PRACTICE_SIMULATION_DISCLAIMER}</p>
        <p className="mt-1 text-ink-soft">{SPEAKING_NOTE}</p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-ink">Your name</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="rounded-card border-2 border-cream-dark px-4 py-3 text-lg outline-none focus:border-orange-500"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-ink">Your email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="rounded-card border-2 border-cream-dark px-4 py-3 text-lg outline-none focus:border-orange-500"
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
