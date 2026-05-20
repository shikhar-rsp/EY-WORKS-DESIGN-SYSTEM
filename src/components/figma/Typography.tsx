import { cva, type VariantProps } from "class-variance-authority";
import { type AnchorHTMLAttributes, type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

// ─── Typography (optional root wrapper) ──────────────────────────────────────

interface ITypographyProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const Typography = (props: ITypographyProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      data-slot="typography"
      className={cn("font-lexend text-foreground", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── TypographyTitle ─────────────────────────────────────────────

type TypographyTitleLevelTypes = 1 | 2 | 3 | 4 | 5;

const typographyTitleVariants = cva(
  ["font-lexend font-semibold tracking-tight text-foreground leading-tight"].join(" "),
  {
    variants: {
      level: {
        1: "text-4xl",
        2: "text-3xl",
        3: "text-2xl",
        4: "text-xl",
        5: "text-lg",
      },
    },
    defaultVariants: { level: 1 },
  },
);

interface ITypographyTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: TypographyTitleLevelTypes;
  children?: ReactNode;
  className?: string;
}

export const TypographyTitle = (props: ITypographyTitleProps) => {
  const { level = 1, children, className, ...rest } = props;

  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5";

  return (
    <Tag
      data-slot="typography-title"
      className={cn(typographyTitleVariants({ level }), className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── TypographyParagraph ─────────────────────────────────────────

interface ITypographyParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
}

export const TypographyParagraph = (props: ITypographyParagraphProps) => {
  const { children, className, ...rest } = props;
  return (
    <p
      data-slot="typography-paragraph"
      className={cn(
        "font-lexend text-base leading-7 text-foreground",
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── TypographyText ──────────────────────────────────────────────

type TypographyTextTypeTypes = "default" | "secondary" | "success" | "warning" | "danger";

const typographyTextVariants = cva(
  ["font-lexend text-sm leading-6"].join(" "),
  {
    variants: {
      type: {
        default: "text-foreground",
        secondary: "text-muted-foreground",
        success: "text-success",
        warning: "text-warning-bold",
        danger: "text-destructive",
      },
    },
    defaultVariants: { type: "default" },
  },
);

interface ITypographyTextProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof typographyTextVariants> {
  type?: TypographyTextTypeTypes;
  strong?: boolean;
  italic?: boolean;
  underline?: boolean;
  delete?: boolean;
  mark?: boolean;
  code?: boolean;
  children?: ReactNode;
  className?: string;
}

export const TypographyText = (props: ITypographyTextProps) => {
  const {
    type = "default",
    strong = false,
    italic = false,
    underline = false,
    delete: del = false,
    mark = false,
    code = false,
    children,
    className,
    ...rest
  } = props;

  let content: ReactNode = children;

  if (del) content = <del>{content}</del>;
  if (mark) content = <mark className="bg-warning/30 px-0.5 rounded-xsmall">{content}</mark>;
  if (code)
    content = (
      <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">{content}</code>
    );

  return (
    <span
      data-slot="typography-text"
      className={cn(
        typographyTextVariants({ type }),
        strong && "font-semibold",
        italic && "italic",
        underline && "underline underline-offset-2",
        className,
      )}
      {...rest}
    >
      {content}
    </span>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── TypographyLink ──────────────────────────────────────────────

interface ITypographyLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
  className?: string;
}

export const TypographyLink = (props: ITypographyLinkProps) => {
  const { children, className, ...rest } = props;
  return (
    <a
      data-slot="typography-link"
      className={cn(
        "font-lexend text-sm text-primary underline underline-offset-2",
        "hover:text-primary-hover transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-xsmall",
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
};
