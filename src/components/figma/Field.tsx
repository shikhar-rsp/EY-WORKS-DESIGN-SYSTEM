"use client";

import { createContext, useContext, useId } from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

// ─── Context ──────────────────────────────────────────────────────

interface IFieldContext {
  invalid: boolean;
  inputId: string;
  describedById: string;
}

const FieldContext = createContext<IFieldContext>({
  invalid: false,
  inputId: "",
  describedById: "",
});

const useFieldContext = () => useContext(FieldContext);

// ═══════════════════════════════════════════════════════════════════

// ─── Field root ───────────────────────────────────────────────────

type FieldOrientationTypes = "vertical" | "horizontal" | "responsive";

interface IFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: FieldOrientationTypes;
  /** Marks the field as invalid — propagated to label/description via context. */
  invalid?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Field = (props: IFieldProps) => {
  const { orientation = "vertical", invalid = false, children, className, ...rest } = props;
  const inputId = useId();
  const describedById = useId();

  return (
    <FieldContext.Provider value={{ invalid, inputId, describedById }}>
      <div
        data-invalid={invalid || undefined}
        className={cn(
          "flex gap-075",
          orientation === "horizontal"
            ? "flex-row items-start"
            : orientation === "responsive"
              ? "flex-col sm:flex-row sm:items-start"
              : "flex-col",
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    </FieldContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── FieldLabel ───────────────────────────────────────────────────

interface IFieldLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
  className?: string;
}

export const FieldLabel = (props: IFieldLabelProps) => {
  const { children, className, htmlFor, ...rest } = props;
  const { invalid, inputId } = useFieldContext();

  return (
    <label
      htmlFor={htmlFor ?? inputId}
      data-invalid={invalid || undefined}
      className={cn(
        "inline-flex items-center gap-050",
        "font-lexend text-sm font-medium leading-none text-foreground",
        "select-none",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        "data-[invalid]:text-destructive",
        className,
      )}
      {...rest}
    >
      {children}
    </label>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── FieldDescription ─────────────────────────────────────────────

interface IFieldDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
  className?: string;
}

export const FieldDescription = (props: IFieldDescriptionProps) => {
  const { children, className, ...rest } = props;
  const { describedById } = useFieldContext();

  return (
    <p
      id={describedById}
      className={cn("text-xs leading-relaxed text-muted-foreground", className)}
      {...rest}
    >
      {children}
    </p>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── FieldError ───────────────────────────────────────────────────

interface IFieldErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Single error string or array of error strings. */
  errors?: string | string[];
  children?: React.ReactNode;
  className?: string;
}

export const FieldError = (props: IFieldErrorProps) => {
  const { errors, children, className, ...rest } = props;

  const errorList = Array.isArray(errors)
    ? errors
    : errors
      ? [errors]
      : [];

  const content = errorList.length > 0
    ? errorList.map((e, i) => <span key={i} className="block">{e}</span>)
    : children;

  if (!content) return null;

  return (
    <p
      role="alert"
      aria-live="polite"
      data-slot="field-error"
      className={cn("text-xs font-lexend text-destructive", className)}
      {...rest}
    >
      {content}
    </p>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── FieldContent ─────────────────────────────────────────────────

interface IFieldContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const FieldContent = (props: IFieldContentProps) => {
  const { children, className, ...rest } = props;

  return (
    <div className={cn("flex flex-col gap-075", className)} {...rest}>
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── FieldTitle ───────────────────────────────────────────────────

interface IFieldTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
  className?: string;
}

export const FieldTitle = (props: IFieldTitleProps) => {
  const { children, className, ...rest } = props;

  return (
    <p
      className={cn(
        "font-lexend text-sm font-medium leading-none text-foreground",
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── FieldGroup ───────────────────────────────────────────────────

interface IFieldGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const FieldGroup = (props: IFieldGroupProps) => {
  const { children, className, ...rest } = props;

  return (
    <div className={cn("flex flex-col gap-200", className)} {...rest}>
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── FieldSet ─────────────────────────────────────────────────────

interface IFieldSetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children?: React.ReactNode;
  className?: string;
}

export const FieldSet = (props: IFieldSetProps) => {
  const { children, className, ...rest } = props;

  return (
    <fieldset
      className={cn("flex flex-col gap-200 border-0 p-0 m-0", className)}
      {...rest}
    >
      {children}
    </fieldset>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── FieldLegend ──────────────────────────────────────────────────

type FieldLegendVariantTypes = "legend" | "label";

const fieldLegendVariants = cva(
  ["font-lexend leading-none select-none"].join(" "),
  {
    variants: {
      variant: {
        legend: "text-base font-semibold text-foreground",
        label: "text-sm font-medium text-foreground",
      },
    },
    defaultVariants: { variant: "legend" },
  },
);

interface IFieldLegendProps extends React.HTMLAttributes<HTMLLegendElement> {
  variant?: FieldLegendVariantTypes;
  children?: React.ReactNode;
  className?: string;
}

export const FieldLegend = (props: IFieldLegendProps) => {
  const { variant = "legend", children, className, ...rest } = props;

  return (
    <legend
      className={cn(fieldLegendVariants({ variant }), className)}
      {...rest}
    >
      {children}
    </legend>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── FieldSeparator ───────────────────────────────────────────────

interface IFieldSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const FieldSeparator = (props: IFieldSeparatorProps) => {
  const { children, className, ...rest } = props;

  if (children) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={cn("flex items-center gap-200", className)}
        {...rest}
      >
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground">{children}</span>
        <div className="flex-1 h-px bg-border" />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn("h-px w-full bg-border", className)}
      {...rest}
    />
  );
};
