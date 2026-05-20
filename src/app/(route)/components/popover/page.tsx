import type { Metadata } from "next";

import { PopoverDefault } from "@/examples/popover/popover-default";
import { PopoverDetail } from "@/components/docs/PopoverDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";

export const metadata: Metadata = {
  title: "Popover | Design System",
  description: "Displays rich content in a portal, triggered by a button.",
};

const INSTALL_CODE = `cp src/components/figma/Popover.tsx your-project/components/Popover.tsx`;
const USAGE_IMPORT = `import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
  PopoverClose,
} from "@/components/figma/Popover"`;
const USAGE_CODE = `<Popover>
  <PopoverTrigger>
    <Button variant="secondary">Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Title</PopoverTitle>
      <PopoverDescription>Description.</PopoverDescription>
    </PopoverHeader>
    <p className="text-sm">Content goes here.</p>
  </PopoverContent>
</Popover>`;

const PopoverPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Popover</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        Displays rich content in a portal, anchored to a trigger button. Supports configurable side and alignment, click-outside dismissal, and Escape key handling.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Examples</h2>
      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <div className="mt-3"><ComponentPreview name="popover/popover-default"><PopoverDefault /></ComponentPreview></div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Detail</h2>
      <PopoverDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
      <div className="mt-4 space-y-3"><CodeBlock code={USAGE_IMPORT} /><CodeBlock code={USAGE_CODE} /></div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">API Reference</h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Sub-component</th><th className="px-4 py-3 font-semibold text-foreground">Props</th><th className="px-4 py-3 font-semibold text-foreground">Notes</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">Popover</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">open, defaultOpen, onOpenChange</td><td className="px-4 py-3 text-xs text-secondary-foreground">Root context; controlled or uncontrolled</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">PopoverTrigger</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">className</td><td className="px-4 py-3 text-xs text-secondary-foreground">Button that toggles the popover; wraps any trigger element</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">PopoverContent</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">align, side, sideOffset, className</td><td className="px-4 py-3 text-xs text-secondary-foreground">Portal-rendered panel anchored to trigger</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">PopoverHeader</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">className</td><td className="px-4 py-3 text-xs text-secondary-foreground">Title + description wrapper</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">PopoverTitle</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">className</td><td className="px-4 py-3 text-xs text-secondary-foreground">Heading inside the popover</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">PopoverDescription</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">className</td><td className="px-4 py-3 text-xs text-secondary-foreground">Supporting text</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">PopoverClose</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">className, onClick</td><td className="px-4 py-3 text-xs text-secondary-foreground">Closes the popover on click</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopoverPage;
