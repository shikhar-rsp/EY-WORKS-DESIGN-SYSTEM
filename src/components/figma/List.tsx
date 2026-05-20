import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

// ─── List (root) ─────────────────────────────────────────────────────────────

const listVariants = cva(
  ["w-full font-lexend"].join(" "),
  {
    variants: {
      bordered: {
        true: "rounded-large border border-border",
        false: "",
      },
      split: {
        true: "[&>li+li]:border-t [&>li+li]:border-border",
        false: "",
      },
      size: {
        sm: "[&>li]:px-3 [&>li]:py-2",
        default: "[&>li]:px-4 [&>li]:py-3",
        lg: "[&>li]:px-5 [&>li]:py-4",
      },
    },
    defaultVariants: {
      bordered: false,
      split: true,
      size: "default",
    },
  },
);

interface IListProps
  extends HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof listVariants> {
  bordered?: boolean;
  split?: boolean;
  size?: "sm" | "default" | "lg";
  children?: ReactNode;
  className?: string;
}

export const List = (props: IListProps) => {
  const { bordered = false, split = true, size = "default", children, className, ...rest } = props;
  return (
    <ul
      data-slot="list"
      className={cn(listVariants({ bordered, split, size }), className)}
      {...rest}
    >
      {children}
    </ul>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ListHeader ──────────────────────────────────────────────────

interface IListHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const ListHeader = (props: IListHeaderProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      data-slot="list-header"
      className={cn(
        "px-4 py-3 font-semibold text-sm text-foreground border-b border-border",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ListFooter ──────────────────────────────────────────────────

interface IListFooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const ListFooter = (props: IListFooterProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      data-slot="list-footer"
      className={cn(
        "px-4 py-3 text-xs text-muted-foreground border-t border-border",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ListItem ────────────────────────────────────────────────────

interface IListItemProps extends HTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
  className?: string;
}

export const ListItem = (props: IListItemProps) => {
  const { children, className, ...rest } = props;
  return (
    <li
      data-slot="list-item"
      className={cn("flex items-center gap-3 bg-background", className)}
      {...rest}
    >
      {children}
    </li>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ListItemMedia ───────────────────────────────────────────────

interface IListItemMediaProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const ListItemMedia = (props: IListItemMediaProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      data-slot="list-item-media"
      className={cn("flex shrink-0 items-center", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ListItemContent ─────────────────────────────────────────────

interface IListItemContentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const ListItemContent = (props: IListItemContentProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      data-slot="list-item-content"
      className={cn("min-w-0 flex-1 flex flex-col gap-0.5", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ListItemTitle ───────────────────────────────────────────────

interface IListItemTitleProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
}

export const ListItemTitle = (props: IListItemTitleProps) => {
  const { children, className, ...rest } = props;
  return (
    <p
      data-slot="list-item-title"
      className={cn("text-sm font-medium text-foreground truncate", className)}
      {...rest}
    >
      {children}
    </p>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ListItemDescription ─────────────────────────────────────────

interface IListItemDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
}

export const ListItemDescription = (props: IListItemDescriptionProps) => {
  const { children, className, ...rest } = props;
  return (
    <p
      data-slot="list-item-description"
      className={cn("text-xs text-muted-foreground truncate", className)}
      {...rest}
    >
      {children}
    </p>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ListItemActions ─────────────────────────────────────────────

interface IListItemActionsProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const ListItemActions = (props: IListItemActionsProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      data-slot="list-item-actions"
      className={cn("flex shrink-0 items-center gap-2", className)}
      {...rest}
    >
      {children}
    </div>
  );
};
