import type { Metadata } from "next";

import { ProgressDefault } from "@/examples/progress/progress-default";
import { ProgressSizes } from "@/examples/progress/progress-sizes";
import { ProgressWithLabel } from "@/examples/progress/progress-with-label";
import { ProgressDetail } from "@/components/docs/ProgressDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";

export const metadata: Metadata = {
  title: "Progress | Design System",
  description: "Displays completion progress of a task as an animated bar.",
};

const INSTALL_CODE = `cp src/components/figma/Progress.tsx your-project/components/Progress.tsx`;
const USAGE_IMPORT = `import { Progress } from "@/components/figma/Progress"`;
const USAGE_CODE = `<Progress value={33} />
<Progress value={66} size="lg" />`;

const ProgressPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Progress</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        Displays an indicator showing the completion progress of a task, typically displayed as a progress bar. Supports three sizes and smooth transitions.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Examples
      </h2>

      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <div className="mt-3">
        <ComponentPreview name="progress/progress-default"><ProgressDefault /></ComponentPreview>
      </div>

      <h3 id="sizes" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Sizes</h3>
      <div className="mt-3">
        <ComponentPreview name="progress/progress-sizes"><ProgressSizes /></ComponentPreview>
      </div>

      <h3 id="with-label" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">With Label</h3>
      <div className="mt-3">
        <ComponentPreview name="progress/progress-with-label"><ProgressWithLabel /></ComponentPreview>
      </div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Detail</h2>
      <ProgressDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
      <div className="mt-4 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">API Reference</h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
            <th className="px-4 py-3 font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 font-semibold text-foreground">Default</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">value</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number | undefined</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">undefined (indeterminate)</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">max</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">100</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">size</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;md&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">label</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;Progress&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="variant-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Variant Reference</h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Size</th>
            <th className="px-4 py-3 font-semibold text-foreground">Use Case</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">sm</td><td className="px-4 py-3 text-secondary-foreground">Inline / compact contexts</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">md</td><td className="px-4 py-3 text-secondary-foreground">Default — most use cases</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">lg</td><td className="px-4 py-3 text-secondary-foreground">Prominent upload / download bars</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProgressPage;
