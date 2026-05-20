"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

// ─── Context ─────────────────────────────────────────────────────

interface IScrollAreaContext {
  viewportRef: React.RefObject<HTMLDivElement | null>;
  vThumb: { top: number; height: number; visible: boolean };
  hThumb: { left: number; width: number; visible: boolean };
  onVThumbMouseDown: (e: React.MouseEvent) => void;
  onHThumbMouseDown: (e: React.MouseEvent) => void;
  onVTrackClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  onHTrackClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const ScrollAreaContext = createContext<IScrollAreaContext | null>(null);

const useScrollAreaContext = () => {
  const ctx = useContext(ScrollAreaContext);
  if (!ctx) {
    throw new Error("ScrollBar must be used inside <ScrollArea>");
  }
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── ScrollArea ───────────────────────────────────────────────────

interface IScrollAreaProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const ScrollArea = (props: IScrollAreaProps) => {
  const { children, className, ...rest } = props;

  const viewportRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef({ y: 0, x: 0, scrollTop: 0, scrollLeft: 0 });

  const [vThumb, setVThumb] = useState({ top: 0, height: 0, visible: false });
  const [hThumb, setHThumb] = useState({ left: 0, width: 0, visible: false });

  const computeThumbs = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;

    const vRatio = el.clientHeight / el.scrollHeight;
    const hRatio = el.clientWidth / el.scrollWidth;

    const vVisible = vRatio < 0.999;
    const hVisible = hRatio < 0.999;

    if (vVisible) {
      const height = Math.max(vRatio * el.clientHeight, 32);
      const top = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * (el.clientHeight - height);
      setVThumb({ top, height, visible: true });
    } else {
      setVThumb({ top: 0, height: 0, visible: false });
    }

    if (hVisible) {
      const width = Math.max(hRatio * el.clientWidth, 32);
      const left = (el.scrollLeft / (el.scrollWidth - el.clientWidth)) * (el.clientWidth - width);
      setHThumb({ left, width, visible: true });
    } else {
      setHThumb({ left: 0, width: 0, visible: false });
    }
  }, []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(computeThumbs);
    ro.observe(el);
    el.addEventListener("scroll", computeThumbs, { passive: true });
    computeThumbs();
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", computeThumbs);
    };
  }, [computeThumbs]);

  const onVThumbMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const el = viewportRef.current;
    if (!el) return;
    dragStartRef.current = { y: e.clientY, x: e.clientX, scrollTop: el.scrollTop, scrollLeft: el.scrollLeft };
    const onMove = (me: MouseEvent) => {
      const dy = me.clientY - dragStartRef.current.y;
      el.scrollTop = dragStartRef.current.scrollTop + dy * (el.scrollHeight / el.clientHeight);
    };
    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  }, []);

  const onHThumbMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const el = viewportRef.current;
    if (!el) return;
    dragStartRef.current = { y: e.clientY, x: e.clientX, scrollTop: el.scrollTop, scrollLeft: el.scrollLeft };
    const onMove = (me: MouseEvent) => {
      const dx = me.clientX - dragStartRef.current.x;
      el.scrollLeft = dragStartRef.current.scrollLeft + dx * (el.scrollWidth / el.clientWidth);
    };
    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  }, []);

  const onVTrackClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = viewportRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    el.scrollTop = ((e.clientY - rect.top) / rect.height) * el.scrollHeight;
  }, []);

  const onHTrackClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = viewportRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    el.scrollLeft = ((e.clientX - rect.left) / rect.width) * el.scrollWidth;
  }, []);

  // Separate ScrollBar children from content children
  const childArray = React.Children.toArray(children);
  const scrollBarNodes = childArray.filter(
    (c) => React.isValidElement(c) && (c as React.ReactElement).type === ScrollBar,
  );
  const contentNodes = childArray.filter(
    (c) => !(React.isValidElement(c) && (c as React.ReactElement).type === ScrollBar),
  );

  return (
    <ScrollAreaContext.Provider value={{ viewportRef, vThumb, hThumb, onVThumbMouseDown, onHThumbMouseDown, onVTrackClick, onHTrackClick }}>
      <div className={cn("relative overflow-hidden", className)} {...rest}>
        {/* Viewport */}
        <div
          ref={viewportRef}
          className="size-full overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {contentNodes}
        </div>

        {/* Always-present vertical scrollbar */}
        <ScrollBar orientation="vertical" />

        {/* Consumer-declared scrollbars (e.g. horizontal) */}
        {scrollBarNodes}
      </div>
    </ScrollAreaContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── ScrollBar ────────────────────────────────────────────────────

interface IScrollBarProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal";
  className?: string;
}

export const ScrollBar = (props: IScrollBarProps) => {
  const { orientation = "vertical", className, ...rest } = props;
  const ctx = useScrollAreaContext();

  if (orientation === "vertical") {
    if (!ctx.vThumb.visible) return null;
    return (
      <div
        data-orientation="vertical"
        className={cn(
          "absolute right-0 top-0 flex h-full touch-none select-none",
          "w-2.5 border-l border-l-transparent p-[1px]",
          className,
        )}
        onClick={ctx.onVTrackClick}
        {...rest}
      >
        <div
          className="relative w-full"
          style={{ height: "100%" }}
        >
          <div
            onMouseDown={ctx.onVThumbMouseDown}
            style={{ height: ctx.vThumb.height, top: ctx.vThumb.top, position: "absolute", width: "100%" }}
            className="cursor-pointer rounded-full bg-border opacity-60 transition-opacity hover:opacity-100"
          />
        </div>
      </div>
    );
  }

  // Horizontal
  if (!ctx.hThumb.visible) return null;
  return (
    <div
      data-orientation="horizontal"
      className={cn(
        "absolute bottom-0 left-0 flex w-full touch-none select-none",
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        className,
      )}
      onClick={ctx.onHTrackClick}
      {...rest}
    >
      <div
        className="relative h-full"
        style={{ width: "100%" }}
      >
        <div
          onMouseDown={ctx.onHThumbMouseDown}
          style={{ width: ctx.hThumb.width, left: ctx.hThumb.left, position: "absolute", height: "100%" }}
          className="cursor-pointer rounded-full bg-border opacity-60 transition-opacity hover:opacity-100"
        />
      </div>
    </div>
  );
};
