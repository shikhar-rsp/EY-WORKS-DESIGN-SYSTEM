"use client";

import { AspectRatio } from "@/components/figma/AspectRatio";

export const AspectRatioDetail = () => {
  const ratios: Array<{ label: string; value: number }> = [
    { label: "1 / 1", value: 1 },
    { label: "4 / 3", value: 4 / 3 },
    { label: "16 / 9", value: 16 / 9 },
    { label: "21 / 9", value: 21 / 9 },
    { label: "3 / 4", value: 3 / 4 },
  ];

  return (
    <div className="mt-6 space-y-10">

      {/* ── Preview ──────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 w-72">
          <AspectRatio ratio={16 / 9}>
            <div className="flex h-full w-full items-center justify-center rounded-medium bg-muted text-sm font-lexend text-muted-foreground">
              16 / 9
            </div>
          </AspectRatio>
        </div>
      </div>

      {/* ── Common Ratios ────────────────────────────────────────── */}
      <div>
        <h3 id="detail-ratios" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Common Ratios
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-200 sm:grid-cols-3">
          {ratios.map((r) => (
            <div key={r.label} className="flex flex-col gap-100">
              <AspectRatio ratio={r.value}>
                <div className="flex h-full w-full items-center justify-center rounded-medium bg-muted text-xs font-lexend text-muted-foreground">
                  {r.label}
                </div>
              </AspectRatio>
              <span className="text-center text-xs text-muted-foreground">{r.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── With Image ───────────────────────────────────────────── */}
      <div>
        <h3 id="detail-with-image" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          With Image
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Wrap an <code>img</code> with <code>className=&quot;h-full w-full object-cover&quot;</code>
          to fill the constrained space.
        </p>
        <div className="mt-4 w-72">
          <AspectRatio ratio={16 / 9}>
            <div
              className="h-full w-full rounded-medium bg-gradient-to-br from-primary-subtle to-primary-muted"
              aria-label="Placeholder image"
            />
          </AspectRatio>
        </div>
      </div>

    </div>
  );
};
