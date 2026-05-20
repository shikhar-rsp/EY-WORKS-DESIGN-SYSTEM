import type { Metadata } from "next";

import { InputGroupDetail } from "@/components/docs/InputGroupDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { InputGroupWithIcon } from "@/examples/input-group/input-group-with-icon";
import { InputGroupWithButton } from "@/examples/input-group/input-group-with-button";
import { InputGroupWithTextarea } from "@/examples/input-group/input-group-with-textarea";

export const metadata: Metadata = {
  title: "Input Group | Design System",
  description: "Compose inputs with leading/trailing icons, text labels, or action buttons. Focus and error states propagate automatically via CSS :has() selectors.",
};

const INSTALL_CODE = `cp src/components/figma/InputGroup.tsx your-project/components/InputGroup.tsx`;

const USAGE_IMPORT = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
  InputGroupText,
  InputGroupButton,
} from "@/components/figma/InputGroup"`;

const USAGE_CODE = `{/* With leading icon */}
<InputGroup>
  <InputGroupAddon>
    <SearchIcon className="size-4" />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search…" />
</InputGroup>

{/* With trailing button */}
<InputGroup>
  <InputGroupInput placeholder="Password" type="password" />
  <InputGroupAddon align="inline-end">
    <InputGroupButton aria-label="Show password">
      <EyeIcon className="size-4" />
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>

{/* With text label above */}
<InputGroup>
  <InputGroupAddon align="block-start">
    <InputGroupText>Website</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="yoursite.com" />
</InputGroup>`;

const H2 = "mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground";
const H3 = "mt-6 scroll-mt-20 text-lg font-semibold text-foreground";

const InputGroupPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Input Group</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        Composes an input with leading/trailing icons, text labels, or action buttons using a flex layout.
        Focus and error states propagate automatically through CSS <code className="font-mono text-sm">:has()</code> selectors — no manual wiring needed.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className={H2}>Examples</h2>

      <h3 id="with-icon" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">With Icon</h3>
      <div className="mt-3">
        <ComponentPreview name="input-group/input-group-with-icon">
          <InputGroupWithIcon />
        </ComponentPreview>
      </div>

      <h3 id="with-button" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">With Button</h3>
      <div className="mt-3">
        <ComponentPreview name="input-group/input-group-with-button">
          <InputGroupWithButton />
        </ComponentPreview>
      </div>

      <h3 id="with-textarea" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">With Textarea</h3>
      <div className="mt-3">
        <ComponentPreview name="input-group/input-group-with-textarea">
          <InputGroupWithTextarea />
        </ComponentPreview>
      </div>

      <h2 id="detail" className={H2}>Detail</h2>
      <InputGroupDetail />

      <h2 id="installation" className={H2}>Installation</h2>
      <div className="mt-4">
        <CodeBlock code={INSTALL_CODE} />
      </div>

      <h2 id="usage" className={H2}>Usage</h2>
      <div className="mt-4 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      <h2 id="api-reference" className={H2}>API Reference</h2>

      <h3 id="api-inputgroup" className={H3}>InputGroup</h3>
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
              <td className="px-4 py-3 font-mono text-xs">disabled</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-inputgroupaddon" className={H3}>InputGroupAddon</h3>
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
              <td className="px-4 py-3 font-mono text-xs">align</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;inline-start&quot; | &quot;inline-end&quot; | &quot;block-start&quot; | &quot;block-end&quot;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;inline-start&quot;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-inputgroupbutton" className={H3}>InputGroupButton</h3>
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
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;default&quot; | &quot;destructive&quot; | &quot;outline&quot; | &quot;secondary&quot; | &quot;ghost&quot; | &quot;link&quot;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;ghost&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">size</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;xs&quot; | &quot;icon-xs&quot; | &quot;sm&quot; | &quot;icon-sm&quot;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;xs&quot;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-inputgroupinput" className={H3}>InputGroupInput</h3>
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
              <td className="px-4 py-3 font-mono text-xs">...props</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">React.InputHTMLAttributes&lt;HTMLInputElement&gt;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-inputgrouptextarea" className={H3}>InputGroupTextarea</h3>
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
              <td className="px-4 py-3 font-mono text-xs">...props</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">React.TextareaHTMLAttributes&lt;HTMLTextAreaElement&gt;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-inputgrouptext" className={H3}>InputGroupText</h3>
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
              <td className="px-4 py-3 font-mono text-xs">...props</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">React.HTMLAttributes&lt;HTMLSpanElement&gt;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InputGroupPage;
