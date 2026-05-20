"use client";

import {
  createContext,
  useCallback,
  useContext,
  useId,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────

type TabsVariantTypes = "underlined" | "outlined" | "gradient";
type TabsOrientationTypes = "horizontal" | "vertical";

// ─── Root Context ─────────────────────────────────────────────────

interface ITabsContext {
  value: string;
  onValueChange: (value: string) => void;
  orientation: TabsOrientationTypes;
  baseId: string;
}

const TabsContext = createContext<ITabsContext | null>(null);

const useTabsContext = () => {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error("Tabs sub-components must be used inside <Tabs>");
  }
  return ctx;
};

// ─── List Context (carries variant to triggers) ───────────────────

interface ITabsListContext {
  variant: TabsVariantTypes;
  listRef: React.RefObject<HTMLDivElement | null>;
}

const TabsListContext = createContext<ITabsListContext | null>(null);

const useTabsListContext = () => {
  const ctx = useContext(TabsListContext);
  if (!ctx) {
    throw new Error("TabsTrigger must be used inside <TabsList>");
  }
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── Tabs (root) ──────────────────────────────────────────────────

interface ITabsProps extends Omit<HTMLAttributes<HTMLDivElement>, "value" | "defaultValue" | "onChange"> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: TabsOrientationTypes;
  children?: ReactNode;
  className?: string;
}

export const Tabs = (props: ITabsProps) => {
  const {
    value: controlledValue,
    defaultValue = "",
    onValueChange,
    orientation = "horizontal",
    children,
    className,
    ...rest
  } = props;

  const [internalValue, setInternalValue] = useState(defaultValue);
  const baseId = useId();

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const onValueChangeFn = useCallback(
    (v: string) => {
      if (!isControlled) setInternalValue(v);
      onValueChange?.(v);
    },
    [isControlled, onValueChange],
  );

  return (
    <TabsContext.Provider value={{ value, onValueChange: onValueChangeFn, orientation, baseId }}>
      <div
        data-orientation={orientation}
        className={cn("flex min-w-0", orientation === "vertical" ? "flex-row" : "flex-col", className)}
        {...rest}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── TabsList ─────────────────────────────────────────────────────

const tabsListVariants = cva(
  ["inline-flex items-center max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"].join(" "),
  {
    variants: {
      variant: {
        underlined: ["border-b border-border w-full"].join(" "),
        outlined: ["gap-100 p-050 rounded-full bg-muted"].join(" "),
        gradient: ["border-b border-border bg-muted w-full"].join(" "),
      },
    },
    defaultVariants: { variant: "underlined" },
  },
);

interface ITabsListProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style for the list — Design System extension, not part of shadcn's API.
   * @default "underlined"
   */
  variant?: TabsVariantTypes;
  children?: ReactNode;
  className?: string;
}

export const TabsList = (props: ITabsListProps) => {
  const { variant = "underlined", children, className, ...rest } = props;
  const { orientation } = useTabsContext();
  const listRef = useRef<HTMLDivElement | null>(null);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const triggers = Array.from(
        listRef.current?.querySelectorAll<HTMLButtonElement>("button[role='tab']:not([disabled])") ?? [],
      );
      const current = document.activeElement as HTMLButtonElement;
      const idx = triggers.indexOf(current);
      if (idx === -1) return;

      const isHorizontal = orientation === "horizontal";
      const prevKey = isHorizontal ? "ArrowLeft" : "ArrowUp";
      const nextKey = isHorizontal ? "ArrowRight" : "ArrowDown";

      if (e.key === prevKey) {
        e.preventDefault();
        triggers[(idx - 1 + triggers.length) % triggers.length]?.focus();
      } else if (e.key === nextKey) {
        e.preventDefault();
        triggers[(idx + 1) % triggers.length]?.focus();
      } else if (e.key === "Home") {
        e.preventDefault();
        triggers[0]?.focus();
      } else if (e.key === "End") {
        e.preventDefault();
        triggers[triggers.length - 1]?.focus();
      }
    },
    [orientation],
  );

  return (
    <TabsListContext.Provider value={{ variant, listRef }}>
      <div
        ref={listRef}
        role="tablist"
        aria-orientation={orientation}
        data-orientation={orientation}
        onKeyDown={handleKeyDown}
        className={cn(tabsListVariants({ variant }), className)}
        {...rest}
      >
        {children}
      </div>
    </TabsListContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── TabsTrigger ──────────────────────────────────────────────────

const tabsTriggerVariants = cva(
  [
    "relative inline-flex items-center justify-center gap-100",
    "font-lexend text-sm font-medium whitespace-nowrap",
    "transition-colors duration-150 cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        underlined: "",
        outlined: "",
        gradient: "",
      },
      isActive: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      // Underlined — inactive
      {
        variant: "underlined",
        isActive: false,
        className: [
          "text-muted-foreground px-100 py-050",
          "border-b-[3px] border-transparent -mb-px",
          "hover:border-b-border hover:text-foreground",
          "active:border-b-primary-active active:text-foreground",
          "focus-visible:rounded-small",
        ].join(" "),
      },
      // Underlined — active
      {
        variant: "underlined",
        isActive: true,
        className: [
          "text-foreground font-semibold px-100 py-050",
          "border-b-[3px] border-primary-active -mb-px",
        ].join(" "),
      },
      // Outlined — inactive
      {
        variant: "outlined",
        isActive: false,
        className: [
          "bg-transparent text-muted-foreground px-150 py-150 rounded-full",
          "hover:bg-primary-subtle hover:text-foreground",
          "active:bg-primary-subtle-pressed active:text-foreground",
        ].join(" "),
      },
      // Outlined — active
      {
        variant: "outlined",
        isActive: true,
        className: [
          "bg-primary-subtle-pressed text-foreground font-semibold",
          "px-150 py-150 rounded-full",
        ].join(" "),
      },
      // Gradient — inactive
      {
        variant: "gradient",
        isActive: false,
        className: [
          "text-muted-foreground px-100 py-2 rounded-t-medium",
          "border-b border-transparent -mb-px",
          "hover:bg-border hover:text-foreground",
          "active:bg-background active:text-foreground",
        ].join(" "),
      },
      // Gradient — active
      {
        variant: "gradient",
        isActive: true,
        className: [
          "bg-background text-foreground font-semibold px-100 py-2 rounded-t-medium",
          "border-b border-primary -mb-px",
        ].join(" "),
      },
    ],
    defaultVariants: { variant: "underlined", isActive: false },
  },
);

