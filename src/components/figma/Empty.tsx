"use client";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

// ─── Empty root ───────────────────────────────────────────────────

interface IEmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Empty = (props: IEmptyProps) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-300 p-300 text-center",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── EmptyHeader ──────────────────────────────────────────────────

interface IEmptyHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const EmptyHeader = (props: IEmptyHeaderProps) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={cn("flex flex-col items-center gap-200", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── EmptyMedia ───────────────────────────────────────────────────

type EmptyMediaVariantTypes = "default" | "icon";

const emptyMediaVariants = cva(
  "flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "",
        icon: [
          "size-14 rounded-large",
          "bg-muted text-muted-foreground",
          "border border-border",
        ].join(" "),
      },
    },
    defaultVariants: { variant: "default" },
  },
);

interface IEmptyMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: EmptyMediaVariantTypes;
  children?: React.ReactNode;
  className?: string;
}

export const EmptyMedia = (props: IEmptyMediaProps) => {
  const { variant = "default", children, className, ...rest } = props;

  return (
    <div
      className={cn(emptyMediaVariants({ variant }), className)}
      aria-hidden="true"
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── EmptyTitle ───────────────────────────────────────────────────

interface IEmptyTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  className?: string;
}

export const EmptyTitle = (props: IEmptyTitleProps) => {
  const { children, className, ...rest } = props;

  return (
    <h3
      className={cn(
        "font-lexend text-base font-semibold text-foreground",
        className,
      )}
      {...rest}
    >
      {children}
    </h3>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── EmptyDescription ─────────────────────────────────────────────

interface IEmptyDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
  className?: string;
}

export const EmptyDescription = (props: IEmptyDescriptionProps) => {
  const { children, className, ...rest } = props;

  return (
    <p
      className={cn(
        "max-w-xs text-sm leading-relaxed text-muted-foreground",
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── EmptyContent ─────────────────────────────────────────────────

interface IEmptyContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const EmptyContent = (props: IEmptyContentProps) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={cn("flex flex-wrap items-center justify-center gap-200", className)}
      {...rest}
    >
      {children}
    </div>
  );
};
