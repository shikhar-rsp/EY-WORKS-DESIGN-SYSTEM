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

import { Cancel01 } from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";
import { useDelayedUnmount } from "@/hooks/useDelayedUnmount";

// ─── Root Context ─────────────────────────────────────────────────

interface IDialogContext {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  modal: boolean;
}

const DialogContext = createContext<IDialogContext | null>(null);

const useDialogContext = () => {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("Dialog sub-components must be used inside <Dialog>");
  return ctx;
};

// ─── Content Context (ARIA IDs shared to Title + Description) ─────

interface IDialogContentContext {
  titleId: string;
  descId: string;
}

const DialogContentContext = createContext<IDialogContentContext | null>(null);

const useDialogContentContext = () => {
  const ctx = useContext(DialogContentContext);
  if (!ctx) throw new Error("DialogTitle / DialogDescription must be used inside <DialogContent>");
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── Dialog (root) ────────────────────────────────────────────────

interface IDialogProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
  children?: ReactNode;
}

export const Dialog = (props: IDialogProps) => {
  const {
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
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
    <DialogContext.Provider value={{ isOpen, setOpen, modal }}>
      {children}
    </DialogContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── DialogPortal ─────────────────────────────────────────────────

interface IDialogPortalProps {
  children?: ReactNode;
}

export const DialogPortal = (props: IDialogPortalProps) => {
  if (typeof document === "undefined") return null;
  return createPortal(props.children, document.body);
};

// ═══════════════════════════════════════════════════════════════════

// ─── DialogOverlay ────────────────────────────────────────────────

interface IDialogOverlayProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  state?: "open" | "closed";
}

export const DialogOverlay = (props: IDialogOverlayProps) => {
  const { className, onClick, state = "open", ...rest } = props;
  const { setOpen } = useDialogContext();

  return (
    <div
      aria-hidden="true"
      data-state={state}
      onClick={(e) => { setOpen(false); onClick?.(e); }}
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

// ═══════════════════════════════════════════════════════════════════

// ─── DialogTrigger ────────────────────────────────────────────────

interface IDialogTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
}

export const DialogTrigger = (props: IDialogTriggerProps) => {
  const { asChild, children, className, onClick, ...rest } = props;
  const { setOpen } = useDialogContext();

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

// ─── DialogContent ────────────────────────────────────────────────

interface IDialogContentProps extends HTMLAttributes<HTMLDivElement> {
  showCloseButton?: boolean;
  children?: ReactNode;
  className?: string;
}

export const DialogContent = (props: IDialogContentProps) => {
  const { showCloseButton = true, children, className, ...rest } = props;
  const { isOpen, setOpen, modal } = useDialogContext();

  const panelRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const { shouldRender, state } = useDelayedUnmount(isOpen, 200);
  const reactId = useId();
  const titleId = `${reactId}-title`;
  const descId = `${reactId}-desc`;

  // Body scroll lock — unlock immediately on close
  useEffect(() => {
    if (!modal) return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen, modal]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, setOpen]);

  // Focus capture + trap + restore
  useLayoutEffect(() => {
    if (!isOpen || !panelRef.current) return;

    // Save trigger focus for restoration
    returnFocusRef.current = document.activeElement as HTMLElement;

    const el = panelRef.current;
    const FOCUSABLE = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    // Move focus into dialog
    const first = el.querySelector<HTMLElement>(FOCUSABLE);
    first?.focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!focusable.length) { e.preventDefault(); return; }
      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === firstEl) { e.preventDefault(); lastEl.focus(); }
      } else {
        if (document.activeElement === lastEl) { e.preventDefault(); firstEl.focus(); }
      }
    };

    document.addEventListener("keydown", trap);
    return () => {
      document.removeEventListener("keydown", trap);
      // Restore focus when dialog closes
      returnFocusRef.current?.focus();
    };
  }, [isOpen]);

  if (!shouldRender || typeof document === "undefined") return null;

  return (
    <DialogContentContext.Provider value={{ titleId, descId }}>
      <DialogPortal>
        <DialogOverlay state={state} />
        <div
          ref={panelRef}
          role="dialog"
          aria-modal={modal}
          aria-labelledby={titleId}
          aria-describedby={descId}
          data-state={state}
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2",
            "rounded-large border border-border bg-background p-300 shadow-lg",
            "transition-[opacity,transform] duration-200 ease-out",
            "data-[state=closed]:opacity-0 data-[state=closed]:scale-95",
            "data-[state=open]:opacity-100 data-[state=open]:scale-100",
            className,
          )}
          {...rest}
        >
          {showCloseButton && (
            <button
              type="button"
              aria-label="Close dialog"
              onClick={() => setOpen(false)}
              className={cn(
                "absolute right-200 top-200",
                "inline-flex size-6 items-center justify-center rounded-small",
                "text-muted-foreground hover:bg-muted-hover hover:text-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "transition-colors duration-150",
              )}
            >
              <Cancel01 className="size-3.5" />
            </button>
          )}
          {children}
        </div>
      </DialogPortal>
    </DialogContentContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── DialogHeader ─────────────────────────────────────────────────

interface IDialogHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const DialogHeader = (props: IDialogHeaderProps) => {
  const { children, className, ...rest } = props;
  return (
    <div className={cn("mb-200 flex flex-col gap-075", className)} {...rest}>
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── DialogTitle ──────────────────────────────────────────────────

interface IDialogTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  className?: string;
}

export const DialogTitle = (props: IDialogTitleProps) => {
  const { children, className, ...rest } = props;
  const { titleId } = useDialogContentContext();
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

// ─── DialogDescription ────────────────────────────────────────────

interface IDialogDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
}

export const DialogDescription = (props: IDialogDescriptionProps) => {
  const { children, className, ...rest } = props;
  const { descId } = useDialogContentContext();
  return (
    <p
      id={descId}
      className={cn("text-sm leading-relaxed text-muted-foreground", className)}
      {...rest}
    >
      {children}
    </p>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── DialogFooter ─────────────────────────────────────────────────

interface IDialogFooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const DialogFooter = (props: IDialogFooterProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={cn("mt-200 flex flex-col-reverse gap-150 sm:flex-row sm:justify-end", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── DialogClose ──────────────────────────────────────────────────

interface IDialogCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
}

export const DialogClose = (props: IDialogCloseProps) => {
  const { asChild, children, className, onClick, ...rest } = props;
  const { setOpen } = useDialogContext();

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
