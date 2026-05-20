"use client";

import Image from "next/image";

import { useState, useRef, useCallback, useEffect } from "react";

import { Tick02, MagicWand01, Image01, Swatch, Upload01, Loading03 } from "@/components/fragments/icons/catalog";
import SlotRowInput from "@/components/fragments/forms/SlotRowInput";
import ColorSwatchButton from "@/components/fragments/button/ColorSwatchButton";

import { cn } from "@/lib/utils";
import {
  isValidHex,
  COLOR_SLOTS,
  parseCssTokens,
  applyBrandColor,
  applySlotColors,
  resetBrandColor,
  parseJsonTokens,
  deriveSlotColors,
  extractColorsFromImage,
} from "@/lib/color";

type TabTypes = "input" | "file" | "image";

interface ICurrentColor {
  hex: string;
  source: "default" | "input" | "file" | "image";
}

interface IParsedColor {
  name: string;
  hex: string;
}

const DEFAULT_HEX = "#f8785e";
const DEFAULT_COLOR: ICurrentColor = { hex: DEFAULT_HEX, source: "default" };

const buildDefaultSlotInputs = (): Record<string, string> => {
  const result: Record<string, string> = {};
  COLOR_SLOTS.forEach((s) => {
    result[s.key] = s.defaultHex;
  });

  return result;
};

