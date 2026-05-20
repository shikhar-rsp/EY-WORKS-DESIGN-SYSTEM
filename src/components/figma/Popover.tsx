"use client";

import { Children, cloneElement, createContext, isValidElement, useCallback, useContext, useEffect, useId, useRef, useState, type ReactElement } from "react";

import ReactDOM from "react-dom";

import { cn } from "@/lib/utils";
import { useDelayedUnmount } from "@/hooks/useDelayedUnmount";
import { useFloatingPosition } from "@/hooks/useFloatingPosition";

// ─── Context ──────────────────────────────────────────────────────

interface IPopoverContext {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  anchorRef: React.RefObject<HTMLElement | null>;
  contentId: string;
}

const PopoverContext = createContext<IPopoverContext | null>(null);

const usePopoverContext = () => {
  const ctx = useContext(PopoverContext);
  if (!ctx) throw new Error("Popover sub-components must be used inside <Popover>");
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── Popover root ─────────────────────────────────────────────────

interface IPopoverProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

export const Popover = (props: IPopoverProps) => {
  const { open: controlledOpen, defaultOpen = false, onOpenChange, children } = props;
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const anchorRef = useRef<HTMLElement | null>(null);
  const contentId = useId();

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const setOpen = useCallback(
    (next: boolean) => {
      if (controlledOpen === undefined) setInternalOpen(next);
      onOpenChange?.(next);
    },
    [controlledOpen, onOpenChange],
  );

  return (
    <PopoverContext.Provider value={{ isOpen, setOpen, triggerRef, anchorRef, contentId }}>
      {children}
    </PopoverContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── PopoverAnchor ────────────────────────────────────────────────

interface IPopoverAnchorProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  className?: string;
}

export const PopoverAnchor = (props: IPopoverAnchorProps) => {
  const { children, className, ...rest } = props;
  const { anchorRef } = usePopoverContext();

  return (
    <span
      ref={anchorRef as React.RefObject<HTMLSpanElement>}
      data-slot="popover-anchor"
      className={cn("contents", className)}
      {...rest}
    >
      {children}
    </span>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── PopoverTrigger ───────────────────────────────────────────────

interface IPopoverTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export const PopoverTrigger = (props: IPopoverTriggerProps) => {
  const { children, className, onClick, asChild = false, ...rest } = props;
  const { isOpen, setOpen, triggerRef, contentId } = usePopoverContext();

  const sharedProps = {
    "data-slot": "popover-trigger",
    "aria-expanded": isOpen,
    "aria-haspopup": "dialog" as const,
    "aria-controls": contentId,
    onClick: (e: React.MouseEvent<HTMLElement>) => {
      setOpen(!isOpen);
      onClick?.(e as React.MouseEvent<HTMLButtonElement>);
    },
  };

  if (asChild && isValidElement(children)) {
    const child = Children.only(children) as ReactElement<Record<string, unknown>>;
    const childProps = child.props ?? {};
    const childClassName = typeof childProps.className === "string" ? childProps.className : "";
    return cloneElement(child, {
      ref: triggerRef,
      ...sharedProps,
      className: cn(childClassName, className),
    });
  }

  return (
    <button
      ref={triggerRef}
      type="button"
      {...sharedProps}
      {...rest}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── PopoverContent ───────────────────────────────────────────────

type AlignTypes = "start" | "center" | "end";
type SideTypes = "top" | "right" | "bottom" | "left";

interface IPopoverContentProps {
  align?: AlignTypes;
  side?: SideTypes;
  sideOffset?: number;
  zIndex?: number;
  className?: string;
  children?: React.ReactNode;
}

export const PopoverContent = (props: IPopoverContentProps) => {
  const { align = "center", side = "bottom", sideOffset = 4, zIndex = 50, className, children } = props;
  const { isOpen, setOpen, triggerRef, anchorRef, contentId } = usePopoverContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const { shouldRender, state } = useDelayedUnmount(isOpen, 150);

  // Use anchorRef if available (PopoverAnchor), otherwise fall back to triggerRef
  const effectiveAnchorRef = (anchorRef.current ? anchorRef : triggerRef) as React.RefObject<HTMLElement | null>;

  const { position } = useFloatingPosition({
    anchor: { type: "ref", ref: effectiveAnchorRef },
    contentRef,
    open: isOpen && shouldRender,
    side,
    align,
    sideOffset,
  });

  // Click outside to close
  useEffect(() => {
    if (!isOpen) return;
    const onMouseDown = (e: MouseEvent) => {
      if (
        contentRef.current?.contains(e.target as Node) ||
        triggerRef.current?.contains(e.target as Node)
      )
        return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [isOpen, setOpen, triggerRef]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, setOpen, triggerRef]);

  if (!shouldRender || typeof document === "undefined") return null;

  return ReactDOM.createPortal(
    <div
      ref={contentRef}
      id={contentId}
      role="dialog"
      aria-modal="false"
      data-slot="popover-content"
      data-state={state}
      style={{ position: "fixed", top: position.top, left: position.left, zIndex }}
      className={cn(
        "w-72 rounded-large border border-border bg-background p-200 shadow-lg",
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

// ═══════════════════════════════════════════════════════════════════

// ─── PopoverHeader ────────────────────────────────────────────────

interface IPopoverHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const PopoverHeader = (props: IPopoverHeaderProps) => {
  const { children, className, ...rest } = props;
  return (
    <div data-slot="popover-header" className={cn("mb-150 flex flex-col gap-050", className)} {...rest}>
      {children}
    </div>
  );
};

// ─── PopoverTitle ─────────────────────────────────────────────────

interface IPopoverTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  className?: string;
}

export const PopoverTitle = (props: IPopoverTitleProps) => {
  const { children, className, ...rest } = props;
  return (
    <h3
      data-slot="popover-title"
      className={cn("font-lexend text-sm font-semibold text-foreground", className)}
      {...rest}
    >
      {children}
    </h3>
  );
};

// ─── PopoverDescription ───────────────────────────────────────────

interface IPopoverDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
  className?: string;
}

export const PopoverDescription = (props: IPopoverDescriptionProps) => {
  const { children, className, ...rest } = props;
  return (
    <p data-slot="popover-description" className={cn("text-xs text-muted-foreground", className)} {...rest}>
      {children}
    </p>
  );
};

// ─── PopoverClose ─────────────────────────────────────────────────

interface IPopoverCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export const PopoverClose = (props: IPopoverCloseProps) => {
  const { children, className, onClick, ...rest } = props;
  const { setOpen } = usePopoverContext();

  return (
    <button
      type="button"
      data-slot="popover-close"
      onClick={(e) => {
        setOpen(false);
        onClick?.(e);
      }}
      className={cn("cursor-pointer", className)}
      {...rest}
    >
      {children}
    </button>
  );
};
