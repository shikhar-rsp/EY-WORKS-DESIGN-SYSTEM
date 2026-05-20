"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Calendar, InputDatePicker } from "@/components/figma/Calendar";

const fmt = (d: Date) =>
  `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;

export const CalendarInputRanged = () => {
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState<{ from: Date; to?: Date } | undefined>({
    from: new Date(2021, 9, 21),
    to: new Date(2021, 9, 30),
  });
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);

  const startValue = range?.from ? fmt(range.from) : undefined;
  const endValue = range?.to ? fmt(range.to) : undefined;

  useLayoutEffect(() => {
    if (!open || !triggerRef.current) return;
    const r = triggerRef.current.getBoundingClientRect();
    setPos({ top: r.bottom + window.scrollY + 4, left: r.left + window.scrollX });
  }, [open]);

  const handleSelect = (v: { from: Date; to?: Date } | undefined) => {
    setRange(v);
    if (v?.from && v?.to) setOpen(false);
  };

  return (
    <div ref={triggerRef} style={{ display: "inline-block" }}>
      <InputDatePicker
        ranged
        state={open ? "opened" : "normal"}
        filled={!!(startValue && endValue)}
        startValue={startValue}
        endValue={endValue}
        placeholder="Select date"
        onClick={() => setOpen((o) => !o)}
      />
      {open && typeof document !== "undefined" && createPortal(
        <div style={{ position: "absolute", top: pos.top, left: pos.left, zIndex: 9999 }}>
          <Calendar
            mode="range"
            numberOfMonths={2}
            defaultMonth={range?.from ?? new Date(2021, 9, 1)}
            selected={range}
            onSelect={(v) => handleSelect(v as { from: Date; to?: Date } | undefined)}
          />
        </div>,
        document.body,
      )}
    </div>
  );
};
