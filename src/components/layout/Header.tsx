import { PRACTICE_SIMULATION_DISCLAIMER } from "../../config/disclaimers";

export function Header() {
  return (
    <header className="border-b border-cream-dark bg-surface">
      <div className="mx-auto flex max-w-3xl flex-col gap-1 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-orange-600">
            Descomplilearning
          </span>
          <span className="rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-600">
            TECS Practice Mock Test
          </span>
        </div>
        <p className="text-xs text-ink-soft">{PRACTICE_SIMULATION_DISCLAIMER}</p>
      </div>
    </header>
  );
}
