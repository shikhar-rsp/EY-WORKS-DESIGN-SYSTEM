"use client";

import { useState } from "react";

import { Progress } from "@/components/figma/Progress";

export const ProgressDetail = () => {
  const [value, setValue] = useState(60);

  return (
    <div className="font-preview-scope color-preview-scope mt-6 space-y-10">

      {/* ── Preview ─────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 w-80">
          <Progress value={60} />
        </div>
      </div>

      {/* ── All Values ──────────────────────────────────────────── */}
      <div>
        <h3 id="detail-all-values" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Values
        </h3>
        <div className="mt-4 flex w-80 flex-col gap-200">
          {([0, 25, 50, 75, 100] as const).map((v) => (
            <div key={v} className="flex flex-col gap-075">
              <span className="font-lexend text-xs text-muted-foreground">{v}%</span>
              <Progress value={v} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Sizes ───────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-all-sizes" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Sizes
        </h3>
        <div className="mt-4 flex w-80 flex-col gap-200">
          {(["sm", "md", "lg"] as const).map((size) => (
            <div key={size} className="flex flex-col gap-075">
              <span className="font-lexend text-xs text-muted-foreground">{size}</span>
              <Progress size={size} value={60} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Indeterminate ───────────────────────────────────────── */}
      <div>
        <h3 id="detail-indeterminate" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Indeterminate
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Omit <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">value</code> to show an indeterminate pulsing state.
        </p>
        <div className="mt-4 w-80">
          <Progress label="Loading…" />
        </div>
      </div>

      {/* ── With Label ──────────────────────────────────────────── */}
      <div>
        <h3 id="detail-with-label" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          With Label
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          The <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">label</code> prop sets the accessible <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">aria-label</code>.
        </p>
        <div className="mt-4 flex w-80 flex-col gap-075">
          <span className="font-lexend text-xs text-muted-foreground">Uploading file…</span>
          <Progress value={45} label="Uploading file" />
        </div>
      </div>

      {/* ── Interactive ─────────────────────────────────────────── */}
      <div>
        <h3 id="detail-interactive" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Interactive
        </h3>
        <div className="mt-4 flex w-80 flex-col gap-200">
          <div className="flex items-center justify-between">
            <span className="font-lexend text-sm text-foreground">Value: {value}%</span>
          </div>
          <Progress value={value} />
          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full accent-primary"
          />
        </div>
      </div>

    </div>
  );
};
