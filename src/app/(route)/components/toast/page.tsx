import type { Metadata } from "next";

import { ToastDetail } from "@/components/docs/ToastDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ToastSolid } from "@/examples/toast/toast-solid";
import { ToastOutline } from "@/examples/toast/toast-outline";
import { ToastSubtle } from "@/examples/toast/toast-subtle";
import { ToastImperative } from "@/examples/toast/toast-imperative";
import { ToastWithAction } from "@/examples/toast/toast-with-action";
import { ToastPromise } from "@/examples/toast/toast-promise";
import { ToastNoIcon } from "@/examples/toast/toast-no-icon";
import { ToastNoClose } from "@/examples/toast/toast-no-close";

export const metadata: Metadata = {
  title: "Toast | Design System",
  description:
    "A brief, non-blocking notification with an imperative Sonner-style API. Supports four semantic types and three visual styles.",
};

const INSTALL_CODE = `cp src/components/figma/Toast.tsx your-project/components/Toast.tsx`;

const USAGE_IMPORT = `import { toast, Toaster } from "@/components/figma/Toast"`;

const USAGE_CODE = `{/* 1. Mount <Toaster /> once in your root layout */}
<Toaster position="bottom-right" />

{/* 2. Call toast() from anywhere */}
toast("Two orders have been duplicated.");
toast.success("Profile updated successfully.");
toast.error("Failed to save changes.");
toast.info("A new version is available.");
toast.warning("Your session expires in 5 minutes.");

{/* With action */}
toast("File removed.", {
  action: { label: "Undo", onClick: () => restoreFile() },
});

{/* With style extension */}
toast("Connection lost.", { type: "danger", style: "outline" });

{/* Promise */}
toast.promise(saveData(), {
  loading: "Saving…",
  success: "Saved!",
  error: "Failed to save.",
});

{/* Dismiss */}
const id = toast.success("Item created.");
toast.dismiss(id); // dismiss specific
toast.dismiss();   // dismiss all`;

const TOASTER_USAGE = `{/* JSX component — for manual composition without the imperative API */}
import { Toast } from "@/components/figma/Toast"

<Toast
  type="danger"
  style="solid"
  message="Two orders have been duplicated."
  actionLabel="Undo"
  onAction={() => handleUndo()}
  onClose={() => dismiss()}
/>`;

const ToastPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Toast</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A brief, non-blocking notification for communicating feedback. Uses a Sonner-style
        imperative API — call <code className="rounded bg-muted px-1 py-0.5 text-xs">toast()</code>{" "}
        from anywhere and mount <code className="rounded bg-muted px-1 py-0.5 text-xs">&lt;Toaster /&gt;</code>{" "}
        once in your layout. Supports four semantic types (danger, info, warning, success) and three
        visual styles (solid, outline, subtle), with optional action buttons and auto-dismiss.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Examples
      </h2>

      <h3 id="solid" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Solid
      </h3>
      <div className="mt-3">
        <ComponentPreview name="toast/toast-solid">
          <ToastSolid />
        </ComponentPreview>
      </div>

      <h3 id="outline" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Outline
      </h3>
      <div className="mt-3">
        <ComponentPreview name="toast/toast-outline">
          <ToastOutline />
        </ComponentPreview>
      </div>

      <h3 id="subtle" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Subtle
      </h3>
      <div className="mt-3">
        <ComponentPreview name="toast/toast-subtle">
          <ToastSubtle />
        </ComponentPreview>
      </div>

      <h3 id="imperative" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Imperative API
      </h3>
      <div className="mt-3">
        <ComponentPreview name="toast/toast-imperative">
          <ToastImperative />
        </ComponentPreview>
      </div>

      <h3 id="with-action" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        With Action
      </h3>
      <div className="mt-3">
        <ComponentPreview name="toast/toast-with-action">
          <ToastWithAction />
        </ComponentPreview>
      </div>

      <h3 id="promise" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Promise
      </h3>
      <div className="mt-3">
        <ComponentPreview name="toast/toast-promise">
          <ToastPromise />
        </ComponentPreview>
      </div>

      <h3 id="no-icon" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        No Icon
      </h3>
      <div className="mt-3">
        <ComponentPreview name="toast/toast-no-icon">
          <ToastNoIcon />
        </ComponentPreview>
      </div>

      <h3 id="no-close" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        No Close Button
      </h3>
      <div className="mt-3">
        <ComponentPreview name="toast/toast-no-close">
          <ToastNoClose />
        </ComponentPreview>
      </div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Detail
      </h2>
      <ToastDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Installation
      </h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Usage
      </h2>
      <div className="mt-4 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
        <CodeBlock code={TOASTER_USAGE} />
      </div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        API Reference
      </h2>

      <h3 id="api-toast-fn" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">toast() options</h3>
      <p className="mt-1 text-sm text-muted-foreground">Options passed as the second argument to <code className="rounded bg-muted px-1 py-0.5 text-xs">toast(message, options)</code> and all method variants.</p>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Option</th>
            <th className="px-4 py-3 font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 font-semibold text-foreground">Default</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">id</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string | number</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">auto-generated</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">duration</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">4000</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">action</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">{"{ label: string; onClick: () => void }"}</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">onDismiss</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(t: ToastData) =&gt; void</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">onAutoClose</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(t: ToastData) =&gt; void</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">type ✦</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;danger&quot; | &quot;info&quot; | &quot;warning&quot; | &quot;success&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;danger&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">style ✦</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;solid&quot; | &quot;outline&quot; | &quot;subtle&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;solid&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">showIcon ✦</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">true</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">showClose ✦</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">true</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">✦ Design-system extension — not part of shadcn Sonner.</p>

      <h3 id="api-toaster" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Toaster</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
            <th className="px-4 py-3 font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 font-semibold text-foreground">Default</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">position</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;top-right&quot; | &quot;top-left&quot; | &quot;top-center&quot; | &quot;bottom-right&quot; | &quot;bottom-left&quot; | &quot;bottom-center&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;bottom-right&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">duration</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">4000</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">closeButton</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">true</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-toast-jsx" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Toast (JSX)</h3>
      <p className="mt-1 text-sm text-muted-foreground">The presentational component. Use when you want to compose toasts manually without the imperative API.</p>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
            <th className="px-4 py-3 font-semibold text-foreground">Type</th>
            <th className="px-4 py-3 font-semibold text-foreground">Default</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">message</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">type</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;danger&quot; | &quot;info&quot; | &quot;warning&quot; | &quot;success&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;danger&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">style</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;solid&quot; | &quot;outline&quot; | &quot;subtle&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;solid&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">actionLabel</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">onAction</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">() =&gt; void</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">showClose</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">true</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">onClose</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">() =&gt; void</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">showIcon</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">true</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="variant-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Variant Reference
      </h2>
      <h3 id="variant-type" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">Type</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Variant</th>
            <th className="px-4 py-3 font-semibold text-foreground">Use Case</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">danger</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">Errors, failures, or actions that need immediate attention</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">info</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">Neutral information, tips, or background process updates</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">warning</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">Cautions or situations that require awareness</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">success</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">Confirmation that an action completed successfully</td></tr>
          </tbody>
        </table>
      </div>
      <h3 id="variant-style" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Style</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted">
            <th className="px-4 py-3 font-semibold text-foreground">Variant</th>
            <th className="px-4 py-3 font-semibold text-foreground">Use Case</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">solid</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">Default — strong visual presence with a colored background</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">outline</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">White background with a colored border for less visual weight</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">subtle</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">White background, no border — minimal, unobtrusive</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToastPage;
