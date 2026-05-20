"use client";

import {
  createContext,
  useCallback,
  useContext,
  useId,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { ArrowDown01Round } from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";

// ─── Root Context ─────────────────────────────────────────────────

type AccordionTypeTypes = "single" | "multiple";

interface IAccordionContext {
  type: AccordionTypeTypes;
  collapsible: boolean;
  value: string | string[];
  onItemToggle: (itemValue: string) => void;
  disabled: boolean;
}

const AccordionContext = createContext<IAccordionContext | null>(null);

const useAccordionContext = () => {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("Accordion sub-components must be used inside <Accordion>");
  }
  return ctx;
};

// ─── Item Context ─────────────────────────────────────────────────

interface IAccordionItemContext {
  value: string;
  isOpen: boolean;
  disabled: boolean;
  triggerId: string;
  contentId: string;
}

const AccordionItemContext = createContext<IAccordionItemContext | null>(null);

const useAccordionItemContext = () => {
  const ctx = useContext(AccordionItemContext);
  if (!ctx) {
    throw new Error("AccordionTrigger and AccordionContent must be used inside <AccordionItem>");
  }
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── Accordion (root) ─────────────────────────────────────────────

interface IAccordionSingleProps {
  type: "single";
  collapsible?: boolean;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

interface IAccordionMultipleProps {
  type: "multiple";
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
}

type IAccordionProps = (IAccordionSingleProps | IAccordionMultipleProps) & {
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, "value" | "defaultValue" | "onChange">;

export const Accordion = (props: IAccordionProps) => {
  const disabled = props.disabled ?? false;
  const collapsible = props.type === "single" ? props.collapsible ?? false : false;

  const initialValue: string | string[] =
    props.value !== undefined
      ? props.value
      : props.defaultValue !== undefined
        ? props.defaultValue
        : props.type === "multiple"
          ? []
          : "";

  const [internalValue, setInternalValue] = useState<string | string[]>(initialValue);

  const isControlled = props.value !== undefined;
  const value = isControlled ? (props.value as string | string[]) : internalValue;

  const onItemToggle = useCallback(
    (itemValue: string) => {
      if (props.type === "single") {
        const current = value as string;
        const next = current === itemValue ? (collapsible ? "" : current) : itemValue;
        if (!isControlled) setInternalValue(next);
        props.onValueChange?.(next);
      } else {
        const current = Array.isArray(value) ? value : [];
        const next = current.includes(itemValue)
          ? current.filter((v) => v !== itemValue)
          : [...current, itemValue];
        if (!isControlled) setInternalValue(next);
        props.onValueChange?.(next);
      }
    },
    [props, value, collapsible, isControlled],
  );

  return (
    <AccordionContext.Provider
      value={{ type: props.type, collapsible, value, onItemToggle, disabled }}
    >
      <div className={cn("w-full", props.className)}>{props.children}</div>
    </AccordionContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── AccordionItem ────────────────────────────────────────────────

interface IAccordionItemProps extends Omit<HTMLAttributes<HTMLDivElement>, "value"> {
  value: string;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
}

export const AccordionItem = (props: IAccordionItemProps) => {
  const { value, disabled = false, className, children, ...rest } = props;
  const ctx = useAccordionContext();
  const reactId = useId();
  const triggerId = `${reactId}-trigger`;
  const contentId = `${reactId}-content`;

  const isOpen = Array.isArray(ctx.value) ? ctx.value.includes(value) : ctx.value === value;
  const itemDisabled = disabled || ctx.disabled;

  return (
    <AccordionItemContext.Provider
      value={{ value, isOpen, disabled: itemDisabled, triggerId, contentId }}
    >
      <div
        data-state={isOpen ? "open" : "closed"}
        data-disabled={itemDisabled || undefined}
        className={cn("border-b border-border last:border-b-0", className)}
        {...rest}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── AccordionTrigger ─────────────────────────────────────────────

interface IAccordionTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export const AccordionTrigger = (props: IAccordionTriggerProps) => {
  const { children, className, onClick, ...rest } = props;
  const ctx = useAccordionContext();
  const item = useAccordionItemContext();

  return (
    <h3 className="flex">
      <button
        type="button"
        id={item.triggerId}
        aria-expanded={item.isOpen}
        aria-controls={item.contentId}
        data-state={item.isOpen ? "open" : "closed"}
        disabled={item.disabled}
        onClick={(e) => {
          ctx.onItemToggle(item.value);
          onClick?.(e);
        }}
        className={cn(
          "flex flex-1 items-center justify-between gap-200 py-200",
          "font-lexend text-sm font-medium text-foreground text-left",
          "transition-all hover:underline cursor-pointer",
          "disabled:pointer-events-none disabled:opacity-50",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
          className,
        )}
        {...rest}
      >
        {children}
        <ArrowDown01Round
          className={cn(
            "size-3.5 shrink-0 transition-transform duration-200",
            item.isOpen && "rotate-180",
          )}
        />
      </button>
    </h3>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── AccordionContent ─────────────────────────────────────────────

interface IAccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const AccordionContent = (props: IAccordionContentProps) => {
  const { children, className, ...rest } = props;
  const item = useAccordionItemContext();

  return (
    <div
      id={item.contentId}
      role="region"
      aria-labelledby={item.triggerId}
      data-state={item.isOpen ? "open" : "closed"}
      className={cn(
        "grid font-lexend text-sm text-secondary-foreground",
        "grid-rows-[0fr] transition-[grid-template-rows] duration-200 ease-out",
        "data-[state=open]:grid-rows-[1fr]",
      )}
      {...rest}
    >
      <div className="overflow-hidden">
        <div className={cn("pb-200 pt-0", className)}>{children}</div>
      </div>
    </div>
  );
};
