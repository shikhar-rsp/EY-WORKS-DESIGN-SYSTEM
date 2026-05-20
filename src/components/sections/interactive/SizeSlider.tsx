"use client";

import { useState, useCallback, useEffect } from "react";

import { cn } from "@/lib/utils";

const applyScale = (value: number) => {
  const targets = document.querySelectorAll<HTMLElement>(".preview-scale-target");
  targets.forEach((el) => {
    if (value === 100) {
      el.style.transform = "";
      el.style.transformOrigin = "";
    } else {
      el.style.transform = `scale(${value / 100})`;
      el.style.transformOrigin = "center center";
    }
  });
};

export const SizeSlider = () => {
  const [scale, setScale] = useState<number>(100);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setScale(value);
    applyScale(value);
  }, []);

  const handleReset = useCallback(() => {
    setScale(100);
    applyScale(100);
  }, []);

  // Clear any leftover transform when this page mounts/unmounts.
  useEffect(() => {
    applyScale(100);
    return () => { applyScale(100); };
  }, []);

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-medium text-secondary-foreground">Size</span>
      <input
        type="range"
        min={50}
        max={200}
        step={5}
        value={scale}
        onChange={handleChange}
        className="size-slider h-1.5 w-32 cursor-pointer appearance-none rounded-full bg-neutral accent-brand-primary"
        aria-label="Preview size"
      />
      <button
        onClick={handleReset}
        className={cn(
          "min-w-12 rounded-medium px-1.5 py-0.5 text-xs tabular-nums transition-colors",
          scale === 100
            ? "text-secondary-foreground"
            : "text-primary cursor-pointer hover:bg-muted",
        )}
        aria-label="Reset to 100%"
      >
        {scale}%
      </button>
    </div>
  );
};
