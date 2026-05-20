import type { Metadata } from "next";

import { TabsDetail } from "@/components/docs/TabsDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { TabsDefault } from "@/examples/tabs/tabs-default";
import { TabsOutlined } from "@/examples/tabs/tabs-outlined";
import { TabsGradient } from "@/examples/tabs/tabs-gradient";

export const metadata: Metadata = {
  title: "Tabs | Design System",
  description: "A set of layered sections of content — known as tab panels — that are displayed one at a time.",
};

const INSTALL_CODE = `cp src/components/figma/Tabs.tsx your-project/components/Tabs.tsx`;
const USAGE_IMPORT = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/figma/Tabs"`;
const USAGE_CODE = `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>`;

const TabsPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Tabs</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A set of layered sections of content — known as tab panels — that are displayed one at a time. Supports controlled and uncontrolled modes, keyboard navigation with roving tabindex, and three visual variants:{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">underlined</code>,{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">outlined</code>, and{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">gradient</code>.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Examples</h2>

      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <div className="mt-3">
        <ComponentPreview name="tabs/tabs-default">
          <TabsDefault />
        </ComponentPreview>
      </div>

      <h3 id="outlined" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Outlined</h3>
      <div className="mt-3">
        <ComponentPreview name="tabs/tabs-outlined">
          <TabsOutlined />
        </ComponentPreview>
      </div>

      <h3 id="gradient" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Gradient</h3>
      <div className="mt-3">
        <ComponentPreview name="tabs/tabs-gradient">
          <TabsGradient />
        </ComponentPreview>
      </div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Detail</h2>
      <TabsDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
      <div className="mt-4 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">API Reference</h2>

      <h3 id="api-tabs" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Tabs</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
            <th className="px-4 py-3 font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 font-semibold text-foreground">Default</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">value</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">defaultValue</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">onValueChange</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(value: string) =&gt; void</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">orientation</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;horizontal&quot; | &quot;vertical&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;horizontal&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-tabs-list" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">TabsList</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
            <th className="px-4 py-3 font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 font-semibold text-foreground">Default</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">variant</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;underlined&quot; | &quot;outlined&quot; | &quot;gradient&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;underlined&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-tabs-trigger" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">TabsTrigger</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
            <th className="px-4 py-3 font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 font-semibold text-foreground">Default</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">value</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">disabled</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">leftIcon †</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">rightIcon †</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">showErrorBadge †</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">errorCount †</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;1&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">showCommentBadge †</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">commentCount †</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;1&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-muted-foreground font-lexend">† Design System extension — not part of shadcn&apos;s API.</p>

      <h3 id="api-tabs-content" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">TabsContent</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
            <th className="px-4 py-3 font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 font-semibold text-foreground">Default</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">value</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="variant-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Variant Reference</h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Variant</th>
            <th className="px-4 py-3 font-semibold text-foreground">Use Case</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">underlined</td><td className="px-4 py-3 text-secondary-foreground">Default — clean navigation with a bottom border indicator for the active tab.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">outlined</td><td className="px-4 py-3 text-secondary-foreground">Pill-shaped — suited for filter toggles and category switchers in compact UI.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">gradient</td><td className="px-4 py-3 text-secondary-foreground">Rounded-top card style — used within panels where tabs visually connect to content below.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabsPage;