interface ITabsTriggerProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value"> {
  value: string;
  disabled?: boolean;
  /** Design System extension — not part of shadcn's API. */
  leftIcon?: ReactNode;
  /** Design System extension — not part of shadcn's API. */
  rightIcon?: ReactNode;
  /** Design System extension — not part of shadcn's API. */
  showErrorBadge?: boolean;
  /** Design System extension — not part of shadcn's API. */
  errorCount?: string;
  /** Design System extension — not part of shadcn's API. */
  showCommentBadge?: boolean;
  /** Design System extension — not part of shadcn's API. */
  commentCount?: string;
  children?: ReactNode;
  className?: string;
}

export const TabsTrigger = (props: ITabsTriggerProps) => {
  const {
    value,
    disabled = false,
    leftIcon,
    rightIcon,
    showErrorBadge = false,
    errorCount,
    showCommentBadge = false,
    commentCount,
    children,
    className,
    onClick,
    ...rest
  } = props;

  const { value: selectedValue, onValueChange, baseId } = useTabsContext();
  const { variant } = useTabsListContext();
  const isActive = selectedValue === value;
  const triggerId = `${baseId}-trigger-${value}`;
  const contentId = `${baseId}-content-${value}`;

  return (
    <button
      type="button"
      role="tab"
      id={triggerId}
      aria-selected={isActive}
      aria-controls={contentId}
      data-state={isActive ? "active" : "inactive"}
      disabled={disabled}
      tabIndex={isActive ? 0 : -1}
      onClick={(e) => {
        onValueChange(value);
        onClick?.(e);
      }}
      className={cn(tabsTriggerVariants({ variant, isActive }), className)}
      {...rest}
    >
      {leftIcon && <span className="flex items-center justify-center size-4">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex items-center justify-center size-4">{rightIcon}</span>}
      {showErrorBadge && (
        <span className="inline-flex items-center justify-center size-4 rounded-full bg-destructive-subtle text-destructive text-[10px] font-semibold leading-none">
          {errorCount ?? "1"}
        </span>
      )}
      {showCommentBadge && (
        <span className="inline-flex items-center justify-center size-4 rounded-full bg-accent-purple text-border-selected text-[10px] font-semibold leading-none">
          {commentCount ?? "1"}
        </span>
      )}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── TabsContent ──────────────────────────────────────────────────

interface ITabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  children?: ReactNode;
  className?: string;
}

export const TabsContent = (props: ITabsContentProps) => {
  const { value, children, className, ...rest } = props;
  const { value: selectedValue, baseId } = useTabsContext();
  const isActive = selectedValue === value;
  const triggerId = `${baseId}-trigger-${value}`;
  const contentId = `${baseId}-content-${value}`;

  if (!isActive) return null;

  return (
    <div
      id={contentId}
      role="tabpanel"
      aria-labelledby={triggerId}
      data-state="active"
      tabIndex={0}
      className={cn(
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
