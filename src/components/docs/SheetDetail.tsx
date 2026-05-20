"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/figma/Sheet";

const btnBase = "inline-flex h-9 items-center justify-center rounded-medium px-200 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
const btnSecondary = `${btnBase} border border-border bg-background text-foreground hover:bg-muted-hover`;
const btnPrimary = `${btnBase} bg-primary text-primary-foreground hover:bg-primary-hover`;

export const SheetDetail = () => {
  return (
    <div className="mt-6 space-y-10">

      {/* ── Preview ──────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 rounded-large border border-border p-6">
          <Sheet>
            <SheetTrigger className={btnPrimary}>Open Sheet</SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Sheet Title</SheetTitle>
                <SheetDescription>This action cannot be undone.</SheetDescription>
              </SheetHeader>
              <p className="py-200 text-sm text-secondary-foreground">
                Make changes to your profile here.
              </p>
              <SheetFooter>
                <SheetClose className={btnSecondary}>Cancel</SheetClose>
                <SheetClose className={btnPrimary}>Save changes</SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* ── All Sides ────────────────────────────────────────── */}
      <div>
        <h3 id="detail-sides" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          All Sides
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          The <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">side</code> prop controls which edge the sheet slides from.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 rounded-large border border-border p-6">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <Sheet key={side}>
              <SheetTrigger className={btnSecondary}>
                {side.charAt(0).toUpperCase() + side.slice(1)}
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>Sheet — {side}</SheetTitle>
                  <SheetDescription>This sheet slides in from the {side}.</SheetDescription>
                </SheetHeader>
                <div className="py-200 text-sm text-secondary-foreground">Content goes here.</div>
                <SheetFooter>
                  <SheetClose className={btnSecondary}>Close</SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </div>

      {/* ── With Form ────────────────────────────────────────── */}
      <div>
        <h3 id="detail-form" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          With Form
        </h3>
        <div className="mt-4 rounded-large border border-border p-6">
          <Sheet>
            <SheetTrigger className={btnPrimary}>Edit Settings</SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Account Settings</SheetTitle>
                <SheetDescription>Update your account preferences.</SheetDescription>
              </SheetHeader>
              <div className="py-200 space-y-150">
                <div className="flex flex-col gap-075">
                  <label className="text-sm font-medium text-foreground">Display Name</label>
                  <input className="h-9 rounded-medium border border-border-input bg-background px-150 text-sm focus:outline-none focus:ring-2 focus:ring-ring" defaultValue="Muhammad Hasan" />
                </div>
                <div className="flex flex-col gap-075">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <input className="h-9 rounded-medium border border-border-input bg-background px-150 text-sm focus:outline-none focus:ring-2 focus:ring-ring" defaultValue="hasan@example.com" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose className={btnSecondary}>Cancel</SheetClose>
                <SheetClose className={btnPrimary}>Save</SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* ── Controlled ───────────────────────────────────────── */}
      <div>
        <h3 id="detail-controlled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Manual Compose (Portal + Overlay)
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">SheetPortal</code> and{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">SheetOverlay</code> are exported for
          consumers who need to compose the sheet layer manually.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <Sheet>
            <SheetTrigger className={btnSecondary}>Open (default right)</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Composed sheet</SheetTitle>
                <SheetDescription>Uses default right side.</SheetDescription>
              </SheetHeader>
              <div className="py-200 text-sm text-secondary-foreground">
                SheetContent internally uses SheetPortal + SheetOverlay.
              </div>
              <SheetFooter>
                <SheetClose className={btnSecondary}>Close</SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

    </div>
  );
};
