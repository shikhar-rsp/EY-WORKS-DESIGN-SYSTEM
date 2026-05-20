"use client";

import { useState } from "react";

import {
  TimePicker,
  TimePickerContent,
  TimePickerColumn,
  TimePickerTrigger,
  TimePickerValue,
} from "@/components/figma/TimePicker";

export const TimePickerControlled = () => {
  const [value, setValue] = useState("09:00");

  return (
    <div className="flex flex-col items-center gap-4">
      <TimePicker value={value} onValueChange={setValue}>
        <TimePickerTrigger>
          <TimePickerValue placeholder="Select time" />
        </TimePickerTrigger>
        <TimePickerContent>
          <TimePickerColumn unit="hour" />
          <TimePickerColumn unit="minute" />
        </TimePickerContent>
      </TimePicker>
      <p className="font-lexend text-sm text-muted-foreground">
        Selected:{" "}
        <span className="font-semibold text-foreground">{value}</span>
      </p>
    </div>
  );
};
