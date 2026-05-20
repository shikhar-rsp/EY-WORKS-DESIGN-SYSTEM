// ── Color conversion ──────────────────────────────────────────

const hexToHsl = (hex: string): { h: number; s: number; l: number } => {
  const sanitized = hex.replace("#", "");
  const r = parseInt(sanitized.substring(0, 2), 16) / 255;
  const g = parseInt(sanitized.substring(2, 4), 16) / 255;
  const b = parseInt(sanitized.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));
    if (max === r) h = ((g - b) / delta + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / delta + 2) / 6;
    else h = ((r - g) / delta + 4) / 6;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
};

const hslToHex = (h: number, s: number, l: number): string => {
  const sNorm = s / 100;
  const lNorm = l / 100;
  const a = sNorm * Math.min(lNorm, 1 - lNorm);

  const toChannel = (n: number): string => {
    const k = (n + h / 30) % 12;
    const color = lNorm - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };

  return `#${toChannel(0)}${toChannel(8)}${toChannel(4)}`;
};

export const darken = (hex: string, amount: number): string => {
  const { h, s, l } = hexToHsl(hex);
  return hslToHex(h, s, Math.max(0, l - amount));
};

export const lighten = (hex: string, amount: number): string => {
  const { h, s, l } = hexToHsl(hex);
  return hslToHex(h, Math.max(0, s - amount * 0.5), Math.min(100, l + amount));
};

// ── Hex validation ───────────────────────────────────────────

export const isValidHex = (value: string): boolean =>
  /^#[0-9a-fA-F]{6}$/.test(value);

// ── Brand derivation system ──────────────────────────────────

type TransformTypes = "identity" | "darken" | "lighten";

interface IBrandDerivation {
  rootVar: string;
  transform: TransformTypes;
  amount?: number;
}

const SCOPE_SELECTOR = ".color-preview-scope";

const getScopeElements = (): HTMLElement[] =>
  Array.from(document.querySelectorAll<HTMLElement>(SCOPE_SELECTOR));

/**
 * Maps each brand-related :root CSS variable to how it derives from the primary.
 * JS sets these directly on .color-preview-scope elements as inline styles so the
 * inherited :root values pass through unchanged when no override is active.
 */
const BRAND_DERIVATIONS: IBrandDerivation[] = [
  { rootVar: "--brand-primary", transform: "identity" },
  { rootVar: "--brand-primary-hovered", transform: "darken", amount: 12 },
  { rootVar: "--brand-primary-pressed", transform: "darken", amount: 20 },
  { rootVar: "--color-text-primary", transform: "identity" },
  { rootVar: "--color-bg-primary", transform: "identity" },
  { rootVar: "--color-bg-primary-hover", transform: "darken", amount: 12 },
  { rootVar: "--color-bg-primary-active", transform: "darken", amount: 20 },
  { rootVar: "--color-bg-primary-subtle", transform: "lighten", amount: 35 },
  { rootVar: "--color-bg-muted-hover", transform: "lighten", amount: 28 },
  { rootVar: "--color-border-brand", transform: "identity" },
  { rootVar: "--color-icon-brand", transform: "identity" },
  { rootVar: "--color-bg-accent-active", transform: "darken", amount: 35 },
];

/** Sets brand color on all .color-preview-scope elements (auto-derive from one primary). */
export const applyBrandColor = (hex: string): void => {
  const scopes = getScopeElements();
  BRAND_DERIVATIONS.forEach((d) => {
    let value = hex;
    if (d.transform === "darken" && d.amount !== undefined) value = darken(hex, d.amount);
    else if (d.transform === "lighten" && d.amount !== undefined) value = lighten(hex, d.amount);
    scopes.forEach((el) => el.style.setProperty(d.rootVar, value));
  });
};

/** Removes all brand color overrides from .color-preview-scope elements. */
export const resetBrandColor = (): void => {
  const scopes = getScopeElements();
  BRAND_DERIVATIONS.forEach((d) => {
    scopes.forEach((el) => el.style.removeProperty(d.rootVar));
  });
};

// ── Color slots (multi-input mode) ──────────────────────────

export interface IColorSlot {
  key: string;
  label: string;
  rootVars: string[];
  defaultHex: string;
  autoDerive: { transform: TransformTypes; amount: number } | null;
}

/**
 * Each slot groups :root variables that share the same hex value.
 * JS sets these directly on .color-preview-scope elements as inline styles.
 * When no override is active, the elements inherit the original :root values.
 */
export const COLOR_SLOTS: IColorSlot[] = [
  {
    key: "primary",
    label: "Primary",
    rootVars: ["--brand-primary", "--color-text-primary", "--color-bg-primary", "--color-border-brand", "--color-icon-brand"],
    defaultHex: "#f8785e",
    autoDerive: null,
  },
  {
    key: "hovered",
    label: "Hovered",
    rootVars: ["--brand-primary-hovered", "--color-bg-primary-hover"],
    defaultHex: "#cf624c",
    autoDerive: { transform: "darken", amount: 12 },
  },
  {
    key: "pressed",
    label: "Pressed",
    rootVars: ["--brand-primary-pressed", "--color-bg-primary-active"],
    defaultHex: "#a64c39",
    autoDerive: { transform: "darken", amount: 20 },
  },
  {
    key: "selected",
    label: "Selected",
    rootVars: ["--color-bg-primary-subtle"],
    defaultHex: "#fee4df",
    autoDerive: { transform: "lighten", amount: 35 },
  },
  {
    key: "subtleHover",
    label: "Subtle Hover",
    rootVars: ["--color-bg-muted-hover"],
    defaultHex: "#fee4df",
    autoDerive: { transform: "lighten", amount: 28 },
  },
  {
    key: "accentPressed",
    label: "Accent Pressed",
    rootVars: ["--color-bg-accent-active"],
    defaultHex: "#7e3527",
    autoDerive: { transform: "darken", amount: 35 },
  },
];

