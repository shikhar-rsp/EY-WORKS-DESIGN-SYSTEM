import type { Metadata } from "next";

import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { StepsDetail } from "@/components/docs/StepsDetail";
import { StepsDefault } from "@/examples/steps/steps-default";
import { StepsInteractive } from "@/examples/steps/steps-interactive";
import { StepsVertical } from "@/examples/steps/steps-vertical";

export const metadata: Metadata = {
  title: "Steps | Design System",
  description:
    "A multi-step progress indicator for wizards, onboarding flows, and checkout sequences.",
};

const INSTALL_CODE = `cp src/components/figma/Steps.tsx your-project/components/Steps.tsx`;

const USAGE_IMPORT = `import {
  Steps,
  StepsItem,
  StepsIndicator,
  StepsContent,
  StepsTitle,
  StepsDescription,
  StepsSeparator,
} from "@/components/figma/Steps"`;

const USAGE_CODE = `<Steps defaultValue="account">
  <div className="flex flex-1 items-start">
    <StepsItem value="account" className="flex-col items-center">
      <StepsIndicator />
      <StepsContent className="items-center">
        <StepsTitle>Account</StepsTitle>
        <StepsDescription>Create your account</StepsDescription>
      </StepsContent>
    </StepsItem>
    <StepsSeparator />
  </div>
  <div className="flex flex-1 items-start">
    <StepsItem value="billing" className="flex-col items-center">
      <StepsIndicator />
      <StepsContent className="items-center">
        <StepsTitle>Billing</StepsTitle>
        <StepsDescription>Add payment method</StepsDescription>
      </StepsContent>
    </StepsItem>
  </div>
</Steps>`;

const StepsPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Steps</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A multi-step progress indicator for wizards, onboarding flows, and checkout sequences.
        Supports horizontal and vertical orientations, clickable step navigation, controlled/uncontrolled
        state, automatic complete/current/upcoming status derivation, and custom indicators.
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

      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Default
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Horizontal 3-step wizard with step 1 complete and step 2 active.
      </p>
      <ComponentPreview name="steps/steps-default">
        <StepsDefault />
      </ComponentPreview>

      <h3 id="interactive" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Interactive
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Controlled steps with Next and Back buttons — click to advance or retreat through steps.
      </p>
      <ComponentPreview name="steps/steps-interactive">
        <StepsInteractive />
      </ComponentPreview>

      <h3 id="vertical" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Vertical
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Vertical orientation with the same 3-step wizard layout.
      </p>
      <ComponentPreview name="steps/steps-vertical">
        <StepsVertical />
      </ComponentPreview>

      {/* ── Detail ────────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <StepsDetail />

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

      <h3 id="api-steps" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Steps
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
              <td className="px-4 py-3 font-mono text-xs">value</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">defaultValue</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onValueChange</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(value: string) =&gt; void</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">orientation</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;horizontal&quot; | &quot;vertical&quot;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;horizontal&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-steps-item" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        StepsItem
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
              <td className="px-4 py-3 font-mono text-xs">value</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string — must be unique within Steps</td>
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

      <h3 id="api-steps-indicator" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        StepsIndicator
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
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode — overrides auto number/check</td>
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

export default StepsPage;
