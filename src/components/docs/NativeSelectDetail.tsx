"use client";

import { Label } from "@/components/figma/Label";
import { NativeSelect, NativeSelectOption, NativeSelectOptGroup } from "@/components/figma/NativeSelect";

export const NativeSelectDetail = () => {
  return (
    <div className="mt-6 space-y-10">
      {/* Preview */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 w-56">
          <NativeSelect defaultValue="">
            <NativeSelectOption value="" disabled>Select a fruit…</NativeSelectOption>
            <NativeSelectOption value="apple">Apple</NativeSelectOption>
            <NativeSelectOption value="banana">Banana</NativeSelectOption>
            <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
          </NativeSelect>
        </div>
      </div>

      {/* With grouped options */}
      <div>
        <h3 id="detail-grouped" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Grouped Options
        </h3>
        <div className="mt-4 flex flex-col gap-075 w-56">
          <Label htmlFor="detail-country">Country</Label>
          <NativeSelect id="detail-country" defaultValue="">
            <NativeSelectOption value="" disabled>Choose a country…</NativeSelectOption>
            <NativeSelectOptGroup label="Asia">
              <NativeSelectOption value="jp">Japan</NativeSelectOption>
              <NativeSelectOption value="id">Indonesia</NativeSelectOption>
            </NativeSelectOptGroup>
            <NativeSelectOptGroup label="Europe">
              <NativeSelectOption value="de">Germany</NativeSelectOption>
              <NativeSelectOption value="fr">France</NativeSelectOption>
            </NativeSelectOptGroup>
          </NativeSelect>
        </div>
      </div>

      {/* States */}
      <div>
        <h3 id="detail-states" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          States
        </h3>
        <div className="mt-4 flex flex-col gap-200">
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">Default</span>
            <NativeSelect className="w-56" defaultValue="">
              <NativeSelectOption value="" disabled>Select…</NativeSelectOption>
              <NativeSelectOption value="1">Option 1</NativeSelectOption>
              <NativeSelectOption value="2">Option 2</NativeSelectOption>
            </NativeSelect>
          </div>
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">Disabled</span>
            <NativeSelect className="w-56" disabled defaultValue="opt1">
              <NativeSelectOption value="opt1">Option 1</NativeSelectOption>
            </NativeSelect>
          </div>
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">Invalid</span>
            <NativeSelect className="w-56" aria-invalid={true} defaultValue="">
              <NativeSelectOption value="" disabled>Required</NativeSelectOption>
            </NativeSelect>
          </div>
        </div>
      </div>
    </div>
  );
};
