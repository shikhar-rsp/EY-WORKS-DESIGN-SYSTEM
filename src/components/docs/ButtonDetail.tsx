"use client";

import { Copy01, ArrowLeft01Round, ArrowRight01Round } from "@/components/fragments/icons/catalog";

import { Button } from "@/components/figma/Button";
import { cn } from "@/lib/utils";

import type { ButtonVariantTypes, ButtonSizeTypes } from "@/components/figma/Button";

type VariantTypes = ButtonVariantTypes;
type SizeTypes = ButtonSizeTypes;

// shadcn canonical variants
const SHADCN_VARIANTS: { name: string; value: VariantTypes; darkBg?: boolean }[] = [
  { name: "Default", value: "default" },
  { name: "Destructive", value: "destructive" },
  { name: "Outline", value: "outline" },
  { name: "Secondary", value: "secondary" },
  { name: "Ghost", value: "ghost" },
  { name: "Link", value: "link" },
];

// Project-specific extras
const EXTRA_VARIANTS: { name: string; value: VariantTypes; darkBg?: boolean }[] = [
  { name: "Tertiary Grey", value: "tertiary-grey" },
  { name: "Tertiary White", value: "tertiary-white", darkBg: true },
  { name: "Grey", value: "grey" },
  { name: "White", value: "white" },
  { name: "Dashed", value: "dashed" },
  { name: "Skeleton", value: "skeleton" },
];

const ALL_VARIANTS = [...SHADCN_VARIANTS, ...EXTRA_VARIANTS];

const SHADCN_SIZES: { name: string; value: SizeTypes; label: string }[] = [
  { name: "Default", value: "default", label: "36px" },
  { name: "SM", value: "sm", label: "32px" },
  { name: "LG", value: "lg", label: "40px" },
  { name: "Icon", value: "icon", label: "36px sq" },
];

const EXTRA_SIZES: { name: string; value: SizeTypes; label: string }[] = [
  { name: "Compact", value: "compact", label: "32px" },
  { name: "Narrow", value: "narrow", label: "32px narrow" },
];

