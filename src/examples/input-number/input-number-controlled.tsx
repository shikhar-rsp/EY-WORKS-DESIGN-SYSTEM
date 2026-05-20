"use client";

import { useState } from "react";

import {
  InputNumber,
  InputNumberDecrement,
  InputNumberField,
  InputNumberIncrement,
} from "@/components/figma/InputNumber";

export const InputNumberControlled = () => {
  const [value, setValue] = useState(10);

  return (
    <div className="flex items-center gap-4">
      <InputNumber value={value} onValueChange={setValue} min={0} max={100} step={1}>
        <InputNumberDecrement />
        <InputNumberField />
        <InputNumberIncrement />
      </InputNumber>
      <span className="text-sm text-muted-foreground font-lexend">
        Current value: <strong className="text-foreground">{value}</strong>
      </span>
    </div>
  );
};
