"use client";

import { Label } from "@/components/figma/Label";
import { Checkbox } from "@/components/figma/Checkbox";

export const LabelDetail = () => {
  return (
    <div className="mt-6 space-y-10">
      {/* Preview */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 flex flex-wrap items-center gap-300">
          <Label>Default label</Label>
          <Label className="text-muted-foreground">Muted label</Label>
          <Label className="text-destructive">Required <span aria-hidden="true">*</span></Label>
        </div>
      </div>

      {/* With Input */}
      <div>
        <h3 id="detail-with-input" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          With Input
        </h3>
        <div className="mt-4 flex flex-col gap-075">
          <Label htmlFor="d-email">Email address</Label>
          <input
            id="d-email"
            type="email"
            placeholder="you@example.com"
            className="h-9 w-64 rounded-medium border border-border-input bg-background px-200 text-sm font-lexend text-foreground placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
          />
        </div>
      </div>

      {/* With Checkbox */}
      <div>
        <h3 id="detail-with-checkbox" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          With Checkbox
        </h3>
        <div className="mt-4 flex items-center gap-2">
          <Checkbox id="d-check" size="medium" />
          <Label htmlFor="d-check" className="cursor-pointer">
            Accept terms and conditions
          </Label>
        </div>
      </div>

      {/* Disabled */}
      <div>
        <h3 id="detail-disabled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Disabled
        </h3>
        <div className="mt-4 flex flex-col gap-300">
          <div className="flex flex-col gap-075">
            <Label htmlFor="d-disabled">Unavailable field</Label>
            <input
              id="d-disabled"
              type="text"
              placeholder="Unavailable"
              disabled
              className="h-9 w-64 cursor-not-allowed rounded-medium border border-disabled-border bg-disabled-surface px-200 text-sm font-lexend text-disabled placeholder:text-disabled focus:outline-none"
            />
          </div>
          {/* peer-disabled: label auto-dims when its associated input is disabled */}
          <div className="flex flex-col gap-075">
            <Label htmlFor="d-peer">Peer-disabled label (auto-dims)</Label>
            <input
              id="d-peer"
              type="text"
              placeholder="Disabled"
              disabled
              className="peer h-9 w-64 cursor-not-allowed rounded-medium border border-disabled-border bg-disabled-surface px-200 text-sm font-lexend text-disabled placeholder:text-disabled focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Required indicator */}
      <div>
        <h3 id="detail-required" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Required Indicator
        </h3>
        <div className="mt-4 flex flex-col gap-150">
          <div className="flex flex-col gap-075">
            <Label htmlFor="d-req" className="after:ml-050 after:text-destructive after:content-['*']">
              Full name
            </Label>
            <input
              id="d-req"
              type="text"
              placeholder="Jane Doe"
              required
              className="h-9 w-64 rounded-medium border border-border-input bg-background px-200 text-sm font-lexend text-foreground placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
