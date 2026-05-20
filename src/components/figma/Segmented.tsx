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

type SegmentedSizeTypes = "sm" | "default" | "lg";

// ─── Root Context ─────────────────────────────────────────────────

interface ISegmentedContext {
  value: string;
  onValueChange: (value: string) => void;
  size: SegmentedSizeTypes;
  disabled: boolean;
  baseId: string;
}

const SegmentedContext = createContext<ISegmentedContext | null>(null);

const useSegmentedContext = () => {
  const ctx = useContext(SegmentedContext);
  if (!ctx) throw new Error("Segmented sub-components must be used inside <Segmented>");
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── Segmented (root) ─────────────────────────────────────────────

const segmentedRootVariants = cva(
  [
    "inline-flex items-center rounded-medium bg-muted p-050 gap-050",
    "font-lexend",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-8",
        default: "h-9",
        lg: "h-10",
      },
    },
    defaultVariants: { size: "default" },
  },
);

interface ISegmentedProps extends Omit<HTMLAttributes<HTMLDivElement>, "value" | "defaultValue" | "onChange"> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  size?: SegmentedSizeTypes;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}

export const Segmented = (props: ISegmentedProps) => {
  const {
    value: controlledValue,
    defaultValue = "",
    onValueChange,
    size = "default",
    disabled = false,
    children,
    className,
    ...rest
  } = props;

  const [internalValue, setInternalValue] = useState(defaultValue);
  const baseId = useId();
  const listRef = useRef<HTMLDivElement | null>(null);

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const handleValueChange = useCallback(
    (v: string) => {
      if (!isControlled) setInternalValue(v);
      onValueChange?.(v);
    },
    [isControlled, onValueChange],
  );

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const items = Array.from(
      listRef.current?.querySelectorAll<HTMLButtonElement>("button[role='tab']:not([disabled])") ?? [],
    );
    const idx = items.indexOf(document.activeElement as HTMLButtonElement);
    if (idx === -1) return;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      items[(idx + 1) % items.length]?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      items[(idx - 1 + items.length) % items.length]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      items[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      items[items.length - 1]?.focus();
    }
  }, []);

  return (
    <SegmentedContext.Provider value={{ value, onValueChange: handleValueChange, size, disabled, baseId }}>
      <div
        ref={listRef}
        role="tablist"
        aria-orientation="horizontal"
        data-slot="segmented"
        onKeyDown={handleKeyDown}
        className={cn(segmentedRootVariants({ size }), className)}
        {...rest}
      >
        {children}
      </div>
    </SegmentedContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── SegmentedItem ────────────────────────────────────────────────

const segmentedItemVariants = cva(
  [
    "relative inline-flex items-center justify-center gap-100",
    "font-lexend font-medium whitespace-nowrap rounded-small",
    "transition-all duration-150 cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-6 px-200 text-xs",
        default: "h-7 px-200 text-sm",
        lg: "h-8 px-300 text-sm",
      },
      isActive: {
        true: "bg-background text-foreground shadow-sm font-semibold",
        false: "bg-transparent text-muted-foreground hover:text-foreground",
      },
    },
    defaultVariants: { size: "default", isActive: false },
  },
);

interface ISegmentedItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value"> {
  value: string;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export const SegmentedItem = (props: ISegmentedItemProps) => {
  const { value, disabled = false, leftIcon, rightIcon, children, className, onClick, ...rest } = props;
  const ctx = useSegmentedContext();

  const isActive = ctx.value === value;
  const isDisabled = disabled || ctx.disabled;
  const triggerId = `${ctx.baseId}-seg-${value}`;

  return (
    <button
      type="button"
      role="tab"
      id={triggerId}
      aria-selected={isActive}
      data-slot="segmented-item"
      data-state={isActive ? "active" : "inactive"}
      disabled={isDisabled}
      tabIndex={isActive ? 0 : -1}
      onClick={(e) => {
        ctx.onValueChange(value);
        onClick?.(e);
      }}
      className={cn(segmentedItemVariants({ size: ctx.size, isActive }), className)}
      {...rest}
    >
      {leftIcon && <span className="flex items-center justify-center size-4">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex items-center justify-center size-4">{rightIcon}</span>}
    </button>
  );
};
