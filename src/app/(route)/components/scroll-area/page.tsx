import type { Metadata } from "next";

import { ScrollAreaDefault } from "@/examples/scroll-area/scroll-area-default";
import { ScrollAreaHorizontal } from "@/examples/scroll-area/scroll-area-horizontal";
import { ScrollAreaDetail } from "@/components/docs/ScrollAreaDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";

export const metadata: Metadata = {
  title: "Scroll Area | Design System",
  description: "Custom scrollable area with styled, draggable scrollbar thumbs.",
};

const INSTALL_CODE = `cp src/components/figma/ScrollArea.tsx your-project/components/ScrollArea.tsx`;
const USAGE_IMPORT = `import { ScrollArea, ScrollBar } from "@/components/figma/ScrollArea"`;
const USAGE_CODE = `{/* Vertical only (default) */}
<ScrollArea className="h-48 w-48 rounded-medium border border-border">
  <div className="p-150">
    {items.map((item) => <div key={item}>{item}</div>)}
  </div>
</ScrollArea>

{/* With horizontal scroll */}
<ScrollArea className="w-64 rounded-medium border border-border">
  <div style={{ width: "600px" }}>{/* wide content */}</div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`;

const ScrollAreaPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Scroll Area</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        Augments native scroll functionality with a custom, draggable scrollbar thumb. The vertical scrollbar
        appears automatically when content overflows. Add{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">{"<ScrollBar orientation=\"horizontal\" />"}</code>{" "}
        as a child to opt in to horizontal scrolling.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Examples</h2>
      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <div className="mt-3"><ComponentPreview name="scroll-area/scroll-area-default"><ScrollAreaDefault /></ComponentPreview></div>

      <h3 id="horizontal" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Horizontal</h3>
      <div className="mt-3"><ComponentPreview name="scroll-area/scroll-area-horizontal"><ScrollAreaHorizontal /></ComponentPreview></div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Detail</h2>
      <ScrollAreaDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
      <div className="mt-4 space-y-3"><CodeBlock code={USAGE_IMPORT} /><CodeBlock code={USAGE_CODE} /></div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">API Reference</h2>

      <h3 id="api-scroll-area" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">ScrollArea</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">children</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-scroll-bar" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">ScrollBar</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">orientation</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;vertical&quot; | &quot;horizontal&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;vertical&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScrollAreaPage;
