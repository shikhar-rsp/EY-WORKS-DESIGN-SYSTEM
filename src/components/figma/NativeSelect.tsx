"use client";

import { ArrowDown01Round } from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";

// ─── NativeSelect ─────────────────────────────────────────────────

interface INativeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  children?: React.ReactNode;
}

export const NativeSelect = (props: INativeSelectProps) => {
  const { className, children, ...rest } = props;

  return (
    <div data-slot="native-select" className="relative inline-flex w-full items-center">
      <select
        data-slot="native-select-input"
        className={cn(
          "h-9 w-full appearance-none",
          "rounded-medium border border-border-input bg-background",
          "pl-200 pr-8",
          "font-lexend text-sm text-foreground",
          "transition-colors duration-150",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
          "disabled:cursor-not-allowed disabled:bg-disabled-surface disabled:text-disabled disabled:border-disabled-border",
          "aria-invalid:border-destructive aria-invalid:focus:ring-destructive",
          className,
        )}
        {...rest}
      >
        {children}
      </select>
      {/* Chevron icon */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-200 inline-flex items-center text-muted-foreground"
      >
        <ArrowDown01Round className="size-3.5" />
      </span>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── NativeSelectOption ───────────────────────────────────────────

interface INativeSelectOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children?: React.ReactNode;
}

export const NativeSelectOption = (props: INativeSelectOptionProps) => {
  const { children, ...rest } = props;
  return (
    <option data-slot="native-select-option" {...rest}>
      {children}
    </option>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── NativeSelectOptGroup ─────────────────────────────────────────

interface INativeSelectOptGroupProps extends React.OptgroupHTMLAttributes<HTMLOptGroupElement> {
  label: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const NativeSelectOptGroup = (props: INativeSelectOptGroupProps) => {
  const { label, disabled, children, ...rest } = props;

  return (
    <optgroup data-slot="native-select-optgroup" label={label} disabled={disabled} {...rest}>
      {children}
    </optgroup>
  );
};
