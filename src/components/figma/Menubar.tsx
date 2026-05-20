"use client";

import {
  createContext,
  useCallback,
  useContext,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  useEffect,
} from "react";

import { createPortal } from "react-dom";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { useDelayedUnmount } from "@/hooks/useDelayedUnmount";
import { ArrowRight01Round, Tick02 } from "@/components/fragments/icons/catalog";

// ─── Shared helpers ────────────────────────────────────────────────

const ITEM_SELECTOR = [
  '[role="menuitem"]:not([disabled]):not([data-disabled="true"])',
  '[role="menuitemcheckbox"]:not([disabled]):not([data-disabled="true"])',
  '[role="menuitemradio"]:not([disabled]):not([data-disabled="true"])',
].join(",");

type AlignTypes = "start" | "center" | "end";
type SideTypes = "top" | "right" | "bottom" | "left";

// ─── Menubar root context ─────────────────────────────────────────

interface IMenubarContext {
  openMenu: string | null;
  setOpenMenu: (id: string | null) => void;
}

const MenubarContext = createContext<IMenubarContext | null>(null);

const useMenubarContext = () => {
  const ctx = useContext(MenubarContext);
  if (!ctx) throw new Error("Menubar sub-components must be used inside <Menubar>");
  return ctx;
};

// ─── Menu item context ────────────────────────────────────────────

