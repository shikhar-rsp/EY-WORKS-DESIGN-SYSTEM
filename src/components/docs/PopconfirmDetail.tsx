"use client";

import { useState } from "react";

import {
  Popconfirm,
  PopconfirmTrigger,
  PopconfirmContent,
  PopconfirmHeader,
  PopconfirmIcon,
  PopconfirmTitle,
  PopconfirmDescription,
  PopconfirmFooter,
  PopconfirmCancel,
  PopconfirmAction,
} from "@/components/figma/Popconfirm";
import { InformationCircle } from "@/components/fragments/icons/catalog";

const triggerCls =
  "inline-flex h-9 items-center justify-center rounded-medium px-4 font-lexend text-sm font-medium transition-colors cursor-pointer";

export const PopconfirmDetail = () => {
  const [confirmed, setConfirmed] = useState(false);
  const [controlled, setControlled] = useState(false);

  return (
    <div className="mt-6 space-y-10">

      {/* ── Preview ──────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 rounded-large border border-border p-6 flex items-center gap-4 flex-wrap">
          <Popconfirm>
            <PopconfirmTrigger
              className={`${triggerCls} bg-destructive text-destructive-foreground hover:bg-destructive-hover`}
            >
              Delete item
            </PopconfirmTrigger>
            <PopconfirmContent>
              <PopconfirmHeader>
                <PopconfirmIcon />
                <PopconfirmTitle>Delete this item?</PopconfirmTitle>
              </PopconfirmHeader>
              <PopconfirmDescription>
                This action cannot be undone. The item will be permanently removed.
              </PopconfirmDescription>
              <PopconfirmFooter>
                <PopconfirmCancel />
                <PopconfirmAction>Delete</PopconfirmAction>
              </PopconfirmFooter>
            </PopconfirmContent>
          </Popconfirm>
        </div>
      </div>

      {/* ── With onConfirm callback ───────────────────────────────── */}
      <div>
        <h3 id="detail-on-confirm" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          With onConfirm Callback
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Pass <code>onConfirm</code> to the root to run an async action before closing. The OK
          button shows a spinner and Cancel is disabled while the promise is pending.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 flex items-center gap-4 flex-wrap">
          <Popconfirm
            onConfirm={async () => {
              await new Promise((r) => setTimeout(r, 1200));
              setConfirmed(true);
            }}
          >
            <PopconfirmTrigger
              className={`${triggerCls} bg-primary text-primary-foreground hover:bg-primary-hover`}
            >
              Confirm action
            </PopconfirmTrigger>
            <PopconfirmContent>
              <PopconfirmHeader>
                <PopconfirmIcon />
                <PopconfirmTitle>Are you sure?</PopconfirmTitle>
              </PopconfirmHeader>
              <PopconfirmDescription>
                This will trigger the onConfirm callback with a 1.2s delay.
              </PopconfirmDescription>
              <PopconfirmFooter>
                <PopconfirmCancel />
                <PopconfirmAction />
              </PopconfirmFooter>
            </PopconfirmContent>
          </Popconfirm>
          {confirmed && (
            <span className="font-lexend text-sm text-success">
              Confirmed!
            </span>
          )}
        </div>
      </div>

      {/* ── Controlled ───────────────────────────────────────────── */}
      <div>
        <h3 id="detail-controlled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Controlled
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Use <code>open</code> + <code>onOpenChange</code> for externally managed state.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 flex items-center gap-4 flex-wrap">
          <button
            type="button"
            onClick={() => setControlled(true)}
            className={`${triggerCls} border border-border bg-background hover:bg-muted`}
          >
            Open programmatically
          </button>
          <Popconfirm open={controlled} onOpenChange={setControlled}>
            <PopconfirmTrigger
              className={`${triggerCls} bg-primary text-primary-foreground hover:bg-primary-hover`}
            >
              Trigger
            </PopconfirmTrigger>
            <PopconfirmContent>
              <PopconfirmHeader>
                <PopconfirmIcon />
                <PopconfirmTitle>Controlled popconfirm</PopconfirmTitle>
              </PopconfirmHeader>
              <PopconfirmDescription>
                This is controlled by external state.
              </PopconfirmDescription>
              <PopconfirmFooter>
                <PopconfirmCancel />
                <PopconfirmAction />
              </PopconfirmFooter>
            </PopconfirmContent>
          </Popconfirm>
          <span className="font-lexend text-sm text-muted-foreground">
            State: <strong className="text-foreground">{controlled ? "open" : "closed"}</strong>
          </span>
        </div>
      </div>

      {/* ── Custom icon ──────────────────────────────────────────── */}
      <div>
        <h3 id="detail-custom-icon" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Custom Icon
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Pass children to <code>PopconfirmIcon</code> to replace the default warning icon.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 flex items-center gap-4 flex-wrap">
          <Popconfirm>
            <PopconfirmTrigger
              className={`${triggerCls} bg-info text-primary-foreground hover:opacity-90`}
            >
              Info confirm
            </PopconfirmTrigger>
            <PopconfirmContent>
              <PopconfirmHeader>
                <PopconfirmIcon>
                  <InformationCircle className="size-4 text-info-bold" />
                </PopconfirmIcon>
                <PopconfirmTitle>Heads up</PopconfirmTitle>
              </PopconfirmHeader>
              <PopconfirmDescription>
                This uses a custom info icon instead of the default warning icon.
              </PopconfirmDescription>
              <PopconfirmFooter>
                <PopconfirmCancel />
                <PopconfirmAction>Got it</PopconfirmAction>
              </PopconfirmFooter>
            </PopconfirmContent>
          </Popconfirm>
        </div>
      </div>

      {/* ── Placement ────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-placement" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Placement
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Use <code>side</code> (<code>"top" | "right" | "bottom" | "left"</code>) and{" "}
          <code>align</code> (<code>"start" | "center" | "end"</code>) on the root to control where
          the popup appears relative to the trigger.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 flex flex-wrap gap-3">
          {(["top", "right", "bottom", "left"] as const).map((s) => (
            <Popconfirm key={s} side={s}>
              <PopconfirmTrigger
                className={`${triggerCls} border border-border bg-background hover:bg-muted text-foreground capitalize`}
              >
                {s}
              </PopconfirmTrigger>
              <PopconfirmContent>
                <PopconfirmHeader>
                  <PopconfirmIcon />
                  <PopconfirmTitle>Placement: {s}</PopconfirmTitle>
                </PopconfirmHeader>
                <PopconfirmFooter>
                  <PopconfirmCancel />
                  <PopconfirmAction />
                </PopconfirmFooter>
              </PopconfirmContent>
            </Popconfirm>
          ))}
        </div>
      </div>

      {/* ── Danger okType ────────────────────────────────────────── */}
      <div>
        <h3 id="detail-danger" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Danger
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Set <code>okType="danger"</code> on the root to paint the action button in destructive
          red — the canonical AntD "delete confirmation" pattern.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 flex items-center gap-4 flex-wrap">
          <Popconfirm okType="danger">
            <PopconfirmTrigger
              className={`${triggerCls} bg-destructive text-destructive-foreground hover:bg-destructive-hover`}
            >
              Delete
            </PopconfirmTrigger>
            <PopconfirmContent>
              <PopconfirmHeader>
                <PopconfirmIcon />
                <PopconfirmTitle>Delete the task</PopconfirmTitle>
              </PopconfirmHeader>
              <PopconfirmDescription>
                Are you sure to delete this task?
              </PopconfirmDescription>
              <PopconfirmFooter>
                <PopconfirmCancel>No</PopconfirmCancel>
                <PopconfirmAction>Yes</PopconfirmAction>
              </PopconfirmFooter>
            </PopconfirmContent>
          </Popconfirm>
        </div>
      </div>

    </div>
  );
};
