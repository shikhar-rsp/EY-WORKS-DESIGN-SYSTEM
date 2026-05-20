"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  ArrowDown01Round,
  ArrowLeft01Round,
  ArrowLeftDoubleRound,
  ArrowRight01Round,
  ArrowRightDoubleRound,
  Beach,
  BirthdayCake,
  Calendar01,
  Clock01,
  PlusSignCircle,
  Sad01,
  Stars,
  Sun01,
} from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";

// ═══════════════════════════════════════════════════════════════════════════════
// Shared helpers & constants
// ═══════════════════════════════════════════════════════════════════════════════

const getDaysInMonth = (year: number, month: number): number =>
  new Date(year, month + 1, 0).getDate();

const getFirstDayOfWeek = (year: number, month: number): number => {
  const day = new Date(year, month, 1).getDay();
  return (day + 6) % 7;
};

interface IGridCell {
  day: number;
  inView: boolean;
}

const generateCalendarGrid = (year: number, month: number): IGridCell[] => {
  const firstDay = getFirstDayOfWeek(year, month);
  const daysInMonth = getDaysInMonth(year, month);
  const prevDays = getDaysInMonth(year, month - 1 < 0 ? 11 : month - 1);
  const cells: IGridCell[] = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: prevDays - i, inView: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, inView: true });
  }
  let next = 1;
  while (cells.length < 42) {
    cells.push({ day: next++, inView: false });
  }
  return cells;
};

const MONTH_NAMES_FULL = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const MONTH_NAMES_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const QUARTER_NAMES = ["Q1", "Q2", "Q3", "Q4"];
const WEEKDAYS_SHORT = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const now = new Date();

// ═══════════════════════════════════════════════════════════════════════════════
// Calendar (shadcn-aligned root)
// ═══════════════════════════════════════════════════════════════════════════════

// ── Private helpers ───────────────────────────────────────────────

type WeekStartTypes = 0 | 1 | 2 | 3 | 4 | 5 | 6;

interface ICalendarGridCell {
  date: Date;
  inView: boolean;
}

const buildCalendarGrid = (
  year: number,
  month: number,
  weekStartsOn: WeekStartTypes = 1,
): ICalendarGridCell[] => {
  const firstDay = new Date(year, month, 1).getDay();
  // How many leading days from previous month
  const leadingDays = (firstDay - weekStartsOn + 7) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: ICalendarGridCell[] = [];

  for (let i = leadingDays - 1; i >= 0; i--) {
    cells.push({ date: new Date(year, month - 1, new Date(year, month, 0).getDate() - i), inView: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(year, month, d), inView: true });
  }
  let next = 1;
  while (cells.length < 42) {
    cells.push({ date: new Date(year, month + 1, next++), inView: false });
  }
  return cells;
};

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

const isDateDisabled = (date: Date, disabled?: Date[] | ((d: Date) => boolean)): boolean => {
  if (!disabled) return false;
  if (typeof disabled === "function") return disabled(date);
  return disabled.some((d) => isSameDay(d, date));
};

const getISOWeek = (date: Date): number => {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
};

const WEEKDAY_ABBRS = (weekStartsOn: WeekStartTypes = 1) => {
  const labels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  return Array.from({ length: 7 }, (_, i) => labels[(weekStartsOn + i) % 7]);
};

// ── Private CalendarDayButton ─────────────────────────────────────

interface ICalendarDayButtonProps {
  date: Date;
  inView: boolean;
  isSelected: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  isInRange: boolean;
  isToday: boolean;
  isDisabled: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}

const CalendarDayButton = (props: ICalendarDayButtonProps) => {
  const { date, inView, isSelected, isRangeStart, isRangeEnd, isInRange, isToday, isDisabled, onClick, onMouseEnter } = props;

  const isHighlighted = isSelected || isRangeStart || isRangeEnd;

  return (
    <button
      type="button"
      tabIndex={isDisabled || !inView ? -1 : 0}
      aria-selected={isHighlighted}
      aria-disabled={isDisabled || !inView}
      data-today={isToday || undefined}
      onClick={!isDisabled && inView ? onClick : undefined}
      onMouseEnter={!isDisabled && inView ? onMouseEnter : undefined}
      className={cn(
        "relative flex size-[32px] items-center justify-center rounded-day",
        "font-lexend text-[13px] leading-[1.5] transition-colors select-none",
        !inView && "text-disabled cursor-default opacity-50",
        inView && !isDisabled && !isHighlighted && !isInRange && "text-foreground hover:bg-muted-hover cursor-pointer",
        inView && isDisabled && "text-disabled cursor-not-allowed opacity-50",
        isHighlighted && "bg-primary text-primary-foreground cursor-pointer",
        isInRange && !isHighlighted && "bg-primary-subtle text-foreground rounded-none cursor-pointer",
        isToday && !isHighlighted && !isInRange && "ring-1 ring-primary ring-inset",
        isRangeStart && "rounded-l-day rounded-r-none",
        isRangeEnd && "rounded-r-day rounded-l-none",
        isRangeStart && isRangeEnd && "rounded-day",
      )}
    >
      {date.getDate()}
    </button>
  );
};

// ── Types ─────────────────────────────────────────────────────────

type CalendarSelectedTypes = Date | { from: Date; to?: Date };

interface ICalendarProps {
  mode?: "single" | "range";
  selected?: CalendarSelectedTypes;
  defaultSelected?: CalendarSelectedTypes;
  onSelect?: (value: CalendarSelectedTypes | undefined) => void;
  month?: Date;
  defaultMonth?: Date;
  onMonthChange?: (month: Date) => void;
  numberOfMonths?: number;
  captionLayout?: "label" | "dropdown";
  showOutsideDays?: boolean;
  showWeekNumber?: boolean;
  disabled?: Date[] | ((date: Date) => boolean);
  weekStartsOn?: WeekStartTypes;
  locale?: string;
  dir?: "ltr" | "rtl";
  className?: string;
}

// ── Calendar root ─────────────────────────────────────────────────

