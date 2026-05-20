"use client";

import { type HTMLAttributes } from "react";

import { Loading03 } from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";

// ─── Spinner ──────────────────────────────────────────────────────

interface ISpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

export const Spinner = (props: ISpinnerProps) => {
  const { className, ...rest } = props;

  return (
    <span
      role="status"
      aria-label="Loading"
      className="inline-flex items-center justify-center"
      {...rest}
    >
      <Loading03 className={cn("size-4 animate-spin text-muted-foreground", className)} />
    </span>
  );
};
