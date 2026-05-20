"use client";

import { cn } from "@/lib/utils";

// ─── Input ────────────────────────────────────────────────────────

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = (props: IInputProps) => {
  const { type = "text", className, ...rest } = props;

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-9 w-full min-w-0 rounded-medium border border-border bg-background",
        "px-150 py-050",
        "font-lexend text-sm text-foreground placeholder:text-placeholder",
        "transition-colors duration-150 outline-none",
        "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
        "disabled:cursor-not-allowed disabled:bg-disabled-surface disabled:text-disabled disabled:border-disabled-border",
        "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        className,
      )}
      {...rest}
    />
  );
};
