"use client";

import {
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { createPortal } from "react-dom";

import { ArrowRight01Round, Tick02 } from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";
import { useDelayedUnmount } from "@/hooks/useDelayedUnmount";
import { useFloatingPosition } from "@/hooks/useFloatingPosition";

// ─── Root Context ─────────────────────────────────────────────────

interface IContextMenuContext {
  isOpen: boolean;
  position: { x: number; y: number };
  setOpen: (open: boolean) => void;
}

const ContextMenuContext = createContext<IContextMenuContext | null>(null);

const useContextMenuContext = () => {
  const ctx = useContext(ContextMenuContext);
  if (!ctx) throw new Error("ContextMenu sub-components must be used inside <ContextMenu>");
  return ctx;
};

// ─── Radio Group context ──────────────────────────────────────────

interface IContextMenuRadioGroupContext {
  value: string;
  onValueChange: (v: string) => void;
}

const ContextMenuRadioGroupContext = createContext<IContextMenuRadioGroupContext>({
  value: "",
  onValueChange: () => {},
});

// ─── Sub context ──────────────────────────────────────────────────

interface IContextMenuSubContext {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

const ContextMenuSubContext = createContext<IContextMenuSubContext | null>(null);

const useContextMenuSubContext = () => {
  const ctx = useContext(ContextMenuSubContext);
  if (!ctx) throw new Error("ContextMenuSubTrigger / ContextMenuSubContent must be used inside <ContextMenuSub>");
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── ContextMenu (root) ───────────────────────────────────────────

interface IContextMenuProps {
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
}

export const ContextMenu = (props: IContextMenuProps) => {
  const { onOpenChange, children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const setOpen = useCallback(
    (open: boolean) => {
      setIsOpen(open);
      onOpenChange?.(open);
    },
    [onOpenChange],
  );

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setOpen(true);
  };

  return (
    <ContextMenuContext.Provider value={{ isOpen, position, setOpen }}>
      <div onContextMenu={handleContextMenu} style={{ display: "contents" }}>
        {children}
      </div>
    </ContextMenuContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ContextMenuPortal ────────────────────────────────────────────

interface IContextMenuPortalProps {
  children?: ReactNode;
}

export const ContextMenuPortal = (props: IContextMenuPortalProps) => {
  if (typeof document === "undefined") return null;
  return createPortal(props.children, document.body);
};

// ═══════════════════════════════════════════════════════════════════

// ─── ContextMenuTrigger ───────────────────────────────────────────

interface IContextMenuTriggerProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
}

export const ContextMenuTrigger = (props: IContextMenuTriggerProps) => {
  const { asChild, children, className, ...rest } = props;

  if (asChild && isValidElement(children)) {
    // Right-click is captured by ContextMenu root — Trigger with asChild
    // just passes through with no extra wrapper
    return <>{children}</>;
  }

  return (
    <div className={cn(className)} {...rest}>
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ContextMenuContent ───────────────────────────────────────────

const ITEM_SELECTOR = '[role="menuitem"]:not([disabled]),[role="menuitemcheckbox"]:not([disabled]),[role="menuitemradio"]:not([disabled])';

interface IContextMenuContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  zIndex?: number;
}

export const ContextMenuContent = (props: IContextMenuContentProps) => {
  const { className, children, zIndex = 50, ...rest } = props;
  const { isOpen, position, setOpen } = useContextMenuContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const { shouldRender, state } = useDelayedUnmount(isOpen, 150);

  const { position: floatPos } = useFloatingPosition({
    anchor: { type: "point", x: position.x, y: position.y },
    contentRef,
    open: isOpen && shouldRender,
    side: "bottom",
    align: "start",
  });

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const onMouseDown = (e: MouseEvent) => {
      if (!contentRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [isOpen, setOpen]);

  // Escape + Arrow key navigation
  useEffect(() => {
    if (!isOpen || !contentRef.current) return;
    const el = contentRef.current;

    // Initial focus
    const items = Array.from(el.querySelectorAll<HTMLElement>(ITEM_SELECTOR));
    items[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); return; }

      const items = Array.from(el.querySelectorAll<HTMLElement>(ITEM_SELECTOR));
      if (!items.length) return;

      const current = document.activeElement as HTMLElement;
      const idx = items.indexOf(current);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        items[(idx + 1) % items.length]?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        items[(idx - 1 + items.length) % items.length]?.focus();
      } else if (e.key === "Home") {
        e.preventDefault();
        items[0]?.focus();
      } else if (e.key === "End") {
        e.preventDefault();
        items[items.length - 1]?.focus();
      } else if (e.key === "Enter" || e.key === " ") {
        if (current && items.includes(current)) { e.preventDefault(); current.click(); }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, setOpen]);

  if (!shouldRender || typeof document === "undefined") return null;

  return (
    <ContextMenuPortal>
      <div
        ref={contentRef}
        role="menu"
        data-state={state}
        style={{ position: "fixed", top: floatPos.top, left: floatPos.left, zIndex }}
        className={cn(
          "min-w-[10rem] overflow-hidden rounded-large border border-border bg-background p-050 shadow-lg",
          "transition-[opacity,transform] duration-150 ease-out",
          "data-[state=closed]:opacity-0 data-[state=closed]:scale-95",
          "data-[state=open]:opacity-100 data-[state=open]:scale-100",
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    </ContextMenuPortal>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ContextMenuGroup ─────────────────────────────────────────────

interface IContextMenuGroupProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const ContextMenuGroup = (props: IContextMenuGroupProps) => {
  const { children, className, ...rest } = props;
  return (
    <div role="group" className={cn(className)} {...rest}>
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ContextMenuItem ──────────────────────────────────────────────

interface IContextMenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  inset?: boolean;
  variant?: "default" | "destructive";
  children?: ReactNode;
  className?: string;
}

export const ContextMenuItem = (props: IContextMenuItemProps) => {
  const { inset = false, variant = "default", children, className, onClick, disabled, ...rest } = props;
  const { setOpen } = useContextMenuContext();

  return (
    <button
      role="menuitem"
      type="button"
      disabled={disabled}
      data-disabled={disabled || undefined}
      onClick={(e) => { onClick?.(e); if (!disabled) setOpen(false); }}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center gap-150",
        "rounded-small px-150 py-075 text-sm outline-none",
        "transition-colors duration-100",
        "hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
        variant === "destructive" && "text-destructive hover:bg-destructive-subtle hover:text-destructive focus:bg-destructive-subtle focus:text-destructive",
        inset && "pl-[2rem]",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ContextMenuCheckboxItem ──────────────────────────────────────

interface IContextMenuCheckboxItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  children?: ReactNode;
  className?: string;
}

export const ContextMenuCheckboxItem = (props: IContextMenuCheckboxItemProps) => {
  const { checked = false, onCheckedChange, children, className, ...rest } = props;
  return (
    <button
      role="menuitemcheckbox"
      aria-checked={checked}
      type="button"
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center gap-150",
        "rounded-small py-075 pl-[2rem] pr-150 text-sm outline-none",
        "transition-colors duration-100",
        "hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground",
        className,
      )}
      {...rest}
    >
      <span className="absolute left-150 flex size-3.5 items-center justify-center">
        {checked && <Tick02 className="size-3" />}
      </span>
      {children}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ContextMenuRadioGroup / Item ─────────────────────────────────

interface IContextMenuRadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  value?: string;
  onValueChange?: (value: string) => void;
  children?: ReactNode;
  className?: string;
}

export const ContextMenuRadioGroup = (props: IContextMenuRadioGroupProps) => {
  const { value = "", onValueChange = () => {}, children, className, ...rest } = props;
  return (
    <ContextMenuRadioGroupContext.Provider value={{ value, onValueChange }}>
      <div role="group" className={cn(className)} {...rest}>{children}</div>
    </ContextMenuRadioGroupContext.Provider>
  );
};

interface IContextMenuRadioItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children?: ReactNode;
  className?: string;
}

export const ContextMenuRadioItem = (props: IContextMenuRadioItemProps) => {
  const { value, children, className, ...rest } = props;
  const { value: groupValue, onValueChange } = useContext(ContextMenuRadioGroupContext);
  const checked = groupValue === value;

  return (
    <button
      role="menuitemradio"
      aria-checked={checked}
      type="button"
      onClick={() => onValueChange(value)}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center",
        "rounded-small py-075 pl-[2rem] pr-150 text-sm outline-none",
        "transition-colors duration-100",
        "hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground",
        className,
      )}
      {...rest}
    >
      <span className="absolute left-150 flex size-3.5 items-center justify-center">
        {checked && <span className="size-2 rounded-full bg-foreground" />}
      </span>
      {children}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ContextMenuLabel / Separator / Shortcut ──────────────────────

interface IContextMenuLabelProps extends HTMLAttributes<HTMLDivElement> {
  inset?: boolean;
  children?: ReactNode;
  className?: string;
}

export const ContextMenuLabel = (props: IContextMenuLabelProps) => {
  const { inset = false, children, className, ...rest } = props;
  return (
    <div className={cn("px-150 py-075 text-xs font-semibold text-muted-foreground", inset && "pl-[2rem]", className)} {...rest}>
      {children}
    </div>
  );
};

interface IContextMenuSeparatorProps extends HTMLAttributes<HTMLHRElement> {
  className?: string;
}

export const ContextMenuSeparator = (props: IContextMenuSeparatorProps) => {
  const { className, ...rest } = props;
  return <hr className={cn("-mx-050 my-050 border-t border-border", className)} {...rest} />;
};

interface IContextMenuShortcutProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  className?: string;
}

export const ContextMenuShortcut = (props: IContextMenuShortcutProps) => {
  const { children, className, ...rest } = props;
  return (
    <span className={cn("ml-auto pl-200 text-xs tracking-widest text-muted-foreground", className)} {...rest}>
      {children}
    </span>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ContextMenuSub ───────────────────────────────────────────────

interface IContextMenuSubProps {
  children?: ReactNode;
}

export const ContextMenuSub = (props: IContextMenuSubProps) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  return (
    <ContextMenuSubContext.Provider value={{ isOpen, setOpen: setIsOpen, triggerRef }}>
      <div>{children}</div>
    </ContextMenuSubContext.Provider>
  );
};

// ─── ContextMenuSubTrigger ────────────────────────────────────────

interface IContextMenuSubTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  inset?: boolean;
  children?: ReactNode;
  className?: string;
}

export const ContextMenuSubTrigger = (props: IContextMenuSubTriggerProps) => {
  const { inset = false, children, className, ...rest } = props;
  const { isOpen, setOpen, triggerRef } = useContextMenuSubContext();

  return (
    <button
      ref={triggerRef}
      role="menuitem"
      aria-haspopup="menu"
      aria-expanded={isOpen}
      type="button"
      data-state={isOpen ? "open" : "closed"}
      onClick={() => setOpen(!isOpen)}
      onMouseEnter={() => setOpen(true)}
      onKeyDown={(e) => { if (e.key === "ArrowRight") { e.preventDefault(); setOpen(true); } }}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center gap-150",
        "rounded-small px-150 py-075 text-sm outline-none",
        "transition-colors duration-100",
        "hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground",
        inset && "pl-[2rem]",
        className,
      )}
      {...rest}
    >
      {children}
      <span className="ml-auto"><ArrowRight01Round className="size-3.5" /></span>
    </button>
  );
};

// ─── ContextMenuSubContent ────────────────────────────────────────

interface IContextMenuSubContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  zIndex?: number;
}

export const ContextMenuSubContent = (props: IContextMenuSubContentProps) => {
  const { className, children, zIndex = 51, ...rest } = props;
  const { isOpen, setOpen, triggerRef } = useContextMenuSubContext();
  const ref = useRef<HTMLDivElement>(null);
  const { shouldRender: subShouldRender, state: subState } = useDelayedUnmount(isOpen, 150);

  const { position: floatPos } = useFloatingPosition({
    anchor: { type: "ref", ref: triggerRef as React.RefObject<HTMLElement | null> },
    contentRef: ref,
    open: isOpen && subShouldRender,
    side: "right",
    align: "start",
    flip: true,
  });

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const onMouseDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node) && !triggerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [isOpen, setOpen, triggerRef]);

  // ArrowLeft to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); setOpen(false); triggerRef.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, setOpen, triggerRef]);

  if (!subShouldRender || typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={ref}
      role="menu"
      data-state={subState}
      style={{ position: "fixed", top: floatPos.top, left: floatPos.left, zIndex }}
      className={cn(
        "min-w-[8rem] overflow-hidden",
        "rounded-large border border-border bg-background p-050 shadow-lg",
        "transition-[opacity,transform] duration-150 ease-out",
        "data-[state=closed]:opacity-0 data-[state=closed]:scale-95",
        "data-[state=open]:opacity-100 data-[state=open]:scale-100",
        className,
      )}
      {...rest}
    >
      {children}
    </div>,
    document.body,
  );
};
