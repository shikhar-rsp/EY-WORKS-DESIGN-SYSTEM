"use client";

import { useId, useState } from "react";
import { cva } from "class-variance-authority";

import { MinusSign, Tick02 } from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";

type CheckboxStyleTypes = "default" | "outline" | "brand";
type CheckboxSizeTypes = "small" | "medium" | "large";

interface ICheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  indeterminate?: boolean;
  checkboxStyle?: CheckboxStyleTypes;
  size?: CheckboxSizeTypes;
  disabled?: boolean;
  invalid?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  id?: string;
  label?: string;
  helperMessage?: string;
  checkboxPosition?: "left" | "right";
  skeleton?: boolean;
  className?: string;
}


// ── Box variants ──────────────────────────────────────────────────

const boxSizeVariants = cva(
  [
    "relative shrink-0 inline-flex items-center justify-center",
    "rounded-xsmall transition-colors",
  ].join(" "),
  {
    variants: {
      size: {
        small: "size-[14px]",
        medium: "size-[16px]",
        large: "size-[20px]",
      },
    },
    defaultVariants: {
      size: "small",
    },
  }
);

// ── Wrapper variants ──────────────────────────────────────────────

const wrapperVariants = cva("inline-flex flex-col items-start justify-center", {
  variants: {
    checkboxStyle: {
      default: "",
      outline: [
        "bg-disabled-surface border border-border rounded-medium",
        "px-[6px] py-[2px] overflow-clip",
      ].join(" "),
      brand: [
        "bg-primary-muted border border-border rounded-small",
        "px-050 py-[2px]",
      ].join(" "),
    },
  },
  defaultVariants: {
    checkboxStyle: "default",
  },
});

// ── Component ─────────────────────────────────────────────────────

export const Checkbox = (props: ICheckboxProps) => {
  const {
    checked: controlledChecked,
    defaultChecked = false,
    onCheckedChange,
    indeterminate = false,
    checkboxStyle = "default",
    size = "small",
    disabled = false,
    invalid = false,
    required = false,
    name,
    value,
    id: externalId,
    label,
    helperMessage,
    checkboxPosition = "left",
    skeleton = false,
    className,
  } = props;

  const generatedId = useId();
  const id = externalId ?? generatedId;
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const handleChange = () => {
    if (disabled) return;
    const next = !checked;
    if (!isControlled) setInternalChecked(next);
    onCheckedChange?.(next);
  };

  // Box background & border classes
  const active = checked || indeterminate;
  const boxBg = (() => {
    if (invalid && active) return "bg-destructive border-0";
    if (invalid && !active) return "bg-background border border-destructive";
    if (active) return "bg-primary border-0 hover:bg-primary-hover";
    return "bg-background border border-border-input hover:bg-neutral";
  })();

  const iconColor = disabled ? "text-icon-disabled" : "text-primary-foreground";
  // Size class for the icon wrapper
  const iconSizeClass =
    size === "large" ? "size-[14px]" : size === "medium" ? "size-[12px]" : "size-[10px]";
  // Stroke override: CSS px units override SVG presentation attributes and are applied in CSS px space.
  // The tick SVG has stroke-width="1.5" in a 24x24 viewBox — at small sizes this is ~0.6px rendered,
  // which is nearly invisible. We target the <path> children inside the injected SVG.
  const iconStrokeClass =
    size === "large"
      ? "[&_path]:[stroke-width:2px]"
      : size === "medium"
      ? "[&_path]:[stroke-width:2.5px]"
      : "[&_path]:[stroke-width:3px]";

  const boxEl = skeleton ? (
    <span
      className={cn(
        boxSizeVariants({ size }),
        "bg-neutral animate-pulse"
      )}
    />
  ) : (
    <span
      className={cn(
        boxSizeVariants({ size }),
        boxBg,
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {indeterminate && !checked && (
        <span className={iconColor}>
          <MinusSign className={cn(iconSizeClass, iconStrokeClass)} />
        </span>
      )}
      {checked && (
        <span className={iconColor}>
          <Tick02 className={cn(iconSizeClass, iconStrokeClass)} />
        </span>
      )}
    </span>
  );

  const labelEl = (label || helperMessage || required) ? (
    <span className="inline-flex flex-col items-start justify-center">
      {(label || required) && (
        <span className="inline-flex items-center">
          {label && (
            <span className="font-lexend text-[14px] font-normal leading-5 text-foreground whitespace-nowrap">
              {label}
            </span>
          )}
          {required && (
            <span className="font-lexend text-[14px] font-normal leading-5 text-destructive-accent">
              *
            </span>
          )}
        </span>
      )}
      {helperMessage && (
        <span className="font-lexend text-[12px] font-normal leading-4 text-muted-foreground whitespace-nowrap">
          {helperMessage}
        </span>
      )}
    </span>
  ) : null;

  const dataState = indeterminate ? "indeterminate" : checked ? "checked" : "unchecked";

  return (
    <span
      data-state={dataState}
      className={cn(wrapperVariants({ checkboxStyle }), className)}
    >
      {/* Hidden native input for keyboard/form support */}
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        required={required}
        aria-invalid={invalid}
        className="sr-only"
      />
      <label
        htmlFor={id}
        className={cn(
          "inline-flex items-center gap-[4px]",
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        )}
      >
        {checkboxPosition === "left" && boxEl}
        {labelEl}
        {checkboxPosition === "right" && boxEl}
      </label>
    </span>
  );
};

export type { CheckboxStyleTypes, CheckboxSizeTypes };
// Note: `checkboxStyle` replaces the old `style` prop to avoid conflicts with React's CSSProperties `style`.
// `required` replaces the old `isRequired` to match shadcn's native HTML attribute name.
