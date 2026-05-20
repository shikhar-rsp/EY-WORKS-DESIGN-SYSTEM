"use client";

import { useState } from "react";
import { Checkbox } from "@/components/figma/Checkbox";

export const CheckboxControlled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onCheckedChange={setChecked}
      label="Controlled checkbox"
    />
  );
};
