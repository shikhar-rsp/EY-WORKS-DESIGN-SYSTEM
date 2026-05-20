"use client";

import { Button } from "@/components/figma/Button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/figma/Popover";

export const PopoverDetail = () => {
  return (
    <div className="font-preview-scope color-preview-scope mt-6 space-y-10">

      {/* ── Preview ─────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 flex flex-wrap items-start gap-4 rounded-large border border-border p-6">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent side="bottom" align="start">
              <PopoverHeader>
                <PopoverTitle>Dimensions</PopoverTitle>
                <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
              </PopoverHeader>
              <p className="font-lexend text-sm text-secondary-foreground">Width: 100%</p>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* ── With Title and Description ───────────────────────────── */}
      <div>
        <h3 id="detail-with-header" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          With Header
        </h3>
        <div className="mt-4 flex flex-wrap items-start gap-4 rounded-large border border-border p-6">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary">Settings</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>Appearance</PopoverTitle>
                <PopoverDescription>Customize the look and feel of the interface.</PopoverDescription>
              </PopoverHeader>
              <div className="mb-150 space-y-100 font-lexend text-sm text-secondary-foreground">
                <p>Font size: 14px</p>
                <p>Theme: System</p>
              </div>
              <PopoverClose className="inline-flex h-8 w-full items-center justify-center rounded-medium border border-border bg-background px-200 font-lexend text-sm font-medium text-primary transition-colors hover:bg-muted">
                Close
              </PopoverClose>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* ── Side Variants ────────────────────────────────────────── */}
      <div>
        <h3 id="detail-sides" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Side Variants
        </h3>
        <div className="mt-4 flex flex-wrap items-start gap-4 rounded-large border border-border p-6">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <Popover key={side}>
              <PopoverTrigger asChild>
                <Button variant="secondary">{side.charAt(0).toUpperCase() + side.slice(1)}</Button>
              </PopoverTrigger>
              <PopoverContent side={side}>
                <p className="font-lexend text-sm text-secondary-foreground">
                  Opens to the <strong>{side}</strong>.
                </p>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>

      {/* ── Alignment Variants ───────────────────────────────────── */}
      <div>
        <h3 id="detail-align" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Alignment Variants
        </h3>
        <div className="mt-4 flex flex-wrap items-start gap-4 rounded-large border border-border p-6">
          {(["start", "center", "end"] as const).map((align) => (
            <Popover key={align}>
              <PopoverTrigger asChild>
                <Button variant="secondary">Align {align}</Button>
              </PopoverTrigger>
              <PopoverContent align={align}>
                <p className="font-lexend text-sm text-secondary-foreground">
                  Aligned to <strong>{align}</strong>.
                </p>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>

    </div>
  );
};
