import type { Metadata } from "next";

import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { TableDetail } from "@/components/docs/TableDetail";
import { TableBasic } from "@/examples/table/table-basic";
import { TableSortable } from "@/examples/table/table-sortable";
import { TableRichCells } from "@/examples/table/table-rich-cells";

export const metadata: Metadata = {
  title: "Table | Design System",
  description:
    "Table is a semantic data grid component with sortable columns, rich cell content, and row-level hover states.",
};

const INSTALL_CODE = `cp src/components/figma/Table.tsx your-project/components/Table.tsx`;

const USAGE_IMPORT = `import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/figma/Table"`;

const USAGE_CODE = `<Table>
  <TableHeader>
    <TableRow>
      <TableHead label="Name" sortable />
      <TableHead label="Role" />
      <TableHead label="Status" align="right" />
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>
        <span>Alice Johnson</span>
      </TableCell>
      <TableCell>
        <span>Designer</span>
      </TableCell>
      <TableCell align="right">
        <span>Active</span>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`;

const TablePage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <h1 className="text-4xl font-bold text-foreground">Table</h1>
      <p className="mt-3 text-sm text-secondary-foreground">
        A semantic data grid built from composable sub-components — header,
        body, row, head, and cell. Supports sortable columns, right-aligned
        numeric data, and row-level hover highlighting. Cell content is fully
        flexible via children.
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

      <h3 id="basic" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Basic Table
      </h3>
      <ComponentPreview name="table/table-basic">
        <TableBasic />
      </ComponentPreview>

      <h3 id="sortable" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Sortable Columns
      </h3>
      <ComponentPreview name="table/table-sortable">
        <TableSortable />
      </ComponentPreview>

      <h3 id="rich-cells" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Rich Cell Content
      </h3>
      <ComponentPreview name="table/table-rich-cells">
        <TableRichCells />
      </ComponentPreview>

      {/* ── Detail ────────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <TableDetail />

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
      <div className="mt-3">
        <CodeBlock code={USAGE_IMPORT} />
      </div>
      <div className="mt-3">
        <CodeBlock code={USAGE_CODE} />
      </div>

      {/* ── API Reference ─────────────────────────────────────────── */}
      <h2
        id="api-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        API Reference
      </h2>

      <h3 id="api-table" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Table
      </h3>
      <div className="mt-3 overflow-hidden rounded-large border border-border">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
                <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
                <th className="px-4 py-3 text-left font-medium text-foreground">Default</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 text-foreground"><code>className</code></td>
                <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
                <td className="px-4 py-3 text-muted-foreground">—</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground"><code>children</code></td>
                <td className="px-4 py-3 text-muted-foreground"><code>ReactNode</code></td>
                <td className="px-4 py-3 text-muted-foreground">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 id="api-tablehead" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        TableHead
      </h3>
      <div className="mt-3 overflow-hidden rounded-large border border-border">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
                <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
                <th className="px-4 py-3 text-left font-medium text-foreground">Default</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 text-foreground"><code>type</code></td>
                <td className="px-4 py-3 text-muted-foreground"><code>"default" | "checkbox" | "dropdown"</code></td>
                <td className="px-4 py-3 text-muted-foreground"><code>"default"</code></td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground"><code>align</code></td>
                <td className="px-4 py-3 text-muted-foreground"><code>"left" | "right"</code></td>
                <td className="px-4 py-3 text-muted-foreground"><code>"left"</code></td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground"><code>sortable</code></td>
                <td className="px-4 py-3 text-muted-foreground"><code>boolean</code></td>
                <td className="px-4 py-3 text-muted-foreground"><code>false</code></td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground"><code>hasDropdown</code></td>
                <td className="px-4 py-3 text-muted-foreground"><code>boolean</code></td>
                <td className="px-4 py-3 text-muted-foreground"><code>false</code></td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground"><code>label</code></td>
                <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
                <td className="px-4 py-3 text-muted-foreground">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 id="api-tablecell" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        TableCell
      </h3>
      <div className="mt-3 overflow-hidden rounded-large border border-border">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
                <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
                <th className="px-4 py-3 text-left font-medium text-foreground">Default</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 text-foreground"><code>align</code></td>
                <td className="px-4 py-3 text-muted-foreground"><code>"left" | "right"</code></td>
                <td className="px-4 py-3 text-muted-foreground"><code>"left"</code></td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground"><code>isLast</code></td>
                <td className="px-4 py-3 text-muted-foreground"><code>boolean</code></td>
                <td className="px-4 py-3 text-muted-foreground"><code>false</code></td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-foreground"><code>children</code></td>
                <td className="px-4 py-3 text-muted-foreground"><code>ReactNode</code></td>
                <td className="px-4 py-3 text-muted-foreground">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TablePage;
