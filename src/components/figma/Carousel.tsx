"use client";

import { Children, createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

import { ArrowLeft01Round, ArrowRight01Round } from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";

// ─── CarouselApi type ─────────────────────────────────────────────

export interface ICarouselApi {
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
  canScrollPrev: () => boolean;
  canScrollNext: () => boolean;
  selectedScrollSnap: () => number;
  scrollSnapList: () => number[];
  on: (event: "select" | "reInit", handler: () => void) => void;
  off: (event: "select" | "reInit", handler: () => void) => void;
}

export type CarouselApi = ICarouselApi;

// ─── Context ──────────────────────────────────────────────────────

interface ICarouselContext {
  currentIndex: number;
  count: number;
  slidesPerView: number;
  canScrollPrevValue: boolean;
  canScrollNextValue: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
  setCount: (n: number) => void;
  setSlidesPerView: (n: number) => void;
  orientation: "horizontal" | "vertical";
  loop: boolean;
  isDragging: boolean;
  setIsDragging: (v: boolean) => void;
}

const CarouselContext = createContext<ICarouselContext | null>(null);

const useCarouselContext = () => {
  const ctx = useContext(CarouselContext);
  if (!ctx) throw new Error("must be used inside <Carousel>");
  return ctx;
};

// ═══════════════════════════════════════════════════════════════════

// ─── Carousel root ────────────────────────────────────────────────

interface ICarouselOpts {
  loop?: boolean;
  align?: "start" | "center" | "end";
}

interface ICarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  /** Shorthand for `opts.loop`. */
  loop?: boolean;
  opts?: ICarouselOpts;
  /** Callback receiving a CarouselApi instance for programmatic control. Note: `plugins` not supported (no Embla). */
  setApi?: (api: ICarouselApi) => void;
  children?: React.ReactNode;
  className?: string;
}

