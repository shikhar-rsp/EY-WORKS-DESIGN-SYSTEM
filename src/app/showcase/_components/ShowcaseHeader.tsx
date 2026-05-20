"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { Sun01, Moon } from "@/components/fragments/icons/catalog";

export const ShowcaseHeader = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/80 px-200 py-150 backdrop-blur md:px-300">
      <div className="flex items-baseline gap-200">
        <h1 className="font-display text-[20px] font-bold tracking-tight text-foreground">
          Brand Showcase
        </h1>
        <span className="hidden text-xs text-muted-foreground sm:inline">
          Single-page brand verification
        </span>
      </div>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="flex size-8 items-center justify-center rounded-medium text-foreground transition-colors hover:bg-muted-hover"
      >
        {theme === "dark" ? <Sun01 className="size-4" /> : <Moon className="size-4" />}
      </button>
    </header>
  );
};
