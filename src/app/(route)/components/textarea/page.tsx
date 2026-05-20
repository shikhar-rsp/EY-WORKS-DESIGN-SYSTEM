import type { Metadata } from "next";

import { TextareaDetail } from "@/components/docs/TextareaDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { TextareaDefault } from "@/examples/textarea/textarea-default";
import { TextareaDisabled } from "@/examples/textarea/textarea-disabled";
import { TextareaInvalid } from "@/examples/textarea/textarea-invalid";

export const metadata: Metadata = {
  title: "Textarea | Design System",
  description: "A styled multi-line text input. Accepts all standard HTML textarea attributes with ref forwarding, and adapts visually for disabled and invalid states.",
};

const INSTALL_CODE = `cp src/components/figma/Textarea.tsx your-project/components/Textarea.tsx`;
const USAGE_IMPORT = `import { Textarea } from "@/components/figma/Textarea"`;
const USAGE_CODE = `{/* Basic */}
<Textarea placeholder="Type here…" />

{/* With ref forwarding */}
<Textarea ref={textareaRef} placeholder="Controlled via ref" />

{/* Disabled */}
<Textarea disabled placeholder="Disabled" />

{/* Invalid (aria-driven) */}
<Textarea aria-invalid={true} placeholder="Error state" />`;

const TextareaPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Textarea</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A styled multi-line text input. Accepts all standard HTML textarea attributes, supports{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">ref</code> forwarding, and adapts
        visually for disabled and invalid states. Resizable by the user.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Examples
      </h2>

      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Default
      </h3>
      <div className="mt-3">
        <ComponentPreview name="textarea/textarea-default">
          <TextareaDefault />
        </ComponentPreview>
      </div>

      <h3 id="disabled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Disabled
      </h3>
      <div className="mt-3">
        <ComponentPreview name="textarea/textarea-disabled">
          <TextareaDisabled />
        </ComponentPreview>
      </div>

      <h3 id="invalid" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Invalid
      </h3>
      <div className="mt-3">
        <ComponentPreview name="textarea/textarea-invalid">
          <TextareaInvalid />
        </ComponentPreview>
      </div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Detail
      </h2>
      <TextareaDetail />

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
      <h3 id="api-textarea" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">Textarea</h3>
      <p className="mt-1 text-sm text-muted-foreground">Extends all standard <code className="rounded bg-muted px-1 py-0.5 text-xs">HTMLTextAreaElement</code> attributes.</p>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
            <th className="px-4 py-3 font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 font-semibold text-foreground">Default</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">ref</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">React.Ref&lt;HTMLTextAreaElement&gt;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">placeholder</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">disabled</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">aria-invalid</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">rows</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TextareaPage;
