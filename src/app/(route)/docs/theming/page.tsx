import type { Metadata } from "next";

import { Tick02 } from "@/components/fragments/icons/catalog";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";

export const metadata: Metadata = {
  title: "Theming | [Brand Name] DS",
  description:
    "Learn how [Brand Name] DS uses CSS variables and Tailwind v4 to create a fully customizable semantic token system with automatic dark mode support.",
};

// --- Interfaces ---

interface ITokenRowProps {
  token: string;
  utility: string;
  description: string;
}

interface ITokenGroupProps {
  title: string;
  tokens: ITokenRowProps[];
}

// --- Code constants ---

const CSS_VARIABLES_CODE = `:root {
  /* Base */
  --background: #ffffff;
  --foreground: #2e2b2b;

  /* Primary (brand) */
  --primary: #f8785e;
  --primary-hover: #cf624c;
  --primary-active: #a64c39;
  --primary-foreground: #ffffff;
  --primary-subtle: #fee4df;
  --primary-muted: #fcc9bf;

  /* Destructive */
  --destructive: #cc0000;
  --destructive-foreground: #ffffff;
  --destructive-subtle: #ffe5e5;

  /* Success */
  --success: #65a30d;
  --success-foreground: #65a30d;

  /* Warning */
  --warning: #d97706;
  --warning-foreground: #d97706;

  /* Borders */
  --border: #ebe9e8;
  --border-input: #ada5a5;
  --border-selected: #cf624c;

  /* Utility */
  --ring: #8290dd;
  --radius-medium: 8px;
}

.dark {
  --background: #09090b;
  --foreground: #fafafa;

  --primary: #f8785e;
  --primary-hover: #fa9a85;
  --primary-active: #cf624c;
  --primary-foreground: #09090b;
  --primary-subtle: #2a1510;
  --primary-muted: #2a1510;

  --destructive: #ef4444;
  --destructive-foreground: #ffffff;
  --destructive-subtle: #450a0a;

  --success: #84cc16;
  --success-foreground: #84cc16;

  --warning: #f59e0b;
  --warning-foreground: #f59e0b;

  --border: #27272a;
  --border-input: #3f3f46;
  --border-selected: #f8785e;

  --ring: #818cf8;
}`;

const THEME_INLINE_CODE = `@theme inline {
  /* Maps :root tokens → Tailwind color utilities */
  --color-background:        var(--background);
  --color-foreground:        var(--foreground);
  --color-primary:           var(--primary);
  --color-primary-hover:     var(--primary-hover);
  --color-primary-foreground: var(--primary-foreground);
  --color-destructive:       var(--destructive);
  --color-success:           var(--success);
  --color-border:            var(--border);
  --color-ring:              var(--ring);
  /* … and so on for all 57 tokens */

  /* Fonts */
  --font-sans:    var(--font-geist-sans);
  --font-mono:    var(--font-geist-mono);
  --font-lexend:  var(--font-lexend);

  /* Radius */
  --radius-xsmall: 2px;
  --radius-small:  4px;
  --radius-medium: 8px;
  --radius-large:  16px;
  --radius-full:   99px;
}`;

const USAGE_CODE = `{/* Background and text */}
<div className="bg-background text-foreground">…</div>

{/* Primary brand button */}
<button className="bg-primary text-primary-foreground hover:bg-primary-hover">
  Save
</button>

{/* Destructive action */}
<button className="bg-destructive text-destructive-foreground">
  Delete
</button>

{/* Muted helper text */}
<p className="text-muted-foreground">Optional field</p>

{/* Border */}
<div className="border border-border rounded-medium">…</div>`;

const NEW_TOKEN_CODE = `/* 1. Add raw value to :root (light mode) */
:root {
  --brand-accent: #7c3aed;
}

/* 2. Add dark-mode override */
.dark {
  --brand-accent: #a78bfa;
}

/* 3. Register in @theme inline */
@theme inline {
  --color-brand-accent: var(--brand-accent);
  /* → generates bg-brand-accent, text-brand-accent, border-brand-accent */
}`;

const CUSTOM_THEME_CODE = `/* globals.css — swap the brand color */
:root {
  --primary:        #6d28d9;  /* violet instead of coral */
  --primary-hover:  #5b21b6;
  --primary-active: #4c1d95;
  --primary-subtle: #ede9fe;
  --primary-muted:  #ddd6fe;
}

.dark {
  --primary:        #7c3aed;
  --primary-hover:  #8b5cf6;
}`;

// --- Sub-components ---

