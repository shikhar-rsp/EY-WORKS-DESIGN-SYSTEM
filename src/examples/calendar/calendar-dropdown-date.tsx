"use client";

import { useState } from "react";
import { CalendarDropdown } from "@/components/figma/Calendar";

const today = new Date();

export const CalendarDropdownDate = () => {
  const [month, setMonth] = useState(9);
  const [year, setYear] = useState(2021);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const handleNav = (dir: string) => {
    if (dir === "prev-month") { if (month === 0) { setMonth(11); setYear((y) => y - 1); } else setMonth((m) => m - 1); }
    if (dir === "next-month") { if (month === 11) { setMonth(0); setYear((y) => y + 1); } else setMonth((m) => m + 1); }
    if (dir === "prev-year") setYear((y) => y - 1);
    if (dir === "next-year") setYear((y) => y + 1);
  };

  return (
    <CalendarDropdown
      type="date"
      month={month}
      year={year}
      selectedDate={selectedDate ?? undefined}
      todayDate={today.getMonth() === month && today.getFullYear() === year ? today.getDate() : undefined}
      onNavigate={handleNav}
      onDateSelect={(d) => setSelectedDate(d)}
    />
  );
};
