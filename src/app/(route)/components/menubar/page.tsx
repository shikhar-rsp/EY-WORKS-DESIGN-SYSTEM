import type { Metadata } from "next";

import { MenubarDetail } from "@/components/docs/MenubarDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { MenubarDefault } from "@/examples/menubar/menubar-default";
import { MenubarWithShortcuts } from "@/examples/menubar/menubar-with-shortcuts";
import { MenubarWithCheckbox } from "@/examples/menubar/menubar-with-checkbox";

export const metadata: Metadata = {
  title: "Menubar | Design System",
  description: "A horizontal menu bar with dropdown menus for navigation-heavy applications.",
};

const INSTALL_CODE = `cp src/components/figma/Menubar.tsx your-project/components/Menubar.tsx`;
const USAGE_IMPORT = `import {
  Menubar,
  MenubarMenu,
  MenubarPortal,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarSeparator,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "@/components/figma/Menubar"`;
const USAGE_CODE = `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarGroup>
        <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
        <MenubarItem>New Window <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
      </MenubarGroup>
      <MenubarSeparator />
      <MenubarItem variant="destructive">Delete</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`;

const MenubarPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Menubar</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A horizontal menu bar typically used in desktop-style applications. Supports hover navigation between menus, keyboard shortcuts, checkboxes, radio groups, and nested sub-menus. Items support <code className="font-mono text-sm">variant=&quot;destructive&quot;</code> for danger actions.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Examples</h2>

      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <div className="mt-3">
        <ComponentPreview name="menubar/menubar-default">
          <MenubarDefault />
        </ComponentPreview>
      </div>

      <h3 id="with-shortcuts" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">With Keyboard Shortcuts</h3>
      <div className="mt-3">
        <ComponentPreview name="menubar/menubar-with-shortcuts">
          <MenubarWithShortcuts />
        </ComponentPreview>
      </div>

      <h3 id="with-checkbox" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">With Checkbox Items</h3>
      <div className="mt-3">
        <ComponentPreview name="menubar/menubar-with-checkbox">
          <MenubarWithCheckbox />
        </ComponentPreview>
      </div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Detail</h2>
      <MenubarDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
      <div className="mt-4 space-y-3"><CodeBlock code={USAGE_IMPORT} /><CodeBlock code={USAGE_CODE} /></div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">API Reference</h2>

      <h3 id="api-menubar" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">Menubar</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-menubarmenu" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">MenubarMenu</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">value</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">auto-generated</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-menubarcontent" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">MenubarContent</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">side</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;top&quot; | &quot;right&quot; | &quot;bottom&quot; | &quot;left&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;bottom&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">sideOffset</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">4</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">align</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;start&quot; | &quot;center&quot; | &quot;end&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;start&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">alignOffset</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">0</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-menubaritem" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">MenubarItem</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">variant</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;default&quot; | &quot;destructive&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;default&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">inset</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">disabled</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-menubarcheckboxitem" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">MenubarCheckboxItem</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">checked</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">onCheckedChange</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(checked: boolean) =&gt; void</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-menubarradiogroup" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">MenubarRadioGroup</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">value</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">onValueChange</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(value: string) =&gt; void</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-menubarradioitem" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">MenubarRadioItem</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">value</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">required</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="variant-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Variant Reference</h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Variant</th><th className="px-4 py-3 font-semibold text-foreground">Use Case</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">default</td><td className="px-4 py-3 text-secondary-foreground">Standard menu item with muted hover</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">destructive</td><td className="px-4 py-3 text-secondary-foreground">Danger actions (delete, remove, reset) — red text</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenubarPage;
