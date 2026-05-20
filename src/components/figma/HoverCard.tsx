"use client";

import { createContext, useContext, useRef, useState, useEffect, useCallback } from "react";

import ReactDOM from "react-dom";

import { cn } from "@/lib/utils";
import { useDelayedUnmount } from "@/hooks/useDelayedUnmount";
import { useFloatingPosition } from "@/hooks/useFloatingPosition";

// ─── Context ──────────────────────────────────────────────────────

interface IHoverCardContext {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  scheduleOpen: () => void;
  scheduleClose: () => void;
}

const HoverCardContext = createContext<IHoverCardContext>({
  isOpen: false,
  setOpen: () => {},
  triggerRef: { current: null },
  scheduleOpen: () => {},
  scheduleClose: () => {},
});

const useHoverCardContext = () => useContext(HoverCardContext);

// ═══════════════════════════════════════════════════════════════════

// ─── HoverCard root ───────────────────────────────────────────────

interface IHoverCardProps {
  /** Controlled open state. Uncontrolled when omitted. */
  open?: boolean;
  /** Initial open state in uncontrolled mode (default: false). */
  defaultOpen?: boolean;
  /** Callback fired when open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** Milliseconds before the card opens (default: 200). */
  openDelay?: number;
  /** Milliseconds before the card closes (default: 300). */
  closeDelay?: number;
  children?: React.ReactNode;
}

export const HoverCard = (props: IHoverCardProps) => {
  const {
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
    openDelay = 200,
    closeDelay = 300,
    children,
  } = props;

  const isControlled = controlledOpen !== undefined;
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = isControlled ? controlledOpen! : internalOpen;
  const triggerRef = useRef<HTMLElement | null>(null);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setOpen = useCallback(
    (open: boolean) => {
      if (!isControlled) setInternalOpen(open);
      onOpenChange?.(open);
    },
    [isControlled, onOpenChange],
  );

  const scheduleOpen = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    openTimerRef.current = setTimeout(() => setOpen(true), openDelay);
  }, [openDelay, setOpen]);

  const scheduleClose = useCallback(() => {
    if (openTimerRef.current) clearTimeout(openTimerRef.current);
    closeTimerRef.current = setTimeout(() => setOpen(false), closeDelay);
  }, [closeDelay, setOpen]);

  useEffect(() => {
    return () => {
      if (openTimerRef.current) clearTimeout(openTimerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <HoverCardContext.Provider value={{ isOpen, setOpen, triggerRef, scheduleOpen, scheduleClose }}>
      {children}
    </HoverCardContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── HoverCardTrigger ─────────────────────────────────────────────

interface IHoverCardTriggerProps {
  /** asChild is declared for API parity — not implemented (no Slot helper). */
  asChild?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const HoverCardTrigger = (props: IHoverCardTriggerProps) => {
  const { children, className } = props;
  const { triggerRef, scheduleOpen, scheduleClose } = useHoverCardContext();

  return (
    <span
      ref={triggerRef as React.RefObject<HTMLSpanElement>}
      onMouseEnter={scheduleOpen}
      onMouseLeave={scheduleClose}
      onFocus={scheduleOpen}
      onBlur={scheduleClose}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </span>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── HoverCardContent ─────────────────────────────────────────────

type HoverCardAlignTypes = "start" | "center" | "end";
type HoverCardSideTypes = "top" | "right" | "bottom" | "left";

interface IHoverCardContentProps {
  align?: HoverCardAlignTypes;
  side?: HoverCardSideTypes;
  sideOffset?: number;
  zIndex?: number;
  className?: string;
  children?: React.ReactNode;
}

export const HoverCardContent = (props: IHoverCardContentProps) => {
  const { align = "center", side = "bottom", sideOffset = 4, zIndex = 50, className, children } = props;
  const { isOpen, triggerRef, scheduleOpen, scheduleClose } = useHoverCardContext();
  const { shouldRender, state } = useDelayedUnmount(isOpen, 150);
  const contentRef = useRef<HTMLDivElement>(null);

  const { position } = useFloatingPosition({
    anchor: { type: "ref", ref: triggerRef as React.RefObject<HTMLElement | null> },
    contentRef,
    open: isOpen && shouldRender,
    side,
    align,
    sideOffset,
  });

  if (!shouldRender || typeof document === "undefined") return null;

  return ReactDOM.createPortal(
    <div
      ref={contentRef}
      role="tooltip"
      data-state={state}
      onMouseEnter={scheduleOpen}
      onMouseLeave={scheduleClose}
      style={{ position: "fixed", top: position.top, left: position.left, zIndex }}
      className={cn(
        "w-64 rounded-large border border-border bg-background p-200 shadow-lg",
        "transition-[opacity,transform] duration-150 ease-out",
        "data-[state=closed]:opacity-0 data-[state=closed]:scale-95",
        "data-[state=open]:opacity-100 data-[state=open]:scale-100",
        className,
      )}
    >
      {children}
    </div>,
    document.body,
  );
};
