"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/figma/Tooltip";

const SIDES = [
  { side: "top", align: "start" },
  { side: "top", align: "center" },
  { side: "top", align: "end" },
  { side: "bottom", align: "start" },
  { side: "bottom", align: "center" },
  { side: "bottom", align: "end" },
  { side: "left", align: "start" },
  { side: "left", align: "center" },
  { side: "left", align: "end" },
  { side: "right", align: "start" },
  { side: "right", align: "center" },
  { side: "right", align: "end" },
] as const;

export const TooltipDetail = () => {
  return (
    <div className="mt-6 space-y-10">
      {/* ── Preview ─────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 rounded-large border border-border p-6">
          <div className="flex flex-wrap gap-8 items-center justify-center">
            <Tooltip>
              <TooltipTrigger className="rounded-small bg-secondary px-200 py-100 text-sm font-lexend text-foreground">
                Hover me
              </TooltipTrigger>
              <TooltipContent side="top" align="center">
                This is a tooltip
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger className="rounded-small bg-secondary px-200 py-100 text-sm font-lexend text-foreground">
                Bottom right
              </TooltipTrigger>
              <TooltipContent side="bottom" align="end">
                Positioned bottom / end
              </TooltipContent>
            </Tooltip>
            <TooltipProvider delayDuration={400}>
              <Tooltip>
                <TooltipTrigger className="rounded-small bg-secondary px-200 py-100 text-sm font-lexend text-foreground">
                  With delay
                </TooltipTrigger>
                <TooltipContent side="right">
                  Opens after 400ms
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      {/* ── Side + Align positions ───────────────────────────────── */}
      <div>
        <h3 id="detail-positions" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Side & Align Combinations
        </h3>
        <p className="mt-2 text-sm text-muted-foreground font-lexend">
          The <code>side</code> prop (top / right / bottom / left) and <code>align</code> prop
          (start / center / end) produce 12 combinations. Hover each trigger to see its tooltip.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <div className="grid grid-cols-3 gap-6 justify-items-center">
            {SIDES.map((item) => (
              <Tooltip key={`${item.side}-${item.align}`}>
                <TooltipTrigger className="rounded-small bg-secondary px-150 py-075 text-xs font-lexend text-foreground whitespace-nowrap">
                  {item.side} / {item.align}
                </TooltipTrigger>
                <TooltipContent side={item.side} align={item.align}>
                  Tooltip text
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>

      {/* ── Delay ───────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-delay" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Delay Duration
        </h3>
        <p className="mt-2 text-sm text-muted-foreground font-lexend">
          Set <code>delayDuration</code> on <code>TooltipProvider</code> (global) or on the
          individual <code>Tooltip</code> (local override) to control the hover-to-open delay in ms.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <div className="flex flex-wrap gap-6 justify-center">
            {[0, 200, 500, 1000].map((delay) => (
              <Tooltip key={delay} delayDuration={delay}>
                <TooltipTrigger className="rounded-small bg-secondary px-200 py-100 text-sm font-lexend text-foreground">
                  {delay}ms delay
                </TooltipTrigger>
                <TooltipContent>Opens after {delay}ms</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>

      {/* ── Controlled ──────────────────────────────────────────── */}
      <div>
        <h3 id="detail-controlled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Controlled State
        </h3>
        <p className="mt-2 text-sm text-muted-foreground font-lexend">
          Pass <code>open</code> and <code>onOpenChange</code> to take full control of the tooltip.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <Tooltip defaultOpen>
            <TooltipTrigger className="rounded-small bg-secondary px-200 py-100 text-sm font-lexend text-foreground">
              defaultOpen trigger
            </TooltipTrigger>
            <TooltipContent side="right">
              Opened by default
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
