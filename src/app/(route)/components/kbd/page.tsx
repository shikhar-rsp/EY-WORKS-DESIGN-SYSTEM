import type { Metadata } from "next";

import { KbdDetail } from "@/components/docs/KbdDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { KbdDefault } from "@/examples/kbd/kbd-default";
import { KbdSizes } from "@/examples/kbd/kbd-sizes";
import { KbdGroupExample } from "@/examples/kbd/kbd-group";

export const metadata: Metadata = {
  title: "Kbd | Design System",
  description: "Displays a keyboard key or shortcut combination.",
};

const INSTALL_CODE = `cp src/components/figma/Kbd.tsx your-project/components/Kbd.tsx`;
const USAGE_IMPORT = `import { Kbd, KbdGroup } from "@/components/figma/Kbd"`;
const USAGE_CODE = `{/* Single key */}
<Kbd>⌘</Kbd>

{/* Key combination */}
<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>

{/* Small size */}
<Kbd size="sm">Esc</Kbd>`;

const KbdPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Kbd</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        Displays a keyboard key or shortcut combination inline with text or in shortcut lists. Uses the semantic <code className="font-mono text-sm">&lt;kbd&gt;</code> element for accessibility. Wrap multiple keys in <code className="font-mono text-sm">KbdGroup</code> for combinations.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Examples</h2>

      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <div className="mt-3">
        <ComponentPreview name="kbd/kbd-default">
          <KbdDefault />
        </ComponentPreview>
      </div>

      <h3 id="sizes" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Sizes</h3>
      <div className="mt-3">
        <ComponentPreview name="kbd/kbd-sizes">
          <KbdSizes />
        </ComponentPreview>
      </div>

      <h3 id="group" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Group (Key Combinations)</h3>
      <div className="mt-3">
        <ComponentPreview name="kbd/kbd-group">
          <KbdGroupExample />
        </ComponentPreview>
      </div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Detail</h2>
      <KbdDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
      <div className="mt-4 space-y-3"><CodeBlock code={USAGE_IMPORT} /><CodeBlock code={USAGE_CODE} /></div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">API Reference</h2>

      <h3 id="api-kbd" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">Kbd</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">size</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;sm&quot; | &quot;md&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;md&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">children</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">React.ReactNode</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-kbdgroup" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">KbdGroup</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">children</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">React.ReactNode</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="variant-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Variant Reference</h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Size</th><th className="px-4 py-3 font-semibold text-foreground">Use Case</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">sm</td><td className="px-4 py-3 text-secondary-foreground">Inline with small text, compact shortcut lists</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">md</td><td className="px-4 py-3 text-secondary-foreground">Default — menus, tooltips, command palette</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KbdPage;
