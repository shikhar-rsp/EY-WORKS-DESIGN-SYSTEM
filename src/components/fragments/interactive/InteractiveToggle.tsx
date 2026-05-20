"use client";

import { useState } from "react";

import { Switch } from "@/components/figma/Switch";

export const InteractiveToggle = (
  props: React.ComponentProps<typeof Switch>,
) => {
  const [checked, setChecked] = useState(props.checked ?? false);

  return <Switch {...props} checked={checked} onCheckedChange={setChecked} />;
};
