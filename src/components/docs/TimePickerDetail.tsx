"use client";

import { useState } from "react";

import {
  TimePicker,
  TimePickerTrigger,
  TimePickerValue,
  TimePickerContent,
  TimePickerColumn,
} from "@/components/figma/TimePicker";

export const TimePickerDetail = () => {
  const [controlled, setControlled] = useState("09:30");

  return (
    <div className="mt-6 space-y-10">

      {/* ── Preview ──────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 rounded-large border border-border p-6">
          <TimePicker defaultValue="14:30">
            <TimePickerTrigger>
              <TimePickerValue placeholder="Select time" />
            </TimePickerTrigger>
            <TimePickerContent>
              <TimePickerColumn unit="hour" />
              <TimePickerColumn unit="minute" />
            </TimePickerContent>
          </TimePicker>
        </div>
      </div>

      {/* ── 12h Format ───────────────────────────────────────────── */}
      <div>
        <h3 id="detail-12h" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          12-Hour Format
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Use <code>format=&quot;12h&quot;</code> to show an AM/PM period column.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <TimePicker defaultValue="02:30 PM" format="12h">
            <TimePickerTrigger>
              <TimePickerValue placeholder="Select time" />
            </TimePickerTrigger>
            <TimePickerContent>
              <TimePickerColumn unit="hour" />
              <TimePickerColumn unit="minute" />
              <TimePickerColumn unit="period" />
            </TimePickerContent>
          </TimePicker>
        </div>
      </div>

      {/* ── With Seconds ─────────────────────────────────────────── */}
      <div>
        <h3 id="detail-seconds" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          With Seconds
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Add a <code>TimePickerColumn unit=&quot;second&quot;</code> column and set <code>showSeconds</code> on the root.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <TimePicker defaultValue="10:15:30" showSeconds>
            <TimePickerTrigger>
              <TimePickerValue placeholder="HH:MM:SS" />
            </TimePickerTrigger>
            <TimePickerContent>
              <TimePickerColumn unit="hour" />
              <TimePickerColumn unit="minute" />
              <TimePickerColumn unit="second" />
            </TimePickerContent>
          </TimePicker>
        </div>
      </div>

      {/* ── Controlled ───────────────────────────────────────────── */}
      <div>
        <h3 id="detail-controlled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Controlled
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Use <code>value</code> + <code>onValueChange</code> for externally managed state.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 flex items-center gap-4 flex-wrap">
          <TimePicker value={controlled} onValueChange={setControlled}>
            <TimePickerTrigger>
              <TimePickerValue />
            </TimePickerTrigger>
            <TimePickerContent>
              <TimePickerColumn unit="hour" />
              <TimePickerColumn unit="minute" />
            </TimePickerContent>
          </TimePicker>
          <span className="font-lexend text-sm text-muted-foreground">
            Value: <strong className="text-foreground">{controlled}</strong>
          </span>
        </div>
      </div>

    </div>
  );
};
