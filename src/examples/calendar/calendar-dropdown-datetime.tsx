"use client";

import { useState } from "react";
import { CalendarDropdown } from "@/components/figma/Calendar";

const today = new Date();

export const CalendarDropdownDatetime = () => {
  const [month, setMonth] = useState(9);
  const [year, setYear] = useState(2021);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleNav = (dir: string) => {
    if (dir === "prev-month") { if (month === 0) { setMonth(11); setYear((y) => y - 1); } else setMonth((m) => m - 1); }
    if (dir === "next-month") { if (month === 11) { setMonth(0); setYear((y) => y + 1); } else setMonth((m) => m + 1); }
    if (dir === "prev-year") setYear((y) => y - 1);
    if (dir === "next-year") setYear((y) => y + 1);
  };

  return (
    <CalendarDropdown
      type="datetime"
      month={month}
      year={year}
      selectedDate={selectedDate ?? undefined}
      todayDate={today.getMonth() === month && today.getFullYear() === year ? today.getDate() : undefined}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
      onNavigate={handleNav}
      onDateSelect={(d) => setSelectedDate(d)}
      onTimeChange={(h, m, s) => { setHours(h); setMinutes(m); setSeconds(s); }}
    />
  );
};
