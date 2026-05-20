"use client";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Input } from "@/components/figma/Input";
import { Textarea } from "@/components/figma/Textarea";
import { Button, type ButtonVariantTypes } from "@/components/figma/Button";

// ═══════════════════════════════════════════════════════════════════
// InputGroup
// ═══════════════════════════════════════════════════════════════════

interface IInputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}

export const InputGroup = (props: IInputGroupProps) => {
  const { className, disabled, ...rest } = props;

  return (
    <div
      data-slot="input-group"
      data-disabled={disabled || undefined}
      role="group"
      className={cn(
        "group/input-group relative flex w-full items-center rounded-medium border border-border-input bg-background transition-[color,box-shadow] outline-none",
        "h-9 min-w-0 has-[>textarea]:h-auto",

        // Layout variants driven by addon alignment data-attributes
        "has-[>[data-align=inline-start]]:[&>input]:pl-100",
        "has-[>[data-align=inline-end]]:[&>input]:pr-100",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-150",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-150",

        // Focus state — reacts to the control slot receiving focus
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/30",

        // Error state — reacts to aria-invalid on control slot
        "has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-destructive/20",

        // Disabled
        "data-disabled:border-disabled-border data-disabled:bg-disabled-surface data-disabled:opacity-60 data-disabled:pointer-events-none",

        className,
      )}
      {...rest}
    />
  );
};

// ═══════════════════════════════════════════════════════════════════
// InputGroupAddon
// ═══════════════════════════════════════════════════════════════════

type InputGroupAddonAlignTypes = "inline-start" | "inline-end" | "block-start" | "block-end";

const inputGroupAddonVariants = cva(
  [
    "flex h-auto cursor-text items-center justify-center gap-100",
    "py-075 text-sm font-medium font-lexend text-muted-foreground select-none",
    "group-data-[disabled]/input-group:opacity-50",
    "[&>svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      align: {
        "inline-start": "order-first pl-150",
        "inline-end": "order-last pr-150",
        "block-start": "order-first w-full justify-start px-150 pt-150",
        "block-end": "order-last w-full justify-start px-150 pb-150",
      },
    },
    defaultVariants: { align: "inline-start" },
  },
);

interface IInputGroupAddonProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: InputGroupAddonAlignTypes;
}

export const InputGroupAddon = (props: IInputGroupAddonProps) => {
  const { align = "inline-start", className, ...rest } = props;

  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) return;
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
      {...rest}
    />
  );
};

// ═══════════════════════════════════════════════════════════════════
// InputGroupButton — wraps project Button
// ═══════════════════════════════════════════════════════════════════

type InputGroupButtonVariantTypes = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type InputGroupButtonSizeTypes = "xs" | "sm" | "icon-xs" | "icon-sm";

const inputGroupButtonSizeVariants = cva(
  "shadow-none focus-visible:ring-offset-0",
  {
    variants: {
      size: {
        xs: "h-6 gap-050 rounded-small px-100 text-xs [&>svg:not([class*='size-'])]:size-3.5",
        sm: "h-8 gap-075 rounded-medium px-150",
        "icon-xs": "size-6 rounded-small p-0 [&>svg:not([class*='size-'])]:size-3.5",
        "icon-sm": "size-8 rounded-medium p-0",
      },
    },
    defaultVariants: { size: "xs" },
  },
);

interface IInputGroupButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: InputGroupButtonVariantTypes;
  size?: InputGroupButtonSizeTypes;
  children?: React.ReactNode;
}

export const InputGroupButton = (props: IInputGroupButtonProps) => {
  const { variant = "ghost", size = "xs", className, ...rest } = props;

  return (
    <Button
      data-slot="input-group-button"
      data-size={size}
      variant={variant as ButtonVariantTypes}
      className={cn(inputGroupButtonSizeVariants({ size }), className)}
      {...rest}
    />
  );
};

// ═══════════════════════════════════════════════════════════════════
// InputGroupText
// ═══════════════════════════════════════════════════════════════════

interface IInputGroupTextProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const InputGroupText = (props: IInputGroupTextProps) => {
  const { className, ...rest } = props;

  return (
    <span
      data-slot="input-group-text"
      className={cn(
        "flex items-center gap-100 text-sm font-lexend text-muted-foreground",
        "[&>svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...rest}
    />
  );
};

// ═══════════════════════════════════════════════════════════════════
// InputGroupInput — wraps project Input
// ═══════════════════════════════════════════════════════════════════

interface IInputGroupInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputGroupInput = (props: IInputGroupInputProps) => {
  const { className, ...rest } = props;

  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "flex-1 min-w-0 h-full bg-transparent",
        "rounded-none border-0 shadow-none",
        "focus-visible:ring-0 focus-visible:border-transparent",
        "disabled:bg-transparent",
        className,
      )}
      {...rest}
    />
  );
};

// ═══════════════════════════════════════════════════════════════════
// InputGroupTextarea — wraps project Textarea
// ═══════════════════════════════════════════════════════════════════

interface IInputGroupTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const InputGroupTextarea = (props: IInputGroupTextareaProps) => {
  const { className, ...rest } = props;

  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 min-w-0 min-h-0 resize-none bg-transparent",
        "rounded-none border-0 shadow-none",
        "focus-visible:ring-0 focus-visible:border-transparent",
        "disabled:bg-transparent disabled:resize-none",
        className,
      )}
      {...rest}
    />
  );
};
