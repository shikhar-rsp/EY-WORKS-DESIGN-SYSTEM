import type { Metadata } from "next";

import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { LozengeDetail } from "@/components/docs/LozengeDetail";
import { LozengeSolid } from "@/examples/lozenge/lozenge-solid";
import { LozengeOutline } from "@/examples/lozenge/lozenge-outline";
import { LozengeLight } from "@/examples/lozenge/lozenge-light";
import { LozengeOutlineFilled } from "@/examples/lozenge/lozenge-outline-filled";
import { LozengeSizes } from "@/examples/lozenge/lozenge-sizes";
import { LozengeWithIcon } from "@/examples/lozenge/lozenge-with-icon";
import { LozengeWithIndicator } from "@/examples/lozenge/lozenge-with-indicator";

export const metadata: Metadata = {
  title: "Lozenge | Design System",
  description:
    "Lozenge is a compact status label that communicates categories, states, or metadata in four visual styles across eleven color themes.",
};

const INSTALL_CODE = `cp src/components/figma/Lozenge.tsx your-project/components/Lozenge.tsx`;

const USAGE_IMPORT = `import { Lozenge } from "@/components/figma/Lozenge"`;

const USAGE_CODE = `{/* Solid style */}
<Lozenge variant="solid" color="brand" label="In Progress" />

{/* Light style */}
<Lozenge variant="light" color="red" label="Blocked" />

{/* Outline style */}
<Lozenge variant="outline" color="blue" label="Review" />

{/* Outline Filled style */}
<Lozenge variant="outlineFilled" color="green" label="Approved" />

{/* With leading icon */}
<Lozenge variant="solid" color="brand" label="Active" leftIcon />

{/* With indicator dot */}
<Lozenge variant="solid" color="red" label="Error" indicator />

{/* Medium size */}
<Lozenge variant="solid" color="default" size="md" label="Label" />`;

const LozengePage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title & Description ─────────────────────────────────── */}
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Lozenge
        </h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A compact, inline status label that communicates categories, states, or
        metadata. Supports four visual styles (solid, light, outline, outline
        filled) across eleven color themes and three sizes.
      </p>

      <BrandPreviewToolbar />

      {/* ── Examples ────────────────────────────────────────────── */}
      <h2
        id="examples"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Examples
      </h2>

      <h3
        id="solid"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Solid
      </h3>
      <div className="mt-3">
        <ComponentPreview name="lozenge/lozenge-solid">
          <LozengeSolid />
        </ComponentPreview>
      </div>

      <h3
        id="light"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Light
      </h3>
      <div className="mt-3">
        <ComponentPreview name="lozenge/lozenge-light">
          <LozengeLight />
        </ComponentPreview>
      </div>

      <h3
        id="outline"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Outline
      </h3>
      <div className="mt-3">
        <ComponentPreview name="lozenge/lozenge-outline">
          <LozengeOutline />
        </ComponentPreview>
      </div>

      <h3
        id="outline-filled"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Outline Filled
      </h3>
      <div className="mt-3">
        <ComponentPreview name="lozenge/lozenge-outline-filled">
          <LozengeOutlineFilled />
        </ComponentPreview>
      </div>

      <h3
        id="sizes"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Sizes
      </h3>
      <div className="mt-3">
        <ComponentPreview name="lozenge/lozenge-sizes">
          <LozengeSizes />
        </ComponentPreview>
      </div>

      <h3
        id="with-icon"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        With Icon
      </h3>
      <div className="mt-3">
        <ComponentPreview name="lozenge/lozenge-with-icon">
          <LozengeWithIcon />
        </ComponentPreview>
      </div>

      <h3
        id="with-indicator"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        With Indicator
      </h3>
      <div className="mt-3">
        <ComponentPreview name="lozenge/lozenge-with-indicator">
          <LozengeWithIndicator />
        </ComponentPreview>
      </div>

      {/* ── Detail ──────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <LozengeDetail />

      {/* ── Installation ────────────────────────────────────────── */}
      <h2
        id="installation"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Installation
      </h2>
      <div className="mt-4">
        <CodeBlock code={INSTALL_CODE} />
      </div>

      {/* ── Usage ───────────────────────────────────────────────── */}
      <h2
        id="usage"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Usage
      </h2>
      <div className="mt-4 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      {/* ── API Reference ───────────────────────────────────────── */}
      <h2
        id="api-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        API Reference
      </h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">
                Default
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">variant</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                LozengeVariantTypes
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;solid&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">color</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                LozengeColorTypes
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;default&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">size</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                LozengeSizeTypes
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;sm&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">label</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;Label&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">indicator</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                boolean
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                false
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">leftIcon</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                boolean
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                false
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">showText</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                boolean
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                true
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                —
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── Variant Reference ───────────────────────────────────── */}
      <h2
        id="variant-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Variant Reference
      </h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">
                Variant
              </th>
              <th className="px-4 py-3 font-semibold text-foreground">
                Use Case
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">solid</td>
              <td className="px-4 py-3 text-secondary-foreground">
                High-emphasis labels — primary status, active states, key
                categories
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">light</td>
              <td className="px-4 py-3 text-secondary-foreground">
                Soft labels — secondary categories, background classifications
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">outline</td>
              <td className="px-4 py-3 text-secondary-foreground">
                Minimal treatment — tags, filters, or labels on dense surfaces
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">outlineFilled</td>
              <td className="px-4 py-3 text-secondary-foreground">
                Outlined label on a white background — ideal for table cells or
                cards
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LozengePage;
