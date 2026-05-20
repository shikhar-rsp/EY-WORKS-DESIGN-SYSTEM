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

const TOTAL_PAGES = 10;

export const PaginationDefault = () => {
  const [currentPage, setCurrentPage] = useState(2);

  const getVisiblePages = (): (number | "ellipsis")[] => {
    if (TOTAL_PAGES <= 5) {
      return Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);
    }
    if (currentPage <= 3) return [1, 2, 3, "ellipsis", TOTAL_PAGES];
    if (currentPage >= TOTAL_PAGES - 2) return [1, "ellipsis", TOTAL_PAGES - 2, TOTAL_PAGES - 1, TOTAL_PAGES];
    return [1, "ellipsis", currentPage, "ellipsis", TOTAL_PAGES];
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>
        {getVisiblePages().map((page, i) =>
          page === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${i}`}><PaginationEllipsis /></PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink isActive={page === currentPage} onClick={() => setCurrentPage(page)}>
                {page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}
        <PaginationItem>
          <PaginationNext
            onClick={() => setCurrentPage((p) => Math.min(TOTAL_PAGES, p + 1))}
            aria-disabled={currentPage === TOTAL_PAGES}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
