import type { Metadata } from "next";

import { NativeSelectDetail } from "@/components/docs/NativeSelectDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { NativeSelectDefault } from "@/examples/native-select/native-select-default";
import { NativeSelectWithOptgroup } from "@/examples/native-select/native-select-with-optgroup";
import { NativeSelectDisabled } from "@/examples/native-select/native-select-disabled";
import { NativeSelectInvalid } from "@/examples/native-select/native-select-invalid";

export const metadata: Metadata = {
  title: "Native Select | Design System",
  description: "A styled native HTML select for simple option picking.",
};

const INSTALL_CODE = `cp src/components/figma/NativeSelect.tsx your-project/components/NativeSelect.tsx`;
const USAGE_IMPORT = `import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from "@/components/figma/NativeSelect"`;
const USAGE_CODE = `<NativeSelect>
  <NativeSelectOption value="">Pick one…</NativeSelectOption>
  <NativeSelectOption value="a">Option A</NativeSelectOption>
  <NativeSelectOption value="b">Option B</NativeSelectOption>
</NativeSelect>

{/* With groups */}
<NativeSelect>
  <NativeSelectOptGroup label="Fruits">
    <NativeSelectOption value="apple">Apple</NativeSelectOption>
    <NativeSelectOption value="banana">Banana</NativeSelectOption>
  </NativeSelectOptGroup>
</NativeSelect>`;

const NativeSelectPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Native Select</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A styled native HTML <code className="font-mono text-sm">&lt;select&gt;</code> element. Uses the browser&apos;s native dropdown — mobile-friendly and zero custom state management required. Supports grouped options via <code className="font-mono text-sm">NativeSelectOptGroup</code>.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Examples</h2>

      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <div className="mt-3">
        <ComponentPreview name="native-select/native-select-default">
          <NativeSelectDefault />
        </ComponentPreview>
      </div>

      <h3 id="with-optgroup" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">With Option Groups</h3>
      <div className="mt-3">
        <ComponentPreview name="native-select/native-select-with-optgroup">
          <NativeSelectWithOptgroup />
        </ComponentPreview>
      </div>

      <h3 id="disabled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Disabled</h3>
      <div className="mt-3">
        <ComponentPreview name="native-select/native-select-disabled">
          <NativeSelectDisabled />
        </ComponentPreview>
      </div>

      <h3 id="invalid" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Invalid</h3>
      <div className="mt-3">
        <ComponentPreview name="native-select/native-select-invalid">
          <NativeSelectInvalid />
        </ComponentPreview>
      </div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Detail</h2>
      <NativeSelectDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
      <div className="mt-4 space-y-3"><CodeBlock code={USAGE_IMPORT} /><CodeBlock code={USAGE_CODE} /></div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">API Reference</h2>

      <h3 id="api-nativeselect" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">NativeSelect</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">value</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">defaultValue</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">disabled</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">aria-invalid</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-nativeselectoption" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">NativeSelectOption</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">value</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">disabled</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-nativeselectoptgroup" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">NativeSelectOptGroup</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">label</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">required</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">disabled</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NativeSelectPage;
