"use client";

import { useState } from "react";
import { Checkbox } from "@/components/figma/Checkbox";

export const CheckboxBrand = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Checkbox
      checkboxStyle="brand"
      label="Brand checkbox"
      checked={checked}
      onCheckedChange={setChecked}
    />
  );
};
