import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

// ═══════════════════════════════════════════════════════════════════
// Divider (Horizontal)
// ═══════════════════════════════════════════════════════════════════

type DividerSpacingTypes = "default" | "8" | "16" | "20" | "40" | "80";

interface IDividerProps extends HTMLAttributes<HTMLDivElement> {
  spacing?: DividerSpacingTypes;
  className?: string;
}

export const Divider = (props: IDividerProps) => {
  const { spacing = "default", className, ...rest } = props;

  const spacingClass = {
    default: "py-0",
    "8": "py-2",
    "16": "py-4",
    "20": "py-5",
    "40": "py-10",
    "80": "py-20",
  }[spacing];

  return (
    <div
      className={cn("flex w-full flex-col items-center justify-center", spacingClass, className)}
      {...rest}
    >
      <div className="w-full border-t border-border" />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════
// VerticalDivider
// ═══════════════════════════════════════════════════════════════════

type VerticalDividerSizeTypes = "large" | "medium" | "small";

interface IVerticalDividerProps extends HTMLAttributes<HTMLDivElement> {
  size?: VerticalDividerSizeTypes;
  className?: string;
}

export const VerticalDivider = (props: IVerticalDividerProps) => {
  const { size = "medium", className, ...rest } = props;

  const containerClass = {
    large: "w-1.5 h-[68px]",
    medium: "w-0.5 h-5",
    small: "w-0.5 h-4",
  }[size];

  const barClass = {
    large: "w-1 h-[60px]",
    medium: "w-0.5 h-5",
    small: "w-0.5 h-4",
  }[size];

  return (
    <div
      className={cn("flex items-center justify-center", containerClass, className)}
      {...rest}
    >
      <div
        className={cn(
          "rounded-full bg-border-hover transition-colors hover:bg-subtlest",
          barClass
        )}
      />
    </div>
  );
};
