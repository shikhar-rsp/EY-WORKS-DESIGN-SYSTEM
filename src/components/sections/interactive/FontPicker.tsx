"use client";

import { useState, useRef, useCallback, useEffect } from "react";

import { TextFont, Tick02, Upload01 } from "@/components/fragments/icons/catalog";

import { cn } from "@/lib/utils";
import {
  applyFont,
  resetFont,
  injectFontLink,
  loadFontFromFile,
  parseFontFamilyFromUrl,
} from "@/lib/font";

type TabTypes = "link" | "upload";

interface ICurrentFont {
  name: string;
  source: "default" | "link" | "upload";
}

const DEFAULT_FONT: ICurrentFont = { name: "Lexend", source: "default" };

export const FontPicker = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [fontUrl, setFontUrl] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const [activeTab, setActiveTab] = useState<TabTypes>("link");
  const [currentFont, setCurrentFont] = useState<ICurrentFont>(DEFAULT_FONT);

  const handleApplyLink = useCallback(async () => {
    setError(null);

    const trimmed = fontUrl.trim();

    if (!trimmed) return;

    const familyName = parseFontFamilyFromUrl(trimmed);

    if (!familyName) {
      setError(
        "Could not parse font family from URL. Use a Google Fonts CSS URL.",
      );

      return;
    }

    setIsLoading(true);
    try {
      injectFontLink(trimmed);
      // Brief wait for stylesheet to load before applying
      await new Promise<void>((resolve) => {
        const link = document.getElementById(
          "ds-custom-font-link",
        ) as HTMLLinkElement | null;

        if (!link) {
          resolve();
          return;
        }
        if (link.sheet) {
          resolve();
          return;
        }

        link.addEventListener("load", () => resolve(), { once: true });
        link.addEventListener("error", () => resolve(), { once: true });

        // Fallback timeout
        setTimeout(resolve, 2000);
      });

      applyFont(familyName);
      setCurrentFont({ name: familyName, source: "link" });
    } catch {
      setError("Failed to load font from URL.");
    } finally {
      setIsLoading(false);
    }
  }, [fontUrl]);

  const handleFile = useCallback(async (file: File) => {
    setError(null);

    const ext = file.name.split(".").pop()?.toLowerCase();

    if (ext !== "ttf" && ext !== "otf") {
      setError("Only .ttf and .otf files are supported.");

      return;
    }

    setIsLoading(true);

    try {
      const familyName = await loadFontFromFile(file);

      applyFont(familyName);

      // Show the file name without extension
      const displayName = file.name.replace(/\.(ttf|otf)$/i, "");
      setCurrentFont({ name: displayName, source: "upload" });
    } catch {
      setError("Failed to load font file.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];

      if (file) handleFile(file);

      // Reset input so the same file can be re-selected
      e.target.value = "";
    },
    [handleFile],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      setIsDragging(false);

      const file = e.dataTransfer.files[0];

      if (file) handleFile(file);
    },
    [handleFile],
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleReset = useCallback(() => {
    resetFont();
    setCurrentFont(DEFAULT_FONT);
    setFontUrl("");
    setError(null);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") handleApplyLink();
    },
    [handleApplyLink],
  );

  const isDefault = currentFont.source === "default";

  // Clean up on unmount
  useEffect(() => {
    return () => {
      resetFont();
    };
  }, []);

  return (
    <div className="rounded-lg border border-border bg-background">
      {/* ── Header ──────────────────────────────────────────────── */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-2 text-xs font-medium text-foreground">
          <TextFont className="size-3.5" />
          Font
        </div>
        {/* Current font status + reset */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-secondary-foreground">
            {isDefault ? (
              "Lexend (default)"
            ) : (
              <span className="flex items-center gap-1">
                <Tick02 className="size-3" />
                <span className="text-primary font-medium">
                  {currentFont.name}
                </span>
                <span className="text-muted-foreground">({currentFont.source})</span>
              </span>
            )}
          </span>
          {!isDefault && (
            <button
              onClick={handleReset}
              className="rounded px-1.5 py-0.5 text-xs text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
              aria-label="Reset to default font"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* ── Tab toggle ──────────────────────────────────────────── */}
      <div className="flex border-b border-border">
        {(["link", "upload"] as TabTypes[]).map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setError(null);
            }}
            className={cn(
              "flex-1 py-2 text-xs font-medium capitalize transition-colors",
              activeTab === tab
                ? "border-b-2 border-primary text-foreground"
                : "text-secondary-foreground hover:text-foreground hover:bg-muted",
            )}
          >
            {tab === "link" ? "Google Fonts Link" : "Upload File"}
          </button>
        ))}
      </div>

      {/* ── Tab content ─────────────────────────────────────────── */}
      <div className="p-4">
        {activeTab === "link" && (
          <div className="space-y-2">
            <p className="text-xs text-secondary-foreground">
              Paste a Google Fonts CSS URL (e.g. from{" "}
              <span className="font-mono text-foreground">fonts.google.com</span> →
              Get embed code → @import or &lt;link&gt;)
            </p>
            <div className="flex gap-2">
              <input
                type="url"
                value={fontUrl}
                onChange={(e) => setFontUrl(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
                className={cn(
                  "min-w-0 flex-1 rounded-medium border border-border bg-background px-3 py-1.5",
                  "text-xs text-foreground placeholder:text-muted-foreground",
                  "outline-none focus:border-primary focus:ring-1 focus:ring-brand-primary/30",
                  "transition-colors",
                )}
                aria-label="Google Fonts URL"
              />
              <button
                onClick={handleApplyLink}
                disabled={isLoading || !fontUrl.trim()}
                className={cn(
                  "shrink-0 rounded-medium border border-transparent px-3 py-1.5",
                  "text-xs font-medium text-primary-foreground transition-colors",
                  "bg-primary hover:bg-primary-hover",
                  "disabled:cursor-not-allowed disabled:bg-disabled-surface disabled:text-disabled",
                  "cursor-pointer",
                )}
              >
                {isLoading ? "Loading…" : "Apply"}
              </button>
            </div>
          </div>
        )}

        {activeTab === "upload" && (
          <div className="space-y-2">
            <p className="text-xs text-secondary-foreground">
              Upload a <span className="font-mono text-foreground">.ttf</span> or{" "}
              <span className="font-mono text-foreground">.otf</span> font file.
            </p>
            <div
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && fileInputRef.current?.click()
              }
              aria-label="Upload font file"
              className={cn(
                "flex cursor-pointer flex-col items-center justify-center gap-2",
                "rounded-medium border-2 border-dashed py-6",
                "transition-colors",
                isDragging
                  ? "border-primary bg-muted text-primary"
                  : "border-muted-foreground text-secondary-foreground hover:border-primary hover:text-foreground",
                isLoading && "pointer-events-none opacity-60",
              )}
            >
              <Upload01 className="size-5" />
              <span className="text-xs">
                {isLoading
                  ? "Loading font…"
                  : "Drop file here or click to browse"}
              </span>
              <span className="text-[10px] text-muted-foreground">.ttf or .otf</span>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept=".ttf,.otf"
              onChange={handleFileInput}
              className="hidden"
              aria-hidden="true"
            />
          </div>
        )}

        {/* ── Error ─────────────────────────────────────────────── */}
        {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
      </div>
    </div>
  );
};
