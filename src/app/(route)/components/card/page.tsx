import type { Metadata } from "next";

import { CardDefault } from "@/examples/card/card-default";
import { CardSimple } from "@/examples/card/card-simple";
import { CardDetail } from "@/components/docs/CardDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";

export const metadata: Metadata = {
  title: "Card | Design System",
  description: "A flexible container with header, content, and footer sections.",
};

const INSTALL_CODE = `cp src/components/figma/Card.tsx your-project/components/Card.tsx`;
const USAGE_IMPORT = `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/figma/Card"`;
const USAGE_CODE = `<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>
    <Button>Save</Button>
  </CardFooter>
</Card>`;

const CardPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Card</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        Displays content in a bordered, rounded container with optional header (title + description + action), content, and footer sections. Composes with any other components.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Examples</h2>

      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <div className="mt-3">
        <ComponentPreview name="card/card-default"><CardDefault /></ComponentPreview>
      </div>

      <h3 id="simple" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Simple</h3>
      <div className="mt-3">
        <ComponentPreview name="card/card-simple"><CardSimple /></ComponentPreview>
      </div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Detail</h2>
      <CardDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
      <div className="mt-4 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">API Reference</h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
            <th className="px-4 py-3 font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 font-semibold text-foreground">Default</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">size</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;default&quot; | &quot;sm&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;default&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">children</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">React.ReactNode</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardPage;
