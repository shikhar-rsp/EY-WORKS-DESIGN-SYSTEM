"use client";

import { Star } from "@/components/fragments/icons/catalog";

import { PreviewRow } from "../fragments/typography/PreviewRow";
import { SectionLabel } from "../fragments/typography/SectionLabel";
import { InteractiveToggle } from "../fragments/interactive/InteractiveToggle";

import { Switch } from "@/components/figma/Switch";

export const ToggleDetail = () => {
  return (
    <div className="font-preview-scope color-preview-scope mt-6 space-y-10">
      {/* ── Preview ─────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-preview"
          className="scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Preview
        </h3>
        <div className="mt-4 flex flex-wrap items-center gap-8">
          <div className="flex flex-col items-center gap-3">
            <SectionLabel>Default</SectionLabel>
            <div className="flex items-center gap-4">
              <InteractiveToggle style="default" size="small" />
              <InteractiveToggle style="default" size="small" checked={true} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <SectionLabel>Brand</SectionLabel>
            <div className="flex items-center gap-4">
              <InteractiveToggle style="brand" size="small" />
              <InteractiveToggle style="brand" size="small" checked={true} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <SectionLabel>Large</SectionLabel>
            <div className="flex items-center gap-4">
              <InteractiveToggle style="default" size="large" />
              <InteractiveToggle style="default" size="large" checked={true} />
            </div>
          </div>
        </div>
      </div>

      {/* ── All Styles ──────────────────────────────────────── */}
      <div>
        <h3
          id="detail-all-styles"
          className="scroll-mt-20 text-lg font-semibold text-foreground"
        >
          All Styles
        </h3>
        <div className="mt-4 space-y-4">
          <PreviewRow label="Default">
            <InteractiveToggle style="default" size="small" />
            <InteractiveToggle style="default" size="small" checked={true} />
            <InteractiveToggle style="default" size="large" />
            <InteractiveToggle style="default" size="large" checked={true} />
          </PreviewRow>
          <PreviewRow label="Brand">
            <InteractiveToggle style="brand" size="small" />
            <InteractiveToggle style="brand" size="small" checked={true} />
            <InteractiveToggle style="brand" size="large" />
            <InteractiveToggle style="brand" size="large" checked={true} />
          </PreviewRow>
        </div>
      </div>

      {/* ── All Sizes ───────────────────────────────────────── */}
      <div>
        <h3
          id="detail-all-sizes"
          className="scroll-mt-20 text-lg font-semibold text-foreground"
        >
          All Sizes
        </h3>
        <div className="mt-4 space-y-4">
          {(["default", "brand"] as const).map((style) => (
            <PreviewRow
              key={style}
              label={style.charAt(0).toUpperCase() + style.slice(1)}
            >
              <div className="flex flex-col items-center gap-2">
                <InteractiveToggle style={style} size="small" />
                <span className="text-[11px] text-muted-foreground">Small</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <InteractiveToggle style={style} size="large" />
                <span className="text-[11px] text-muted-foreground">Large</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <InteractiveToggle style={style} size="small" checked={true} />
                <span className="text-[11px] text-muted-foreground">Small (On)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <InteractiveToggle style={style} size="large" checked={true} />
                <span className="text-[11px] text-muted-foreground">Large (On)</span>
              </div>
            </PreviewRow>
          ))}
        </div>
      </div>

      {/* ── With Label ──────────────────────────────────────── */}
      <div>
        <h3
          id="detail-with-label"
          className="scroll-mt-20 text-lg font-semibold text-foreground"
        >
          With Label
        </h3>
        <div className="mt-4 space-y-4">
          <PreviewRow label="Right label">
            <InteractiveToggle
              style="default"
              size="small"
              label="Enable notifications"
              labelPosition="right"
            />
          </PreviewRow>
          <PreviewRow label="Left label">
            <InteractiveToggle
              style="default"
              size="small"
              label="Dark mode"
              labelPosition="left"
            />
          </PreviewRow>
          <PreviewRow label="With icon">
            <InteractiveToggle
              style="brand"
              size="small"
              label="Favorites"
              labelPosition="right"
              icon={<Star className="size-4" />}
            />
          </PreviewRow>
          <PreviewRow label="Large + label">
            <InteractiveToggle
              style="default"
              size="large"
              label="Auto-save"
              labelPosition="right"
              checked={true}
            />
          </PreviewRow>
        </div>
      </div>

      {/* ── Disabled ────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-disabled"
          className="scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Disabled
        </h3>
        <div className="mt-4 space-y-4">
          <PreviewRow label="Default">
            <Switch style="default" size="small" disabled />
            <Switch style="default" size="small" disabled checked />
            <Switch style="default" size="large" disabled />
            <Switch style="default" size="large" disabled checked />
          </PreviewRow>
          <PreviewRow label="Brand">
            <Switch style="brand" size="small" disabled />
            <Switch style="brand" size="small" disabled checked />
          </PreviewRow>
          <PreviewRow label="With label">
            <Switch
              style="default"
              size="small"
              disabled
              label="Disabled off"
              labelPosition="right"
            />
            <Switch
              style="default"
              size="small"
              disabled
              checked
              label="Disabled on"
              labelPosition="right"
            />
          </PreviewRow>
        </div>
      </div>

      {/* ── States ──────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-states"
          className="scroll-mt-20 text-lg font-semibold text-foreground"
        >
          States
        </h3>
        <div className="mt-4 overflow-hidden rounded-medium border border-border">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="px-4 py-3 font-semibold text-foreground">State</th>
                <th className="px-4 py-3 font-semibold text-foreground">
                  Default
                </th>
                <th className="px-4 py-3 font-semibold text-foreground">Brand</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  Off
                </td>
                <td className="px-4 py-3">
                  <InteractiveToggle style="default" size="small" />
                </td>
                <td className="px-4 py-3">
                  <InteractiveToggle style="brand" size="small" />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  On
                </td>
                <td className="px-4 py-3">
                  <InteractiveToggle
                    style="default"
                    size="small"
                    checked={true}
                  />
                </td>
                <td className="px-4 py-3">
                  <InteractiveToggle
                    style="brand"
                    size="small"
                    checked={true}
                  />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  Disabled Off
                </td>
                <td className="px-4 py-3">
                  <Switch style="default" size="small" disabled />
                </td>
                <td className="px-4 py-3">
                  <Switch style="brand" size="small" disabled />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  Disabled On
                </td>
                <td className="px-4 py-3">
                  <Switch style="default" size="small" disabled checked />
                </td>
                <td className="px-4 py-3">
                  <Switch style="brand" size="small" disabled checked />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
