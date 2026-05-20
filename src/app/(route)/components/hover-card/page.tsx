import type { Metadata } from "next";

import { HoverCardDetail } from "@/components/docs/HoverCardDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { HoverCardDefault } from "@/examples/hover-card/hover-card-default";
import { HoverCardControlled } from "@/examples/hover-card/hover-card-controlled";

export const metadata: Metadata = {
  title: "Hover Card | Design System",
  description: "Displays a card with additional information when hovering over a trigger element.",
};

const INSTALL_CODE = `cp src/components/figma/HoverCard.tsx your-project/components/HoverCard.tsx`;
const USAGE_IMPORT = `import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/figma/HoverCard"`;
const USAGE_CODE = `<HoverCard>
  <HoverCardTrigger>
    <span className="underline cursor-pointer">@username</span>
  </HoverCardTrigger>
  <HoverCardContent>
    <p className="text-sm">Card content here.</p>
  </HoverCardContent>
</HoverCard>`;

const HoverCardPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Hover Card</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        Displays supplementary content in a floating card when hovering over a trigger. Useful for user profile previews, link previews, and rich tooltips. Supports controlled open state, configurable open/close delays, and placement.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Examples</h2>
      {/* generate-docs will insert Examples here */}
      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <div className="mt-3"><ComponentPreview name="hover-card/hover-card-default"><HoverCardDefault /></ComponentPreview></div>
      <h3 id="controlled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Controlled</h3>
      <div className="mt-3"><ComponentPreview name="hover-card/hover-card-controlled"><HoverCardControlled /></ComponentPreview></div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Detail</h2>
      <HoverCardDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
      <div className="mt-4 space-y-3"><CodeBlock code={USAGE_IMPORT} /><CodeBlock code={USAGE_CODE} /></div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">API Reference</h2>

      <h3 id="api-hovercard" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">HoverCard</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">open</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">defaultOpen</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">onOpenChange</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(open: boolean) =&gt; void</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">openDelay</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number (ms)</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">200</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">closeDelay</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number (ms)</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">300</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-hovercardcontent" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">HoverCardContent</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">side</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;top&quot; | &quot;right&quot; | &quot;bottom&quot; | &quot;left&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;bottom&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">align</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;start&quot; | &quot;center&quot; | &quot;end&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;center&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">sideOffset</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number (px)</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">4</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HoverCardPage;
