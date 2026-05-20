"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CalendarDropdown, InputDatePicker } from "@/components/figma/Calendar";

const today = new Date();
const formatDate = (year: number, month: number, day: number) =>
  `${String(day).padStart(2, "0")}/${String(month + 1).padStart(2, "0")}/${year}`;

export const CalendarInputFilled = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("30/10/2021");
  const [month, setMonth] = useState(9); // October = index 9
  const [year, setYear] = useState(2021);
  const [selectedDay, setSelectedDay] = useState<number | null>(30);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!open || !triggerRef.current) return;
    const r = triggerRef.current.getBoundingClientRect();
    setPos({ top: r.bottom + window.scrollY + 4, left: r.left + window.scrollX });
  }, [open]);

  const handleNav = (dir: string) => {
    if (dir === "prev-month") { if (month === 0) { setMonth(11); setYear((y) => y - 1); } else setMonth((m) => m - 1); }
    if (dir === "next-month") { if (month === 11) { setMonth(0); setYear((y) => y + 1); } else setMonth((m) => m + 1); }
    if (dir === "prev-year") setYear((y) => y - 1);
    if (dir === "next-year") setYear((y) => y + 1);
  };

  const handleSelect = (day: number) => {
    setSelectedDay(day);
    setValue(formatDate(year, month, day));
    setOpen(false);
  };

  return (
    <div ref={triggerRef} style={{ display: "inline-block" }}>
      <InputDatePicker
        state={open ? "opened" : "normal"}
        filled
        value={value}
        onClick={() => setOpen((o) => !o)}
      />
      {open && typeof document !== "undefined" && createPortal(
        <div style={{ position: "absolute", top: pos.top, left: pos.left, zIndex: 9999 }}>
          <CalendarDropdown
            type="date"
            month={month}
            year={year}
            selectedDate={selectedDay ?? undefined}
            todayDate={today.getMonth() === month && today.getFullYear() === year ? today.getDate() : undefined}
            onNavigate={handleNav}
            onDateSelect={handleSelect}
          />
        </div>,
        document.body,
      )}
    </div>
  );
};
