import type { Metadata } from "next";

import { CommandDefault } from "@/examples/command/command-default";
import { CommandDetail } from "@/components/docs/CommandDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";

export const metadata: Metadata = {
  title: "Command | Design System",
  description: "Fast, composable command palette with real-time search filtering and keyboard navigation.",
};

const INSTALL_CODE = `cp src/components/figma/Command.tsx your-project/components/Command.tsx`;
const USAGE_IMPORT = `import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@/components/figma/Command"`;
const USAGE_CODE = `<Command>
  <CommandInput placeholder="Search…" />
  <CommandList>
    <CommandEmpty />
    <CommandGroup heading="Suggestions">
      <CommandItem value="profile" keywords={["account"]} onSelect={(v) => console.log(v)}>
        Profile
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`;

const CommandPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Command</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A composable command palette with real-time search filtering and keyboard navigation. Items hide in real time as the user types. Can be used inline or inside a <code className="font-mono text-sm">CommandDialog</code> for a ⌘K-style palette.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Examples
      </h2>
      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Default
      </h3>
      <div className="mt-3">
        <ComponentPreview name="command/command-default">
          <CommandDefault />
        </ComponentPreview>
      </div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">
        Detail
      </h2>
      <CommandDetail />

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

      <h3 id="api-command" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">
        Command
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
              <td className="px-4 py-3 font-mono text-xs">filter</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(value, search, keywords?) =&gt; boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">includes match</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">shouldFilter</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">true</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">loop</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-command-dialog" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">
        CommandDialog
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
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onOpenChange</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(open: boolean) =&gt; void</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-command-item" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">
        CommandItem
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
              <td className="px-4 py-3 font-mono text-xs">keywords</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string[]</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">[]</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onSelect</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(value: string) =&gt; void</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-command-group" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">
        CommandGroup
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
              <td className="px-4 py-3 font-mono text-xs">heading</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommandPage;
