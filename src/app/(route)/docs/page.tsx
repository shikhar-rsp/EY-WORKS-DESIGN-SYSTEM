import type { Metadata } from "next";

import { CodeBlock } from "@/components/fragments/typography/CodeBlock";

export const metadata: Metadata = {
  title: "Introduction | EYWorks DS",
  description:
    "EYWorks DS is the EYWorks design system — open-source React components synced from Figma, styled with Tailwind CSS v4, and built to be owned and customized.",
};

const COPY_BUTTON_CODE = `cp src/components/figma/Button.tsx your-project/components/Button.tsx`;

const USAGE_IMPORT_CODE = `import { Button } from "@/components/figma/Button"`;

const USAGE_CODE = `<Button variant="primary">Get Started</Button>
<Button variant="secondary">Learn More</Button>`;

const DocsPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title & Description ─────────────────────────────────── */}
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Introduction
        </h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A design system built for EYWorks products. Open source. Figma-synced.
        Built to be owned.
      </p>

      {/* ── Standout statement ──────────────────────────────────── */}
      <div className="mt-6 rounded-lg border border-border bg-muted px-6 py-5">
        <p className="text-base font-semibold leading-7 text-foreground">
          EYWorks DS is not a component library you install. It is how you build your
          component library.
        </p>
        <p className="mt-2 leading-7 text-secondary-foreground">
          Copy the component source into your project. Own it. Read it. Modify
          it. There is no runtime dependency, no version mismatch, no black box.
        </p>
      </div>

      {/* ── About EYWorks DS ────────────────────────────────────── */}
      <h2
        id="about-eyworks-ds"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        About EYWorks DS
      </h2>
      <p className="mt-4 leading-7 text-secondary-foreground">
        EYWorks DS (EYWorks Design System) is an open-source collection of
        React + TypeScript components designed and maintained by EYWorks. Every
        component is extracted directly from a Figma master file using the Figma
        MCP integration — design tokens, spacing, typography, and color are all
        kept in lockstep with the source of truth in Figma.
      </p>
      <p className="mt-4 leading-7 text-secondary-foreground">
        The architecture is called{" "}
        <span className="font-medium text-foreground">Dynamic Injection</span>.
        Design tokens from Figma are stored as CSS custom properties in{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
          globals.css
        </code>{" "}
        and mapped to Tailwind v4 utility classes via{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
          @theme inline
        </code>
        . This means updating a brand color in Figma propagates to every
        component in a single sync.
      </p>
      <p className="mt-4 leading-7 text-secondary-foreground">
        EYWorks DS currently ships with{" "}
        <span className="font-medium text-foreground">
          production-ready components
        </span>{" "}
        — Button, Input Field, Toggle, Checkbox, Radio, Upload Input, Calendar
        and more — with full variant coverage, dark mode, and interactive
        documentation.
      </p>

      {/* ── Principles ──────────────────────────────────────────── */}
      <h2
        id="principles"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Principles
      </h2>

      <h3
        id="open-code"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Open Code
      </h3>
      <p className="mt-2 leading-7 text-secondary-foreground">
        Components live in your codebase, not inside a package. You copy the
        source file into your project and it becomes yours.
      </p>
      <ul className="mt-3 space-y-2 text-secondary-foreground">
        <li className="flex gap-2">
          <span className="mt-1 shrink-0 text-primary">→</span>
          <span>
            <span className="font-medium text-foreground">Full transparency.</span>{" "}
            See exactly how each component is built.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 shrink-0 text-primary">→</span>
          <span>
            <span className="font-medium text-foreground">
              Zero runtime dependency.
            </span>{" "}
            No version mismatches or surprise deprecations.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 shrink-0 text-primary">→</span>
          <span>
            <span className="font-medium text-foreground">AI-friendly.</span> LLMs
            can read, understand and improve components because the code exists
            directly in your repo.
          </span>
        </li>
      </ul>

      <h3
        id="figma-synced-tokens"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Figma-Synced Tokens
      </h3>
      <p className="mt-2 leading-7 text-secondary-foreground">
        Every design token — color, spacing, typography, border radius — is
        extracted from the EYWorks Figma master file and injected as a CSS
        custom property. When the design team updates Figma, running{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
          /sync-design
        </code>{" "}
        regenerates the tokens. Design and code stay aligned without manual
        translation.
      </p>
      <p className="mt-3 leading-7 text-secondary-foreground">
        Tokens are registered in{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
          @theme inline
        </code>
        , allowing Tailwind v4 to automatically generate utility classes.
      </p>

      <h3
        id="composition"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Composition
      </h3>
      <p className="mt-2 leading-7 text-secondary-foreground">
        Components in EYWorks DS are focused primitives, not monolithic
        configurables. Instead of a single{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
          &lt;Button&gt;
        </code>{" "}
        with dozens of props trying to handle every scenario, EYWorks DS
        provides composable interfaces where variants, sizes, states and
        modifiers are predictable for teams and easy for AI tools to reason
        about.
      </p>

      <h3
        id="beautiful-defaults"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Beautiful Defaults
      </h3>
      <p className="mt-2 leading-7 text-secondary-foreground">
        Every component ships with carefully designed defaults that look
        polished out of the box.
      </p>
      <ul className="mt-3 space-y-2 text-secondary-foreground">
        <li className="flex gap-2">
          <span className="mt-1 shrink-0 text-primary">→</span>
          <span>
            <span className="font-medium text-foreground">Good by default.</span>
          </span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 shrink-0 text-primary">→</span>
          <span>
            <span className="font-medium text-foreground">Unified design language.</span>
          </span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 shrink-0 text-primary">→</span>
          <span>
            <span className="font-medium text-foreground">
              Easily customizable
            </span>{" "}
            using CVA variants and tokens.
          </span>
        </li>
      </ul>

      <h3
        id="brand-customization"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Brand Customization
      </h3>
      <p className="mt-2 leading-7 text-secondary-foreground">
        EYWorks DS supports dynamic brand previewing. Documentation pages
        include tools like:
      </p>
      <ul className="mt-3 space-y-2 text-secondary-foreground">
        <li className="flex gap-2">
          <span className="mt-1 shrink-0 text-primary">→</span>
          <span className="font-medium text-foreground">Color Picker</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 shrink-0 text-primary">→</span>
          <span className="font-medium text-foreground">Font Picker</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 shrink-0 text-primary">→</span>
          <span className="font-medium text-foreground">Size Slider</span>
        </li>
      </ul>
      <p className="mt-3 leading-7 text-secondary-foreground">
        Preview components with your brand styles before writing code. Dark mode
        is built-in from day one with full token overrides.
      </p>

      {/* ── Tech Stack ──────────────────────────────────────────── */}
      <h2
        id="tech-stack"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Tech Stack
      </h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">
                Technology
              </th>
              <th className="px-4 py-3 font-semibold text-foreground">Role</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">
                React 19 + TypeScript
              </td>
              <td className="px-4 py-3 text-secondary-foreground">
                Component framework with strict typing
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">
                Next.js (App Router)
              </td>
              <td className="px-4 py-3 text-secondary-foreground">
                Documentation site, server components, routing
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">Tailwind CSS v4</td>
              <td className="px-4 py-3 text-secondary-foreground">
                CSS-first styling engine, utility classes from design tokens
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">CVA</td>
              <td className="px-4 py-3 text-secondary-foreground">
                Type-safe variant management for components
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">Figma MCP</td>
              <td className="px-4 py-3 text-secondary-foreground">
                Design-to-code sync — tokens, layouts, and components from Figma
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        id="why-this-stack"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Why this stack?
      </h3>
      <p className="mt-2 leading-7 text-secondary-foreground">EYWorks DS follows:</p>
      <p className="mt-3 rounded-lg border border-border bg-muted px-4 py-3 font-mono text-sm text-foreground">
        Figma → Tokens → Components → Documentation → Production
      </p>
      <p className="mt-4 leading-7 text-secondary-foreground">This enables:</p>
      <ul className="mt-3 space-y-2 text-secondary-foreground">
        <li className="flex gap-2">
          <span className="mt-1 shrink-0 text-success-bold">✓</span>
          <span>Faster iteration</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 shrink-0 text-success-bold">✓</span>
          <span>Consistent UI</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 shrink-0 text-success-bold">✓</span>
          <span>Strong scalability</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 shrink-0 text-success-bold">✓</span>
          <span>Shared design language</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 shrink-0 text-success-bold">✓</span>
          <span>AI-readable architecture</span>
        </li>
      </ul>

      {/* ── Getting Started ─────────────────────────────────────── */}
      <h2
        id="getting-started"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Getting Started
      </h2>
      <p className="mt-4 leading-7 text-secondary-foreground">
        EYWorks DS does not require installation.
      </p>
      <ul className="mt-3 space-y-1 text-secondary-foreground">
        <li className="flex gap-2">
          <span className="mt-1 shrink-0 text-primary">→</span>
          <span>Browse the component.</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 shrink-0 text-primary">→</span>
          <span>Copy it.</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-1 shrink-0 text-primary">→</span>
          <span>Ship it.</span>
        </li>
      </ul>

      <ol className="mt-6 space-y-4">
        <li className="flex gap-4">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            1
          </span>
          <div>
            <p className="font-medium text-foreground">Browse Components</p>
            <p className="mt-1 leading-6 text-secondary-foreground">
              Use Search (
              <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                ⌘K
              </kbd>
              ) or Sidebar Navigation. Every page includes live previews,
              variants, documentation, and API references.
            </p>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            2
          </span>
          <div>
            <p className="font-medium text-foreground">Copy Source Files</p>
            <p className="mt-1 leading-6 text-secondary-foreground">
              Every component page has an Installation section with the exact
              copy command. Run it to bring the component into your project.
            </p>
            <div className="mt-3">
              <CodeBlock code={COPY_BUTTON_CODE} />
            </div>
          </div>
        </li>
        <li className="flex gap-4">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            3
          </span>
          <div>
            <p className="font-medium text-foreground">Import &amp; Use</p>
            <p className="mt-1 leading-6 text-secondary-foreground">
              Import the component and start building. The API Reference on each
              docs page covers every prop.
            </p>
            <div className="mt-3 space-y-3">
              <CodeBlock code={USAGE_IMPORT_CODE} />
              <CodeBlock code={USAGE_CODE} />
            </div>
          </div>
        </li>
      </ol>

      {/* ── FAQs ────────────────────────────────────────────────── */}
      <h2
        id="faqs"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        FAQs
      </h2>

      <h3
        id="faq-npm"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Is this a component library I install from npm?
      </h3>
      <p className="mt-2 leading-7 text-secondary-foreground">
        No. EYWorks DS follows the open-code philosophy. There is no npm package
        to install and no runtime dependency. You copy the component source
        files directly into your project and they become part of your codebase.
        You own them fully — read them, modify them, delete them.
      </p>

      <h3
        id="faq-frameworks"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Can I use this with other frameworks?
      </h3>
      <p className="mt-2 leading-7 text-secondary-foreground">
        Components are built with React and Tailwind CSS. They work in any
        React-based framework — Next.js, Remix, Vite, Create React App. The
        design tokens are plain CSS custom properties and can be included in any
        project regardless of framework. Non-React ports are not currently
        planned.
      </p>

      <h3
        id="faq-figma-sync"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        How do design tokens stay in sync with Figma?
      </h3>
      <p className="mt-2 leading-7 text-secondary-foreground">
        EYWorks DS uses the Figma MCP integration to extract tokens from the
        EYWorks master Figma file. Running{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
          /sync-design &lt;figma-url&gt;
        </code>{" "}
        fetches the latest variable definitions from Figma and regenerates the
        CSS custom properties in{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
          globals.css
        </code>
        . Designers and developers work from the same source of truth. There is
        no manual translation step.
      </p>

      <h3
        id="faq-customize"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Can I customize the components?
      </h3>
      <p className="mt-2 leading-7 text-secondary-foreground">
        Yes — that is the whole point. You own the code. Every component uses
        CVA variants and Tailwind utility classes, so adding a new variant or
        adjusting spacing is a small, local edit. You can also override design
        tokens globally by changing the CSS custom properties in{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
          :root
        </code>{" "}
        — every component that uses those tokens updates automatically.
      </p>

      <h3
        id="faq-dark-mode"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        How does dark mode work?
      </h3>
      <p className="mt-2 leading-7 text-secondary-foreground">
        Dark mode is implemented via a{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
          .dark
        </code>{" "}
        class on{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
          &lt;html&gt;
        </code>
        . A{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
          .dark {"{ }"}
        </code>{" "}
        block in{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
          globals.css
        </code>{" "}
        overrides every color token. No third-party library is involved.{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
          ThemeProvider
        </code>{" "}
        manages the toggle, and an anti-flash inline script reads{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
          localStorage
        </code>{" "}
        before first paint so there is no flash of the wrong theme on reload.
      </p>

      {/* ── Bottom signature ────────────────────────────────────── */}
      <div className="mt-16 border-t border-border pt-8">
        <p className="text-sm text-muted-foreground">
          Built by{" "}
          <span className="font-medium text-secondary-foreground">
            Rock Paper Scissors
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default DocsPage;
