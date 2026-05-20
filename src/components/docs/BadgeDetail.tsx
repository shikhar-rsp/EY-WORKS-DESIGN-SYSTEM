"use client";

import { Badge, BadgeIndicator } from "@/components/figma/Badge";
import { Button } from "@/components/figma/Button";

// Local avatar stub so this docs page doesn't depend on a removed Avatar component.
const AvatarStub = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex size-9 items-center justify-center rounded-full bg-muted text-xs font-medium text-foreground">
    {children}
  </span>
);

export const BadgeDetail = () => {
  return (
    <div className="mt-6 space-y-10">

      {/* ── Preview ──────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 rounded-large border border-border p-6 flex flex-wrap gap-8 items-center">
          <Badge>
            <BadgeIndicator count={5} />
            <AvatarStub>JD</AvatarStub>
          </Badge>
          <Badge>
            <BadgeIndicator variant="dot" />
            <Button variant="secondary">Messages</Button>
          </Badge>
          <Badge>
            <BadgeIndicator count={120} max={99} />
            <AvatarStub>AB</AvatarStub>
          </Badge>
        </div>
      </div>

      {/* ── Variants ─────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-variants" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Variants
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          <code>count</code> displays a numeric label; <code>dot</code> shows a plain dot indicator.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 flex flex-wrap gap-8 items-center">
          <div className="flex flex-col items-center gap-2">
            <Badge>
              <BadgeIndicator variant="count" count={8} />
              <AvatarStub>U1</AvatarStub>
            </Badge>
            <span className="font-lexend text-xs text-muted-foreground">count</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge>
              <BadgeIndicator variant="dot" />
              <AvatarStub>U2</AvatarStub>
            </Badge>
            <span className="font-lexend text-xs text-muted-foreground">dot</span>
          </div>
        </div>
      </div>

      {/* ── Colors ───────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-colors" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Colors
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Four semantic color options: <code>danger</code>, <code>primary</code>, <code>success</code>, <code>warning</code>.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 flex flex-wrap gap-8 items-center">
          {(["danger", "primary", "success", "warning"] as const).map((color) => (
            <div key={color} className="flex flex-col items-center gap-2">
              <Badge>
                <BadgeIndicator count={3} color={color} />
                <AvatarStub>{color[0].toUpperCase() + color[1]}</AvatarStub>
              </Badge>
              <span className="font-lexend text-xs text-muted-foreground">{color}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Placements ───────────────────────────────────────────── */}
      <div>
        <h3 id="detail-placements" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Placements
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Control where the indicator anchors on the wrapped child.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 flex flex-wrap gap-10 items-center">
          {(["top-right", "top-left", "bottom-right", "bottom-left"] as const).map((p) => (
            <div key={p} className="flex flex-col items-center gap-2">
              <Badge>
                <BadgeIndicator variant="dot" placement={p} />
                <AvatarStub>AB</AvatarStub>
              </Badge>
              <span className="font-lexend text-xs text-muted-foreground">{p}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Overflow ─────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-overflow" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Max Count &amp; showZero
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Use <code>max</code> to cap the displayed number. Use <code>showZero</code> to show when count is 0.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 flex flex-wrap gap-8 items-center">
          <div className="flex flex-col items-center gap-2">
            <Badge>
              <BadgeIndicator count={150} max={99} />
              <AvatarStub>99</AvatarStub>
            </Badge>
            <span className="font-lexend text-xs text-muted-foreground">count=150, max=99</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge>
              <BadgeIndicator count={0} showZero />
              <AvatarStub>Z0</AvatarStub>
            </Badge>
            <span className="font-lexend text-xs text-muted-foreground">count=0, showZero</span>
          </div>
        </div>
      </div>

    </div>
  );
};
