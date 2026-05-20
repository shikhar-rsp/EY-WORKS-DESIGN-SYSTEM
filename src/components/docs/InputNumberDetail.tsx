"use client";

import { useState } from "react";

import {
  InputNumber,
  InputNumberDecrement,
  InputNumberField,
  InputNumberIncrement,
} from "@/components/figma/InputNumber";

export const InputNumberDetail = () => {
  const [controlled, setControlled] = useState(5);

  return (
    <div className="mt-6 space-y-10">

      {/* ── Preview ──────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 rounded-large border border-border p-6">
          <InputNumber defaultValue={1} min={0} max={100}>
            <InputNumberDecrement />
            <InputNumberField placeholder="0" />
            <InputNumberIncrement />
          </InputNumber>
        </div>
      </div>

      {/* ── Min / Max ────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-min-max" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Min / Max Bounds
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          The decrement button disables at <code>min</code>; the increment button disables at <code>max</code>.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 flex flex-wrap gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-lexend text-xs text-muted-foreground">min=0, max=10, defaultValue=0</span>
            <InputNumber defaultValue={0} min={0} max={10}>
              <InputNumberDecrement />
              <InputNumberField />
              <InputNumberIncrement />
            </InputNumber>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-lexend text-xs text-muted-foreground">min=0, max=10, defaultValue=10</span>
            <InputNumber defaultValue={10} min={0} max={10}>
              <InputNumberDecrement />
              <InputNumberField />
              <InputNumberIncrement />
            </InputNumber>
          </div>
        </div>
      </div>

      {/* ── Step ─────────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-step" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Step
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Control the increment/decrement amount with the <code>step</code> prop.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 flex flex-wrap gap-6">
          {[1, 5, 10, 0.5].map((step) => (
            <div key={step} className="flex flex-col gap-2">
              <span className="font-lexend text-xs text-muted-foreground">step={step}</span>
              <InputNumber defaultValue={0} step={step}>
                <InputNumberDecrement />
                <InputNumberField />
                <InputNumberIncrement />
              </InputNumber>
            </div>
          ))}
        </div>
      </div>

      {/* ── Controlled ───────────────────────────────────────────── */}
      <div>
        <h3 id="detail-controlled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Controlled
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Use <code>value</code> + <code>onValueChange</code> for external state control.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 flex items-center gap-4">
          <InputNumber value={controlled} onValueChange={setControlled} min={0} max={20}>
            <InputNumberDecrement />
            <InputNumberField />
            <InputNumberIncrement />
          </InputNumber>
          <span className="font-lexend text-sm text-muted-foreground">
            External value: <strong className="text-foreground">{controlled}</strong>
          </span>
        </div>
      </div>

      {/* ── Disabled ─────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-disabled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Disabled
        </h3>
        <div className="mt-4 rounded-large border border-border p-6">
          <InputNumber defaultValue={5} disabled>
            <InputNumberDecrement />
            <InputNumberField />
            <InputNumberIncrement />
          </InputNumber>
        </div>
      </div>

    </div>
  );
};
