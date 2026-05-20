"use client";

import { createContext, useCallback, useContext, useRef, type HTMLAttributes, type ReactNode } from "react";

import { Drag02 } from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";

// ─── Context ─────────────────────────────────────────────────────

type DirectionTypes = "horizontal" | "vertical";

interface IResizablePanelGroupContext {
  direction: DirectionTypes;
}

const ResizablePanelGroupContext = createContext<IResizablePanelGroupContext | null>(null);

const useResizablePanelGroupContext = () => {
  const ctx = useContext(ResizablePanelGroupContext);
  if (!ctx) {
    throw new Error("ResizableHandle and ResizablePanel must be used inside <ResizablePanelGroup>");
  }
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── ResizablePanelGroup ──────────────────────────────────────────

interface IResizablePanelGroupProps extends HTMLAttributes<HTMLDivElement> {
  direction: DirectionTypes;
  onLayout?: (sizes: number[]) => void;
  children?: ReactNode;
  className?: string;
}

export const ResizablePanelGroup = (props: IResizablePanelGroupProps) => {
  const { direction, onLayout: _onLayout, children, className, ...rest } = props;

  return (
    <ResizablePanelGroupContext.Provider value={{ direction }}>
      <div
        data-panel-group=""
        data-panel-group-direction={direction}
        className={cn(
          "flex size-full overflow-hidden",
          direction === "horizontal" ? "flex-row" : "flex-col",
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    </ResizablePanelGroupContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ResizablePanel ───────────────────────────────────────────────

interface IResizablePanelProps extends HTMLAttributes<HTMLDivElement> {
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  children?: ReactNode;
  className?: string;
}

export const ResizablePanel = (props: IResizablePanelProps) => {
  const { defaultSize, minSize: _minSize, maxSize: _maxSize, children, className, style, ...rest } = props;

  return (
    <div
      data-panel=""
      style={{ flex: defaultSize !== undefined ? `${defaultSize} 1 0px` : "1", overflow: "auto", ...style }}
      className={cn("relative", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ResizableHandle ─────────────────────────────────────────────

interface IResizableHandleProps extends HTMLAttributes<HTMLDivElement> {
  withHandle?: boolean;
  className?: string;
}

export const ResizableHandle = (props: IResizableHandleProps) => {
  const { withHandle = false, className, ...rest } = props;
  const { direction } = useResizablePanelGroupContext();
  const handleRef = useRef<HTMLDivElement>(null);

  const startDrag = useCallback(
    (startX: number, startY: number) => {
      const prevPanel = handleRef.current?.previousElementSibling as HTMLDivElement | null;
      const nextPanel = handleRef.current?.nextElementSibling as HTMLDivElement | null;
      if (!prevPanel || !nextPanel) return;

      const prevSize = direction === "horizontal" ? prevPanel.offsetWidth : prevPanel.offsetHeight;
      const nextSize = direction === "horizontal" ? nextPanel.offsetWidth : nextPanel.offsetHeight;
      const totalSize = prevSize + nextSize;

      const resize = (clientX: number, clientY: number) => {
        const delta = direction === "horizontal" ? clientX - startX : clientY - startY;
        const newPrevPct = Math.max(10, Math.min(90, ((prevSize + delta) / totalSize) * 100));
        const newNextPct = 100 - newPrevPct;
        prevPanel.style.flex = `${newPrevPct} 1 0px`;
        nextPanel.style.flex = `${newNextPct} 1 0px`;
      };

      return resize;
    },
    [direction],
  );

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      const resize = startDrag(e.clientX, e.clientY);
      if (!resize) return;

      const onMove = (me: MouseEvent) => resize(me.clientX, me.clientY);
      const onUp = () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };

      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    },
    [startDrag],
  );

  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const touch = e.touches[0];
      const resize = startDrag(touch.clientX, touch.clientY);
      if (!resize) return;

      const onMove = (te: TouchEvent) => {
        te.preventDefault();
        const t = te.touches[0];
        resize(t.clientX, t.clientY);
      };
      const onEnd = () => {
        document.removeEventListener("touchmove", onMove);
        document.removeEventListener("touchend", onEnd);
        document.removeEventListener("touchcancel", onEnd);
      };

      document.addEventListener("touchmove", onMove, { passive: false });
      document.addEventListener("touchend", onEnd);
      document.addEventListener("touchcancel", onEnd);
    },
    [startDrag],
  );

  return (
    <div
      ref={handleRef}
      data-panel-resize-handle=""
      role="separator"
      aria-orientation={direction === "horizontal" ? "vertical" : "horizontal"}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      className={cn(
        "relative flex shrink-0 items-center justify-center bg-border touch-none",
        "transition-colors duration-150",
        "select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        direction === "horizontal"
          ? "w-px cursor-col-resize hover:bg-border-hover"
          : "h-px cursor-row-resize hover:bg-border-hover",
        className,
      )}
      {...rest}
    >
      {withHandle && (
        <div className="z-10 flex h-4 w-3 items-center justify-center rounded-small border border-border bg-border">
          <Drag02 className="size-2.5" />
        </div>
      )}
    </div>
  );
};
