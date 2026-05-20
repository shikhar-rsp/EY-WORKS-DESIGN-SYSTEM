"use client";

import { useState } from "react";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/figma/HoverCard";
import { Button } from "@/components/figma/Button";

export const HoverCardDetail = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-10">
      {/* Preview */}
      <section>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 flex flex-wrap items-start gap-6">
          <HoverCard>
            <HoverCardTrigger>
              <span className="cursor-pointer text-sm font-medium text-primary underline underline-offset-4">
                @nextjs
              </span>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex flex-col gap-100">
                <div className="flex items-center gap-150">
                  <div className="size-10 rounded-full bg-muted" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Next.js</p>
                    <p className="text-xs text-muted-foreground">@nextjs</p>
                  </div>
                </div>
                <p className="text-sm text-secondary-foreground">
                  The React framework for the web.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </section>

      {/* Controlled */}
      <section>
        <h3 id="detail-controlled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Controlled
        </h3>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Button
            variant="secondary"
            size="compact"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close card" : "Open card"}
          </Button>
          <HoverCard open={open} onOpenChange={setOpen}>
            <HoverCardTrigger>
              <span className="text-sm font-medium text-primary underline underline-offset-4">
                @controlled
              </span>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm text-secondary-foreground">
                This card is controlled by the button above.
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </section>

      {/* Side Placement */}
      <section>
        <h3 id="detail-sides" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Side Placement
        </h3>
        <div className="mt-4 flex flex-wrap items-start gap-6 pt-4">
          {(["bottom", "top", "right"] as const).map((side) => (
            <HoverCard key={side} openDelay={300}>
              <HoverCardTrigger>
                <span className="cursor-pointer rounded-medium border border-border px-150 py-075 text-sm text-foreground hover:bg-muted">
                  Hover ({side})
                </span>
              </HoverCardTrigger>
              <HoverCardContent side={side}>
                <p className="text-sm text-secondary-foreground">
                  Opens on the <strong>{side}</strong> side.
                </p>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </section>

      {/* Custom Delays */}
      <section>
        <h3 id="detail-delays" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Custom Delays
        </h3>
        <div className="mt-4 flex flex-wrap items-start gap-6">
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger>
              <span className="cursor-pointer text-sm font-medium text-primary underline underline-offset-4">
                No delay
              </span>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm text-secondary-foreground">Opens immediately.</p>
            </HoverCardContent>
          </HoverCard>

          <HoverCard openDelay={1000} closeDelay={500}>
            <HoverCardTrigger>
              <span className="cursor-pointer text-sm font-medium text-primary underline underline-offset-4">
                Slow (1s open)
              </span>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm text-secondary-foreground">
                Opens after 1 second. Closes after 500ms.
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </section>
    </div>
  );
};
