import type { Metadata } from "next";

import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { CalendarDetail } from "@/components/docs/CalendarDetail";
import { CalendarDefault } from "@/examples/calendar/calendar-default";
import { CalendarRange } from "@/examples/calendar/calendar-range";
import { CalendarDropdownCaption } from "@/examples/calendar/calendar-dropdown-caption";
import { CalendarMultiMonth } from "@/examples/calendar/calendar-multi-month";
import { CalendarInputDefault } from "@/examples/calendar/calendar-input-default";
import { CalendarInputFilled } from "@/examples/calendar/calendar-input-filled";
import { CalendarInputRanged } from "@/examples/calendar/calendar-input-ranged";
import { CalendarDropdownDate } from "@/examples/calendar/calendar-dropdown-date";
import { CalendarDropdownRange } from "@/examples/calendar/calendar-dropdown-range";
import { CalendarDropdownDatetime } from "@/examples/calendar/calendar-dropdown-datetime";
import { CalendarEventTypes } from "@/examples/calendar/calendar-event-types";
import { CalendarDayCellDefault } from "@/examples/calendar/calendar-day-cell";
import { CalendarCardMonth } from "@/examples/calendar/calendar-card";
import { CalendarDropdownMonth } from "@/examples/calendar/calendar-dropdown-month";
import { CalendarDropdownYear } from "@/examples/calendar/calendar-dropdown-year";
import { CalendarStateDefault } from "@/examples/calendar/calendar-state";
import { CalendarInputDisabled } from "@/examples/calendar/calendar-input-disabled";

export const metadata: Metadata = {
  title: "Calendar | Design System",
  description:
    "Date picker inputs, calendar dropdowns, event cards, and day cells for scheduling and date selection.",
};

const INSTALL_CODE = `cp src/components/figma/Calendar.tsx your-project/components/Calendar.tsx`;

const USAGE_IMPORT = `import {
  Calendar,
  InputDatePicker,
  CalendarDropdown,
  CalendarEventType,
  CalendarState,
  DayCell,
  CalendarCard,
} from "@/components/figma/Calendar"`;

const USAGE_CODE = `{/* Date picker input trigger */}
<InputDatePicker
  state="normal"
  placeholder="Select date"
  onClick={() => setOpen(true)}
/>

{/* Filled input */}
<InputDatePicker state="normal" filled value="30 Oct 2021" />

{/* Ranged date input */}
<InputDatePicker
  state="normal"
  ranged
  filled
  startValue="21 Oct 2021"
  endValue="30 Oct 2021"
/>

{/* Calendar dropdown — date */}
<CalendarDropdown
  type="date"
  month={9}
  year={2021}
  todayDate={21}
  selectedDate={30}
  onDateSelect={(day) => console.log(day)}
  onNavigate={(dir) => console.log(dir)}
/>

{/* Calendar dropdown — datetime */}
<CalendarDropdown
  type="datetime"
  month={9}
  year={2021}
  todayDate={21}
  hours={14}
  minutes={30}
  seconds={0}
  onTimeChange={(h, m, s) => console.log(h, m, s)}
/>

{/* Event card */}
<CalendarEventType
  variant="session"
  title="Full Day Session"
  time="8:30 to 7:30 am"
  showTime
/>

{/* Event badge */}
<CalendarState variant="holiday" label="Christmas" />

{/* Day cell */}
<DayCell
  date={1}
  state="default"
  events={[
    { variant: "session", label: "Full Day Session" },
    { variant: "event", label: "Event" },
  ]}
/>`;

