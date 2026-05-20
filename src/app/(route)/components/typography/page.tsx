import type { Metadata } from "next";

import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { TypographyDetail } from "@/components/docs/TypographyDetail";
import { TypographyTitleExample } from "@/examples/typography/typography-title";
import { TypographyTextExample } from "@/examples/typography/typography-text";
import { TypographyDecoratorsExample } from "@/examples/typography/typography-decorators";
import { TypographyLinkExample } from "@/examples/typography/typography-link";

export const metadata: Metadata = {
  title: "Typography | Design System",
  description:
    "Semantic text primitives for titles, paragraphs, inline text, and links — all bound to the design token system.",
};

const INSTALL_CODE = `cp src/components/figma/Typography.tsx your-project/components/Typography.tsx`;

const USAGE_IMPORT = `import {
  Typography,
  TypographyTitle,
  TypographyParagraph,
  TypographyText,
  TypographyLink,
} from "@/components/figma/Typography"`;

const USAGE_CODE = `<Typography>
  <TypographyTitle level={1}>Page Title</TypographyTitle>
  <TypographyParagraph>
    Body copy goes here with comfortable line-height.
  </TypographyParagraph>
  <TypographyText type="secondary">Secondary note text.</TypographyText>
  <TypographyLink href="/docs">Read more →</TypographyLink>
</Typography>`;

const TypographyPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Typography</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        Semantic text primitives — <code className="rounded bg-muted px-1 py-0.5 text-xs">TypographyTitle</code>,{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">TypographyParagraph</code>,{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">TypographyText</code>, and{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">TypographyLink</code> — bound to the
        design token system. Each sub-component is standalone and can be used independently or inside
        the optional <code className="rounded bg-muted px-1 py-0.5 text-xs">Typography</code> wrapper.
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

      <h3 id="title-levels" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Title Levels
      </h3>
      <div className="mt-3">
        <ComponentPreview name="typography/typography-title">
          <TypographyTitleExample />
        </ComponentPreview>
      </div>

      <h3 id="text-variants" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Text Variants
      </h3>
      <div className="mt-3">
        <ComponentPreview name="typography/typography-text">
          <TypographyTextExample />
        </ComponentPreview>
      </div>

      <h3 id="text-decorators" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Text Decorators
      </h3>
      <div className="mt-3">
        <ComponentPreview name="typography/typography-decorators">
          <TypographyDecoratorsExample />
        </ComponentPreview>
      </div>

      <h3 id="link" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Link
      </h3>
      <div className="mt-3">
        <ComponentPreview name="typography/typography-link">
          <TypographyLinkExample />
        </ComponentPreview>
      </div>

      {/* ── Detail ────────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <TypographyDetail />

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

      <h3 id="api-typography-title" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        TypographyTitle
      </h3>
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
              <td className="px-4 py-3 font-mono text-xs">level</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">1 | 2 | 3 | 4 | 5</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">1</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">children</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-typography-text" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        TypographyText
      </h3>
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
              <td className="px-4 py-3 font-mono text-xs">type</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;default&quot; | &quot;secondary&quot; | &quot;success&quot; | &quot;warning&quot; | &quot;danger&quot;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;default&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">strong</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">italic</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">underline</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">delete</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">mark</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">code</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-typography-link" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        TypographyLink
      </h3>
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
              <td className="px-4 py-3 font-mono text-xs">href</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">children</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TypographyPage;
