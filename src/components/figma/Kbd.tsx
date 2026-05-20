"use client";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

// ─── Kbd ──────────────────────────────────────────────────────────

type KbdSizeTypes = "sm" | "md";

interface IKbdProps extends React.HTMLAttributes<HTMLElement> {
  size?: KbdSizeTypes;
  children?: React.ReactNode;
  className?: string;
}

const kbdVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-small border border-border bg-muted",
    "font-lexend font-medium text-muted-foreground",
    "select-none",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-5 min-w-5 px-075 text-[11px]",
        md: "h-6 min-w-6 px-100 text-xs",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const Kbd = (props: IKbdProps) => {
  const { size = "md", children, className, ...rest } = props;

  return (
    <kbd data-slot="kbd" className={cn(kbdVariants({ size }), className)} {...rest}>
      {children}
    </kbd>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── KbdGroup ─────────────────────────────────────────────────────

interface IKbdGroupProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  className?: string;
}

export const KbdGroup = (props: IKbdGroupProps) => {
  const { children, className, ...rest } = props;

  return (
    <span
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-050", className)}
      {...rest}
    >
      {children}
    </span>
  );
};
