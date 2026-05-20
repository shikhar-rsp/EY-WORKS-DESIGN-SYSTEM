"use client";

import {
  createContext,
  useContext,
  useId,
  useRef,
  useState,
  useEffect,
} from "react";

import { createPortal } from "react-dom";
import { cva } from "class-variance-authority";

import { ArrowDown01Round } from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";
import { useDelayedUnmount } from "@/hooks/useDelayedUnmount";
import { useFloatingPosition } from "@/hooks/useFloatingPosition";

// ─── Root context ─────────────────────────────────────────────────

interface INavigationMenuContext {
  activeItem: string | null;
  setActiveItem: (id: string | null) => void;
  orientation: "horizontal" | "vertical";
}

const NavigationMenuContext = createContext<INavigationMenuContext | null>(
  null,
);

const useNavigationMenuContext = () => {
  const ctx = useContext(NavigationMenuContext);
  if (!ctx)
    throw new Error(
      "NavigationMenu sub-components must be used inside <NavigationMenu>",
    );
  return ctx;
};

// ─── Item context ─────────────────────────────────────────────────

interface INavigationMenuItemContext {
  itemId: string;
  triggerId: string;
  contentId: string;
  isOpen: boolean;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

const NavigationMenuItemContext =
  createContext<INavigationMenuItemContext | null>(null);

const useNavigationMenuItemContext = () => {
  const ctx = useContext(NavigationMenuItemContext);
  if (!ctx)
    throw new Error(
      "NavigationMenuTrigger/Content must be used inside <NavigationMenuItem>",
    );
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── navigationMenuTriggerStyle ───────────────────────────────────

export const navigationMenuTriggerStyle = cva(
  [
    "group inline-flex h-9 items-center justify-center gap-075 rounded-medium px-150",
    "text-sm font-medium text-foreground outline-none",
    "transition-colors hover:bg-muted hover:text-foreground",
    "focus:bg-muted focus:text-foreground",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
);

// ═══════════════════════════════════════════════════════════════════

// ─── NavigationMenu ───────────────────────────────────────────────

interface INavigationMenuProps extends React.HTMLAttributes<HTMLElement> {
  orientation?: "horizontal" | "vertical";
  children?: React.ReactNode;
  className?: string;
}

export const NavigationMenu = (props: INavigationMenuProps) => {
  const { orientation = "horizontal", children, className, ...rest } = props;
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Click outside closes all menus
  useEffect(() => {
    if (!activeItem) return;
    const onMouseDown = (e: MouseEvent) => {
      const nav = e.currentTarget as Document;
      void nav;
      setActiveItem(null);
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [activeItem]);

  return (
    <NavigationMenuContext.Provider
      value={{ activeItem, setActiveItem, orientation }}
    >
      <nav
        data-slot="navigation-menu"
        aria-label="Main navigation"
        className={cn(
          "relative flex items-center",
          orientation === "vertical" ? "flex-col items-start" : "flex-row",
          className,
        )}
        onMouseDown={(e) => e.stopPropagation()}
        {...rest}
      >
        {children}
      </nav>
    </NavigationMenuContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── NavigationMenuList ───────────────────────────────────────────

interface INavigationMenuListProps extends React.HTMLAttributes<HTMLUListElement> {
  children?: React.ReactNode;
  className?: string;
}

export const NavigationMenuList = (props: INavigationMenuListProps) => {
  const { children, className, ...rest } = props;
  const { orientation } = useNavigationMenuContext();

  return (
    <ul
      data-slot="navigation-menu-list"
      className={cn(
        "flex list-none items-center gap-050",
        orientation === "vertical" && "flex-col items-start",
        className,
      )}
      {...rest}
    >
      {children}
    </ul>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── NavigationMenuItem ───────────────────────────────────────────

interface INavigationMenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children?: React.ReactNode;
  className?: string;
}

export const NavigationMenuItem = (props: INavigationMenuItemProps) => {
  const { children, className, ...rest } = props;
  const { activeItem } = useNavigationMenuContext();
  const uid = useId();
  const itemId = `nav-item-${uid}`;
  const triggerId = `nav-trigger-${uid}`;
  const contentId = `nav-content-${uid}`;
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const isOpen = activeItem === itemId;

  return (
    <NavigationMenuItemContext.Provider
      value={{ itemId, triggerId, contentId, isOpen, triggerRef }}
    >
      <li
        data-slot="navigation-menu-item"
        className={cn(className)}
        {...rest}
      >
        {children}
      </li>
    </NavigationMenuItemContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── NavigationMenuTrigger ────────────────────────────────────────

interface INavigationMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export const NavigationMenuTrigger = (props: INavigationMenuTriggerProps) => {
  const { children, className, onClick, ...rest } = props;
  const { setActiveItem } = useNavigationMenuContext();
  const { itemId, triggerId, contentId, isOpen, triggerRef } =
    useNavigationMenuItemContext();

  return (
    <button
      ref={triggerRef}
      id={triggerId}
      type="button"
      data-slot="navigation-menu-trigger"
      aria-expanded={isOpen}
      aria-haspopup="true"
      aria-controls={contentId}
      onClick={(e) => {
        setActiveItem(isOpen ? null : itemId);
        onClick?.(e);
      }}
      className={cn(
        navigationMenuTriggerStyle(),
        isOpen && "bg-muted",
        className,
      )}
      {...rest}
    >
      {children}
      <span
        className={cn(
          "inline-flex transition-transform duration-200",
          isOpen && "rotate-180",
        )}
        aria-hidden="true"
      >
        <ArrowDown01Round className="size-3.5" />
      </span>
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── NavigationMenuLink ───────────────────────────────────────────

interface INavigationMenuLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const NavigationMenuLink = (props: INavigationMenuLinkProps) => {
  const { active = false, children, className, ...rest } = props;
  return (
    <a
      data-slot="navigation-menu-link"
      data-active={active || undefined}
      aria-current={active ? "page" : undefined}
      className={cn(
        "inline-flex h-9 items-center rounded-medium px-150 text-sm font-medium text-foreground",
        "transition-colors hover:bg-muted hover:text-foreground",
        "focus:outline-none focus:ring-2 focus:ring-ring",
        active && "bg-muted",
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── NavigationMenuContent ────────────────────────────────────────

interface INavigationMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  zIndex?: number;
}

export const NavigationMenuContent = (props: INavigationMenuContentProps) => {
  const { children, className, zIndex = 50, ...rest } = props;
  const { isOpen, triggerId, contentId, triggerRef } = useNavigationMenuItemContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const { shouldRender, state } = useDelayedUnmount(isOpen, 150);

  const { position: floatPos } = useFloatingPosition({
    anchor: { type: "ref", ref: triggerRef as React.RefObject<HTMLElement | null> },
    contentRef,
    open: isOpen && shouldRender,
    side: "bottom",
    align: "start",
    sideOffset: 4,
  });

  if (!shouldRender || typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={contentRef}
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      data-slot="navigation-menu-content"
      data-state={state}
      style={{ position: "fixed", top: floatPos.top, left: floatPos.left, zIndex }}
      className={cn(
        "min-w-48",
        "rounded-large border border-border bg-background p-100 shadow-lg",
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

// ═══════════════════════════════════════════════════════════════════

// ─── NavigationMenuViewport ───────────────────────────────────────

interface INavigationMenuViewportProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const NavigationMenuViewport = (props: INavigationMenuViewportProps) => {
  const { className, ...rest } = props;
  return (
    <div
      data-slot="navigation-menu-viewport"
      className={cn("relative mt-050", className)}
      {...rest}
    />
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── NavigationMenuIndicator ──────────────────────────────────────

interface INavigationMenuIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const NavigationMenuIndicator = (
  props: INavigationMenuIndicatorProps,
) => {
  const { className, ...rest } = props;
  return (
    <div
      data-slot="navigation-menu-indicator"
      aria-hidden="true"
      className={cn(
        "absolute bottom-0 left-0 z-1 h-0.5 w-full rounded-full bg-primary",
        "transition-[transform,width] duration-200",
        className,
      )}
      {...rest}
    />
  );
};
