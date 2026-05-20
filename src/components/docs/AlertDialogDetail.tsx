"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/figma/AlertDialog";

export const AlertDialogDetail = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-10">

      {/* ── Preview ──────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 flex flex-wrap gap-4">
          <AlertDialog>
            <AlertDialogTrigger className="inline-flex h-9 items-center justify-center rounded-medium bg-destructive px-200 text-sm font-medium font-lexend text-destructive-foreground transition-colors hover:bg-destructive-hover cursor-pointer">
              Delete Account
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive-hover">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger className="inline-flex h-9 items-center justify-center rounded-medium border border-border bg-background px-200 text-sm font-medium font-lexend text-foreground transition-colors hover:bg-muted-hover cursor-pointer">
              Confirm Action
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to proceed? This will affect your subscription.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>No, cancel</AlertDialogCancel>
                <AlertDialogAction>Yes, continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* ── Controlled ───────────────────────────────────────────── */}
      <div>
        <h3 id="detail-controlled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Controlled
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Pass <code>open</code> and <code>onOpenChange</code> for controlled mode.
          The dialog state is managed externally.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4 rounded-large border border-border p-6">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-9 cursor-pointer items-center justify-center rounded-medium border border-border bg-background px-200 text-sm font-medium font-lexend text-foreground transition-colors hover:bg-muted-hover"
          >
            Open controlled
          </button>
          <span className="text-xs font-lexend text-muted-foreground">
            open: {String(open)}
          </span>
          <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Controlled Dialog</AlertDialogTitle>
                <AlertDialogDescription>
                  This dialog is in controlled mode. Its state is managed by the
                  parent component via <code>open</code> and <code>onOpenChange</code>.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Confirm</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* ── Destructive Action ────────────────────────────────────── */}
      <div>
        <h3 id="detail-destructive-action" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Destructive Action
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Use <code>AlertDialogAction</code> with a destructive <code>className</code> for
          irreversible operations. The overlay does not close on click — the user must
          explicitly choose.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <AlertDialog>
            <AlertDialogTrigger className="inline-flex h-9 cursor-pointer items-center justify-center rounded-medium bg-destructive px-200 text-sm font-medium font-lexend text-destructive-foreground transition-colors hover:bg-destructive-hover">
              Remove Project
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Remove Project</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently remove <strong>My Project</strong> and all its data.
                  You will not be able to undo this.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Keep it</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive-hover">
                  Yes, remove it
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* ── vs Dialog ────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-vs-dialog" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          vs. Dialog
        </h3>
        <div className="mt-4 rounded-medium border border-border p-200">
          <p className="text-sm text-secondary-foreground">
            <strong className="text-foreground">Alert Dialog</strong> is semantically different from Dialog in two ways:
          </p>
          <ul className="mt-150 list-disc pl-200 space-y-075 text-sm text-secondary-foreground">
            <li>Uses <code className="text-xs bg-muted px-075 py-025 rounded-small">role=&quot;alertdialog&quot;</code> instead of <code className="text-xs bg-muted px-075 py-025 rounded-small">role=&quot;dialog&quot;</code></li>
            <li>The overlay does <strong>not</strong> close the dialog on click — the user must make an explicit choice</li>
            <li>Escape key does not close it either (user must click Cancel or an action)</li>
          </ul>
        </div>
      </div>

    </div>
  );
};
