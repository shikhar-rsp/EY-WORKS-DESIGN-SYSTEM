"use client";

import { useState } from "react";
import { Slider } from "@/components/figma/Slider";

export const SliderRange = () => {
  const [value, setValue] = useState([20, 70]);
  return <Slider value={value} onValueChange={setValue} className="w-64" />;
};
