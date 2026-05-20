"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

// ─── Alert root ───────────────────────────────────────────────────

const alertVariants = cva(
  [
    "relative w-full rounded-large border p-200",
    "[&>svg~*]:pl-7",
    "[&>svg+div]:translate-y-[-3px]",
    "[&>svg]:absolute [&>svg]:left-200 [&>svg]:top-200",
    "[&>svg]:text-foreground",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-border",
        destructive: [
          "border-destructive/50 text-destructive",
          "[&>svg]:text-destructive",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface IAlertProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  children?: ReactNode;
  className?: string;
}

export const Alert = (props: IAlertProps) => {
  const { variant, className, children, ...rest } = props;
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── AlertTitle ───────────────────────────────────────────────────

interface IAlertTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  className?: string;
}

export const AlertTitle = (props: IAlertTitleProps) => {
  const { children, className, ...rest } = props;
  return (
    <h5
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...rest}
    >
      {children}
    </h5>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── AlertDescription ─────────────────────────────────────────────

interface IAlertDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
}

export const AlertDescription = (props: IAlertDescriptionProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      {...rest}
    >
      {children}
    </div>
  );
};
