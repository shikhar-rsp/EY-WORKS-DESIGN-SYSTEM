const FONT_VAR = "--font-preview";
const FONT_LINK_ID = "ds-custom-font-link";
const FONT_FAMILY_CUSTOM = "DSCustomFont";

/**
 * Extracts the font family name from a Google Fonts URL.
 * Supports both CSS2 API formats:
 *   ?family=Inter:wght@400;500
 *   ?family=Roboto+Mono
 */
export const parseFontFamilyFromUrl = (url: string): string | null => {
  try {
    const parsed = new URL(url);
    const family = parsed.searchParams.get("family");
    if (!family) return null;
    // "Inter:wght@400;500" → "Inter", "Roboto+Mono:wght@400" → "Roboto Mono"
    return family.split(":")[0].replace(/\+/g, " ");
  } catch {
    return null;
  }
};

/** Injects a Google Fonts <link> into <head>, replacing any previous one. */
export const injectFontLink = (url: string): void => {
  removeFontLink();
  const link = document.createElement("link");
  link.id = FONT_LINK_ID;
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
};

/** Removes the injected font <link> from <head> if present. */
export const removeFontLink = (): void => {
  const existing = document.getElementById(FONT_LINK_ID);
  if (existing) existing.remove();
};

/**
 * Loads a .ttf or .otf file as a FontFace and registers it with document.fonts.
 * Returns the font-family name to use in CSS ("DSCustomFont").
 */
export const loadFontFromFile = async (file: File): Promise<string> => {
  const buffer = await file.arrayBuffer();
  const fontFace = new FontFace(FONT_FAMILY_CUSTOM, buffer);
  await fontFace.load();
  // Remove any previously registered custom font with the same name
  document.fonts.forEach((f) => {
    if (f.family === FONT_FAMILY_CUSTOM) document.fonts.delete(f);
  });
  document.fonts.add(fontFace);
  return FONT_FAMILY_CUSTOM;
};

/** Applies a font family to the --font-lexend CSS variable globally. */
export const applyFont = (familyName: string): void => {
  document.documentElement.style.setProperty(FONT_VAR, `"${familyName}", sans-serif`);
};

/** Removes the runtime --font-lexend override, reverting to the build-time value. */
export const resetFont = (): void => {
  document.documentElement.style.removeProperty(FONT_VAR);
  removeFontLink();
  document.fonts.forEach((f) => {
    if (f.family === FONT_FAMILY_CUSTOM) document.fonts.delete(f);
  });
};
