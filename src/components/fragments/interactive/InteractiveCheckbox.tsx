"use client";

import { useState } from "react";

import { Checkbox } from "@/components/figma/Checkbox";

export const InteractiveCheckbox = (
  props: React.ComponentProps<typeof Checkbox>,
) => {
  const [checked, setChecked] = useState(props.checked ?? false);

  return <Checkbox {...props} checked={checked} onCheckedChange={setChecked} />;
};
