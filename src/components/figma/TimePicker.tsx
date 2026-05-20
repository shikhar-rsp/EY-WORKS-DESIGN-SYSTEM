"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import ReactDOM from "react-dom";

import { ArrowDown01Round, Clock01 } from "@/components/fragments/icons/catalog";
import { useDelayedUnmount } from "@/hooks/useDelayedUnmount";
import { useFloatingPosition } from "@/hooks/useFloatingPosition";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────

type TimeFormatTypes = "12h" | "24h";

// ─── Context ──────────────────────────────────────────────────────

interface ITimePickerContext {
  open: boolean;
  setOpen: (open: boolean) => void;
  hour: number;
  minute: number;
  second: number;
  period: "AM" | "PM";
  setHour: (h: number) => void;
  setMinute: (m: number) => void;
  setSecond: (s: number) => void;
  setPeriod: (p: "AM" | "PM") => void;
  format: TimeFormatTypes;
  showSeconds: boolean;
  onValueChange?: (value: string) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  contentId: string;
}

const TimePickerContext = createContext<ITimePickerContext | null>(null);

const useTimePickerContext = () => {
  const ctx = useContext(TimePickerContext);
  if (!ctx) throw new Error("TimePicker sub-components must be used inside <TimePicker>");
  return ctx;
};

// ─── Helpers ──────────────────────────────────────────────────────

const pad = (n: number) => String(n).padStart(2, "0");

