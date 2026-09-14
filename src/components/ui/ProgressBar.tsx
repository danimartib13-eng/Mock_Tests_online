interface ProgressBarProps {
  /** 0-100 */
  percentage: number;
  label?: string;
}

export function ProgressBar({ percentage, label }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, percentage));

  return (
    <div className="w-full">
      {label && <p className="mb-1 text-sm text-ink-soft">{label}</p>}
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-orange-100"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-orange-500 transition-all"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
