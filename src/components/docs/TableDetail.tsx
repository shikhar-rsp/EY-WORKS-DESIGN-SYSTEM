"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/figma/Table";

export const TableDetail = () => {
  return (
    <div className="font-preview-scope color-preview-scope">
      {/* ── Preview ───────────────────────────────────────────────── */}
      <h3
        id="detail-preview"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Preview
      </h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead label="Name" sortable />
              <TableHead label="Role" />
              <TableHead label="Status" />
              <TableHead label="Joined" align="right" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { name: "Alice Johnson", role: "Designer", status: "Active", joined: "Jan 2024" },
              { name: "Bob Smith", role: "Engineer", status: "Active", joined: "Mar 2024" },
              { name: "Carol White", role: "PM", status: "Inactive", joined: "Jun 2023" },
            ].map((row, i, arr) => (
              <TableRow key={i}>
                <TableCell isLast={i === arr.length - 1}>
                  <span className="font-lexend text-sm text-foreground">{row.name}</span>
                </TableCell>
                <TableCell isLast={i === arr.length - 1}>
                  <span className="font-lexend text-sm text-muted-foreground">{row.role}</span>
                </TableCell>
                <TableCell isLast={i === arr.length - 1}>
                  <span className={`font-lexend text-xs font-medium px-2 py-0.5 rounded-full ${row.status === "Active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell isLast={i === arr.length - 1} align="right">
                  <span className="font-lexend text-sm text-muted-foreground">{row.joined}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* ── Header Variants ───────────────────────────────────────── */}
      <h3
        id="detail-header-variants"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Header Variants
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Default, sortable, and dropdown header cell types.
      </p>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead label="Default" />
              <TableHead label="Sortable" sortable />
              <TableHead label="With Dropdown" hasDropdown />
              <TableHead label="Right Aligned" align="right" />
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell isLast><span className="font-lexend text-sm text-foreground">Default cell</span></TableCell>
              <TableCell isLast><span className="font-lexend text-sm text-foreground">Sorted cell</span></TableCell>
              <TableCell isLast><span className="font-lexend text-sm text-foreground">Dropdown cell</span></TableCell>
              <TableCell isLast align="right"><span className="font-lexend text-sm text-foreground">Right cell</span></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* ── Cell Content Types ────────────────────────────────────── */}
      <h3
        id="detail-cell-content"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Cell Content Types
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        TableCell accepts any children — text, badges, avatars, icons, controls.
      </p>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead label="Text" />
              <TableHead label="Badge" />
              <TableHead label="Muted Text" />
              <TableHead label="Number" align="right" />
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell isLast>
                <span className="font-lexend text-sm font-medium text-foreground">Product Name</span>
              </TableCell>
              <TableCell isLast>
                <span className="inline-flex items-center rounded-full bg-primary-subtle px-2 py-0.5 text-xs font-medium text-primary">
                  Featured
                </span>
              </TableCell>
              <TableCell isLast>
                <span className="font-lexend text-sm text-muted-foreground">Supporting text</span>
              </TableCell>
              <TableCell isLast align="right">
                <span className="font-lexend text-sm font-semibold text-foreground tabular-nums">$1,240.00</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell isLast>
                <div className="flex flex-col gap-0.5">
                  <span className="font-lexend text-sm font-medium text-foreground">Multi-line</span>
                  <span className="font-lexend text-xs text-muted-foreground">Subtitle text</span>
                </div>
              </TableCell>
              <TableCell isLast>
                <span className="inline-flex items-center rounded-full bg-destructive-subtle px-2 py-0.5 text-xs font-medium text-destructive">
                  Urgent
                </span>
              </TableCell>
              <TableCell isLast>
                <span className="font-lexend text-sm text-muted-foreground">user@example.com</span>
              </TableCell>
              <TableCell isLast align="right">
                <span className="font-lexend text-sm font-semibold text-success tabular-nums">+24%</span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* ── Row Hover States ──────────────────────────────────────── */}
      <h3
        id="detail-states"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Row Hover & States
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Hover over rows to see the highlight. Last row uses <code className="rounded bg-muted px-1 py-0.5 text-xs">isLast</code> to remove the bottom border.
      </p>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead label="Row" />
              <TableHead label="State" />
              <TableHead label="Note" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { row: "Row 1", state: "Default / Hover", note: "Hover to highlight" },
              { row: "Row 2", state: "Default / Hover", note: "Hover to highlight" },
              { row: "Row 3 (last)", state: "No bottom border", note: "isLast removes border-b" },
            ].map((r, i, arr) => (
              <TableRow key={i}>
                <TableCell isLast={i === arr.length - 1}>
                  <span className="font-lexend text-sm text-foreground">{r.row}</span>
                </TableCell>
                <TableCell isLast={i === arr.length - 1}>
                  <span className="font-lexend text-sm text-muted-foreground">{r.state}</span>
                </TableCell>
                <TableCell isLast={i === arr.length - 1}>
                  <span className="font-lexend text-xs text-muted-foreground">{r.note}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
