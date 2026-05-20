"use client";

import { createContext, useCallback, useContext, useRef, useState, useId } from "react";

import { MoreHorizontal } from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";

// ─── Pattern constants ────────────────────────────────────────────

export const REGEXP_ONLY_DIGITS = /^\d*$/;
export const REGEXP_ONLY_DIGITS_AND_CHARS = /^[a-zA-Z0-9]*$/;

// ─── Context ──────────────────────────────────────────────────────

interface IInputOTPContext {
  slots: string[];
  activeIndex: number;
  length: number;
  onSlotChange: (index: number, value: string) => void;
  onSlotKeyDown: (index: number, e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSlotFocus: (index: number) => void;
  inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
  disabled: boolean;
  invalid: boolean;
  pattern?: RegExp;
  descriptionId: string;
}

const InputOTPContext = createContext<IInputOTPContext | null>(null);

const useInputOTPContext = () => {
  const ctx = useContext(InputOTPContext);
  if (!ctx) throw new Error("InputOTP sub-components must be used inside <InputOTP>");
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── InputOTP root ────────────────────────────────────────────────

interface IInputOTPProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  maxLength?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  /** RegExp pattern — each entered character is tested against this pattern before being accepted. */
  pattern?: RegExp;
  /** Marks all slots as invalid (adds destructive ring). */
  invalid?: boolean;
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const InputOTP = (props: IInputOTPProps) => {
  const {
    maxLength = 6,
    value: controlledValue,
    defaultValue = "",
    onChange,
    disabled = false,
    invalid = false,
    pattern,
    children,
    className,
    containerClassName,
    ...rest
  } = props;

  const uid = useId();
  const descriptionId = `${uid}-description`;

  const [internalValue, setInternalValue] = useState(defaultValue.slice(0, maxLength));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const value = controlledValue !== undefined ? controlledValue.slice(0, maxLength) : internalValue;
  const slots = Array.from({ length: maxLength }, (_, i) => value[i] ?? "");

  const onSlotChange = useCallback(
    (index: number, char: string) => {
      const lastChar = char.slice(-1);
      // Apply pattern filter — if set and the char doesn't match, reject it
      if (lastChar && pattern && !pattern.test(lastChar)) return;
      const next = slots.slice();
      next[index] = lastChar;
      const newValue = next.join("");
      if (controlledValue === undefined) setInternalValue(newValue);
      onChange?.(newValue);
      if (lastChar && index < maxLength - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [slots, controlledValue, onChange, maxLength, pattern],
  );

  const onSlotKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace") {
        if (slots[index]) {
          const next = slots.slice();
          next[index] = "";
          const newValue = next.join("");
          if (controlledValue === undefined) setInternalValue(newValue);
          onChange?.(newValue);
        } else if (index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
      } else if (e.key === "ArrowLeft" && index > 0) {
        e.preventDefault();
        inputRefs.current[index - 1]?.focus();
      } else if (e.key === "ArrowRight" && index < maxLength - 1) {
        e.preventDefault();
        inputRefs.current[index + 1]?.focus();
      }
    },
    [slots, controlledValue, onChange, maxLength],
  );

  const onSlotFocus = useCallback((index: number) => setActiveIndex(index), []);

  return (
    <InputOTPContext.Provider
      value={{ slots, activeIndex, length: maxLength, onSlotChange, onSlotKeyDown, onSlotFocus, inputRefs, disabled, invalid, pattern, descriptionId }}
    >
      <div
        data-slot="input-otp"
        role="group"
        aria-label="One-time password"
        aria-describedby={descriptionId}
        className={cn("flex items-center gap-150", containerClassName, className)}
        {...rest}
      >
        {children}
      </div>
    </InputOTPContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── InputOTPGroup ────────────────────────────────────────────────

interface IInputOTPGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const InputOTPGroup = (props: IInputOTPGroupProps) => {
  const { children, className, ...rest } = props;
  return (
    <div data-slot="input-otp-group" className={cn("flex items-center", className)} {...rest}>
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── InputOTPSlot ─────────────────────────────────────────────────

interface IInputOTPSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
  /** Marks this slot as invalid — overrides the root `invalid` prop when set. */
  "aria-invalid"?: boolean;
  className?: string;
}

export const InputOTPSlot = (props: IInputOTPSlotProps) => {
  const { index, "aria-invalid": ariaInvalid, className, ...rest } = props;
  const { slots, activeIndex, onSlotChange, onSlotKeyDown, onSlotFocus, inputRefs, disabled, invalid } =
    useInputOTPContext();
  const isActive = activeIndex === index;
  const isInvalid = ariaInvalid ?? invalid;
  const char = slots[index] ?? "";

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive || undefined}
      data-state={isActive ? "active" : "inactive"}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center",
        "border-y border-r border-border-input bg-background text-sm font-medium text-foreground",
        "transition-colors",
        "first:rounded-l-medium first:border-l",
        "last:rounded-r-medium",
        isActive && !isInvalid && "z-10 ring-2 ring-ring",
        isInvalid && "border-destructive ring-2 ring-destructive/30",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
      {...rest}
    >
      <input
        ref={(el) => { inputRefs.current[index] = el; }}
        type="text"
        inputMode="numeric"
        maxLength={2}
        value={char}
        disabled={disabled}
        aria-invalid={isInvalid || undefined}
        onChange={(e) => onSlotChange(index, e.target.value)}
        onKeyDown={(e) => onSlotKeyDown(index, e)}
        onFocus={() => onSlotFocus(index)}
        onBlur={() => onSlotFocus(-1)}
        className="absolute inset-0 cursor-pointer bg-transparent text-center text-sm outline-none"
        aria-label={`Digit ${index + 1}`}
      />
      {!char && isActive && (
        <div className="pointer-events-none h-4 w-px animate-pulse bg-foreground" />
      )}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── InputOTPSeparator ────────────────────────────────────────────

interface IInputOTPSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const InputOTPSeparator = (props: IInputOTPSeparatorProps) => {
  const { className, ...rest } = props;
  return (
    <div
      data-slot="input-otp-separator"
      role="separator"
      aria-hidden="true"
      className={cn("flex w-4 items-center justify-center text-muted-foreground", className)}
      {...rest}
    >
      <MoreHorizontal className="size-4" />
    </div>
  );
};
