import type { Metadata } from "next";

import { ButtonDefault } from "@/examples/button/button-default";
import { ButtonOutline } from "@/examples/button/button-outline";
import { ButtonDestructive } from "@/examples/button/button-destructive";
import { ButtonGhost } from "@/examples/button/button-ghost";
import { ButtonLink } from "@/examples/button/button-link";
import { ButtonWithIcon } from "@/examples/button/button-with-icon";
import { ButtonSizes } from "@/examples/button/button-sizes";
import { ButtonDisabled } from "@/examples/button/button-disabled";
import { ButtonDetail } from "@/components/docs/ButtonDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";

export const metadata: Metadata = {
  title: "Button | Design System",
  description:
    "Displays a button or a component that looks like a button. Supports 6 shadcn canonical variants plus project-specific extras, 4 sizes, icon slots, and notification dot.",
};

const INSTALL_CODE = `cp src/components/figma/Button.tsx your-project/components/Button.tsx`;

const USAGE_IMPORT = `import { Button } from "@/components/figma/Button"`;

const USAGE_CODE = `<Button variant="default">Click me</Button>
<Button variant="outline" leadingIcon={<ArrowIcon />}>Back</Button>
<Button variant="destructive" isDisabled>Delete</Button>
<Button variant="ghost" size="icon" iconOnly leadingIcon={<CopyIcon />} />`;

const ButtonPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Button</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        Displays a button or a component that looks like a button. Supports 6 shadcn canonical
        variants (<code className="rounded bg-muted px-1 py-0.5 text-xs">default</code>,{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">destructive</code>,{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">outline</code>,{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">secondary</code>,{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">ghost</code>,{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">link</code>) plus project-specific
        extras, 4 sizes, leading/trailing icon slots, icon-only mode, and notification dot.
      </p>

      {/* ── Brand Toolbar ─────────────────────────────────────────── */}
      <BrandPreviewToolbar />

      {/* ── Examples placeholder — filled by generate-docs ────────── */}
      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Examples
      </h2>
      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Default
      </h3>
      <div className="mt-3">
        <ComponentPreview name="button/button-default">
          <ButtonDefault />
        </ComponentPreview>
      </div>

      <h3 id="outline" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Outline
      </h3>
      <div className="mt-3">
        <ComponentPreview name="button/button-outline">
          <ButtonOutline />
        </ComponentPreview>
      </div>

      <h3 id="destructive" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Destructive
      </h3>
      <div className="mt-3">
        <ComponentPreview name="button/button-destructive">
          <ButtonDestructive />
        </ComponentPreview>
      </div>

      <h3 id="ghost" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Ghost
      </h3>
      <div className="mt-3">
        <ComponentPreview name="button/button-ghost">
          <ButtonGhost />
        </ComponentPreview>
      </div>

      <h3 id="link" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Link
      </h3>
      <div className="mt-3">
        <ComponentPreview name="button/button-link">
          <ButtonLink />
        </ComponentPreview>
      </div>

      <h3 id="with-icon" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        With Icon
      </h3>
      <div className="mt-3">
        <ComponentPreview name="button/button-with-icon">
          <ButtonWithIcon />
        </ComponentPreview>
      </div>

      <h3 id="sizes" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Sizes
      </h3>
      <div className="mt-3">
        <ComponentPreview name="button/button-sizes">
          <ButtonSizes />
        </ComponentPreview>
      </div>

      <h3 id="disabled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Disabled
      </h3>
      <div className="mt-3">
        <ComponentPreview name="button/button-disabled">
          <ButtonDisabled />
        </ComponentPreview>
      </div>

      {/* ── Detail ────────────────────────────────────────────────── */}
      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Detail
      </h2>
      <ButtonDetail />

      {/* ── Installation ──────────────────────────────────────────── */}
      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Installation
      </h2>
      <p className="mt-3 text-sm text-secondary-foreground">Copy the component file into your project.</p>
      <div className="mt-3">
        <CodeBlock code={INSTALL_CODE} />
      </div>

      {/* ── Usage ─────────────────────────────────────────────────── */}
      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Usage
      </h2>
      <div className="mt-3 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      {/* ── API Reference ─────────────────────────────────────────── */}
      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        API Reference
      </h2>

      <h3 id="api-button" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Button</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">variant</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ButtonVariantTypes</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;default&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">size</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ButtonSizeTypes</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;default&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">isDisabled</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">iconOnly</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">leadingIcon</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">trailingIcon</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">notificationDot</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">notificationCount</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">notificationColor</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;danger&quot; | &quot;information&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;danger&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">children</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      {/* ── Variant Reference ─────────────────────────────────────── */}
      <h2 id="variant-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Variant Reference
      </h2>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Variant</th><th className="px-4 py-3 font-semibold text-foreground">Use Case</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">default</td><td className="px-4 py-3 text-secondary-foreground">Main CTA — confirm, save, submit, proceed</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">destructive</td><td className="px-4 py-3 text-secondary-foreground">Destructive actions — delete, remove, reset</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">outline</td><td className="px-4 py-3 text-secondary-foreground">Outlined secondary — cancel, back, alternate action</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">secondary</td><td className="px-4 py-3 text-secondary-foreground">Muted filled secondary — low-priority paired action</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">ghost</td><td className="px-4 py-3 text-secondary-foreground">Ghost brand — low-emphasis, inline alongside primary</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">link</td><td className="px-4 py-3 text-secondary-foreground">Inline hyperlink-style — navigation, read more</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">tertiary-grey</td><td className="px-4 py-3 text-secondary-foreground">Ghost neutral — low-emphasis, neutral context</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">tertiary-white</td><td className="px-4 py-3 text-secondary-foreground">Ghost white — use on dark or brand-colored backgrounds</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">grey</td><td className="px-4 py-3 text-secondary-foreground">Neutral filled — subtle actions on light backgrounds</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">white</td><td className="px-4 py-3 text-secondary-foreground">White filled — use inside colored or brand surfaces</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">dashed</td><td className="px-4 py-3 text-secondary-foreground">Dashed add-action — add item, create new, placeholder slot</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">skeleton</td><td className="px-4 py-3 text-secondary-foreground">Loading shimmer — content loading placeholder</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ButtonPage;
