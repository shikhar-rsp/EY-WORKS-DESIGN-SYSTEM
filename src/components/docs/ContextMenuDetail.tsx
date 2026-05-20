"use client";

import { useState } from "react";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/figma/ContextMenu";

export const ContextMenuDetail = () => {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [panel, setPanel] = useState("bottom");

  return (
    <div className="mt-6 space-y-10">

      {/* ── Preview ───────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4">
          <ContextMenu>
            <ContextMenuTrigger>
              <div className="flex h-32 w-full items-center justify-center rounded-large border border-dashed border-border text-sm text-muted-foreground">
                Right-click anywhere here
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuLabel>Actions</ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuItem>
                Back <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Forward <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Reload <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem>Save Page As…</ContextMenuItem>
                  <ContextMenuItem>Developer Tools</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
                Show Bookmarks Bar
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem checked={showHistory} onCheckedChange={setShowHistory}>
                Show History
              </ContextMenuCheckboxItem>
              <ContextMenuSeparator />
              <ContextMenuRadioGroup value={panel} onValueChange={setPanel}>
                <ContextMenuLabel inset>Panel Position</ContextMenuLabel>
                <ContextMenuRadioItem value="top">Top</ContextMenuRadioItem>
                <ContextMenuRadioItem value="bottom">Bottom</ContextMenuRadioItem>
                <ContextMenuRadioItem value="right">Right</ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuContent>
          </ContextMenu>
          <p className="mt-2 text-xs text-muted-foreground">
            Panel: {panel} · Bookmarks: {showBookmarks ? "on" : "off"} · History: {showHistory ? "on" : "off"}
          </p>
        </div>
      </div>

      {/* ── Destructive Variant ───────────── */}
      <div>
        <h3 id="detail-destructive" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Destructive Variant
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Use <code className="font-mono text-xs">variant=&quot;destructive&quot;</code> on <code className="font-mono text-xs">ContextMenuItem</code> to style dangerous actions in red.
        </p>
        <div className="mt-4">
          <ContextMenu>
            <ContextMenuTrigger>
              <div className="flex h-24 w-full items-center justify-center rounded-large border border-dashed border-border text-sm text-muted-foreground">
                Right-click here
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Edit</ContextMenuItem>
              <ContextMenuItem>Duplicate</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                Delete
                <ContextMenuShortcut>⌫</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </div>

      {/* ── Groups ───────────────────────── */}
      <div>
        <h3 id="detail-groups" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Groups
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Use <code className="font-mono text-xs">ContextMenuGroup</code> to semantically group related items.
        </p>
        <div className="mt-4">
          <ContextMenu>
            <ContextMenuTrigger>
              <div className="flex h-24 w-full items-center justify-center rounded-large border border-dashed border-border text-sm text-muted-foreground">
                Right-click here
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuGroup>
                <ContextMenuLabel>Clipboard</ContextMenuLabel>
                <ContextMenuItem>Cut <ContextMenuShortcut>⌘X</ContextMenuShortcut></ContextMenuItem>
                <ContextMenuItem>Copy <ContextMenuShortcut>⌘C</ContextMenuShortcut></ContextMenuItem>
                <ContextMenuItem>Paste <ContextMenuShortcut>⌘V</ContextMenuShortcut></ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuGroup>
                <ContextMenuLabel>Text</ContextMenuLabel>
                <ContextMenuItem>Bold <ContextMenuShortcut>⌘B</ContextMenuShortcut></ContextMenuItem>
                <ContextMenuItem>Italic <ContextMenuShortcut>⌘I</ContextMenuShortcut></ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </div>

    </div>
  );
};
