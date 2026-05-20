"use client";

import { cn } from "@/lib/utils";
import { ArrowRight01Round } from "@/components/fragments/icons/catalog";

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

interface IBreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {
  className?: string;
  children?: React.ReactNode;
}

export const Breadcrumb = (props: IBreadcrumbProps) => {
  const { className, children, ...rest } = props;
  return (
    <nav aria-label="breadcrumb" className={cn(className)} {...rest}>
      {children}
    </nav>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════

// ─── BreadcrumbList ───────────────────────────────────────────────────────────

interface IBreadcrumbListProps extends React.ComponentPropsWithoutRef<"ol"> {
  className?: string;
  children?: React.ReactNode;
}

export const BreadcrumbList = (props: IBreadcrumbListProps) => {
  const { className, children, ...rest } = props;
  return (
    <ol
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground",
        "list-none p-0 m-0",
        className,
      )}
      {...rest}
    >
      {children}
    </ol>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════

// ─── BreadcrumbItem ───────────────────────────────────────────────────────────

interface IBreadcrumbItemProps extends React.ComponentPropsWithoutRef<"li"> {
  className?: string;
  children?: React.ReactNode;
}

export const BreadcrumbItem = (props: IBreadcrumbItemProps) => {
  const { className, children, ...rest } = props;
  return (
    <li className={cn("inline-flex items-center gap-1.5", className)} {...rest}>
      {children}
    </li>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════

// ─── BreadcrumbLink ───────────────────────────────────────────────────────────

interface IBreadcrumbLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export const BreadcrumbLink = (props: IBreadcrumbLinkProps) => {
  const { href = "#", className, children, ...rest } = props;
  return (
    <a
      href={href}
      className={cn(
        "font-lexend text-sm text-muted-foreground",
        "transition-colors hover:text-foreground",
        "inline-flex items-center gap-1",
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════

// ─── BreadcrumbPage ───────────────────────────────────────────────────────────

interface IBreadcrumbPageProps extends React.ComponentPropsWithoutRef<"span"> {
  className?: string;
  children?: React.ReactNode;
}

export const BreadcrumbPage = (props: IBreadcrumbPageProps) => {
  const { className, children, ...rest } = props;
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(
        "font-lexend text-sm font-medium text-foreground",
        "inline-flex items-center gap-1",
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════

// ─── BreadcrumbSeparator ──────────────────────────────────────────────────────

interface IBreadcrumbSeparatorProps extends React.ComponentPropsWithoutRef<"li"> {
  children?: React.ReactNode;
  className?: string;
}

export const BreadcrumbSeparator = (props: IBreadcrumbSeparatorProps) => {
  const { children, className, ...rest } = props;
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn(
        "inline-flex items-center justify-center size-4 text-muted-foreground",
        "[&>svg]:size-3.5",
        className,
      )}
      {...rest}
    >
      {children ?? <ArrowRight01Round />}
    </li>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════

// ─── BreadcrumbEllipsis ───────────────────────────────────────────────────────

interface IBreadcrumbEllipsisProps extends React.ComponentPropsWithoutRef<"span"> {
  className?: string;
}

export const BreadcrumbEllipsis = (props: IBreadcrumbEllipsisProps) => {
  const { className, ...rest } = props;
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn(
        "flex size-9 items-center justify-center",
        "text-muted-foreground text-sm font-lexend tracking-widest",
        className,
      )}
      {...rest}
    >
      &#8230;
    </span>
  );
};
