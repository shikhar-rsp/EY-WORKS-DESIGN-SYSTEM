"use client";

import { useState } from "react";
import { Calendar } from "@/components/figma/Calendar";

export const CalendarDefault = () => {
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  return (
    <Calendar
      selected={selected}
      onSelect={(v) => setSelected(v as Date | undefined)}
    />
  );
};
