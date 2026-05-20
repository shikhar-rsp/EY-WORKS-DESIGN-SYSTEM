"use client";

import { useState } from "react";
import { Checkbox } from "@/components/figma/Checkbox";

export const CheckboxDefault = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label="Enable feature"
      checked={checked}
      onCheckedChange={setChecked}
    />
  );
};
