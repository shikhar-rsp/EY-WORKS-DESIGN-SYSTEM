"use client";

import { useState } from "react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/figma/Collapsible";
import { ArrowDown01Round } from "@/components/fragments/icons/catalog";

const ChevronIcon = ({ open }: { open: boolean }) => (
  <ArrowDown01Round className={`size-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
);

export const CollapsibleDetail = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(false);

  return (
    <div className="mt-6 space-y-10">
      {/* ── Preview ─────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Preview</h3>
        <div className="mt-4 w-64">
          <Collapsible open={open1} onOpenChange={setOpen1}>
            <CollapsibleTrigger className="rounded-medium px-200 py-150 hover:bg-muted-hover">
              <span className="text-sm font-lexend">Starred repos</span>
              <ChevronIcon open={open1} />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="mt-100 flex flex-col gap-050 pl-200">
                {["@ui/button", "@ui/input", "@ui/table"].map((r) => (
                  <li key={r} className="rounded-medium px-200 py-100 text-sm font-lexend text-secondary-foreground hover:bg-muted-hover">{r}</li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      {/* ── Controlled ──────────────────────────────── */}
      <div>
        <h3 id="detail-controlled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Controlled</h3>
        <div className="mt-4 flex flex-col gap-3 w-64">
          <div className="flex items-center gap-2 text-xs font-lexend text-muted-foreground">
            <span>open: <strong className="text-foreground">{String(open2)}</strong></span>
            <button
              type="button"
              className="ml-auto rounded-small border border-border px-150 py-050 text-xs hover:bg-muted-hover transition-colors"
              onClick={() => setOpen2(!open2)}
            >
              Toggle externally
            </button>
          </div>
          <Collapsible open={open2} onOpenChange={setOpen2}>
            <CollapsibleTrigger className="rounded-medium border border-border px-200 py-150">
              <span className="text-sm font-lexend">Section B</span>
              <ChevronIcon open={open2} />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="p-200 text-sm font-lexend text-muted-foreground">Visible expanded content here.</p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      {/* ── Disabled ────────────────────────────────── */}
      <div>
        <h3 id="detail-disabled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Disabled</h3>
        <div className="mt-4 w-64">
          <Collapsible disabled>
            <CollapsibleTrigger className="rounded-medium border border-border px-200 py-150">
              <span className="text-sm font-lexend">Disabled collapsible</span>
              <ChevronIcon open={false} />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="p-200 text-sm font-lexend text-muted-foreground">This content cannot be toggled.</p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      {/* ── States ──────────────────────────────────── */}
      <div>
        <h3 id="detail-states" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">States</h3>
        <div className="mt-4 flex flex-col gap-200 w-64">
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">Closed (default)</span>
            <Collapsible>
              <CollapsibleTrigger className="rounded-medium border border-border px-200 py-150">
                <span className="text-sm font-lexend">Section A</span>
                <ChevronIcon open={false} />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <p className="p-200 text-sm font-lexend text-muted-foreground">Hidden content</p>
              </CollapsibleContent>
            </Collapsible>
          </div>
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">Open (defaultOpen)</span>
            <Collapsible defaultOpen>
              <CollapsibleTrigger className="rounded-medium border border-border px-200 py-150">
                <span className="text-sm font-lexend">Section C</span>
                <ChevronIcon open={true} />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <p className="p-200 text-sm font-lexend text-muted-foreground">Content visible by default.</p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </div>
  );
};
