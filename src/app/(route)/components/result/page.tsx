import type { Metadata } from "next";

import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { ResultDetail } from "@/components/docs/ResultDetail";
import { ResultSuccess } from "@/examples/result/result-success";
import { ResultError } from "@/examples/result/result-error";
import { Result404 } from "@/examples/result/result-404";

export const metadata: Metadata = {
  title: "Result | Design System",
  description:
    "A status page component for showing operation outcomes — success, error, info, warning, 404, 500, and 403.",
};

const INSTALL_CODE = `cp src/components/figma/Result.tsx your-project/components/Result.tsx`;

const USAGE_IMPORT = `import {
  Result,
  ResultIcon,
  ResultTitle,
  ResultDescription,
  ResultContent,
  ResultActions,
} from "@/components/figma/Result"`;

const USAGE_CODE = `<Result status="success">
  <ResultIcon />
  <ResultTitle>Payment Successful</ResultTitle>
  <ResultDescription>
    Your order has been confirmed. A receipt has been sent to your email.
  </ResultDescription>
  <ResultActions>
    <Button>View Order</Button>
    <Button variant="secondary">Back to Home</Button>
  </ResultActions>
</Result>`;

const ResultPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Result</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A full-page or section-level status component for communicating operation outcomes. Supports
        seven statuses —{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">success</code>,{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">error</code>,{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">info</code>,{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">warning</code>,{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">404</code>,{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">500</code>, and{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">403</code> — with icon, title, description, optional
        extra content, and actions.
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

      <h3 id="success" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Success
      </h3>
      <div className="mt-3">
        <ComponentPreview name="result/result-success">
          <ResultSuccess />
        </ComponentPreview>
      </div>

      <h3 id="error" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Error
      </h3>
      <div className="mt-3">
        <ComponentPreview name="result/result-error">
          <ResultError />
        </ComponentPreview>
      </div>

      <h3 id="not-found" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Not Found
      </h3>
      <div className="mt-3">
        <ComponentPreview name="result/result-404">
          <Result404 />
        </ComponentPreview>
      </div>

      {/* ── Detail ────────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <ResultDetail />

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

      <h3 id="api-result" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Result
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
              <td className="px-4 py-3 font-mono text-xs">status</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;success&quot; | &quot;error&quot; | &quot;info&quot; | &quot;warning&quot; | &quot;404&quot; | &quot;500&quot; | &quot;403&quot;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;info&quot;</td>
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

      <h3 id="api-result-icon" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        ResultIcon
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
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode — overrides auto icon</td>
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

export default ResultPage;
