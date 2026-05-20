"use client";

import { useState } from "react";
import { Slider } from "@/components/figma/Slider";

export const SliderDefault = () => {
  const [value, setValue] = useState([33]);
  return <Slider value={value} onValueChange={setValue} className="w-64" />;
};
