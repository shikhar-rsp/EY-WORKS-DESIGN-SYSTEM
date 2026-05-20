"use client";

import { useState } from "react";

import { Row } from "../fragments/typography/Row";
import { SectionLabel } from "../fragments/typography/SectionLabel";
import { InteractiveCheckbox } from "../fragments/interactive/InteractiveCheckbox";

import { Checkbox } from "@/components/figma/Checkbox";

export const CheckboxDetail = () => {
  const [controlled, setControlled] = useState(false);

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
          <div className="flex flex-col items-start gap-3">
            <SectionLabel>Default</SectionLabel>
            <div className="flex items-center gap-4">
              <InteractiveCheckbox checkboxStyle="default" label="Unchecked" />
              <InteractiveCheckbox
                checkboxStyle="default"
                label="Checked"
                checked={true}
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <SectionLabel>Outline</SectionLabel>
            <div className="flex items-center gap-4">
              <InteractiveCheckbox checkboxStyle="outline" label="Unchecked" />
              <InteractiveCheckbox
                checkboxStyle="outline"
                label="Checked"
                checked={true}
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <SectionLabel>Brand</SectionLabel>
            <div className="flex items-center gap-4">
              <InteractiveCheckbox checkboxStyle="brand" label="Unchecked" />
              <InteractiveCheckbox
                checkboxStyle="brand"
                label="Checked"
                checked={true}
              />
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
          {(["default", "outline", "brand"] as const).map((style) => (
            <Row
              key={style}
              label={style.charAt(0).toUpperCase() + style.slice(1)}
            >
              <InteractiveCheckbox checkboxStyle={style} label="Label" />
              <InteractiveCheckbox
                checkboxStyle={style}
                label="Checked"
                checked={true}
              />
              <InteractiveCheckbox
                checkboxStyle={style}
                label="Indeterminate"
                indeterminate
              />
            </Row>
          ))}
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
          <Row label="Unchecked">
            {(["small", "medium", "large"] as const).map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <InteractiveCheckbox size={size} />
                <span className="text-[11px] text-muted-foreground capitalize">
                  {size}
                </span>
              </div>
            ))}
          </Row>
          <Row label="Checked">
            {(["small", "medium", "large"] as const).map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <InteractiveCheckbox size={size} checked={true} />
                <span className="text-[11px] text-muted-foreground capitalize">
                  {size}
                </span>
              </div>
            ))}
          </Row>
          <Row label="Indeterminate">
            {(["small", "medium", "large"] as const).map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <Checkbox size={size} indeterminate />
                <span className="text-[11px] text-muted-foreground capitalize">
                  {size}
                </span>
              </div>
            ))}
          </Row>
        </div>
      </div>

      {/* ── Indeterminate ────────────────────────────────────── */}
      <div>
        <h3
          id="detail-indeterminate"
          className="scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Indeterminate
        </h3>
        <div className="mt-4 space-y-4">
          {(["default", "outline", "brand"] as const).map((style) => (
            <Row
              key={style}
              label={style.charAt(0).toUpperCase() + style.slice(1)}
            >
              <Checkbox checkboxStyle={style} label="Label" indeterminate />
              <Checkbox checkboxStyle={style} label="Disabled" indeterminate disabled />
              <Checkbox checkboxStyle={style} label="Invalid" indeterminate invalid />
            </Row>
          ))}
        </div>
      </div>

      {/* ── Invalid ──────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-invalid"
          className="scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Invalid
        </h3>
        <div className="mt-4 space-y-4">
          <Row label="Unchecked">
            <InteractiveCheckbox checkboxStyle="default" label="Default" invalid />
            <InteractiveCheckbox checkboxStyle="outline" label="Outline" invalid />
            <InteractiveCheckbox checkboxStyle="brand" label="Brand" invalid />
          </Row>
          <Row label="Checked">
            <InteractiveCheckbox
              checkboxStyle="default"
              label="Default"
              invalid
              checked={true}
            />
            <InteractiveCheckbox
              checkboxStyle="outline"
              label="Outline"
              invalid
              checked={true}
            />
            <InteractiveCheckbox
              checkboxStyle="brand"
              label="Brand"
              invalid
              checked={true}
            />
          </Row>
        </div>
      </div>

      {/* ── With Label ───────────────────────────────────────── */}
      <div>
        <h3
          id="detail-with-label"
          className="scroll-mt-20 text-lg font-semibold text-foreground"
        >
          With Label
        </h3>
        <div className="mt-4 space-y-4">
          <Row label="Label">
            <InteractiveCheckbox label="Enable feature" />
          </Row>
          <Row label="Required">
            <InteractiveCheckbox label="I agree to the terms" required />
          </Row>
          <Row label="Helper">
            <InteractiveCheckbox
              label="Subscribe"
              helperMessage="Get weekly updates"
            />
          </Row>
          <Row label="Right side">
            <InteractiveCheckbox
              label="Right checkbox"
              checkboxPosition="right"
            />
          </Row>
          <Row label="No label">
            <InteractiveCheckbox />
            <InteractiveCheckbox checked={true} />
            <Checkbox indeterminate />
          </Row>
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
          {(["default", "outline", "brand"] as const).map((style) => (
            <Row
              key={style}
              label={style.charAt(0).toUpperCase() + style.slice(1)}
            >
              <Checkbox checkboxStyle={style} label="Unchecked" disabled />
              <Checkbox checkboxStyle={style} label="Checked" disabled checked />
              <Checkbox
                checkboxStyle={style}
                label="Indeterminate"
                disabled
                indeterminate
              />
            </Row>
          ))}
        </div>
      </div>

      {/* ── States table ─────────────────────────────────────── */}
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
                  Unchecked
                </th>
                <th className="px-4 py-3 font-semibold text-foreground">
                  Checked
                </th>
                <th className="px-4 py-3 font-semibold text-foreground">
                  Indeterminate
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  Default
                </td>
                <td className="px-4 py-3">
                  <InteractiveCheckbox label="Label" />
                </td>
                <td className="px-4 py-3">
                  <InteractiveCheckbox label="Label" checked={true} />
                </td>
                <td className="px-4 py-3">
                  <Checkbox label="Label" indeterminate />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  Invalid
                </td>
                <td className="px-4 py-3">
                  <InteractiveCheckbox label="Label" invalid />
                </td>
                <td className="px-4 py-3">
                  <InteractiveCheckbox label="Label" invalid checked={true} />
                </td>
                <td className="px-4 py-3">
                  <Checkbox label="Label" invalid indeterminate />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  Disabled
                </td>
                <td className="px-4 py-3">
                  <Checkbox label="Label" disabled />
                </td>
                <td className="px-4 py-3">
                  <Checkbox label="Label" disabled checked />
                </td>
                <td className="px-4 py-3">
                  <Checkbox label="Label" disabled indeterminate />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  Skeleton
                </td>
                <td className="px-4 py-3">
                  <Checkbox label="Label" skeleton />
                </td>
                <td className="px-4 py-3">
                  <Checkbox skeleton />
                </td>
                <td className="px-4 py-3">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Controlled ───────────────────────────────────────── */}
      <div>
        <h3
          id="detail-controlled"
          className="scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Controlled
        </h3>
        <div className="mt-4 flex items-center gap-4">
          <Checkbox
            checked={controlled}
            onCheckedChange={setControlled}
            label="Controlled checkbox"
          />
          <button
            type="button"
            className="rounded-small border border-border px-150 py-050 text-xs font-lexend hover:bg-muted-hover transition-colors"
            onClick={() => setControlled(!controlled)}
          >
            Toggle externally
          </button>
          <span className="font-lexend text-xs text-muted-foreground">
            checked: <strong className="text-foreground">{String(controlled)}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
