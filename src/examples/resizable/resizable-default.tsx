"use client";

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/figma/Resizable";

export const ResizableDefault = () => {
  return (
    <div className="w-full max-w-xl">
      <ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-large border border-border">
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-medium text-secondary-foreground">Panel One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm font-medium text-secondary-foreground">Panel Two</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
