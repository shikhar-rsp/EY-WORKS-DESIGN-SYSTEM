import type { Metadata } from "next";

import { ContextMenuDefault } from "@/examples/context-menu/context-menu-default";
import { ContextMenuDetail } from "@/components/docs/ContextMenuDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";

export const metadata: Metadata = {
  title: "Context Menu | Design System",
  description: "Displays a menu to the user, triggered by a right-click or long-press.",
};

const INSTALL_CODE = `cp src/components/figma/ContextMenu.tsx your-project/components/ContextMenu.tsx`;
const USAGE_IMPORT = `import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "@/components/figma/ContextMenu"`;
const USAGE_CODE = `<ContextMenu>
  <ContextMenuTrigger>
    <div className="border border-dashed p-8">Right-click here</div>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuLabel>Actions</ContextMenuLabel>
    <ContextMenuSeparator />
    <ContextMenuItem>Cut <ContextMenuShortcut>⌘X</ContextMenuShortcut></ContextMenuItem>
    <ContextMenuItem>Copy <ContextMenuShortcut>⌘C</ContextMenuShortcut></ContextMenuItem>
    <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`;

const ContextMenuPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Context Menu</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        Displays a contextual menu at the cursor position when the user right-clicks a trigger area. Supports labels, separators, keyboard shortcuts, checkboxes, radio groups, and nested sub-menus.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Examples
      </h2>
      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Default
      </h3>
      <div className="mt-3">
        <ComponentPreview name="context-menu/context-menu-default">
          <ContextMenuDefault />
        </ComponentPreview>
      </div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Detail
      </h2>
      <ContextMenuDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Installation
      </h2>
      <div className="mt-4">
        <CodeBlock code={INSTALL_CODE} />
      </div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Usage
      </h2>
      <div className="mt-4 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        API Reference
      </h2>

      <h3 id="api-context-menu" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">
        ContextMenu
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
              <td className="px-4 py-3 font-mono text-xs">onOpenChange</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(open: boolean) =&gt; void</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-item" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">
        ContextMenuItem
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
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;default&quot; | &quot;destructive&quot;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;default&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">inset</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-checkbox" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">
        ContextMenuCheckboxItem
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
              <td className="px-4 py-3 font-mono text-xs">checked</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onCheckedChange</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(checked: boolean) =&gt; void</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-radio" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">
        ContextMenuRadioGroup
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
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onValueChange</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(value: string) =&gt; void</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="variant-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Variant Reference
      </h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Variant</th>
              <th className="px-4 py-3 font-semibold text-foreground">Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">default</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">Standard menu action</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">destructive</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">Dangerous or irreversible action (delete, remove)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContextMenuPage;
