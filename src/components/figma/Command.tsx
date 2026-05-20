"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

import { Search } from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";
import { useDelayedUnmount } from "@/hooks/useDelayedUnmount";

// ─── Context ───────────────────────────────────────────────────────

type FilterFnTypes = (value: string, search: string, keywords?: string[]) => boolean;

interface ICommandContext {
  search: string;
  setSearch: (s: string) => void;
  selectedValue: string;
  setSelectedValue: (v: string) => void;
  activeId: string;
  setActiveId: (id: string) => void;
  listId: string;
  shouldFilter: boolean;
  filter: FilterFnTypes;
  loop: boolean;
  onItemVisibility: (value: string, visible: boolean) => void;
  visibleCount: number;
}

const CommandContext = createContext<ICommandContext | null>(null);

const useCommandContext = () => {
  const ctx = useContext(CommandContext);
  if (!ctx) throw new Error("Command sub-components must be used inside <Command>");
  return ctx;
};

const defaultFilter: FilterFnTypes = (value, search, keywords = []) => {
  const haystack = (value + " " + keywords.join(" ")).toLowerCase();
  return haystack.includes(search.toLowerCase());
};

// ═══════════════════════════════════════════════════════════════════

// ─── Command root ─────────────────────────────────────────────────

interface ICommandProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  filter?: FilterFnTypes;
  shouldFilter?: boolean;
  loop?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Command = (props: ICommandProps) => {
  const {
    defaultValue = "",
    value: controlledValue,
    onValueChange,
    filter = defaultFilter,
    shouldFilter = true,
    loop = false,
    children,
    className,
    ...rest
  } = props;

  const [search, setSearch] = useState("");
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [activeId, setActiveId] = useState("");
  const [visibleItems, setVisibleItems] = useState<Map<string, boolean>>(new Map());
  const listId = useId();

  const selectedValue = controlledValue !== undefined ? controlledValue : internalValue;

  const setSelectedValue = useCallback(
    (v: string) => {
      if (controlledValue === undefined) setInternalValue(v);
      onValueChange?.(v);
    },
    [controlledValue, onValueChange],
  );

  const onItemVisibility = useCallback((value: string, visible: boolean) => {
    setVisibleItems((prev) => {
      if (prev.get(value) === visible) return prev;
      const next = new Map(prev);
      next.set(value, visible);
      return next;
    });
  }, []);

  const visibleCount = Array.from(visibleItems.values()).filter(Boolean).length;

  return (
    <CommandContext.Provider
      value={{
        search,
        setSearch,
        selectedValue,
        setSelectedValue,
        activeId,
        setActiveId,
        listId,
        shouldFilter,
        filter,
        loop,
        onItemVisibility,
        visibleCount,
      }}
    >
      <div
        role="combobox"
        aria-expanded="true"
        aria-haspopup="listbox"
        aria-owns={listId}
        className={cn(
          "flex flex-col overflow-hidden rounded-large border border-border bg-background",
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    </CommandContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── CommandInput ─────────────────────────────────────────────────

interface ICommandInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const CommandInput = (props: ICommandInputProps) => {
  const { className, onChange, ...rest } = props;
  const { search, setSearch, activeId, listId } = useCommandContext();

  return (
    <div className="flex items-center border-b border-border px-150">
      <span className="mr-075 shrink-0 text-muted-foreground inline-flex items-center">
        <Search className="size-4" />
      </span>
      <input
        role="searchbox"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        aria-label="Search"
        aria-controls={listId}
        aria-activedescendant={activeId || undefined}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          onChange?.(e);
        }}
        className={cn(
          "flex h-10 w-full bg-transparent text-sm text-foreground placeholder:text-placeholder",
          "outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...rest}
      />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── CommandList ──────────────────────────────────────────────────

interface ICommandListProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export const CommandList = (props: ICommandListProps) => {
  const { className, children, ...rest } = props;
  const { listId, setActiveId, loop } = useCommandContext();
  const ref = useRef<HTMLDivElement>(null);

  const ITEM_SEL = '[role="option"]:not([disabled])';

  const getItems = () =>
    Array.from(ref.current?.querySelectorAll<HTMLElement>(ITEM_SEL) ?? []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const items = getItems();
    if (!items.length) return;

    const activeEl = ref.current?.querySelector<HTMLElement>(`[role="option"][data-active="true"]`);
    const idx = activeEl ? items.indexOf(activeEl) : -1;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = loop
        ? items[(idx + 1) % items.length]
        : items[Math.min(idx + 1, items.length - 1)];
      next?.focus();
      setActiveId(next?.id ?? "");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = loop
        ? items[(idx - 1 + items.length) % items.length]
        : items[Math.max(idx - 1, 0)];
      prev?.focus();
      setActiveId(prev?.id ?? "");
    } else if (e.key === "Home") {
      e.preventDefault();
      items[0]?.focus();
      setActiveId(items[0]?.id ?? "");
    } else if (e.key === "End") {
      e.preventDefault();
      items[items.length - 1]?.focus();
      setActiveId(items[items.length - 1]?.id ?? "");
    } else if (e.key === "Enter") {
      e.preventDefault();
      const active = ref.current?.querySelector<HTMLElement>('[role="option"][data-active="true"]');
      active?.click();
    }
  };

  return (
    <div
      ref={ref}
      id={listId}
      role="listbox"
      onKeyDown={onKeyDown}
      className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden p-050", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── CommandEmpty ─────────────────────────────────────────────────

interface ICommandEmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const CommandEmpty = (props: ICommandEmptyProps) => {
  const { children, className, ...rest } = props;
  const { visibleCount } = useCommandContext();

  if (visibleCount > 0) return null;

  return (
    <div
      className={cn("py-300 text-center text-sm text-muted-foreground", className)}
      {...rest}
    >
      {children ?? "No results found."}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── CommandGroup ─────────────────────────────────────────────────

interface ICommandGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: string;
  children?: React.ReactNode;
  className?: string;
}

export const CommandGroup = (props: ICommandGroupProps) => {
  const { heading, children, className, ...rest } = props;

  return (
    <div
      role="group"
      className={cn("overflow-hidden p-050", className)}
      {...rest}
    >
      {heading && (
        <div className="px-150 py-075 text-xs font-semibold text-muted-foreground">
          {heading}
        </div>
      )}
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── CommandSeparator ─────────────────────────────────────────────

interface ICommandSeparatorProps {
  className?: string;
}

export const CommandSeparator = (props: ICommandSeparatorProps) => {
  const { className } = props;
  return <hr className={cn("-mx-050 my-050 border-t border-border", className)} />;
};

// ═══════════════════════════════════════════════════════════════════

// ─── CommandItem ──────────────────────────────────────────────────

interface ICommandItemProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onSelect"> {
  value?: string;
  keywords?: string[];
  onSelect?: (value: string) => void;
  children?: React.ReactNode;
  className?: string;
}

export const CommandItem = (props: ICommandItemProps) => {
  const { value = "", keywords = [], onSelect, children, className, onClick, disabled, ...rest } = props;
  const { search, selectedValue, setSelectedValue, filter, shouldFilter, onItemVisibility, setActiveId } =
    useCommandContext();
  const itemId = useId();

  const isVisible = !shouldFilter || !search || filter(value, search, keywords);
  const isSelected = selectedValue === value;

  // Register visibility in context
  useEffect(() => {
    onItemVisibility(value, isVisible);
    return () => { onItemVisibility(value, false); };
  }, [value, isVisible, onItemVisibility]);

  if (!isVisible) return null;

  return (
    <button
      id={itemId}
      role="option"
      aria-selected={isSelected}
      type="button"
      disabled={disabled}
      data-value={value}
      data-active={isSelected ? "true" : undefined}
      onFocus={() => setActiveId(itemId)}
      onBlur={() => setActiveId("")}
      onClick={(e) => {
        if (disabled) return;
        setSelectedValue(value);
        onSelect?.(value);
        onClick?.(e);
      }}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center gap-150",
        "rounded-small px-150 py-075 text-sm outline-none",
        "transition-colors duration-100",
        "hover:bg-muted hover:text-foreground",
        "focus:bg-muted focus:text-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
        isSelected && "bg-muted text-foreground",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── CommandShortcut ──────────────────────────────────────────────

interface ICommandShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  className?: string;
}

export const CommandShortcut = (props: ICommandShortcutProps) => {
  const { children, className, ...rest } = props;
  return (
    <span
      className={cn("ml-auto pl-200 text-xs tracking-widest text-muted-foreground", className)}
      {...rest}
    >
      {children}
    </span>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── CommandDialog ────────────────────────────────────────────────

interface ICommandDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
  className?: string;
}

export const CommandDialog = (props: ICommandDialogProps) => {
  const { open = false, onOpenChange, children, className } = props;
  const { shouldRender, state } = useDelayedUnmount(open, 200);

  // Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange?.(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  // Body scroll lock — unlock immediately on close
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!shouldRender || typeof document === "undefined") return null;

  return createPortal(
    <>
      <div
        aria-hidden="true"
        data-state={state}
        onClick={() => onOpenChange?.(false)}
        className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-[2px] transition-opacity duration-200 ease-out data-[state=closed]:opacity-0 data-[state=open]:opacity-100"
      />
      <div
        role="dialog"
        aria-modal="true"
        data-state={state}
        className="fixed left-1/2 top-1/4 z-50 w-full max-w-lg -translate-x-1/2 transition-[opacity,transform] duration-200 ease-out data-[state=closed]:opacity-0 data-[state=closed]:scale-95 data-[state=open]:opacity-100 data-[state=open]:scale-100"
      >
        <Command className={cn("rounded-large shadow-lg", className)}>
          {children}
        </Command>
      </div>
    </>,
    document.body,
  );
};
