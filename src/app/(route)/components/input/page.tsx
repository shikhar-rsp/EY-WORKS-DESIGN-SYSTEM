import type { Metadata } from "next";

import { InputDetail } from "@/components/docs/InputDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { InputDefault } from "@/examples/input/input-default";
import { InputDisabled } from "@/examples/input/input-disabled";
import { InputInvalid } from "@/examples/input/input-invalid";

export const metadata: Metadata = {
  title: "Input | Design System",
  description: "A thin, styled input element. Compose with Field for labels/errors, and InputGroup for icon addons.",
};

const INSTALL_CODE = `cp src/components/figma/Input.tsx your-project/components/Input.tsx`;
const USAGE_IMPORT = `import { Input } from "@/components/figma/Input"`;
const USAGE_CODE = `{/* Bare input */}
<Input placeholder="Enter text…" />

{/* With Field for label + error */}
<Field>
  <FieldLabel>Email</FieldLabel>
  <Input type="email" placeholder="you@example.com" />
  <FieldError errors={errors.email} />
</Field>

{/* With InputGroup for icon addons */}
<InputGroup>
  <InputGroupAddon><SearchIcon /></InputGroupAddon>
  <InputGroupInput placeholder="Search…" />
</InputGroup>`;

const InputPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Input</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A thin styled <code className="font-mono text-sm">&lt;input&gt;</code> that accepts all native HTML input attributes. Compose with <code className="font-mono text-sm">Field</code> for labels, descriptions, and errors; and with <code className="font-mono text-sm">InputGroup</code> for icon/button addons.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Examples</h2>
      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <div className="mt-3"><ComponentPreview name="input/input-default"><InputDefault /></ComponentPreview></div>
      <h3 id="disabled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Disabled</h3>
      <div className="mt-3"><ComponentPreview name="input/input-disabled"><InputDisabled /></ComponentPreview></div>
      <h3 id="invalid" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Invalid</h3>
      <div className="mt-3"><ComponentPreview name="input/input-invalid"><InputInvalid /></ComponentPreview></div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Detail</h2>
      <InputDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
      <div className="mt-4 space-y-3"><CodeBlock code={USAGE_IMPORT} /><CodeBlock code={USAGE_CODE} /></div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">API Reference</h2>

      <h3 id="api-input" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">Input</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">type</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;text&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">placeholder</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">disabled</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">required</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">aria-invalid</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">…InputHTMLAttributes</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">all native props</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InputPage;