interface IMenubarMenuContext {
  menuId: string;
  triggerId: string;
  contentId: string;
  isOpen: boolean;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

const MenubarMenuContext = createContext<IMenubarMenuContext | null>(null);

const useMenubarMenuContext = () => {
  const ctx = useContext(MenubarMenuContext);
  if (!ctx) throw new Error("MenubarTrigger/Content must be used inside <MenubarMenu>");
  return ctx;
};

// ─── Radio group context ──────────────────────────────────────────

interface IMenubarRadioGroupContext {
  value: string;
  onValueChange: (v: string) => void;
}

const MenubarRadioGroupContext = createContext<IMenubarRadioGroupContext | null>(null);

const useMenubarRadioGroupContext = () => {
  const ctx = useContext(MenubarRadioGroupContext);
  if (!ctx) throw new Error("MenubarRadioItem must be used inside <MenubarRadioGroup>");
  return ctx;
};

// ─── Sub-menu context ─────────────────────────────────────────────

interface IMenubarSubContext {
  isOpen: boolean;
  setOpen: (v: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

const MenubarSubContext = createContext<IMenubarSubContext | null>(null);

const useMenubarSubContext = () => {
  const ctx = useContext(MenubarSubContext);
  if (!ctx) throw new Error("MenubarSubTrigger/Content must be used inside <MenubarSub>");
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── Menubar root ─────────────────────────────────────────────────

interface IMenubarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Menubar = (props: IMenubarProps) => {
  const { children, className, ...rest } = props;
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openMenu) return;
    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as Node;
      // Close only when clicking outside the nav AND outside any portal content
      if (
        navRef.current?.contains(target) ||
        (target as Element).closest?.("[data-menubar-portal]")
      )
        return;
      setOpenMenu(null);
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [openMenu]);

  return (
    <MenubarContext.Provider value={{ openMenu, setOpenMenu }}>
      <div
        ref={navRef}
        data-slot="menubar"
        role="menubar"
        className={cn(
          "flex h-9 items-center gap-050 rounded-medium border border-border bg-background px-050",
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    </MenubarContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── MenubarMenu ──────────────────────────────────────────────────

interface IMenubarMenuProps {
  value?: string;
  children?: React.ReactNode;
}

export const MenubarMenu = (props: IMenubarMenuProps) => {
  const { value: providedValue, children } = props;
  const { openMenu } = useMenubarContext();
  const uid = useId();
  const menuId = providedValue ?? `menubar-${uid}`;
  const triggerId = `menubar-trigger-${uid}`;
  const contentId = `menubar-content-${uid}`;
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const isOpen = openMenu === menuId;

  return (
    <MenubarMenuContext.Provider value={{ menuId, triggerId, contentId, isOpen, triggerRef }}>
      <div data-slot="menubar-menu" className="relative">{children}</div>
    </MenubarMenuContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── MenubarPortal ────────────────────────────────────────────────

interface IMenubarPortalProps {
  children?: React.ReactNode;
}

export const MenubarPortal = (props: IMenubarPortalProps) => {
  if (typeof document === "undefined") return null;
  return createPortal(props.children, document.body);
};

// ═══════════════════════════════════════════════════════════════════

// ─── MenubarTrigger ───────────────────────────────────────────────

interface IMenubarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export const MenubarTrigger = (props: IMenubarTriggerProps) => {
  const { children, className, onClick, ...rest } = props;
  const { openMenu, setOpenMenu } = useMenubarContext();
  const { menuId, triggerId, contentId, isOpen, triggerRef } = useMenubarMenuContext();

  return (
    <button
      ref={triggerRef}
      id={triggerId}
      data-slot="menubar-trigger"
      data-state={isOpen ? "open" : "closed"}
      type="button"
      role="menuitem"
      aria-haspopup="menu"
      aria-expanded={isOpen}
      aria-controls={contentId}
      onClick={(e) => {
        setOpenMenu(isOpen ? null : menuId);
        onClick?.(e);
      }}
      onMouseEnter={() => {
        if (openMenu && openMenu !== menuId) setOpenMenu(menuId);
      }}
      className={cn(
        "flex cursor-pointer select-none items-center rounded-small px-150 py-050",
        "text-sm font-medium text-foreground outline-none",
        "transition-colors duration-100",
        "hover:bg-muted focus:bg-muted",
        isOpen && "bg-muted",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── MenubarContent ───────────────────────────────────────────────

interface IMenubarContentProps {
  side?: SideTypes;
  sideOffset?: number;
  align?: AlignTypes;
  alignOffset?: number;
  className?: string;
  children?: React.ReactNode;
}

export const MenubarContent = (props: IMenubarContentProps) => {
  const { side = "bottom", sideOffset = 4, align = "start", alignOffset = 0, className, children } = props;
  const { isOpen, triggerRef, triggerId, contentId } = useMenubarMenuContext();
  const { setOpenMenu } = useMenubarContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const { shouldRender, state } = useDelayedUnmount(isOpen, 150);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const typeaheadRef = useRef("");
  const typeaheadTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !contentRef.current) return;
    const tr = triggerRef.current.getBoundingClientRect();
    const cr = contentRef.current.getBoundingClientRect();

    let top = 0;
    let left = 0;

    if (side === "bottom") {
      top = tr.bottom + sideOffset;
    } else if (side === "top") {
      top = tr.top - cr.height - sideOffset;
    } else if (side === "right") {
      top = tr.top + alignOffset;
      left = tr.right + sideOffset;
    } else {
      top = tr.top + alignOffset;
      left = tr.left - cr.width - sideOffset;
    }

    if (side === "bottom" || side === "top") {
      if (align === "start") left = tr.left + alignOffset;
      else if (align === "center") left = tr.left + tr.width / 2 - cr.width / 2;
      else left = tr.right - cr.width - alignOffset;
    }

    // Clamp to viewport so content never overflows off-screen
    const pad = 8;
    if (left + cr.width > window.innerWidth - pad) left = window.innerWidth - cr.width - pad;
    if (left < pad) left = pad;
    if (top + cr.height > window.innerHeight - pad) top = window.innerHeight - cr.height - pad;
    if (top < pad) top = pad;

    setPosition({ top, left });
  }, [side, sideOffset, align, alignOffset, triggerRef]);

  // Position on open (after mount so contentRef is populated)
  useLayoutEffect(() => {
    if (!isOpen || !shouldRender) return;
    returnFocusRef.current = document.activeElement as HTMLElement;
    updatePosition();
  }, [isOpen, shouldRender, updatePosition]);

  // Reposition on scroll / resize
  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen, updatePosition]);

  // Focus first item on open
  useEffect(() => {
    if (!isOpen || !contentRef.current) return;
    const first = contentRef.current.querySelector<HTMLElement>(ITEM_SELECTOR);
    first?.focus();
  }, [isOpen]);

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
        setOpenMenu(null);
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
          (item) => (item.textContent ?? "").toLowerCase().trimStart().startsWith(typeaheadRef.current),
        );
        match?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, setOpenMenu]);

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
      id={contentId}
      role="menu"
      aria-labelledby={triggerId}
      data-slot="menubar-content"
      data-menubar-portal=""
      data-state={state}
      style={{ position: "fixed", top: position.top, left: position.left, zIndex: 50 }}
      className={cn(
        "min-w-[12rem] overflow-hidden rounded-large border border-border bg-background p-050 shadow-lg",
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

// ─── MenubarGroup ─────────────────────────────────────────────────

interface IMenubarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const MenubarGroup = (props: IMenubarGroupProps) => {
  const { children, className, ...rest } = props;
  return (
    <div data-slot="menubar-group" role="group" className={cn(className)} {...rest}>
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── MenubarItem ──────────────────────────────────────────────────

type MenubarItemVariantTypes = "default" | "destructive";

const menubarItemVariants = cva(
  [
    "relative flex w-full cursor-pointer select-none items-center gap-150",
    "rounded-small px-150 py-075 text-sm outline-none",
    "transition-colors duration-100",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground",
        destructive: "text-destructive hover:bg-destructive-subtle hover:text-destructive focus:bg-destructive-subtle",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface IMenubarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  inset?: boolean;
  variant?: MenubarItemVariantTypes;
  children?: React.ReactNode;
  className?: string;
}

export const MenubarItem = (props: IMenubarItemProps) => {
  const { inset = false, variant = "default", children, className, onClick, disabled, ...rest } = props;
  const { setOpenMenu } = useMenubarContext();

  return (
    <button
      data-slot="menubar-item"
      role="menuitem"
      type="button"
      disabled={disabled}
      data-disabled={disabled ? "true" : undefined}
      onClick={(e) => {
        if (disabled) return;
        onClick?.(e);
        setOpenMenu(null);
      }}
      className={cn(menubarItemVariants({ variant }), inset && "pl-[2rem]", className)}
      {...rest}
    >
      {children}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── MenubarLabel ─────────────────────────────────────────────────

interface IMenubarLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const MenubarLabel = (props: IMenubarLabelProps) => {
  const { inset = false, children, className, ...rest } = props;
  return (
    <div
      data-slot="menubar-label"
      className={cn("px-150 py-075 text-xs font-semibold text-muted-foreground", inset && "pl-[2rem]", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── MenubarSeparator ─────────────────────────────────────────────

interface IMenubarSeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  className?: string;
}

export const MenubarSeparator = (props: IMenubarSeparatorProps) => {
  const { className, ...rest } = props;
  return (
    <hr
      data-slot="menubar-separator"
      role="separator"
      aria-orientation="horizontal"
      className={cn("-mx-050 my-050 border-t border-border", className)}
      {...rest}
    />
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── MenubarShortcut ──────────────────────────────────────────────

interface IMenubarShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  className?: string;
}

export const MenubarShortcut = (props: IMenubarShortcutProps) => {
  const { children, className, ...rest } = props;
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn("ml-auto pl-200 text-xs tracking-widest text-muted-foreground", className)}
      {...rest}
    >
      {children}
    </span>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── MenubarCheckboxItem ──────────────────────────────────────────

interface IMenubarCheckboxItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  children?: React.ReactNode;
  className?: string;
}

export const MenubarCheckboxItem = (props: IMenubarCheckboxItemProps) => {
  const { checked = false, onCheckedChange, children, className, disabled, ...rest } = props;
  return (
    <button
      data-slot="menubar-checkbox-item"
      role="menuitemcheckbox"
      aria-checked={checked}
      data-state={checked ? "checked" : "unchecked"}
      type="button"
      disabled={disabled}
      data-disabled={disabled ? "true" : undefined}
      onClick={() => { if (!disabled) onCheckedChange?.(!checked); }}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center gap-150",
        "rounded-small py-075 pl-[2rem] pr-150 text-sm outline-none",
        "transition-colors duration-100",
        "hover:bg-muted hover:text-foreground focus:bg-muted",
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

// ─── MenubarRadioGroup ────────────────────────────────────────────

interface IMenubarRadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onValueChange?: (v: string) => void;
  children?: React.ReactNode;
  className?: string;
}

export const MenubarRadioGroup = (props: IMenubarRadioGroupProps) => {
  const { value = "", onValueChange = () => {}, children, className, ...rest } = props;
  return (
    <MenubarRadioGroupContext.Provider value={{ value, onValueChange }}>
      <div data-slot="menubar-radio-group" role="group" className={cn(className)} {...rest}>
        {children}
      </div>
    </MenubarRadioGroupContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── MenubarRadioItem ─────────────────────────────────────────────

interface IMenubarRadioItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children?: React.ReactNode;
  className?: string;
}

export const MenubarRadioItem = (props: IMenubarRadioItemProps) => {
  const { value, children, className, disabled, ...rest } = props;
  const { value: groupValue, onValueChange } = useMenubarRadioGroupContext();
  const checked = groupValue === value;

  return (
    <button
      data-slot="menubar-radio-item"
      role="menuitemradio"
      aria-checked={checked}
      data-state={checked ? "checked" : "unchecked"}
      type="button"
      disabled={disabled}
      data-disabled={disabled ? "true" : undefined}
      onClick={() => { if (!disabled) onValueChange(value); }}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center",
        "rounded-small py-075 pl-[2rem] pr-150 text-sm outline-none",
        "transition-colors duration-100",
        "hover:bg-muted hover:text-foreground focus:bg-muted",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...rest}
    >
      <span className="absolute left-150 flex size-3.5 items-center justify-center">
        {checked && <span aria-hidden="true" className="size-2 rounded-full bg-current" />}
      </span>
      {children}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── MenubarSub ───────────────────────────────────────────────────

interface IMenubarSubProps {
  children?: React.ReactNode;
}

export const MenubarSub = (props: IMenubarSubProps) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  return (
    <MenubarSubContext.Provider value={{ isOpen, setOpen: setIsOpen, triggerRef }}>
      <div data-slot="menubar-sub">{children}</div>
    </MenubarSubContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── MenubarSubTrigger ────────────────────────────────────────────

interface IMenubarSubTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  inset?: boolean;
  variant?: MenubarItemVariantTypes;
  children?: React.ReactNode;
  className?: string;
}

export const MenubarSubTrigger = (props: IMenubarSubTriggerProps) => {
  const { inset = false, variant = "default", children, className, ...rest } = props;
  const { isOpen, setOpen, triggerRef } = useMenubarSubContext();

  return (
    <button
      ref={triggerRef}
      data-slot="menubar-sub-trigger"
      data-state={isOpen ? "open" : "closed"}
      role="menuitem"
      aria-haspopup="menu"
      aria-expanded={isOpen}
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
      className={cn(menubarItemVariants({ variant }), inset && "pl-[2rem]", className)}
      {...rest}
    >
      {children}
      <span className="ml-auto">
        <ArrowRight01Round className="size-3.5" />
      </span>
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── MenubarSubContent ────────────────────────────────────────────

interface IMenubarSubContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export const MenubarSubContent = (props: IMenubarSubContentProps) => {
  const { className, children, ...rest } = props;
  const { isOpen, setOpen, triggerRef } = useMenubarSubContext();
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const { shouldRender: subShouldRender, state: subState } = useDelayedUnmount(isOpen, 150);

  useLayoutEffect(() => {
    if (!isOpen || !triggerRef.current) return;
    const tr = triggerRef.current.getBoundingClientRect();
    let top = tr.top;
    let left = tr.right + 4;

    // Clamp to viewport so sub-content never overflows off-screen
    const cr = ref.current?.getBoundingClientRect();
    if (cr) {
      const pad = 8;
      // Flip to left side of trigger if it would overflow the right edge
      if (left + cr.width > window.innerWidth - pad) left = tr.left - cr.width - 4;
      if (left < pad) left = pad;
      if (top + cr.height > window.innerHeight - pad) top = window.innerHeight - cr.height - pad;
      if (top < pad) top = pad;
    }

    setPosition({ top, left });
  }, [isOpen, triggerRef]);

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
      data-slot="menubar-sub-content"
      data-menubar-portal=""
      data-state={subState}
      style={{ position: "fixed", top: position.top, left: position.left, zIndex: 51 }}
      className={cn(
        "min-w-[8rem] overflow-hidden rounded-large border border-border bg-background p-050 shadow-lg",
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
