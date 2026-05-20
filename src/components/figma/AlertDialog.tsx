"use client";

import { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/figma/Button";
import { useDelayedUnmount } from "@/hooks/useDelayedUnmount";

// ─── Context ──────────────────────────────────────────────────────────────────

interface IAlertDialogContext {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

const AlertDialogContext = createContext<IAlertDialogContext | null>(null);

const useAlertDialogContext = () => {
  const ctx = useContext(AlertDialogContext);
  if (!ctx) throw new Error("must be used inside <AlertDialog>");
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════════════════

// ─── AlertDialog root ─────────────────────────────────────────────────────────

interface IAlertDialogProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

export const AlertDialog = (props: IAlertDialogProps) => {
  const { open: controlledOpen, defaultOpen = false, onOpenChange, children } = props;
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const setOpen = useCallback(
    (next: boolean) => {
      if (controlledOpen === undefined) setInternalOpen(next);
      onOpenChange?.(next);
    },
    [controlledOpen, onOpenChange],
  );

  return (
    <AlertDialogContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </AlertDialogContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════

// ─── AlertDialogTrigger ───────────────────────────────────────────────────────
// Note: asChild is not implemented — requires a project-wide Slot helper.

interface IAlertDialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const AlertDialogTrigger = (props: IAlertDialogTriggerProps) => {
  const { children, className, onClick, ...rest } = props;
  const { setOpen } = useAlertDialogContext();

  return (
    <button
      type="button"
      onClick={(e) => {
        setOpen(true);
        onClick?.(e);
      }}
      className={cn("cursor-pointer", className)}
      {...rest}
    >
      {children}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════

// ─── AlertDialogPortal ────────────────────────────────────────────────────────

interface IAlertDialogPortalProps {
  children?: React.ReactNode;
}

export const AlertDialogPortal = (props: IAlertDialogPortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return ReactDOM.createPortal(props.children, document.body);
};

// ═══════════════════════════════════════════════════════════════════════════════

// ─── AlertDialogOverlay ───────────────────────────────────────────────────────

interface IAlertDialogOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  state?: "open" | "closed";
}

export const AlertDialogOverlay = (props: IAlertDialogOverlayProps) => {
  const { className, state = "open", ...rest } = props;
  return (
    <div
      aria-hidden="true"
      data-state={state}
      className={cn(
        "fixed inset-0 z-50 bg-foreground/40 backdrop-blur-[2px]",
        "transition-opacity duration-200 ease-out",
        "data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
        className,
      )}
      {...rest}
    />
  );
};

// ═══════════════════════════════════════════════════════════════════════════════

// ─── AlertDialogContent ───────────────────────────────────────────────────────

interface IAlertDialogContentProps {
  children?: React.ReactNode;
  className?: string;
}

export const AlertDialogContent = (props: IAlertDialogContentProps) => {
  const { children, className } = props;
  const { isOpen } = useAlertDialogContext();
  const panelRef = useRef<HTMLDivElement>(null);
  const { shouldRender, state } = useDelayedUnmount(isOpen, 200);

  // AlertDialog does NOT close on Escape — user must make an explicit choice.
  // This is the semantic difference from a regular Dialog.

  // Focus trap
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const panel = panelRef.current;
    const focusable = panel.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [isOpen]);

  // Prevent body scroll — unlock immediately on close
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <AlertDialogPortal>
      <AlertDialogOverlay state={state} />
      <div
        ref={panelRef}
        role="alertdialog"
        aria-modal="true"
        data-state={state}
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2",
          "rounded-large border border-border bg-background p-300 shadow-lg",
          "transition-[opacity,transform] duration-200 ease-out",
          "data-[state=closed]:opacity-0 data-[state=closed]:scale-95",
          "data-[state=open]:opacity-100 data-[state=open]:scale-100",
          className,
        )}
      >
        {children}
      </div>
    </AlertDialogPortal>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════

// ─── AlertDialogHeader ────────────────────────────────────────────────────────

interface IAlertDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const AlertDialogHeader = (props: IAlertDialogHeaderProps) => {
  const { children, className, ...rest } = props;
  return (
    <div className={cn("flex flex-col gap-075 mb-200", className)} {...rest}>
      {children}
    </div>
  );
};

// ─── AlertDialogTitle ─────────────────────────────────────────────────────────

interface IAlertDialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  className?: string;
}

export const AlertDialogTitle = (props: IAlertDialogTitleProps) => {
  const { children, className, ...rest } = props;
  return (
    <h2 className={cn("font-lexend text-lg font-semibold text-foreground", className)} {...rest}>
      {children}
    </h2>
  );
};

// ─── AlertDialogDescription ───────────────────────────────────────────────────

interface IAlertDialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
  className?: string;
}

export const AlertDialogDescription = (props: IAlertDialogDescriptionProps) => {
  const { children, className, ...rest } = props;
  return (
    <p className={cn("text-sm leading-relaxed text-muted-foreground", className)} {...rest}>
      {children}
    </p>
  );
};

// ─── AlertDialogFooter ────────────────────────────────────────────────────────

interface IAlertDialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const AlertDialogFooter = (props: IAlertDialogFooterProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={cn("flex flex-col-reverse gap-150 sm:flex-row sm:justify-end mt-200", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

// ─── AlertDialogCancel ────────────────────────────────────────────────────────

interface IAlertDialogCancelProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export const AlertDialogCancel = (props: IAlertDialogCancelProps) => {
  const { children, className, onClick, ...rest } = props;
  const { setOpen } = useAlertDialogContext();

  return (
    <Button
      type="button"
      variant="outline"
      onClick={(e) => {
        setOpen(false);
        onClick?.(e);
      }}
      className={className}
      {...rest}
    >
      {children}
    </Button>
  );
};

// ─── AlertDialogAction ────────────────────────────────────────────────────────

interface IAlertDialogActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export const AlertDialogAction = (props: IAlertDialogActionProps) => {
  const { children, className, onClick, ...rest } = props;
  const { setOpen } = useAlertDialogContext();

  return (
    <Button
      type="button"
      variant="default"
      onClick={(e) => {
        onClick?.(e);
        setOpen(false);
      }}
      className={className}
      {...rest}
    >
      {children}
    </Button>
  );
};
