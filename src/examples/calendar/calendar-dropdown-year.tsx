"use client";

import { useState } from "react";
import { CalendarDropdown } from "@/components/figma/Calendar";

export const CalendarDropdownYear = () => {
  const [decadeStart, setDecadeStart] = useState(2020);
  const [selectedYear, setSelectedYear] = useState<number | null>(2021);

  const handleNav = (dir: string) => {
    if (dir === "prev-year") setDecadeStart((d) => d - 10);
    if (dir === "next-year") setDecadeStart((d) => d + 10);
  };

  return (
    <CalendarDropdown
      type="year"
      year={decadeStart}
      decadeStart={decadeStart}
      selectedYear={selectedYear ?? undefined}
      onNavigate={handleNav}
      onYearSelect={(y) => setSelectedYear(y)}
    />
  );
};
