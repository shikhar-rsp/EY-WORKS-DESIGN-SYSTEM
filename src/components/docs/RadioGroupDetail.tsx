"use client";

import { useState } from "react";

import { RadioGroup, RadioGroupItem } from "@/components/figma/RadioGroup";

export const RadioGroupDetail = () => {
  const [controlled, setControlled] = useState("option-b");

  return (
    <div className="font-preview-scope color-preview-scope mt-6 space-y-10">
      {/* ── Preview ─────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Preview</h3>
        <div className="mt-4">
          <RadioGroup defaultValue="comfortable">
            {["Default", "Comfortable", "Spacious"].map((v) => (
              <label key={v} className="inline-flex cursor-pointer items-center gap-100 font-lexend text-sm text-foreground">
                <RadioGroupItem value={v.toLowerCase()} />
                {v}
              </label>
            ))}
          </RadioGroup>
        </div>
      </div>

      {/* ── Horizontal ──────────────────────────────────────────── */}
      <div>
        <h3 id="detail-horizontal" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Horizontal</h3>
        <div className="mt-4">
          <RadioGroup defaultValue="light" orientation="horizontal">
            {["light", "dark", "system"].map((v) => (
              <label key={v} className="inline-flex cursor-pointer items-center gap-100 font-lexend text-sm capitalize text-foreground">
                <RadioGroupItem value={v} />
                {v}
              </label>
            ))}
          </RadioGroup>
        </div>
      </div>

      {/* ── Controlled ──────────────────────────────────────────── */}
      <div>
        <h3 id="detail-controlled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Controlled</h3>
        <div className="mt-4 flex flex-col gap-4">
          <RadioGroup value={controlled} onValueChange={setControlled}>
            {["option-a", "option-b", "option-c"].map((v) => (
              <label key={v} className="inline-flex cursor-pointer items-center gap-100 font-lexend text-sm text-foreground">
                <RadioGroupItem value={v} />
                {v}
              </label>
            ))}
          </RadioGroup>
          <p className="font-lexend text-xs text-muted-foreground">Selected: <code className="font-mono">{controlled}</code></p>
        </div>
      </div>

      {/* ── Disabled group ──────────────────────────────────────── */}
      <div>
        <h3 id="detail-disabled-group" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Disabled Group</h3>
        <div className="mt-4">
          <RadioGroup defaultValue="b" disabled>
            {["a", "b", "c"].map((v) => (
              <label key={v} className="inline-flex cursor-not-allowed items-center gap-100 font-lexend text-sm text-foreground opacity-50">
                <RadioGroupItem value={v} />
                Option {v.toUpperCase()}
              </label>
            ))}
          </RadioGroup>
        </div>
      </div>

      {/* ── Disabled item ───────────────────────────────────────── */}
      <div>
        <h3 id="detail-disabled-item" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Disabled Item</h3>
        <div className="mt-4">
          <RadioGroup defaultValue="first">
            <label className="inline-flex cursor-pointer items-center gap-100 font-lexend text-sm text-foreground">
              <RadioGroupItem value="first" />
              First
            </label>
            <label className="inline-flex cursor-not-allowed items-center gap-100 font-lexend text-sm text-foreground opacity-50">
              <RadioGroupItem value="second" disabled />
              Second (disabled)
            </label>
            <label className="inline-flex cursor-pointer items-center gap-100 font-lexend text-sm text-foreground">
              <RadioGroupItem value="third" />
              Third
            </label>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};
