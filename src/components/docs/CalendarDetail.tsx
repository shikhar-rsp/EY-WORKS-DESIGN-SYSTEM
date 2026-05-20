"use client";

import { useState } from "react";

import {
  Calendar,
  DayCell,
  CalendarCard,
  CalendarState,
  InputDatePicker,
  CalendarDropdown,
  CalendarEventType,
} from "@/components/figma/Calendar";

export const CalendarDetail = () => {
  const [selectedSingle, setSelectedSingle] = useState<Date | undefined>(new Date(2024, 9, 15));
  const [selectedRange, setSelectedRange] = useState<{ from: Date; to?: Date } | undefined>({
    from: new Date(2024, 9, 10),
    to: new Date(2024, 9, 18),
  });

  return (
    <div className="space-y-12 mt-6">
      {/* ── Preview (new Calendar root) ──────────────────────────────────── */}
      <section>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 flex flex-wrap gap-8 items-start">
          <Calendar
            selected={selectedSingle}
            onSelect={(v) => setSelectedSingle(v as Date | undefined)}
          />
        </div>
      </section>

      {/* ── Range mode ───────────────────────────────────────────────────── */}
      <section>
        <h3 id="detail-range" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Range
        </h3>
        <p className="mt-1 text-sm text-secondary-foreground">
          Pass <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">mode=&quot;range&quot;</code> to enable range selection. Click twice to set from/to.
        </p>
        <div className="mt-4">
          <Calendar
            mode="range"
            selected={selectedRange}
            onSelect={(v) => setSelectedRange(v as { from: Date; to?: Date } | undefined)}
          />
        </div>
      </section>

      {/* ── Dropdown caption ─────────────────────────────────────────────── */}
      <section>
        <h3 id="detail-dropdown-caption" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Dropdown Caption
        </h3>
        <p className="mt-1 text-sm text-secondary-foreground">
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">captionLayout=&quot;dropdown&quot;</code> replaces the month/year label with select controls.
        </p>
        <div className="mt-4">
          <Calendar captionLayout="dropdown" />
        </div>
      </section>

      {/* ── Multi-month ──────────────────────────────────────────────────── */}
      <section>
        <h3 id="detail-multi-month" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Multiple Months
        </h3>
        <p className="mt-1 text-sm text-secondary-foreground">
          Use <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">numberOfMonths={2}</code> to display multiple month grids side-by-side.
        </p>
        <div className="mt-4">
          <Calendar numberOfMonths={2} />
        </div>
      </section>

      {/* ── Week numbers ─────────────────────────────────────────────────── */}
      <section>
        <h3 id="detail-week-numbers" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Week Numbers
        </h3>
        <p className="mt-1 text-sm text-secondary-foreground">
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">showWeekNumber</code> prepends an ISO week column to each row.
        </p>
        <div className="mt-4">
          <Calendar showWeekNumber />
        </div>
      </section>

      {/* ── Input States ─────────────────────────────────────────────────── */}
      <section>
        <h3 id="detail-input-states" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Input Date Picker — States
        </h3>
        <div className="mt-4 flex flex-wrap gap-6 items-start">
          <div className="flex flex-col gap-3">
            <span className="text-xs text-muted-foreground font-lexend">Normal</span>
            <InputDatePicker state="normal" />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs text-muted-foreground font-lexend">Focused</span>
            <InputDatePicker state="focused" />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs text-muted-foreground font-lexend">Opened</span>
            <InputDatePicker state="opened" />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs text-muted-foreground font-lexend">Disabled</span>
            <InputDatePicker state="disabled" />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs text-muted-foreground font-lexend">Filled</span>
            <InputDatePicker state="normal" filled value="30 Oct 2021" />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs text-muted-foreground font-lexend">Ranged</span>
            <InputDatePicker state="normal" ranged />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs text-muted-foreground font-lexend">Ranged + Filled</span>
            <InputDatePicker state="normal" ranged filled startValue="21 Oct 2021" endValue="30 Oct 2021" />
          </div>
        </div>
      </section>

      {/* ── Dropdown Types ───────────────────────────────────────────────── */}
      <section>
        <h3 id="detail-dropdown-types" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Calendar Dropdown — Types
        </h3>
        <div className="mt-4 flex flex-wrap gap-8 items-start">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground font-lexend">date</span>
            <CalendarDropdown type="date" month={9} year={2021} todayDate={21} selectedDate={30} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground font-lexend">date-range</span>
            <CalendarDropdown type="date-range" month={9} year={2021} todayDate={21} rangeStart={30} rangeEnd={6} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground font-lexend">datetime</span>
            <CalendarDropdown type="datetime" month={9} year={2021} todayDate={21} selectedDate={30} hours={0} minutes={0} seconds={0} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground font-lexend">month</span>
            <CalendarDropdown type="month" year={2021} selectedMonth={9} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground font-lexend">year</span>
            <CalendarDropdown type="year" year={2021} selectedYear={2021} decadeStart={2021} />
          </div>
        </div>
      </section>

      {/* ── Calendar Event Types ─────────────────────────────────────────── */}
      <section>
        <h3 id="detail-event-types" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Calendar Event Type — Variants & Sizes
        </h3>
        <div className="mt-4 space-y-4">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-xs text-muted-foreground font-lexend w-16">Default</span>
            <CalendarEventType variant="session" title="Full Day Session" time="8:30 to 7:30 am" showTime />
            <CalendarEventType variant="event" title="Event" time="8:30 to 7:30 am" showTime />
            <CalendarEventType variant="birthday" title="Arthur's Birthday" />
            <CalendarEventType variant="festival" title="Festival" />
            <CalendarEventType variant="leave" title="Leave" />
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-xs text-muted-foreground font-lexend w-16">Compact</span>
            <CalendarEventType variant="session" size="compact" title="Full Day Session" />
            <CalendarEventType variant="event" size="compact" title="Event" />
            <CalendarEventType variant="birthday" size="compact" title="Arthur's Birthday" />
            <CalendarEventType variant="festival" size="compact" title="Festival" />
            <CalendarEventType variant="leave" size="compact" title="Leave" />
          </div>
        </div>
      </section>

      {/* ── Calendar States ──────────────────────────────────────────────── */}
      <section>
        <h3 id="detail-calendar-states" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Calendar State — Variants & Sizes
        </h3>
        <div className="mt-4 space-y-4">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-xs text-muted-foreground font-lexend w-16">Default</span>
            <CalendarState variant="holiday" label="Christmas" />
            <CalendarState variant="sick-leave" label="Sick Leave" />
            <CalendarState variant="birthday" label="Arthur's Birthday" />
            <CalendarState variant="event" label="Event" />
            <CalendarState variant="room-movement" label="Room Movement" />
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-xs text-muted-foreground font-lexend w-16">Compact</span>
            <CalendarState variant="holiday" size="compact" label="Christmas" />
            <CalendarState variant="sick-leave" size="compact" label="Sick Leave" />
            <CalendarState variant="birthday" size="compact" label="Arthur's Birthday" />
            <CalendarState variant="event" size="compact" label="Event" />
            <CalendarState variant="room-movement" size="compact" label="Room Movement" />
          </div>
          <div className="flex flex-wrap gap-4 items-start">
            <span className="text-xs text-muted-foreground font-lexend w-16 pt-1">With subtext</span>
            <CalendarState variant="holiday" label="Christmas" subtext="8:30 to 7:30 am" showSubtext />
            <CalendarState variant="event" label="Event" subtext="8:30 to 7:30 am" showSubtext />
          </div>
        </div>
      </section>

      {/* ── Day Cell States ──────────────────────────────────────────────── */}
      <section>
        <h3 id="detail-day-cell-states" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Day Cell — States
        </h3>
        <div className="mt-4 flex flex-wrap gap-4 items-start">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground font-lexend">Default</span>
            <DayCell date={1} state="default" events={[{ variant: "holiday", label: "Full Day Session" }, { variant: "event", label: "Event" }]} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground font-lexend">Active</span>
            <DayCell date={1} state="active" events={[{ variant: "holiday", label: "Full Day Session" }, { variant: "event", label: "Event" }]} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground font-lexend">Leave</span>
            <DayCell date={1} state="leave" events={[{ variant: "sick-leave", label: "Sick Leave" }, { variant: "event", label: "Event" }]} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground font-lexend">Hover</span>
            <DayCell date={1} state="hover" events={[{ variant: "birthday", label: "Arthur's Birthday" }]} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground font-lexend">Past / Next Month</span>
            <DayCell date={1} state="past-or-next-month" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground font-lexend">View More</span>
            <DayCell date={1} state="default" maxVisibleEvents={2} events={[{ variant: "holiday", label: "Full Day Session" }, { variant: "event", label: "Event" }, { variant: "birthday", label: "Birthday" }, { variant: "holiday", label: "Holiday" }, { variant: "room-movement", label: "Room Movement" }]} />
          </div>
        </div>
      </section>

      {/* ── Calendar Card Types ──────────────────────────────────────────── */}
      <section>
        <h3 id="detail-calendar-card-types" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Calendar Card — Types
        </h3>
        <div className="mt-4 flex flex-wrap gap-6 items-start">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground font-lexend">Month</span>
            <CalendarCard type="month" month={9} year={2021} selectedDate={30} todayDate={21} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground font-lexend">Year</span>
            <CalendarCard type="year" year={2021} selectedMonth={9} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground font-lexend">Quarter</span>
            <CalendarCard type="quarter" year={2021} selectedQuarter={4} />
          </div>
        </div>
      </section>
    </div>
  );
};
