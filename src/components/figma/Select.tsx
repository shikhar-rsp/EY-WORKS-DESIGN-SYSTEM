"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import ReactDOM from "react-dom";
import { cva } from "class-variance-authority";

import { ArrowDown01Round, ArrowUp01Round, Tick02 } from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";
import { useDelayedUnmount } from "@/hooks/useDelayedUnmount";
import { useFloatingPosition } from "@/hooks/useFloatingPosition";

// ─── Root Context ─────────────────────────────────────────────────

interface ISelectContext {
  value: string;
  onValueChange: (value: string) => void;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  disabled: boolean;
  labelMap: Map<string, string>;
  registerLabel: (value: string, label: string) => void;
}

const SelectContext = createContext<ISelectContext>({
  value: "",
  onValueChange: () => {},
  isOpen: false,
  setOpen: () => {},
  triggerRef: { current: null },
  disabled: false,
  labelMap: new Map(),
  registerLabel: () => {},
});

const useSelectContext = () => useContext(SelectContext);

// ─── Scroll Context (for SelectContent scroll buttons) ────────────

interface ISelectScrollContext {
  listRef: React.RefObject<HTMLDivElement | null>;
  canScrollUp: boolean;
  canScrollDown: boolean;
  scrollUp: () => void;
  scrollDown: () => void;
}

const SelectScrollContext = createContext<ISelectScrollContext | null>(null);

const useSelectScrollContext = () => useContext(SelectScrollContext);

// ═══════════════════════════════════════════════════════════════════

// ─── Select root ──────────────────────────────────────────────────

interface ISelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  children?: ReactNode;
}

