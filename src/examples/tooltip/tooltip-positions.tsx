"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/figma/Tooltip";

export const TooltipPositions = () => {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {(["top", "right", "bottom", "left"] as const).map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger className="rounded-medium border border-border bg-background px-200 py-100 font-lexend text-sm text-foreground">
              {side}
            </TooltipTrigger>
            <TooltipContent side={side}>Tooltip {side}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};
