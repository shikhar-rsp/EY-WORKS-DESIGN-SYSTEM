import type { Metadata } from "next";

import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { FormDetail } from "@/components/docs/FormDetail";
import { FormBasic } from "@/examples/form/form-basic";
import { FormValidation } from "@/examples/form/form-validation";

export const metadata: Metadata = {
  title: "Form | Design System",
  description:
    "A compound form component with field wiring, validation, and accessible ARIA attributes — no external library required.",
};

const INSTALL_CODE = `cp src/components/figma/Form.tsx your-project/components/Form.tsx`;

const USAGE_IMPORT = `import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/figma/Form"`;

const USAGE_CODE = `<Form
  defaultValues={{ email: "" }}
  onSubmit={(values) => console.log(values)}
>
  <FormField name="email">
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input type="email" placeholder="you@example.com" />
      </FormControl>
      <FormDescription>We'll never share your email.</FormDescription>
      <FormMessage />
    </FormItem>
  </FormField>
  <Button type="submit">Submit</Button>
</Form>`;

const FormPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Form
        </h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A compound form component that provides context-driven field wiring,
        accessible ARIA attributes, and inline validation messages — no
        react-hook-form or other external library required. Composes on top of
        the existing{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">Field</code>{" "}
        primitives.
      </p>

      {/* ── Brand Toolbar ─────────────────────────────────────────── */}
      <BrandPreviewToolbar />

      {/* ── Examples ──────────────────────────────────────────────── */}
      <h2
        id="examples"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Examples
      </h2>

      <h3
        id="basic"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Basic Form
      </h3>
      <div className="mt-3">
        <ComponentPreview name="form/form-basic">
          <FormBasic />
        </ComponentPreview>
      </div>

      <h3
        id="validation"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Validation
      </h3>
      <div className="mt-3">
        <ComponentPreview name="form/form-validation">
          <FormValidation />
        </ComponentPreview>
      </div>

      {/* ── Detail ────────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <FormDetail />

      {/* ── Installation ──────────────────────────────────────────── */}
      <h2
        id="installation"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Installation
      </h2>
      <p className="mt-3 text-sm text-secondary-foreground">
        Copy the component file into your project.
      </p>
      <div className="mt-3">
        <CodeBlock code={INSTALL_CODE} />
      </div>

      {/* ── Usage ─────────────────────────────────────────────────── */}
      <h2
        id="usage"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Usage
      </h2>
      <div className="mt-3 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      {/* ── API Reference ─────────────────────────────────────────── */}
      <h2
        id="api-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        API Reference
      </h2>

      <h3
        id="api-form"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Form
      </h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">
                Default
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">defaultValues</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                Record&lt;string, string | number | boolean&gt;
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">{`{}`}</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onSubmit</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                (values) =&gt; void | Promise&lt;void&gt;
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                —
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                —
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        id="api-form-field"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        FormField
      </h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">
                Default
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">name</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string — must match a key in defaultValues
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                —
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        id="api-form-control"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        FormControl
      </h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">
                Default
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">children</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                ReactElement — single form control element
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                —
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormPage;
