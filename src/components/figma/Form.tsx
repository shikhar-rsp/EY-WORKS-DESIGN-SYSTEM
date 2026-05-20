"use client";

/**
 * @registry-deps Field
 *
 * Imports FieldLabel, FieldDescription, FieldError from Field.tsx.
 * The registry generator should list "field" as a registryDependency
 * so the CLI installs Field alongside Form.
 */

import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useId,
  useState,
  type FormHTMLAttributes,
  type HTMLAttributes,
  type LabelHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";

import { FieldLabel } from "@/components/figma/Field";
import { FieldDescription } from "@/components/figma/Field";
import { FieldError } from "@/components/figma/Field";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────

type FormValuesTypes = Record<string, string | number | boolean>;
type FormErrorsTypes = Record<string, string | string[]>;

// ─── Form Context ─────────────────────────────────────────────────

interface IFormContext {
  values: FormValuesTypes;
  errors: FormErrorsTypes;
  setFieldValue: (name: string, value: string | number | boolean) => void;
  setFieldError: (name: string, error: string | string[]) => void;
  clearFieldError: (name: string) => void;
}

const FormContext = createContext<IFormContext | null>(null);

const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("Form sub-components must be used inside <Form>");
  return ctx;
};

// ─── FormField Context ────────────────────────────────────────────

interface IFormFieldContext {
  name: string;
  id: string;
  describedById: string;
  error: string | string[] | undefined;
}

const FormFieldContext = createContext<IFormFieldContext | null>(null);

const useFormFieldContext = () => {
  const ctx = useContext(FormFieldContext);
  if (!ctx) throw new Error("FormItem, FormLabel, FormControl, FormMessage must be used inside <FormField>");
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── Form (root) ──────────────────────────────────────────────────

interface IFormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  defaultValues?: FormValuesTypes;
  onSubmit?: (values: FormValuesTypes) => void | Promise<void>;
  children?: ReactNode;
  className?: string;
}

export const Form = (props: IFormProps) => {
  const { defaultValues = {}, onSubmit, children, className, ...rest } = props;

  const [values, setValues] = useState<FormValuesTypes>(defaultValues);
  const [errors, setErrors] = useState<FormErrorsTypes>({});

  const setFieldValue = useCallback((name: string, value: string | number | boolean) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const setFieldError = useCallback((name: string, error: string | string[]) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  const clearFieldError = useCallback((name: string) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit?.(values);
  };

  return (
    <FormContext.Provider value={{ values, errors, setFieldValue, setFieldError, clearFieldError }}>
      <form
        data-slot="form"
        onSubmit={handleSubmit}
        className={cn("space-y-200", className)}
        noValidate
        {...rest}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── FormField ────────────────────────────────────────────────────

interface IFormFieldProps {
  name: string;
  children?: ReactNode;
  className?: string;
}

export const FormField = (props: IFormFieldProps) => {
  const { name, children, className } = props;
  const form = useFormContext();
  const reactId = useId();
  const id = `${reactId}-field`;
  const describedById = `${reactId}-desc`;
  const error = form.errors[name];

  return (
    <FormFieldContext.Provider value={{ name, id, describedById, error }}>
      <div data-slot="form-field" className={cn(className)}>
        {children}
      </div>
    </FormFieldContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── FormItem ─────────────────────────────────────────────────────

interface IFormItemProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const FormItem = (props: IFormItemProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      data-slot="form-item"
      className={cn("flex flex-col gap-075", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── FormLabel ────────────────────────────────────────────────────

interface IFormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
  className?: string;
}

export const FormLabel = (props: IFormLabelProps) => {
  const { children, className, ...rest } = props;
  const field = useFormFieldContext();
  const form = useFormContext();
  const invalid = !!form.errors[field.name];

  return (
    <FieldLabel
      data-slot="form-label"
      htmlFor={field.id}
      data-invalid={invalid || undefined}
      className={cn("data-[invalid]:text-destructive", className)}
      {...rest}
    >
      {children}
    </FieldLabel>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── FormControl ──────────────────────────────────────────────────

interface IFormControlProps {
  children: ReactElement;
}

export const FormControl = (props: IFormControlProps) => {
  const { children } = props;
  const field = useFormFieldContext();
  const form = useFormContext();
  const invalid = !!form.errors[field.name];

  const child = Children.only(children);
  if (!isValidElement(child)) return child;

  return cloneElement(child as ReactElement<Record<string, unknown>>, {
    id: field.id,
    "aria-describedby": field.describedById,
    "aria-invalid": invalid || undefined,
  });
};

// ═══════════════════════════════════════════════════════════════════

// ─── FormDescription ──────────────────────────────────────────────

interface IFormDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
}

export const FormDescription = (props: IFormDescriptionProps) => {
  const { children, className, ...rest } = props;
  const field = useFormFieldContext();

  return (
    <FieldDescription
      data-slot="form-description"
      id={field.describedById}
      className={className}
      {...rest}
    >
      {children}
    </FieldDescription>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── FormMessage ──────────────────────────────────────────────────

interface IFormMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
}

export const FormMessage = (props: IFormMessageProps) => {
  const { children, className, ...rest } = props;
  const field = useFormFieldContext();

  return (
    <FieldError
      data-slot="form-message"
      errors={typeof field.error === "string" ? field.error : field.error?.join(", ")}
      className={className}
      {...rest}
    >
      {children}
    </FieldError>
  );
};
