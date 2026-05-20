"use client";

import { useState } from "react";
import { Checkbox } from "@/components/figma/Checkbox";

export const CheckboxSizes = () => {
  const [small, setSmall] = useState(true);
  const [medium, setMedium] = useState(true);
  const [large, setLarge] = useState(true);
  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Checkbox size="small" checked={small} onCheckedChange={setSmall} />
        <span className="font-lexend text-[11px] text-muted-foreground">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Checkbox size="medium" checked={medium} onCheckedChange={setMedium} />
        <span className="font-lexend text-[11px] text-muted-foreground">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Checkbox size="large" checked={large} onCheckedChange={setLarge} />
        <span className="font-lexend text-[11px] text-muted-foreground">Large</span>
      </div>
    </div>
  );
};
