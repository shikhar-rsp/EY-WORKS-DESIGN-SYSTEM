import type { Metadata } from "next";

import { ToggleGroupDetail } from "@/components/docs/ToggleGroupDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ToggleGroupDefault } from "@/examples/toggle-group/toggle-group-default";
import { ToggleGroupMultiple } from "@/examples/toggle-group/toggle-group-multiple";
import { ToggleGroupOutline } from "@/examples/toggle-group/toggle-group-outline";
import { ToggleGroupSizes } from "@/examples/toggle-group/toggle-group-sizes";

export const metadata: Metadata = {
  title: "Toggle Group | Design System",
  description: "A set of two-state buttons that can be toggled on or off, supporting single or multiple selection with controlled and uncontrolled modes.",
};

const INSTALL_CODE = `cp src/components/figma/ToggleGroup.tsx your-project/components/ToggleGroup.tsx`;
const USAGE_IMPORT = `import { ToggleGroup, ToggleGroupItem } from "@/components/figma/ToggleGroup"`;
const USAGE_CODE = `{/* Single selection (uncontrolled) */}
<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>

{/* Multiple selection (controlled) */}
<ToggleGroup type="multiple" value={active} onValueChange={setActive}>
  <ToggleGroupItem value="bold">B</ToggleGroupItem>
  <ToggleGroupItem value="italic">I</ToggleGroupItem>
  <ToggleGroupItem value="underline">U</ToggleGroupItem>
</ToggleGroup>

{/* Outline variant */}
<ToggleGroup type="single" variant="outline" defaultValue="monthly">
  <ToggleGroupItem value="daily">Daily</ToggleGroupItem>
  <ToggleGroupItem value="weekly">Weekly</ToggleGroupItem>
  <ToggleGroupItem value="monthly">Monthly</ToggleGroupItem>
</ToggleGroup>`;

const ToggleGroupPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Toggle Group</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A set of two-state buttons that can be toggled on or off. Supports{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">single</code> (radio-like) and{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">multiple</code> (checkbox-like)
        selection modes, two visual variants, three sizes, and full controlled / uncontrolled dual-mode.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Examples
      </h2>

      <h3 id="single" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Single Selection
      </h3>
      <div className="mt-3">
        <ComponentPreview name="toggle-group/toggle-group-default">
          <ToggleGroupDefault />
        </ComponentPreview>
      </div>

      <h3 id="multiple" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Multiple Selection
      </h3>
      <div className="mt-3">
        <ComponentPreview name="toggle-group/toggle-group-multiple">
          <ToggleGroupMultiple />
        </ComponentPreview>
      </div>

      <h3 id="outline" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Outline Variant
      </h3>
      <div className="mt-3">
        <ComponentPreview name="toggle-group/toggle-group-outline">
          <ToggleGroupOutline />
        </ComponentPreview>
      </div>

      <h3 id="sizes" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Sizes
      </h3>
      <div className="mt-3">
        <ComponentPreview name="toggle-group/toggle-group-sizes">
          <ToggleGroupSizes />
        </ComponentPreview>
      </div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Detail
      </h2>
      <ToggleGroupDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Installation
      </h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Usage
      </h2>
      <div className="mt-4 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        API Reference
      </h2>
      <h3 id="api-toggle-group" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">ToggleGroup</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
            <th className="px-4 py-3 font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 font-semibold text-foreground">Default</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">type</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;single&quot; | &quot;multiple&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">required</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">value</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string (single) | string[] (multiple)</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">defaultValue</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string (single) | string[] (multiple)</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">onValueChange</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(value: string) =&gt; void (single) | (value: string[]) =&gt; void (multiple)</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">variant ✦</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;default&quot; | &quot;outline&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;default&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">size ✦</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;md&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">disabled</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">orientation ✦</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;horizontal&quot; | &quot;vertical&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;horizontal&quot;</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">✦ Design-system extension — not part of shadcn&apos;s ToggleGroup API.</p>

      <h3 id="api-toggle-group-item" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">ToggleGroupItem</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
            <th className="px-4 py-3 font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 font-semibold text-foreground">Default</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">value</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">required</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">disabled</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="variant-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Variant Reference
      </h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Variant</th>
            <th className="px-4 py-3 font-semibold text-foreground">Use Case</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">default</td><td className="px-4 py-3 text-xs text-secondary-foreground">Standalone items with subtle hover highlight — text editing toolbars, filter chips</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">outline</td><td className="px-4 py-3 text-xs text-secondary-foreground">Segmented control appearance (single bordered unit) — period selectors, view switchers</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToggleGroupPage;
