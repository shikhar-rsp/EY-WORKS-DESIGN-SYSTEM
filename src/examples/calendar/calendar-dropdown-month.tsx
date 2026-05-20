"use client";

import { useState } from "react";
import { CalendarDropdown } from "@/components/figma/Calendar";

export const CalendarDropdownMonth = () => {
  const [year, setYear] = useState(2021);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(9);

  const handleNav = (dir: string) => {
    if (dir === "prev-year") setYear((y) => y - 1);
    if (dir === "next-year") setYear((y) => y + 1);
  };

  return (
    <CalendarDropdown
      type="month"
      year={year}
      selectedMonth={selectedMonth ?? undefined}
      onNavigate={handleNav}
      onMonthSelect={(m) => setSelectedMonth(m)}
    />
  );
};
