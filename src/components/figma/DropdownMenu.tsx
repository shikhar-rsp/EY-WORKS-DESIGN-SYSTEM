"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

import { ArrowRight01Round, Tick02 } from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";
import { useDelayedUnmount } from "@/hooks/useDelayedUnmount";
import { useFloatingPosition } from "@/hooks/useFloatingPosition";

const ITEM_SELECTOR = [
  '[role="menuitem"]:not([disabled]):not([data-disabled="true"])',
  '[role="menuitemcheckbox"]:not([disabled]):not([data-disabled="true"])',
  '[role="menuitemradio"]:not([disabled]):not([data-disabled="true"])',
].join(",");

// ─── Root Context ──────────────────────────────────────────────────

interface IDropdownMenuContext {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  menuId: string;
}

const DropdownMenuContext = createContext<IDropdownMenuContext | null>(null);

const useDropdownMenuContext = () => {
  const ctx = useContext(DropdownMenuContext);
  if (!ctx) throw new Error("DropdownMenu sub-components must be used inside <DropdownMenu>");
  return ctx;
};

// ─── Sub Context ──────────────────────────────────────────────────

interface IDropdownSubContext {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement | null>;
}

const DropdownSubContext = createContext<IDropdownSubContext | null>(null);

const useDropdownSubContext = () => {
  const ctx = useContext(DropdownSubContext);
  if (!ctx) throw new Error("DropdownMenuSub sub-components must be used inside <DropdownMenuSub>");
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── DropdownMenu root ────────────────────────────────────────────

interface IDropdownMenuProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

export const DropdownMenu = (props: IDropdownMenuProps) => {
  const { open: controlledOpen, defaultOpen = false, onOpenChange, children } = props;
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const triggerRef = useRef<HTMLElement | null>(null);
  const menuId = useId();

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const setOpen = useCallback(
    (next: boolean) => {
      if (controlledOpen === undefined) setInternalOpen(next);
      onOpenChange?.(next);
    },
    [controlledOpen, onOpenChange],
  );

  return (
    <DropdownMenuContext.Provider value={{ isOpen, setOpen, triggerRef, menuId }}>
      <div style={{ display: "contents" }}>{children}</div>
    </DropdownMenuContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── DropdownMenuPortal ───────────────────────────────────────────

interface IDropdownMenuPortalProps {
  children?: React.ReactNode;
}

export const DropdownMenuPortal = (props: IDropdownMenuPortalProps) => {
  if (typeof document === "undefined") return null;
  return createPortal(props.children, document.body);
};

// ═══════════════════════════════════════════════════════════════════

// ─── DropdownMenuTrigger ──────────────────────────────────────────

interface IDropdownMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const DropdownMenuTrigger = (props: IDropdownMenuTriggerProps) => {
  const { asChild = false, children, className, onClick, ...rest } = props;
  const { isOpen, setOpen, triggerRef, menuId } = useDropdownMenuContext();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setOpen(!isOpen);
    (onClick as React.MouseEventHandler<HTMLElement> | undefined)?.(e as React.MouseEvent<HTMLButtonElement>);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      ref: triggerRef,
      "aria-expanded": isOpen,
      "aria-haspopup": "menu",
      "aria-controls": menuId,
      onClick: handleClick,
    });
  }

  return (
    <button
      ref={triggerRef as React.RefObject<HTMLButtonElement>}
      type="button"
      aria-expanded={isOpen}
      aria-haspopup="menu"
      aria-controls={menuId}
      onClick={(e) => { setOpen(!isOpen); onClick?.(e); }}
      className={cn("cursor-pointer", className)}
      {...rest}
    >
      {children}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── DropdownMenuContent ──────────────────────────────────────────

type AlignTypes = "start" | "center" | "end";
type SideTypes = "top" | "right" | "bottom" | "left";

interface IDropdownMenuContentProps {
  align?: AlignTypes;
  side?: SideTypes;
  sideOffset?: number;
  zIndex?: number;
  className?: string;
  children?: React.ReactNode;
}

export const DropdownMenuContent = (props: IDropdownMenuContentProps) => {
  const { align = "start", side = "bottom", sideOffset = 4, zIndex = 50, className, children } = props;
  const { isOpen, setOpen, triggerRef, menuId } = useDropdownMenuContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const typeaheadRef = useRef("");
  const typeaheadTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // shouldRender must be declared before the positioning hook so the content
  // div is in the DOM when useFloatingPosition's useLayoutEffect fires.
  const { shouldRender, state } = useDelayedUnmount(isOpen, 150);

  const { position } = useFloatingPosition({
    anchor: { type: "ref", ref: triggerRef as React.RefObject<HTMLElement | null> },
    contentRef,
    open: isOpen && shouldRender,
    side,
    align,
    sideOffset,
  });

  // Capture focus target before menu opens
  useEffect(() => {
    if (isOpen && shouldRender) {
      returnFocusRef.current = document.activeElement as HTMLElement;
    }
  }, [isOpen, shouldRender]);

  // Focus first item on open
  useEffect(() => {
    if (!isOpen || !contentRef.current) return;
    const first = contentRef.current.querySelector<HTMLElement>(ITEM_SELECTOR);
    first?.focus();
  }, [isOpen]);

  // Click outside
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

  // Keyboard: Escape + Arrow nav + typeahead
  useEffect(() => {
    if (!isOpen || !contentRef.current) return;

    const onKey = (e: KeyboardEvent) => {
      const items = Array.from(
        contentRef.current?.querySelectorAll<HTMLElement>(ITEM_SELECTOR) ?? [],
      );
      const idx = items.indexOf(document.activeElement as HTMLElement);

      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        returnFocusRef.current?.focus();
      } else if (e.key === "ArrowDown") {
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
      } else if (/^[a-z]$/i.test(e.key)) {
        typeaheadRef.current += e.key.toLowerCase();
        if (typeaheadTimerRef.current) clearTimeout(typeaheadTimerRef.current);
        typeaheadTimerRef.current = setTimeout(() => { typeaheadRef.current = ""; }, 300);
        const match = items.find(
          (item) =>
            (item.textContent ?? "").toLowerCase().trimStart().startsWith(typeaheadRef.current),
        );
        match?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, setOpen]);

  // Restore focus on close
  useEffect(() => {
    if (!isOpen) {
      returnFocusRef.current?.focus();
      returnFocusRef.current = null;
    }
  }, [isOpen]);

  if (!shouldRender || typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={contentRef}
      id={menuId}
      role="menu"
      data-state={state}
      aria-orientation="vertical"
      style={{ position: "fixed", top: position.top, left: position.left, zIndex }}
      className={cn(
        "min-w-[8rem] overflow-hidden rounded-large border border-border bg-background p-050 shadow-lg",
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

// ─── DropdownMenuGroup ────────────────────────────────────────────

interface IDropdownMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const DropdownMenuGroup = (props: IDropdownMenuGroupProps) => {
  const { children, className, ...rest } = props;
  return (
    <div role="group" className={cn(className)} {...rest}>
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── DropdownMenuLabel ────────────────────────────────────────────

interface IDropdownMenuLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const DropdownMenuLabel = (props: IDropdownMenuLabelProps) => {
  const { inset = false, children, className, ...rest } = props;
  return (
    <div
      className={cn(
        "px-150 py-075 text-xs font-semibold text-muted-foreground",
        inset && "pl-[2rem]",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── DropdownMenuItem ─────────────────────────────────────────────

type DropdownMenuItemVariantTypes = "default" | "destructive";

interface IDropdownMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  inset?: boolean;
  variant?: DropdownMenuItemVariantTypes;
  children?: React.ReactNode;
  className?: string;
}

export const DropdownMenuItem = (props: IDropdownMenuItemProps) => {
  const { inset = false, variant = "default", children, className, onClick, disabled, ...rest } = props;
  const { setOpen } = useDropdownMenuContext();

  return (
    <button
      role="menuitem"
      type="button"
      disabled={disabled}
      data-disabled={disabled ? "true" : undefined}
      onClick={(e) => {
        if (disabled) return;
        onClick?.(e);
        setOpen(false);
      }}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center gap-150",
        "rounded-small px-150 py-075 text-sm outline-none",
        "transition-colors duration-100",
        "hover:bg-muted hover:text-foreground",
        "focus:bg-muted focus:text-foreground",
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

// ─── DropdownMenuCheckboxItem ─────────────────────────────────────

interface IDropdownMenuCheckboxItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  children?: React.ReactNode;
  className?: string;
}

export const DropdownMenuCheckboxItem = (props: IDropdownMenuCheckboxItemProps) => {
  const { checked = false, onCheckedChange, children, className, disabled, ...rest } = props;

  return (
    <button
      role="menuitemcheckbox"
      aria-checked={checked}
      type="button"
      disabled={disabled}
      data-disabled={disabled ? "true" : undefined}
      data-state={checked ? "checked" : "unchecked"}
      onClick={() => { if (!disabled) onCheckedChange?.(!checked); }}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center gap-150",
        "rounded-small py-075 pl-[2rem] pr-150 text-sm outline-none",
        "transition-colors duration-100",
        "hover:bg-muted hover:text-foreground",
        "focus:bg-muted focus:text-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
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

// ─── DropdownMenuRadioGroup ───────────────────────────────────────

interface IDropdownMenuRadioGroupContext {
  value: string;
  onValueChange: (value: string) => void;
}

const DropdownMenuRadioGroupContext = createContext<IDropdownMenuRadioGroupContext | null>(null);

const useDropdownMenuRadioGroupContext = () => {
  const ctx = useContext(DropdownMenuRadioGroupContext);
  if (!ctx)
    throw new Error("DropdownMenuRadioItem must be used inside <DropdownMenuRadioGroup>");
  return ctx;
};

interface IDropdownMenuRadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onValueChange?: (value: string) => void;
  children?: React.ReactNode;
  className?: string;
}

export const DropdownMenuRadioGroup = (props: IDropdownMenuRadioGroupProps) => {
  const { value = "", onValueChange = () => {}, children, className, ...rest } = props;
  return (
    <DropdownMenuRadioGroupContext.Provider value={{ value, onValueChange }}>
      <div role="group" className={cn(className)} {...rest}>
        {children}
      </div>
    </DropdownMenuRadioGroupContext.Provider>
  );
};

interface IDropdownMenuRadioItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children?: React.ReactNode;
  className?: string;
}

export const DropdownMenuRadioItem = (props: IDropdownMenuRadioItemProps) => {
  const { value, children, className, disabled, ...rest } = props;
  const { value: groupValue, onValueChange } = useDropdownMenuRadioGroupContext();
  const checked = groupValue === value;

  return (
    <button
      role="menuitemradio"
      aria-checked={checked}
      type="button"
      disabled={disabled}
      data-disabled={disabled ? "true" : undefined}
      data-state={checked ? "checked" : "unchecked"}
      onClick={() => { if (!disabled) onValueChange(value); }}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center gap-150",
        "rounded-small py-075 pl-[2rem] pr-150 text-sm outline-none",
        "transition-colors duration-100",
        "hover:bg-muted hover:text-foreground",
        "focus:bg-muted focus:text-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
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

// ─── DropdownMenuSeparator ────────────────────────────────────────

interface IDropdownMenuSeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  className?: string;
}

export const DropdownMenuSeparator = (props: IDropdownMenuSeparatorProps) => {
  const { className, ...rest } = props;
  return (
    <hr
      role="separator"
      aria-orientation="horizontal"
      className={cn("-mx-050 my-050 border-t border-border", className)}
      {...rest}
    />
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── DropdownMenuShortcut ─────────────────────────────────────────

interface IDropdownMenuShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  className?: string;
}

export const DropdownMenuShortcut = (props: IDropdownMenuShortcutProps) => {
  const { children, className, ...rest } = props;
  return (
    <span
      className={cn("ml-auto pl-200 text-xs tracking-widest text-muted-foreground", className)}
      {...rest}
    >
      {children}
    </span>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── DropdownMenuSub ──────────────────────────────────────────────

interface IDropdownMenuSubProps {
  children?: React.ReactNode;
}

export const DropdownMenuSub = (props: IDropdownMenuSubProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);

  return (
    <DropdownSubContext.Provider value={{ isOpen, setOpen: setIsOpen, triggerRef }}>
      {props.children}
    </DropdownSubContext.Provider>
  );
};

interface IDropdownMenuSubTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  inset?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const DropdownMenuSubTrigger = (props: IDropdownMenuSubTriggerProps) => {
  const { inset = false, children, className, ...rest } = props;
  const { isOpen, setOpen, triggerRef } = useDropdownSubContext();

  return (
    <button
      ref={triggerRef as React.RefObject<HTMLButtonElement>}
      role="menuitem"
      aria-haspopup="menu"
      aria-expanded={isOpen}
      data-state={isOpen ? "open" : "closed"}
      type="button"
      onClick={() => setOpen(!isOpen)}
      onMouseEnter={() => setOpen(true)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }
      }}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center gap-150",
        "rounded-small px-150 py-075 text-sm outline-none",
        "transition-colors duration-100",
        "hover:bg-muted hover:text-foreground",
        "focus:bg-muted focus:text-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
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

interface IDropdownMenuSubContentProps {
  zIndex?: number;
  className?: string;
  children?: React.ReactNode;
}

export const DropdownMenuSubContent = (props: IDropdownMenuSubContentProps) => {
  const { zIndex = 51, className, children } = props;
  const { isOpen, setOpen, triggerRef } = useDropdownSubContext();
  const ref = useRef<HTMLDivElement>(null);

  const { shouldRender: subShouldRender, state: subState } = useDelayedUnmount(isOpen, 150);

  const { position } = useFloatingPosition({
    anchor: { type: "ref", ref: triggerRef as React.RefObject<HTMLElement | null> },
    contentRef: ref,
    open: isOpen && subShouldRender,
    side: "right",
    align: "start",
    flip: true,
  });

  useEffect(() => {
    if (!isOpen) return;
    const onMouseDown = (e: MouseEvent) => {
      if (
        !ref.current?.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      )
        setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, setOpen, triggerRef]);

  if (!subShouldRender || typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={ref}
      role="menu"
      data-state={subState}
      style={{ position: "fixed", top: position.top, left: position.left, zIndex }}
      className={cn(
        "min-w-[8rem] overflow-hidden",
        "rounded-large border border-border bg-background p-050 shadow-lg",
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
