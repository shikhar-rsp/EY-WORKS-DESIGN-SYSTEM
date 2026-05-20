"use client";

import { useState } from "react";

import { Progress } from "@/components/figma/Progress";

export const ProgressWithLabel = () => {
  const [value] = useState(66);

  return (
    <div className="flex flex-col gap-150 w-64">
      <div className="flex items-center justify-between">
        <span className="text-sm font-lexend text-foreground">Upload progress</span>
        <span className="text-sm font-lexend text-muted-foreground">{value}%</span>
      </div>
      <Progress value={value} />
    </div>
  );
};