/** Sets slot colors on all .color-preview-scope elements (multi-input mode). */
export const applySlotColors = (slotColors: Record<string, string>): void => {
  const scopes = getScopeElements();
  COLOR_SLOTS.forEach((slot) => {
    const hex = slotColors[slot.key];
    if (!hex || !isValidHex(hex)) return;
    slot.rootVars.forEach((v) => {
      scopes.forEach((el) => el.style.setProperty(v, hex));
    });
  });
};

/** Derives all slot colors from a single primary hex. */
export const deriveSlotColors = (primaryHex: string): Record<string, string> => {
  const result: Record<string, string> = {};
  COLOR_SLOTS.forEach((slot) => {
    if (!slot.autoDerive) {
      result[slot.key] = primaryHex;
    } else if (slot.autoDerive.transform === "darken") {
      result[slot.key] = darken(primaryHex, slot.autoDerive.amount);
    } else {
      result[slot.key] = lighten(primaryHex, slot.autoDerive.amount);
    }
  });
  return result;
};

// ── File parsing ─────────────────────────────────────────────

interface IParsedColor {
  name: string;
  hex: string;
}

/** Extracts hex colors from a JSON token file (flat or nested). */
export const parseJsonTokens = (content: string): IParsedColor[] => {
  const colors: IParsedColor[] = [];

  const walk = (obj: Record<string, any>, prefix: string) => {
    for (const key of Object.keys(obj)) {
      const val = obj[key];
      const path = prefix ? `${prefix}.${key}` : key;

      if (typeof val === "string" && isValidHex(val)) {
        colors.push({ name: path, hex: val });
      } else if (typeof val === "object" && val !== null) {
        // Token format: { "value": "#hex", "type": "color" }
        if (typeof val.value === "string" && isValidHex(val.value)) {
          colors.push({ name: path, hex: val.value });
        } else {
          walk(val, path);
        }
      }
    }
  };

  try {
    const parsed = JSON.parse(content);
    walk(parsed, "");
  } catch {
    // Invalid JSON — return empty
  }

  return colors;
};

/** Extracts CSS custom property colors from a CSS file string. */
export const parseCssTokens = (content: string): IParsedColor[] => {
  const colors: IParsedColor[] = [];
  const regex = /(--[\w-]+)\s*:\s*(#[0-9a-fA-F]{6}(?:[0-9a-fA-F]{2})?)\s*;/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(content)) !== null) {
    const hex = match[2].substring(0, 7); // Trim alpha if present
    if (isValidHex(hex)) {
      colors.push({ name: match[1], hex });
    }
  }

  return colors;
};

// ── Image color extraction ───────────────────────────────────

/** Extracts dominant colors from an image file using canvas sampling. */
export const extractColorsFromImage = async (file: File): Promise<string[]> => {
  const bitmap = await createImageBitmap(file);
  const maxDim = 200;
  const scale = Math.min(1, maxDim / Math.max(bitmap.width, bitmap.height));
  const w = Math.round(bitmap.width * scale);
  const h = Math.round(bitmap.height * scale);

  const canvas = new OffscreenCanvas(w, h);
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(bitmap, 0, 0, w, h);
  bitmap.close();

  const { data } = ctx.getImageData(0, 0, w, h);
  const buckets = new Map<string, number>();

  // Quantize each pixel to nearest 16-step and count
  for (let i = 0; i < data.length; i += 4) {
    const r = Math.round(data[i] / 16) * 16;
    const g = Math.round(data[i + 1] / 16) * 16;
    const b = Math.round(data[i + 2] / 16) * 16;
    const a = data[i + 3];

    // Skip transparent, near-white, and near-black pixels
    if (a < 128) continue;
    if (r > 230 && g > 230 && b > 230) continue;
    if (r < 25 && g < 25 && b < 25) continue;

    const key = `${r},${g},${b}`;
    buckets.set(key, (buckets.get(key) ?? 0) + 1);
  }

  // Sort by frequency, deduplicate close colors (within distance 40)
  const sorted = [...buckets.entries()].sort((a, b) => b[1] - a[1]);
  const distinct: string[] = [];
  const colorDistance = (a: number[], b: number[]): number =>
    Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2);

  for (const [key] of sorted) {
    if (distinct.length >= 12) break;
    const rgb = key.split(",").map(Number);
    const hex = `#${rgb.map((c) => Math.min(255, c).toString(16).padStart(2, "0")).join("")}`;

    const tooClose = distinct.some((existing) => {
      const exRgb = [
        parseInt(existing.slice(1, 3), 16),
        parseInt(existing.slice(3, 5), 16),
        parseInt(existing.slice(5, 7), 16),
      ];
      return colorDistance(rgb, exRgb) < 40;
    });

    if (!tooClose) distinct.push(hex);
  }

  return distinct;
};

