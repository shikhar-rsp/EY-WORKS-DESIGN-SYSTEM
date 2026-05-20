"use client";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

// ─── Card root ────────────────────────────────────────────────────

type CardSizeTypes = "default" | "sm";

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: CardSizeTypes;
  className?: string;
  children?: React.ReactNode;
}

const cardVariants = cva(
  [
    "rounded-large border border-border bg-background text-foreground",
    "shadow-sm",
  ].join(" "),
  {
    variants: {
      size: {
        default: "",
        sm: "text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export const Card = (props: ICardProps) => {
  const { size = "default", className, children, ...rest } = props;
  return (
    <div data-slot="card" className={cn(cardVariants({ size }), className)} {...rest}>
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── CardHeader ───────────────────────────────────────────────────

interface ICardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export const CardHeader = (props: ICardHeaderProps) => {
  const { className, children, ...rest } = props;
  return (
    <div
      data-slot="card-header"
      className={cn(
        "flex flex-col gap-075 px-300 pt-300 pb-0",
        "[&:has([data-slot=card-action])]:grid [&:has([data-slot=card-action])]:grid-cols-[1fr_auto]",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── CardTitle ────────────────────────────────────────────────────

interface ICardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children?: React.ReactNode;
}

export const CardTitle = (props: ICardTitleProps) => {
  const { className, children, ...rest } = props;
  return (
    <h3
      data-slot="card-title"
      className={cn(
        "font-lexend text-base font-semibold leading-tight tracking-tight text-foreground",
        className,
      )}
      {...rest}
    >
      {children}
    </h3>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── CardDescription ──────────────────────────────────────────────

interface ICardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  children?: React.ReactNode;
}

export const CardDescription = (props: ICardDescriptionProps) => {
  const { className, children, ...rest } = props;
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm leading-relaxed text-muted-foreground", className)}
      {...rest}
    >
      {children}
    </p>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── CardAction ───────────────────────────────────────────────────

interface ICardActionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export const CardAction = (props: ICardActionProps) => {
  const { className, children, ...rest } = props;
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 self-start justify-self-end",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── CardContent ──────────────────────────────────────────────────

interface ICardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export const CardContent = (props: ICardContentProps) => {
  const { className, children, ...rest } = props;
  return (
    <div data-slot="card-content" className={cn("px-300 py-300", className)} {...rest}>
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── CardFooter ───────────────────────────────────────────────────

interface ICardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export const CardFooter = (props: ICardFooterProps) => {
  const { className, children, ...rest } = props;
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center gap-200 px-300 pb-300 pt-0", className)}
      {...rest}
    >
      {children}
    </div>
  );
};
