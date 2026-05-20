"use client";

import { Skeleton } from "@/components/figma/Skeleton";

export const SkeletonDetail = () => {
  return (
    <div className="mt-6 space-y-10">
      {/* Preview */}
      <div>
        <h3
          id="detail-preview"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Preview
        </h3>
        <div className="mt-4 flex flex-col gap-150 w-64">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>

      {/* Shapes */}
      <div>
        <h3
          id="detail-shapes"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Shapes
        </h3>
        <div className="mt-4 flex flex-wrap items-end gap-300">
          <div className="flex flex-col items-center gap-100">
            <Skeleton className="h-4 w-32" />
            <span className="text-xs text-muted-foreground font-lexend">Line</span>
          </div>
          <div className="flex flex-col items-center gap-100">
            <Skeleton className="h-12 w-32 rounded-medium" />
            <span className="text-xs text-muted-foreground font-lexend">Block</span>
          </div>
          <div className="flex flex-col items-center gap-100">
            <Skeleton className="size-10 rounded-full" />
            <span className="text-xs text-muted-foreground font-lexend">Circle</span>
          </div>
          <div className="flex flex-col items-center gap-100">
            <Skeleton className="size-10 rounded-medium" />
            <span className="text-xs text-muted-foreground font-lexend">Square</span>
          </div>
        </div>
      </div>

      {/* Card skeleton */}
      <div>
        <h3
          id="detail-card"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Card Placeholder
        </h3>
        <div className="mt-4 flex flex-col gap-300 w-64 rounded-large border border-border p-300">
          <Skeleton className="h-32 w-full rounded-medium" />
          <div className="flex flex-col gap-150">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
          <div className="flex items-center gap-150">
            <Skeleton className="size-8 rounded-full" />
            <div className="flex flex-col gap-075 flex-1">
              <Skeleton className="h-3 w-1/2" />
              <Skeleton className="h-3 w-1/3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
