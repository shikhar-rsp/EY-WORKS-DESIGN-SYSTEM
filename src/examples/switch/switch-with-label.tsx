"use client";

import { useState } from "react";
import { Switch } from "@/components/figma/Switch";

export const SwitchWithLabel = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-center gap-2">
      <Switch id="notifications" checked={checked} onCheckedChange={setChecked} />
      <label htmlFor="notifications" className="text-sm text-foreground cursor-pointer">
        Enable notifications
      </label>
    </div>
  );
};
