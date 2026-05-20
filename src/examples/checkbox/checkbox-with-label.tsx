"use client";

import { useState } from "react";
import { Checkbox } from "@/components/figma/Checkbox";

export const CheckboxWithLabel = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label="Subscribe to newsletter"
      helperMessage="Get weekly updates and product news"
      checked={checked}
      onCheckedChange={setChecked}
    />
  );
};
