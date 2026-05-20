"use client";

import {
  createContext,
  useCallback,
  useContext,
  useId,
  useState,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

import { MinusSign, PlusSign } from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";

// ─── Context ──────────────────────────────────────────────────────

interface IInputNumberContext {
  value: number;
  setValue: (v: number) => void;
  min: number;
  max: number;
  step: number;
  disabled: boolean;
  inputId: string;
}

const InputNumberContext = createContext<IInputNumberContext | null>(null);

const useInputNumberContext = () => {
  const ctx = useContext(InputNumberContext);
  if (!ctx)
    throw new Error(
      "InputNumber sub-components must be used inside <InputNumber>",
    );
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── InputNumber (root) ───────────────────────────────────────────

interface IInputNumberProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "value" | "defaultValue" | "onChange"
> {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}

export const InputNumber = (props: IInputNumberProps) => {
  const {
    value: controlledValue,
    defaultValue = 0,
    onValueChange,
    min = -Infinity,
    max = Infinity,
    step = 1,
    disabled = false,
    children,
    className,
    ...rest
  } = props;

  const [internalValue, setInternalValue] = useState(defaultValue);
  const inputId = useId();

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const setValue = useCallback(
    (v: number) => {
      const clamped = Math.min(max, Math.max(min, v));
      if (!isControlled) setInternalValue(clamped);
      onValueChange?.(clamped);
    },
    [isControlled, min, max, onValueChange],
  );

  return (
    <InputNumberContext.Provider
      value={{ value, setValue, min, max, step, disabled, inputId }}
    >
      <div
        data-slot="input-number"
        data-disabled={disabled || undefined}
        className={cn(
          "inline-flex items-center w-32",
          "h-9 rounded-medium border border-border bg-background",
          "font-lexend text-sm text-foreground",
          "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-1",
          "transition-colors duration-150",
          "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    </InputNumberContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── InputNumberDecrement ─────────────────────────────────────────

interface IInputNumberDecrementProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const InputNumberDecrement = (props: IInputNumberDecrementProps) => {
  const { className, onClick, ...rest } = props;
  const ctx = useInputNumberContext();
  const atMin = ctx.value <= ctx.min;

  return (
    <button
      type="button"
      data-slot="input-number-decrement"
      aria-label="Decrease value"
      disabled={ctx.disabled || atMin}
      data-disabled={ctx.disabled || atMin || undefined}
      onClick={(e) => {
        ctx.setValue(ctx.value - ctx.step);
        onClick?.(e);
      }}
      className={cn(
        "flex h-full items-center justify-center px-2",
        "rounded-l-medium border-r border-border",
        "text-muted-foreground hover:text-foreground hover:bg-muted",
        "transition-colors duration-150 cursor-pointer",
        "disabled:pointer-events-none disabled:opacity-50",
        "focus-visible:outline-none",
        className,
      )}
      {...rest}
    >
      <MinusSign className="size-3.5 shrink-0" />
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── InputNumberField ─────────────────────────────────────────────

interface IInputNumberFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "type"
> {
  className?: string;
}

export const InputNumberField = (props: IInputNumberFieldProps) => {
  const { className, onKeyDown, onBlur, ...rest } = props;
  const ctx = useInputNumberContext();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      ctx.setValue(ctx.value + ctx.step);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      ctx.setValue(ctx.value - ctx.step);
    }
    onKeyDown?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const parsed = parseFloat(e.target.value);
    if (!isNaN(parsed)) ctx.setValue(parsed);
    else ctx.setValue(ctx.value); // reset to valid value
    onBlur?.(e);
  };

  return (
    <input
      id={ctx.inputId}
      type="text"
      inputMode="numeric"
      data-slot="input-number-field"
      value={ctx.value}
      disabled={ctx.disabled}
      onChange={(e) => {
        const parsed = parseFloat(e.target.value);
        if (!isNaN(parsed)) ctx.setValue(parsed);
      }}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      className={cn(
        "h-full min-w-0 flex-1 bg-transparent px-2",
        "text-center text-sm text-foreground",
        "focus:outline-none",
        "disabled:pointer-events-none",
        className,
      )}
      {...rest}
    />
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── InputNumberIncrement ─────────────────────────────────────────

interface IInputNumberIncrementProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const InputNumberIncrement = (props: IInputNumberIncrementProps) => {
  const { className, onClick, ...rest } = props;
  const ctx = useInputNumberContext();
  const atMax = ctx.value >= ctx.max;

  return (
    <button
      type="button"
      data-slot="input-number-increment"
      aria-label="Increase value"
      disabled={ctx.disabled || atMax}
      data-disabled={ctx.disabled || atMax || undefined}
      onClick={(e) => {
        ctx.setValue(ctx.value + ctx.step);
        onClick?.(e);
      }}
      className={cn(
        "flex h-full items-center justify-center px-2",
        "rounded-r-medium border-l border-border",
        "text-muted-foreground hover:text-foreground hover:bg-muted",
        "transition-colors duration-150 cursor-pointer",
        "disabled:pointer-events-none disabled:opacity-50",
        "focus-visible:outline-none",
        className,
      )}
      {...rest}
    >
      <PlusSign className="size-3.5 shrink-0" />
    </button>
  );
};
