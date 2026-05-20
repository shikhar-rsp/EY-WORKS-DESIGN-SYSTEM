"use client";

import { useState } from "react";
import { Calendar } from "@/components/figma/Calendar";

export const CalendarDropdownRange = () => {
  const [range, setRange] = useState<{ from: Date; to?: Date } | undefined>({
    from: new Date(2021, 9, 10),
    to: new Date(2021, 9, 24),
  });

  return (
    <Calendar
      mode="range"
      numberOfMonths={2}
      defaultMonth={new Date(2021, 9, 1)}
      selected={range}
      onSelect={(v) => setRange(v as { from: Date; to?: Date } | undefined)}
    />
  );
};
