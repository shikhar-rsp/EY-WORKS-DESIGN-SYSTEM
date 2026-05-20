"use client";

import { useState, type ReactNode } from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

// ─── Switch ───────────────────────────────────────────────────────

type SwitchStyleTypes = "default" | "brand";
type SwitchSizeTypes = "small" | "large";

interface ISwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  /** Screen-reader label when no visible label is present. */
  "aria-label"?: string;
  "aria-invalid"?: boolean;
  id?: string;
  name?: string;
  value?: string;
  className?: string;
  /** Extra classes forwarded to the thumb span — useful for custom size / translate overrides. */
  thumbClassName?: string;
  /**
   * Color style for the track.
   * - `"default"` — green (bg-success) when on, gray when off.
   * - `"brand"`   — primary color when on, gray when off.
   * When omitted the Switch uses its standard primary/muted-active palette.
   */
  style?: SwitchStyleTypes;
  /**
   * Toggle-style size preset. Overrides the default h-5 w-9 dimensions.
   * - `"small"` — 32×18 px track, 14 px thumb
   * - `"large"` — 48×28 px track, 24 px thumb
   */
  size?: SwitchSizeTypes;
  /** Optional text label rendered beside the switch. */
  label?: string;
  /** Which side the label appears on. @default "right" */
  labelPosition?: "left" | "right";
  /** Optional icon rendered before the label text. */
  icon?: ReactNode;
}

// ─── Track & thumb CVA (default Switch appearance) ───────────────

const trackVariants = cva(
  [
    "relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center",
    "rounded-full border-2 border-transparent",
    "transition-colors duration-200 ease-in-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      checked: {
        true: "bg-primary",
        false: "bg-muted-active",
      },
    },
    defaultVariants: { checked: false },
  },
);

const thumbVariants = cva(
  [
    "pointer-events-none block size-4 rounded-full bg-primary-foreground shadow-sm",
    "ring-0 transition-transform duration-200 ease-in-out",
  ].join(" "),
  {
    variants: {
      checked: {
        true: "translate-x-4",
        false: "translate-x-0",
      },
    },
    defaultVariants: { checked: false },
  },
);

// ─── Toggle-size track base (shared) ─────────────────────────────

const TOGGLE_TRACK_BASE = [
  "relative inline-flex shrink-0 cursor-pointer items-center",
  "rounded-full border-2 border-transparent",
  "transition-colors duration-200 ease-in-out",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  "disabled:cursor-not-allowed disabled:opacity-50",
].join(" ");

// ─── Component ────────────────────────────────────────────────────

export const Switch = (props: ISwitchProps) => {
  const {
    checked: controlledChecked,
    defaultChecked = false,
    onCheckedChange,
    disabled = false,
    className,
    thumbClassName,
    style,
    size,
    label,
    labelPosition = "right",
    icon,
    id,
    name,
    value,
    "aria-label": ariaLabel,
    "aria-invalid": ariaInvalid,
  } = props;

  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const isControlled = controlledChecked !== undefined;
  const isChecked = isControlled ? controlledChecked : internalChecked;

  const handleClick = () => {
    if (disabled) return;
    const next = !isChecked;
    if (!isControlled) setInternalChecked(next);
    onCheckedChange?.(next);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      handleClick();
    }
  };

  // ── Size/style preset (Toggle mode) ──────────────────────────
  const isToggleMode = size !== undefined || style !== undefined;

  const trackClass = isToggleMode
    ? cn(
        TOGGLE_TRACK_BASE,
        size === "large" ? "h-[28px] w-[48px]" : "h-[18px] w-[32px]",
        style === "brand"
          ? [
              "data-[state=checked]:bg-primary data-[state=checked]:hover:bg-primary-hover",
              "data-[state=unchecked]:bg-neutral data-[state=unchecked]:hover:bg-neutral-hover",
            ].join(" ")
          : [
              "data-[state=checked]:bg-success data-[state=checked]:hover:opacity-90",
              "data-[state=unchecked]:bg-neutral data-[state=unchecked]:hover:bg-neutral-hover",
            ].join(" "),
        className,
      )
    : cn("group", trackVariants({ checked: isChecked }), className);

  const computedThumbClass = isToggleMode
    ? cn(
        "pointer-events-none block rounded-full bg-primary-foreground shadow-sm ring-0 transition-transform duration-200 ease-in-out",
        size === "large" ? "size-[24px]" : "size-[14px]",
        size === "large"
          ? "group-data-[state=checked]:translate-x-[20px] group-data-[state=unchecked]:translate-x-0"
          : "group-data-[state=checked]:translate-x-[14px] group-data-[state=unchecked]:translate-x-0",
        thumbClassName,
      )
    : cn(thumbVariants({ checked: isChecked }), thumbClassName);

  const button = (
    <>
      {/* Hidden native checkbox for form compatibility */}
      <input
        type="checkbox"
        hidden
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={() => {}}
        aria-hidden="true"
        tabIndex={-1}
      />
      <button
        type="button"
        role="switch"
        aria-checked={isChecked}
        aria-label={ariaLabel}
        aria-invalid={ariaInvalid}
        data-state={isChecked ? "checked" : "unchecked"}
        disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn("group", trackClass)}
      >
        <span className={computedThumbClass} />
      </button>
    </>
  );

  if (!label) return button;

  const labelEl = (
    <span className="inline-flex items-center gap-[2px] font-lexend text-sm font-normal leading-5 text-foreground whitespace-nowrap select-none">
      {icon && (
        <span className="inline-flex size-4 shrink-0 items-center justify-center text-foreground">
          {icon}
        </span>
      )}
      {label}
    </span>
  );

  const gapClass = size === "large" ? "gap-2" : "gap-1";

  return (
    <div
      className={cn(
        "inline-flex items-center",
        gapClass,
        disabled && "cursor-not-allowed opacity-50",
      )}
    >
      {labelPosition === "left" && labelEl}
      {button}
      {labelPosition === "right" && labelEl}
    </div>
  );
};

export type { SwitchStyleTypes, SwitchSizeTypes };
