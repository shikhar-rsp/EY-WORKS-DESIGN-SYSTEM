"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type HTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";

import ReactDOM from "react-dom";
import { cva } from "class-variance-authority";

import { Cancel01 } from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";
import { useDelayedUnmount } from "@/hooks/useDelayedUnmount";

// ─── Context ─────────────────────────────────────────────────────

interface ISheetContext {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

const SheetContext = createContext<ISheetContext>({
  isOpen: false,
  setOpen: () => {},
});

const useSheetContext = () => useContext(SheetContext);

// ═══════════════════════════════════════════════════════════════════

// ─── Sheet root ───────────────────────────────────────────────────

interface ISheetProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
}

export const Sheet = (props: ISheetProps) => {
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
    <SheetContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── SheetTrigger ─────────────────────────────────────────────────

interface ISheetTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export const SheetTrigger = (props: ISheetTriggerProps) => {
  const { children, className, onClick, ...rest } = props;
  const { setOpen } = useSheetContext();

  return (
    <button
      type="button"
      onClick={(e) => { setOpen(true); onClick?.(e); }}
      className={cn("cursor-pointer", className)}
      {...rest}
    >
      {children}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── SheetPortal ─────────────────────────────────────────────────

interface ISheetPortalProps {
  children?: ReactNode;
}

export const SheetPortal = (props: ISheetPortalProps) => {
  const { children } = props;
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(children, document.body);
};

// ═══════════════════════════════════════════════════════════════════

// ─── SheetOverlay ─────────────────────────────────────────────────

interface ISheetOverlayProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const SheetOverlay = (props: ISheetOverlayProps) => {
  const { className, ...rest } = props;
  const { isOpen, setOpen } = useSheetContext();
  const { state } = useDelayedUnmount(isOpen, 300);

  return (
    <div
      aria-hidden="true"
      data-state={state}
      onClick={() => setOpen(false)}
      className={cn(
        "fixed inset-0 z-50 bg-foreground/40 backdrop-blur-[2px]",
        "transition-opacity duration-300 ease-out",
        "data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
        className,
      )}
      {...rest}
    />
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── SheetContent ─────────────────────────────────────────────────

type SideTypes = "top" | "right" | "bottom" | "left";

const sheetContentVariants = cva(
  [
    "fixed z-50 bg-background shadow-lg",
    "transition-transform duration-300 ease-out",
    "flex flex-col",
  ].join(" "),
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b border-border max-h-[80vh]",
        bottom: "inset-x-0 bottom-0 border-t border-border max-h-[80vh]",
        left: "inset-y-0 left-0 h-full w-3/4 border-r border-border max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l border-border max-w-sm",
      },
    },
    defaultVariants: { side: "right" },
  },
);

const SHEET_SLIDE_CLASSES: Record<SideTypes, string> = {
  top: "data-[state=closed]:-translate-y-full data-[state=open]:translate-y-0",
  bottom: "data-[state=closed]:translate-y-full data-[state=open]:translate-y-0",
  left: "data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0",
  right: "data-[state=closed]:translate-x-full data-[state=open]:translate-x-0",
};

interface ISheetContentProps {
  side?: SideTypes;
  className?: string;
  children?: ReactNode;
}

export const SheetContent = (props: ISheetContentProps) => {
  const { side = "right", className, children } = props;
  const { isOpen, setOpen } = useSheetContext();
  const panelRef = useRef<HTMLDivElement>(null);
  const { shouldRender, state } = useDelayedUnmount(isOpen, 300);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, setOpen]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const panel = panelRef.current;
    const focusable = panel.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    focusable[0]?.focus();
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
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

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <SheetPortal>
      <SheetOverlay />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        data-state={state}
        className={cn(sheetContentVariants({ side }), SHEET_SLIDE_CLASSES[side], "p-300", className)}
      >
        <button
          type="button"
          aria-label="Close sheet"
          onClick={() => setOpen(false)}
          className={cn(
            "absolute right-200 top-200",
            "inline-flex size-6 items-center justify-center rounded-small",
            "text-muted-foreground hover:bg-muted-hover hover:text-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "transition-colors duration-150",
          )}
        >
          <Cancel01 className="size-4" />
        </button>
        {children}
      </div>
    </SheetPortal>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── SheetHeader / SheetTitle / SheetDescription / SheetFooter / SheetClose ─

interface ISheetHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const SheetHeader = (props: ISheetHeaderProps) => {
  const { children, className, ...rest } = props;
  return (
    <div className={cn("flex flex-col gap-075 mb-200", className)} {...rest}>
      {children}
    </div>
  );
};

interface ISheetTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  className?: string;
}

export const SheetTitle = (props: ISheetTitleProps) => {
  const { children, className, ...rest } = props;
  return (
    <h2 className={cn("font-lexend text-lg font-semibold text-foreground", className)} {...rest}>
      {children}
    </h2>
  );
};

interface ISheetDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
}

export const SheetDescription = (props: ISheetDescriptionProps) => {
  const { children, className, ...rest } = props;
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...rest}>
      {children}
    </p>
  );
};

interface ISheetFooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const SheetFooter = (props: ISheetFooterProps) => {
  const { children, className, ...rest } = props;
  return (
    <div className={cn("mt-auto flex flex-col-reverse gap-150 sm:flex-row sm:justify-end pt-200", className)} {...rest}>
      {children}
    </div>
  );
};

interface ISheetCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export const SheetClose = (props: ISheetCloseProps) => {
  const { children, className, onClick, ...rest } = props;
  const { setOpen } = useSheetContext();

  return (
    <button
      type="button"
      onClick={(e) => { setOpen(false); onClick?.(e); }}
      className={cn("cursor-pointer", className)}
      {...rest}
    >
      {children}
    </button>
  );
};
