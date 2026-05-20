"use client";

import { ScrollArea, ScrollBar } from "@/components/figma/ScrollArea";

const TAGS = ["v1.0.0", "v1.1.0", "v1.2.0", "v1.3.0", "v2.0.0", "v2.1.0", "v2.2.0", "v3.0.0", "v3.1.0", "v3.2.0", "v4.0.0", "v4.1.0", "v5.0.0"];
const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";

export const ScrollAreaDetail = () => {
  return (
    <div className="mt-6 space-y-10">

      {/* ── Preview ──────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 rounded-large border border-border p-6">
          <ScrollArea className="h-48 w-48 rounded-medium border border-border">
            <div className="p-150">
              <h4 className="mb-100 text-sm font-semibold text-foreground">Tags</h4>
              {TAGS.map((tag) => (
                <div key={tag} className="border-b border-border py-075 text-sm text-secondary-foreground last:border-0">
                  {tag}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* ── Vertical ─────────────────────────────────────────── */}
      <div>
        <h3 id="detail-vertical" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Vertical
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Vertical scrollbar appears automatically when content overflows. No extra props needed.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <ScrollArea className="h-36 w-56 rounded-medium border border-border">
            <div className="p-150">
              {TAGS.map((tag) => (
                <div key={tag} className="py-075 text-sm text-secondary-foreground">
                  {tag}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* ── Horizontal ───────────────────────────────────────── */}
      <div>
        <h3 id="detail-horizontal" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Horizontal
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Add <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">{"<ScrollBar orientation=\"horizontal\" />"}</code> as a child to opt-in to horizontal scrolling.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <ScrollArea className="w-64 rounded-medium border border-border">
            <div className="flex gap-150 p-150" style={{ width: "600px" }}>
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="flex size-16 shrink-0 items-center justify-center rounded-medium bg-muted text-xs text-muted-foreground">
                  Item {i + 1}
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>

      {/* ── Both Axes ────────────────────────────────────────── */}
      <div>
        <h3 id="detail-both" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Both Axes
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Combine vertical (auto) and horizontal <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">ScrollBar</code> for two-axis scrolling.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <ScrollArea className="h-36 w-64 rounded-medium border border-border">
            <div className="p-150" style={{ width: "500px" }}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <p key={i} className="mb-100 whitespace-nowrap text-sm text-secondary-foreground">
                  Row {i}: {LOREM}
                </p>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>

    </div>
  );
};
