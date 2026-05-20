"use client";

import { useState } from "react";

import { Label } from "@/components/figma/Label";
import { Switch } from "@/components/figma/Switch";

export const SwitchDetail = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="mt-6 space-y-10">
      {/* Preview */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 flex items-center gap-300">
          <Switch aria-label="Off" />
          <Switch defaultChecked aria-label="On" />
        </div>
      </div>

      {/* States */}
      <div>
        <h3 id="detail-states" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          States
        </h3>
        <div className="mt-4 flex flex-col gap-200">
          <div className="flex items-center gap-200">
            <Switch aria-label="Unchecked" />
            <span className="text-sm font-lexend text-muted-foreground">Unchecked</span>
          </div>
          <div className="flex items-center gap-200">
            <Switch defaultChecked aria-label="Checked" />
            <span className="text-sm font-lexend text-muted-foreground">Checked</span>
          </div>
          <div className="flex items-center gap-200">
            <Switch disabled aria-label="Disabled unchecked" />
            <span className="text-sm font-lexend text-muted-foreground">Disabled</span>
          </div>
          <div className="flex items-center gap-200">
            <Switch disabled defaultChecked aria-label="Disabled checked" />
            <span className="text-sm font-lexend text-muted-foreground">Disabled + Checked</span>
          </div>
        </div>
      </div>

      {/* With label */}
      <div>
        <h3 id="detail-with-label" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          With Label
        </h3>
        <div className="mt-4 flex items-center gap-200">
          <Switch id="detail-sw" checked={checked} onCheckedChange={setChecked} />
          <Label htmlFor="detail-sw" className="cursor-pointer">
            {checked ? "Enabled" : "Disabled"} — push notifications
          </Label>
        </div>
      </div>
    </div>
  );
};
