import type { Metadata } from "next";

import { FieldDetail } from "@/components/docs/FieldDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { FieldDefault } from "@/examples/field/field-default";
import { FieldWithError } from "@/examples/field/field-with-error";
import { FieldWithFieldset } from "@/examples/field/field-with-fieldset";

export const metadata: Metadata = {
  title: "Field | Design System",
  description: "A form field wrapper with label, description, error, fieldset, and separator sub-components.",
};

const INSTALL_CODE = `cp src/components/figma/Field.tsx your-project/components/Field.tsx`;
const USAGE_IMPORT = `import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldContent,
  FieldTitle,
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldSeparator,
} from "@/components/figma/Field"`;
const USAGE_CODE = `<FieldSet>
  <FieldLegend>Account</FieldLegend>
  <FieldDescription>Manage your account settings.</FieldDescription>
  <FieldGroup>
    <Field>
      <FieldLabel>Full name</FieldLabel>
      <Input placeholder="John Doe" />
      <FieldDescription>As it appears on your ID.</FieldDescription>
    </Field>
    <Field invalid>
      <FieldLabel>Email</FieldLabel>
      <Input type="email" defaultValue="bad" aria-invalid />
      <FieldError errors="Enter a valid email." />
    </Field>
  </FieldGroup>
</FieldSet>`;

const FieldPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Field</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A form field wrapper that semantically groups a label, control, description, and error message. Composes with <code className="font-mono text-sm">FieldSet</code> and <code className="font-mono text-sm">FieldGroup</code> for complex form layouts. Supports vertical, horizontal, and responsive orientations.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Examples</h2>
      {/* generate-docs will insert Examples here */}
      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <div className="mt-3"><ComponentPreview name="field/field-default"><FieldDefault /></ComponentPreview></div>
      <h3 id="with-error" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">With Error</h3>
      <div className="mt-3"><ComponentPreview name="field/field-with-error"><FieldWithError /></ComponentPreview></div>
      <h3 id="with-fieldset" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">With Fieldset</h3>
      <div className="mt-3"><ComponentPreview name="field/field-with-fieldset"><FieldWithFieldset /></ComponentPreview></div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Detail</h2>
      <FieldDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
      <div className="mt-4 space-y-3"><CodeBlock code={USAGE_IMPORT} /><CodeBlock code={USAGE_CODE} /></div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">API Reference</h2>

      <h3 id="api-field" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">Field</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">orientation</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;vertical&quot; | &quot;horizontal&quot; | &quot;responsive&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;vertical&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">invalid</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-fieldlabel" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">FieldLabel</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">htmlFor</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">auto from context</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-fielderror" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">FieldError</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">errors</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string | string[]</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-fieldlegend" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">FieldLegend</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">variant</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;legend&quot; | &quot;label&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;legend&quot;</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FieldPage;
