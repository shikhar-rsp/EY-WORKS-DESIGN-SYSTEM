"use client";

import { Tag } from "@/components/figma/Tag";
import type { TagVariantTypes, TagColorTypes } from "@/components/figma/Tag";

const VARIANTS: { label: string; value: TagVariantTypes }[] = [
  { label: "Solid", value: "solid" },
  { label: "Outline", value: "outline" },
  { label: "Subtle", value: "subtle" },
];

const COLORS: { label: string; value: TagColorTypes }[] = [
  { label: "Default", value: "default" },
  { label: "Brand", value: "brand" },
  { label: "White", value: "white" },
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "Yellow", value: "yellow" },
  { label: "Purple", value: "purple" },
  { label: "Lime Green", value: "limeGreen" },
];

export const TagDetail = () => {
  return (
    <div className="font-preview-scope color-preview-scope">
      {/* ── Preview ─────────────────────────────────────────────── */}
      <h3
        id="detail-preview"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Preview
      </h3>
      <div className="mt-3 flex flex-wrap items-center gap-3 rounded-lg border border-border p-6">
        <Tag variant="solid" color="brand" label="Brand" />
        <Tag variant="solid" color="red" label="Error" />
        <Tag variant="solid" color="blue" label="Info" />
        <Tag variant="outline" color="brand" label="Outline" />
        <Tag variant="outline" color="default" label="Default" />
        <Tag variant="subtle" color="yellow" label="Warning" />
        <Tag variant="subtle" color="limeGreen" label="Success" />
        <Tag variant="solid" color="brand" label="With Icon" leftIcon />
        <Tag variant="solid" color="red" label="Remove" rightIcon />
      </div>

      {/* ── All Variants ─────────────────────────────────────────── */}
      <h3
        id="detail-all-variants"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        All Variants
      </h3>
      <p className="mt-1 leading-7 text-secondary-foreground">
        Three visual treatments across all eight color themes.
      </p>
      <div className="mt-3 space-y-4">
        {VARIANTS.map((v) => (
          <div key={v.value}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {v.label}
            </p>
            <div className="flex flex-wrap items-center gap-2 rounded-lg border border-border p-4">
              {COLORS.map((c) => (
                <Tag
                  key={c.value}
                  variant={v.value}
                  color={c.value}
                  label={c.label}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Icon Combinations ─────────────────────────────────────── */}
      <h3
        id="detail-icon-combinations"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Icon Combinations
      </h3>
      <p className="mt-1 leading-7 text-secondary-foreground">
        Left icon, right dismiss icon, and both combined across variants.
      </p>
      <div className="mt-3 space-y-4 rounded-lg border border-border p-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Left Icon
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {VARIANTS.map((v) => (
              <Tag
                key={v.value}
                variant={v.value}
                color="brand"
                label="Label"
                leftIcon
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Right Icon (Dismiss)
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {VARIANTS.map((v) => (
              <Tag
                key={v.value}
                variant={v.value}
                color="brand"
                label="Label"
                rightIcon
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Both Icons
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {VARIANTS.map((v) => (
              <Tag
                key={v.value}
                variant={v.value}
                color="brand"
                label="Label"
                leftIcon
                rightIcon
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Colors by Variant ─────────────────────────────────────── */}
      <h3
        id="detail-colors-by-variant"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Colors by Variant
      </h3>
      <p className="mt-1 leading-7 text-secondary-foreground">
        All eight colors shown for each variant.
      </p>
      <div className="mt-3 space-y-3 rounded-lg border border-border p-6">
        {COLORS.map((c) => (
          <div key={c.value} className="flex items-center gap-4">
            <span className="w-24 text-xs text-muted-foreground">{c.label}</span>
            <div className="flex items-center gap-2">
              {VARIANTS.map((v) => (
                <Tag
                  key={v.value}
                  variant={v.value}
                  color={c.value}
                  label={v.label}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
