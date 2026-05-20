"use client";

/**
 * @registry-item hooks/use-delayed-unmount
 * @registry-type hook
 * @registry-deps (none — zero external deps)
 *
 * Distributable as a first-class registry entry.
 * Components that import this hook will list it as a registryDependency
 * in their registry JSON so the CLI copies it alongside them.
 */

import { useEffect, useState } from "react";

/**
 * Keeps an element mounted for `duration` ms after `open` goes false,
 * so CSS exit transitions have time to play.
 *
 * Returns:
 *   shouldRender — whether the element should be in the DOM
 *   state        — "open" | "closed" — drives data-[state=*] CSS selectors
 *
 * Opening: uses a double-rAF so the browser paints one frame with
 * data-state="closed" (opacity-0 / scale-95) before flipping to "open".
 * Without this React can commit both state changes in the same browser frame,
 * leaving the CSS transition no "from" value to animate from.
 *
 * Closing: flips state to "closed" immediately, then unmounts after `duration`.
 */
export const useDelayedUnmount = (open: boolean, duration = 200) => {
  // Always start closed so SSR and the first client render match,
  // regardless of `defaultOpen`. The effect below promotes to open on mount.
  const [shouldRender, setShouldRender] = useState(false);
  const [state, setState] = useState<"open" | "closed">("closed");

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      // Frame 1: element mounts with data-state="closed" (opacity-0 / scale-95)
      // Frame 2: flip to "open" → CSS transition fires
      let innerRaf = 0;
      const outerRaf = requestAnimationFrame(() => {
        innerRaf = requestAnimationFrame(() => setState("open"));
      });
      return () => {
        cancelAnimationFrame(outerRaf);
        cancelAnimationFrame(innerRaf);
      };
    }
    // Exit: start the transition immediately, unmount after it finishes
    setState("closed");
    const t = setTimeout(() => setShouldRender(false), duration);
    return () => clearTimeout(t);
  }, [open, duration]);

  return { shouldRender, state };
};
