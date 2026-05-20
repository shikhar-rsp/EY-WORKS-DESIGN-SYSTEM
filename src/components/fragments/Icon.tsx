"use client";

import { cn } from "@/lib/utils";
import { ICON_CATEGORIES } from "@/data/icons";

interface IIconProps {
  name: string;
  className?: string;
  /** Any CSS color value (hex, oklch, named color, etc.) — sets fill/stroke color directly. */
  color?: string;
}

// SVGs are already normalized to currentColor at generation time (generate-icon-data.ts)

// SVG currentColor reads the CSS `color` property, not `fill`.
// For semantic tokens (fill-destructive, fill-primary, etc.), Tailwind generates
// CSS for all registered colors so we bridge fill-* → text-* via className.
// For arbitrary values (fill-[#hex], text-[oklch(...)], etc.), Tailwind won't
// generate CSS from dynamic class names, so we extract and apply via inline style.

const FILL_KEYWORDS = new Set(["none", "current", "inherit", "transparent"]);

const bridgeFillToColor = (className: string = ""): string =>
  className
    .split(/\s+/)
    .flatMap((cls) => {
      const match = cls.match(/^(.*:)?fill-(.+)$/);
      if (!match) return [cls];
      const [, prefix = "", colorPart] = match;
      // Skip keywords and arbitrary values — arbitrary values are handled via inline style
      if (FILL_KEYWORDS.has(colorPart) || colorPart.startsWith("[")) return [cls];
      return [cls, `${prefix}text-${colorPart}`];
    })
    .join(" ");

// Extracts the color value from an arbitrary fill-[*] or text-[*] class.
// Returns the raw CSS color string (e.g. "#bada45", "oklch(...)") or undefined.
const extractArbitraryColor = (className: string = ""): string | undefined => {
  for (const cls of className.split(/\s+/)) {
    const match = cls.match(/^(?:.*:)?(?:fill|text)-\[([^\]]+)\]$/);
    if (match) return match[1];
  }
  return undefined;
};

export const Icon = (props: IIconProps) => {
  const icon = ICON_CATEGORIES.flatMap((cat) => cat.icons).find(
    (i) => i.name === props.name,
  );

  if (!icon) return null;

  const arbitraryColor = extractArbitraryColor(props.className);
  const inlineColor = props.color ?? arbitraryColor;

  return (
    <span
      className={cn(
        "inline-flex [&_svg]:h-full [&_svg]:w-full",
        bridgeFillToColor(props.className),
      )}
      style={inlineColor ? { color: inlineColor } : undefined}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: icon.svg }}
      aria-hidden="true"
    />
  );
};