export const Calendar = (props: ICalendarProps) => {
  const {
    mode = "single",
    selected: controlledSelected,
    defaultSelected,
    onSelect,
    month: controlledMonth,
    defaultMonth,
    onMonthChange,
    numberOfMonths = 1,
    captionLayout = "label",
    showOutsideDays = true,
    showWeekNumber = false,
    disabled,
    weekStartsOn = 1,
    dir = "ltr",
    className,
  } = props;

  const today = new Date();
  const defaultMonthValue = defaultMonth ?? today;

  const [internalSelected, setInternalSelected] = useState<CalendarSelectedTypes | undefined>(defaultSelected);
  const [internalMonth, setInternalMonth] = useState(defaultMonthValue);
  const [hoverDate, setHoverDate] = useState<Date | undefined>(undefined);

  const isSelectedControlled = controlledSelected !== undefined;
  const isMonthControlled = controlledMonth !== undefined;

  const selectedValue = isSelectedControlled ? controlledSelected : internalSelected;
  const viewMonth = isMonthControlled ? controlledMonth! : internalMonth;
  const viewYear = viewMonth.getFullYear();
  const viewMonthIndex = viewMonth.getMonth();

  const navigateMonth = useCallback((delta: number) => {
    const next = new Date(viewYear, viewMonthIndex + delta, 1);
    if (!isMonthControlled) setInternalMonth(next);
    onMonthChange?.(next);
  }, [viewYear, viewMonthIndex, isMonthControlled, onMonthChange]);

  const handleDayClick = useCallback((date: Date) => {
    if (isDateDisabled(date, disabled)) return;
    let next: CalendarSelectedTypes | undefined;

    if (mode === "single") {
      next = date;
    } else {
      const current = selectedValue as { from: Date; to?: Date } | undefined;
      if (!current?.from || (current.from && current.to)) {
        // Start new range
        next = { from: date };
      } else if (date < current.from) {
        // Clicked before start — restart
        next = { from: date };
      } else {
        next = { from: current.from, to: date };
      }
    }

    if (!isSelectedControlled) setInternalSelected(next);
    onSelect?.(next);
  }, [mode, selectedValue, disabled, isSelectedControlled, onSelect]);

  const getSelectionState = (date: Date) => {
    if (!selectedValue) return { isSelected: false, isRangeStart: false, isRangeEnd: false, isInRange: false };
    if (mode === "single") {
      const sel = selectedValue as Date;
      return { isSelected: isSameDay(date, sel), isRangeStart: false, isRangeEnd: false, isInRange: false };
    }
    const { from, to } = selectedValue as { from: Date; to?: Date };
    const effectiveTo = to ?? hoverDate;
    const isRangeStart = isSameDay(date, from);
    const isRangeEnd = effectiveTo ? isSameDay(date, effectiveTo) : false;
    const isInRange = effectiveTo
      ? (date > (from < effectiveTo ? from : effectiveTo) && date < (from < effectiveTo ? effectiveTo : from))
      : false;
    return { isSelected: false, isRangeStart, isRangeEnd, isInRange };
  };

  const renderMonthGrid = (offset: number) => {
    const mYear = offset === 0 ? viewYear : new Date(viewYear, viewMonthIndex + offset, 1).getFullYear();
    const mMonth = (viewMonthIndex + offset + 120) % 12;
    const actualYear = new Date(viewYear, viewMonthIndex + offset, 1).getFullYear();
    const cells = buildCalendarGrid(actualYear, mMonth, weekStartsOn);
    const weekAbbrs = WEEKDAY_ABBRS(weekStartsOn);

    const weeks: ICalendarGridCell[][] = [];
    for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

    const captionLabel = `${MONTH_NAMES_FULL[mMonth]} ${actualYear}`;

    return (
      <div key={offset} className="flex flex-col gap-1">
        {/* Caption */}
        <div className="flex items-center justify-between h-[36px] px-1">
          {offset === 0 && (
            <button
              type="button"
              aria-label="Previous month"
              onClick={() => navigateMonth(-1)}
              className={cn(
                "flex size-[28px] items-center justify-center rounded-small",
                "text-muted-foreground hover:bg-muted-hover hover:text-foreground transition-colors",
                dir === "rtl" && "rotate-180",
              )}
            >
              <ArrowLeft01Round className="size-3.5" />
            </button>
          )}
          {offset !== 0 && <div className="size-[28px]" />}

          {captionLayout === "label" ? (
            <span className="font-lexend text-[13px] font-medium text-foreground">{captionLabel}</span>
          ) : (
            <div className="flex items-center gap-1">
              <select
                value={mMonth}
                onChange={(e) => {
                  const next = new Date(actualYear, Number(e.target.value), 1);
                  if (!isMonthControlled) setInternalMonth(next);
                  onMonthChange?.(next);
                }}
                className="font-lexend text-[13px] text-foreground bg-transparent border border-border rounded-small px-1 py-0.5 cursor-pointer"
                aria-label="Month"
              >
                {MONTH_NAMES_FULL.map((name, i) => (
                  <option key={name} value={i}>{name}</option>
                ))}
              </select>
              <select
                value={actualYear}
                onChange={(e) => {
                  const next = new Date(Number(e.target.value), mMonth, 1);
                  if (!isMonthControlled) setInternalMonth(next);
                  onMonthChange?.(next);
                }}
                className="font-lexend text-[13px] text-foreground bg-transparent border border-border rounded-small px-1 py-0.5 cursor-pointer"
                aria-label="Year"
              >
                {Array.from({ length: 20 }, (_, i) => actualYear - 10 + i).map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          )}

          {offset === numberOfMonths - 1 && (
            <button
              type="button"
              aria-label="Next month"
              onClick={() => navigateMonth(1)}
              className={cn(
                "flex size-[28px] items-center justify-center rounded-small",
                "text-muted-foreground hover:bg-muted-hover hover:text-foreground transition-colors",
                dir === "rtl" && "rotate-180",
              )}
            >
              <ArrowRight01Round className="size-3.5" />
            </button>
          )}
          {offset !== numberOfMonths - 1 && <div className="size-[28px]" />}
        </div>

        {/* Weekday headers */}
        <div
          className={cn(
            "grid gap-0",
            showWeekNumber ? "grid-cols-[20px_repeat(7,32px)]" : "grid-cols-[repeat(7,32px)]",
          )}
        >
          {showWeekNumber && (
            <div className="flex size-[24px] items-center justify-center font-lexend text-[11px] text-muted-foreground" />
          )}
          {weekAbbrs.map((abbr) => (
            <div
              key={abbr}
              className="flex size-[32px] items-center justify-center font-lexend text-[12px] text-muted-foreground"
            >
              {abbr}
            </div>
          ))}
        </div>

        {/* Day rows */}
        {weeks.map((week, wi) => (
          <div
            key={wi}
            className={cn(
              "grid gap-0",
              showWeekNumber ? "grid-cols-[20px_repeat(7,32px)]" : "grid-cols-[repeat(7,32px)]",
            )}
          >
            {showWeekNumber && (
              <div className="flex size-[20px] items-center justify-center font-lexend text-[10px] text-muted-foreground mt-1.5">
                {getISOWeek(week.find((c) => c.inView)?.date ?? week[0].date)}
              </div>
            )}
            {week.map((cell, di) => {
              const visible = showOutsideDays || cell.inView;
              const sel = getSelectionState(cell.date);
              return (
                <div key={di} style={{ visibility: visible ? "visible" : "hidden" }}>
                  <CalendarDayButton
                    date={cell.date}
                    inView={cell.inView}
                    isToday={isSameDay(cell.date, today)}
                    isDisabled={isDateDisabled(cell.date, disabled)}
                    isSelected={sel.isSelected}
                    isRangeStart={sel.isRangeStart}
                    isRangeEnd={sel.isRangeEnd}
                    isInRange={sel.isInRange}
                    onClick={() => handleDayClick(cell.date)}
                    onMouseEnter={() => setHoverDate(cell.date)}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      role="application"
      aria-label="Calendar"
      dir={dir}
      onMouseLeave={() => setHoverDate(undefined)}
      className={cn(
        "inline-flex flex-col gap-3 rounded-medium border border-border bg-background p-3 font-lexend",
        numberOfMonths > 1 && "sm:flex-row",
        className,
      )}
    >
      {Array.from({ length: numberOfMonths }, (_, i) => renderMonthGrid(i))}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// CalendarCard
// ═══════════════════════════════════════════════════════════════════════════════

type CalendarCardTypeTypes = "month" | "year" | "quarter";

interface ICalendarCardProps {
  type?: CalendarCardTypeTypes;
  month?: number; // 0-11
  year?: number;
  selectedDate?: number;
  selectedMonth?: number;
  selectedYear?: number;
  selectedQuarter?: number;
  todayDate?: number;
  onDateSelect?: (day: number) => void;
  onMonthSelect?: (month: number) => void;
  onYearSelect?: (year: number) => void;
  onCancel?: () => void;
  onApply?: () => void;
  className?: string;
}

interface ICardCellProps {
  value: number | string;
  selected?: boolean;
  inView?: boolean;
  onClick?: () => void;
  wide?: boolean;
}

const CardCell = (props: ICardCellProps) => {
  const { value, selected = false, inView = true, onClick, wide = false } = props;
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-day cursor-pointer",
        "text-[14px] font-lexend font-normal leading-[1.5] transition-colors",
        wide ? "h-[24px] px-[8px]" : "w-[32px] h-[32px]",
        selected
          ? "bg-primary text-primary-foreground"
          : !inView
          ? "text-disabled cursor-default"
          : "text-foreground hover:bg-muted-hover"
      )}
      onClick={!selected && inView ? onClick : undefined}
    >
      {value}
    </div>
  );
};


export const CalendarCard = (props: ICalendarCardProps) => {
  const {
    type = "month",
    month = now.getMonth(),
    year = now.getFullYear(),
    selectedDate,
    selectedMonth,
    selectedYear,
    selectedQuarter,
    todayDate,
    onDateSelect,
    onMonthSelect,
    onYearSelect,
    onCancel,
    onApply,
    className,
  } = props;

  return (
    <div
      className={cn(
        "flex flex-col w-[300px] bg-background border border-border rounded-medium overflow-hidden font-lexend",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-[12px] py-[8px] border-b border-border">
        <div className="flex items-center gap-[8px]">
          {/* Year dropdown */}
          <button className="flex items-center gap-[4px] text-[14px] font-normal text-foreground border border-border rounded-small px-[8px] h-[28px] hover:bg-muted-hover">
            <span>{year}</span>
            <ArrowDown01Round className="size-3.5" />
          </button>
          {/* Month dropdown (only for month-type card) */}
          {type === "month" && (
            <button className="flex items-center gap-[4px] text-[14px] font-normal text-foreground border border-border rounded-small px-[8px] h-[28px] hover:bg-muted-hover">
              <span>{MONTH_NAMES_SHORT[month]}</span>
              <ArrowDown01Round className="size-3.5" />
            </button>
          )}
        </div>
        {/* Action buttons */}
        <div className="flex items-center gap-[8px]">
          <button
            className="text-[14px] font-normal text-primary hover:underline"
            onClick={onCancel}
          >
            Button
          </button>
          <button
            className="text-[14px] font-normal text-primary hover:underline"
            onClick={onApply}
          >
            Button
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-[12px]">
        {type === "month" && (
          <>
            {/* Weekday headers */}
            <div className="grid grid-cols-7 gap-[4px] mb-[4px]">
              {WEEKDAYS_SHORT.map((wd) => (
                <div
                  key={wd}
                  className="w-[32px] h-[24px] flex items-center justify-center text-[12px] text-muted-foreground"
                >
                  {wd.charAt(0)}
                </div>
              ))}
            </div>
            {/* Day cells */}
            <div className="grid grid-cols-7 gap-[4px]">
              {generateCalendarGrid(year, month).map((cell, i) => (
                <CardCell
                  key={i}
                  value={cell.day}
                  inView={cell.inView}
                  selected={cell.inView && cell.day === selectedDate}
                  onClick={() => cell.inView && onDateSelect?.(cell.day)}
                />
              ))}
            </div>
          </>
        )}

        {type === "year" && (
          <div className="grid grid-cols-3 gap-y-[16px] gap-x-[8px]">
            {MONTH_NAMES_SHORT.map((name, i) => (
              <CardCell
                key={name}
                value={name}
                wide={true}
                selected={i === selectedMonth}
                onClick={() => onMonthSelect?.(i)}
              />
            ))}
          </div>
        )}

        {type === "quarter" && (
          <div className="grid grid-cols-4 gap-[8px]">
            {QUARTER_NAMES.map((q, i) => (
              <CardCell
                key={q}
                value={q}
                wide={true}
                selected={i + 1 === selectedQuarter}
                onClick={() => onYearSelect?.(i + 1)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// CalendarDropdown
// ═══════════════════════════════════════════════════════════════════════════════

type CalendarDropdownTypeTypes =
  | "date"
  | "date-range"
  | "datetime"
  | "month"
  | "year";

interface ICalendarDropdownProps {
  type?: CalendarDropdownTypeTypes;
  month?: number; // 0-11
  year?: number;
  decadeStart?: number;
  // Selection
  selectedDate?: number; // day number
  selectedMonth?: number;
  selectedYear?: number;
  rangeStart?: number;
  rangeEnd?: number;
  hoveredDate?: number;
  todayDate?: number;
  // Time (datetime only)
  hours?: number;
  minutes?: number;
  seconds?: number;
  // Controls
  showButton?: boolean;
  // Callbacks
  onDateSelect?: (day: number) => void;
  onMonthSelect?: (month: number) => void;
  onYearSelect?: (year: number) => void;
  onNavigate?: (dir: "prev-year" | "prev-month" | "next-month" | "next-year") => void;
  onTimeChange?: (h: number, m: number, s: number) => void;
  onCancel?: () => void;
  onConfirm?: () => void;
  className?: string;
}

interface IPickerCellProps {
  value: number | string;
  inView?: boolean;
  today?: boolean;
  selected?: boolean;
  rangeStart?: boolean;
  inRange?: boolean;
  rangeEnd?: boolean;
  hovered?: boolean;
  disabled?: boolean;
  wide?: boolean;
  onClick?: () => void;
}

const pickerCellVariants = cva(
  [
    "flex items-center justify-center font-lexend text-[14px] leading-[1.5]",
    "cursor-pointer select-none transition-colors duration-100",
  ].join(" "),
  {
    variants: {
      cellType: {
        day: "w-[24px] h-[24px] rounded-day",
        wide: "h-[24px] rounded-day px-[8px]",
      },
    },
    defaultVariants: {
      cellType: "day",
    },
  }
);

const PickerCell = (props: IPickerCellProps) => {
  const {
    value,
    inView = true,
    today = false,
    selected = false,
    rangeStart = false,
    inRange = false,
    rangeEnd = false,
    hovered = false,
    disabled = false,
    wide = false,
    onClick,
  } = props;

  let classes = "";
  if (disabled) {
    classes = "text-disabled cursor-not-allowed";
  } else if (selected || rangeStart || rangeEnd) {
    classes = "bg-primary text-primary-foreground";
  } else if (inRange) {
    classes = "bg-primary-subtle text-foreground";
  } else if (today) {
    classes = "border border-brand text-foreground";
  } else if (hovered) {
    classes = "bg-muted-hover text-foreground";
  } else if (!inView) {
    classes = "text-disabled";
  } else {
    classes = "text-foreground hover:bg-muted-hover";
  }

  return (
    <div
      className={cn(
        pickerCellVariants({ cellType: wide ? "wide" : "day" }),
        classes
      )}
      onClick={!disabled ? onClick : undefined}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
    >
      {value}
    </div>
  );
};


interface IPickerHeaderProps {
  label: string;
  onPrevYear?: () => void;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
  onNextYear?: () => void;
  showMonthNav?: boolean;
  rounded?: boolean;
}

const PickerHeader = (props: IPickerHeaderProps) => {
  const {
    label,
    onPrevYear,
    onPrevMonth,
    onNextMonth,
    onNextYear,
    showMonthNav = true,
    rounded = false,
  } = props;
  return (
    <div
      className={cn(
        "flex items-center justify-center h-[40px] shrink-0 w-full",
        "bg-background border-b border-border relative",
        rounded ? "rounded-tl-[6px] rounded-tr-[6px]" : ""
      )}
    >
      <div className="flex items-center justify-between w-full px-[8px]">
        <div className="flex items-center gap-[2px]">
          {onPrevYear && (
            <button
              className="w-[24px] h-[24px] flex items-center justify-center text-muted-foreground hover:text-foreground rounded-small"
              onClick={onPrevYear}
              aria-label="Previous year"
            >
              <ArrowLeftDoubleRound className="size-4" />
            </button>
          )}
          {showMonthNav && onPrevMonth && (
            <button
              className="w-[24px] h-[24px] flex items-center justify-center text-muted-foreground hover:text-foreground rounded-small"
              onClick={onPrevMonth}
              aria-label="Previous month"
            >
              <ArrowLeft01Round className="size-4" />
            </button>
          )}
        </div>
        <span className="text-[14px] font-lexend font-normal text-foreground">
          {label}
        </span>
        <div className="flex items-center gap-[2px]">
          {showMonthNav && onNextMonth && (
            <button
              className="w-[24px] h-[24px] flex items-center justify-center text-muted-foreground hover:text-foreground rounded-small"
              onClick={onNextMonth}
              aria-label="Next month"
            >
              <ArrowRight01Round className="size-4" />
            </button>
          )}
          {onNextYear && (
            <button
              className="w-[24px] h-[24px] flex items-center justify-center text-muted-foreground hover:text-foreground rounded-small"
              onClick={onNextYear}
              aria-label="Next year"
            >
              <ArrowRightDoubleRound className="size-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

interface IDateGridProps {
  year: number;
  month: number;
  selectedDate?: number;
  rangeStart?: number;
  rangeEnd?: number;
  hoveredDate?: number;
  todayDate?: number;
  onDateSelect?: (day: number) => void;
}

const DateGrid = (props: IDateGridProps) => {
  const {
    year,
    month,
    selectedDate,
    rangeStart,
    rangeEnd,
    hoveredDate,
    todayDate,
    onDateSelect,
  } = props;

  const cells = generateCalendarGrid(year, month);

  return (
    <div className="flex flex-col gap-[4px] p-[8px]">
      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-[4px]">
        {WEEKDAYS_SHORT.map((wd) => (
          <div
            key={wd}
            className="w-[24px] h-[24px] flex items-center justify-center text-[12px] font-lexend text-muted-foreground"
          >
            {wd.charAt(0)}
          </div>
        ))}
      </div>
      {/* Day cells */}
      <div className="grid grid-cols-7 gap-[4px]">
        {cells.map((cell, i) => {
          const isToday = cell.inView && cell.day === todayDate;
          const isSelected = cell.inView && cell.day === selectedDate;
          const isRangeStart = cell.inView && cell.day === rangeStart;
          const isRangeEnd = cell.inView && cell.day === rangeEnd;
          const isInRange =
            cell.inView &&
            rangeStart !== undefined &&
            rangeEnd !== undefined &&
            cell.day > rangeStart &&
            cell.day < rangeEnd;

          return (
            <PickerCell
              key={i}
              value={cell.day}
              inView={cell.inView}
              today={isToday}
              selected={isSelected}
              rangeStart={isRangeStart}
              rangeEnd={isRangeEnd}
              inRange={isInRange}
              onClick={() => cell.inView && onDateSelect?.(cell.day)}
            />
          );
        })}
      </div>
    </div>
  );
};

interface IFooterButtonsProps {
  onCancel?: () => void;
  onConfirm?: () => void;
}

const FooterButtons = (props: IFooterButtonsProps) => {
  const { onCancel, onConfirm } = props;
  return (
    <div className="flex items-center justify-end gap-[8px] px-[8px] py-[8px] border-t border-border">
      <button
        className="h-[32px] px-200 text-[14px] font-lexend font-normal text-primary border border-brand rounded-medium hover:bg-muted-hover transition-colors"
        onClick={onCancel}
      >
        Button
      </button>
      <button
        className="h-[32px] px-200 text-[14px] font-lexend font-normal text-primary-foreground bg-primary rounded-medium hover:bg-primary-hover transition-colors"
        onClick={onConfirm}
      >
        Button
      </button>
    </div>
  );
};

interface ITimeColumnProps {
  values: number[];
  selected: number;
  onSelect: (v: number) => void;
}

const ITEM_H = 28;
const VISIBLE_ROWS = 5;
const TIME_PAD = ((VISIBLE_ROWS - 1) / 2) * ITEM_H; // 56px top/bottom padding

const TimeColumn = (props: ITimeColumnProps) => {
  const { values, selected, onSelect } = props;
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  // Sync external `selected` prop → scroll position on mount and when changed externally
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const idx = values.indexOf(selected);
    if (idx < 0) return;
    const target = idx * ITEM_H;
    if (Math.abs(el.scrollTop - target) < 1) return;
    el.scrollTo({ top: target, behavior: "auto" });
  }, [selected, values]);

  const onScroll = () => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const el = ref.current;
      if (!el) return;
      const idx = Math.round(el.scrollTop / ITEM_H);
      const next = values[Math.max(0, Math.min(idx, values.length - 1))];
      if (next !== selected) onSelect(next);
    });
  };

  return (
    <div className="relative h-[140px] w-[56px]">
      {/* center selection band */}
      <div className="pointer-events-none absolute inset-x-0 top-[56px] h-[28px] bg-muted" />
      <div
        ref={ref}
        onScroll={onScroll}
        className="relative h-full overflow-y-scroll scrollbar-none"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <div style={{ height: TIME_PAD }} />
        {values.map((v) => (
          <div
            key={v}
            style={{ scrollSnapAlign: "center", height: ITEM_H }}
            className={cn(
              "flex items-center justify-center text-[14px] font-lexend leading-[1.5]",
              v === selected ? "text-primary font-medium" : "text-foreground",
            )}
          >
            {String(v).padStart(2, "0")}
          </div>
        ))}
        <div style={{ height: TIME_PAD }} />
      </div>
    </div>
  );
};

export const CalendarDropdown = (props: ICalendarDropdownProps) => {
  const {
    type = "date",
    month = now.getMonth(),
    year = now.getFullYear(),
    decadeStart,
    selectedDate,
    selectedMonth,
    selectedYear,
    rangeStart,
    rangeEnd,
    hoveredDate,
    todayDate,
    hours = 0,
    minutes = 0,
    seconds = 0,
    showButton = false,
    onDateSelect,
    onMonthSelect,
    onYearSelect,
    onNavigate,
    onTimeChange,
    onCancel,
    onConfirm,
    className,
  } = props;

  const monthLabel = `${MONTH_NAMES_SHORT[month]}  ${year}`;
  const effectiveDecadeStart = decadeStart ?? Math.floor(year / 10) * 10;

  const hoursArr = Array.from({ length: 24 }, (_, i) => i);
  const minutesArr = Array.from({ length: 60 }, (_, i) => i);
  const secondsArr = Array.from({ length: 60 }, (_, i) => i);

  const wrapperClass = cn(
    "flex overflow-clip bg-background",
    "shadow-lg",
    "rounded-tl-day rounded-tr-day",
    type === "date" ? "flex-col w-[280px]" : "",
    type === "date-range" ? "flex-col sm:flex-row w-[280px] sm:w-[560px]" : "",
    type === "datetime" ? "flex-col sm:flex-row rounded-day" : "",
    type === "month" ? "flex-col w-[280px] rounded-day" : "",
    type === "year" ? "flex-col w-[280px] rounded-day" : "",
    className
  );

  // ── date ──────────────────────────────────────────────────────────────────
  if (type === "date") {
    return (
      <div className={wrapperClass}>
        <PickerHeader
          label={monthLabel}
          rounded={true}
          onPrevYear={() => onNavigate?.("prev-year")}
          onPrevMonth={() => onNavigate?.("prev-month")}
          onNextMonth={() => onNavigate?.("next-month")}
          onNextYear={() => onNavigate?.("next-year")}
        />
        <DateGrid
          year={year}
          month={month}
          selectedDate={selectedDate}
          rangeStart={rangeStart}
          rangeEnd={rangeEnd}
          hoveredDate={hoveredDate}
          todayDate={todayDate}
          onDateSelect={onDateSelect}
        />
        {showButton && <FooterButtons onCancel={onCancel} onConfirm={onConfirm} />}
      </div>
    );
  }

  // ── date-range ────────────────────────────────────────────────────────────
  if (type === "date-range") {
    const nextMonth = (month + 1) % 12;
    const nextYear = month === 11 ? year + 1 : year;
    return (
      <div className={wrapperClass}>
        {/* Left panel */}
        <div className="flex flex-col w-[280px] border-b sm:border-b-0 sm:border-r border-border">
          <PickerHeader
            label={monthLabel}
            rounded={true}
            onPrevYear={() => onNavigate?.("prev-year")}
            onPrevMonth={() => onNavigate?.("prev-month")}
            onNextMonth={() => onNavigate?.("next-month")}
            onNextYear={() => onNavigate?.("next-year")}
          />
          <DateGrid
            year={year}
            month={month}
            selectedDate={selectedDate}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            hoveredDate={hoveredDate}
            todayDate={todayDate}
            onDateSelect={onDateSelect}
          />
        </div>
        {/* Right panel */}
        <div className="flex flex-col w-[280px]">
          <PickerHeader
            label={`${MONTH_NAMES_SHORT[nextMonth]}  ${nextYear}`}
            rounded={false}
            onPrevYear={() => onNavigate?.("prev-year")}
            onPrevMonth={() => onNavigate?.("prev-month")}
            onNextMonth={() => onNavigate?.("next-month")}
            onNextYear={() => onNavigate?.("next-year")}
          />
          <DateGrid
            year={nextYear}
            month={nextMonth}
            selectedDate={selectedDate}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            hoveredDate={hoveredDate}
            onDateSelect={onDateSelect}
          />
        </div>
      </div>
    );
  }

  // ── datetime ──────────────────────────────────────────────────────────────
  if (type === "datetime") {
    const timeLabel = [hours, minutes, seconds]
      .map((v) => String(v).padStart(2, "0"))
      .join(":");

    return (
      <div className={wrapperClass}>
        {/* Calendar panel */}
        <div className="flex flex-col w-[280px] border-b sm:border-b-0 sm:border-r border-border">
          <PickerHeader
            label={monthLabel}
            rounded={true}
            onPrevYear={() => onNavigate?.("prev-year")}
            onPrevMonth={() => onNavigate?.("prev-month")}
            onNextMonth={() => onNavigate?.("next-month")}
            onNextYear={() => onNavigate?.("next-year")}
          />
          <DateGrid
            year={year}
            month={month}
            selectedDate={selectedDate}
            todayDate={todayDate}
            onDateSelect={onDateSelect}
          />
        </div>
        {/* Time picker panel — full width on mobile, fixed on desktop */}
        <div className="flex flex-col w-[280px] sm:w-[169px]">
          {/* Time header */}
          <div className="h-10 flex items-center justify-center bg-background border-b border-border sm:rounded-tr-md shrink-0">
            <span className="text-[14px] font-lexend text-foreground">{timeLabel}</span>
          </div>
          {/* 3 columns */}
          <div className="flex flex-1 justify-around overflow-hidden">
            <TimeColumn
              values={hoursArr}
              selected={hours}
              onSelect={(h) => onTimeChange?.(h, minutes, seconds)}
            />
            <TimeColumn
              values={minutesArr}
              selected={minutes}
              onSelect={(m) => onTimeChange?.(hours, m, seconds)}
            />
            <TimeColumn
              values={secondsArr}
              selected={seconds}
              onSelect={(s) => onTimeChange?.(hours, minutes, s)}
            />
          </div>
          {/* Footer buttons */}
          <div className="flex items-center justify-end gap-2 px-2 py-2 border-t border-border rounded-b-md sm:rounded-bl-none">
            <button
              className="h-8 px-200 text-[14px] font-lexend text-primary border border-border rounded-medium hover:bg-muted-hover transition-colors"
              onClick={onCancel}
            >
              Button
            </button>
            <button
              className="h-8 px-200 text-[14px] font-lexend text-primary-foreground bg-primary rounded-medium hover:bg-primary-hover transition-colors"
              onClick={onConfirm}
            >
              Button
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── month ─────────────────────────────────────────────────────────────────
  if (type === "month") {
    return (
      <div className={wrapperClass}>
        {/* Arrow pointer */}
        <div className="relative h-[7px] w-full overflow-hidden shrink-0">
          <div
            className="absolute w-[14px] h-[14px] bg-background border-l border-t border-border rotate-45"
            style={{ left: "20px", top: "3px" }}
          />
        </div>
        <PickerHeader
          label={String(year)}
          rounded={false}
          showMonthNav={false}
          onPrevYear={() => onNavigate?.("prev-year")}
          onNextYear={() => onNavigate?.("next-year")}
        />
        <div className="grid grid-cols-3 gap-y-[16px] gap-x-[8px] p-[16px]">
          {MONTH_NAMES_SHORT.map((name, i) => (
            <PickerCell
              key={name}
              value={name}
              wide={true}
              selected={i === selectedMonth}
              onClick={() => onMonthSelect?.(i)}
            />
          ))}
        </div>
        {showButton && <FooterButtons onCancel={onCancel} onConfirm={onConfirm} />}
      </div>
    );
  }

  // ── year ──────────────────────────────────────────────────────────────────
  const decadeEnd = effectiveDecadeStart + 9;
  const yearDecadeLabel = `${effectiveDecadeStart}-${decadeEnd}`;

  const yearCells: Array<{ value: number; inView: boolean }> = [
    { value: effectiveDecadeStart - 1, inView: false },
    ...Array.from({ length: 10 }, (_, i) => ({
      value: effectiveDecadeStart + i,
      inView: true,
    })),
    { value: effectiveDecadeStart + 10, inView: false },
  ];

  return (
    <div className={wrapperClass}>
      <PickerHeader
        label={yearDecadeLabel}
        rounded={true}
        showMonthNav={false}
        onPrevYear={() => onNavigate?.("prev-year")}
        onNextYear={() => onNavigate?.("next-year")}
      />
      <div className="grid grid-cols-3 gap-y-[16px] gap-x-[8px] p-[16px]">
        {yearCells.map((yc, i) => (
          <PickerCell
            key={i}
            value={yc.value}
            wide={true}
            inView={yc.inView}
            selected={yc.value === selectedYear}
            onClick={() => yc.inView && onYearSelect?.(yc.value)}
          />
        ))}
      </div>
      {showButton && <FooterButtons onCancel={onCancel} onConfirm={onConfirm} />}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// CalendarEventType
// ═══════════════════════════════════════════════════════════════════════════════

type CalendarEventTypeVariantTypes =
  | "session"
  | "event"
  | "birthday"
  | "festival"
  | "leave";

type CalendarEventTypeSizeTypes = "default" | "compact";

interface ICalendarEventTypeProps {
  variant: CalendarEventTypeVariantTypes;
  size?: CalendarEventTypeSizeTypes;
  title: string;
  time?: string;
  showTime?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const eventTypeVariants = cva(
  ["flex items-stretch rounded-xsmall overflow-hidden font-lexend"].join(" "),
  {
    variants: {
      variant: {
        session: "",
        event: "",
        birthday: "",
        festival: "",
        leave: "",
      },
      size: {
        default: "",
        compact: "",
      },
    },
    defaultVariants: {
      variant: "session",
      size: "default",
    },
  }
);

const leftBorderVariants: Record<CalendarEventTypeVariantTypes, string> = {
  session: "bg-primary",
  event: "bg-success",
  birthday: "bg-warning",
  festival: "bg-accent-magenta",
  leave: "bg-destructive",
};

const bgVariants: Record<CalendarEventTypeVariantTypes, string> = {
  session: "bg-accent-orange",
  event: "bg-accent-lime",
  birthday: "bg-accent-yellow",
  festival: "bg-accent-magenta",
  leave: "bg-destructive-hover",
};


const eventTypeDefaultIcons: Record<CalendarEventTypeVariantTypes, React.ReactNode> = {
  session: <Sun01 className="size-3.5" />,
  event: <Calendar01 className="size-3.5" />,
  birthday: <BirthdayCake className="size-3.5" />,
  festival: <Stars className="size-3.5" />,
  leave: <PlusSignCircle className="size-3.5" />,
};

export const CalendarEventType = (props: ICalendarEventTypeProps) => {
  const {
    variant,
    size = "default",
    title,
    time,
    showTime = false,
    icon,
    className,
  } = props;

  const isCompact = size === "compact";
  const hasTime = showTime && !!time && !isCompact;

  const containerHeight = isCompact
    ? "h-[24px]"
    : hasTime
    ? "h-[54px]"
    : "h-[32px]";

  return (
    <div
      className={cn(
        eventTypeVariants({ variant, size }),
        containerHeight,
        className
      )}
    >
      {/* 2px left border */}
      <div
        className={cn(
          "w-[2px] shrink-0 rounded-bl-xsmall rounded-tl-xsmall",
          leftBorderVariants[variant]
        )}
      />
      {/* Content area */}
      <div
        className={cn(
          "flex flex-1 flex-col justify-between p-100 rounded-br-small rounded-tr-small",
          bgVariants[variant],
          isCompact ? "py-[2px]" : ""
        )}
      >
        {/* Title row */}
        <div className="flex items-center gap-075 shrink-0 w-full">
          <span className="text-foreground flex items-center shrink-0">
            {icon ?? eventTypeDefaultIcons[variant]}
          </span>
          <span className="text-[12px] font-medium font-lexend text-foreground leading-[16px] flex-1 min-w-0 truncate">
            {title}
          </span>
        </div>
        {/* Time row */}
        {hasTime && (
          <div className="flex items-center gap-075 shrink-0 w-full">
            <span className="text-muted-foreground flex items-center shrink-0">
              <Clock01 className="size-3.5" />
            </span>
            <span className="text-[12px] font-normal font-lexend text-muted-foreground leading-[16px]">
              {time}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// CalendarState
// ═══════════════════════════════════════════════════════════════════════════════

type CalendarStateVariantTypes =
  | "holiday"
  | "sick-leave"
  | "birthday"
  | "event"
  | "room-movement";

type CalendarStateSizeTypes = "default" | "compact";

interface ICalendarStateProps {
  variant: CalendarStateVariantTypes;
  size?: CalendarStateSizeTypes;
  label: string;
  subtext?: string;
  showSubtext?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const stateVariants = cva(
  [
    "flex items-center px-[12px] rounded-xsmall font-lexend w-[144px]",
    "border-l-[3px] border-solid",
  ].join(" "),
  {
    variants: {
      variant: {
        holiday: "border-l-accent-magenta bg-accent-magenta",
        "sick-leave": "border-l-danger bg-destructive-hover",
        birthday: "border-l-warning bg-accent-yellow",
        event: "border-l-information bg-accent-blue",
        "room-movement": "border-l-accent-teal bg-accent-teal",
      },
      size: {
        default: "h-[24px]",
        compact: "h-[16px]",
      },
    },
    defaultVariants: {
      variant: "holiday",
      size: "default",
    },
  }
);


const stateDefaultIcons: Record<CalendarStateVariantTypes, React.ReactNode> = {
  holiday: <Beach className="size-3" />,
  "sick-leave": <Sad01 className="size-3" />,
  birthday: <BirthdayCake className="size-3" />,
  event: <Calendar01 className="size-3" />,
  "room-movement": <ArrowRight01Round className="size-3" />,
};

export const CalendarState = (props: ICalendarStateProps) => {
  const {
    variant,
    size = "default",
    label,
    subtext,
    showSubtext = false,
    icon,
    className,
  } = props;

  const hasSubtext = showSubtext && !!subtext;

  return (
    <div
      className={cn(
        stateVariants({ variant, size }),
        hasSubtext ? "flex-col items-start justify-center gap-[5px] py-[4px] h-auto" : "",
        className
      )}
    >
      {/* Label row */}
      <div className="flex items-center gap-[5px] shrink-0">
        <span className="text-foreground flex items-center shrink-0">
          {icon ?? stateDefaultIcons[variant]}
        </span>
        <span className="text-[12px] font-normal font-lexend text-foreground leading-[16px] whitespace-nowrap">
          {label}
        </span>
      </div>
      {/* Subtext row */}
      {hasSubtext && (
        <div className="flex items-center gap-[5px] shrink-0">
          <span className="text-muted-foreground flex items-center shrink-0">
            <Clock01 className="size-3" />
          </span>
          <span className="text-[10px] font-normal font-lexend text-muted-foreground leading-[20px] whitespace-nowrap">
            {subtext}
          </span>
        </div>
      )}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// DayCell
// ═══════════════════════════════════════════════════════════════════════════════

type DayCellStateTypes = "default" | "active" | "leave" | "hover" | "past-or-next-month";

interface IDayCellEvent {
  variant: CalendarStateVariantTypes;
  label: string;
  subtext?: string;
  icon?: React.ReactNode;
}

interface IDayCellProps {
  date: number;
  state?: DayCellStateTypes;
  events?: IDayCellEvent[];
  maxVisibleEvents?: number;
  onViewMore?: () => void;
  onClick?: () => void;
  className?: string;
}

const dayCellVariants = cva(
  [
    "flex flex-col w-[222px] h-[209px] rounded-medium p-[10px]",
    "font-lexend cursor-pointer",
  ].join(" "),
  {
    variants: {
      state: {
        default: "border border-border bg-background",
        active: "border-2 border-info bg-accent-blue",
        leave: "border-2 border-destructive bg-destructive-hover",
        hover: "border border-border-hover bg-background",
        "past-or-next-month": "border border-border bg-muted",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

export const DayCell = (props: IDayCellProps) => {
  const {
    date,
    state = "default",
    events = [],
    maxVisibleEvents = 3,
    onViewMore,
    onClick,
    className,
  } = props;

  const visibleEvents = events.slice(0, maxVisibleEvents);
  const remainingCount = events.length - maxVisibleEvents;

  const isGrayText = state === "past-or-next-month";

  return (
    <div
      className={cn(dayCellVariants({ state }), className)}
      onClick={onClick}
    >
      {/* Date number */}
      <span
        className={cn(
          "text-[14px] font-normal leading-[20px] mb-[4px]",
          isGrayText ? "text-disabled" : "text-foreground"
        )}
      >
        {date} Dec
      </span>

      {/* Event list */}
      <div className="flex flex-col gap-[4px] flex-1 min-h-0 overflow-hidden">
        {visibleEvents.map((event, i) => (
          <CalendarState
            key={i}
            variant={event.variant}
            size="compact"
            label={event.label}
            icon={event.icon}
          />
        ))}
      </div>

      {/* View more link */}
      {remainingCount > 0 && (
        <button
          className="text-[12px] font-normal text-primary leading-[16px] mt-[4px] text-left cursor-pointer hover:underline"
          onClick={(e) => {
            e.stopPropagation();
            onViewMore?.();
          }}
        >
          View {remainingCount} More
        </button>
      )}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// InputDatePicker
// ═══════════════════════════════════════════════════════════════════════════════

type InputDatePickerStateTypes = "normal" | "focused" | "opened" | "disabled";

interface IInputDatePickerProps {
  ranged?: boolean;
  state?: InputDatePickerStateTypes;
  filled?: boolean;
  value?: string;
  startValue?: string;
  endValue?: string;
  placeholder?: string;
  onClick?: () => void;
  className?: string;
}

const inputVariants = cva(
  [
    "flex items-center w-[250px] h-[38px] rounded-medium bg-disabled-surface",
    "px-[13px] py-075 font-lexend cursor-pointer",
    "transition-colors duration-150",
  ].join(" "),
  {
    variants: {
      state: {
        normal: "border border-border",
        focused: "border-2 border-brand",
        opened: "border-2 border-brand",
        disabled: "border border-border opacity-50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      state: "normal",
    },
  }
);


export const InputDatePicker = (props: IInputDatePickerProps) => {
  const {
    ranged = false,
    state = "normal",
    filled = false,
    value,
    startValue,
    endValue,
    placeholder = "Select date",
    onClick,
    className,
  } = props;

  const textClass = filled
    ? "text-[16px] font-normal text-foreground"
    : "text-[16px] font-normal text-placeholder";

  return (
    <button
      className={cn(inputVariants({ state }), className)}
      onClick={onClick}
      disabled={state === "disabled"}
      aria-disabled={state === "disabled"}
    >
      {ranged ? (
        /* Ranged: start ~ end */
        <div className="flex flex-1 items-center min-w-0">
          <span className={cn(textClass, "flex-1 text-left truncate")}>
            {filled && startValue ? startValue : placeholder}
          </span>
          <span className="mx-[6px] text-muted-foreground text-[16px]">~</span>
          <span className={cn(textClass, "flex-1 text-left truncate")}>
            {filled && endValue ? endValue : placeholder}
          </span>
        </div>
      ) : (
        /* Single */
        <div className="flex flex-1 items-center min-w-0">
          <span className={cn(textClass, "flex-1 text-left truncate")}>
            {filled && value ? value : placeholder}
          </span>
        </div>
      )}
      {/* Calendar icon */}
      <span className="ml-[4px] text-muted-foreground flex items-center shrink-0">
        <Calendar01 className="size-4" />
      </span>
    </button>
  );
};
