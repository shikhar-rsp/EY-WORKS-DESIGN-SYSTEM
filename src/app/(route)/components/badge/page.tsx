import type { Metadata } from "next";

import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { BadgeDetail } from "@/components/docs/BadgeDetail";
import { BadgeCount } from "@/examples/badge/badge-count";
import { BadgeDot } from "@/examples/badge/badge-dot";
import { BadgeColors } from "@/examples/badge/badge-colors";

export const metadata: Metadata = {
  title: "Badge | Design System",
  description:
    "A dot or count indicator that overlays a child element to signal status, notifications, or counts.",
};

const INSTALL_CODE = `cp src/components/figma/Badge.tsx your-project/components/Badge.tsx`;

const USAGE_IMPORT = `import { Badge, BadgeIndicator } from "@/components/figma/Badge"`;

const USAGE_CODE = `{/* Count badge */}
<Badge>
  <BadgeIndicator count={5} />
  <Avatar fallback="JD" />
</Badge>

{/* Dot badge */}
<Badge>
  <BadgeIndicator variant="dot" color="success" />
  <Avatar fallback="JD" />
</Badge>`;

const BadgePage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Badge</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A small indicator — numeric count or dot — that overlays a wrapped child element to communicate
        notifications, status, or activity. Supports four semantic colors, four placements, count overflow
        capping, and an optional <code className="rounded bg-muted px-1 py-0.5 text-xs">showZero</code> mode.
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

      <h3 id="count" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Count
      </h3>
      <div className="mt-3">
        <ComponentPreview name="badge/badge-count">
          <BadgeCount />
        </ComponentPreview>
      </div>

      <h3 id="dot" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Dot
      </h3>
      <div className="mt-3">
        <ComponentPreview name="badge/badge-dot">
          <BadgeDot />
        </ComponentPreview>
      </div>

      <h3 id="colors" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Colors
      </h3>
      <div className="mt-3">
        <ComponentPreview name="badge/badge-colors">
          <BadgeColors />
        </ComponentPreview>
      </div>

      {/* ── Detail ────────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <BadgeDetail />

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

      <h3 id="api-badge" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Badge
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

      <h3 id="api-badge-indicator" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        BadgeIndicator
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
              <td className="px-4 py-3 font-mono text-xs">variant</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;count&quot; | &quot;dot&quot;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;count&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">color</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;danger&quot; | &quot;primary&quot; | &quot;success&quot; | &quot;warning&quot;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;danger&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">placement</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;top-right&quot; | &quot;top-left&quot; | &quot;bottom-right&quot; | &quot;bottom-left&quot;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;top-right&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">count</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">max</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">99</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">showZero</td>
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

      {/* ── Variant Reference ─────────────────────────────────────── */}
      <h2
        id="variant-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Variant Reference
      </h2>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Variant</th>
              <th className="px-4 py-3 font-semibold text-foreground">Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">count</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">Unread message counts, notification numbers</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">dot</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">Online presence, unread activity dot, status indicators</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BadgePage;
