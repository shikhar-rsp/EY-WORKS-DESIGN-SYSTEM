import type { Metadata } from "next";

import { AspectRatioDefault } from "@/examples/aspect-ratio/aspect-ratio-default";
import { AspectRatioRatios } from "@/examples/aspect-ratio/aspect-ratio-ratios";
import { AspectRatioDetail } from "@/components/docs/AspectRatioDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";

export const metadata: Metadata = {
  title: "Aspect Ratio | Design System",
  description:
    "Displays content within a desired ratio using the CSS aspect-ratio property. Useful for images, videos, and responsive embeds.",
};

const INSTALL_CODE = `cp src/components/figma/AspectRatio.tsx your-project/components/AspectRatio.tsx`;

const USAGE_IMPORT = `import { AspectRatio } from "@/components/figma/AspectRatio"`;

const USAGE_CODE = `<AspectRatio ratio={16 / 9}>
  <img
    src="..."
    alt="..."
    className="h-full w-full object-cover rounded-medium"
  />
</AspectRatio>`;

const AspectRatioPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Aspect Ratio</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        Displays content within a desired ratio using the native CSS{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">aspect-ratio</code> property.
        Useful for images, videos, maps, and any media that should maintain consistent proportions
        across breakpoints.
      </p>

      {/* ── Brand Toolbar ─────────────────────────────────────────── */}
      <BrandPreviewToolbar />

      {/* ── Examples placeholder — filled by generate-docs ────────── */}
      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Examples
      </h2>
      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Default
      </h3>
      <div className="mt-3">
        <ComponentPreview name="aspect-ratio/aspect-ratio-default">
          <AspectRatioDefault />
        </ComponentPreview>
      </div>

      <h3 id="ratios" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Common Ratios
      </h3>
      <div className="mt-3">
        <ComponentPreview name="aspect-ratio/aspect-ratio-ratios">
          <AspectRatioRatios />
        </ComponentPreview>
      </div>

      {/* ── Detail ────────────────────────────────────────────────── */}
      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Detail
      </h2>
      <AspectRatioDetail />

      {/* ── Installation ──────────────────────────────────────────── */}
      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Installation
      </h2>
      <p className="mt-3 text-sm text-secondary-foreground">Copy the component file into your project.</p>
      <div className="mt-3">
        <CodeBlock code={INSTALL_CODE} />
      </div>

      {/* ── Usage ─────────────────────────────────────────────────── */}
      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Usage
      </h2>
      <div className="mt-3 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      {/* ── API Reference ─────────────────────────────────────────── */}
      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        API Reference
      </h2>

      <h3 id="api-aspect-ratio" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">AspectRatio</h3>
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
              <td className="px-4 py-3 font-mono text-xs">ratio</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">16 / 9</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">children</td>
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

export default AspectRatioPage;
