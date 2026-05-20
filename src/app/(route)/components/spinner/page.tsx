import type { Metadata } from "next";

import { SpinnerDetail } from "@/components/docs/SpinnerDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { SpinnerDefault } from "@/examples/spinner/spinner-default";
import { SpinnerSizes } from "@/examples/spinner/spinner-sizes";
import { SpinnerWithText } from "@/examples/spinner/spinner-with-text";

export const metadata: Metadata = {
  title: "Spinner | Design System",
  description: "Animated SVG loading indicator that signals an in-progress state.",
};

const INSTALL_CODE = `cp src/components/figma/Spinner.tsx your-project/components/Spinner.tsx`;
const USAGE_IMPORT = `import { Spinner } from "@/components/figma/Spinner"`;
const USAGE_CODE = `<Spinner />
<Spinner className="size-6" />
<Spinner className="size-8 text-primary" />`;

const SpinnerPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Spinner</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        An animated SVG loading indicator that signals an in-progress or pending state. Accepts any SVG attribute — override size with Tailwind's{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">size-*</code> utility on <code className="rounded bg-muted px-1 py-0.5 text-xs">className</code>.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Examples</h2>

      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <div className="mt-3">
        <ComponentPreview name="spinner/spinner-default">
          <SpinnerDefault />
        </ComponentPreview>
      </div>

      <h3 id="sizes" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Sizes</h3>
      <div className="mt-3">
        <ComponentPreview name="spinner/spinner-sizes">
          <SpinnerSizes />
        </ComponentPreview>
      </div>

      <h3 id="with-text" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">With Text</h3>
      <div className="mt-3">
        <ComponentPreview name="spinner/spinner-with-text">
          <SpinnerWithText />
        </ComponentPreview>
      </div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Detail</h2>
      <SpinnerDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
      <div className="mt-4 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">API Reference</h2>

      <h3 id="api-spinner" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Spinner</h3>
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
              <td className="px-4 py-3 font-mono text-xs">...SVGAttributes</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">SVGAttributes&lt;SVGSVGElement&gt;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpinnerPage;
