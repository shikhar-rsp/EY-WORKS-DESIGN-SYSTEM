"use client";

import { Kbd, KbdGroup } from "@/components/figma/Kbd";

export const KbdDetail = () => {
  return (
    <div className="mt-6 space-y-10">
      {/* Preview */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 flex flex-wrap items-center gap-200">
          <Kbd>⌘</Kbd>
          <Kbd>⌃</Kbd>
          <Kbd>⌥</Kbd>
          <Kbd>⇧</Kbd>
          <Kbd>Enter</Kbd>
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>↑</Kbd>
          <Kbd>↓</Kbd>
        </div>
      </div>

      {/* KbdGroup — key combos */}
      <div>
        <h3 id="detail-group" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          KbdGroup — Key Combinations
        </h3>
        <div className="mt-4 flex flex-wrap items-center gap-300">
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>⇧</Kbd>
            <Kbd>⌘</Kbd>
            <Kbd>P</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>⌃</Kbd>
            <Kbd>⌥</Kbd>
            <Kbd>Del</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>⌥</Kbd>
            <Kbd>I</Kbd>
          </KbdGroup>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 id="detail-all-sizes" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Sizes
        </h3>
        <div className="mt-4 flex items-end gap-300">
          <div className="flex flex-col items-center gap-100">
            <KbdGroup>
              <Kbd size="sm">⌘</Kbd>
              <Kbd size="sm">K</Kbd>
            </KbdGroup>
            <span className="text-xs text-muted-foreground font-lexend">sm</span>
          </div>
          <div className="flex flex-col items-center gap-100">
            <KbdGroup>
              <Kbd size="md">⌘</Kbd>
              <Kbd size="md">K</Kbd>
            </KbdGroup>
            <span className="text-xs text-muted-foreground font-lexend">md</span>
          </div>
        </div>
      </div>

      {/* In context — shortcut list */}
      <div>
        <h3 id="detail-in-context" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          In Context — Shortcut List
        </h3>
        <div className="mt-4 flex w-64 flex-col gap-150 text-sm font-lexend">
          <div className="flex items-center justify-between">
            <span className="text-secondary-foreground">Search</span>
            <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-secondary-foreground">Save</span>
            <KbdGroup><Kbd>⌘</Kbd><Kbd>S</Kbd></KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-secondary-foreground">Undo</span>
            <KbdGroup><Kbd>⌘</Kbd><Kbd>Z</Kbd></KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-secondary-foreground">Close</span>
            <Kbd>Esc</Kbd>
          </div>
        </div>
      </div>
    </div>
  );
};
