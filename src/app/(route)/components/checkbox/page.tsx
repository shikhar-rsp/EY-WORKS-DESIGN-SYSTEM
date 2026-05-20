import type { Metadata } from "next";

import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { CheckboxDetail } from "@/components/docs/CheckboxDetail";
import { CheckboxDefault } from "@/examples/checkbox/checkbox-default";
import { CheckboxOutline } from "@/examples/checkbox/checkbox-outline";
import { CheckboxBrand } from "@/examples/checkbox/checkbox-brand";
import { CheckboxSizes } from "@/examples/checkbox/checkbox-sizes";
import { CheckboxWithLabel } from "@/examples/checkbox/checkbox-with-label";
import { CheckboxIndeterminate } from "@/examples/checkbox/checkbox-indeterminate";
import { CheckboxDisabled } from "@/examples/checkbox/checkbox-disabled";
import { CheckboxControlled } from "@/examples/checkbox/checkbox-controlled";

export const metadata: Metadata = {
  title: "Checkbox | Design System",
  description:
    "A checkbox component that supports three styles (Default, Outline, Brand), three sizes (Small, Medium, Large), indeterminate state, and both controlled and uncontrolled usage.",
};

const INSTALL_CODE = `cp src/components/figma/Checkbox.tsx your-project/components/Checkbox.tsx`;

const USAGE_IMPORT = `import { Checkbox } from "@/components/figma/Checkbox"`;

const USAGE_CODE = `{/* Uncontrolled — manages its own state */}
<Checkbox label="Enable feature" />

{/* Controlled */}
<Checkbox checked={isChecked} onCheckedChange={setIsChecked} label="Enable feature" />

{/* Outline style */}
<Checkbox checkboxStyle="outline" label="Outline checkbox" />

{/* Brand style */}
<Checkbox checkboxStyle="brand" label="Brand checkbox" />

{/* Indeterminate */}
<Checkbox indeterminate label="Select all" />

{/* Medium size */}
<Checkbox size="medium" label="Medium" />

{/* Large size */}
<Checkbox size="large" label="Large" />

{/* With helper message */}
<Checkbox label="Subscribe" helperMessage="Get weekly updates" />

{/* Required */}
<Checkbox label="I agree to the terms" required />

{/* Checkbox on the right */}
<Checkbox label="Right-side checkbox" checkboxPosition="right" />

{/* Invalid */}
<Checkbox label="Accept terms" invalid />

{/* Disabled */}
<Checkbox label="Disabled" disabled />

{/* Skeleton */}
<Checkbox skeleton label="Loading..." />`;

const CheckboxDocsPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title & Description ─────────────────────────────────── */}
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Checkbox
        </h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A checkbox component with three wrapper styles (Default, Outline,
        Brand), three box sizes (Small 14px, Medium 16px, Large 20px),
        indeterminate state, invalid/disabled/skeleton states, optional labels
        with helper messages and required asterisk, and both controlled and
        uncontrolled usage.
      </p>

      <BrandPreviewToolbar />

      {/* ── Examples ────────────────────────────────────────────── */}
      <h2
        id="examples"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Examples
      </h2>

      <h3
        id="default"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Default
      </h3>
      <div className="mt-3">
        <ComponentPreview name="checkbox/checkbox-default">
          <CheckboxDefault />
        </ComponentPreview>
      </div>

      <h3
        id="outline"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Outline
      </h3>
      <div className="mt-3">
        <ComponentPreview name="checkbox/checkbox-outline">
          <CheckboxOutline />
        </ComponentPreview>
      </div>

      <h3
        id="brand"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Brand
      </h3>
      <div className="mt-3">
        <ComponentPreview name="checkbox/checkbox-brand">
          <CheckboxBrand />
        </ComponentPreview>
      </div>

      <h3
        id="sizes"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Sizes
      </h3>
      <div className="mt-3">
        <ComponentPreview name="checkbox/checkbox-sizes">
          <CheckboxSizes />
        </ComponentPreview>
      </div>

      <h3
        id="with-label"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        With Label
      </h3>
      <div className="mt-3">
        <ComponentPreview name="checkbox/checkbox-with-label">
          <CheckboxWithLabel />
        </ComponentPreview>
      </div>

      <h3
        id="indeterminate"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Indeterminate
      </h3>
      <div className="mt-3">
        <ComponentPreview name="checkbox/checkbox-indeterminate">
          <CheckboxIndeterminate />
        </ComponentPreview>
      </div>

      <h3
        id="disabled"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Disabled
      </h3>
      <div className="mt-3">
        <ComponentPreview name="checkbox/checkbox-disabled">
          <CheckboxDisabled />
        </ComponentPreview>
      </div>

      <h3
        id="controlled"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Controlled
      </h3>
      <div className="mt-3">
        <ComponentPreview name="checkbox/checkbox-controlled">
          <CheckboxControlled />
        </ComponentPreview>
      </div>

      {/* ── Detail ──────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <CheckboxDetail />

      {/* ── Installation ────────────────────────────────────────── */}
      <h2
        id="installation"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Installation
      </h2>
      <CodeBlock code={INSTALL_CODE} />

      {/* ── Usage ───────────────────────────────────────────────── */}
      <h2
        id="usage"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Usage
      </h2>
      <CodeBlock code={USAGE_IMPORT} />
      <div className="mt-4">
        <CodeBlock code={USAGE_CODE} />
      </div>

      {/* ── API Reference ───────────────────────────────────────── */}
      <h2
        id="api-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        API Reference
      </h2>
      <div className="mt-4 overflow-hidden rounded-medium border border-border">
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
              <td className="px-4 py-3 font-mono text-xs">checked</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                boolean
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">defaultChecked</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                boolean
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onCheckedChange</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                (checked: boolean) =&gt; void
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">indeterminate</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                boolean
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">checkboxStyle</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;default&quot; | &quot;outline&quot; | &quot;brand&quot;
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;default&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">size</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;small&quot; | &quot;medium&quot; | &quot;large&quot;
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;small&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">disabled</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                boolean
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">invalid</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                boolean
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">label</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">helperMessage</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">required</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                boolean
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">checkboxPosition</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;left&quot; | &quot;right&quot;
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;left&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">skeleton</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                boolean
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── Variant Reference ───────────────────────────────────── */}
      <h2
        id="variant-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Variant Reference
      </h2>
      <div className="mt-4 overflow-hidden rounded-medium border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Style</th>
              <th className="px-4 py-3 font-semibold text-foreground">Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">default</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                Standard checkbox — no wrapper decoration
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">outline</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                Checkbox with a light border container — adds visual grouping
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">brand</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                Checkbox with a brand-colored background container — highlights
                selection
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckboxDocsPage;
