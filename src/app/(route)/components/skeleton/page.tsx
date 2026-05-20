import type { Metadata } from "next";

import { SkeletonDetail } from "@/components/docs/SkeletonDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { SkeletonDefault } from "@/examples/skeleton/skeleton-default";
import { SkeletonCard } from "@/examples/skeleton/skeleton-card";

export const metadata: Metadata = {
  title: "Skeleton | Design System",
  description: "Animated placeholder used while content is loading.",
};

const INSTALL_CODE = `cp src/components/figma/Skeleton.tsx your-project/components/Skeleton.tsx`;
const USAGE_IMPORT = `import { Skeleton } from "@/components/figma/Skeleton"`;
const USAGE_CODE = `<Skeleton className="h-4 w-48" />
<Skeleton className="h-4 w-32" />
<Skeleton className="size-10 rounded-full" />`;

const SkeletonPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Skeleton</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        Animated pulse placeholder used to represent content while it is loading. Compose multiple instances to build any loading layout.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Examples</h2>

      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <div className="mt-3">
        <ComponentPreview name="skeleton/skeleton-default">
          <SkeletonDefault />
        </ComponentPreview>
      </div>

      <h3 id="card" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Card</h3>
      <div className="mt-3">
        <ComponentPreview name="skeleton/skeleton-card">
          <SkeletonCard />
        </ComponentPreview>
      </div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Detail</h2>
      <SkeletonDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
      <div className="mt-4 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">API Reference</h2>

      <h3 id="api-skeleton" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Skeleton</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">...HTMLAttributes</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">HTMLAttributes&lt;HTMLDivElement&gt;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SkeletonPage;
