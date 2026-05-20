import type { Metadata } from "next";

import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { SegmentedDetail } from "@/components/docs/SegmentedDetail";
import { SegmentedDefault } from "@/examples/segmented/segmented-default";
import { SegmentedControlled } from "@/examples/segmented/segmented-controlled";
import { SegmentedSizes } from "@/examples/segmented/segmented-sizes";

export const metadata: Metadata = {
  title: "Segmented | Design System",
  description:
    "A segmented control for mutually exclusive selection — a pill-style alternative to Tabs or ToggleGroup.",
};

const INSTALL_CODE = `cp src/components/figma/Segmented.tsx your-project/components/Segmented.tsx`;

const USAGE_IMPORT = `import { Segmented, SegmentedItem } from "@/components/figma/Segmented"`;

const USAGE_CODE = `<Segmented defaultValue="week">
  <SegmentedItem value="day">Day</SegmentedItem>
  <SegmentedItem value="week">Week</SegmentedItem>
  <SegmentedItem value="month">Month</SegmentedItem>
</Segmented>`;

const SegmentedPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Segmented</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A mutually exclusive selection control rendered as a pill-style button group. Works as a compact
        alternative to{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">Tabs</code> or{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">ToggleGroup</code> for inline filter and view-mode
        switching. Supports controlled/uncontrolled state, three sizes, disabled states, and icon-enhanced items.
      </p>

      {/* ── Brand Toolbar ─────────────────────────────────────────── */}
      <BrandPreviewToolbar />

      {/* ── Examples ──────────────────────────────────────────────── */}
      <h2
        id="examples"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Examples
      </h2>

      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Default
      </h3>
      <div className="mt-3">
        <ComponentPreview name="segmented/segmented-default">
          <SegmentedDefault />
        </ComponentPreview>
      </div>

      <h3 id="controlled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Controlled
      </h3>
      <div className="mt-3">
        <ComponentPreview name="segmented/segmented-controlled">
          <SegmentedControlled />
        </ComponentPreview>
      </div>

      <h3 id="sizes" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Sizes
      </h3>
      <div className="mt-3">
        <ComponentPreview name="segmented/segmented-sizes">
          <SegmentedSizes />
        </ComponentPreview>
      </div>

      {/* ── Detail ────────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <SegmentedDetail />

      {/* ── Installation ──────────────────────────────────────────── */}
      <h2
        id="installation"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Installation
      </h2>
      <p className="mt-3 text-sm text-secondary-foreground">
        Copy the component file into your project.
      </p>
      <div className="mt-3">
        <CodeBlock code={INSTALL_CODE} />
      </div>

      {/* ── Usage ─────────────────────────────────────────────────── */}
      <h2
        id="usage"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Usage
      </h2>
      <div className="mt-3 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      {/* ── API Reference ─────────────────────────────────────────── */}
      <h2
        id="api-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        API Reference
      </h2>

      <h3 id="api-segmented" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Segmented
      </h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">value</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">defaultValue</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onValueChange</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(value: string) =&gt; void</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">size</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;sm&quot; | &quot;default&quot; | &quot;lg&quot;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;default&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">disabled</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-segmented-item" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        SegmentedItem
      </h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">value</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">disabled</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">leftIcon</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">rightIcon</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SegmentedPage;
