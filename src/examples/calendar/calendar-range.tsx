"use client";

import { useState } from "react";
import { Calendar } from "@/components/figma/Calendar";

export const CalendarRange = () => {
  const [selected, setSelected] = useState<{ from: Date; to?: Date } | undefined>({
    from: new Date(2024, 9, 10),
    to: new Date(2024, 9, 18),
  });
  return (
    <Calendar
      mode="range"
      numberOfMonths={2}
      defaultMonth={new Date(2024, 9, 1)}
      selected={selected}
      onSelect={(v) => setSelected(v as { from: Date; to?: Date } | undefined)}
    />
  );
};