export const Carousel = (props: ICarouselProps) => {
  const {
    orientation = "horizontal",
    loop: loopProp = false,
    opts,
    setApi,
    children,
    className,
    ...rest
  } = props;

  const loop = opts?.loop ?? loopProp;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  // Event listeners for select/reInit
  const listenersRef = useRef<Map<"select" | "reInit", Set<() => void>>>(
    new Map([["select", new Set()], ["reInit", new Set()]])
  );

  const canScrollPrevValue = loop ? count > slidesPerView : currentIndex > 0;
  const canScrollNextValue = loop ? count > slidesPerView : currentIndex < count - slidesPerView;

  const scrollTo = useCallback((index: number) => {
    const maxIndex = Math.max(0, count - slidesPerView);
    const next = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(next);
    listenersRef.current.get("select")?.forEach((h) => h());
  }, [count, slidesPerView]);

  const scrollPrev = useCallback(() => {
    setCurrentIndex((i) => {
      const maxIndex = Math.max(0, count - slidesPerView);
      const next = i === 0 ? (loop ? maxIndex : 0) : i - 1;
      listenersRef.current.get("select")?.forEach((h) => h());
      return next;
    });
  }, [count, slidesPerView, loop]);

  const scrollNext = useCallback(() => {
    setCurrentIndex((i) => {
      const maxIndex = Math.max(0, count - slidesPerView);
      const next = i >= maxIndex ? (loop ? 0 : maxIndex) : i + 1;
      listenersRef.current.get("select")?.forEach((h) => h());
      return next;
    });
  }, [count, slidesPerView, loop]);

  // Clamp currentIndex when count/slidesPerView changes
  useEffect(() => {
    const maxIndex = Math.max(0, count - slidesPerView);
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [count, slidesPerView, currentIndex]);

  // Build CarouselApi and fire setApi once count is known
  useEffect(() => {
    if (!setApi || count === 0) return;
    const api: ICarouselApi = {
      scrollPrev,
      scrollNext,
      scrollTo,
      canScrollPrev: () => loop ? count > slidesPerView : currentIndex > 0,
      canScrollNext: () => loop ? count > slidesPerView : currentIndex < count - slidesPerView,
      selectedScrollSnap: () => currentIndex,
      scrollSnapList: () => Array.from({ length: count }, (_, i) => i),
      on: (event, handler) => listenersRef.current.get(event)?.add(handler),
      off: (event, handler) => listenersRef.current.get(event)?.delete(handler),
    };
    setApi(api);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    const prev = orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";
    const next = orientation === "horizontal" ? "ArrowRight" : "ArrowDown";
    if (e.key === prev) { e.preventDefault(); scrollPrev(); }
    if (e.key === next) { e.preventDefault(); scrollNext(); }
  }, [orientation, scrollPrev, scrollNext]);

  return (
    <CarouselContext.Provider
      value={{ currentIndex, count, slidesPerView, canScrollPrevValue, canScrollNextValue, scrollPrev, scrollNext, scrollTo, setCount, setSlidesPerView, orientation, loop, isDragging, setIsDragging }}
    >
      <div
        role="region"
        aria-roledescription="carousel"
        onKeyDown={onKeyDown}
        tabIndex={0}
        className={cn("relative outline-none", className)}
        {...rest}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── CarouselContent ──────────────────────────────────────────────

interface ICarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export const CarouselContent = (props: ICarouselContentProps) => {
  const { className, children, ...rest } = props;
  const ctx = useCarouselContext();
  const { currentIndex, count, slidesPerView, orientation, loop, scrollTo, setCount, setSlidesPerView, setIsDragging } = ctx;

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const childCount = Children.count(children);

  // Update item count whenever children change
  useEffect(() => {
    setCount(childCount);
  }, [childCount, setCount]);

  // Compute slidesPerView from item vs viewport size
  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const compute = () => {
      const firstItem = track.querySelector("[data-carousel-item]") as HTMLElement | null;
      if (!firstItem) { setSlidesPerView(1); return; }
      const isVertical = orientation === "vertical";
      const viewportSize = isVertical ? viewport.clientHeight : viewport.clientWidth;
      const itemSize = isVertical ? firstItem.offsetHeight : firstItem.offsetWidth;
      if (!itemSize) { setSlidesPerView(1); return; }
      const spv = Math.max(1, Math.round(viewportSize / itemSize));
      setSlidesPerView(spv);
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(viewport);
    return () => ro.disconnect();
  }, [orientation, setSlidesPerView, childCount]);

  // ── Translate state ────────────────────────────────────────────
  const [translatePx, setTranslatePx] = useState("0px");

  // Helper: get item size in pixels
  const getItemSize = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const firstItem = track.querySelector("[data-carousel-item]") as HTMLElement | null;
    if (!firstItem) return 0;
    return orientation === "vertical" ? firstItem.offsetHeight : firstItem.offsetWidth;
  }, [orientation]);

  useEffect(() => {
    const itemSize = getItemSize();
    setTranslatePx(`${-(currentIndex * itemSize)}px`);
  }, [currentIndex, orientation, childCount, getItemSize]);

  // ── Drag handling ──────────────────────────────────────────────
  const dragRef = useRef({
    active: false,
    startPos: 0,
    startTranslate: 0,
    currentDelta: 0,
    pointerId: -1,
    didDrag: false,
  });

  const [dragOffset, setDragOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    // Only handle primary button (left click / touch)
    if (e.button !== 0) return;
    const isVertical = orientation === "vertical";
    const pos = isVertical ? e.clientY : e.clientX;
    const itemSize = getItemSize();

    dragRef.current = {
      active: true,
      startPos: pos,
      startTranslate: -(currentIndex * itemSize),
      currentDelta: 0,
      pointerId: e.pointerId,
      didDrag: false,
    };

    setIsTransitioning(false);
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  }, [orientation, currentIndex, getItemSize, setIsDragging]);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag.active || e.pointerId !== drag.pointerId) return;

    const isVertical = orientation === "vertical";
    const pos = isVertical ? e.clientY : e.clientX;
    const delta = pos - drag.startPos;
    drag.currentDelta = delta;
    if (Math.abs(delta) > 4) drag.didDrag = true;

    setDragOffset(delta);
  }, [orientation]);

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag.active || e.pointerId !== drag.pointerId) return;

    drag.active = false;
    const delta = drag.currentDelta;
    const itemSize = getItemSize();
    const threshold = itemSize * 0.2; // 20% of item width to trigger navigation
    const maxIndex = Math.max(0, count - slidesPerView);

    setDragOffset(0);
    setIsTransitioning(true);
    setIsDragging(false);

    if (Math.abs(delta) > threshold && itemSize > 0) {
      // Determine how many slides to move based on drag distance
      const slidesMoved = Math.round(Math.abs(delta) / itemSize) || 1;
      if (delta > 0) {
        // Dragged right/down → go to previous
        const target = loop
          ? (currentIndex - slidesMoved + count) % count
          : Math.max(0, currentIndex - slidesMoved);
        scrollTo(target);
      } else {
        // Dragged left/up → go to next
        const target = loop
          ? (currentIndex + slidesMoved) % count
          : Math.min(maxIndex, currentIndex + slidesMoved);
        scrollTo(target);
      }
    }
    // If below threshold, snaps back (dragOffset reset to 0 with transition on)
  }, [getItemSize, count, slidesPerView, currentIndex, loop, scrollTo, setIsDragging]);

  // Suppress click events that fire immediately after a drag ends
  const onClickCapture = useCallback((e: React.MouseEvent) => {
    if (dragRef.current.didDrag) {
      e.stopPropagation();
      e.preventDefault();
      dragRef.current.didDrag = false;
    }
  }, []);

  const onPointerCancel = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag.active || e.pointerId !== drag.pointerId) return;
    drag.active = false;
    setDragOffset(0);
    setIsTransitioning(true);
    setIsDragging(false);
  }, [setIsDragging]);

  // Compute final transform: base translate + live drag offset
  const isVertical = orientation === "vertical";
  const baseTranslate = parseFloat(translatePx) || 0;
  const finalTranslate = `${baseTranslate + dragOffset}px`;

  return (
    <div
      ref={viewportRef}
      className={cn(
        "overflow-hidden select-none",
        isVertical ? "h-full" : "w-full",
        "touch-none cursor-grab active:cursor-grabbing",
        className,
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onClickCapture={onClickCapture}
    >
      <div
        ref={trackRef}
        className={cn(
          "flex",
          isTransitioning && "transition-transform duration-300 ease-in-out",
          isVertical ? "-mt-4 flex-col" : "-ml-4",
        )}
        style={{
          transform: isVertical
            ? `translateY(${finalTranslate})`
            : `translateX(${finalTranslate})`,
        }}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── CarouselItem ─────────────────────────────────────────────────

interface ICarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export const CarouselItem = (props: ICarouselItemProps) => {
  const { className, children, ...rest } = props;
  const { orientation } = useCarouselContext();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-carousel-item
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "vertical" ? "pt-4" : "pl-4",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── CarouselPrevious ─────────────────────────────────────────────

interface ICarouselPreviousProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const CarouselPrevious = (props: ICarouselPreviousProps) => {
  const { className, ...rest } = props;
  const { scrollPrev, canScrollPrevValue, orientation } = useCarouselContext();

  return (
    <button
      type="button"
      aria-label="Previous slide"
      onClick={scrollPrev}
      disabled={!canScrollPrevValue}
      className={cn(
        "absolute flex size-8 items-center justify-center rounded-full",
        "border border-border bg-background text-foreground shadow-sm",
        "transition-colors hover:bg-muted",
        "disabled:cursor-not-allowed disabled:opacity-50",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      {...rest}
    >
      <ArrowLeft01Round className="size-3.5" />
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── CarouselNext ─────────────────────────────────────────────────

interface ICarouselNextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const CarouselNext = (props: ICarouselNextProps) => {
  const { className, ...rest } = props;
  const { scrollNext, canScrollNextValue, orientation } = useCarouselContext();

  return (
    <button
      type="button"
      aria-label="Next slide"
      onClick={scrollNext}
      disabled={!canScrollNextValue}
      className={cn(
        "absolute flex size-8 items-center justify-center rounded-full",
        "border border-border bg-background text-foreground shadow-sm",
        "transition-colors hover:bg-muted",
        "disabled:cursor-not-allowed disabled:opacity-50",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      {...rest}
    >
      <ArrowRight01Round className="size-3.5" />
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── useCarousel hook (shadcn-compatible) ─────────────────────────

/** Access the carousel context programmatically. Must be called inside a <Carousel> tree. */
export const useCarousel = () => useCarouselContext();
