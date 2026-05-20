"use client";

import { Switch } from "@/components/figma/Switch";
import { Checkbox } from "@/components/figma/Checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/figma/RadioGroup";

export const FormControlsCard = () => (
  <div className="rounded-lg border border-border bg-background p-6 shadow-sm">
    <h3 className="font-lexend text-base font-semibold text-foreground">
      Form Controls
    </h3>
    <p className="mt-1 font-lexend text-[13px] text-secondary-foreground">
      Checkbox, radio, toggle — all Figma-synced.
    </p>

    <div className="mt-5 space-y-5">
      <div className="space-y-2">
        <p className="font-lexend text-[13px] font-medium text-muted-foreground">
          Checkboxes
        </p>
        <div className="flex flex-col gap-2">
          <Checkbox label="Email notifications" defaultChecked />
          <Checkbox label="Push notifications" />
          <Checkbox label="SMS alerts" disabled />
        </div>
      </div>

      <div className="space-y-2">
        <p className="font-lexend text-[13px] font-medium text-muted-foreground">
          Toggles
        </p>
        <div className="flex flex-col gap-3">
          <Switch label="Dark mode" defaultChecked size="small" />
          <Switch label="Auto-save" size="small" />
          <Switch label="Disabled" size="small" disabled />
        </div>
      </div>

      <div className="space-y-2">
        <p className="font-lexend text-[13px] font-medium text-muted-foreground">
          Radio Group
        </p>
        <RadioGroup defaultValue="comfortable">
          {["compact", "comfortable", "spacious"].map((v) => (
            <label key={v} className="inline-flex cursor-pointer items-center gap-100 font-lexend text-sm capitalize text-foreground">
              <RadioGroupItem value={v} />
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </label>
          ))}
        </RadioGroup>
      </div>
    </div>
  </div>
);
