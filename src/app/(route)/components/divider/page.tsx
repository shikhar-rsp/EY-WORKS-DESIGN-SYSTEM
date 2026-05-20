import type { Metadata } from "next";

import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { DividerDetail } from "@/components/docs/DividerDetail";
import { DividerDefault } from "@/examples/divider/divider-default";
import { DividerSpacing } from "@/examples/divider/divider-spacing";
import { DividerVertical } from "@/examples/divider/divider-vertical";

export const metadata: Metadata = {
  title: "Divider | Design System",
  description:
    "Divider is a layout utility component for separating content. Supports horizontal spacing variants and vertical size variants with a hover state.",
};

const INSTALL_CODE = `cp src/components/figma/Divider.tsx your-project/components/Divider.tsx`;

const USAGE_IMPORT = `import { Divider, VerticalDivider } from "@/components/figma/Divider"`;

const USAGE_CODE = `{/* Horizontal divider */}
<Divider />

{/* With spacing */}
<Divider spacing="16" />

{/* Vertical divider */}
<VerticalDivider />

{/* Vertical with size */}
<VerticalDivider size="large" />`;

const DividerPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <h1 className="text-4xl font-bold text-foreground">Divider</h1>
      <p className="mt-3 text-sm text-secondary-foreground">
        A layout utility component for separating content. The horizontal Divider renders a 1px
        line with configurable vertical spacing. The VerticalDivider renders a pill-shaped bar
        in three sizes with a subtle hover state.
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
      <ComponentPreview name="divider/divider-default">
        <DividerDefault />
      </ComponentPreview>

      <h3 id="spacing" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Spacing
      </h3>
      <ComponentPreview name="divider/divider-spacing">
        <DividerSpacing />
      </ComponentPreview>

      <h3 id="vertical" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Vertical
      </h3>
      <ComponentPreview name="divider/divider-vertical">
        <DividerVertical />
      </ComponentPreview>

      {/* ── Detail ────────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <DividerDetail />

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
      <div className="mt-3">
        <CodeBlock code={USAGE_IMPORT} />
      </div>
      <div className="mt-3">
        <CodeBlock code={USAGE_CODE} />
      </div>

      {/* ── API Reference ─────────────────────────────────────────── */}
      <h2
        id="api-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        API Reference
      </h2>

      <h3 id="api-divider" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Divider
      </h3>
      <div className="mt-3 overflow-hidden rounded-large border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 text-foreground"><code>spacing</code></td>
              <td className="px-4 py-3 text-muted-foreground">
                <code>&quot;default&quot; | &quot;8&quot; | &quot;16&quot; | &quot;20&quot; | &quot;40&quot; | &quot;80&quot;</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground"><code>&quot;default&quot;</code></td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>className</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-vertical-divider" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        VerticalDivider
      </h3>
      <div className="mt-3 overflow-hidden rounded-large border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 text-foreground"><code>size</code></td>
              <td className="px-4 py-3 text-muted-foreground">
                <code>&quot;large&quot; | &quot;medium&quot; | &quot;small&quot;</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground"><code>&quot;medium&quot;</code></td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>className</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── Variant Reference ─────────────────────────────────────── */}
      <h2
        id="variant-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Variant Reference
      </h2>
      <h3 id="variant-spacing" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Spacing
      </h3>
      <div className="mt-3 overflow-hidden rounded-large border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-3 text-left font-medium text-foreground">Variant</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 text-foreground"><code>default</code></td>
              <td className="px-4 py-3 text-muted-foreground">No vertical padding — divider flush with surrounding content</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>8</code></td>
              <td className="px-4 py-3 text-muted-foreground">8px padding — tight separation between sections</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>16</code></td>
              <td className="px-4 py-3 text-muted-foreground">16px padding — standard separation in forms and cards</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>20</code></td>
              <td className="px-4 py-3 text-muted-foreground">20px padding — comfortable spacing in content areas</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>40</code></td>
              <td className="px-4 py-3 text-muted-foreground">40px padding — spacious section breaks</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>80</code></td>
              <td className="px-4 py-3 text-muted-foreground">80px padding — large visual break between major sections</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="variant-size" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Size (VerticalDivider)
      </h3>
      <div className="mt-3 overflow-hidden rounded-large border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-3 text-left font-medium text-foreground">Variant</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 text-foreground"><code>large</code></td>
              <td className="px-4 py-3 text-muted-foreground">6×68px — prominent vertical separator, e.g. between hero columns</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>medium</code></td>
              <td className="px-4 py-3 text-muted-foreground">2×20px — standard inline separator, e.g. between nav items or breadcrumbs</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>small</code></td>
              <td className="px-4 py-3 text-muted-foreground">2×16px — compact separator for dense UI, e.g. tags or action rows</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DividerPage;
