"use client";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

// ─── Progress ─────────────────────────────────────────────────────

type ProgressSizeTypes = "sm" | "md" | "lg";

interface IProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0 to `max`. Omit for indeterminate state. */
  value?: number;
  /** Upper bound (default 100). */
  max?: number;
  /** Accessible label (project extension). */
  label?: string;
  /** Track height (project extension — shadcn uses className for sizing). */
  size?: ProgressSizeTypes;
  className?: string;
}

const progressVariants = cva(
  [
    "relative w-full overflow-hidden rounded-full bg-muted",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const Progress = (props: IProgressProps) => {
  const { value, max = 100, label, size = "md", className, ...rest } = props;

  const isIndeterminate = value === undefined || value === null;
  const clamped = isIndeterminate ? 0 : Math.min(max, Math.max(0, value));
  const pct = isIndeterminate ? 0 : (clamped / max) * 100;

  const dataState = isIndeterminate
    ? "indeterminate"
    : pct >= 100
      ? "complete"
      : "loading";

  return (
    <div
      role="progressbar"
      data-slot="progress"
      data-state={dataState}
      data-value={isIndeterminate ? undefined : clamped}
      data-max={max}
      aria-valuenow={isIndeterminate ? undefined : clamped}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label ?? "Progress"}
      className={cn(progressVariants({ size }), className)}
      {...rest}
    >
      <div
        data-slot="progress-indicator"
        className={cn(
          "h-full w-full flex-1 rounded-full bg-primary",
          "transition-transform duration-300 ease-in-out",
          isIndeterminate && "animate-pulse",
        )}
        style={{ transform: `translateX(-${100 - pct}%)` }}
      />
    </div>
  );
};
