"use client";

/**
 * @registry-item hooks/use-floating-position
 * @registry-type hook
 * @registry-deps (none — zero external deps)
 *
 * Distributable as a first-class registry entry.
 * Components that import this hook will list it as a registryDependency
 * in their registry JSON so the CLI copies it alongside them.
 */

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type SideTypes = "top" | "right" | "bottom" | "left";
type AlignTypes = "start" | "center" | "end";

type AnchorTypes =
  | { type: "ref"; ref: React.RefObject<HTMLElement | null> }
  | { type: "point"; x: number; y: number };

// ─── Interfaces ───────────────────────────────────────────────────────────────

interface IUseFloatingPositionProps {
  /** What to anchor the floating content against. */
  anchor: AnchorTypes;
  /** Ref to the floating content element (must be in the DOM when open). */
  contentRef: React.RefObject<HTMLElement | null>;
  /**
   * Pass `isOpen && shouldRender` here so the hook fires after
   * useDelayedUnmount has mounted the portal content into the DOM.
   */
  open: boolean;
  /** Which side to prefer. Default: "bottom". */
  side?: SideTypes;
  /** Alignment on the cross-axis. Default: "start". */
  align?: AlignTypes;
  /** Gap between anchor and content, in px. Default: 4. */
  sideOffset?: number;
  /** Cross-axis offset, in px. Default: 0. */
  alignOffset?: number;
  /**
   * Whether to flip to the opposite side when the preferred side overflows.
   * Default: true.
   */
  flip?: boolean;
  /**
   * When true the hook also returns the anchor's width so the content
   * can be sized to match the trigger (e.g. Select). Default: false.
   */
  matchWidth?: boolean;
  /** Minimum distance from each viewport edge, in px. Default: 8. */
  viewportPad?: number;
  /**
   * Whether to reposition when the window scrolls or resizes.
   * Set to false for Tooltip (which closes on scroll instead).
   * Default: true.
   */
  repositionOnScroll?: boolean;
}

interface IUseFloatingPositionResult {
  /** Computed top/left coordinates for `position: fixed` style. */
  position: { top: number; left: number };
  /** The side that was actually used (may differ from `side` after flip). */
  actualSide: SideTypes;
  /** Anchor width — only set when `matchWidth: true`. */
  width: number | undefined;
  /** Call this to force a position recalculation (e.g. after content changes size). */
  updatePosition: () => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const OPPOSITE_SIDE: Record<SideTypes, SideTypes> = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
};

const getAnchorRect = (anchor: AnchorTypes): DOMRect | null => {
  if (anchor.type === "ref") {
    return anchor.ref.current?.getBoundingClientRect() ?? null;
  }
  // Synthetic zero-size rect at the cursor point
  return {
    top: anchor.y,
    bottom: anchor.y,
    left: anchor.x,
    right: anchor.x,
    width: 0,
    height: 0,
    x: anchor.x,
    y: anchor.y,
    toJSON: () => ({}),
  } as DOMRect;
};

/**
 * Compute raw top/left coordinates (before flip/clamp) given
 * the anchor rect, content rect, and positioning options.
 */
const computeRawPosition = (
  anchorRect: DOMRect,
  contentRect: DOMRect,
  side: SideTypes,
  align: AlignTypes,
  sideOffset: number,
  alignOffset: number,
): { top: number; left: number } => {
  let top = 0;
  let left = 0;

  // Primary axis
  if (side === "bottom") {
    top = anchorRect.bottom + sideOffset;
  } else if (side === "top") {
    top = anchorRect.top - contentRect.height - sideOffset;
  } else if (side === "right") {
    left = anchorRect.right + sideOffset;
  } else {
    // left
    left = anchorRect.left - contentRect.width - sideOffset;
  }

  // Cross-axis alignment
  if (side === "bottom" || side === "top") {
    if (align === "start") left = anchorRect.left + alignOffset;
    else if (align === "center") left = anchorRect.left + anchorRect.width / 2 - contentRect.width / 2;
    else left = anchorRect.right - contentRect.width - alignOffset;
  } else {
    // left or right side — cross-axis is vertical
    if (align === "start") top = anchorRect.top + alignOffset;
    else if (align === "center") top = anchorRect.top + anchorRect.height / 2 - contentRect.height / 2;
    else top = anchorRect.bottom - contentRect.height - alignOffset;
  }

  return { top, left };
};

