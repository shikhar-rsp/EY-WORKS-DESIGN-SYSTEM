"use client";

import React from "react";

import {
  ArrowLeft01Round,
  Cancel01,
} from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";

// ═══════════════════════════════════════════════════════════════
// Types & constants
// ═══════════════════════════════════════════════════════════════

export type TagVariantTypes = "outline" | "solid" | "subtle";
export type TagColorTypes =
  | "default"
  | "brand"
  | "white"
  | "red"
  | "blue"
  | "yellow"
  | "purple"
  | "limeGreen";

interface ITagColorConfig {
  solid: string;
  solidText: string;
  outline: string;
  subtle: string;
  text: string;
}

const COLOR_MAP: Record<TagColorTypes, ITagColorConfig> = {
  default: {
    solid: "bg-secondary hover:bg-secondary-hover active:bg-muted-active",
    solidText: "text-foreground",
    outline:
      "border border-border hover:bg-secondary active:bg-secondary-hover",
    subtle: "bg-muted hover:bg-secondary active:bg-secondary-hover",
    text: "text-foreground",
  },
  brand: {
    solid: "bg-primary hover:bg-primary-hover active:bg-primary-active",
    solidText: "text-primary-foreground",
    outline:
      "border border-primary hover:bg-primary-subtle active:bg-primary-muted",
    subtle:
      "bg-primary-subtlest hover:bg-primary-subtle active:bg-primary-muted",
    text: "text-foreground",
  },
  white: {
    solid:
      "bg-background border border-border hover:bg-muted active:bg-secondary",
    solidText: "text-foreground",
    outline: "border border-border hover:bg-muted active:bg-secondary",
    subtle: "bg-background hover:bg-muted active:bg-secondary",
    text: "text-foreground",
  },
  red: {
    solid:
      "bg-destructive-bold hover:bg-destructive active:bg-destructive-accent",
    solidText: "text-primary-foreground",
    outline:
      "border border-destructive hover:bg-destructive-subtle active:bg-destructive-hover",
    subtle:
      "bg-destructive-subtle hover:bg-destructive-hover active:bg-destructive-hover",
    text: "text-foreground",
  },
  blue: {
    solid: "bg-info-bold hover:bg-info",
    solidText: "text-primary-foreground",
    outline: "border border-info hover:bg-accent-blue active:bg-accent-blue/80",
    subtle: "bg-accent-blue hover:bg-accent-blue/80 active:bg-accent-blue/60",
    text: "text-foreground",
  },
  yellow: {
    solid: "bg-warning-bold hover:bg-warning",
    solidText: "text-foreground",
    outline:
      "border border-warning hover:bg-accent-yellow active:bg-accent-yellow/80",
    subtle:
      "bg-accent-yellow hover:bg-accent-yellow/80 active:bg-accent-yellow/60",
    text: "text-foreground",
  },
  purple: {
    solid: "bg-discovery-bold hover:bg-discovery",
    solidText: "text-primary-foreground",
    outline:
      "border border-discovery hover:bg-accent-purple active:bg-accent-purple/80",
    subtle:
      "bg-accent-purple hover:bg-accent-purple/80 active:bg-accent-purple/60",
    text: "text-foreground",
  },
  limeGreen: {
    solid: "bg-success-bold hover:bg-success",
    solidText: "text-primary-foreground",
    outline:
      "border border-success hover:bg-accent-lime active:bg-accent-lime/80",
    subtle: "bg-accent-lime hover:bg-accent-lime/80 active:bg-accent-lime/60",
    text: "text-foreground",
  },
};

// ═══════════════════════════════════════════════════════════════
// Tag
// ═══════════════════════════════════════════════════════════════

interface ITagProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style / treatment */
  variant?: TagVariantTypes;
  /** Color theme */
  color?: TagColorTypes;
  /** Label text */
  label?: string;
  /** Show leading icon */
  leftIcon?: boolean;
  /** Show trailing close/dismiss icon */
  rightIcon?: boolean;
  className?: string;
}

export const Tag = (props: ITagProps) => {
  const {
    variant = "solid",
    color = "default",
    label = "Label",
    leftIcon = false,
    rightIcon = false,
    className,
    ...rest
  } = props;

  const colorConfig = COLOR_MAP[color];
  const styleClasses = colorConfig[variant];
  const textClass =
    variant === "solid" ? colorConfig.solidText : colorConfig.text;

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full cursor-pointer select-none",
        "h-7 px-150 py-050 gap-050",
        "transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        styleClasses,
        textClass,
        className,
      )}
      tabIndex={0}
      {...rest}
    >
      {leftIcon && <ArrowLeft01Round className="size-3 shrink-0" />}
      <span className="font-lexend font-normal text-sm leading-5 whitespace-nowrap">
        {label}
      </span>
      {rightIcon && <Cancel01 className="size-3 shrink-0" />}
    </div>
  );
};
