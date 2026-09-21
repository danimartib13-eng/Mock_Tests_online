import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-orange-500 text-white hover:bg-orange-600 disabled:bg-orange-300",
  secondary:
    "bg-blue-100 text-blue-600 hover:bg-blue-300 disabled:opacity-50",
  ghost:
    "bg-transparent text-ink-soft hover:bg-cream-dark disabled:opacity-50",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`text-button rounded-full px-8 py-4 transition-colors disabled:cursor-not-allowed ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    />
  );
}
