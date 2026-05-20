"use client";

import { useState, useCallback, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

// ─── Slider ───────────────────────────────────────────────────────

interface ISliderProps extends Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> {
  value?: number[];
  defaultValue?: number[];
  onValueChange?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  orientation?: "horizontal" | "vertical";
  className?: string;
  "aria-label"?: string;
}

export const Slider = (props: ISliderProps) => {
  const {
    value: controlledValue,
    defaultValue = [0],
    onValueChange,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    orientation = "horizontal",
    className,
    "aria-label": ariaLabel,
    ...rest
  } = props;

  const [internalValue, setInternalValue] = useState<number[]>(defaultValue);

  const isControlled = controlledValue !== undefined;
  const values = isControlled ? controlledValue : internalValue;
  const isVertical = orientation === "vertical";

  const handleChange = useCallback(
    (index: number, raw: number) => {
      const clamped = Math.min(max, Math.max(min, raw));
      const next = [...values];
      next[index] = clamped;
      if (next.length > 1) next.sort((a, b) => a - b);
      if (!isControlled) setInternalValue(next);
      onValueChange?.(next);
    },
    [values, min, max, isControlled, onValueChange],
  );

  return (
    <div
      role="group"
      aria-label={ariaLabel ?? "Slider"}
      data-orientation={orientation}
      data-disabled={disabled || undefined}
      className={cn(
        "relative flex touch-none select-none items-center",
        isVertical ? "h-40 w-5 flex-col" : "h-5 w-full flex-row",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      {...rest}
    >
      {/* Track */}
      <div
        className={cn(
          "relative overflow-hidden rounded-full bg-muted",
          isVertical ? "h-full w-1.5" : "h-1.5 w-full",
        )}
      >
        {/* Filled range */}
        {values.length === 1 ? (
          <div
            className="absolute rounded-full bg-primary"
            style={
              isVertical
                ? { bottom: 0, height: `${((values[0] - min) / (max - min)) * 100}%`, width: "100%" }
                : { left: 0, width: `${((values[0] - min) / (max - min)) * 100}%`, height: "100%" }
            }
          />
        ) : (
          <div
            className="absolute rounded-full bg-primary"
            style={
              isVertical
                ? {
                    bottom: `${((values[0] - min) / (max - min)) * 100}%`,
                    height: `${((values[values.length - 1] - values[0]) / (max - min)) * 100}%`,
                    width: "100%",
                  }
                : {
                    left: `${((values[0] - min) / (max - min)) * 100}%`,
                    width: `${((values[values.length - 1] - values[0]) / (max - min)) * 100}%`,
                    height: "100%",
                  }
            }
          />
        )}
      </div>

      {/* Thumbs via native range inputs */}
      {values.map((val, i) => {
        const isMulti = values.length > 1;
        // When both thumbs meet, bring the lower thumb to the front so it can be dragged back.
        const zClass = isMulti
          ? i === 0 && values[0] >= values[1]
            ? "z-20"
            : "z-10"
          : "";

        return (
          <input
            key={i}
            type="range"
            min={min}
            max={max}
            step={step}
            value={val}
            disabled={disabled}
            aria-label={isMulti ? `${ariaLabel ?? "Slider"} ${i + 1}` : ariaLabel}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={val}
            onChange={(e) => handleChange(i, Number(e.target.value))}
            className={cn(
              "absolute appearance-none cursor-pointer bg-transparent",
              isVertical
                ? "h-full w-1.5 rotate-[-90deg] origin-center"
                : "h-1.5 w-full",
              // For multi-thumb: disable pointer events on the track so each thumb
              // only receives clicks on its own circle, not the full track width.
              isMulti && "pointer-events-none",
              "[&::-webkit-slider-thumb]:appearance-none",
              "[&::-webkit-slider-thumb]:size-4",
              "[&::-webkit-slider-thumb]:rounded-full",
              "[&::-webkit-slider-thumb]:bg-primary-foreground",
              "[&::-webkit-slider-thumb]:border-2",
              "[&::-webkit-slider-thumb]:border-primary",
              "[&::-webkit-slider-thumb]:shadow-sm",
              "[&::-webkit-slider-thumb]:cursor-pointer",
              isMulti && "[&::-webkit-slider-thumb]:pointer-events-auto",
              "[&::-webkit-slider-thumb]:transition-transform",
              "[&::-webkit-slider-thumb]:hover:scale-110",
              "[&::-webkit-slider-thumb]:focus-visible:ring-2",
              "[&::-webkit-slider-thumb]:focus-visible:ring-ring",
              "[&::-webkit-slider-runnable-track]:bg-transparent",
              disabled && "cursor-not-allowed",
              zClass,
            )}
          />
        );
      })}
    </div>
  );
};
