"use client";

import { useState } from "react";

import { Button } from "@/components/figma/Button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/figma/Command";

export const CommandDetail = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="mt-6 space-y-10">

      {/* ── Inline Preview ───────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Inline Command
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Use <code className="font-mono text-xs">Command</code> directly on the page. Items hide in real time as the user types.
        </p>
        <div className="mt-4">
          <Command className="w-80 shadow-md" value={selected} onValueChange={setSelected}>
            <CommandInput placeholder="Type a command…" />
            <CommandList>
              <CommandEmpty />
              <CommandGroup heading="Suggestions">
                <CommandItem value="calendar" keywords={["schedule"]}>
                  Calendar
                </CommandItem>
                <CommandItem value="search" keywords={["find"]}>
                  Search
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem value="profile">
                  Profile
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem value="settings">
                  Settings
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
          {selected && (
            <p className="mt-2 text-xs text-muted-foreground">Selected: {selected}</p>
          )}
        </div>
      </div>

      {/* ── CommandDialog ────────────────────── */}
      <div>
        <h3 id="detail-dialog" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          CommandDialog (⌘K palette)
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Wrap <code className="font-mono text-xs">Command</code> in <code className="font-mono text-xs">CommandDialog</code> for a portal-rendered modal palette. Press <kbd className="font-mono text-xs">Escape</kbd> to close.
        </p>
        <div className="mt-4">
          <Button variant="secondary" onClick={() => setDialogOpen(true)}>
            Open Command Palette
          </Button>
          <CommandDialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <CommandInput placeholder="Type a command or search…" />
            <CommandList>
              <CommandEmpty />
              <CommandGroup heading="Pages">
                <CommandItem value="home" keywords={["landing"]} onSelect={() => setDialogOpen(false)}>Home</CommandItem>
                <CommandItem value="docs" keywords={["documentation"]} onSelect={() => setDialogOpen(false)}>Documentation</CommandItem>
                <CommandItem value="components" keywords={["ui", "design"]} onSelect={() => setDialogOpen(false)}>Components</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem value="profile" onSelect={() => setDialogOpen(false)}>
                  Profile <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem value="billing" onSelect={() => setDialogOpen(false)}>
                  Billing <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem value="logout" keywords={["sign out"]} onSelect={() => setDialogOpen(false)}>
                  Log out <CommandShortcut>⇧⌘Q</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </div>
      </div>

      {/* ── Custom Filter ────────────────────── */}
      <div>
        <h3 id="detail-filter" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Custom Filter
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Pass a custom <code className="font-mono text-xs">filter</code> function to control how items match the search query.
        </p>
        <div className="mt-4">
          <Command
            className="w-80 shadow-md"
            filter={(value, search) => value.startsWith(search.toLowerCase())}
          >
            <CommandInput placeholder="Starts-with filter…" />
            <CommandList>
              <CommandEmpty />
              <CommandGroup heading="Items">
                <CommandItem value="apple">Apple</CommandItem>
                <CommandItem value="apricot">Apricot</CommandItem>
                <CommandItem value="banana">Banana</CommandItem>
                <CommandItem value="blueberry">Blueberry</CommandItem>
                <CommandItem value="cherry">Cherry</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </div>

    </div>
  );
};
