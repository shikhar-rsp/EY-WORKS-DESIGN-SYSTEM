"use client";

import { useState } from "react";
import { Switch } from "@/components/figma/Switch";

export const SwitchDefault = () => {
  const [checked, setChecked] = useState(false);
  return <Switch checked={checked} onCheckedChange={setChecked} aria-label="Toggle feature" />;
};
