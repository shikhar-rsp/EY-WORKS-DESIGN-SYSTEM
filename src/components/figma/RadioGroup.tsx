"use client";

import { createContext, useContext, useId, useState } from "react";

import { cn } from "@/lib/utils";

// ─── Context ──────────────────────────────────────────────────────

interface IRadioGroupContext {
  value: string;
  onValueChange: (value: string) => void;
  name: string;
  disabled: boolean;
}

const RadioGroupContext = createContext<IRadioGroupContext | null>(null);

const useRadioGroupContext = () => {
  const ctx = useContext(RadioGroupContext);
  if (!ctx) throw new Error("RadioGroupItem must be used inside <RadioGroup>");
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── RadioGroup ───────────────────────────────────────────────────

interface IRadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  orientation?: "horizontal" | "vertical";
  children?: React.ReactNode;
  className?: string;
}

export const RadioGroup = (props: IRadioGroupProps) => {
  const {
    value: controlledValue,
    defaultValue = "",
    onValueChange,
    disabled = false,
    required,
    name: externalName,
    orientation = "vertical",
    children,
    className,
    ...rest
  } = props;

  const generatedName = useId();
  const name = externalName ?? generatedName;

  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const handleValueChange = (newValue: string) => {
    if (!isControlled) setInternalValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <RadioGroupContext.Provider value={{ value, onValueChange: handleValueChange, name, disabled }}>
      <div
        role="radiogroup"
        data-slot="radio-group"
        aria-required={required}
        className={cn(
          "flex",
          orientation === "vertical" ? "flex-col gap-150" : "flex-row flex-wrap gap-300",
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── RadioGroupItem ───────────────────────────────────────────────

interface IRadioGroupItemProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onChange"> {
  value: string;
  id?: string;
  disabled?: boolean;
  className?: string;
}

export const RadioGroupItem = (props: IRadioGroupItemProps) => {
  const { value, id: externalId, disabled: localDisabled = false, className, ...rest } = props;

  const { value: groupValue, onValueChange, name, disabled: groupDisabled } = useRadioGroupContext();
  const generatedId = useId();
  const id = externalId ?? generatedId;

  const isChecked = groupValue === value;
  const isDisabled = groupDisabled || localDisabled;

  return (
    <span className="inline-flex items-center gap-100">
      {/* Hidden native radio for form submission & a11y */}
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={() => {
          if (!isDisabled) onValueChange(value);
        }}
        className="sr-only"
      />
      {/* Visual indicator — mirrors the label's htmlFor target */}
      <button
        type="button"
        role="radio"
        aria-checked={isChecked}
        data-slot="radio-group-item"
        data-state={isChecked ? "checked" : "unchecked"}
        data-disabled={isDisabled || undefined}
        disabled={isDisabled}
        onClick={() => {
          if (!isDisabled) onValueChange(value);
        }}
        className={cn(
          "relative shrink-0 inline-flex items-center justify-center",
          "size-[14px] rounded-full",
          "border transition-colors duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          isChecked
            ? "border-0 bg-primary hover:bg-primary-hover"
            : "border border-border-input bg-background hover:bg-neutral",
          isDisabled && "cursor-not-allowed opacity-50",
          className,
        )}
        {...rest}
      >
        {isChecked && (
          <span className="inline-block size-[6px] rounded-full bg-primary-foreground" />
        )}
      </button>
      {/* Consumers pair with <Label htmlFor={id}> or plain <label htmlFor={id}> */}
    </span>
  );
};
