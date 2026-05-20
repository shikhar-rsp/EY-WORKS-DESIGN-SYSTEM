import type { Metadata } from "next";

import { LabelDetail } from "@/components/docs/LabelDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { LabelDefault } from "@/examples/label/label-default";
import { LabelWithCheckbox } from "@/examples/label/label-with-checkbox";
import { LabelDisabled } from "@/examples/label/label-disabled";

export const metadata: Metadata = {
  title: "Label | Design System",
  description: "Renders an accessible label element paired with form controls.",
};

const INSTALL_CODE = `cp src/components/figma/Label.tsx your-project/components/Label.tsx`;
const USAGE_IMPORT = `import { Label } from "@/components/figma/Label"`;
const USAGE_CODE = `<Label htmlFor="email">Email address</Label>
<input id="email" type="email" />`;

const LabelPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Label</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        Renders an accessible <code className="font-mono text-sm">&lt;label&gt;</code> element that can be paired with any form control. Automatically dims when the associated input is disabled via <code className="font-mono text-sm">peer-disabled</code> or <code className="font-mono text-sm">group-data-[disabled=true]</code>.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Examples</h2>

      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <div className="mt-3">
        <ComponentPreview name="label/label-default">
          <LabelDefault />
        </ComponentPreview>
      </div>

      <h3 id="with-checkbox" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">With Checkbox</h3>
      <div className="mt-3">
        <ComponentPreview name="label/label-with-checkbox">
          <LabelWithCheckbox />
        </ComponentPreview>
      </div>

      <h3 id="disabled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Disabled</h3>
      <div className="mt-3">
        <ComponentPreview name="label/label-disabled">
          <LabelDisabled />
        </ComponentPreview>
      </div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Detail</h2>
      <LabelDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
      <div className="mt-4 space-y-3"><CodeBlock code={USAGE_IMPORT} /><CodeBlock code={USAGE_CODE} /></div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">API Reference</h2>

      <h3 id="api-label" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">Label</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">htmlFor</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">children</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">React.ReactNode</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LabelPage;
