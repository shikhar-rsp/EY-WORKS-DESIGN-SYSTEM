"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  useId,
  cloneElement,
  isValidElement,
  forwardRef,
  type ReactNode,
  type HTMLAttributes,
  type ReactElement,
  type ForwardedRef,
} from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";
import { useDelayedUnmount } from "@/hooks/useDelayedUnmount";
import { useFloatingPosition } from "@/hooks/useFloatingPosition";

// ═══ Types ═══

type TooltipSideTypes = "top" | "right" | "bottom" | "left";
type TooltipAlignTypes = "start" | "center" | "end";
type TooltipStateTypes = "delayed-open" | "instant-open" | "closed";

// ═══════════════════════════════════════════════════════════════════
// TooltipProvider — wraps the app to set a shared delay
// ═══════════════════════════════════════════════════════════════════

interface ITooltipProviderContext {
  delayDuration: number;
}

const TooltipProviderContext = createContext<ITooltipProviderContext>({
  delayDuration: 0,
});

interface ITooltipProviderProps {
  delayDuration?: number;
  children: ReactNode;
}

export const TooltipProvider = (props: ITooltipProviderProps) => {
  return (
    <TooltipProviderContext.Provider value={{ delayDuration: props.delayDuration ?? 0 }}>
      {props.children}
    </TooltipProviderContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════
// Tooltip — root state manager (no DOM output)
// ═══════════════════════════════════════════════════════════════════

interface ITooltipContext {
  open: boolean;
  dataState: TooltipStateTypes;
  onOpen: (instant?: boolean) => void;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  contentId: string;
}

const TooltipContext = createContext<ITooltipContext | null>(null);

const useTooltipContext = () => {
  const ctx = useContext(TooltipContext);
  if (!ctx) throw new Error("Tooltip compound components must be used within <Tooltip>");
  return ctx;
};

interface ITooltipProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  delayDuration?: number;
  children: ReactNode;
}

export const Tooltip = (props: ITooltipProps) => {
  const providerCtx = useContext(TooltipProviderContext);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(props.defaultOpen ?? false);
  const [dataState, setDataState] = useState<TooltipStateTypes>("closed");
  const triggerRef = useRef<HTMLElement | null>(null);
  const contentId = useId();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isControlled = props.open !== undefined;
  const open = isControlled ? props.open! : uncontrolledOpen;
  const delayDuration = props.delayDuration ?? providerCtx.delayDuration;

  const setOpen = useCallback(
    (value: boolean) => {
      if (!isControlled) setUncontrolledOpen(value);
      props.onOpenChange?.(value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isControlled, props.onOpenChange],
  );

  const clearDelay = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const onOpen = useCallback(
    (instant = false) => {
      clearDelay();
      if (!instant && delayDuration > 0) {
        timeoutRef.current = setTimeout(() => {
          setOpen(true);
          setDataState("delayed-open");
        }, delayDuration);
      } else {
        setOpen(true);
        setDataState("instant-open");
      }
    },
    [delayDuration, setOpen, clearDelay],
  );

  const onClose = useCallback(() => {
    clearDelay();
    setOpen(false);
    setDataState("closed");
  }, [setOpen, clearDelay]);

  // Sync dataState when controlled open changes
  useEffect(() => {
    if (isControlled) {
      setDataState(props.open ? "delayed-open" : "closed");
    }
  }, [isControlled, props.open]);

  useEffect(() => {
    return () => clearDelay();
  }, [clearDelay]);

  return (
    <TooltipContext.Provider value={{ open, dataState, onOpen, onClose, triggerRef, contentId }}>
      {props.children}
    </TooltipContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════
// TooltipTrigger — the element the user hovers / focuses
// ═══════════════════════════════════════════════════════════════════

interface ITooltipTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children: ReactNode;
}

export const TooltipTrigger = forwardRef<HTMLButtonElement, ITooltipTriggerProps>(
  (props: ITooltipTriggerProps, externalRef: ForwardedRef<HTMLButtonElement>) => {
    const { asChild = false, children, className, ...rest } = props;
    const { open, dataState, onOpen, onClose, triggerRef, contentId } = useTooltipContext();

    const mergedRef = (el: HTMLButtonElement | null) => {
      (triggerRef as React.MutableRefObject<HTMLElement | null>).current = el;
      if (typeof externalRef === "function") externalRef(el);
      else if (externalRef) (externalRef as React.MutableRefObject<HTMLButtonElement | null>).current = el;
    };

    const sharedProps = {
      "data-state": dataState,
      "aria-describedby": open ? contentId : undefined,
      onMouseEnter: () => onOpen(false),
      onMouseLeave: onClose,
      onFocus: () => onOpen(true),
      onBlur: onClose,
    };

    if (asChild && isValidElement(children)) {
      return cloneElement(children as ReactElement<any>, { // eslint-disable-line @typescript-eslint/no-explicit-any
        ref: triggerRef,
        ...sharedProps,
      });
    }

    return (
      <button
        ref={mergedRef}
        type="button"
        className={cn("inline-flex", className)}
        {...sharedProps}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

TooltipTrigger.displayName = "TooltipTrigger";

// ═══════════════════════════════════════════════════════════════════
// TooltipContent — portal-rendered positioned bubble with arrow
// ═══════════════════════════════════════════════════════════════════

interface ITooltipContentProps extends HTMLAttributes<HTMLDivElement> {
  side?: TooltipSideTypes;
  align?: TooltipAlignTypes;
  sideOffset?: number;
  zIndex?: number;
  children: ReactNode;
}

const ARROW_CLASSES: Record<TooltipSideTypes, string> = {
  top: [
    "top-full left-1/2 -translate-x-1/2",
    "border-l-transparent border-r-transparent border-b-transparent border-t-primary",
  ].join(" "),
  bottom: [
    "bottom-full left-1/2 -translate-x-1/2",
    "border-l-transparent border-r-transparent border-t-transparent border-b-primary",
  ].join(" "),
  left: [
    "left-full top-1/2 -translate-y-1/2",
    "border-t-transparent border-b-transparent border-r-transparent border-l-primary",
  ].join(" "),
  right: [
    "right-full top-1/2 -translate-y-1/2",
    "border-t-transparent border-b-transparent border-l-transparent border-r-primary",
  ].join(" "),
};

export const TooltipContent = forwardRef<HTMLDivElement, ITooltipContentProps>(
  (props: ITooltipContentProps, externalRef: ForwardedRef<HTMLDivElement>) => {
    const { side = "top", align = "center", sideOffset = 4, zIndex = 50, children, className, ...rest } = props;
    const { open, dataState, onClose, triggerRef, contentId } = useTooltipContext();
    const contentRef = useRef<HTMLDivElement>(null);
    const { shouldRender } = useDelayedUnmount(open, 150);

    const { position: floatPos, actualSide } = useFloatingPosition({
      anchor: { type: "ref", ref: triggerRef as React.RefObject<HTMLElement | null> },
      contentRef,
      open: open && shouldRender,
      side,
      align,
      sideOffset,
      repositionOnScroll: false,
    });

    const mergedRef = (el: HTMLDivElement | null) => {
      (contentRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      if (typeof externalRef === "function") externalRef(el);
      else if (externalRef) (externalRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    };

    // Close on Escape
    useEffect(() => {
      if (!open) return;
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, onClose]);

    // Close on scroll (Tooltip closes instead of repositioning)
    useEffect(() => {
      if (!open) return;
      const handleScroll = () => onClose();
      window.addEventListener("scroll", handleScroll, true);
      return () => window.removeEventListener("scroll", handleScroll, true);
    }, [open, onClose]);

    if (!shouldRender || typeof document === "undefined") return null;

    return createPortal(
      <div
        ref={mergedRef}
        id={contentId}
        role="tooltip"
        data-state={dataState}
        data-side={actualSide}
        className={cn(
          "max-w-xs",
          "bg-primary text-primary-foreground rounded-small px-075 py-0.5",
          "font-lexend text-xs leading-4",
          "transition-[opacity,transform] duration-150",
          "data-[state=closed]:opacity-0 data-[state=closed]:scale-95",
          "data-[state=delayed-open]:opacity-100 data-[state=delayed-open]:scale-100",
          "data-[state=instant-open]:opacity-100 data-[state=instant-open]:scale-100",
          className,
        )}
        style={{ position: "fixed", top: floatPos.top, left: floatPos.left, zIndex, pointerEvents: "none" }}
        {...rest}
      >
        {children}
        <span
          aria-hidden="true"
          className={cn("absolute size-0 border-[6px]", ARROW_CLASSES[actualSide])}
        />
      </div>,
      document.body,
    );
  },
);

TooltipContent.displayName = "TooltipContent";
