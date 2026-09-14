import { ESTIMATED_LEVEL_DISCLAIMER } from "../../config/disclaimers";

interface LevelBadgeProps {
  level: string;
}

export function LevelBadge({ level }: LevelBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
        Estimated Practice Level
      </span>
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-600">
        {level}
      </span>
      <p className="max-w-xs text-xs text-ink-soft">
        {ESTIMATED_LEVEL_DISCLAIMER}
      </p>
    </div>
  );
}