const TokenRow = (props: ITokenRowProps) => (
  <tr>
    <td className="px-4 py-2.5 align-top">
      <code className="font-mono text-xs text-foreground">{props.token}</code>
    </td>
    <td className="px-4 py-2.5 align-top">
      <code className="font-mono text-xs text-muted-foreground">{props.utility}</code>
    </td>
    <td className="px-4 py-2.5 align-top text-xs text-muted-foreground">{props.description}</td>
  </tr>
);

const TokenGroup = (props: ITokenGroupProps) => (
  <div className="mt-6">
    <h3 className="text-sm font-semibold text-foreground">{props.title}</h3>
    <div className="mt-2 overflow-hidden rounded-large border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted">
            <th className="px-4 py-2.5 text-left text-xs font-semibold text-foreground">Token</th>
            <th className="px-4 py-2.5 text-left text-xs font-semibold text-foreground">Utility</th>
            <th className="px-4 py-2.5 text-left text-xs font-semibold text-foreground">Purpose</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-background">
          {props.tokens.map((t) => (
            <TokenRow key={t.token} {...t} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// --- Page ---

const ThemingPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Theming</h1>
      <p className="mt-2 leading-7 text-secondary-foreground">
        [Brand Name] DS uses CSS custom properties (CSS variables) as a semantic token layer on top of Tailwind
        v4. Every color, radius, and font is a named token — no raw hex values live in component
        code. This makes the entire system swappable: change a token in{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">globals.css</code> and
        every component that uses it updates automatically.
      </p>

      {/* Convention */}
      <h2
        id="convention"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Convention
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Tokens use <strong className="font-semibold text-foreground">flat semantic names</strong> —
        no role prefixes like <code className="rounded bg-muted px-1 font-mono text-xs">bg-</code> or{" "}
        <code className="rounded bg-muted px-1 font-mono text-xs">text-</code> in the variable name
        itself. The Tailwind utility class provides the role, not the token name.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-large border border-success/40 bg-success/5 p-4">
          <p className="mb-2 text-xs font-semibold text-success">Good</p>
          <code className="font-mono text-xs text-foreground">
            --primary: #f8785e
            <br />
            bg-primary · text-primary · border-primary
          </code>
        </div>
        <div className="rounded-large border border-destructive/40 bg-destructive/5 p-4">
          <p className="mb-2 text-xs font-semibold text-destructive">Avoid</p>
          <code className="font-mono text-xs text-foreground">
            --color-bg-brand-bold: #f8785e
            <br />
            bg-bg-brand-bold &nbsp;← double prefix
          </code>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Many tokens follow a{" "}
        <strong className="font-semibold text-foreground">base + foreground</strong> pairing
        pattern. The base token is the surface color; the{" "}
        <code className="rounded bg-muted px-1 font-mono text-xs">-foreground</code> variant is the
        readable text or icon color placed on top of it.
      </p>
      <div className="mt-3 overflow-x-auto rounded-large border border-border bg-muted">
        <pre className="px-5 py-4 text-xs leading-relaxed text-foreground font-mono">
          <code>{`--primary            → bg-primary           (the surface)
--primary-foreground → text-primary-foreground (text on that surface)

--destructive            → bg-destructive
--destructive-foreground → text-destructive-foreground`}</code>
        </pre>
      </div>

      {/* Three-layer system */}
      <h2
        id="how-it-works"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        How It Works
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        The token system has three layers, all in{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
          src/app/globals.css
        </code>
        :
      </p>
      <ol className="mt-4 space-y-4">
        <li className="flex gap-4">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            1
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">
              <code className="font-mono">:root</code> — raw values
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Defines every token as a CSS variable with a hex value. This is the single source of
              truth for light mode.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            2
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">
              <code className="font-mono">.dark</code> — dark mode overrides
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Overrides every token value when the{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">.dark</code> class is present
              on{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">{"<html>"}</code>. No
              component code changes — only the token values swap.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            3
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">
              <code className="font-mono">@theme inline</code> — Tailwind mapping
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Maps each CSS variable to a Tailwind v4 color utility. A single{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">--color-primary</code> token
              generates <code className="rounded bg-muted px-1 font-mono text-xs">bg-primary</code>,{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">text-primary</code>, and{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">border-primary</code>{" "}
              automatically.
            </p>
          </div>
        </li>
      </ol>

      <h3
        id="css-variables"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        CSS Variables (globals.css)
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        A representative subset of the token definitions:
      </p>
      <div className="mt-3">
        <CodeBlock code={CSS_VARIABLES_CODE} />
      </div>

      <h3
        id="theme-mapping"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Theme Mapping (@theme inline)
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        The <code className="rounded bg-muted px-1 font-mono text-xs">@theme inline</code> block
        (Tailwind v4 CSS-first config) connects the raw variables to Tailwind utilities:
      </p>
      <div className="mt-3">
        <CodeBlock code={THEME_INLINE_CODE} />
      </div>

      {/* Using tokens */}
      <h2
        id="using-tokens"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Using Tokens in Components
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Once a token is registered in{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">@theme inline</code>, use
        it anywhere via standard Tailwind utility classes. Never reference a raw hex value or{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
          bg-[var(--token)]
        </code>{" "}
        for tokens that are already registered — just use the utility class directly.
      </p>
      <div className="mt-3">
        <CodeBlock code={USAGE_CODE} />
      </div>

      {/* Token reference */}
      <h2
        id="token-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Token Reference
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        All 57 color tokens are listed below by category. Every token generates three Tailwind
        utilities: <code className="rounded bg-muted px-1 font-mono text-xs">bg-*</code>,{" "}
        <code className="rounded bg-muted px-1 font-mono text-xs">text-*</code>, and{" "}
        <code className="rounded bg-muted px-1 font-mono text-xs">border-*</code>.
      </p>

      <TokenGroup
        title="Base"
        tokens={[
          { token: "--background", utility: "bg-background", description: "Page and surface background" },
          { token: "--foreground", utility: "text-foreground", description: "Primary body text" },
        ]}
      />

      <TokenGroup
        title="Primary (Brand)"
        tokens={[
          { token: "--primary", utility: "bg-primary", description: "Brand color — primary actions and selected states" },
          { token: "--primary-hover", utility: "bg-primary-hover", description: "Hover state of primary surfaces" },
          { token: "--primary-active", utility: "bg-primary-active", description: "Pressed / active state" },
          { token: "--primary-foreground", utility: "text-primary-foreground", description: "Text or icons placed on a primary surface" },
          { token: "--primary-subtle", utility: "bg-primary-subtle", description: "Very light tint for selected backgrounds" },
          { token: "--primary-muted", utility: "bg-primary-muted", description: "Slightly stronger primary tint" },
        ]}
      />

      <TokenGroup
        title="Secondary"
        tokens={[
          { token: "--secondary", utility: "bg-secondary", description: "Secondary button and surface background" },
          { token: "--secondary-hover", utility: "bg-secondary-hover", description: "Hover state of secondary surfaces" },
          { token: "--secondary-foreground", utility: "text-secondary-foreground", description: "Text on secondary surfaces" },
        ]}
      />

      <TokenGroup
        title="Muted & Neutral"
        tokens={[
          { token: "--muted", utility: "bg-muted", description: "Lowest-emphasis surface (code blocks, table headers)" },
          { token: "--muted-hover", utility: "bg-muted-hover", description: "Hover state of muted surfaces" },
          { token: "--muted-foreground", utility: "text-muted-foreground", description: "Secondary and placeholder text" },
          { token: "--neutral", utility: "bg-neutral", description: "Neutral container background" },
          { token: "--neutral-hover", utility: "bg-neutral-hover", description: "Hover state of neutral containers" },
        ]}
      />

      <TokenGroup
        title="Semantic"
        tokens={[
          { token: "--destructive", utility: "bg-destructive / text-destructive", description: "Error states and destructive actions" },
          { token: "--destructive-foreground", utility: "text-destructive-foreground", description: "Text on destructive backgrounds" },
          { token: "--destructive-subtle", utility: "bg-destructive-subtle", description: "Light error background tint" },
          { token: "--success", utility: "text-success", description: "Positive outcomes and confirmations" },
          { token: "--success-foreground", utility: "text-success-foreground", description: "Text on success surfaces" },
          { token: "--warning", utility: "text-warning", description: "Caution states" },
          { token: "--info", utility: "text-info", description: "Informational feedback" },
          { token: "--discovery", utility: "text-discovery", description: "New features and onboarding callouts" },
        ]}
      />

      <TokenGroup
        title="Border & Input"
        tokens={[
          { token: "--border", utility: "border-border", description: "Default dividers and container borders" },
          { token: "--border-hover", utility: "border-border-hover", description: "Border on hover" },
          { token: "--border-input", utility: "border-border-input", description: "Form field borders" },
          { token: "--border-selected", utility: "border-border-selected", description: "Selected / focused field border" },
          { token: "--ring", utility: "ring-ring", description: "Focus ring on interactive elements" },
        ]}
      />

      <TokenGroup
        title="Disabled & Utility"
        tokens={[
          { token: "--disabled", utility: "text-disabled", description: "Disabled text color" },
          { token: "--disabled-surface", utility: "bg-disabled-surface", description: "Disabled input or button surface" },
          { token: "--disabled-border", utility: "border-disabled-border", description: "Disabled element border" },
          { token: "--placeholder", utility: "text-placeholder", description: "Input placeholder text" },
          { token: "--icon-disabled", utility: "text-icon-disabled", description: "Disabled icon color" },
        ]}
      />

      {/* Radius */}
      <h2
        id="radius"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Radius Scale
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Five border-radius tokens cover the full range from tight UI elements to pills. All are
        registered in{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">@theme inline</code> as{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">--radius-*</code> tokens,
        generating{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">rounded-*</code> utilities.
      </p>
      <div className="mt-4 overflow-hidden rounded-large border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 text-left text-xs font-semibold text-foreground">Token</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-foreground">Utility</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-foreground">Value</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-foreground">Preview</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-background">
            {(
              [
                { token: "--radius-xsmall", utility: "rounded-xsmall", value: "2px" },
                { token: "--radius-small", utility: "rounded-small", value: "4px" },
                { token: "--radius-medium", utility: "rounded-medium", value: "8px" },
                { token: "--radius-large", utility: "rounded-large", value: "16px" },
                { token: "--radius-full", utility: "rounded-full", value: "99px" },
              ] as { token: string; utility: string; value: string }[]
            ).map((r) => (
              <tr key={r.token}>
                <td className="px-4 py-3">
                  <code className="font-mono text-xs text-foreground">{r.token}</code>
                </td>
                <td className="px-4 py-3">
                  <code className="font-mono text-xs text-muted-foreground">{r.utility}</code>
                </td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{r.value}</td>
                <td className="px-4 py-3">
                  <div
                    className="h-7 w-14 bg-primary/20 border border-primary/40"
                    style={{ borderRadius: r.value }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Adding new tokens */}
      <h2
        id="adding-tokens"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Adding New Tokens
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Follow these three steps any time you need to introduce a new design token:
      </p>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        <li className="flex gap-2">
          <Tick02 className="size-3" />
          Define the raw value in{" "}
          <code className="rounded bg-muted px-1 font-mono text-xs">:root</code> (light mode).
        </li>
        <li className="flex gap-2">
          <Tick02 className="size-3" />
          Add the dark-mode override in{" "}
          <code className="rounded bg-muted px-1 font-mono text-xs">.dark</code>.
        </li>
        <li className="flex gap-2">
          <Tick02 className="size-3" />
          Register it in{" "}
          <code className="rounded bg-muted px-1 font-mono text-xs">@theme inline</code> as{" "}
          <code className="rounded bg-muted px-1 font-mono text-xs">--color-{"{name}"}: var(--{"{name}"})</code>.
        </li>
      </ul>
      <div className="mt-4">
        <CodeBlock code={NEW_TOKEN_CODE} />
      </div>

      {/* Customizing the theme */}
      <h2
        id="customizing"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Customizing the Theme
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        To rebrand the design system, change only the{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">--primary</code> family
        tokens in{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">globals.css</code>. Every
        component that uses{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">bg-primary</code>,{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">text-primary</code>, or{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">border-primary</code>{" "}
        inherits the new color immediately — no component files need to change.
      </p>
      <div className="mt-4">
        <CodeBlock code={CUSTOM_THEME_CODE} />
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        You can also use the live{" "}
        <strong className="font-semibold text-foreground">Color Picker</strong> toolbar on any
        component docs page to preview brand color changes before committing them to{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">globals.css</code>.
      </p>

      {/* Dark mode */}
      <h2
        id="dark-mode"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Dark Mode
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Dark mode is implemented with a{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">.dark</code> class on the{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">{"<html>"}</code> element —
        no third-party library required. The{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">ThemeProvider</code> at{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
          src/components/providers/ThemeProvider.tsx
        </code>{" "}
        manages the toggle and persists the preference in{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">localStorage</code> under
        the key{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">eyds-theme</code>.
      </p>
      <p className="mt-3 text-sm text-muted-foreground">
        An anti-flash inline script in{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
          src/app/layout.tsx
        </code>{" "}
        reads{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">localStorage</code>{" "}
        before the first paint, so the correct theme is applied with no visible flash on page load or
        refresh.
      </p>
    </div>
  );
};

export default ThemingPage;
