import type { Metadata } from "next";

import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { PopconfirmDetail } from "@/components/docs/PopconfirmDetail";
import { PopconfirmDanger } from "@/examples/popconfirm/popconfirm-danger";
import { PopconfirmDefault } from "@/examples/popconfirm/popconfirm-default";
import { PopconfirmPlacement } from "@/examples/popconfirm/popconfirm-placement";
import { PopconfirmWithCallback } from "@/examples/popconfirm/popconfirm-with-callback";

export const metadata: Metadata = {
  title: "Popconfirm | Design System",
  description:
    "A compound confirmation popover that floats above a trigger. Supports placement, async loading, danger variant, and click-outside / Escape dismissal.",
};

const INSTALL_CODE = `cp src/components/figma/Popconfirm.tsx your-project/components/Popconfirm.tsx`;

const USAGE_IMPORT = `import {
  Popconfirm,
  PopconfirmTrigger,
  PopconfirmContent,
  PopconfirmHeader,
  PopconfirmIcon,
  PopconfirmTitle,
  PopconfirmDescription,
  PopconfirmFooter,
  PopconfirmCancel,
  PopconfirmAction,
} from "@/components/figma/Popconfirm"`;

const USAGE_CODE = `<Popconfirm okType="danger" onConfirm={() => console.log("deleted!")}>
  <PopconfirmTrigger className="...">
    Delete
  </PopconfirmTrigger>
  <PopconfirmContent>
    <PopconfirmHeader>
      <PopconfirmIcon />
      <PopconfirmTitle>Delete the task</PopconfirmTitle>
    </PopconfirmHeader>
    <PopconfirmDescription>
      Are you sure to delete this task?
    </PopconfirmDescription>
    <PopconfirmFooter>
      <PopconfirmCancel>No</PopconfirmCancel>
      <PopconfirmAction>Yes</PopconfirmAction>
    </PopconfirmFooter>
  </PopconfirmContent>
</Popconfirm>`;

const PopconfirmPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Popconfirm</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A compound confirmation popover that opens relative to the trigger element. Follows{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">AlertDialog</code> naming conventions
        (Cancel / Action / Title / Description) with Popover-style portal positioning. Supports
        controlled and uncontrolled state, an async{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">onConfirm</code> callback with
        loading state, a danger{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">okType</code>, 4-side placement, and
        click-outside / Escape dismissal.
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

      <h3 id="danger" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Danger
      </h3>
      <div className="mt-3">
        <ComponentPreview name="popconfirm/popconfirm-danger">
          <PopconfirmDanger />
        </ComponentPreview>
      </div>

      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Default
      </h3>
      <div className="mt-3">
        <ComponentPreview name="popconfirm/popconfirm-default">
          <PopconfirmDefault />
        </ComponentPreview>
      </div>

      <h3 id="placement" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Placement
      </h3>
      <div className="mt-3">
        <ComponentPreview name="popconfirm/popconfirm-placement">
          <PopconfirmPlacement />
        </ComponentPreview>
      </div>

      <h3 id="with-callback" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        With Callback
      </h3>
      <div className="mt-3">
        <ComponentPreview name="popconfirm/popconfirm-with-callback">
          <PopconfirmWithCallback />
        </ComponentPreview>
      </div>

      {/* ── Detail ────────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <PopconfirmDetail />

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

      <h3 id="api-popconfirm" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Popconfirm
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
              <td className="px-4 py-3 font-mono text-xs">open</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">defaultOpen</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onOpenChange</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(open: boolean) =&gt; void</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onConfirm</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">() =&gt; void | Promise&lt;void&gt;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">disabled</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">side</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;top&quot; | &quot;right&quot; | &quot;bottom&quot; | &quot;left&quot;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;top&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">align</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;start&quot; | &quot;center&quot; | &quot;end&quot;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;center&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">okType</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;default&quot; | &quot;danger&quot;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;default&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">showArrow</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">true</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-popconfirm-content" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        PopconfirmContent
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
              <td className="px-4 py-3 font-mono text-xs">sideOffset</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">8</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-popconfirm-icon" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        PopconfirmIcon
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
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode — overrides default AlertCircle icon</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">AlertCircle</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopconfirmPage;
