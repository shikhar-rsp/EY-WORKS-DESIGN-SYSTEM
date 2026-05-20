"use client";

import { createContext, useContext, type HTMLAttributes, type ReactNode } from "react";

import { CheckmarkCircle01 } from "@/components/fragments/icons/catalog";
import { CancelCircle } from "@/components/fragments/icons/catalog";
import { InformationCircle } from "@/components/fragments/icons/catalog";
import { AlertCircle } from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────

type ResultStatusTypes = "success" | "error" | "info" | "warning" | "404" | "500" | "403";

// ─── Context ──────────────────────────────────────────────────────

interface IResultContext {
  status: ResultStatusTypes;
}

const ResultContext = createContext<IResultContext | null>(null);

const useResultContext = () => {
  const ctx = useContext(ResultContext);
  if (!ctx) throw new Error("Result sub-components must be used inside <Result>");
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── Result (root) ───────────────────────────────────────────────

interface IResultProps extends HTMLAttributes<HTMLDivElement> {
  status?: ResultStatusTypes;
  children?: ReactNode;
  className?: string;
}

export const Result = (props: IResultProps) => {
  const { status = "info", children, className, ...rest } = props;
  return (
    <ResultContext.Provider value={{ status }}>
      <div
        data-slot="result"
        data-status={status}
        className={cn(
          "flex flex-col items-center justify-center gap-300 p-300 text-center",
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    </ResultContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ResultIcon ──────────────────────────────────────────────────

const STATUS_ICON: Record<ResultStatusTypes, ReactNode> = {
  success: <CheckmarkCircle01 className="size-16 text-success" />,
  error: <CancelCircle className="size-16 text-destructive" />,
  info: <InformationCircle className="size-16 text-info" />,
  warning: <AlertCircle className="size-16 text-warning-bold" />,
  "404": (
    <span className="font-lexend text-5xl font-bold tracking-tighter text-muted-foreground">
      404
    </span>
  ),
  "500": (
    <span className="font-lexend text-5xl font-bold tracking-tighter text-destructive">
      500
    </span>
  ),
  "403": (
    <span className="font-lexend text-5xl font-bold tracking-tighter text-warning-bold">
      403
    </span>
  ),
};

const STATUS_BG: Record<ResultStatusTypes, string> = {
  success: "bg-success/10 border-success/20",
  error: "bg-destructive/10 border-destructive/20",
  info: "bg-info/10 border-info/20",
  warning: "bg-warning-bold/10 border-warning-bold/20",
  "404": "bg-muted border-border",
  "500": "bg-destructive/10 border-destructive/20",
  "403": "bg-warning-bold/10 border-warning-bold/20",
};

interface IResultIconProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const ResultIcon = (props: IResultIconProps) => {
  const { children, className, ...rest } = props;
  const { status } = useResultContext();

  return (
    <div
      data-slot="result-icon"
      className={cn(
        "flex items-center justify-center size-24 rounded-full border",
        STATUS_BG[status],
        className,
      )}
      aria-hidden="true"
      {...rest}
    >
      {children ?? STATUS_ICON[status]}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ResultTitle ─────────────────────────────────────────────────

interface IResultTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  className?: string;
}

export const ResultTitle = (props: IResultTitleProps) => {
  const { children, className, ...rest } = props;
  return (
    <h3
      data-slot="result-title"
      className={cn(
        "font-lexend text-xl font-semibold text-foreground",
        className,
      )}
      {...rest}
    >
      {children}
    </h3>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ResultDescription ───────────────────────────────────────────

interface IResultDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
}

export const ResultDescription = (props: IResultDescriptionProps) => {
  const { children, className, ...rest } = props;
  return (
    <p
      data-slot="result-description"
      className={cn("max-w-sm text-sm leading-relaxed text-muted-foreground", className)}
      {...rest}
    >
      {children}
    </p>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ResultContent ───────────────────────────────────────────────

interface IResultContentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const ResultContent = (props: IResultContentProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      data-slot="result-content"
      className={cn(
        "w-full max-w-sm rounded-large border border-border bg-muted p-200 text-left text-sm text-muted-foreground",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ResultActions ───────────────────────────────────────────────

interface IResultActionsProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const ResultActions = (props: IResultActionsProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      data-slot="result-actions"
      className={cn("flex flex-wrap items-center justify-center gap-200", className)}
      {...rest}
    >
      {children}
    </div>
  );
};
