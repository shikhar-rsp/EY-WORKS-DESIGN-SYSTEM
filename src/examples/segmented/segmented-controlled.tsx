"use client";

import { useState } from "react";

import { Segmented, SegmentedItem } from "@/components/figma/Segmented";

export const SegmentedControlled = () => {
  const [view, setView] = useState("week");

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <Segmented value={view} onValueChange={setView}>
        <SegmentedItem value="day">Day</SegmentedItem>
        <SegmentedItem value="week">Week</SegmentedItem>
        <SegmentedItem value="month">Month</SegmentedItem>
      </Segmented>
      <p className="text-sm text-muted-foreground">
        Selected: <span className="font-semibold text-foreground">{view}</span>
      </p>
    </div>
  );
};
