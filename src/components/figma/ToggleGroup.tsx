"use client";

import {
  createContext,
  useContext,
  useCallback,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// ─── Context ──────────────────────────────────────────────────────

interface IToggleGroupContext {
  type: "single" | "multiple";
  value: string | string[];
  onItemSelect: (itemValue: string) => void;
  disabled: boolean;
  variant: "default" | "outline";
  size: "sm" | "md" | "lg";
}

const ToggleGroupContext = createContext<IToggleGroupContext | null>(null);

const useToggleGroupContext = () => {
  const ctx = useContext(ToggleGroupContext);
  if (!ctx) throw new Error("ToggleGroupItem must be used inside <ToggleGroup>");
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── ToggleGroup ──────────────────────────────────────────────────

interface IToggleGroupSingleProps {
  type: "single";
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

interface IToggleGroupMultipleProps {
  type: "multiple";
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
}

type IToggleGroupProps = (IToggleGroupSingleProps | IToggleGroupMultipleProps) & {
  disabled?: boolean;
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
  orientation?: "horizontal" | "vertical";
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, "value" | "defaultValue" | "onChange">;

export const ToggleGroup = (props: IToggleGroupProps) => {
  const disabled = props.disabled ?? false;
  const variant = props.variant ?? "default";
  const size = props.size ?? "md";
  const orientation = props.orientation ?? "horizontal";
  const { className, children } = props;

  const initialValue: string | string[] =
    props.defaultValue !== undefined
      ? (props.defaultValue as string | string[])
      : props.type === "multiple"
        ? []
        : "";

  const [internalValue, setInternalValue] = useState<string | string[]>(initialValue);

  const isControlled = props.value !== undefined;
  const value = isControlled ? (props.value as string | string[]) : internalValue;

  const onItemSelect = useCallback(
    (itemValue: string) => {
      if (props.type === "single") {
        const next = (value as string) === itemValue ? "" : itemValue;
        if (!isControlled) setInternalValue(next);
        (props as IToggleGroupSingleProps).onValueChange?.(next);
      } else {
        const current = Array.isArray(value) ? value : [];
        const next = current.includes(itemValue)
          ? current.filter((v) => v !== itemValue)
          : [...current, itemValue];
        if (!isControlled) setInternalValue(next);
        (props as IToggleGroupMultipleProps).onValueChange?.(next);
      }
    },
    [props, value, isControlled],
  );

  // Strip known props before spreading onto the div
  const {
    type: _type,
    disabled: _disabled,
    variant: _variant,
    size: _size,
    orientation: _orientation,
    className: _className,
    children: _children,
    value: _value,
    defaultValue: _defaultValue,
    onValueChange: _onValueChange,
    ...rest
  } = props as any; // eslint-disable-line @typescript-eslint/no-explicit-any

  return (
    <ToggleGroupContext.Provider
      value={{ type: props.type, value, onItemSelect, disabled, variant, size }}
    >
      <div
        role={props.type === "single" ? "radiogroup" : "group"}
        data-orientation={orientation}
        className={cn(
          "flex items-center",
          orientation === "vertical" ? "flex-col" : "flex-row",
          variant === "outline" ? "rounded-medium border border-border" : "gap-050",
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    </ToggleGroupContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ToggleGroupItem ──────────────────────────────────────────────

const toggleGroupItemVariants = cva(
  [
    "inline-flex items-center justify-center",
    "font-medium font-lexend text-sm",
    "transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
    "disabled:pointer-events-none disabled:opacity-50",
    "cursor-pointer",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-transparent text-muted-foreground",
          "hover:bg-muted hover:text-foreground",
          "data-[state=on]:bg-muted data-[state=on]:text-foreground",
        ].join(" "),
        outline: [
          "rounded-none border-r border-border bg-transparent text-muted-foreground",
          "first:rounded-l-medium last:rounded-r-medium last:border-r-0",
          "hover:bg-muted hover:text-foreground",
          "data-[state=on]:bg-muted data-[state=on]:text-foreground",
        ].join(" "),
      },
      size: {
        sm: "h-7 min-w-7 px-075 text-xs",
        md: "h-9 min-w-9 px-150",
        lg: "h-10 min-w-10 px-200",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  },
);

interface IToggleGroupItemProps extends VariantProps<typeof toggleGroupItemVariants> {
  value: string;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
}

export const ToggleGroupItem = (props: IToggleGroupItemProps) => {
  const { value, disabled, className, children } = props;
  const ctx = useToggleGroupContext();

  const isOn = Array.isArray(ctx.value)
    ? ctx.value.includes(value)
    : ctx.value === value;

  const isDisabled = disabled || ctx.disabled;

  return (
    <button
      type="button"
      role={ctx.type === "single" ? "radio" : "checkbox"}
      aria-checked={isOn}
      data-state={isOn ? "on" : "off"}
      disabled={isDisabled}
      onClick={() => ctx.onItemSelect(value)}
      className={cn(
        toggleGroupItemVariants({ variant: ctx.variant, size: ctx.size }),
        className,
      )}
    >
      {children}
    </button>
  );
};
