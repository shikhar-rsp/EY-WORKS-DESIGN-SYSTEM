"use client";

import { useState } from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/figma/ToggleGroup";
import { TextAlignLeft, TextAlignCenter, TextAlignRight } from "@/components/fragments/icons/catalog";

export const ToggleGroupDetail = () => {
  const [align, setAlign] = useState("center");
  const [formatting, setFormatting] = useState<string[]>(["bold"]);

  return (
    <div className="mt-6 space-y-10">
      {/* ── Preview ─────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview — Single Selection
        </h3>
        <div className="mt-4">
          <ToggleGroup type="single" value={align} onValueChange={setAlign}>
            <ToggleGroupItem value="left" aria-label="Left">
              <TextAlignLeft className="size-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Center">
              <TextAlignCenter className="size-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Right">
              <TextAlignRight className="size-3.5" />
            </ToggleGroupItem>
          </ToggleGroup>
          <p className="mt-2 text-xs text-muted-foreground font-lexend">Selected: {align}</p>
        </div>
      </div>

      {/* ── Multiple Selection ──────────────────────────────────── */}
      <div>
        <h3 id="detail-multiple" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Multiple Selection
        </h3>
        <div className="mt-4">
          <ToggleGroup type="multiple" value={formatting} onValueChange={setFormatting}>
            <ToggleGroupItem value="bold" aria-label="Bold">
              <span className="font-bold text-sm">B</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <span className="italic text-sm">I</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <span className="underline text-sm">U</span>
            </ToggleGroupItem>
          </ToggleGroup>
          <p className="mt-2 text-xs text-muted-foreground font-lexend">
            Active: {formatting.length ? formatting.join(", ") : "none"}
          </p>
        </div>
      </div>

      {/* ── Uncontrolled (defaultValue) ─────────────────────────── */}
      <div>
        <h3 id="detail-uncontrolled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Uncontrolled
        </h3>
        <p className="mt-2 text-sm text-muted-foreground font-lexend">
          Use <code className="rounded bg-muted px-1 py-0.5 text-xs">defaultValue</code> for uncontrolled mode.
          The group manages its own state internally.
        </p>
        <div className="mt-4 flex flex-col gap-4">
          <ToggleGroup type="single" defaultValue="monthly">
            <ToggleGroupItem value="daily">Daily</ToggleGroupItem>
            <ToggleGroupItem value="weekly">Weekly</ToggleGroupItem>
            <ToggleGroupItem value="monthly">Monthly</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
            <ToggleGroupItem value="bold"><span className="font-bold text-sm">B</span></ToggleGroupItem>
            <ToggleGroupItem value="italic"><span className="italic text-sm">I</span></ToggleGroupItem>
            <ToggleGroupItem value="underline"><span className="underline text-sm">U</span></ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* ── All Sizes ───────────────────────────────────────────── */}
      <div>
        <h3 id="detail-all-sizes" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          All Sizes
        </h3>
        <div className="mt-4 flex flex-col gap-4">
          {(["sm", "md", "lg"] as const).map((size) => (
            <div key={size} className="flex items-center gap-4">
              <span className="w-8 text-xs text-muted-foreground font-lexend">{size}</span>
              <ToggleGroup type="single" defaultValue="a" size={size}>
                <ToggleGroupItem value="a">A</ToggleGroupItem>
                <ToggleGroupItem value="b">B</ToggleGroupItem>
                <ToggleGroupItem value="c">C</ToggleGroupItem>
              </ToggleGroup>
            </div>
          ))}
        </div>
      </div>

      {/* ── Outline Variant ─────────────────────────────────────── */}
      <div>
        <h3 id="detail-outline" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Outline Variant
        </h3>
        <div className="mt-4">
          <ToggleGroup type="single" defaultValue="monthly" variant="outline">
            <ToggleGroupItem value="daily">Daily</ToggleGroupItem>
            <ToggleGroupItem value="weekly">Weekly</ToggleGroupItem>
            <ToggleGroupItem value="monthly">Monthly</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* ── Disabled ────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-disabled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Disabled
        </h3>
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground font-lexend">Root disabled</span>
            <ToggleGroup type="single" defaultValue="a" disabled>
              <ToggleGroupItem value="a">A</ToggleGroupItem>
              <ToggleGroupItem value="b">B</ToggleGroupItem>
              <ToggleGroupItem value="c">C</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground font-lexend">Item disabled</span>
            <ToggleGroup type="single" defaultValue="a">
              <ToggleGroupItem value="a">A</ToggleGroupItem>
              <ToggleGroupItem value="b" disabled>B</ToggleGroupItem>
              <ToggleGroupItem value="c">C</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </div>
    </div>
  );
};
