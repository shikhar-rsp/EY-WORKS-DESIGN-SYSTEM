"use client";

import { useState } from "react";

import { RadioGroup, RadioGroupItem } from "@/components/figma/RadioGroup";

interface IInteractiveRadioGroupProps {
  defaultValue?: string;
  labels: string[];
  disabled?: boolean;
  orientation?: "horizontal" | "vertical";
}

export const InteractiveRadioGroup = (props: IInteractiveRadioGroupProps) => {
  const [value, setValue] = useState(props.defaultValue ?? "");

  return (
    <RadioGroup
      value={value}
      onValueChange={setValue}
      orientation={props.orientation}
      disabled={props.disabled}
    >
      {props.labels.map((label) => (
        <label key={label} className="inline-flex cursor-pointer items-center gap-100 font-lexend text-sm text-foreground">
          <RadioGroupItem value={label} />
          {label}
        </label>
      ))}
    </RadioGroup>
  );
};
