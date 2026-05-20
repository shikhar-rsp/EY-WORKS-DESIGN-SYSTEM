import type { Metadata } from "next";

import { ListDefault } from "@/examples/list/list-default";
import { ListWithActions } from "@/examples/list/list-with-actions";
import { ListBordered } from "@/examples/list/list-bordered";
import { ListDetail } from "@/components/docs/ListDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";

export const metadata: Metadata = {
  title: "List | Design System",
  description:
    "A compound list component with support for media, content, actions, optional borders, and dividers.",
};

const INSTALL_CODE = `cp src/components/figma/List.tsx your-project/components/List.tsx`;

const USAGE_IMPORT = `import {
  List,
  ListItem,
  ListItemMedia,
  ListItemContent,
  ListItemTitle,
  ListItemDescription,
  ListItemActions,
  ListHeader,
  ListFooter,
} from "@/components/figma/List"`;

const USAGE_CODE = `<List bordered>
  <ListItem>
    <ListItemMedia>
      <Avatar fallback="JD" />
    </ListItemMedia>
    <ListItemContent>
      <ListItemTitle>Jane Doe</ListItemTitle>
      <ListItemDescription>Product Designer</ListItemDescription>
    </ListItemContent>
    <ListItemActions>
      <Button variant="secondary" size="compact">Edit</Button>
    </ListItemActions>
  </ListItem>
</List>`;

const ListPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">List</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A compound list component for presenting collections of items with optional media, content,
        and action slots. Supports bordered/split variants, three sizes, and header/footer sections.
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
      <div className="mt-3">
        <ComponentPreview name="list/list-default">
          <ListDefault />
        </ComponentPreview>
      </div>

      <h3 id="with-actions" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        With Actions
      </h3>
      <div className="mt-3">
        <ComponentPreview name="list/list-with-actions">
          <ListWithActions />
        </ComponentPreview>
      </div>

      <h3 id="bordered" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Bordered
      </h3>
      <div className="mt-3">
        <ComponentPreview name="list/list-bordered">
          <ListBordered />
        </ComponentPreview>
      </div>

      {/* ── Detail ────────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <ListDetail />

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

      <h3 id="api-list" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        List
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
              <td className="px-4 py-3 font-mono text-xs">bordered</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">split</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">true</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">size</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;sm&quot; | &quot;default&quot; | &quot;lg&quot;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;default&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-list-item" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        ListItem / ListItemMedia / ListItemContent / ListItemTitle / ListItemDescription / ListItemActions
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
    </div>
  );
};

export default ListPage;