export const Select = (props: ISelectProps) => {
  const { value: controlledValue, defaultValue = "", onValueChange, disabled = false, children } = props;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [isOpen, setIsOpenState] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const labelMapRef = useRef(new Map<string, string>());

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const onValueChangeFn = useCallback(
    (v: string) => {
      if (controlledValue === undefined) setInternalValue(v);
      onValueChange?.(v);
      setIsOpenState(false);
    },
    [controlledValue, onValueChange],
  );

  const setOpen = useCallback((next: boolean) => setIsOpenState(next), []);

  const registerLabel = useCallback((v: string, label: string) => {
    labelMapRef.current.set(v, label);
  }, []);

  return (
    <SelectContext.Provider
      value={{
        value,
        onValueChange: onValueChangeFn,
        isOpen,
        setOpen,
        triggerRef,
        disabled,
        labelMap: labelMapRef.current,
        registerLabel,
      }}
    >
      <div style={{ display: "contents" }}>{children}</div>
    </SelectContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── SelectTrigger ────────────────────────────────────────────────

type SelectTriggerSizeTypes = "default" | "sm";

const selectTriggerVariants = cva(
  [
    "flex w-full items-center justify-between",
    "rounded-medium border border-border-input bg-background px-150",
    "text-sm text-foreground",
    "transition-colors focus:outline-none focus:ring-2 focus:ring-ring",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "[&>span]:line-clamp-1",
  ].join(" "),
  {
    variants: {
      size: {
        default: "h-9",
        sm: "h-8",
      },
    },
    defaultVariants: { size: "default" },
  },
);

interface ISelectTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  size?: SelectTriggerSizeTypes;
  className?: string;
  children?: ReactNode;
}

export const SelectTrigger = (props: ISelectTriggerProps) => {
  const { size = "default", className, children, ...rest } = props;
  const { isOpen, setOpen, triggerRef, disabled } = useSelectContext();

  return (
    <button
      ref={triggerRef}
      type="button"
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      disabled={disabled}
      onClick={() => !disabled && setOpen(!isOpen)}
      className={cn(selectTriggerVariants({ size }), className)}
      {...rest}
    >
      {children}
      <ArrowDown01Round className="size-3.5" />
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── SelectValue ──────────────────────────────────────────────────

interface ISelectValueProps {
  placeholder?: string;
  className?: string;
}

export const SelectValue = (props: ISelectValueProps) => {
  const { placeholder, className } = props;
  const { value, labelMap } = useSelectContext();
  const displayLabel = value ? (labelMap.get(value) ?? value) : (placeholder ?? "");

  return (
    <span className={cn("flex-1 truncate text-left", !value && "text-placeholder", className)}>
      {displayLabel}
    </span>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── SelectContent ────────────────────────────────────────────────

type SelectPositionTypes = "popper" | "item-aligned";

interface ISelectContentProps {
  position?: SelectPositionTypes;
  className?: string;
  children?: ReactNode;
  zIndex?: number;
}

export const SelectContent = (props: ISelectContentProps) => {
  // position="item-aligned" falls back to popper (no Radix anchor)
  const { className, children, zIndex = 50 } = props;
  const { isOpen, setOpen, triggerRef } = useSelectContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { shouldRender, state } = useDelayedUnmount(isOpen, 150);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  const { position: floatPos, width: floatWidth } = useFloatingPosition({
    anchor: { type: "ref", ref: triggerRef as React.RefObject<HTMLElement | null> },
    contentRef,
    open: isOpen && shouldRender,
    side: "bottom",
    align: "start",
    matchWidth: true,
  });

  const updateScrollState = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    setCanScrollUp(el.scrollTop > 0);
    setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 1);
  }, []);

  const scrollUp = useCallback(() => {
    listRef.current?.scrollBy({ top: -40 });
  }, []);

  const scrollDown = useCallback(() => {
    listRef.current?.scrollBy({ top: 40 });
  }, []);

  useEffect(() => {
    if (isOpen) setTimeout(updateScrollState, 0);
  }, [isOpen, updateScrollState]);

  // Click outside
  useEffect(() => {
    if (!isOpen) return;
    const onMouseDown = (e: MouseEvent) => {
      if (
        contentRef.current?.contains(e.target as Node) ||
        triggerRef.current?.contains(e.target as Node)
      ) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [isOpen, setOpen, triggerRef]);

  // Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); triggerRef.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, setOpen, triggerRef]);

  if (!shouldRender || typeof document === "undefined") return null;

  return ReactDOM.createPortal(
    <SelectScrollContext.Provider value={{ listRef, canScrollUp, canScrollDown, scrollUp, scrollDown }}>
      <div
        ref={contentRef}
        role="listbox"
        data-state={state}
        style={{
          position: "fixed",
          top: floatPos.top,
          left: floatPos.left,
          width: floatWidth ?? undefined,
          minWidth: "8rem",
          zIndex,
        }}
        className={cn(
          "overflow-hidden rounded-large border border-border bg-background shadow-lg",
          "transition-[opacity,transform] duration-150 ease-out",
          "data-[state=closed]:opacity-0 data-[state=closed]:scale-95",
          "data-[state=open]:opacity-100 data-[state=open]:scale-100",
          className,
        )}
      >
        <div
          ref={listRef}
          className="max-h-64 overflow-y-auto p-050 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onScroll={updateScrollState}
        >
          {children}
        </div>
      </div>
    </SelectScrollContext.Provider>,
    document.body,
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── SelectScrollUpButton / SelectScrollDownButton ────────────────

interface ISelectScrollButtonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const SelectScrollUpButton = (props: ISelectScrollButtonProps) => {
  const { className, ...rest } = props;
  const ctx = useSelectScrollContext();
  if (!ctx?.canScrollUp) return null;

  return (
    <div
      className={cn(
        "flex cursor-default items-center justify-center py-1 text-muted-foreground",
        "hover:text-foreground transition-colors",
        className,
      )}
      onMouseEnter={ctx.scrollUp}
      {...rest}
    >
      <ArrowUp01Round className="size-3.5" />
    </div>
  );
};

export const SelectScrollDownButton = (props: ISelectScrollButtonProps) => {
  const { className, ...rest } = props;
  const ctx = useSelectScrollContext();
  if (!ctx?.canScrollDown) return null;

  return (
    <div
      className={cn(
        "flex cursor-default items-center justify-center py-1 text-muted-foreground",
        "hover:text-foreground transition-colors",
        className,
      )}
      onMouseEnter={ctx.scrollDown}
      {...rest}
    >
      <ArrowDown01Round className="size-3.5" />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── SelectGroup / SelectLabel ────────────────────────────────────

interface ISelectGroupProps {
  children?: ReactNode;
  className?: string;
}

export const SelectGroup = (props: ISelectGroupProps) => {
  const { children, className } = props;
  return <div role="group" className={cn(className)}>{children}</div>;
};

interface ISelectLabelProps {
  children?: ReactNode;
  className?: string;
}

export const SelectLabel = (props: ISelectLabelProps) => {
  const { children, className } = props;
  return (
    <div className={cn("px-150 py-075 text-xs font-semibold text-muted-foreground", className)}>
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── SelectItem ───────────────────────────────────────────────────

interface ISelectItemProps {
  value: string;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}

export const SelectItem = (props: ISelectItemProps) => {
  const { value, disabled = false, children, className } = props;
  const { value: selectedValue, onValueChange, registerLabel } = useSelectContext();
  const isSelected = selectedValue === value;

  const labelRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (labelRef.current) {
      registerLabel(value, labelRef.current.textContent ?? value);
    }
  }, [value, registerLabel]);

  return (
    <button
      role="option"
      aria-selected={isSelected}
      type="button"
      disabled={disabled}
      onClick={() => !disabled && onValueChange(value)}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center",
        "rounded-small py-075 pl-[2rem] pr-150 text-sm",
        "outline-none transition-colors duration-100",
        "hover:bg-muted hover:text-foreground",
        "focus:bg-muted focus:text-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
        isSelected && "font-medium text-foreground",
        className,
      )}
    >
      <span className="absolute left-150 flex size-3.5 items-center justify-center">
        {isSelected && <Tick02 className="size-3" />}
      </span>
      <span ref={labelRef}>{children}</span>
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── SelectSeparator ──────────────────────────────────────────────

interface ISelectSeparatorProps {
  className?: string;
}

export const SelectSeparator = (props: ISelectSeparatorProps) => {
  const { className } = props;
  return <hr className={cn("-mx-050 my-050 border-t border-border", className)} />;
};
