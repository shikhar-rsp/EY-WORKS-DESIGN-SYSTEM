"use client";

import {
  cloneElement,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";
import { useDelayedUnmount } from "@/hooks/useDelayedUnmount";

// ─── Root Context ─────────────────────────────────────────────────

interface IDrawerContext {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  direction: "bottom" | "top" | "left" | "right";
  dismissible: boolean;
  modal: boolean;
}

const DrawerContext = createContext<IDrawerContext | null>(null);

const useDrawerContext = () => {
  const ctx = useContext(DrawerContext);
  if (!ctx) throw new Error("Drawer sub-components must be used inside <Drawer>");
  return ctx;
};

// ─── Content Context (title / description IDs for ARIA) ───────────

interface IDrawerContentContext {
  titleId: string;
  descId: string;
}

const DrawerContentContext = createContext<IDrawerContentContext | null>(null);

const useDrawerContentContext = () => {
  const ctx = useContext(DrawerContentContext);
  if (!ctx) throw new Error("DrawerTitle / DrawerDescription must be used inside <DrawerContent>");
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── Drawer (root) ─────────────────────────────────────────────────

interface IDrawerProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  direction?: "bottom" | "top" | "left" | "right";
  dismissible?: boolean;
  modal?: boolean;
  shouldScaleBackground?: boolean;
  children?: ReactNode;
}

export const Drawer = (props: IDrawerProps) => {
  const {
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
    direction = "bottom",
    dismissible = true,
    modal = true,
    children,
  } = props;

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
    <DrawerContext.Provider value={{ isOpen, setOpen, direction, dismissible, modal }}>
      {children}
    </DrawerContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── DrawerPortal ─────────────────────────────────────────────────

interface IDrawerPortalProps {
  children?: ReactNode;
}

export const DrawerPortal = (props: IDrawerPortalProps) => {
  // Guard: only runs in browser (callers should already check !isOpen for SSR safety)
  if (typeof document === "undefined") return null;
  return createPortal(props.children, document.body);
};

// ═══════════════════════════════════════════════════════════════════

// ─── DrawerOverlay ────────────────────────────────────────────────

interface IDrawerOverlayProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  state?: "open" | "closed";
}

export const DrawerOverlay = (props: IDrawerOverlayProps) => {
  const { className, onClick, state = "open", ...rest } = props;
  const { setOpen, dismissible } = useDrawerContext();

  return (
    <div
      aria-hidden="true"
      data-state={state}
      onClick={(e) => { if (dismissible) setOpen(false); onClick?.(e); }}
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

// ─── DrawerTrigger ────────────────────────────────────────────────

interface IDrawerTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
}

export const DrawerTrigger = (props: IDrawerTriggerProps) => {
  const { asChild, children, className, onClick, ...rest } = props;
  const { setOpen } = useDrawerContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
    onClick?.(e);
  };

  if (asChild && isValidElement(children)) {
    const child = children as React.ReactElement<{ onClick?: (e: React.MouseEvent) => void }>;
    return cloneElement(child, {
      onClick: (e: React.MouseEvent) => {
        setOpen(true);
        child.props.onClick?.(e);
      },
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn("cursor-pointer", className)}
      {...rest}
    >
      {children}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── DrawerContent ────────────────────────────────────────────────

const PANEL_CLASSES: Record<string, string> = {
  bottom: "inset-x-0 bottom-0 max-h-[85vh] rounded-t-large border-t border-border",
  top: "inset-x-0 top-0 max-h-[85vh] rounded-b-large border-b border-border",
  left: "inset-y-0 left-0 h-full w-3/4 max-w-sm rounded-r-large border-r border-border",
  right: "inset-y-0 right-0 h-full w-3/4 max-w-sm rounded-l-large border-l border-border",
};

interface IDrawerContentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

const SLIDE_CLASSES: Record<string, string> = {
  bottom: "data-[state=closed]:translate-y-full data-[state=open]:translate-y-0",
  top: "data-[state=closed]:-translate-y-full data-[state=open]:translate-y-0",
  left: "data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0",
  right: "data-[state=closed]:translate-x-full data-[state=open]:translate-x-0",
};

export const DrawerContent = (props: IDrawerContentProps) => {
  const { children, className, ...rest } = props;
  const { isOpen, setOpen, direction, modal } = useDrawerContext();

  const panelRef = useRef<HTMLDivElement>(null);
  const { shouldRender, state } = useDelayedUnmount(isOpen, 300);
  const reactId = useId();
  const titleId = `${reactId}-title`;
  const descId = `${reactId}-desc`;

  // Body scroll lock — unlock immediately on close, don't wait for animation
  useEffect(() => {
    if (!modal) return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen, modal]);

  // Escape key to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, setOpen]);

  if (!shouldRender || typeof document === "undefined") return null;

  return (
    <DrawerContentContext.Provider value={{ titleId, descId }}>
      <DrawerPortal>
        <DrawerOverlay state={state} />
        <FocusTrap panelRef={panelRef}>
          <div
            ref={panelRef}
            role="dialog"
            aria-modal={modal}
            aria-labelledby={titleId}
            aria-describedby={descId}
            data-state={state}
            className={cn(
              "fixed z-50 bg-background p-300 shadow-lg",
              "transition-transform duration-300 ease-out",
              SLIDE_CLASSES[direction],
              PANEL_CLASSES[direction],
              className,
            )}
            {...rest}
          >
            {(direction === "bottom" || direction === "top") && (
              <div className="mb-200 flex justify-center">
                <div className="h-1.5 w-12 rounded-full bg-muted" />
              </div>
            )}
            {children}
          </div>
        </FocusTrap>
      </DrawerPortal>
    </DrawerContentContext.Provider>
  );
};

// ─── FocusTrap (private) ──────────────────────────────────────────

interface IFocusTrapProps {
  children: ReactNode;
  panelRef: React.RefObject<HTMLDivElement | null>;
}

const FocusTrap = (props: IFocusTrapProps) => {
  const { children, panelRef } = props;
  const returnFocusRef = useRef<HTMLElement | null>(null);

  // Capture trigger focus on mount; restore on unmount
  useLayoutEffect(() => {
    returnFocusRef.current = document.activeElement as HTMLElement;

    // Move focus into the panel
    const el = panelRef.current;
    if (el) {
      const firstFocusable = el.querySelector<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      firstFocusable?.focus();
    }

    return () => { returnFocusRef.current?.focus(); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Tab key trap
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = Array.from(
        el.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (!focusable.length) { e.preventDefault(); return; }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };

    document.addEventListener("keydown", trapFocus);
    return () => document.removeEventListener("keydown", trapFocus);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{children}</>;
};

// ═══════════════════════════════════════════════════════════════════

// ─── DrawerHeader ────────────────────────────────────────────────

interface IDrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const DrawerHeader = (props: IDrawerHeaderProps) => {
  const { children, className, ...rest } = props;
  return (
    <div className={cn("mb-200 flex flex-col gap-075", className)} {...rest}>
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── DrawerTitle ─────────────────────────────────────────────────

interface IDrawerTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  className?: string;
}

export const DrawerTitle = (props: IDrawerTitleProps) => {
  const { children, className, ...rest } = props;
  const { titleId } = useDrawerContentContext();
  return (
    <h2
      id={titleId}
      className={cn("font-lexend text-lg font-semibold text-foreground", className)}
      {...rest}
    >
      {children}
    </h2>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── DrawerDescription ───────────────────────────────────────────

interface IDrawerDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
}

export const DrawerDescription = (props: IDrawerDescriptionProps) => {
  const { children, className, ...rest } = props;
  const { descId } = useDrawerContentContext();
  return (
    <p
      id={descId}
      className={cn("text-sm text-muted-foreground", className)}
      {...rest}
    >
      {children}
    </p>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── DrawerFooter ────────────────────────────────────────────────

interface IDrawerFooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const DrawerFooter = (props: IDrawerFooterProps) => {
  const { children, className, ...rest } = props;
  return (
    <div className={cn("mt-auto flex flex-col gap-100 pt-200", className)} {...rest}>
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── DrawerClose ─────────────────────────────────────────────────

interface IDrawerCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
}

export const DrawerClose = (props: IDrawerCloseProps) => {
  const { asChild, children, className, onClick, ...rest } = props;
  const { setOpen } = useDrawerContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(false);
    onClick?.(e);
  };

  if (asChild && isValidElement(children)) {
    const child = children as React.ReactElement<{ onClick?: (e: React.MouseEvent) => void }>;
    return cloneElement(child, {
      onClick: (e: React.MouseEvent) => {
        setOpen(false);
        child.props.onClick?.(e);
      },
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn("cursor-pointer", className)}
      {...rest}
    >
      {children}
    </button>
  );
};
