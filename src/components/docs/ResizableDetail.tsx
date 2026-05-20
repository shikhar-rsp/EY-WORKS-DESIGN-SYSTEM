"use client";

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/figma/Resizable";

export const ResizableDetail = () => {
  return (
    <div className="mt-6 space-y-10">

      {/* Preview */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Preview</h3>
        <div className="mt-4 rounded-large border border-border p-6">
          <ResizablePanelGroup direction="horizontal" className="min-h-[160px] rounded-large border border-border">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center text-sm text-secondary-foreground">
                One
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center text-sm text-secondary-foreground">
                Two
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>

      {/* Horizontal split */}
      <div>
        <h3 id="detail-horizontal" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Horizontal</h3>
        <p className="mt-1 text-sm text-secondary-foreground">Drag the handle to resize panels left and right.</p>
        <div className="mt-4 rounded-large border border-border p-6">
          <ResizablePanelGroup direction="horizontal" className="min-h-[120px] rounded-large border border-border">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center text-xs text-secondary-foreground">Sidebar</div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center text-xs text-secondary-foreground">Main content</div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>

      {/* Vertical split */}
      <div>
        <h3 id="detail-vertical" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Vertical</h3>
        <p className="mt-1 text-sm text-secondary-foreground">Drag the handle to resize panels up and down.</p>
        <div className="mt-4 rounded-large border border-border p-6">
          <ResizablePanelGroup direction="vertical" className="min-h-[200px] rounded-large border border-border">
            <ResizablePanel defaultSize={60}>
              <div className="flex h-full items-center justify-center text-xs text-secondary-foreground">Top</div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={40}>
              <div className="flex h-full items-center justify-center text-xs text-secondary-foreground">Bottom</div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>

      {/* Nested */}
      <div>
        <h3 id="detail-nested" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Nested Panels</h3>
        <p className="mt-1 text-sm text-secondary-foreground">Panel groups can be nested to create complex layouts like code editors.</p>
        <div className="mt-4 rounded-large border border-border p-6">
          <ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-large border border-border">
            <ResizablePanel defaultSize={30}>
              <div className="flex h-full items-center justify-center text-xs text-secondary-foreground">Files</div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={70}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={70}>
                  <div className="flex h-full items-center justify-center text-xs text-secondary-foreground">Editor</div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={30}>
                  <div className="flex h-full items-center justify-center text-xs text-secondary-foreground">Terminal</div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>

      {/* Without handle grip */}
      <div>
        <h3 id="detail-no-grip" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Handle Without Grip</h3>
        <p className="mt-1 text-sm text-secondary-foreground">Omit <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">withHandle</code> for a minimal invisible divider.</p>
        <div className="mt-4 rounded-large border border-border p-6">
          <ResizablePanelGroup direction="horizontal" className="min-h-[120px] rounded-large border border-border">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center text-xs text-secondary-foreground">Left</div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center text-xs text-secondary-foreground">Right</div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>

    </div>
  );
};
