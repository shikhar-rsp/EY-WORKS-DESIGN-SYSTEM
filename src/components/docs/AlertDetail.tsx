"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/figma/Alert";
import { InformationSquare, CheckmarkCircle02, Alert02, CancelCircle } from "@/components/fragments/icons/catalog";

export const AlertDetail = () => {
  return (
    <div className="mt-6 space-y-10">

      {/* ── Preview ──────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 space-y-3 rounded-large border border-border p-6">
          <Alert>
            <InformationSquare className="size-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <CancelCircle className="size-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* ── Variants ─────────────────────────────────────────── */}
      <div>
        <h3 id="detail-all-variants" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Variants
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Two CVA variants: <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">default</code> and{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">destructive</code>.
        </p>
        <div className="mt-4 space-y-3 rounded-large border border-border p-6">
          <div>
            <span className="mb-2 block font-lexend text-xs text-muted-foreground">default</span>
            <Alert variant="default">
              <InformationSquare className="size-4" />
              <AlertTitle>Default variant</AlertTitle>
              <AlertDescription>Uses background, foreground, and border tokens.</AlertDescription>
            </Alert>
          </div>
          <div>
            <span className="mb-2 block font-lexend text-xs text-muted-foreground">destructive</span>
            <Alert variant="destructive">
              <CancelCircle className="size-4" />
              <AlertTitle>Destructive variant</AlertTitle>
              <AlertDescription>Uses destructive color tokens for error states.</AlertDescription>
            </Alert>
          </div>
        </div>
      </div>

      {/* ── Without icon ─────────────────────────────────────── */}
      <div>
        <h3 id="detail-no-icon" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Without Icon
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Icons are optional. When omitted, the padding adjusts automatically.
        </p>
        <div className="mt-4 space-y-3 rounded-large border border-border p-6">
          <Alert>
            <AlertTitle>No icon — default</AlertTitle>
            <AlertDescription>This alert has no leading icon. The layout adapts automatically.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>No icon — destructive</AlertTitle>
            <AlertDescription>An error state without an icon.</AlertDescription>
          </Alert>
        </div>
      </div>

      {/* ── Title only ───────────────────────────────────────── */}
      <div>
        <h3 id="detail-title-only" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Title Only
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Render just <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">AlertTitle</code> without{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">AlertDescription</code> for a compact one-liner.
        </p>
        <div className="mt-4 space-y-3 rounded-large border border-border p-6">
          <Alert>
            <CheckmarkCircle02 className="size-4" />
            <AlertTitle>Profile updated successfully.</AlertTitle>
          </Alert>
          <Alert>
            <Alert02 className="size-4" />
            <AlertTitle>Your free trial expires in 3 days.</AlertTitle>
          </Alert>
        </div>
      </div>

      {/* ── Composition ──────────────────────────────────────── */}
      <div>
        <h3 id="detail-composition" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Composition
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Because <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">Alert</code> is a compound component,
          you can freely compose title, description, actions, and any icon.
        </p>
        <div className="mt-4 space-y-3 rounded-large border border-border p-6">
          <Alert>
            <InformationSquare className="size-4" />
            <AlertTitle>New version available</AlertTitle>
            <AlertDescription>
              <p>Version 2.4.0 includes bug fixes and performance improvements.</p>
              <div className="mt-3 flex gap-2">
                <button type="button" className="rounded-small bg-primary px-3 py-1 text-xs font-medium text-primary-foreground hover:bg-primary-hover transition-colors">
                  Update now
                </button>
                <button type="button" className="rounded-small border border-border px-3 py-1 text-xs font-medium text-foreground hover:bg-muted transition-colors">
                  Dismiss
                </button>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      </div>

    </div>
  );
};
