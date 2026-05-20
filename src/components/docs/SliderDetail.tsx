"use client";

import { useState } from "react";

import { Slider } from "@/components/figma/Slider";

export const SliderDetail = () => {
  const [single, setSingle] = useState([50]);
  const [range, setRange] = useState([20, 80]);

  return (
    <div className="mt-6 space-y-10">
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Preview</h3>
        <div className="mt-4 w-72">
          <Slider defaultValue={[40]} aria-label="Preview" />
        </div>
      </div>

      <div>
        <h3 id="detail-states" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">States</h3>
        <div className="mt-4 flex flex-col gap-200 w-72">
          <div className="flex flex-col gap-100">
            <span className="text-xs text-muted-foreground font-lexend">Default (value: {single[0]})</span>
            <Slider value={single} onValueChange={setSingle} aria-label="Volume" />
          </div>
          <div className="flex flex-col gap-100">
            <span className="text-xs text-muted-foreground font-lexend">Disabled</span>
            <Slider defaultValue={[60]} disabled aria-label="Disabled" />
          </div>
        </div>
      </div>

      <div>
        <h3 id="detail-range" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Range Slider</h3>
        <div className="mt-4 flex flex-col gap-100 w-72">
          <span className="text-xs text-muted-foreground font-lexend">Price: ${range[0]} – ${range[1]}</span>
          <Slider value={range} onValueChange={setRange} aria-label="Price range" />
        </div>
      </div>

      <div>
        <h3 id="detail-steps" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">With Steps</h3>
        <div className="mt-4 flex flex-col gap-100 w-72">
          <span className="text-xs text-muted-foreground font-lexend">Step: 10</span>
          <Slider defaultValue={[30]} step={10} aria-label="Stepped slider" />
        </div>
      </div>
    </div>
  );
};
