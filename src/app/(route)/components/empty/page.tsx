import type { Metadata } from "next";

import { EmptyDefault } from "@/examples/empty/empty-default";
import { EmptyWithAction } from "@/examples/empty/empty-with-action";
import { EmptyMinimal } from "@/examples/empty/empty-minimal";
import { EmptyDetail } from "@/components/docs/EmptyDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";

export const metadata: Metadata = {
  title: "Empty | Design System",
  description: "Displays an empty state with icon, title, description, and actions.",
};

const INSTALL_CODE = `cp src/components/figma/Empty.tsx your-project/components/Empty.tsx`;
const USAGE_IMPORT = `import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "@/components/figma/Empty"`;
const USAGE_CODE = `<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <InboxIcon />
    </EmptyMedia>
    <EmptyTitle>No messages</EmptyTitle>
    <EmptyDescription>Messages will appear here.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Compose</Button>
  </EmptyContent>
</Empty>`;

const EmptyPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Empty</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        Communicates that a list, table, or page has no content yet. Composes an optional icon/media, title, description, and action buttons.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Examples</h2>
      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <div className="mt-3"><ComponentPreview name="empty/empty-default"><EmptyDefault /></ComponentPreview></div>
      <h3 id="with-action" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">With Action</h3>
      <div className="mt-3"><ComponentPreview name="empty/empty-with-action"><EmptyWithAction /></ComponentPreview></div>
      <h3 id="minimal" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Minimal</h3>
      <div className="mt-3"><ComponentPreview name="empty/empty-minimal"><EmptyMinimal /></ComponentPreview></div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Detail</h2>
      <EmptyDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
      <div className="mt-4 space-y-3"><CodeBlock code={USAGE_IMPORT} /><CodeBlock code={USAGE_CODE} /></div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">API Reference</h2>

      <h3 id="api-empty" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">Empty</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-emptymedia" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">EmptyMedia</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">variant</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;default&quot; | &quot;icon&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;default&quot;</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-emptytitle" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">EmptyTitle</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-emptydescription" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">EmptyDescription</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-emptycontent" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">EmptyContent</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="variant-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Variant Reference</h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Variant</th><th className="px-4 py-3 font-semibold text-foreground">Use Case</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">default</td><td className="px-4 py-3 text-xs text-secondary-foreground">Pass-through — renders children without wrapper styles (e.g. an illustration)</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">icon</td><td className="px-4 py-3 text-xs text-secondary-foreground">56×56 rounded box with muted background — wraps a 24px icon</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmptyPage;
