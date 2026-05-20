"use client";

import { RadioGroup, RadioGroupItem } from "@/components/figma/RadioGroup";

export const RadioGroupHorizontal = () => {
  return (
    <RadioGroup defaultValue="comfortable" orientation="horizontal">
      {["Default", "Comfortable", "Spacious"].map((v) => (
        <label
          key={v}
          className="inline-flex cursor-pointer items-center gap-2 font-lexend text-sm text-foreground"
        >
          <RadioGroupItem value={v.toLowerCase()} />
          {v}
        </label>
      ))}
    </RadioGroup>
  );
};
