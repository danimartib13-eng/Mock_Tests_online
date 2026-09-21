import type { HTMLAttributes } from "react";

export function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-card bg-surface p-6 shadow-sm sm:p-8 lg:p-10 ${className}`}
      {...props}
    />
  );
}
