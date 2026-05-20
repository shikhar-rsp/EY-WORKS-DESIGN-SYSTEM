import type { Metadata } from "next";

import { RadioGroupDefault } from "@/examples/radio-group/radio-group-default";
import { RadioGroupHorizontal } from "@/examples/radio-group/radio-group-horizontal";
import { RadioGroupDetail } from "@/components/docs/RadioGroupDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";

export const metadata: Metadata = {
  title: "Radio Group | Design System",
  description: "A set of checkable buttons where no more than one can be checked at a time.",
};

const INSTALL_CODE = `cp src/components/figma/RadioGroup.tsx your-project/components/RadioGroup.tsx`;

const USAGE_IMPORT = `import { RadioGroup, RadioGroupItem } from "@/components/figma/RadioGroup"`;

const USAGE_CODE = `<RadioGroup defaultValue="comfortable">
  {["Default", "Comfortable", "Spacious"].map((v) => (
    <label
      key={v}
      className="inline-flex cursor-pointer items-center gap-2 text-sm text-foreground"
    >
      <RadioGroupItem value={v.toLowerCase()} />
      {v}
    </label>
  ))}
</RadioGroup>`;

const RadioGroupPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Radio Group</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A set of checkable buttons known as radio buttons, where no more than one of the buttons can
        be checked at a time. Supports vertical and horizontal orientation, controlled and
        uncontrolled modes, and per-item disabled states.
      </p>

      <BrandPreviewToolbar />

      {/* ── Examples ────────────────────────────────────────────── */}
      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Examples
      </h2>

      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <div className="mt-3">
        <ComponentPreview name="radio-group/radio-group-default"><RadioGroupDefault /></ComponentPreview>
      </div>

      <h3 id="horizontal" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Horizontal</h3>
      <div className="mt-3">
        <ComponentPreview name="radio-group/radio-group-horizontal"><RadioGroupHorizontal /></ComponentPreview>
      </div>

      {/* ── Detail ──────────────────────────────────────────────── */}
      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Detail
      </h2>
      <RadioGroupDetail />

      {/* ── Installation ────────────────────────────────────────── */}
      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Installation
      </h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      {/* ── Usage ───────────────────────────────────────────────── */}
      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Usage
      </h2>
      <div className="mt-4 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      {/* ── API Reference ───────────────────────────────────────── */}
      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        API Reference
      </h2>

      <h3 id="api-radio-group" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">RadioGroup</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
            <th className="px-4 py-3 font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 font-semibold text-foreground">Default</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">value</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">defaultValue</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">onValueChange</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(value: string) =&gt; void</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">orientation</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;vertical&quot; | &quot;horizontal&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;vertical&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">disabled</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">required</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">name</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-radio-group-item" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">RadioGroupItem</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
            <th className="px-4 py-3 font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 font-semibold text-foreground">Default</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">value</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string (required)</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">id</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">disabled</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RadioGroupPage;
