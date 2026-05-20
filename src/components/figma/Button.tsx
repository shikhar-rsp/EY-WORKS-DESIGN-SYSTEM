"use client";

import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

// Shadcn canonical variant names + project-specific extras
export type ButtonVariantTypes =
  // shadcn canonical names
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  // project extras / legacy aliases
  | "primary"
  | "danger"
  | "tertiary"
  | "tertiary-grey"
  | "tertiary-white"
  | "grey"
  | "white"
  | "dashed"
  | "skeleton";

// Shadcn canonical size names + project-specific extras
export type ButtonSizeTypes =
  // shadcn canonical names
  | "default"
  | "sm"
  | "lg"
  | "icon"
  // project extras
  | "compact"
  | "narrow";

export type NotificationColorTypes = "danger" | "information";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantTypes;
  size?: ButtonSizeTypes;
  /** @deprecated Use native `disabled` prop instead. Kept for backward compatibility. */
  isDisabled?: boolean;
  /**
   * Renders an icon-only button (no text). Adjusts dimensions to a square target.
   * Pass the icon via leadingIcon prop.
   * @deprecated Prefer `size="icon"` for standard icon buttons.
   */
  iconOnly?: boolean;
  /** Icon rendered before the label (16×16). */
  leadingIcon?: React.ReactNode;
  /** Icon rendered after the label (16×16). */
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  /** Shows a notification dot badge at the top-right of the button. */
  notificationDot?: boolean;
  /** Optional count text inside the notification dot (e.g. "9+"). */
  notificationCount?: string;
  /** Color of the notification dot — "danger" (red) or "information" (blue). Defaults to "danger". */
  notificationColor?: NotificationColorTypes;
}

// ─── CVA ──────────────────────────────────────────────────────────────────────

