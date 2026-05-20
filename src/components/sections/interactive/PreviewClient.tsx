"use client";

import { useState } from "react";

import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { ArrowUp01Round } from "@/components/fragments/icons/catalog";

import { cn } from "@/lib/utils";

import type { ICodeEntry } from "@/types/docs";

interface IPreviewClientProps {
  codes: ICodeEntry[];
  title?: string;
  previewClassName?: string;
  children: React.ReactNode;
}

export const PreviewClient = (props: IPreviewClientProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [codeVisible, setCodeVisible] = useState<boolean>(false);

  const hasMultipleTabs = props.codes.length > 1;
  const activeEntry = props.codes[activeTab];
  const activeCode = activeEntry?.code ?? "";
  const activeLanguage = activeEntry?.language ?? "tsx";

  return (
    // No overflow-hidden here — lets absolutely-positioned content (dropdowns,
    // popovers, tooltips) inside the preview escape the container bounds.
    <div className="rounded-xl border border-border font-lexend">

      {/* ── Title ──────────────────────────────────────────────── */}
      {props.title && (
        <div className="rounded-t-xl border-b border-border bg-background px-4 py-3">
          <span className="text-sm font-medium text-foreground">
            {props.title}
          </span>
        </div>
      )}

      {/* ── Live Preview ───────────────────────────────────────── */}
      <div
        className={cn(
          "flex min-h-40 items-center justify-center p-6 bg-background overflow-visible",
          "font-preview-scope color-preview-scope",
          !props.title && "rounded-t-xl",
          props.previewClassName,
        )}
      >
        <div className="preview-scale-target flex w-full min-w-0 items-center justify-center">
          {props.children}
        </div>
      </div>

      {/* ── Code section ───────────────────────────────────────── */}
      <div className={cn("border-t border-border", codeVisible ? "rounded-b-xl overflow-hidden" : "")}>

        {/* Tab bar — only shown when multiple languages are available */}
        {hasMultipleTabs && (
          <div
            className="flex border-b"
            style={{
              background: "var(--code-bg)",
              borderColor: "color-mix(in srgb, var(--code-fg) 12%, transparent)",
            }}
          >
            {props.codes.map((entry, index) => (
              <button
                key={entry.label}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-4 py-2 text-xs font-medium transition-colors",
                  activeTab === index
                    ? "border-b-2 border-primary"
                    : "opacity-60 hover:opacity-100",
                )}
                style={{
                  color: activeTab === index ? "var(--code-fg)" : "var(--code-lineno-fg)",
                }}
              >
                {entry.label}
              </button>
            ))}
          </div>
        )}

        {/* Code block — always rendered; clipped when closed */}
        <div
          className={cn(
            "relative",
            // When closed: fixed peek height + clip; when open: show in full
            !codeVisible && "overflow-hidden",
          )}
          style={!codeVisible ? { height: "80px" } : undefined}
        >
          <CodeBlock code={activeCode} language={activeLanguage} />

          {/* Gradient + "View Code" overlay — visible only when collapsed */}
          {!codeVisible && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: `linear-gradient(to bottom, transparent 0%, color-mix(in srgb, var(--code-bg) 60%, transparent) 50%, var(--code-bg) 100%)`,
              }}
            >
              <button
                onClick={() => setCodeVisible(true)}
                className={cn(
                  "relative z-10 cursor-pointer",
                  "rounded-full border border-border bg-background px-3.5 py-1.5",
                  "text-xs font-medium text-foreground",
                  "shadow-md shadow-black/8 transition-shadow hover:shadow-lg hover:shadow-black/12",
                )}
              >
                View Code
              </button>
            </div>
          )}
        </div>

        {/* "Hide Code" bar — only shown when expanded */}
        {codeVisible && (
          <button
            onClick={() => setCodeVisible(false)}
            className={cn(
              "flex w-full items-center justify-center gap-1.5 py-2",
              "text-xs font-medium transition-colors",
              "hover:opacity-80",
            )}
            style={{
              background: "var(--code-bg)",
              color: "var(--code-lineno-fg)",
            }}
          >
            <ArrowUp01Round className="size-3" />
            Hide Code
          </button>
        )}
      </div>
    </div>
  );
};
