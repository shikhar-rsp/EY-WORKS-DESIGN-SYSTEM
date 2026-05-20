import type { Metadata } from "next";

import { TooltipDetail } from "@/components/docs/TooltipDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { TooltipDefault } from "@/examples/tooltip/tooltip-default";
import { TooltipPositions } from "@/examples/tooltip/tooltip-positions";
import { TooltipDelay } from "@/examples/tooltip/tooltip-delay";

export const metadata: Metadata = {
  title: "Tooltip | Design System",
  description:
    "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
};

const INSTALL_CODE = `cp src/components/figma/Tooltip.tsx your-project/components/Tooltip.tsx`;

const USAGE_IMPORT = `import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/figma/Tooltip"`;

const USAGE_CODE = `{/* Wrap your app (or layout) with TooltipProvider */}
<TooltipProvider delayDuration={0}>

  {/* Basic tooltip */}
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>

  {/* Side and alignment */}
  <Tooltip>
    <TooltipTrigger>Bottom right</TooltipTrigger>
    <TooltipContent side="bottom" align="end">
      Positioned bottom / end
    </TooltipContent>
  </Tooltip>

  {/* Render onto an existing element with asChild */}
  <Tooltip>
    <TooltipTrigger asChild>
      <button>Save</button>
    </TooltipTrigger>
    <TooltipContent>Saves your changes</TooltipContent>
  </Tooltip>

</TooltipProvider>`;

const TooltipPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Tooltip</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A popup that displays information related to an element when the element receives keyboard
        focus or the mouse hovers over it. Built as a compound component with{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">TooltipProvider</code>,{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">Tooltip</code>,{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">TooltipTrigger</code>, and{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">TooltipContent</code> — same API as shadcn.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Examples
      </h2>

      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Default
      </h3>
      <div className="mt-3">
        <ComponentPreview name="tooltip/tooltip-default">
          <TooltipDefault />
        </ComponentPreview>
      </div>

      <h3 id="positions" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Positions
      </h3>
      <div className="mt-3">
        <ComponentPreview name="tooltip/tooltip-positions">
          <TooltipPositions />
        </ComponentPreview>
      </div>

      <h3 id="delay" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Delay Duration
      </h3>
      <div className="mt-3">
        <ComponentPreview name="tooltip/tooltip-delay">
          <TooltipDelay />
        </ComponentPreview>
      </div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Detail
      </h2>
      <TooltipDetail />

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

      <h3 id="api-provider" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">TooltipProvider</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
            <th className="px-4 py-3 font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 font-semibold text-foreground">Default</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">delayDuration</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">0</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">children</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-tooltip" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Tooltip</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
            <th className="px-4 py-3 font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 font-semibold text-foreground">Default</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">open</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">defaultOpen</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">onOpenChange</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(open: boolean) =&gt; void</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">delayDuration</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">inherits provider</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">children</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-trigger" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">TooltipTrigger</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
            <th className="px-4 py-3 font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 font-semibold text-foreground">Default</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">asChild</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">children</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-content" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">TooltipContent</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
            <th className="px-4 py-3 font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 font-semibold text-foreground">Default</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">side</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;top&quot; | &quot;right&quot; | &quot;bottom&quot; | &quot;left&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;top&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">align</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;start&quot; | &quot;center&quot; | &quot;end&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;center&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">sideOffset</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">4</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">children</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TooltipPage;
