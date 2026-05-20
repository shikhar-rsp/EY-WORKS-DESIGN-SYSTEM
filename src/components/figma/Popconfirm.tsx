"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import ReactDOM from "react-dom";

import { AlertCircle, Loading02 } from "@/components/fragments/icons/catalog";
import { Button } from "@/components/figma/Button";
import { useDelayedUnmount } from "@/hooks/useDelayedUnmount";
import { useFloatingPosition } from "@/hooks/useFloatingPosition";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────

type SideTypes = "top" | "right" | "bottom" | "left";
type AlignTypes = "start" | "center" | "end";
type OkTypeTypes = "default" | "danger";

// ─── Context ──────────────────────────────────────────────────────

interface IPopconfirmContext {
  open: boolean;
  setOpen: (open: boolean) => void;
  onConfirm?: () => void | Promise<void>;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  contentId: string;
  titleId: string;
  descriptionId: string;
  disabled: boolean;
  side: SideTypes;
  align: AlignTypes;
  okType: OkTypeTypes;
  loading: boolean;
  setLoading: (v: boolean) => void;
  showArrow: boolean;
}

const PopconfirmContext = createContext<IPopconfirmContext | null>(null);

const usePopconfirmContext = () => {
  const ctx = useContext(PopconfirmContext);
  if (!ctx) throw new Error("Popconfirm sub-components must be used inside <Popconfirm>");
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── Popconfirm (root) ────────────────────────────────────────────

interface IPopconfirmProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onConfirm?: () => void | Promise<void>;
  disabled?: boolean;
  side?: SideTypes;
  align?: AlignTypes;
  okType?: OkTypeTypes;
  showArrow?: boolean;
  children?: ReactNode;
}

