"use client";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ArrowLeft01Round, ArrowRight01Round, MoreHorizontal } from "@/components/fragments/icons/catalog";

// ─── PaginationLink CVA ───────────────────────────────────────────

const paginationLinkVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-medium font-lexend text-sm font-medium",
    "transition-colors duration-150",
    "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
    "aria-disabled:pointer-events-none aria-disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        ghost: [
          "border border-transparent bg-transparent text-foreground",
          "hover:bg-muted hover:text-foreground",
        ].join(" "),
        outline: [
          "border border-border bg-background text-foreground",
          "hover:bg-muted hover:text-foreground",
        ].join(" "),
      },
      size: {
        default: "h-9 px-150 min-w-9",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "icon",
    },
  },
);

// ═══════════════════════════════════════════════════════════════════

// ─── Pagination ───────────────────────────────────────────────────

interface IPaginationProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children?: React.ReactNode;
}

export const Pagination = (props: IPaginationProps) => {
  const { className, children, ...rest } = props;
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...rest}
    >
      {children}
    </nav>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── PaginationContent ────────────────────────────────────────────

interface IPaginationContentProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
  children?: React.ReactNode;
}

export const PaginationContent = (props: IPaginationContentProps) => {
  const { className, children, ...rest } = props;
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row flex-wrap items-center justify-center gap-050", className)}
      {...rest}
    >
      {children}
    </ul>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── PaginationItem ───────────────────────────────────────────────

interface IPaginationItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  className?: string;
  children?: React.ReactNode;
}

export const PaginationItem = (props: IPaginationItemProps) => {
  const { className, children, ...rest } = props;
  return (
    <li data-slot="pagination-item" className={cn("", className)} {...rest}>
      {children}
    </li>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── PaginationLink ───────────────────────────────────────────────

interface IPaginationLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
  size?: "default" | "icon";
  className?: string;
  children?: React.ReactNode;
}

export const PaginationLink = (props: IPaginationLinkProps) => {
  const { isActive = false, size = "icon", className, children, ...rest } = props;

  return (
    <a
      data-slot="pagination-link"
      aria-current={isActive ? "page" : undefined}
      className={cn(
        paginationLinkVariants({ variant: isActive ? "outline" : "ghost", size }),
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── PaginationPrevious ───────────────────────────────────────────

interface IPaginationPreviousProps extends IPaginationLinkProps {}

export const PaginationPrevious = (props: IPaginationPreviousProps) => {
  const { className, ...rest } = props;
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-075", className)}
      {...rest}
    >
      <ArrowLeft01Round className="size-4" />
      <span className="hidden sm:inline">Previous</span>
    </PaginationLink>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── PaginationNext ───────────────────────────────────────────────

interface IPaginationNextProps extends IPaginationLinkProps {}

export const PaginationNext = (props: IPaginationNextProps) => {
  const { className, ...rest } = props;
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-075", className)}
      {...rest}
    >
      <span className="hidden sm:inline">Next</span>
      <ArrowRight01Round className="size-4" />
    </PaginationLink>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── PaginationEllipsis ───────────────────────────────────────────

interface IPaginationEllipsisProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

export const PaginationEllipsis = (props: IPaginationEllipsisProps) => {
  const { className, ...rest } = props;
  return (
    <span
      data-slot="pagination-ellipsis"
      aria-hidden="true"
      className={cn("flex h-9 w-9 items-center justify-center text-muted-foreground", className)}
      {...rest}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
};
