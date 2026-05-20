import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

// ─── Badge (root wrapper) ────────────────────────────────────────────────────

interface IBadgeProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const Badge = (props: IBadgeProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      data-slot="badge"
      className={cn("relative inline-flex", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── BadgeIndicator ──────────────────────────────────────────────

type BadgeIndicatorVariantTypes = "count" | "dot";
type BadgeIndicatorColorTypes = "danger" | "primary" | "success" | "warning";
type BadgeIndicatorPlacementTypes = "top-right" | "top-left" | "bottom-right" | "bottom-left";

const badgeIndicatorVariants = cva(
  [
    "absolute z-10 flex items-center justify-center",
    "font-lexend font-semibold leading-none",
    "ring-2 ring-background",
  ].join(" "),
  {
    variants: {
      variant: {
        count: "min-w-[18px] h-[18px] rounded-full px-1 text-[10px]",
        dot: "size-2.5 rounded-full",
      },
      color: {
        danger: "bg-destructive text-destructive-foreground",
        primary: "bg-primary text-primary-foreground",
        success: "bg-success text-success-foreground",
        warning: "bg-warning-bold text-white",
      },
      placement: {
        "top-right": "-top-1 -right-1 translate-x-1/3 -translate-y-1/3",
        "top-left": "-top-1 -left-1 -translate-x-1/3 -translate-y-1/3",
        "bottom-right": "-bottom-1 -right-1 translate-x-1/3 translate-y-1/3",
        "bottom-left": "-bottom-1 -left-1 -translate-x-1/3 translate-y-1/3",
      },
    },
    defaultVariants: {
      variant: "count",
      color: "danger",
      placement: "top-right",
    },
  },
);

interface IBadgeIndicatorProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeIndicatorVariants> {
  variant?: BadgeIndicatorVariantTypes;
  color?: BadgeIndicatorColorTypes;
  placement?: BadgeIndicatorPlacementTypes;
  /** The count to display (only used when variant="count"). Pass 0 to hide if using showZero=false. */
  count?: number;
  /** When true, show the badge even if count is 0. @default false */
  showZero?: boolean;
  /** When count exceeds this value, display "{max}+" instead. @default 99 */
  max?: number;
  className?: string;
}

export const BadgeIndicator = (props: IBadgeIndicatorProps) => {
  const {
    variant = "count",
    color = "danger",
    placement = "top-right",
    count,
    showZero = false,
    max = 99,
    className,
    ...rest
  } = props;

  if (variant === "count" && count !== undefined) {
    if (count === 0 && !showZero) return null;
  }

  const displayCount =
    variant === "count" && count !== undefined
      ? count > max
        ? `${max}+`
        : String(count)
      : null;

  return (
    <span
      data-slot="badge-indicator"
      data-variant={variant}
      className={cn(badgeIndicatorVariants({ variant, color, placement }), className)}
      aria-label={displayCount ? `${displayCount} notifications` : undefined}
      {...rest}
    >
      {displayCount}
    </span>
  );
};
