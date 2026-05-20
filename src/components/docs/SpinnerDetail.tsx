"use client";

import { Spinner } from "@/components/figma/Spinner";

export const SpinnerDetail = () => {
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
        <div className="mt-4 flex items-center gap-300">
          <Spinner />
          <Spinner className="size-6" />
          <Spinner className="size-8" />
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3
          id="detail-all-sizes"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Sizes
        </h3>
        <p className="mt-2 text-sm text-muted-foreground font-lexend">
          Override size using Tailwind's <code className="rounded bg-muted px-1 py-0.5 text-xs">size-*</code> utility on <code className="rounded bg-muted px-1 py-0.5 text-xs">className</code>.
        </p>
        <div className="mt-4 flex items-end gap-300">
          {(["size-3", "size-4", "size-5", "size-6", "size-8"] as const).map((sz) => (
            <div key={sz} className="flex flex-col items-center gap-150">
              <Spinner className={sz} />
              <span className="text-xs text-muted-foreground font-lexend">{sz}</span>
            </div>
          ))}
        </div>
      </div>

      {/* With text */}
      <div>
        <h3
          id="detail-with-text"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          With Text
        </h3>
        <div className="mt-4 flex flex-col gap-150">
          <div className="flex items-center gap-150 text-sm font-lexend text-secondary-foreground">
            <Spinner className="size-3" />
            <span>Loading…</span>
          </div>
          <div className="flex items-center gap-150 text-sm font-lexend text-secondary-foreground">
            <Spinner />
            <span>Saving changes…</span>
          </div>
          <div className="flex items-center gap-200 text-base font-lexend text-secondary-foreground">
            <Spinner className="size-6" />
            <span>Processing your request…</span>
          </div>
        </div>
      </div>

      {/* Inside a button */}
      <div>
        <h3
          id="detail-in-button"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Inside a Button
        </h3>
        <div className="mt-4 flex flex-wrap gap-200">
          <button
            disabled
            className="inline-flex items-center gap-100 rounded-medium bg-primary px-200 h-9 text-sm font-medium font-lexend text-primary-foreground cursor-not-allowed opacity-80"
          >
            <Spinner className="size-4 text-primary-foreground" />
            Submitting…
          </button>
          <button
            disabled
            className="inline-flex items-center gap-100 rounded-medium border border-border bg-background px-200 h-9 text-sm font-medium font-lexend text-foreground cursor-not-allowed opacity-80"
          >
            <Spinner />
            Loading…
          </button>
        </div>
      </div>
    </div>
  );
};
