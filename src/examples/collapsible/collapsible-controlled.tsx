"use client";

import { useState } from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/figma/Collapsible";

export const CollapsibleControlled = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-start gap-3">
      <button
        type="button"
        className="rounded-small border border-border px-150 py-050 text-xs font-lexend hover:bg-muted-hover transition-colors"
        onClick={() => setOpen(!open)}
      >
        Toggle externally
      </button>
      <Collapsible open={open} onOpenChange={setOpen} className="w-64">
        <CollapsibleTrigger className="rounded-medium px-200 py-150 hover:bg-muted-hover">
          <span>Repositories</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ul className="mt-100 flex flex-col gap-050 pl-200">
            {["@design-system/ui", "@design-system/icons"].map((repo) => (
              <li key={repo} className="rounded-medium px-200 py-100 text-sm font-lexend text-secondary-foreground hover:bg-muted-hover cursor-pointer">
                {repo}
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