export const ButtonDetail = () => {
  return (
    <div className="font-preview-scope color-preview-scope">

      {/* ── Preview ──────────────────────────────────────────────── */}
      <h3
        id="detail-preview"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Preview
      </h3>
      <div className="mt-3 flex flex-wrap items-center gap-4 rounded-lg border border-border p-6">
        <Button variant="default">Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
        <Button variant="dashed">Dashed</Button>
        <Button variant="skeleton">Loading…</Button>
      </div>

      {/* ── shadcn Variants ──────────────────────────────────────── */}
      <h3
        id="detail-all-variants"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        All Variants
      </h3>
      <p className="mt-1 leading-7 text-secondary-foreground">
        Hover or click each button to see interactive states.
      </p>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        shadcn canonical
      </p>
      <div className="mt-2 space-y-3">
        {SHADCN_VARIANTS.map((v) => (
          <div
            key={v.value}
            className={cn(
              "rounded-lg border border-border p-4",
              v.darkBg && "bg-content",
            )}
          >
            <span
              className={cn(
                "mb-3 block text-xs font-semibold uppercase tracking-wide",
                v.darkBg ? "text-primary-foreground" : "text-muted-foreground",
              )}
            >
              {v.name}
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-col items-center gap-1">
                <Button variant={v.value}>Default</Button>
                <span className={cn("text-[10px]", v.darkBg ? "text-primary-foreground/60" : "text-muted-foreground")}>default</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Button variant={v.value} isDisabled>Disabled</Button>
                <span className={cn("text-[10px]", v.darkBg ? "text-primary-foreground/60" : "text-muted-foreground")}>disabled</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Button variant={v.value} leadingIcon={<ArrowLeft01Round className="size-4" />}>Leading</Button>
                <span className={cn("text-[10px]", v.darkBg ? "text-primary-foreground/60" : "text-muted-foreground")}>leading icon</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Button variant={v.value} trailingIcon={<ArrowRight01Round className="size-4" />}>Trailing</Button>
                <span className={cn("text-[10px]", v.darkBg ? "text-primary-foreground/60" : "text-muted-foreground")}>trailing icon</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Button variant={v.value} size="icon" leadingIcon={<Copy01 className="size-4" />} iconOnly />
                <span className={cn("text-[10px]", v.darkBg ? "text-primary-foreground/60" : "text-muted-foreground")}>icon</span>
              </div>
              {v.value !== "skeleton" && v.value !== "link" && (
                <div className="flex flex-col items-center gap-1">
                  <Button variant={v.value} notificationDot trailingIcon={<ArrowRight01Round className="size-4" />}>Notification</Button>
                  <span className={cn("text-[10px]", v.darkBg ? "text-primary-foreground/60" : "text-muted-foreground")}>with dot</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Project extras
      </p>
      <div className="mt-2 space-y-3">
        {EXTRA_VARIANTS.map((v) => (
          <div
            key={v.value}
            className={cn(
              "rounded-lg border border-border p-4",
              v.darkBg && "bg-content",
            )}
          >
            <span
              className={cn(
                "mb-3 block text-xs font-semibold uppercase tracking-wide",
                v.darkBg ? "text-primary-foreground" : "text-muted-foreground",
              )}
            >
              {v.name}
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-col items-center gap-1">
                <Button variant={v.value}>Default</Button>
                <span className={cn("text-[10px]", v.darkBg ? "text-primary-foreground/60" : "text-muted-foreground")}>default</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Button variant={v.value} isDisabled>Disabled</Button>
                <span className={cn("text-[10px]", v.darkBg ? "text-primary-foreground/60" : "text-muted-foreground")}>disabled</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Sizes ────────────────────────────────────────────────── */}
      <h3
        id="detail-all-sizes"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        All Sizes
      </h3>
      <p className="mt-1 leading-7 text-secondary-foreground">
        shadcn canonical sizes plus project-specific extras.
      </p>
      <div className="mt-3 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">shadcn canonical</p>
        <div className="flex flex-wrap items-end gap-6 rounded-lg border border-border p-6">
          {SHADCN_SIZES.map((s) => (
            <div key={s.value} className="space-y-2 text-center">
              {s.value === "icon" ? (
                <Button size={s.value} iconOnly leadingIcon={<Copy01 className="size-4" />} />
              ) : (
                <Button size={s.value}>{s.name}</Button>
              )}
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">project extras</p>
        <div className="flex flex-wrap items-end gap-6 rounded-lg border border-border p-6">
          {EXTRA_SIZES.map((s) => (
            <div key={s.value} className="space-y-2 text-center">
              <Button size={s.value}>{s.name}</Button>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Icon Only ────────────────────────────────────────────── */}
      <h3
        id="detail-all-icon-only"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Icon Only Variants
      </h3>
      <div className="mt-3 flex flex-wrap items-end gap-6 rounded-lg border border-border p-6">
        {(["default", "destructive", "outline", "secondary", "ghost", "grey", "tertiary-grey", "dashed"] as VariantTypes[]).map((v) => (
          <div key={v} className="flex flex-col items-center gap-1">
            <Button variant={v} size="icon" leadingIcon={<Copy01 className="size-4" />} iconOnly />
            <p className="text-xs text-muted-foreground">{v}</p>
          </div>
        ))}
      </div>

      {/* ── Icon Combinations ────────────────────────────────────── */}
      <h3
        id="detail-icon-combinations"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Icon Combinations
      </h3>
      <div className="mt-3 flex flex-wrap items-center gap-4 rounded-lg border border-border p-6">
        <Button leadingIcon={<ArrowLeft01Round className="size-4" />}>Leading</Button>
        <Button trailingIcon={<ArrowRight01Round className="size-4" />}>Trailing</Button>
        <Button leadingIcon={<ArrowLeft01Round className="size-4" />} trailingIcon={<ArrowRight01Round className="size-4" />}>Both</Button>
        <Button variant="outline" leadingIcon={<ArrowLeft01Round className="size-4" />}>Outline</Button>
        <Button variant="destructive" trailingIcon={<ArrowRight01Round className="size-4" />}>Destructive</Button>
      </div>

      {/* ── Notification Dot ─────────────────────────────────────── */}
      <h3
        id="detail-notification"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Notification Dot
      </h3>
      <p className="mt-1 leading-7 text-secondary-foreground">
        A badge positioned at the top-right of the button. Supports two colors and an optional count.
      </p>
      <div className="mt-3 space-y-6 rounded-lg border border-border p-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Danger (default)</p>
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex flex-col items-center gap-1">
              <Button notificationDot>Label</Button>
              <span className="text-[10px] text-muted-foreground">no count</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Button notificationDot notificationCount="9+">Label</Button>
              <span className="text-[10px] text-muted-foreground">with count</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Button notificationDot trailingIcon={<ArrowRight01Round className="size-4" />}>With Icon</Button>
              <span className="text-[10px] text-muted-foreground">trailing icon</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Button variant="outline" notificationDot notificationCount="9+">Outline</Button>
              <span className="text-[10px] text-muted-foreground">outline</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Button variant="secondary" notificationDot notificationCount="9+">Secondary</Button>
              <span className="text-[10px] text-muted-foreground">secondary</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Information (blue)</p>
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex flex-col items-center gap-1">
              <Button notificationDot notificationColor="information">Label</Button>
              <span className="text-[10px] text-muted-foreground">no count</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Button notificationDot notificationColor="information" notificationCount="9+">Label</Button>
              <span className="text-[10px] text-muted-foreground">with count</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── States ───────────────────────────────────────────────── */}
      <h3
        id="detail-states"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        States
      </h3>
      <div className="mt-3 space-y-4 rounded-lg border border-border p-6">
        <div className="flex flex-wrap items-center gap-4">
          <span className="w-28 shrink-0 text-sm text-secondary-foreground">Default</span>
          <Button>Label</Button>
          <Button variant="outline">Label</Button>
          <Button variant="destructive">Label</Button>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <span className="w-28 shrink-0 text-sm text-secondary-foreground">Disabled</span>
          <Button isDisabled>Label</Button>
          <Button variant="outline" isDisabled>Label</Button>
          <Button variant="destructive" isDisabled>Label</Button>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <span className="w-28 shrink-0 text-sm text-secondary-foreground">Loading</span>
          <Button variant="skeleton">Loading…</Button>
          <Button variant="skeleton" size="sm">Loading…</Button>
        </div>
      </div>

    </div>
  );
};