export const ColorPicker = () => {
  const [activeTab, setActiveTab] = useState<TabTypes>("input");
  const [currentColor, setCurrentColor] =
    useState<ICurrentColor>(DEFAULT_COLOR);

  // Input tab — multi-input mode
  const [autoDerive, setAutoDerive] = useState<boolean>(false);
  const [slotInputs, setSlotInputs] = useState<Record<string, string>>(
    buildDefaultSlotInputs,
  );

  // File tab state
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDraggingFile, setIsDraggingFile] = useState<boolean>(false);
  const [parsedColors, setParsedColors] = useState<IParsedColor[]>([]);
  const [fileSelected, setFileSelected] = useState<string | null>(null);

  // Image tab state
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [imageColors, setImageColors] = useState<string[]>([]);
  const [isDraggingImage, setIsDraggingImage] = useState<boolean>(false);
  const [imageSelected, setImageSelected] = useState<string | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleReset = useCallback(() => {
    resetBrandColor();
    setCurrentColor(DEFAULT_COLOR);
    setSlotInputs(buildDefaultSlotInputs());
    setParsedColors([]);
    setFileSelected(null);
    setImageColors([]);
    setImageSelected(null);

    if (imagePreviewUrl) {
      URL.revokeObjectURL(imagePreviewUrl);
      setImagePreviewUrl(null);
    }

    setError(null);
  }, [imagePreviewUrl]);

  // ── Tab: Input ──────────────────────────────────────────────

  const handleToggleAutoDerive = useCallback(() => {
    setAutoDerive((prev) => {
      const next = !prev;

      // When switching to auto-derive, re-derive all slots from current primary
      if (next) {
        const primary = slotInputs["primary"] ?? DEFAULT_HEX;

        if (isValidHex(primary)) {
          const derived = deriveSlotColors(primary);

          setSlotInputs(derived);
          applySlotColors(derived);
          setCurrentColor({ hex: primary, source: "input" });
        }
      }

      return next;
    });
  }, [slotInputs]);

  const handleSlotNativeChange = useCallback(
    (key: string, val: string) => {
      const next = autoDerive
        ? deriveSlotColors(val)
        : { ...slotInputs, [key]: val };

      setSlotInputs(next);
      applySlotColors(next);
      setCurrentColor({ hex: next["primary"] ?? val, source: "input" });
    },
    [autoDerive, slotInputs],
  );

  const handleSlotTextChange = useCallback(
    (key: string, val: string) => {
      const next =
        autoDerive && key === "primary" && isValidHex(val)
          ? deriveSlotColors(val)
          : { ...slotInputs, [key]: val };

      setSlotInputs(next);

      if (isValidHex(val)) {
        applySlotColors(next);
        setCurrentColor({ hex: next["primary"] ?? val, source: "input" });
      }
    },
    [autoDerive, slotInputs],
  );

  const handleSlotBlur = useCallback(
    (key: string) => {
      const val = slotInputs[key];

      if (!isValidHex(val)) {
        const slot = COLOR_SLOTS.find((s) => s.key === key);

        setSlotInputs((prev) => ({
          ...prev,
          [key]: slot?.defaultHex ?? DEFAULT_HEX,
        }));
      }
    },
    [slotInputs],
  );

  // ── Tab: File ───────────────────────────────────────────────

  const handleTokenFile = useCallback(async (file: File) => {
    setError(null);

    const ext = file.name.split(".").pop()?.toLowerCase();

    if (ext !== "json" && ext !== "css") {
      setError("Only .json and .css files are supported.");

      return;
    }

    setIsLoading(true);

    try {
      const content = await file.text();
      const colors =
        ext === "json" ? parseJsonTokens(content) : parseCssTokens(content);

      if (colors.length === 0) {
        setError("No hex colors found in this file.");
      } else {
        setParsedColors(colors);
        setFileSelected(null);
        setError(null);
      }
    } catch {
      setError("Failed to read the file.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];

      if (file) handleTokenFile(file);

      e.target.value = "";
    },
    [handleTokenFile],
  );

  const handleFileDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDraggingFile(false);

      const file = e.dataTransfer.files[0];

      if (file) handleTokenFile(file);
    },
    [handleTokenFile],
  );

  const handleFileColorSelect = useCallback((hex: string) => {
    setFileSelected(hex);

    const derived = deriveSlotColors(hex);

    setSlotInputs(derived);
    applySlotColors(derived);
    setCurrentColor({ hex, source: "file" });
  }, []);

  // ── Tab: Image ──────────────────────────────────────────────

  const handleImageFile = useCallback(
    async (file: File) => {
      setError(null);

      const BLOCKED_IMAGE_TYPES = ["image/gif"];

      if (
        !file.type.startsWith("image/") ||
        BLOCKED_IMAGE_TYPES.includes(file.type)
      ) {
        setError(
          "GIF files are not supported. Please use PNG, JPG, WebP, SVG, BMP, TIFF, or AVIF.",
        );

        return;
      }

      setIsLoading(true);
      try {
        if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);

        setImagePreviewUrl(URL.createObjectURL(file));

        const colors = await extractColorsFromImage(file);

        if (colors.length === 0) {
          setError("Could not extract colors from this image.");
        } else {
          setImageColors(colors);
          setImageSelected(null);
        }
      } catch {
        setError("Failed to process the image.");
      } finally {
        setIsLoading(false);
      }
    },
    [imagePreviewUrl],
  );

  const handleImageInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];

      if (file) handleImageFile(file);

      e.target.value = "";
    },
    [handleImageFile],
  );

  const handleImageDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDraggingImage(false);

      const file = e.dataTransfer.files[0];

      if (file) handleImageFile(file);
    },
    [handleImageFile],
  );

  const handleImageColorSelect = useCallback((hex: string) => {
    setImageSelected(hex);

    const derived = deriveSlotColors(hex);

    setSlotInputs(derived);
    applySlotColors(derived);
    setCurrentColor({ hex, source: "image" });
  }, []);

  const isDefault = currentColor.source === "default";

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      resetBrandColor();

      if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="rounded-lg border border-border bg-background">
      {/* ── Header ────────────────────────────────────────────── */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-2 text-xs font-medium text-foreground">
          <Swatch className="size-3.5" />
          Color
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-secondary-foreground">
            {isDefault ? (
              "Brand (default)"
            ) : (
              <span className="flex items-center gap-1">
                <Tick02 className="size-3" />
                <span
                  className="h-3 w-3 rounded-sm border border-border"
                  style={{ backgroundColor: currentColor.hex }}
                />
                <span className="font-mono text-primary font-medium">
                  {currentColor.hex}
                </span>
                <span className="text-muted-foreground">({currentColor.source})</span>
              </span>
            )}
          </span>
          {!isDefault && (
            <button
              onClick={handleReset}
              className="rounded px-1.5 py-0.5 text-xs text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
              aria-label="Reset to default brand color"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* ── Tab toggle ────────────────────────────────────────── */}
      <div className="flex border-b border-border">
        {(["input", "file", "image"] as TabTypes[]).map((tab) => (
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
            {tab === "input"
              ? "Color Input"
              : tab === "file"
                ? "Token File"
                : "From Image"}
          </button>
        ))}
      </div>

      {/* ── Tab content ───────────────────────────────────────── */}
      <div className="p-4">
        {/* ── Input tab ───────────────────────────────────────── */}
        {activeTab === "input" && (
          <div className="space-y-3">
            {/* Auto-derive toggle */}
            <div className="flex items-center justify-between">
              <p className="text-xs text-secondary-foreground">
                {autoDerive
                  ? "Set a primary — other slots auto-derive."
                  : "Edit each color slot independently."}
              </p>
              <button
                type="button"
                onClick={handleToggleAutoDerive}
                className={cn(
                  "flex items-center gap-1.5 rounded-medium border px-2 py-1 text-xs font-medium transition-colors cursor-pointer",
                  autoDerive
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-secondary-foreground hover:border-primary hover:text-foreground",
                )}
                aria-pressed={autoDerive}
              >
                <MagicWand01 className="size-3" />
                Auto-derive
              </button>
            </div>

            {/* Slot rows */}
            <div className="space-y-2">
              {COLOR_SLOTS.map((slot) => (
                <SlotRowInput
                  key={slot.key}
                  label={slot.label}
                  hexValue={slotInputs[slot.key] ?? slot.defaultHex}
                  hexInput={slotInputs[slot.key] ?? slot.defaultHex}
                  disabled={autoDerive && slot.key !== "primary"}
                  onNativeChange={(val) =>
                    handleSlotNativeChange(slot.key, val)
                  }
                  onTextChange={(val) => handleSlotTextChange(slot.key, val)}
                  onBlur={() => handleSlotBlur(slot.key)}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── File tab ────────────────────────────────────────── */}
        {activeTab === "file" && (
          <div className="space-y-3">
            <p className="text-xs text-secondary-foreground">
              Upload a <span className="font-mono text-foreground">.json</span>{" "}
              token file or <span className="font-mono text-foreground">.css</span>{" "}
              variables file to extract colors.
            </p>

            {/* Drop zone */}
            <div
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleFileDrop}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDraggingFile(true);
              }}
              onDragLeave={() => setIsDraggingFile(false)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && fileInputRef.current?.click()
              }
              aria-label="Upload token file"
              className={cn(
                "flex cursor-pointer flex-col items-center justify-center gap-2",
                "rounded-medium border-2 border-dashed py-5",
                "transition-colors",
                isDraggingFile
                  ? "border-primary bg-muted text-primary"
                  : "border-muted-foreground text-secondary-foreground hover:border-primary hover:text-foreground",
                isLoading && "pointer-events-none opacity-60",
              )}
            >
              <Upload01 className="size-5" />
              <span className="text-xs">
                {isLoading
                  ? "Reading file…"
                  : "Drop file here or click to browse"}
              </span>
              <span className="text-[10px] text-muted-foreground">.json or .css</span>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json,.css"
              onChange={handleFileInput}
              className="hidden"
              aria-hidden="true"
            />

            {/* Parsed palette */}
            {parsedColors.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs text-secondary-foreground">
                  {parsedColors.length} color
                  {parsedColors.length !== 1 ? "s" : ""} found — click one to
                  apply as brand primary:
                </p>
                <div className="flex max-h-40 flex-wrap gap-1.5 overflow-y-auto rounded-lg border border-border p-3">
                  {parsedColors.map((c) => (
                    <ColorSwatchButton
                      key={c.name}
                      hex={c.hex}
                      label={`${c.name}: ${c.hex}`}
                      selected={fileSelected === c.hex}
                      onClick={() => handleFileColorSelect(c.hex)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Image tab ───────────────────────────────────────── */}
        {activeTab === "image" && (
          <div className="space-y-3">
            <p className="text-xs text-secondary-foreground">
              Upload a screenshot of your color system to extract the palette
              automatically.
            </p>

            {/* Drop zone */}
            <div
              onClick={() => imageInputRef.current?.click()}
              onDrop={handleImageDrop}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDraggingImage(true);
              }}
              onDragLeave={() => setIsDraggingImage(false)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && imageInputRef.current?.click()
              }
              aria-label="Upload color system image"
              className={cn(
                "relative flex cursor-pointer flex-col items-center justify-center gap-2",
                "rounded-medium border-2 border-dashed overflow-hidden",
                "transition-colors",
                imagePreviewUrl ? "border-border py-0" : "py-5",
                isDraggingImage
                  ? "border-primary bg-muted text-primary"
                  : "border-muted-foreground text-secondary-foreground hover:border-primary hover:text-foreground",
                isLoading && "pointer-events-none opacity-60",
              )}
            >
              {imagePreviewUrl ? (
                <Image
                  src={imagePreviewUrl}
                  alt="Uploaded color system"
                  className="max-h-36 w-full object-contain"
                  width={150}
                  height={150}
                  unoptimized
                  priority
                />
              ) : (
                <>
                  <Image01 className="size-5" />
                  <span className="text-xs">
                    {isLoading
                      ? "Extracting colors…"
                      : "Drop image here or click to browse"}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    PNG, JPG, WebP, SVG, BMP, TIFF, AVIF
                  </span>
                </>
              )}
            </div>
            <input
              ref={imageInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp,image/bmp,image/tiff,image/avif,image/x-icon,image/svg+xml"
              onChange={handleImageInput}
              className="hidden"
              aria-hidden="true"
            />

            {/* Loading indicator */}
            {isLoading && imagePreviewUrl && (
              <div className="flex items-center gap-2 rounded-medium border border-border bg-muted px-3 py-2.5">
                <Loading03 className="size-4 shrink-0 animate-spin text-primary" />
                <span className="text-xs text-secondary-foreground">Extracting colors…</span>
              </div>
            )}

            {/* Extracted palette */}
            {imageColors.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs text-secondary-foreground">
                  {imageColors.length} dominant color
                  {imageColors.length !== 1 ? "s" : ""} extracted — click one to
                  apply as brand primary:
                </p>
                <div className="flex flex-wrap gap-1.5 rounded-lg border border-border p-3">
                  {imageColors.map((hex) => (
                    <ColorSwatchButton
                      key={hex}
                      hex={hex}
                      selected={imageSelected === hex}
                      onClick={() => handleImageColorSelect(hex)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Error ─────────────────────────────────────────────── */}
        {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
      </div>
    </div>
  );
};
