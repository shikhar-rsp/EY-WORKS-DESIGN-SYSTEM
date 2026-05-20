"use client";

import { createContext, useContext, useId, useState } from "react";

import { cn } from "@/lib/utils";

// ─── Context ──────────────────────────────────────────────────────

interface ICollapsibleContext {
  open: boolean;
  toggle: () => void;
  disabled: boolean;
  triggerId: string;
  contentId: string;
}

const CollapsibleContext = createContext<ICollapsibleContext | null>(null);

const useCollapsibleContext = () => {
  const ctx = useContext(CollapsibleContext);
  if (!ctx) throw new Error("must be used inside <Collapsible>");
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── Collapsible root ─────────────────────────────────────────────

interface ICollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Collapsible = (props: ICollapsibleProps) => {
  const {
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
    disabled = false,
    children,
    className,
    ...rest
  } = props;

  const baseId = useId();
  const triggerId = `${baseId}-trigger`;
  const contentId = `${baseId}-content`;

  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen! : internalOpen;

  const toggle = () => {
    if (disabled) return;
    const next = !open;
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
  };

  return (
    <CollapsibleContext.Provider value={{ open, toggle, disabled, triggerId, contentId }}>
      <div
        data-state={open ? "open" : "closed"}
        data-disabled={disabled ? "" : undefined}
        className={cn("w-full", className)}
        {...rest}
      >
        {children}
      </div>
    </CollapsibleContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── CollapsibleTrigger ───────────────────────────────────────────

interface ICollapsibleTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export const CollapsibleTrigger = (props: ICollapsibleTriggerProps) => {
  const { children, className, onClick, ...rest } = props;
  const { open, toggle, disabled, triggerId, contentId } = useCollapsibleContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggle();
    onClick?.(e);
  };

  return (
    <button
      type="button"
      id={triggerId}
      aria-expanded={open}
      aria-controls={contentId}
      data-state={open ? "open" : "closed"}
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-between w-full",
        "font-lexend text-sm font-medium text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── CollapsibleContent ───────────────────────────────────────────

interface ICollapsibleContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const CollapsibleContent = (props: ICollapsibleContentProps) => {
  const { children, className, ...rest } = props;
  const { open, triggerId, contentId } = useCollapsibleContext();

  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      data-state={open ? "open" : "closed"}
      className={cn(
        "grid transition-[grid-template-rows] duration-200 ease-out",
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        className,
      )}
      {...rest}
    >
      <div className="overflow-hidden">
        {children}
      </div>
    </div>
  );
};
