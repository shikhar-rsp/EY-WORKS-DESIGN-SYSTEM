import type { Metadata } from "next";

import { ResizableDefault } from "@/examples/resizable/resizable-default";
import { ResizableVertical } from "@/examples/resizable/resizable-vertical";
import { ResizableWithHandle } from "@/examples/resizable/resizable-handle";
import { ResizableDetail } from "@/components/docs/ResizableDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";

export const metadata: Metadata = {
  title: "Resizable | Design System",
  description: "Drag-to-resize panel groups with horizontal and vertical split support.",
};

const INSTALL_CODE = `cp src/components/figma/Resizable.tsx your-project/components/Resizable.tsx`;
const USAGE_IMPORT = `import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/figma/Resizable"`;
const USAGE_CODE = `<ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-large border border-border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      Panel One
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      Panel Two
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`;

const ResizablePage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Resizable</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        Drag-to-resize panel groups for building split-pane layouts. Supports horizontal and vertical directions, nested groups, and an optional visible grip handle. Panels enforce a 10%–90% size range during dragging.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Examples</h2>
      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <div className="mt-3"><ComponentPreview name="resizable/resizable-default"><ResizableDefault /></ComponentPreview></div>

      <h3 id="vertical" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Vertical</h3>
      <div className="mt-3"><ComponentPreview name="resizable/resizable-vertical"><ResizableVertical /></ComponentPreview></div>

      <h3 id="with-handle" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">With Handle</h3>
      <div className="mt-3"><ComponentPreview name="resizable/resizable-handle"><ResizableWithHandle /></ComponentPreview></div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Detail</h2>
      <ResizableDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
      <div className="mt-4 space-y-3"><CodeBlock code={USAGE_IMPORT} /><CodeBlock code={USAGE_CODE} /></div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">API Reference</h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">ResizablePanelGroup · direction</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;horizontal&quot; | &quot;vertical&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">required</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">ResizablePanelGroup · onLayout</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(sizes: number[]) =&gt; void</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">ResizablePanel · defaultSize</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">auto (flex: 1)</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">ResizablePanel · minSize</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">0</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">ResizablePanel · maxSize</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">100</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">ResizableHandle · withHandle</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResizablePage;
