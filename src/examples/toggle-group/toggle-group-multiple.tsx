"use client";

import { useState } from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/figma/ToggleGroup";

export const ToggleGroupMultiple = () => {
  const [active, setActive] = useState<string[]>(["bold"]);

  return (
    <ToggleGroup type="multiple" value={active} onValueChange={setActive}>
      <ToggleGroupItem value="bold">
        <span className="font-bold">B</span>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <span className="italic">I</span>
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <span className="underline">U</span>
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