export default async function CalendarPage() {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* Title */}
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Calendar
      </h1>
      <p className="mt-3 text-base text-muted-foreground">
        Date picker inputs, calendar dropdowns, event cards, and day cells for
        scheduling and date selection.
      </p>

      {/* Brand customization toolbar */}
      <BrandPreviewToolbar />

      {/* ── Examples ──────────────────────────────────────────────────────── */}
      <h2
        id="examples"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Examples
      </h2>

      <h3
        id="calendar-default"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Calendar — Default
      </h3>
      <div className="mt-3">
        <ComponentPreview name="calendar/calendar-default">
          <CalendarDefault />
        </ComponentPreview>
      </div>

      <h3
        id="calendar-range"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Calendar — Range
      </h3>
      <div className="mt-3">
        <ComponentPreview name="calendar/calendar-range">
          <CalendarRange />
        </ComponentPreview>
      </div>

      <h3
        id="calendar-dropdown-caption"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Calendar — Dropdown Caption
      </h3>
      <div className="mt-3">
        <ComponentPreview name="calendar/calendar-dropdown-caption">
          <CalendarDropdownCaption />
        </ComponentPreview>
      </div>

      <h3
        id="calendar-multi-month"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Calendar — Multiple Months
      </h3>
      <div className="mt-3">
        <ComponentPreview name="calendar/calendar-multi-month">
          <CalendarMultiMonth />
        </ComponentPreview>
      </div>

      <h3
        id="input-default"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Date Input — Default
      </h3>
      <div className="mt-3">
        <ComponentPreview name="calendar/calendar-input-default">
          <CalendarInputDefault />
        </ComponentPreview>
      </div>

      <h3
        id="input-filled"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Date Input — Filled
      </h3>
      <div className="mt-3">
        <ComponentPreview name="calendar/calendar-input-filled">
          <CalendarInputFilled />
        </ComponentPreview>
      </div>

      <h3
        id="input-ranged"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Date Input — Ranged
      </h3>
      <div className="mt-3">
        <ComponentPreview name="calendar/calendar-input-ranged">
          <CalendarInputRanged />
        </ComponentPreview>
      </div>

      <h3
        id="dropdown-date"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Calendar Dropdown — Date
      </h3>
      <div className="mt-3">
        <ComponentPreview name="calendar/calendar-dropdown-date">
          <CalendarDropdownDate />
        </ComponentPreview>
      </div>

      <h3
        id="dropdown-range"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Calendar Dropdown — Date Range
      </h3>
      <div className="mt-3">
        <ComponentPreview name="calendar/calendar-dropdown-range">
          <CalendarDropdownRange />
        </ComponentPreview>
      </div>

      <h3
        id="dropdown-datetime"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Calendar Dropdown — Date &amp; Time
      </h3>
      <div className="mt-3">
        <ComponentPreview name="calendar/calendar-dropdown-datetime">
          <CalendarDropdownDatetime />
        </ComponentPreview>
      </div>

      <h3
        id="event-types"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Calendar Event Types
      </h3>
      <div className="mt-3">
        <ComponentPreview name="calendar/calendar-event-types">
          <CalendarEventTypes />
        </ComponentPreview>
      </div>

      <h3
        id="day-cell"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Day Cell
      </h3>
      <div className="mt-3">
        <ComponentPreview name="calendar/calendar-day-cell">
          <CalendarDayCellDefault />
        </ComponentPreview>
      </div>

      <h3
        id="calendar-card"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Calendar Card
      </h3>
      <div className="mt-3">
        <ComponentPreview name="calendar/calendar-card">
          <CalendarCardMonth />
        </ComponentPreview>
      </div>

      <h3
        id="dropdown-month"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Calendar Dropdown — Month Picker
      </h3>
      <div className="mt-3">
        <ComponentPreview name="calendar/calendar-dropdown-month">
          <CalendarDropdownMonth />
        </ComponentPreview>
      </div>

      <h3
        id="dropdown-year"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Calendar Dropdown — Year Picker
      </h3>
      <div className="mt-3">
        <ComponentPreview name="calendar/calendar-dropdown-year">
          <CalendarDropdownYear />
        </ComponentPreview>
      </div>

      <h3
        id="calendar-states"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Calendar State Badges
      </h3>
      <div className="mt-3">
        <ComponentPreview name="calendar/calendar-state">
          <CalendarStateDefault />
        </ComponentPreview>
      </div>

      <h3
        id="input-disabled"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Date Input — Disabled
      </h3>
      <div className="mt-3">
        <ComponentPreview name="calendar/calendar-input-disabled">
          <CalendarInputDisabled />
        </ComponentPreview>
      </div>

      {/* ── Detail ────────────────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <CalendarDetail />

      {/* ── Installation ──────────────────────────────────────────────────── */}
      <h2
        id="installation"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Installation
      </h2>
      <p className="mt-4 text-sm text-muted-foreground">
        Copy the component files into your project:
      </p>
      <div className="mt-3">
        <CodeBlock code={INSTALL_CODE} />
      </div>

      {/* ── Usage ─────────────────────────────────────────────────────────── */}
      <h2
        id="usage"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Usage
      </h2>
      <div className="mt-3">
        <CodeBlock code={USAGE_IMPORT} />
      </div>
      <div className="mt-3">
        <CodeBlock code={USAGE_CODE} />
      </div>

      {/* ── API Reference ─────────────────────────────────────────────────── */}
      <h2
        id="api-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        API Reference
      </h2>

      {/* Calendar */}
      <h3
        id="calendar-props"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Calendar
      </h3>
      <div className="mt-3 overflow-x-auto rounded-medium border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              ["mode", '"single" | "range"', '"single"'],
              ["selected", "Date | { from: Date; to?: Date }", "—"],
              ["defaultSelected", "Date | { from: Date; to?: Date }", "—"],
              ["onSelect", "(value) => void", "—"],
              ["month", "Date", "—"],
              ["defaultMonth", "Date", "current month"],
              ["onMonthChange", "(month: Date) => void", "—"],
              ["numberOfMonths", "number", "1"],
              ["captionLayout", '"label" | "dropdown"', '"label"'],
              ["showOutsideDays", "boolean", "true"],
              ["showWeekNumber", "boolean", "false"],
              ["disabled", "Date[] | ((date: Date) => boolean)", "—"],
              ["weekStartsOn", "0 | 1 | 2 | 3 | 4 | 5 | 6", "0"],
              ["className", "string", "—"],
            ].map(([prop, type, def]) => (
              <tr key={prop}>
                <td className="px-4 py-3 font-mono text-xs">{prop}</td>
                <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">{type}</td>
                <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">{def}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* InputDatePicker */}
      <h3
        id="input-date-picker-props"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        InputDatePicker
      </h3>
      <div className="mt-3 overflow-x-auto rounded-medium border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              ["ranged", "boolean", "false"],
              [
                "state",
                '"normal" | "focused" | "opened" | "disabled"',
                '"normal"',
              ],
              ["filled", "boolean", "false"],
              ["value", "string", "—"],
              ["startValue", "string", "—"],
              ["endValue", "string", "—"],
              ["placeholder", "string", '"Select date"'],
              ["onClick", "() => void", "—"],
              ["className", "string", "—"],
            ].map(([prop, type, def]) => (
              <tr key={prop}>
                <td className="px-4 py-3 font-mono text-xs">{prop}</td>
                <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                  {type}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                  {def}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CalendarDropdown */}
      <h3
        id="calendar-dropdown-props"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        CalendarDropdown
      </h3>
      <div className="mt-3 overflow-x-auto rounded-medium border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              [
                "type",
                '"date" | "date-range" | "datetime" | "month" | "year"',
                '"date"',
              ],
              ["month", "number (0–11)", "current month"],
              ["year", "number", "current year"],
              ["selectedDate", "number", "—"],
              ["selectedMonth", "number", "—"],
              ["selectedYear", "number", "—"],
              ["rangeStart", "number", "—"],
              ["rangeEnd", "number", "—"],
              ["todayDate", "number", "—"],
              ["hours", "number", "0"],
              ["minutes", "number", "0"],
              ["seconds", "number", "0"],
              ["showButton", "boolean", "false"],
              ["onDateSelect", "(day: number) => void", "—"],
              ["onMonthSelect", "(month: number) => void", "—"],
              ["onYearSelect", "(year: number) => void", "—"],
              ["onNavigate", "(dir: string) => void", "—"],
              ["onTimeChange", "(h, m, s) => void", "—"],
              ["onCancel", "() => void", "—"],
              ["onConfirm", "() => void", "—"],
              ["className", "string", "—"],
            ].map(([prop, type, def]) => (
              <tr key={prop}>
                <td className="px-4 py-3 font-mono text-xs">{prop}</td>
                <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                  {type}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                  {def}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CalendarEventType */}
      <h3
        id="calendar-event-type-props"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        CalendarEventType
      </h3>
      <div className="mt-3 overflow-x-auto rounded-medium border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              [
                "variant",
                '"session" | "event" | "birthday" | "festival" | "leave"',
                "required",
              ],
              ["size", '"default" | "compact"', '"default"'],
              ["title", "string", "required"],
              ["time", "string", "—"],
              ["showTime", "boolean", "false"],
              ["icon", "React.ReactNode", "—"],
              ["className", "string", "—"],
            ].map(([prop, type, def]) => (
              <tr key={prop}>
                <td className="px-4 py-3 font-mono text-xs">{prop}</td>
                <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                  {type}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                  {def}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CalendarState */}
      <h3
        id="calendar-state-props"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        CalendarState
      </h3>
      <div className="mt-3 overflow-x-auto rounded-medium border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              [
                "variant",
                '"holiday" | "sick-leave" | "birthday" | "event" | "room-movement"',
                "required",
              ],
              ["size", '"default" | "compact"', '"default"'],
              ["label", "string", "required"],
              ["subtext", "string", "—"],
              ["showSubtext", "boolean", "false"],
              ["icon", "React.ReactNode", "—"],
              ["className", "string", "—"],
            ].map(([prop, type, def]) => (
              <tr key={prop}>
                <td className="px-4 py-3 font-mono text-xs">{prop}</td>
                <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                  {type}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                  {def}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DayCell */}
      <h3
        id="day-cell-props"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        DayCell
      </h3>
      <div className="mt-3 overflow-x-auto rounded-medium border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              ["date", "number", "required"],
              [
                "state",
                '"default" | "active" | "leave" | "hover" | "past-or-next-month"',
                '"default"',
              ],
              ["events", "IDayCellEvent[]", "[]"],
              ["maxVisibleEvents", "number", "3"],
              ["onViewMore", "() => void", "—"],
              ["onClick", "() => void", "—"],
              ["className", "string", "—"],
            ].map(([prop, type, def]) => (
              <tr key={prop}>
                <td className="px-4 py-3 font-mono text-xs">{prop}</td>
                <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                  {type}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                  {def}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CalendarCard */}
      <h3
        id="calendar-card-props"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        CalendarCard
      </h3>
      <div className="mt-3 overflow-x-auto rounded-medium border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              ["type", '"month" | "year" | "quarter"', '"month"'],
              ["month", "number", "—"],
              ["year", "number", "—"],
              ["selectedDate", "number", "—"],
              ["selectedMonth", "number", "—"],
              ["selectedYear", "number", "—"],
              ["selectedQuarter", "number", "—"],
              ["todayDate", "number", "—"],
              ["onDateSelect", "(day: number) => void", "—"],
              ["onMonthSelect", "(month: number) => void", "—"],
              ["onYearSelect", "(year: number) => void", "—"],
              ["onCancel", "() => void", "—"],
              ["onApply", "() => void", "—"],
              ["className", "string", "—"],
            ].map(([prop, type, def]) => (
              <tr key={prop}>
                <td className="px-4 py-3 font-mono text-xs">{prop}</td>
                <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                  {type}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                  {def}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Variant Reference ─────────────────────────────────────────────── */}
      <h2
        id="variant-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Variant Reference
      </h2>
      <div className="mt-3 overflow-x-auto rounded-medium border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">
                Component
              </th>
              <th className="px-4 py-3 font-semibold text-foreground">
                Variant / State
              </th>
              <th className="px-4 py-3 font-semibold text-foreground">Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              ["InputDatePicker", "normal", "Default empty state"],
              ["InputDatePicker", "focused", "Input is focused by keyboard"],
              ["InputDatePicker", "opened", "Dropdown is open"],
              ["InputDatePicker", "disabled", "Non-interactive state"],
              ["CalendarDropdown", "date", "Single date picker"],
              ["CalendarDropdown", "date-range", "Date range selection"],
              ["CalendarDropdown", "datetime", "Date + time selection"],
              [
                "CalendarDropdown",
                "month",
                "Month picker (opens from year header click)",
              ],
              [
                "CalendarDropdown",
                "year",
                "Year picker (opens from year header click)",
              ],
              ["CalendarEventType", "session", "Full-day or scheduled session"],
              ["CalendarEventType", "event", "General calendar event"],
              ["CalendarEventType", "birthday", "Birthday event"],
              ["CalendarEventType", "festival", "Public holiday or festival"],
              ["CalendarEventType", "leave", "Leave or absence"],
              ["CalendarState", "holiday", "Holiday indicator badge"],
              ["CalendarState", "sick-leave", "Sick leave indicator"],
              ["CalendarState", "birthday", "Birthday indicator"],
              ["CalendarState", "event", "Event indicator"],
              ["CalendarState", "room-movement", "Room or location change"],
              ["DayCell", "default", "Normal day"],
              ["DayCell", "active", "Selected / active day"],
              ["DayCell", "leave", "Day with leave event"],
              ["DayCell", "hover", "Day being hovered"],
              ["DayCell", "past-or-next-month", "Day outside current month"],
              ["CalendarCard", "month", "Month date grid card"],
              ["CalendarCard", "year", "Year month grid card"],
              ["CalendarCard", "quarter", "Quarter grid card"],
            ].map(([component, variant, useCase]) => (
              <tr key={`${component}-${variant}`}>
                <td className="px-4 py-3 font-mono text-xs">{component}</td>
                <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                  {variant}
                </td>
                <td className="px-4 py-3 text-xs text-secondary-foreground">{useCase}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
