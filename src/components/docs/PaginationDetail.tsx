"use client";

import { useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/figma/Pagination";

// ─── Shared helper ────────────────────────────────────────────────

interface ISimplePaginationProps {
  total: number;
  initialPage?: number;
}

const SimplePagination = (props: ISimplePaginationProps) => {
  const { total, initialPage = 1 } = props;
  const [page, setPage] = useState(initialPage);

  const go = (n: number) => setPage(Math.max(1, Math.min(total, n)));

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => go(page - 1)} aria-disabled={page === 1} />
        </PaginationItem>
        {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
          <PaginationItem key={p}>
            <PaginationLink isActive={p === page} onClick={() => go(p)}>{p}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext onClick={() => go(page + 1)} aria-disabled={page === total} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

// ─── Ellipsis pagination ──────────────────────────────────────────

interface IEllipsisPaginationProps {
  total: number;
  initialPage?: number;
}

const EllipsisPagination = (props: IEllipsisPaginationProps) => {
  const { total, initialPage = 1 } = props;
  const [page, setPage] = useState(initialPage);

  const go = (n: number) => setPage(Math.max(1, Math.min(total, n)));

  const getPages = (): (number | "ellipsis")[] => {
    if (page <= 3) return [1, 2, 3, "ellipsis", total];
    if (page >= total - 2) return [1, "ellipsis", total - 2, total - 1, total];
    return [1, "ellipsis", page - 1, page, page + 1, "ellipsis", total];
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => go(page - 1)} aria-disabled={page === 1} />
        </PaginationItem>
        {getPages().map((p, i) =>
          p === "ellipsis" ? (
            <PaginationItem key={`e-${i}`}><PaginationEllipsis /></PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink isActive={p === page} onClick={() => go(p)}>{p}</PaginationLink>
            </PaginationItem>
          ),
        )}
        <PaginationItem>
          <PaginationNext onClick={() => go(page + 1)} aria-disabled={page === total} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

// ═══════════════════════════════════════════════════════════════════

export const PaginationDetail = () => {
  return (
    <div className="font-preview-scope color-preview-scope mt-6 space-y-10">

      {/* ── Preview ─────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 rounded-large border border-border p-6">
          <SimplePagination total={5} initialPage={2} />
        </div>
      </div>

      {/* ── With Ellipsis ────────────────────────────────────────── */}
      <div>
        <h3 id="detail-ellipsis" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          With Ellipsis
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Use <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">PaginationEllipsis</code> to indicate skipped pages.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <EllipsisPagination total={10} initialPage={5} />
        </div>
      </div>

      {/* ── First Page (Previous disabled) ───────────────────────── */}
      <div>
        <h3 id="detail-first-page" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          First Page
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          On the first page, Previous is visually disabled via <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">aria-disabled</code>.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <SimplePagination total={5} initialPage={1} />
        </div>
      </div>

      {/* ── Active Middle ─────────────────────────────────────────── */}
      <div>
        <h3 id="detail-active-middle" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Active Middle Page
        </h3>
        <div className="mt-4 rounded-large border border-border p-6">
          <EllipsisPagination total={10} initialPage={5} />
        </div>
      </div>

    </div>
  );
};