// ─── Hook ─────────────────────────────────────────────────────────────────────

export const useFloatingPosition = (
  props: IUseFloatingPositionProps,
): IUseFloatingPositionResult => {
  const {
    anchor,
    contentRef,
    open,
    side: preferredSide = "bottom",
    align = "start",
    sideOffset = 4,
    alignOffset = 0,
    flip = true,
    matchWidth = false,
    viewportPad = 8,
    repositionOnScroll = true,
  } = props;

  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [actualSide, setActualSide] = useState<SideTypes>(preferredSide);
  const [width, setWidth] = useState<number | undefined>(undefined);

  // Always-current ref to anchor — keeps updatePosition stable
  // even when the anchor object is recreated each render.
  const anchorRef = useRef(anchor);
  anchorRef.current = anchor;

  const updatePosition = useCallback(() => {
    const content = contentRef.current;
    if (!content) return;

    const anchorRect = getAnchorRect(anchorRef.current);
    if (!anchorRect) return;

    const contentRect = content.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Compute base position on preferred side
    let usedSide = preferredSide;
    let { top, left } = computeRawPosition(anchorRect, contentRect, preferredSide, align, sideOffset, alignOffset);

    // Flip to opposite side if the content overflows the preferred side
    if (flip) {
      let overflows = false;
      if (preferredSide === "bottom") overflows = top + contentRect.height > vh - viewportPad;
      else if (preferredSide === "top") overflows = top < viewportPad;
      else if (preferredSide === "right") overflows = left + contentRect.width > vw - viewportPad;
      else overflows = left < viewportPad; // left

      if (overflows) {
        const flippedSide = OPPOSITE_SIDE[preferredSide];
        const flipped = computeRawPosition(anchorRect, contentRect, flippedSide, align, sideOffset, alignOffset);

        // Only flip if the opposite side doesn't overflow too
        let flippedOverflows = false;
        if (preferredSide === "bottom") flippedOverflows = flipped.top < viewportPad;
        else if (preferredSide === "top") flippedOverflows = flipped.top + contentRect.height > vh - viewportPad;
        else if (preferredSide === "right") flippedOverflows = flipped.left < viewportPad;
        else flippedOverflows = flipped.left + contentRect.width > vw - viewportPad;

        if (!flippedOverflows) {
          top = flipped.top;
          left = flipped.left;
          usedSide = flippedSide;
        }
      }
    }

    // Clamp all 4 edges so content never leaves the viewport
    if (left + contentRect.width > vw - viewportPad) left = vw - contentRect.width - viewportPad;
    if (left < viewportPad) left = viewportPad;
    if (top + contentRect.height > vh - viewportPad) top = vh - contentRect.height - viewportPad;
    if (top < viewportPad) top = viewportPad;

    setPosition({ top, left });
    setActualSide(usedSide);
    if (matchWidth) setWidth(anchorRect.width);
  }, [contentRef, preferredSide, align, sideOffset, alignOffset, flip, matchWidth, viewportPad]);
  // anchorRef is a stable useRef — intentionally not in deps

  // Run immediately when open (after portal content is mounted in DOM)
  useLayoutEffect(() => {
    if (!open) return;
    updatePosition();
  }, [open, updatePosition]);

  // Reposition whenever the window scrolls or resizes
  useEffect(() => {
    if (!open || !repositionOnScroll) return;
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [open, repositionOnScroll, updatePosition]);

  return { position, actualSide, width, updatePosition };
};
