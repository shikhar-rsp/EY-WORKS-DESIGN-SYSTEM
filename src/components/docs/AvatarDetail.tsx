"use client";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
} from "@/components/figma/Avatar";
import type {
  AvatarSizeTypes,
  AvatarBadgeVariantTypes,
} from "@/components/figma/Avatar";

const SIZES: { label: string; value: AvatarSizeTypes; px: string }[] = [
  { label: "XS", value: "xs", px: "16px" },
  { label: "SM", value: "sm", px: "24px" },
  { label: "Default", value: "default", px: "32px" },
  { label: "LG", value: "lg", px: "40px" },
  { label: "XL", value: "xl", px: "48px" },
];

const BADGE_VARIANTS: { label: string; value: AvatarBadgeVariantTypes }[] = [
  { label: "Online", value: "online" },
  { label: "Offline", value: "offline" },
  { label: "Busy", value: "busy" },
  { label: "Away", value: "away" },
  { label: "Default", value: "default" },
];

export const AvatarDetail = () => {
  return (
    <div className="mt-6 space-y-10">
      {/* ── Preview ──────────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-preview"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Preview
        </h3>
        <div className="mt-4 flex flex-wrap items-center gap-4 rounded-large border border-border p-6">
          {/* Fallback — initials */}
          <Avatar className="size-12">
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          {/* Fallback — emoji */}
          <Avatar className="size-12">
            <AvatarFallback>MH</AvatarFallback>
          </Avatar>
          {/* Image */}
          <Avatar className="size-12">
            <AvatarImage src="/avatars/avatar-1.png" alt="shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          {/* Square shape */}
          <Avatar className="size-12" shape="square">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          {/* With badge */}
          <Avatar className="size-12">
            <AvatarImage src="/avatars/avatar-1.png" alt="shadcn" />
            <AvatarFallback>SC</AvatarFallback>
            <AvatarBadge variant="online" />
          </Avatar>
        </div>
      </div>

      {/* ── With Image ───────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-with-image"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          With Image
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Add <code>AvatarImage</code> with <code>src</code> and{" "}
          <code>alt</code>. Always pair with <code>AvatarFallback</code> for
          when the image fails to load.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4 rounded-large border border-border p-6">
          <Avatar className="size-12">
            <AvatarImage src="/avatars/avatar-1.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Avatar className="size-12">
            <AvatarImage src="/not-found.jpg" alt="broken" />
            <AvatarFallback>BK</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* ── Fallback ─────────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-fallback"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Fallback
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          <code>AvatarFallback</code> renders when there is no{" "}
          <code>AvatarImage</code> or the image fails. Use it for initials,
          icons, or any placeholder content.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4 rounded-large border border-border p-6">
          <Avatar className="size-10">
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <Avatar className="size-10">
            <AvatarFallback>MH</AvatarFallback>
          </Avatar>
          <Avatar className="size-10">
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          <Avatar className="size-10" shape="square">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* ── Sizes ────────────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-sizes"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Sizes
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Control size via <code>size</code> prop (<code>xs</code>,{" "}
          <code>sm</code>, <code>default</code>, <code>lg</code>,{" "}
          <code>xl</code>) or pass a custom Tailwind size class directly on{" "}
          <code>Avatar</code>.
        </p>
        <div className="mt-4 flex flex-wrap items-end gap-6 rounded-large border border-border p-6">
          {SIZES.map((s) => (
            <div key={s.value} className="flex flex-col items-center gap-2">
              <Avatar size={s.value}>
                <AvatarFallback>{s.label[0]}</AvatarFallback>
              </Avatar>
              <span className="text-[10px] text-muted-foreground">{s.px}</span>
              <span className="text-[10px] text-muted-foreground">
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Badge / Status ───────────────────────────────────────── */}
      <div>
        <h3
          id="detail-status"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Badge (Status)
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Add <code>AvatarBadge</code> as a child. Use the <code>variant</code>{" "}
          prop for semantic status, or pass a custom <code>className</code> for
          fully custom styling.
        </p>
        <div className="mt-4 flex flex-wrap items-end gap-6 rounded-large border border-border p-6">
          {BADGE_VARIANTS.map((b) => (
            <div key={b.value} className="flex flex-col items-center gap-2">
              <Avatar className="size-10">
                <AvatarFallback>AC</AvatarFallback>
                <AvatarBadge variant={b.value} />
              </Avatar>
              <span className="text-[10px] text-muted-foreground">
                {b.label}
              </span>
            </div>
          ))}
          {/* focused ring example */}
          <div className="flex flex-col items-center gap-2">
            <Avatar className="size-10">
              <AvatarFallback>AC</AvatarFallback>
              <AvatarBadge variant="online" focused />
            </Avatar>
            <span className="text-[10px] text-muted-foreground">focused</span>
          </div>
        </div>
      </div>

      {/* ── Group ────────────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-group"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Group
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Wrap avatars in <code>AvatarGroup</code>. Use the <code>max</code>{" "}
          prop to limit visible items — overflow shows a <code>+N</code> count.
        </p>
        <div className="mt-4 flex flex-col gap-4 rounded-large border border-border p-6">
          {SIZES.map((s) => (
            <div key={s.value} className="flex items-center gap-4">
              <span className="w-16 text-xs text-muted-foreground">{s.px}</span>
              <AvatarGroup max={5} size={s.value}>
                {["AC", "MH", "JD", "SR", "PK", "EL", "TN", "RW"].map(
                  (initials) => (
                    <Avatar key={initials} size={s.value}>
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                  ),
                )}
              </AvatarGroup>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
