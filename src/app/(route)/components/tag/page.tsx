import type { Metadata } from "next";

import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { TagDetail } from "@/components/docs/TagDetail";
import { TagSolid } from "@/examples/tag/tag-solid";
import { TagOutline } from "@/examples/tag/tag-outline";
import { TagSubtle } from "@/examples/tag/tag-subtle";
import { TagWithIcons } from "@/examples/tag/tag-with-icons";

export const metadata: Metadata = {
  title: "Tag | Design System",
  description:
    "Tag is an interactive pill-shaped label used to categorize, filter, or annotate content across three visual styles and eight color themes.",
};

const INSTALL_CODE = `cp src/components/figma/Tag.tsx your-project/components/Tag.tsx`;

const USAGE_IMPORT = `import { Tag } from "@/components/figma/Tag"`;

const USAGE_CODE = `{/* Solid style */}
<Tag variant="solid" color="brand" label="Brand" />

{/* Outline style */}
<Tag variant="outline" color="default" label="Default" />

{/* Subtle style */}
<Tag variant="subtle" color="red" label="Error" />

{/* With left icon */}
<Tag variant="solid" color="brand" label="Category" leftIcon />

{/* Dismissible (right icon) */}
<Tag variant="solid" color="brand" label="Active" rightIcon />

{/* Both icons */}
<Tag variant="outline" color="default" label="Filter" leftIcon rightIcon />`;

const TagPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title & Description ─────────────────────────────────── */}
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Tag
        </h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        An interactive pill-shaped label used to categorize, filter, or annotate
        content. Supports three visual styles (solid, outline, subtle) across
        eight color themes with optional leading and trailing icons.
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
        id="solid"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Solid
      </h3>
      <div className="mt-3">
        <ComponentPreview name="tag/tag-solid">
          <TagSolid />
        </ComponentPreview>
      </div>

      <h3
        id="outline"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Outline
      </h3>
      <div className="mt-3">
        <ComponentPreview name="tag/tag-outline">
          <TagOutline />
        </ComponentPreview>
      </div>

      <h3
        id="subtle"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Subtle
      </h3>
      <div className="mt-3">
        <ComponentPreview name="tag/tag-subtle">
          <TagSubtle />
        </ComponentPreview>
      </div>

      <h3
        id="with-icons"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        With Icons
      </h3>
      <div className="mt-3">
        <ComponentPreview name="tag/tag-with-icons">
          <TagWithIcons />
        </ComponentPreview>
      </div>

      {/* ── Detail ──────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <TagDetail />

      {/* ── Installation ────────────────────────────────────────── */}
      <h2
        id="installation"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Installation
      </h2>
      <div className="mt-4">
        <CodeBlock code={INSTALL_CODE} />
      </div>

      {/* ── Usage ───────────────────────────────────────────────── */}
      <h2
        id="usage"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Usage
      </h2>
      <div className="mt-4 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      {/* ── API Reference ───────────────────────────────────────── */}
      <h2
        id="api-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        API Reference
      </h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
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
              <td className="px-4 py-3 font-mono text-xs">variant</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                TagVariantTypes
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;solid&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">color</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                TagColorTypes
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;default&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">label</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;Label&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">leftIcon</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                boolean
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                false
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">rightIcon</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                boolean
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                false
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

      {/* ── Variant Reference ───────────────────────────────────── */}
      <h2
        id="variant-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Variant Reference
      </h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">
                Variant
              </th>
              <th className="px-4 py-3 font-semibold text-foreground">
                Use Case
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">solid</td>
              <td className="px-4 py-3 text-secondary-foreground">
                High-emphasis tags — primary categories, active filters, status
                badges
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">outline</td>
              <td className="px-4 py-3 text-secondary-foreground">
                Minimal treatment — selectable filters, toggle chips, keyword
                tags
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">subtle</td>
              <td className="px-4 py-3 text-secondary-foreground">
                Soft background — secondary labels, metadata annotations,
                read-only tags
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TagPage;
