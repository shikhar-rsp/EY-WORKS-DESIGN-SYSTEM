"use client";

import { useState } from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/figma/ToggleGroup";

export const ToggleGroupDefault = () => {
  const [align, setAlign] = useState("center");

  return (
    <ToggleGroup type="single" value={align} onValueChange={setAlign}>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  );
};
