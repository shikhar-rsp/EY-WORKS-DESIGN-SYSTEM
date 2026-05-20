import { readFileSync } from "node:fs";
import path from "node:path";

import { Tick02 } from "@/components/fragments/icons/catalog";

// --- Token resolver ---
// Reads brand-tokens.css at build time so swatches always reflect the live brand.
// Extracts the `:root` and `.dark` blocks and returns each color token's raw value.

type TokenMapTypes = Record<string, string>;

const parseBlock = (css: string, selector: string): TokenMapTypes => {
  const re = new RegExp(`${selector}\\s*\\{([\\s\\S]*?)\\}`);
  const match = css.match(re);
  if (!match) return {};
  const body = match[1];
  const map: TokenMapTypes = {};
  const lineRe = /(--[a-z0-9-]+)\s*:\s*([^;]+);/gi;
  let m: RegExpExecArray | null;
  while ((m = lineRe.exec(body)) !== null) {
    map[m[1]] = m[2].trim();
  }
  return map;
};

const cssPath = path.join(process.cwd(), "src/app/brand-tokens.css");
const brandCss = readFileSync(cssPath, "utf8");
const lightTokens = parseBlock(brandCss, ":root");
const darkTokens = parseBlock(brandCss, "\\.dark");

const resolveToken = (token: string, mode: "light" | "dark"): string => {
  const source = mode === "light" ? lightTokens : darkTokens;
  const fallback = mode === "dark" ? lightTokens[token] : undefined;
  return source[token] ?? fallback ?? "transparent";
};

// --- Interfaces ---

interface IPrincipleCardProps {
  title: string;
  description: string;
}

interface IColorTokenProps {
  token: string;
  light?: string;
  dark?: string;
  label?: string;
}

interface IColorGroupProps {
  title: string;
  description?: string;
  tokens: IColorTokenProps[];
}

interface IRoleCardProps {
  role: string;
  description: string;
  tokens: string[];
  accentClass: string;
}

// --- Sub-components ---

const PrincipleCard = (props: IPrincipleCardProps) => (
  <div className="rounded-large border border-border bg-muted p-5">
    <p className="font-semibold text-foreground">{props.title}</p>
    <p className="mt-1 text-sm text-muted-foreground">{props.description}</p>
  </div>
);

const ColorSwatch = (props: IColorTokenProps) => {
  const light = props.light ?? resolveToken(props.token, "light");
  const dark = props.dark ?? resolveToken(props.token, "dark");
  return (
    <div className="flex flex-col gap-2">
      <div className="flex h-10 w-full overflow-hidden rounded-medium border border-border/50">
        <div
          className="flex-1"
          style={{ backgroundColor: light }}
          title={`Light: ${light}`}
        />
        <div
          className="flex-1 border-l border-border/30"
          style={{ backgroundColor: dark }}
          title={`Dark: ${dark}`}
        />
      </div>
      <div>
        <p className="font-mono text-[11px] font-medium text-foreground leading-tight">
          {props.token}
        </p>
        <div className="mt-0.5 flex items-center gap-1.5">
          <span className="inline-block size-1.5 shrink-0 rounded-full bg-foreground/20" />
          <span className="font-mono text-[10px] text-muted-foreground truncate">{light}</span>
          <span className="inline-block size-1.5 shrink-0 rounded-full bg-foreground/80" />
          <span className="font-mono text-[10px] text-muted-foreground truncate">{dark}</span>
        </div>
      </div>
    </div>
  );
};

const ColorGroup = (props: IColorGroupProps) => (
  <div className="mt-6">
    <h3 className="text-sm font-semibold text-foreground">{props.title}</h3>
    {props.description && (
      <p className="mt-1 text-xs text-muted-foreground">{props.description}</p>
    )}
    <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {props.tokens.map((t) => (
        <ColorSwatch key={t.token} {...t} />
      ))}
    </div>
  </div>
);

const RoleCard = (props: IRoleCardProps) => (
  <div className="rounded-large border border-border bg-muted p-5">
    <div className={`mb-3 h-1.5 w-10 rounded-full ${props.accentClass}`} />
    <p className="font-semibold text-foreground">{props.role}</p>
    <p className="mt-1 text-sm text-muted-foreground">{props.description}</p>
    <div className="mt-3 flex flex-wrap gap-1.5">
      {props.tokens.map((t) => (
        <code key={t} className="rounded bg-background px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground border border-border">
          {t}
        </code>
      ))}
    </div>
  </div>
);

// --- Page ---

const ColorPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Color</h1>
      <p className="mt-2 text-base text-muted-foreground">
        Color communicates meaning and reinforces hierarchy across the design system. [Brand Name] DS uses a
        semantic token system where every color has a defined role — no raw hex values in
        component code.
      </p>

      {/* Principles */}
      <h2
        id="principles"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Principles
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <PrincipleCard
          title="Semantic over aesthetic"
          description="Pick a color for what it means, not how it looks. Choosing the right role communicates intent — success, danger, brand — consistently across every surface."
        />
        <PrincipleCard
          title="Token-based"
          description="All colors are referenced as CSS variables. Component code never contains a raw hex value. Tokens adapt automatically between light and dark mode."
        />
        <PrincipleCard
          title="Accessible by default"
          description="Every token pairing in the system meets WCAG AA contrast requirements. Prefer semantic tokens over arbitrary colors to stay within accessible bounds."
        />
      </div>

      {/* How the token system works */}
      <h2
        id="token-system"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Token System
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        The token system has three layers. Each layer has a distinct responsibility, keeping raw
        color values isolated from Tailwind utilities and from component code.
      </p>

      <div className="mt-4 rounded-large border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Layer</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Where</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Purpose</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-background">
            <tr>
              <td className="px-4 py-3 font-semibold text-foreground align-top">
                <code className="font-mono text-xs">:root</code>
              </td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground align-top">globals.css</td>
              <td className="px-4 py-3 text-sm text-muted-foreground">
                Raw hex values as flat semantic names (e.g.{" "}
                <code className="rounded bg-muted px-1 font-mono text-xs">--primary: #f8785e</code>).
                Source of truth for light mode.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-foreground align-top">
                <code className="font-mono text-xs">.dark</code>
              </td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground align-top">globals.css</td>
              <td className="px-4 py-3 text-sm text-muted-foreground">
                Overrides every token for dark mode. Applied via the{" "}
                <code className="rounded bg-muted px-1 font-mono text-xs">.dark</code> class on{" "}
                <code className="rounded bg-muted px-1 font-mono text-xs">{"<html>"}</code>.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-foreground align-top">
                <code className="font-mono text-xs">@theme inline</code>
              </td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground align-top">globals.css</td>
              <td className="px-4 py-3 text-sm text-muted-foreground">
                Maps tokens to Tailwind utilities (e.g.{" "}
                <code className="rounded bg-muted px-1 font-mono text-xs">--color-primary: var(--primary)</code>
                {" "}→{" "}
                <code className="rounded bg-muted px-1 font-mono text-xs">bg-primary</code>,{" "}
                <code className="rounded bg-muted px-1 font-mono text-xs">text-primary</code>,{" "}
                <code className="rounded bg-muted px-1 font-mono text-xs">border-primary</code>).
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 overflow-x-auto rounded-large border border-border bg-muted">
        <pre className="px-5 py-4 text-xs leading-relaxed text-foreground font-mono">
          <code>{`:root {
  --primary: #f8785e;
  --primary-hover: #cf624c;
}

.dark {
  --primary: #f8785e;
  --primary-hover: #fa9a85;
}

@theme inline {
  --color-primary: var(--primary);
  --color-primary-hover: var(--primary-hover);
  /* Tailwind generates: bg-primary, text-primary, border-primary … */
}`}</code>
        </pre>
      </div>

      {/* Color Roles */}
      <h2
        id="color-roles"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Color Roles
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Every color in [Brand Name] DS belongs to a semantic role. Always select a color by its role — what
        it communicates — not by its appearance. Using the wrong role sends the wrong signal to
        users.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <RoleCard
          role="Brand / Primary"
          description="The [Brand Name] brand color. Used for primary actions, active states, and selected indicators."
          tokens={["bg-primary", "text-primary", "border-primary"]}
          accentClass="bg-primary"
        />
        <RoleCard
          role="Neutral"
          description="Backgrounds, text, borders, and structural elements. Forms the visual foundation of every surface."
          tokens={["bg-background", "text-foreground", "bg-muted", "border-border"]}
          accentClass="bg-foreground"
        />
        <RoleCard
          role="Destructive"
          description="Error states, irreversible actions, and serious warnings that require immediate attention."
          tokens={["bg-destructive", "text-destructive", "border-destructive"]}
          accentClass="bg-destructive"
        />
        <RoleCard
          role="Success"
          description="Positive outcomes, confirmations, and completed states."
          tokens={["bg-success", "text-success"]}
          accentClass="bg-success"
        />
        <RoleCard
          role="Warning"
          description="Caution and non-critical issues that need the user's attention without blocking them."
          tokens={["bg-warning", "text-warning"]}
          accentClass="bg-warning"
        />
        <RoleCard
          role="Info"
          description="Informational messages, progress indicators, and neutral system feedback."
          tokens={["bg-info", "text-info", "bg-info-bold"]}
          accentClass="bg-info"
        />
        <RoleCard
          role="Discovery"
          description="New features, onboarding callouts, and what's-new announcements."
          tokens={["bg-discovery", "text-discovery"]}
          accentClass="bg-discovery"
        />
        <RoleCard
          role="Accent"
          description="Semantically neutral decorative colors for tags, labels, and visual differentiation. Use when the color carries no inherent meaning."
          tokens={["bg-accent-purple", "bg-accent-teal", "bg-accent-lime", "bg-accent-yellow"]}
          accentClass="bg-accent-active"
        />
      </div>

      {/* Full Palette */}
      <h2
        id="palette"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Full Palette
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        All 57 tokens are listed below, organized by category. Each swatch shows light mode on the
        left half and dark mode on the right half, so you can compare both at a glance.
      </p>
      <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-6 rounded-sm border border-border/50" style={{ background: "linear-gradient(to right, #e5e5e5 50%, #27272a 50%)" }} />
          <span>Left = light &nbsp;/&nbsp; Right = dark</span>
        </div>
      </div>

      {/* Base */}
      <ColorGroup
        title="Base"
        description="Core background and text colors. The foundation of every surface."
        tokens={[
          { token: "--background" },
          { token: "--foreground" },
        ]}
      />

      {/* Primary */}
      <ColorGroup
        title="Primary"
        description="The [Brand Name] brand color and its interaction states."
        tokens={[
          { token: "--primary" },
          { token: "--primary-hover" },
          { token: "--primary-active" },
          { token: "--primary-foreground" },
          { token: "--primary-subtle" },
          { token: "--primary-muted" },
        ]}
      />

      {/* Secondary */}
      <ColorGroup
        title="Secondary"
        description="Subtle surfaces and secondary actions."
        tokens={[
          { token: "--secondary" },
          { token: "--secondary-hover" },
          { token: "--secondary-foreground" },
        ]}
      />

      {/* Muted */}
      <ColorGroup
        title="Muted"
        description="Subdued backgrounds and placeholder text."
        tokens={[
          { token: "--muted" },
          { token: "--muted-hover" },
          { token: "--muted-active" },
          { token: "--muted-foreground" },
        ]}
      />

      {/* Neutral */}
      <ColorGroup
        title="Neutral"
        description="Neutral container backgrounds and their hover states."
        tokens={[
          { token: "--neutral" },
          { token: "--neutral-hover" },
        ]}
      />

      {/* Destructive */}
      <ColorGroup
        title="Destructive"
        description="Error states, dangerous actions, and critical warnings."
        tokens={[
          { token: "--destructive" },
          { token: "--destructive-hover" },
          { token: "--destructive-active" },
          { token: "--destructive-foreground" },
          { token: "--destructive-bold" },
          { token: "--destructive-subtle" },
          { token: "--destructive-accent" },
        ]}
      />

      {/* Success */}
      <ColorGroup
        title="Success"
        description="Positive outcomes and completion states."
        tokens={[
          { token: "--success" },
          { token: "--success-active" },
          { token: "--success-foreground" },
        ]}
      />

      {/* Warning */}
      <ColorGroup
        title="Warning"
        description="Caution states that need attention but are not blocking."
        tokens={[
          { token: "--warning" },
        ]}
      />

      {/* Info */}
      <ColorGroup
        title="Info"
        description="Informational and progress feedback."
        tokens={[
          { token: "--info" },
          { token: "--info-bold" },
        ]}
      />

      {/* Discovery */}
      <ColorGroup
        title="Discovery"
        description="New feature highlights and onboarding callouts."
        tokens={[
          { token: "--discovery" },
        ]}
      />

      {/* Border */}
      <ColorGroup
        title="Border"
        description="All border and divider surfaces."
        tokens={[
          { token: "--border" },
          { token: "--border-hover" },
          { token: "--border-input" },
          { token: "--border-selected" },
        ]}
      />

      {/* Disabled */}
      <ColorGroup
        title="Disabled"
        description="Disabled text, surfaces, and borders."
        tokens={[
          { token: "--disabled" },
          { token: "--disabled-surface" },
          { token: "--disabled-border" },
        ]}
      />

      {/* Utility */}
      <ColorGroup
        title="Utility"
        description="Ring, placeholder, and icon-disabled tokens."
        tokens={[
          { token: "--ring" },
          { token: "--placeholder" },
          { token: "--icon-disabled" },
          { token: "--accent-active" },
        ]}
      />

      {/* Accent Palette */}
      <h2
        id="accent-palette"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Accent Palette
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Accent colors are semantically neutral — they carry no inherent meaning (unlike destructive
        or success). Use them for tags, labels, and visual differentiation when color is purely
        decorative. Never use an accent color in a context where a semantic color (success, warning,
        etc.) applies.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {(
          [
            { token: "--accent-purple" },
            { token: "--accent-orange" },
            { token: "--accent-magenta" },
            { token: "--accent-magenta-bold" },
            { token: "--accent-lime" },
            { token: "--accent-yellow" },
            { token: "--accent-blue" },
            { token: "--accent-teal" },
            { token: "--accent-teal-bold" },
            { token: "--accent-red" },
            { token: "--accent-gray" },
          ] as IColorTokenProps[]
        ).map((t) => (
          <ColorSwatch key={t.token} {...t} />
        ))}
      </div>

      {/* Dark Mode */}
      <h2
        id="dark-mode"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Dark Mode
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Every token has a corresponding dark-mode override. The{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">.dark</code> class is
        applied to{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">{"<html>"}</code> by the{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">ThemeProvider</code>. An
        anti-flash inline script reads{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">localStorage</code> before
        first paint so there is no flash of the wrong theme on load.
      </p>
      <p className="mt-3 text-sm text-muted-foreground">
        When adding a new color token, always add both a light-mode value in{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">:root</code> and a
        dark-mode override in{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">.dark</code>, and map it
        in{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">@theme inline</code>.
      </p>

      <div className="mt-4 overflow-x-auto rounded-large border border-border bg-muted">
        <pre className="px-5 py-4 text-xs leading-relaxed text-foreground font-mono">
          <code>{`/* Step 1 — raw value in :root (light mode) */
:root {
  --new-token: #your-light-hex;
}

/* Step 2 — override in .dark */
.dark {
  --new-token: #your-dark-hex;
}

/* Step 3 — register in @theme inline */
@theme inline {
  --color-new-token: var(--new-token);
  /* → generates: bg-new-token, text-new-token, border-new-token */
}`}</code>
        </pre>
      </div>

      {/* Usage Guidelines */}
      <h2
        id="usage-guidelines"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Usage Guidelines
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Do */}
        <div className="rounded-large border border-success/40 bg-success/5 p-5">
          <p className="mb-3 text-sm font-semibold text-success">Do</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2 min-w-0 break-words">
              <Tick02 className="mt-0.5 size-3 shrink-0" />
              Use Tailwind token utilities (
              <code className="rounded bg-muted px-1 font-mono text-xs">bg-primary</code>,{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">text-destructive</code>) — never raw hex values in component code.
            </li>
            <li className="flex gap-2 min-w-0 break-words">
              <Tick02 className="mt-0.5 size-3 shrink-0" />
              Choose a color by its semantic role first. Ask: is this a brand action, an error, a warning?
            </li>
            <li className="flex gap-2 min-w-0 break-words">
              <Tick02 className="mt-0.5 size-3 shrink-0" />
              Add both{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">:root</code> and{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">.dark</code> values when creating new tokens.
            </li>
            <li className="flex gap-2 min-w-0 break-words">
              <Tick02 className="mt-0.5 size-3 shrink-0" />
              Use accent colors only for decorative differentiation, never for semantic meaning.
            </li>
          </ul>
        </div>
        {/* Don't */}
        <div className="rounded-large border border-destructive/40 bg-destructive/5 p-5">
          <p className="mb-3 text-sm font-semibold text-destructive">Don&apos;t</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2 min-w-0 break-words">
              <span className="mt-0.5 shrink-0 text-destructive">✕</span>
              Hardcode hex values in components (e.g.{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">bg-[#f8785e]</code>) — this breaks dark mode and theming.
            </li>
            <li className="flex gap-2 min-w-0 break-words">
              <span className="mt-0.5 shrink-0 text-destructive">✕</span>
              Use an accent color when a semantic role (success, warning, info) is more appropriate.
            </li>
            <li className="flex gap-2 min-w-0 break-words">
              <span className="mt-0.5 shrink-0 text-destructive">✕</span>
              Skip the{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">.dark</code> override when adding a new token — every token must have a dark value.
            </li>
            <li className="flex gap-2 min-w-0 break-words">
              <span className="mt-0.5 shrink-0 text-destructive">✕</span>
              Use{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">bg-[var(--token)]</code> arbitrary syntax for tokens already registered in{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">@theme inline</code>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ColorPage;
