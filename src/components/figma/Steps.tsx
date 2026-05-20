"use client";

import {
  createContext,
  useCallback,
  useContext,
  useId,
  useState,
  type HTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

import { cva } from "class-variance-authority";

import { CheckmarkCircle01 } from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────

type StepsOrientationTypes = "horizontal" | "vertical";
type StepsStatusTypes = "complete" | "current" | "upcoming";

// ─── Root Context ─────────────────────────────────────────────────

interface IStepsContext {
  value: string;
  onValueChange: (value: string) => void;
  orientation: StepsOrientationTypes;
  items: string[];
  registerItem: (value: string) => void;
}

const StepsContext = createContext<IStepsContext | null>(null);

const useStepsContext = () => {
  const ctx = useContext(StepsContext);
  if (!ctx) throw new Error("Steps sub-components must be used inside <Steps>");
  return ctx;
};

// ─── Item Context ─────────────────────────────────────────────────

interface IStepsItemContext {
  value: string;
  status: StepsStatusTypes;
  index: number;
  triggerId: string;
  contentId: string;
}

const StepsItemContext = createContext<IStepsItemContext | null>(null);

const useStepsItemContext = () => {
  const ctx = useContext(StepsItemContext);
  if (!ctx) throw new Error("Steps sub-components must be used inside <StepsItem>");
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── Steps (root) ─────────────────────────────────────────────────

interface IStepsProps extends Omit<HTMLAttributes<HTMLDivElement>, "value" | "defaultValue" | "onChange"> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: StepsOrientationTypes;
  children?: ReactNode;
  className?: string;
}

export const Steps = (props: IStepsProps) => {
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
  const [items, setItems] = useState<string[]>([]);

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const handleValueChange = useCallback(
    (v: string) => {
      if (!isControlled) setInternalValue(v);
      onValueChange?.(v);
    },
    [isControlled, onValueChange],
  );

  const registerItem = useCallback((itemValue: string) => {
    setItems((prev) => (prev.includes(itemValue) ? prev : [...prev, itemValue]));
  }, []);

  return (
    <StepsContext.Provider value={{ value, onValueChange: handleValueChange, orientation, items, registerItem }}>
      <div
        data-slot="steps"
        data-orientation={orientation}
        className={cn(
          "flex",
          orientation === "vertical" ? "flex-col gap-0" : "flex-row items-start gap-0",
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    </StepsContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── StepsItem ────────────────────────────────────────────────────

interface IStepsItemProps extends Omit<HTMLAttributes<HTMLDivElement>, "value"> {
  value: string;
  children?: ReactNode;
  className?: string;
}

export const StepsItem = (props: IStepsItemProps) => {
  const { value, children, className, ...rest } = props;
  const ctx = useStepsContext();
  const reactId = useId();
  const triggerId = `${reactId}-trigger`;
  const contentId = `${reactId}-content`;

  // Register this item and determine its position
  if (!ctx.items.includes(value)) {
    ctx.registerItem(value);
  }

  const index = ctx.items.indexOf(value);
  const currentIndex = ctx.items.indexOf(ctx.value);

  let status: StepsStatusTypes = "upcoming";
  if (index < currentIndex) status = "complete";
  else if (index === currentIndex) status = "current";

  return (
    <StepsItemContext.Provider value={{ value, status, index, triggerId, contentId }}>
      <div
        data-slot="steps-item"
        data-state={status}
        className={cn(
          "flex flex-1 min-w-0",
          ctx.orientation === "vertical" ? "flex-col" : "flex-row items-start",
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    </StepsItemContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── StepsIndicator ───────────────────────────────────────────────

const indicatorVariants = cva(
  [
    "flex shrink-0 items-center justify-center",
    "size-8 rounded-full border-2",
    "font-lexend text-sm font-semibold",
    "transition-colors duration-200",
    "z-10 relative",
  ].join(" "),
  {
    variants: {
      status: {
        complete: "bg-primary border-primary text-primary-foreground",
        current: "bg-background border-primary text-primary",
        upcoming: "bg-background border-border text-muted-foreground",
      },
    },
    defaultVariants: { status: "upcoming" },
  },
);

interface IStepsIndicatorProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export const StepsIndicator = (props: IStepsIndicatorProps) => {
  const { children, className, onClick, ...rest } = props;
  const item = useStepsItemContext();
  const ctx = useStepsContext();

  return (
    <button
      type="button"
      id={item.triggerId}
      data-slot="steps-indicator"
      data-state={item.status}
      aria-current={item.status === "current" ? "step" : undefined}
      onClick={(e) => {
        ctx.onValueChange(item.value);
        onClick?.(e);
      }}
      className={cn(indicatorVariants({ status: item.status }), className)}
      {...rest}
    >
      {children ?? (
        item.status === "complete"
          ? <CheckmarkCircle01 className="size-4" />
          : <span>{item.index + 1}</span>
      )}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── StepsSeparator ───────────────────────────────────────────────

interface IStepsSeparatorProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const StepsSeparator = (props: IStepsSeparatorProps) => {
  const { className, ...rest } = props;
  const ctx = useStepsContext();

  return (
    <div
      data-slot="steps-separator"
      aria-hidden="true"
      className={cn(
        "bg-border transition-colors duration-200",
        ctx.orientation === "vertical"
          ? "w-0.5 h-6 mx-auto"
          : "h-0.5 flex-1 mt-4 mx-1",
        className,
      )}
      {...rest}
    />
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── StepsContent ─────────────────────────────────────────────────

interface IStepsContentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const StepsContent = (props: IStepsContentProps) => {
  const { children, className, ...rest } = props;
  const ctx = useStepsContext();
  const item = useStepsItemContext();

  return (
    <div
      data-slot="steps-content"
      id={item.contentId}
      className={cn(
        ctx.orientation === "vertical"
          ? "pl-3 pb-4"
          : "flex flex-col items-center pt-2 px-1",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── StepsTitle ───────────────────────────────────────────────────

interface IStepsTitleProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
}

export const StepsTitle = (props: IStepsTitleProps) => {
  const { children, className, ...rest } = props;
  const item = useStepsItemContext();

  return (
    <p
      data-slot="steps-title"
      data-state={item.status}
      className={cn(
        "font-lexend text-sm font-medium leading-none",
        item.status === "upcoming" ? "text-muted-foreground" : "text-foreground",
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── StepsDescription ─────────────────────────────────────────────

interface IStepsDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
}

export const StepsDescription = (props: IStepsDescriptionProps) => {
  const { children, className, ...rest } = props;

  return (
    <p
      data-slot="steps-description"
      className={cn("mt-1 text-xs text-muted-foreground", className)}
      {...rest}
    >
      {children}
    </p>
  );
};