const formatTime = (h: number, m: number, s: number, period: "AM" | "PM", format: TimeFormatTypes, showSeconds: boolean): string => {
  if (format === "12h") {
    const display = h === 0 ? 12 : h > 12 ? h - 12 : h;
    return showSeconds
      ? `${pad(display)}:${pad(m)}:${pad(s)} ${period}`
      : `${pad(display)}:${pad(m)} ${period}`;
  }
  return showSeconds ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(h)}:${pad(m)}`;
};

const parseTimeValue = (value: string): { h: number; m: number; s: number; period: "AM" | "PM" } => {
  const periodMatch = value.match(/(AM|PM)/i);
  const period: "AM" | "PM" = (periodMatch?.[1]?.toUpperCase() as "AM" | "PM") ?? "AM";
  const [hRaw, mRaw, sRaw] = value.replace(/(AM|PM)/i, "").trim().split(":").map(Number);
  return { h: hRaw ?? 0, m: mRaw ?? 0, s: sRaw ?? 0, period };
};

// ═══════════════════════════════════════════════════════════════════

// ─── TimePicker (root) ────────────────────────────────────────────

interface ITimePickerProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  format?: TimeFormatTypes;
  showSeconds?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
}

export const TimePicker = (props: ITimePickerProps) => {
  const {
    value,
    defaultValue = "00:00",
    onValueChange,
    format = "24h",
    showSeconds = false,
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
    children,
  } = props;

  const initial = parseTimeValue(defaultValue);
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [hour, setHourState] = useState(initial.h);
  const [minute, setMinuteState] = useState(initial.m);
  const [second, setSecondState] = useState(initial.s);
  const [period, setPeriodState] = useState<"AM" | "PM">(initial.period);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const contentId = useId();

  // When controlled value changes, parse and sync
  useEffect(() => {
    if (value) {
      const parsed = parseTimeValue(value);
      setHourState(parsed.h);
      setMinuteState(parsed.m);
      setSecondState(parsed.s);
      setPeriodState(parsed.period);
    }
  }, [value]);

  const isOpenControlled = controlledOpen !== undefined;
  const open = isOpenControlled ? controlledOpen : internalOpen;

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isOpenControlled) setInternalOpen(next);
      onOpenChange?.(next);
    },
    [isOpenControlled, onOpenChange],
  );

  const handleUnitChange = useCallback(
    (type: "hour" | "minute" | "second" | "period", val: number | "AM" | "PM") => {
      let h = hour, m = minute, s = second, p = period;
      if (type === "hour") h = val as number;
      else if (type === "minute") m = val as number;
      else if (type === "second") s = val as number;
      else p = val as "AM" | "PM";
      if (type === "hour") setHourState(h);
      else if (type === "minute") setMinuteState(m);
      else if (type === "second") setSecondState(s);
      else setPeriodState(p);
      onValueChange?.(formatTime(h, m, s, p, format, showSeconds));
    },
    [hour, minute, second, period, format, showSeconds, onValueChange],
  );

  const setHour = (h: number) => handleUnitChange("hour", h);
  const setMinute = (m: number) => handleUnitChange("minute", m);
  const setSecond = (s: number) => handleUnitChange("second", s);
  const setPeriod = (p: "AM" | "PM") => handleUnitChange("period", p);

  return (
    <TimePickerContext.Provider
      value={{ open, setOpen, hour, minute, second, period, setHour, setMinute, setSecond, setPeriod, format, showSeconds, onValueChange, triggerRef, contentId }}
    >
      <div data-slot="time-picker" className="relative inline-flex">
        {children}
      </div>
    </TimePickerContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── TimePickerTrigger ────────────────────────────────────────────

interface ITimePickerTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export const TimePickerTrigger = (props: ITimePickerTriggerProps) => {
  const { children, className, onClick, ...rest } = props;
  const ctx = useTimePickerContext();

  return (
    <button
      ref={ctx.triggerRef}
      type="button"
      data-slot="time-picker-trigger"
      aria-expanded={ctx.open}
      aria-haspopup="dialog"
      aria-controls={ctx.contentId}
      onClick={(e) => {
        ctx.setOpen(!ctx.open);
        onClick?.(e);
      }}
      className={cn("cursor-pointer", className)}
      {...rest}
    >
      {children}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── TimePickerValue ──────────────────────────────────────────────

interface ITimePickerValueProps extends HTMLAttributes<HTMLSpanElement> {
  placeholder?: string;
  className?: string;
}

export const TimePickerValue = (props: ITimePickerValueProps) => {
  const { placeholder = "Select time", className, ...rest } = props;
  const { hour, minute, second, period, format, showSeconds } = useTimePickerContext();
  const hasValue = hour !== 0 || minute !== 0 || second !== 0;
  const display = hasValue
    ? formatTime(hour, minute, second, period, format, showSeconds)
    : placeholder;

  return (
    <span
      data-slot="time-picker-value"
      className={cn(
        "inline-flex items-center gap-2 h-9 px-3 rounded-medium border border-border bg-background",
        "font-lexend text-sm text-foreground",
        "hover:border-border-hover transition-colors duration-150",
        !hasValue && "text-muted-foreground",
        className,
      )}
      {...rest}
    >
      <Clock01 className="size-3.5 text-muted-foreground shrink-0" />
      {display}
      <ArrowDown01Round className="size-3.5 shrink-0" />
    </span>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── TimePickerContent ────────────────────────────────────────────

interface ITimePickerContentProps extends HTMLAttributes<HTMLDivElement> {
  sideOffset?: number;
  children?: ReactNode;
  className?: string;
  zIndex?: number;
}

export const TimePickerContent = (props: ITimePickerContentProps) => {
  const { sideOffset = 4, children, className, zIndex = 50, ...rest } = props;
  const { open, setOpen, triggerRef, contentId } = useTimePickerContext();
  const contentRef = useRef<HTMLDivElement>(null);
  const { shouldRender, state } = useDelayedUnmount(open, 150);

  const { position: floatPos } = useFloatingPosition({
    anchor: { type: "ref", ref: triggerRef as React.RefObject<HTMLElement | null> },
    contentRef,
    open: open && shouldRender,
    side: "bottom",
    align: "center",
    sideOffset,
  });

  // Click outside to close
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (contentRef.current?.contains(e.target as Node) || triggerRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, setOpen, triggerRef]);

  // Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, setOpen, triggerRef]);

  if (!shouldRender || typeof document === "undefined") return null;

  return ReactDOM.createPortal(
    <div
      ref={contentRef}
      id={contentId}
      role="dialog"
      aria-modal="false"
      aria-label="Select time"
      data-slot="time-picker-content"
      data-state={state}
      style={{ position: "fixed", top: floatPos.top, left: floatPos.left, zIndex }}
      className={cn(
        "rounded-large border border-border bg-background shadow-lg",
        "transition-[opacity,transform] duration-150 ease-out",
        "data-[state=closed]:opacity-0 data-[state=closed]:scale-95",
        "data-[state=open]:opacity-100 data-[state=open]:scale-100",
        className,
      )}
      {...rest}
    >
      <div className="flex">
        {children}
      </div>
      {/* Confirm / Cancel footer */}
      <div className="flex items-center justify-end gap-2 border-t border-border px-3 py-2">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="font-lexend text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="font-lexend text-xs font-medium text-primary hover:text-primary-hover transition-colors cursor-pointer"
        >
          OK
        </button>
      </div>
    </div>,
    document.body,
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── TimePickerColumn ─────────────────────────────────────────────

type TimePickerUnitTypes = "hour" | "minute" | "second" | "period";

interface ITimePickerColumnProps extends HTMLAttributes<HTMLDivElement> {
  unit: TimePickerUnitTypes;
  className?: string;
}

export const TimePickerColumn = (props: ITimePickerColumnProps) => {
  const { unit, className, ...rest } = props;
  const ctx = useTimePickerContext();

  const getOptions = (): Array<{ label: string; value: number | "AM" | "PM" }> => {
    if (unit === "period") {
      return [
        { label: "AM", value: "AM" },
        { label: "PM", value: "PM" },
      ];
    }
    const maxHour = ctx.format === "12h" ? 12 : 23;
    const max = unit === "hour" ? maxHour : 59;
    const start = unit === "hour" && ctx.format === "12h" ? 1 : 0;
    return Array.from({ length: max - start + 1 }, (_, i) => ({
      label: pad(i + start),
      value: i + start,
    }));
  };

  const getSelected = (): number | "AM" | "PM" => {
    if (unit === "hour") return ctx.hour;
    if (unit === "minute") return ctx.minute;
    if (unit === "second") return ctx.second;
    return ctx.period;
  };

  const handleSelect = (val: number | "AM" | "PM") => {
    if (unit === "hour") ctx.setHour(val as number);
    else if (unit === "minute") ctx.setMinute(val as number);
    else if (unit === "second") ctx.setSecond(val as number);
    else ctx.setPeriod(val as "AM" | "PM");
  };

  const selected = getSelected();
  const options = getOptions();

  return (
    <div
      data-slot="time-picker-column"
      data-unit={unit}
      className={cn(
        "flex flex-col overflow-y-auto",
        "h-48 w-14 py-1",
        "scrollbar-thin",
        "border-r border-border last:border-r-0",
        className,
      )}
      {...rest}
    >
      {options.map((opt) => (
        <button
          key={String(opt.value)}
          type="button"
          data-state={opt.value === selected ? "selected" : "unselected"}
          onClick={() => handleSelect(opt.value)}
          className={cn(
            "flex h-8 shrink-0 items-center justify-center",
            "font-lexend text-sm transition-colors duration-100 cursor-pointer",
            "hover:bg-muted",
            "focus-visible:outline-none focus-visible:bg-muted",
            opt.value === selected
              ? "bg-primary/10 text-primary font-semibold"
              : "text-foreground",
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};
