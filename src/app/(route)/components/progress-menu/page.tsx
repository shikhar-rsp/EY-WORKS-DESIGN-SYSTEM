import type { Metadata } from "next";

import { ProgressMenuDetail } from "@/components/docs/ProgressMenuDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";

import { ProgressMenuDefault } from "@/examples/progress-menu/progress-menu-default";

export const metadata: Metadata = {
  title: "Progress Menu | Design System",
  description:
    "A step-based progress tracker that displays onboarding or workflow steps with default, in-progress, and success states.",
};

const INSTALL_CODE = `cp src/components/figma/ProgressMenu.tsx your-project/components/ProgressMenu.tsx`;

const USAGE_IMPORT = `import { ProgressMenu } from "@/components/figma/ProgressMenu"`;

const USAGE_CODE = `<ProgressMenu
  title="Getting Started"
  steps={[
    { label: "Account Setup", status: "success", tag: "Required" },
    { label: "Child Profile", status: "in-progress" },
    { label: "Settings", status: "default" },
  ]}
  primaryButtonLabel="Continue"
  secondaryButtonLabel="Cancel"
/>`;

const ProgressMenuDocsPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title & Description ─────────────────────────────────── */}
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Progress Menu
      </h1>
      <p className="mt-2 leading-7 text-secondary-foreground">
        A step-based progress tracker for onboarding or multi-step workflows.
        Each step supports default, in-progress, and success states with
        optional tags and action buttons.
      </p>

      <BrandPreviewToolbar />

      {/* ── Examples ──────────────────────────────────────────────── */}
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
        <ComponentPreview name="progress-menu/progress-menu-default">
          <ProgressMenuDefault />
        </ComponentPreview>
      </div>

      {/* ── Detail ──────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <ProgressMenuDetail />

      {/* ── Installation ──────────────────────────────────────── */}
      <h2
        id="installation"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Installation
      </h2>
      <div className="mt-4">
        <CodeBlock code={INSTALL_CODE} />
      </div>

      {/* ── Usage ─────────────────────────────────────────────── */}
      <h2
        id="usage"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Usage
      </h2>
      <div className="mt-4 space-y-4">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      {/* ── API Reference ─────────────────────────────────────── */}
      <h2
        id="api-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        API Reference
      </h2>
      <div className="mt-4 overflow-hidden rounded-lg border border-border">
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
              <td className="px-4 py-3 font-mono text-xs">title</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">steps</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">IProgressStep[]</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">primaryButtonLabel</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">"Continue"</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onPrimaryClick</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">{"() => void"}</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">undefined</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">secondaryButtonLabel</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">"Cancel"</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onSecondaryClick</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">{"() => void"}</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">undefined</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">showPrimaryButton</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">true</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">showSecondaryButton</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">true</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── Step Type ─────────────────────────────────────────── */}
      <h3
        id="step-type"
        className="mt-6 scroll-mt-20 text-base font-semibold text-foreground"
      >
        IProgressStep
      </h3>
      <div className="mt-3 overflow-hidden rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Field</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">label</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">status</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">"default" | "in-progress" | "success"</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">icon</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">undefined</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">tag</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">undefined</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProgressMenuDocsPage;