export const Popconfirm = (props: IPopconfirmProps) => {
  const {
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
    onConfirm,
    disabled = false,
    side = "top",
    align = "center",
    okType = "default",
    showArrow = true,
    children,
  } = props;

  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [loading, setLoading] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const reactId = useId();
  const contentId = `${reactId}-content`;
  const titleId = `${reactId}-title`;
  const descriptionId = `${reactId}-desc`;

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setInternalOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange],
  );

  return (
    <PopconfirmContext.Provider
      value={{
        open,
        setOpen,
        onConfirm,
        triggerRef,
        contentId,
        titleId,
        descriptionId,
        disabled,
        side,
        align,
        okType,
        loading,
        setLoading,
        showArrow,
      }}
    >
      {children}
    </PopconfirmContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── PopconfirmTrigger ────────────────────────────────────────────

interface IPopconfirmTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export const PopconfirmTrigger = (props: IPopconfirmTriggerProps) => {
  const { children, className, onClick, ...rest } = props;
  const ctx = usePopconfirmContext();

  return (
    <button
      ref={ctx.triggerRef}
      type="button"
      data-slot="popconfirm-trigger"
      aria-expanded={ctx.open}
      aria-haspopup="dialog"
      aria-controls={ctx.contentId}
      disabled={ctx.disabled}
      onClick={(e) => {
        if (!ctx.disabled) ctx.setOpen(!ctx.open);
        onClick?.(e);
      }}
      className={cn("cursor-pointer", className)}
      {...rest}
    >
      {children}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── PopconfirmContent ────────────────────────────────────────────

interface IPopconfirmContentProps extends HTMLAttributes<HTMLDivElement> {
  sideOffset?: number;
  zIndex?: number;
  children?: ReactNode;
  className?: string;
}

export const PopconfirmContent = (props: IPopconfirmContentProps) => {
  const { sideOffset = 8, zIndex = 50, children, className, ...rest } = props;
  const { open, setOpen, triggerRef, contentId, titleId, descriptionId, side, align, showArrow } =
    usePopconfirmContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const { shouldRender, state } = useDelayedUnmount(open, 150);

  const { position, actualSide } = useFloatingPosition({
    anchor: { type: "ref", ref: triggerRef as React.RefObject<HTMLElement | null> },
    contentRef,
    open: open && shouldRender,
    side,
    align,
    sideOffset,
  });

  // Click outside
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        contentRef.current?.contains(e.target as Node) ||
        triggerRef.current?.contains(e.target as Node)
      )
        return;
      setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, setOpen, triggerRef]);

  // Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, setOpen, triggerRef]);

  if (!shouldRender || typeof document === "undefined") return null;

  // Arrow position — uses actualSide (after flip) so the arrow tracks the content
  const arrowStyle: React.CSSProperties = (() => {
    const base: React.CSSProperties = {
      position: "absolute",
      width: 8,
      height: 8,
      background: "var(--background)",
      border: "1px solid var(--border)",
      transform: "rotate(45deg)",
    };
    if (actualSide === "top") {
      return { ...base, bottom: -5, ...(align === "center" ? { left: "50%", marginLeft: -4 } : align === "start" ? { left: 16 } : { right: 16 }) };
    }
    if (actualSide === "bottom") {
      return { ...base, top: -5, ...(align === "center" ? { left: "50%", marginLeft: -4 } : align === "start" ? { left: 16 } : { right: 16 }) };
    }
    if (actualSide === "right") {
      return { ...base, left: -5, ...(align === "center" ? { top: "50%", marginTop: -4 } : align === "start" ? { top: 16 } : { bottom: 16 }) };
    }
    // left
    return { ...base, right: -5, ...(align === "center" ? { top: "50%", marginTop: -4 } : align === "start" ? { top: 16 } : { bottom: 16 }) };
  })();

  return ReactDOM.createPortal(
    <div
      ref={contentRef}
      id={contentId}
      role="alertdialog"
      aria-modal="false"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      data-slot="popconfirm-content"
      data-state={state}
      style={{ position: "fixed", top: position.top, left: position.left, zIndex }}
      className={cn(
        "w-72 rounded-large border border-border bg-background p-200 shadow-lg",
        "transition-[opacity,transform] duration-150 ease-out",
        "data-[state=closed]:opacity-0 data-[state=closed]:scale-95",
        "data-[state=open]:opacity-100 data-[state=open]:scale-100",
        className,
      )}
      {...rest}
    >
      {showArrow && <span aria-hidden="true" style={arrowStyle} />}
      {children}
    </div>,
    document.body,
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── PopconfirmHeader ─────────────────────────────────────────────

interface IPopconfirmHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const PopconfirmHeader = (props: IPopconfirmHeaderProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      data-slot="popconfirm-header"
      className={cn("flex items-start gap-2 mb-100", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── PopconfirmIcon ───────────────────────────────────────────────

interface IPopconfirmIconProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  className?: string;
}

export const PopconfirmIcon = (props: IPopconfirmIconProps) => {
  const { children, className, ...rest } = props;
  return (
    <span
      data-slot="popconfirm-icon"
      className={cn("mt-0.5 shrink-0 text-warning-bold", className)}
      aria-hidden="true"
      {...rest}
    >
      {children ?? <AlertCircle className="size-4" />}
    </span>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── PopconfirmTitle ──────────────────────────────────────────────

interface IPopconfirmTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  className?: string;
}

export const PopconfirmTitle = (props: IPopconfirmTitleProps) => {
  const { children, className, ...rest } = props;
  const { titleId } = usePopconfirmContext();
  return (
    <h4
      id={titleId}
      data-slot="popconfirm-title"
      className={cn("font-lexend text-sm font-semibold text-foreground leading-snug", className)}
      {...rest}
    >
      {children}
    </h4>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── PopconfirmDescription ────────────────────────────────────────

interface IPopconfirmDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
}

export const PopconfirmDescription = (props: IPopconfirmDescriptionProps) => {
  const { children, className, ...rest } = props;
  const { descriptionId } = usePopconfirmContext();
  return (
    <p
      id={descriptionId}
      data-slot="popconfirm-description"
      className={cn("mb-150 text-xs text-muted-foreground leading-relaxed", className)}
      {...rest}
    >
      {children}
    </p>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── PopconfirmFooter ─────────────────────────────────────────────

interface IPopconfirmFooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const PopconfirmFooter = (props: IPopconfirmFooterProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      data-slot="popconfirm-footer"
      className={cn("flex items-center justify-end gap-2", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── PopconfirmCancel ─────────────────────────────────────────────

interface IPopconfirmCancelProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export const PopconfirmCancel = (props: IPopconfirmCancelProps) => {
  const { children = "Cancel", className, onClick, ...rest } = props;
  const { setOpen, loading } = usePopconfirmContext();

  return (
    <Button
      type="button"
      data-slot="popconfirm-cancel"
      variant="outline"
      size="sm"
      disabled={loading}
      onClick={(e) => {
        setOpen(false);
        onClick?.(e);
      }}
      className={cn("h-7", className)}
      {...rest}
    >
      {children}
    </Button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── PopconfirmAction ─────────────────────────────────────────────

interface IPopconfirmActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export const PopconfirmAction = (props: IPopconfirmActionProps) => {
  const { children = "OK", className, onClick, ...rest } = props;
  const { setOpen, onConfirm, okType, loading, setLoading } = usePopconfirmContext();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    setLoading(true);
    try {
      await onConfirm?.();
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  const isDanger = okType === "danger";

  return (
    <Button
      type="button"
      data-slot="popconfirm-action"
      variant={isDanger ? "destructive" : "default"}
      size="sm"
      disabled={loading}
      onClick={handleClick}
      leadingIcon={loading ? <Loading02 className="size-3 animate-spin" /> : undefined}
      className={cn("h-7", className)}
      {...rest}
    >
      {children}
    </Button>
  );
};
