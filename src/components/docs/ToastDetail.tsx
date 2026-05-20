"use client";

import { Toast, toast } from "@/components/figma/Toast";

export const ToastDetail = () => {
  return (
    <div className="font-preview-scope color-preview-scope mt-6 space-y-10">
      {/* ── Preview ───────────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-preview"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Preview
        </h3>
        <div className="mt-3 flex flex-col gap-4 rounded-lg border border-border p-6">
          <Toast
            type="danger"
            style="solid"
            message="Two orders have been duplicated."
            actionLabel="Undo"
          />
          <Toast
            type="info"
            style="solid"
            message="Your report is ready to download."
            actionLabel="Download"
          />
          <Toast
            type="warning"
            style="solid"
            message="Your session will expire in 5 minutes."
            actionLabel="Extend"
          />
          <Toast
            type="success"
            style="solid"
            message="Profile updated successfully."
            actionLabel="View"
          />
        </div>
      </div>

      {/* ── Imperative API ────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-imperative"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Imperative API
        </h3>
        <p className="mt-2 text-sm text-muted-foreground font-lexend">
          Call{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">toast()</code>{" "}
          from any component. The{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            &lt;Toaster /&gt;
          </code>{" "}
          in{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            layout.tsx
          </code>{" "}
          renders the notification stack.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => toast("Something happened.")}
            className="rounded-medium bg-muted px-200 py-100 font-lexend text-sm text-foreground hover:bg-muted-hover transition-colors cursor-pointer"
          >
            toast()
          </button>
          <button
            type="button"
            onClick={() => toast.success("Profile updated successfully.")}
            className="rounded-medium bg-success px-200 py-100 font-lexend text-sm text-background hover:opacity-90 transition-colors cursor-pointer"
          >
            toast.success()
          </button>
          <button
            type="button"
            onClick={() => toast.error("Failed to save changes.")}
            className="rounded-medium bg-destructive px-200 py-100 font-lexend text-sm text-destructive-foreground hover:opacity-90 transition-colors cursor-pointer"
          >
            toast.error()
          </button>
          <button
            type="button"
            onClick={() => toast.info("A new version is available.")}
            className="rounded-medium bg-info px-200 py-100 font-lexend text-sm text-foreground hover:opacity-90 transition-colors cursor-pointer"
          >
            toast.info()
          </button>
          <button
            type="button"
            onClick={() => toast.warning("Your session expires in 5 minutes.")}
            className="rounded-medium bg-warning px-200 py-100 font-lexend text-sm text-foreground hover:opacity-90 transition-colors cursor-pointer"
          >
            toast.warning()
          </button>
          <button
            type="button"
            onClick={() =>
              toast("File removed.", {
                action: {
                  label: "Undo",
                  onClick: () => toast.success("File restored."),
                },
              })
            }
            className="rounded-medium border border-border bg-background px-200 py-100 font-lexend text-sm text-foreground hover:bg-muted transition-colors cursor-pointer"
          >
            toast() with action
          </button>
          <button
            type="button"
            onClick={() =>
              toast.promise(
                new Promise<string>((res) =>
                  setTimeout(() => res("done"), 2000),
                ),
                {
                  loading: "Saving changes…",
                  success: "Changes saved!",
                  error: "Failed to save.",
                },
              )
            }
            className="rounded-medium border border-border bg-background px-200 py-100 font-lexend text-sm text-foreground hover:bg-muted transition-colors cursor-pointer"
          >
            toast.promise()
          </button>
        </div>
      </div>

      {/* ── All Styles ────────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-all-styles"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          All Styles
        </h3>
        <div className="mt-3 flex flex-col gap-6 rounded-lg border border-border p-6">
          <div>
            <p className="font-lexend text-xs text-muted-foreground mb-3">
              style=&quot;solid&quot; (default)
            </p>
            <div className="flex flex-col gap-3">
              <Toast
                type="danger"
                style="solid"
                message="Two orders have been duplicated."
                actionLabel="Undo"
              />
              <Toast
                type="info"
                style="solid"
                message="Two orders have been duplicated."
                actionLabel="Undo"
              />
              <Toast
                type="warning"
                style="solid"
                message="Two orders have been duplicated."
                actionLabel="Undo"
              />
              <Toast
                type="success"
                style="solid"
                message="Two orders have been duplicated."
                actionLabel="Undo"
              />
            </div>
          </div>
          <div>
            <p className="font-lexend text-xs text-muted-foreground mb-3">
              style=&quot;outline&quot;
            </p>
            <div className="flex flex-col gap-3">
              <Toast
                type="danger"
                style="outline"
                message="Two orders have been duplicated."
                actionLabel="Undo"
              />
              <Toast
                type="info"
                style="outline"
                message="Two orders have been duplicated."
                actionLabel="Undo"
              />
              <Toast
                type="warning"
                style="outline"
                message="Two orders have been duplicated."
                actionLabel="Undo"
              />
              <Toast
                type="success"
                style="outline"
                message="Two orders have been duplicated."
                actionLabel="Undo"
              />
            </div>
          </div>
          <div>
            <p className="font-lexend text-xs text-muted-foreground mb-3">
              style=&quot;subtle&quot;
            </p>
            <div className="flex flex-col gap-3">
              <Toast
                type="danger"
                style="subtle"
                message="Two orders have been duplicated."
                actionLabel="Undo"
              />
              <Toast
                type="info"
                style="subtle"
                message="Two orders have been duplicated."
                actionLabel="Undo"
              />
              <Toast
                type="warning"
                style="subtle"
                message="Two orders have been duplicated."
                actionLabel="Undo"
              />
              <Toast
                type="success"
                style="subtle"
                message="Two orders have been duplicated."
                actionLabel="Undo"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── With Action ───────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-with-action"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          With Action
        </h3>
        <p className="mt-1 text-sm text-muted-foreground font-lexend">
          Pass{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            actionLabel
          </code>{" "}
          and{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">onAction</code>{" "}
          (JSX) or{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            action: {"{ label, onClick }"}
          </code>{" "}
          (imperative) to render an inline CTA.
        </p>
        <div className="mt-3 flex flex-col gap-3 rounded-lg border border-border p-6">
          <Toast
            type="danger"
            style="solid"
            message="Two orders have been duplicated."
            actionLabel="Undo"
          />
          <Toast
            type="info"
            style="outline"
            message="A new version is available."
            actionLabel="Update now"
          />
          <Toast
            type="success"
            style="solid"
            message="File exported to your downloads."
            actionLabel="Open file"
          />
        </div>
      </div>

      {/* ── Without Icon ──────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-no-icon"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Without Icon
        </h3>
        <p className="mt-1 text-sm text-muted-foreground font-lexend">
          Set{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            showIcon={"{false}"}
          </code>{" "}
          to hide the leading status icon.
        </p>
        <div className="mt-3 flex flex-col gap-3 rounded-lg border border-border p-6">
          <Toast
            type="danger"
            style="solid"
            message="Two orders have been duplicated."
            showIcon={false}
            actionLabel="Undo"
          />
          <Toast
            type="info"
            style="subtle"
            message="Your report is generating…"
            showIcon={false}
          />
        </div>
      </div>

      {/* ── Without Close ─────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-no-close"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Without Close Button
        </h3>
        <p className="mt-1 text-sm text-muted-foreground font-lexend">
          Set{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            showClose={"{false}"}
          </code>{" "}
          for non-dismissible toasts.
        </p>
        <div className="mt-3 flex flex-col gap-3 rounded-lg border border-border p-6">
          <Toast
            type="info"
            style="solid"
            message="Loading your dashboard data…"
            showClose={false}
          />
          <Toast
            type="warning"
            style="outline"
            message="This action is irreversible."
            showClose={false}
            actionLabel="Confirm"
          />
        </div>
      </div>

      {/* ── States ────────────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-states"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          States
        </h3>
        <div className="mt-3 flex flex-col gap-4 rounded-lg border border-border p-6">
          <div>
            <p className="font-lexend text-xs text-muted-foreground mb-2">
              Default (with icon + action + close)
            </p>
            <Toast
              type="danger"
              style="solid"
              message="Something went wrong. Please try again."
              actionLabel="Retry"
            />
          </div>
          <div>
            <p className="font-lexend text-xs text-muted-foreground mb-2">
              Message only (no action, no close)
            </p>
            <Toast
              type="success"
              style="solid"
              message="Your account has been verified."
              showClose={false}
            />
          </div>
          <div>
            <p className="font-lexend text-xs text-muted-foreground mb-2">
              Text + close (no action)
            </p>
            <Toast
              type="warning"
              style="outline"
              message="Your free trial ends in 3 days."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
