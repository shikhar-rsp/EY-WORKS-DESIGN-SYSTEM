"use client";

import { Divider, VerticalDivider } from "@/components/figma/Divider";

export const DividerDetail = () => {
  return (
    <div className="mt-6 space-y-10">
      {/* ── Preview ──────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 rounded-large border border-border p-6 space-y-6">
          <div className="w-full">
            <p className="text-sm text-foreground font-lexend">Section A</p>
            <Divider spacing="16" />
            <p className="text-sm text-foreground font-lexend">Section B</p>
            <Divider spacing="16" />
            <p className="text-sm text-foreground font-lexend">Section C</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-foreground font-lexend">Item 1</span>
            <VerticalDivider size="medium" />
            <span className="text-sm text-foreground font-lexend">Item 2</span>
            <VerticalDivider size="medium" />
            <span className="text-sm text-foreground font-lexend">Item 3</span>
          </div>
        </div>
      </div>

      {/* ── Spacing ──────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-spacing" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Spacing Variants
        </h3>
        <div className="mt-4 rounded-large border border-border p-6">
          {(["default", "8", "16", "20", "40", "80"] as const).map((spacing) => (
            <div key={spacing} className="flex items-center gap-4">
              <span className="w-24 shrink-0 text-xs text-muted-foreground font-lexend">
                {spacing === "default" ? "default (0px)" : `${spacing}px`}
              </span>
              <div className="flex-1">
                <Divider spacing={spacing} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Sizes ────────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-sizes" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Vertical Sizes
        </h3>
        <div className="mt-4 rounded-large border border-border p-6">
          <div className="flex items-end gap-16">
            {(["large", "medium", "small"] as const).map((size) => (
              <div key={size} className="flex flex-col items-center gap-3">
                <VerticalDivider size={size} />
                <div className="text-center">
                  <p className="text-xs font-medium text-foreground font-lexend capitalize">{size}</p>
                  <p className="text-xs text-muted-foreground font-lexend">
                    {size === "large" ? "6×68px" : size === "medium" ? "2×20px" : "2×16px"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Hover ────────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-hover" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Hover State
        </h3>
        <p className="mt-2 text-sm text-muted-foreground font-lexend">
          Hover over the vertical dividers to see the state change.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <div className="flex items-center gap-8">
            {(["large", "medium", "small"] as const).map((size) => (
              <div key={size} className="flex flex-col items-center gap-3">
                <VerticalDivider size={size} />
                <span className="text-xs text-muted-foreground font-lexend capitalize">{size}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
