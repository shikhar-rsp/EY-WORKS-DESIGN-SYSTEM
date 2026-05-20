import type { Metadata } from "next";

import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { KeyPairValueDetail } from "@/components/docs/KeyPairValueDetail";
import { KeyPairValueHorizontal } from "@/examples/key-pair-value/key-pair-value-horizontal";
import { KeyPairValueVertical } from "@/examples/key-pair-value/key-pair-value-vertical";
import { KeyPairValueReverse } from "@/examples/key-pair-value/key-pair-value-reverse";
import { KeyPairValueWithCopy } from "@/examples/key-pair-value/key-pair-value-with-copy";
import { KeyPairValueWithLozenge } from "@/examples/key-pair-value/key-pair-value-with-lozenge";
import { KeyPairValueHeader } from "@/examples/key-pair-value/key-pair-value-header";

export const metadata: Metadata = {
  title: "Key Pair Value | Design System",
  description:
    "Key Pair Value is a label-value display component for showing structured data in horizontal or vertical layouts with optional copy, icons, and validation.",
};

const INSTALL_CODE = `cp src/components/figma/KeyPairValue.tsx your-project/components/KeyPairValue.tsx`;

const USAGE_IMPORT = `import { KeyPairValue, KeyPairHeader } from "@/components/figma/KeyPairValue"`;

const USAGE_CODE = `{/* Horizontal (default) */}
<KeyPairValue label="Full Name" orientation="horizontal">
  <span>Alice Johnson</span>
</KeyPairValue>

{/* Vertical */}
<KeyPairValue label="Email" orientation="vertical">
  <span>alice@example.com</span>
</KeyPairValue>

{/* Reverse styling */}
<KeyPairValue label="Status" reverse>
  <span>Active</span>
</KeyPairValue>

{/* With copy button */}
<KeyPairValue label="API Key" copy copyValue="sk-1234567890abcdef">
  <span className="font-mono">sk-1234567890abcdef</span>
</KeyPairValue>

{/* With validation message */}
<KeyPairValue label="Email" validationText="Email already in use">
  <span>existing@example.com</span>
</KeyPairValue>

{/* Section header */}
<KeyPairHeader label="Personal Information" />`;

const KeyPairValuePage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <h1 className="text-4xl font-bold text-foreground">Key Pair Value</h1>
      <p className="mt-3 text-sm text-secondary-foreground">
        A label-value display component for showing structured data. Supports
        horizontal and vertical orientations, reverse label/value styling, an
        inline copy action, and flexible value content via children (text,
        badges, lozenges, or any React node).
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
        id="horizontal"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Horizontal
      </h3>
      <ComponentPreview name="key-pair-value/key-pair-value-horizontal">
        <KeyPairValueHorizontal />
      </ComponentPreview>

      <h3
        id="vertical"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Vertical
      </h3>
      <ComponentPreview name="key-pair-value/key-pair-value-vertical">
        <KeyPairValueVertical />
      </ComponentPreview>

      <h3
        id="reverse"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Reverse
      </h3>
      <ComponentPreview name="key-pair-value/key-pair-value-reverse">
        <KeyPairValueReverse />
      </ComponentPreview>

      <h3
        id="with-copy"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        With Copy
      </h3>
      <ComponentPreview name="key-pair-value/key-pair-value-with-copy">
        <KeyPairValueWithCopy />
      </ComponentPreview>

      <h3
        id="with-lozenge"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        With Lozenge
      </h3>
      <ComponentPreview name="key-pair-value/key-pair-value-with-lozenge">
        <KeyPairValueWithLozenge />
      </ComponentPreview>

      <h3
        id="header"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Header
      </h3>
      <ComponentPreview name="key-pair-value/key-pair-value-header">
        <KeyPairValueHeader />
      </ComponentPreview>

      {/* ── Detail ────────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <KeyPairValueDetail />

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
      <div className="mt-3">
        <CodeBlock code={USAGE_IMPORT} />
      </div>
      <div className="mt-3">
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
        id="api-keypairvalue"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        KeyPairValue
      </h3>
      <div className="mt-3 overflow-hidden rounded-large border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-3 text-left font-medium text-foreground">
                Prop
              </th>
              <th className="px-4 py-3 text-left font-medium text-foreground">
                Type
              </th>
              <th className="px-4 py-3 text-left font-medium text-foreground">
                Default
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 text-foreground">
                <code>label</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                <code>string</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground">
                <code>orientation</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                <code>&quot;horizontal&quot; | &quot;vertical&quot;</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                <code>&quot;horizontal&quot;</code>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground">
                <code>reverse</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                <code>boolean</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                <code>false</code>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground">
                <code>copy</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                <code>boolean</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                <code>false</code>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground">
                <code>copyValue</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                <code>string</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground">
                <code>validationText</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                <code>string</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground">
                <code>iconBefore</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                <code>ReactNode</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground">
                <code>iconAfter</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                <code>ReactNode</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground">
                <code>children</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                <code>ReactNode</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        id="api-keypairheader"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        KeyPairHeader
      </h3>
      <div className="mt-3 overflow-hidden rounded-large border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-3 text-left font-medium text-foreground">
                Prop
              </th>
              <th className="px-4 py-3 text-left font-medium text-foreground">
                Type
              </th>
              <th className="px-4 py-3 text-left font-medium text-foreground">
                Default
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 text-foreground">
                <code>label</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                <code>string</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground">
                <code>iconBefore</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                <code>ReactNode</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground">
                <code>iconAfter</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">
                <code>ReactNode</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KeyPairValuePage;
