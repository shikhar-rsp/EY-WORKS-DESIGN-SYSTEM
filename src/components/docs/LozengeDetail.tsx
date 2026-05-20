"use client";

import { Lozenge } from "@/components/figma/Lozenge";
import type {
  LozengeVariantTypes,
  LozengeColorTypes,
  LozengeSizeTypes,
} from "@/components/figma/Lozenge";

const VARIANTS: { label: string; value: LozengeVariantTypes }[] = [
  { label: "Solid", value: "solid" },
  { label: "Light", value: "light" },
  { label: "Outline", value: "outline" },
  { label: "Outline Filled", value: "outlineFilled" },
];

const COLORS: { label: string; value: LozengeColorTypes }[] = [
  { label: "Default", value: "default" },
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "Yellow", value: "yellow" },
  { label: "Lime", value: "lime" },
  { label: "Brand", value: "brand" },
  { label: "Discovery Blue", value: "discoveryBlue" },
  { label: "Teal", value: "teal" },
  { label: "Magenta", value: "magenta" },
  { label: "Green", value: "green" },
  { label: "Grey", value: "grey" },
];

const SIZES: { label: string; value: LozengeSizeTypes; px: string }[] = [
  { label: "SM", value: "sm", px: "16px" },
  { label: "MD", value: "md", px: "20px" },
  { label: "LG", value: "lg", px: "24px" },
];

export const LozengeDetail = () => {
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
        <Lozenge variant="solid" color="brand" label="Brand" />
        <Lozenge variant="solid" color="red" label="Error" />
        <Lozenge variant="solid" color="green" label="Success" />
        <Lozenge variant="light" color="blue" label="Info" />
        <Lozenge variant="light" color="yellow" label="Warning" />
        <Lozenge variant="outline" color="default" label="Default" />
        <Lozenge variant="outlineFilled" color="magenta" label="Magenta" />
        <Lozenge variant="solid" color="brand" label="In Progress" leftIcon />
        <Lozenge variant="solid" color="red" label="Blocked" indicator />
      </div>

      {/* ── All Variants ─────────────────────────────────────────── */}
      <h3
        id="detail-all-variants"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        All Variants
      </h3>
      <p className="mt-1 leading-7 text-secondary-foreground">
        Four visual treatments across all eleven color themes.
      </p>
      <div className="mt-3 space-y-4">
        {VARIANTS.map((v) => (
          <div key={v.value}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {v.label}
            </p>
            <div className="flex flex-wrap items-center gap-2 rounded-lg border border-border p-4">
              {COLORS.map((c) => (
                <Lozenge
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

      {/* ── All Sizes ─────────────────────────────────────────────── */}
      <h3
        id="detail-all-sizes"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        All Sizes
      </h3>
      <p className="mt-1 leading-7 text-secondary-foreground">
        Three sizes from sm (16px) to lg (24px), across all variants.
      </p>
      <div className="mt-3 space-y-4">
        {VARIANTS.map((v) => (
          <div key={v.value}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {v.label}
            </p>
            <div className="flex flex-wrap items-end gap-6 rounded-lg border border-border p-4">
              {SIZES.map((s) => (
                <div key={s.value} className="flex flex-col items-center gap-2">
                  <Lozenge
                    variant={v.value}
                    color="brand"
                    size={s.value}
                    label="Label"
                  />
                  <span className="text-[10px] text-muted-foreground">
                    {s.px}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Icon & Indicator ─────────────────────────────────────── */}
      <h3
        id="detail-icon-indicator"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Icon & Indicator
      </h3>
      <p className="mt-1 leading-7 text-secondary-foreground">
        Optional leading icon and indicator dot, composable with any color and
        variant.
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-6 rounded-lg border border-border p-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Left Icon
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {VARIANTS.map((v) => (
              <Lozenge
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
            Indicator Dot
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {VARIANTS.map((v) => (
              <Lozenge
                key={v.value}
                variant={v.value}
                color="red"
                label="Label"
                indicator
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Icon Only
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {VARIANTS.map((v) => (
              <Lozenge
                key={v.value}
                variant={v.value}
                color="brand"
                leftIcon
                showText={false}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Indicator Only
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {VARIANTS.map((v) => (
              <Lozenge
                key={v.value}
                variant={v.value}
                color="green"
                indicator
                showText={false}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Sizes × Sizes ──────────────────────────────────────── */}
      <h3
        id="detail-sizes-by-color"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Sizes by Color
      </h3>
      <p className="mt-1 leading-7 text-secondary-foreground">
        All three sizes shown for every color in solid variant.
      </p>
      <div className="mt-3 space-y-3 rounded-lg border border-border p-6">
        {COLORS.map((c) => (
          <div key={c.value} className="flex items-center gap-4">
            <span className="w-24 text-xs text-muted-foreground">{c.label}</span>
            <div className="flex items-center gap-3">
              {SIZES.map((s) => (
                <Lozenge
                  key={s.value}
                  variant="solid"
                  color={c.value}
                  size={s.value}
                  label={s.label}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
