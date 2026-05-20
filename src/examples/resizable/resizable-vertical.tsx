"use client";

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/figma/Resizable";

export const ResizableVertical = () => {
  return (
    <div className="w-full max-w-xl">
      <ResizablePanelGroup direction="vertical" className="min-h-[300px] rounded-large border border-border">
        <ResizablePanel defaultSize={60}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-medium text-secondary-foreground">Top Panel</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-medium text-secondary-foreground">Bottom Panel</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
