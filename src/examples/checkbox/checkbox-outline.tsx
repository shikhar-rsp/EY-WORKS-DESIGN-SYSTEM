"use client";

import { useState } from "react";
import { Checkbox } from "@/components/figma/Checkbox";

export const CheckboxOutline = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checkboxStyle="outline"
      label="Outline checkbox"
      checked={checked}
      onCheckedChange={setChecked}
    />
  );
};