const buttonVariants = cva(
  [
    "relative inline-flex items-center justify-center gap-100",
    "font-medium font-lexend text-[14px] leading-5 whitespace-nowrap",
    "rounded-medium",
    "transition-colors duration-150 cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
    "disabled:cursor-not-allowed",
  ].join(" "),
  {
    variants: {
      variant: {
        // ── shadcn canonical names ─────────────────────────────────
        default: [
          "bg-primary text-primary-foreground border border-transparent",
          "hover:bg-primary-hover",
          "active:bg-neutral active:text-primary active:border-primary-hover",
          "disabled:bg-disabled-surface disabled:text-disabled disabled:border-disabled-border",
        ].join(" "),

        destructive: [
          "bg-background text-destructive border border-destructive",
          "hover:bg-destructive-hover",
          "active:bg-destructive-active active:text-primary-foreground active:border-destructive",
          "disabled:bg-disabled-surface disabled:text-disabled disabled:border-disabled-border",
        ].join(" "),

        outline: [
          "bg-background text-primary border border-border",
          "hover:bg-muted-hover hover:border-primary",
          "active:bg-accent-active active:text-primary-foreground active:border-primary-hover",
          "disabled:bg-disabled-surface disabled:text-disabled disabled:border-disabled-border",
        ].join(" "),

        secondary: [
          "bg-muted text-foreground border border-border",
          "hover:bg-neutral-hover",
          "active:bg-muted-active",
          "disabled:bg-disabled-surface disabled:text-disabled disabled:border-disabled-border",
        ].join(" "),

        ghost: [
          "bg-transparent text-primary border border-transparent",
          "hover:bg-neutral-hover",
          "active:bg-neutral",
          "disabled:text-disabled",
        ].join(" "),

        link: [
          "bg-transparent text-info underline decoration-solid font-normal",
          "hover:opacity-80",
          "active:opacity-60",
          "disabled:text-disabled disabled:no-underline disabled:opacity-100",
        ].join(" "),

        // ── project extras ────────────────────────────────────────
        // Legacy aliases — same styles as shadcn names
        primary: [
          "bg-primary text-primary-foreground border border-transparent",
          "hover:bg-primary-hover",
          "active:bg-neutral active:text-primary active:border-primary-hover",
          "disabled:bg-disabled-surface disabled:text-disabled disabled:border-disabled-border",
        ].join(" "),

        danger: [
          "bg-background text-destructive border border-destructive",
          "hover:bg-destructive-hover",
          "active:bg-destructive-active active:text-primary-foreground active:border-destructive",
          "disabled:bg-disabled-surface disabled:text-disabled disabled:border-disabled-border",
        ].join(" "),

        tertiary: [
          "bg-transparent text-primary border border-transparent",
          "hover:bg-neutral-hover",
          "active:bg-neutral",
          "disabled:text-disabled",
        ].join(" "),

        // Unique extras not in shadcn
        "tertiary-grey": [
          "bg-transparent text-muted-foreground border border-transparent",
          "hover:bg-muted-hover",
          "active:bg-neutral",
          "disabled:text-disabled",
        ].join(" "),

        "tertiary-white": [
          "bg-transparent text-primary-foreground border border-transparent",
          "hover:bg-white/10",
          "active:bg-white/20",
          "disabled:text-disabled",
        ].join(" "),

        grey: [
          "bg-muted text-foreground border border-border",
          "hover:bg-neutral-hover",
          "active:bg-muted-active",
          "disabled:bg-disabled-surface disabled:text-disabled disabled:border-disabled-border",
        ].join(" "),

        white: [
          "bg-disabled-surface text-muted-foreground border border-transparent",
          "hover:bg-neutral-hover",
          "active:bg-muted-active",
          "disabled:text-disabled",
        ].join(" "),

        dashed: [
          "bg-transparent text-foreground border border-dashed border-muted-foreground",
          "hover:bg-neutral-hover hover:border-transparent hover:border-solid",
          "active:bg-muted-active active:border-transparent active:border-solid",
          "disabled:text-disabled disabled:border-disabled-border disabled:border-solid",
        ].join(" "),

        skeleton: [
          "bg-neutral animate-pulse pointer-events-none select-none",
          "border-0 text-transparent overflow-hidden",
        ].join(" "),
      },

      size: {
        // shadcn canonical sizes
        default: "h-9 min-w-[40px] px-200",
        sm: "h-8 min-w-[40px] px-200",
        lg: "h-10 min-w-[40px] px-300",
        icon: "h-9 w-9 min-w-0 p-0",
        // project extras
        compact: "h-8 min-w-[40px] px-200",
        narrow: "h-8 px-050",
      },

      iconOnly: {
        true: "",
        false: "",
      },
    },

    compoundVariants: [
      // Icon-only dimensions override size padding
      { iconOnly: true as const, size: "default" as const, class: "h-8 w-12 min-w-0 px-0" },
      { iconOnly: true as const, size: "sm" as const, class: "h-8 w-12 min-w-0 px-0" },
      { iconOnly: true as const, size: "compact" as const, class: "h-8 w-12 min-w-0 px-0" },
      { iconOnly: true as const, size: "narrow" as const, class: "h-8 w-6 min-w-0 px-0" },
      // link overrides all size padding/height
      { variant: "link" as const, class: "h-auto min-w-0 px-0 py-0 gap-050" },
    ],

    defaultVariants: {
      variant: "default",
      size: "default",
      iconOnly: false,
    },
  },
);

// ─── Button ───────────────────────────────────────────────────────────────────

export const Button = (props: IButtonProps) => {
  const {
    variant = "default",
    size = "default",
    isDisabled = false,
    iconOnly = false,
    leadingIcon,
    trailingIcon,
    children,
    className,
    notificationDot = false,
    notificationCount,
    notificationColor = "danger",
    disabled,
    ...rest
  } = props;

  const isDisabledFinal = isDisabled || disabled;

  return (
    <button
      className={cn(buttonVariants({ variant, size, iconOnly }), className)}
      disabled={isDisabledFinal}
      aria-disabled={isDisabledFinal}
      {...rest}
    >
      {leadingIcon && (
        <span className="inline-flex shrink-0 items-center justify-center size-4">
          {leadingIcon}
        </span>
      )}
      {!iconOnly && children}
      {iconOnly && leadingIcon === undefined && children}
      {trailingIcon && !iconOnly && (
        <span className="inline-flex shrink-0 items-center justify-center size-4">
          {trailingIcon}
        </span>
      )}
      {notificationDot && (
        <span
          className={cn(
            "absolute -top-2.25 -right-0.75",
            "flex items-center justify-center size-4 rounded-full",
            "font-lexend font-normal text-[12px] leading-4 text-primary-foreground",
            notificationColor === "information" ? "bg-info-bold" : "bg-destructive-bold",
          )}
          aria-hidden="true"
        >
          {notificationCount}
        </span>
      )}
    </button>
  );
};
