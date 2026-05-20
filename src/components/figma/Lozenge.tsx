"use client";

import React from "react";

import { ArrowLeft01Round } from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";

// ═══════════════════════════════════════════════════════════════
// Types & constants
// ═══════════════════════════════════════════════════════════════

export type LozengeVariantTypes = "outline" | "outlineFilled" | "solid" | "light";
export type LozengeColorTypes =
  | "default"
  | "red"
  | "blue"
  | "yellow"
  | "lime"
  | "brand"
  | "discoveryBlue"
  | "teal"
  | "magenta"
  | "green"
  | "grey";
export type LozengeSizeTypes = "sm" | "md" | "lg";

const SIZE_CLASSES: Record<LozengeSizeTypes, string> = {
  sm: "h-4 px-050 gap-050",
  md: "h-5 px-050 gap-050",
  lg: "h-6 px-075 gap-050 py-0.5",
};

const TEXT_SIZE: Record<LozengeSizeTypes, string> = {
  sm: "text-xs leading-4",
  md: "text-sm leading-5",
  lg: "text-sm leading-5",
};

const ICON_SIZE: Record<LozengeSizeTypes, string> = {
  sm: "size-3.5",
  md: "size-3.5",
  lg: "size-3.5",
};

// Solid: bold/saturated background
const SOLID_BG: Record<LozengeColorTypes, string> = {
  default: "bg-foreground",
  red: "bg-accent-red-bold",
  blue: "bg-accent-blue-bold",
  yellow: "bg-accent-yellow-bold",
  lime: "bg-accent-lime-bold",
  brand: "bg-primary",
  discoveryBlue: "bg-discovery-bold",
  teal: "bg-accent-teal-bold",
  magenta: "bg-accent-magenta-bold",
  green: "bg-accent-green-bold",
  grey: "bg-secondary",
};

// Solid text: white for dark BGs, dark for light BGs (yellow, lime, grey)
const SOLID_TEXT: Record<LozengeColorTypes, string> = {
  default: "text-primary-foreground",
  red: "text-primary-foreground",
  blue: "text-primary-foreground",
  yellow: "text-foreground",
  lime: "text-foreground",
  brand: "text-primary-foreground",
  discoveryBlue: "text-primary-foreground",
  teal: "text-primary-foreground",
  magenta: "text-primary-foreground",
  green: "text-primary-foreground",
  grey: "text-secondary-foreground",
};

// Light: pastel/subtle background
const LIGHT_BG: Record<LozengeColorTypes, string> = {
  default: "bg-muted",
  red: "bg-destructive-hover",
  blue: "bg-accent-blue",
  yellow: "bg-accent-yellow",
  lime: "bg-accent-lime",
  brand: "bg-primary-subtle",
  discoveryBlue: "bg-accent-purple",
  teal: "bg-accent-teal",
  magenta: "bg-accent-magenta",
  green: "bg-accent-green",
  grey: "bg-secondary",
};

// Outline / Light text & border: uses the semantic color for each hue
const COLOR_TEXT: Record<LozengeColorTypes, string> = {
  default: "text-foreground",
  red: "text-destructive",
  blue: "text-info",
  yellow: "text-warning",
  lime: "text-success",
  brand: "text-primary",
  discoveryBlue: "text-discovery",
  teal: "text-accent-teal-bold",
  magenta: "text-accent-magenta-bold",
  green: "text-accent-green-bold",
  grey: "text-secondary-foreground",
};

const COLOR_BORDER: Record<LozengeColorTypes, string> = {
  default: "border-border-hover",
  red: "border-destructive",
  blue: "border-info",
  yellow: "border-warning",
  lime: "border-success",
  brand: "border-primary",
  discoveryBlue: "border-discovery",
  teal: "border-accent-teal-bold",
  magenta: "border-accent-magenta-bold",
  green: "border-accent-green-bold",
  grey: "border-border-hover",
};

// ═══════════════════════════════════════════════════════════════
// Lozenge
// ═══════════════════════════════════════════════════════════════

interface ILozengeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style / treatment */
  variant?: LozengeVariantTypes;
  /** Color theme */
  color?: LozengeColorTypes;
  /** Size */
  size?: LozengeSizeTypes;
  /** Label text */
  label?: string;
  /** Show small indicator dot */
  indicator?: boolean;
  /** Show leading icon */
  leftIcon?: boolean;
  /** Show text label */
  showText?: boolean;
  className?: string;
}

export const Lozenge = (props: ILozengeProps) => {
  const {
    variant = "solid",
    color = "default",
    size = "sm",
    label = "Label",
    indicator = false,
    leftIcon = false,
    showText = true,
    className,
    ...rest
  } = props;

  const getVariantClasses = (): string => {
    switch (variant) {
      case "solid":
        return cn(SOLID_BG[color], SOLID_TEXT[color]);
      case "light":
        return cn(LIGHT_BG[color], COLOR_TEXT[color]);
      case "outline":
        return cn("border", COLOR_BORDER[color], COLOR_TEXT[color]);
      case "outlineFilled":
        return cn("bg-background border", COLOR_BORDER[color], COLOR_TEXT[color]);
    }
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-small shrink-0",
        SIZE_CLASSES[size],
        getVariantClasses(),
        className,
      )}
      {...rest}
    >
      {leftIcon && (
        <ArrowLeft01Round className={cn(ICON_SIZE[size], "shrink-0")} />
      )}
      {indicator && (
        <span className="size-2 shrink-0 rounded-full bg-current opacity-70" />
      )}
      {showText && (
        <span
          className={cn(
            "font-lexend font-normal whitespace-nowrap select-none",
            TEXT_SIZE[size],
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
};
