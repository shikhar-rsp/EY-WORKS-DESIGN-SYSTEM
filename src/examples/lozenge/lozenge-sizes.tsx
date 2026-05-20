"use client";

import { Lozenge } from "@/components/figma/Lozenge";

export const LozengeSizes = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 p-4">
      <div className="flex flex-col items-center gap-2">
        <Lozenge size="sm" variant="solid" color="brand" label="Small" />
        <span className="text-[10px] text-muted-foreground">16px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Lozenge size="md" variant="solid" color="brand" label="Medium" />
        <span className="text-[10px] text-muted-foreground">20px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Lozenge size="lg" variant="solid" color="brand" label="Large" />
        <span className="text-[10px] text-muted-foreground">24px</span>
      </div>
    </div>
  );
};
