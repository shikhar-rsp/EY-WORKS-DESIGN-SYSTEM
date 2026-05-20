"use client";

import { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/figma/HoverCard";
import { Button } from "@/components/figma/Button";

export const HoverCardControlled = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <Button variant="secondary" size="compact" onClick={() => setOpen((o) => !o)}>
        {open ? "Close card" : "Open card"}
      </Button>
      <HoverCard open={open} onOpenChange={setOpen}>
        <HoverCardTrigger>
          <span className="text-sm font-medium text-primary underline underline-offset-4 cursor-pointer">
            @vercel
          </span>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex flex-col gap-100">
            <p className="text-sm font-semibold text-foreground">Vercel</p>
            <p className="text-sm text-secondary-foreground">
              Build and deploy the best web experiences with the Vercel platform.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
