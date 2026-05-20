"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/figma/Tooltip";

export const TooltipDelay = () => {
  return (
    <TooltipProvider delayDuration={500}>
      <Tooltip>
        <TooltipTrigger className="rounded-medium border border-border bg-background px-200 py-100 font-lexend text-sm text-foreground">
          Hover (500ms delay)
        </TooltipTrigger>
        <TooltipContent>Appears after delay</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
