import { Tick02 } from "@/components/fragments/icons/catalog";

// --- Interfaces ---

interface IPrincipleCardProps {
  title: string;
  description: string;
}

interface IFontSpecimenProps {
  fontClass: string;
  fontName: string;
  cssVariable: string;
  fallbackStack: string;
  role: string;
}

interface ITypeScaleRowProps {
  label: string;
  previewText: string;
  tailwindClass: string;
  size: string;
  lineHeight: string;
  weight: string;
  useCase: string;
}

interface IWeightRowProps {
  name: string;
  weight: number;
}

// --- Sub-components ---

const PrincipleCard = (props: IPrincipleCardProps) => (
  <div className="rounded-large border border-border bg-muted p-5">
    <p className="font-semibold text-foreground">{props.title}</p>
    <p className="mt-1 text-sm text-muted-foreground">{props.description}</p>
  </div>
);

const FontSpecimen = (props: IFontSpecimenProps) => (
  <div className="rounded-large border border-border bg-muted overflow-hidden">
    <div className={`${props.fontClass} border-b border-border bg-background px-6 py-8`}>
      <p
        className="text-foreground select-none"
        style={{ fontSize: "56px", lineHeight: 1, fontWeight: 700 }}
      >
        Aa
      </p>
      <p
        className="mt-4 text-muted-foreground break-all"
        style={{ fontSize: "13px", lineHeight: 1.6, fontWeight: 400 }}
      >
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
        <br />
        abcdefghijklmnopqrstuvwxyz
        <br />
        0123456789 !@#$%&amp;*()
      </p>
    </div>
    <div className="px-5 py-4 space-y-1.5">
      <p className="text-sm font-semibold text-foreground">{props.fontName}</p>
      <p className="text-xs text-muted-foreground">{props.role}</p>
      <p className="font-mono text-xs text-muted-foreground">
        {props.cssVariable}
      </p>
      <p className="text-xs text-muted-foreground">
        Fallback:{" "}
        <span className="font-mono">{props.fallbackStack}</span>
      </p>
    </div>
  </div>
);

const TypeScaleRow = (props: ITypeScaleRowProps) => (
  <tr>
    <td className="px-4 py-4 align-top">
      <p
        className="text-foreground font-lexend"
        style={{ fontSize: props.size, lineHeight: props.lineHeight, fontWeight: props.weight.includes("Bold") ? 700 : props.weight.includes("Semibold") ? 600 : 400 }}
      >
        {props.previewText}
      </p>
    </td>
    <td className="px-4 py-4 align-top">
      <p className="text-sm font-semibold text-foreground">{props.label}</p>
      <p className="font-mono text-xs text-muted-foreground mt-0.5">{props.tailwindClass}</p>
    </td>
    <td className="px-4 py-4 align-middle font-mono text-xs text-muted-foreground whitespace-nowrap">{props.size}</td>
    <td className="px-4 py-4 align-middle font-mono text-xs text-muted-foreground whitespace-nowrap">{props.lineHeight}</td>
    <td className="px-4 py-4 align-middle text-xs text-muted-foreground whitespace-nowrap">{props.weight}</td>
    <td className="px-4 py-4 align-middle text-xs text-muted-foreground">{props.useCase}</td>
  </tr>
);

const WeightRow = (props: IWeightRowProps) => (
  <div className="flex items-baseline gap-6 py-3 border-b border-border last:border-0">
    <div className="w-36 shrink-0">
      <p className="text-sm text-foreground">{props.name}</p>
      <p className="font-mono text-xs text-muted-foreground">{props.weight}</p>
    </div>
    <p
      className="text-foreground font-lexend"
      style={{ fontSize: "15px", fontWeight: props.weight }}
    >
      The quick brown fox jumps over the lazy dog
    </p>
  </div>
);

// --- Page ---

const TypographyPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Typography</h1>
      <p className="mt-2 text-base text-muted-foreground">
        EYWorks DS uses three font families — Lexend, Geist Sans, and Geist Mono — each with a distinct
        role. This page documents the type scale, weights, and usage guidelines that keep the
        design system consistent and readable.
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
          title="Readability first"
          description="Choose sizes and weights that ensure comfortable reading. Body text stays at 14px minimum; never sacrifice legibility for aesthetics."
        />
        <PrincipleCard
          title="Clear hierarchy"
          description="Use size, weight, and family to establish visual order. Headings are bolder; body stays regular. Limit hierarchy levels to what the content needs."
        />
        <PrincipleCard
          title="Consistent scale"
          description="Apply the same type tokens everywhere. Avoid arbitrary pixel sizes that fall outside the defined scale — predictability is part of the system."
        />
      </div>

      {/* App Fonts */}
      <h2
        id="app-fonts"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        App Fonts
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        All three fonts are loaded via Next.js Google Fonts with weights 200, 400, 700, and 800.
        They are registered as CSS custom properties and mapped to Tailwind utilities via{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">@theme inline</code>.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <FontSpecimen
          fontClass="font-lexend"
          fontName="Lexend"
          cssVariable="--font-lexend"
          fallbackStack="system-ui, arial"
          role="Primary UI & docs font"
        />
        <FontSpecimen
          fontClass="font-sans"
          fontName="Geist Sans"
          cssVariable="--font-sans"
          fallbackStack="system-ui, arial"
          role="General-purpose sans-serif"
        />
        <FontSpecimen
          fontClass="font-mono"
          fontName="Geist Mono"
          cssVariable="--font-mono"
          fallbackStack="system-ui, arial"
          role="Code, tokens & technical values"
        />
      </div>

      {/* Type Scale: Headings */}
      <h2
        id="type-scale-headings"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Type Scale — Headings
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Headings use bold or semibold weights and step down in size to create a clear information
        hierarchy. Use heading levels semantically — never skip a level.
      </p>
      <div className="mt-4 rounded-large border border-border bg-muted overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Preview</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Level</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Size</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Line&nbsp;Height</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Weight</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-background">
            <TypeScaleRow
              label="Heading 1"
              tailwindClass="text-4xl"
              previewText="Heading 1"
              size="36px"
              lineHeight="40px"
              weight="Bold (700)"
              useCase="Page titles"
            />
            <TypeScaleRow
              label="Heading 2"
              tailwindClass="text-2xl"
              previewText="Heading 2"
              size="24px"
              lineHeight="32px"
              weight="Semibold (600)"
              useCase="Section headings"
            />
            <TypeScaleRow
              label="Heading 3"
              tailwindClass="text-lg"
              previewText="Heading 3"
              size="18px"
              lineHeight="28px"
              weight="Semibold (600)"
              useCase="Sub-section headings"
            />
            <TypeScaleRow
              label="Heading 4"
              tailwindClass="text-base"
              previewText="Heading 4"
              size="16px"
              lineHeight="24px"
              weight="Semibold (600)"
              useCase="Card and group headings"
            />
          </tbody>
        </table>
      </div>

      {/* Type Scale: Body */}
      <h2
        id="type-scale-body"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Type Scale — Body
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Body text prioritizes readability at everyday reading distances. The default body size for
        components is 14px. Use larger sizes for introductory paragraphs and smaller sizes for
        secondary information.
      </p>
      <div className="mt-4 rounded-large border border-border bg-muted overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Preview</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Name</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Size</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Line&nbsp;Height</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Weight</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-background">
            <TypeScaleRow
              label="Body Large"
              tailwindClass="text-[20px]"
              previewText="Lead paragraph text"
              size="20px"
              lineHeight="28px"
              weight="Normal (400)"
              useCase="Intro paragraphs, lead text"
            />
            <TypeScaleRow
              label="Body Default"
              tailwindClass="text-base"
              previewText="Primary body copy"
              size="16px"
              lineHeight="24px"
              weight="Normal (400)"
              useCase="Main body content"
            />
            <TypeScaleRow
              label="Body Small"
              tailwindClass="text-sm / text-[14px]"
              previewText="Descriptions and helper text"
              size="14px"
              lineHeight="20px"
              weight="Normal (400)"
              useCase="Component text, descriptions"
            />
            <TypeScaleRow
              label="Caption"
              tailwindClass="text-xs / text-[12px]"
              previewText="Labels and metadata"
              size="12px"
              lineHeight="16px"
              weight="Normal (400)"
              useCase="Labels, metadata, footnotes"
            />
            <TypeScaleRow
              label="Micro"
              tailwindClass="text-[10px]"
              previewText="Badges and fine print"
              size="10px"
              lineHeight="14px"
              weight="Normal (400)"
              useCase="Badges, notification counts"
            />
          </tbody>
        </table>
      </div>

      {/* Font Weight */}
      <h2
        id="font-weight"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Font Weight
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        All three fonts are loaded with weights 200, 400, 700, and 800. Use weight purposefully —
        reserve heavier weights for headings and emphasis, not decorative variety.
      </p>
      <div className="mt-4 rounded-large border border-border bg-muted px-5 py-2">
        <WeightRow name="Extra Light" weight={200} />
        <WeightRow name="Regular" weight={400} />
        <WeightRow name="Bold" weight={700} />
        <WeightRow name="Extra Bold" weight={800} />
      </div>
      <div className="mt-4 rounded-large border border-border bg-muted overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Weight</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Value</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Tailwind</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-background">
            <tr>
              <td className="px-4 py-3 text-foreground">Extra Light</td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">200</td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">font-extralight</td>
              <td className="px-4 py-3 text-xs text-muted-foreground">Large display text only</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground">Regular</td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">400</td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">font-normal</td>
              <td className="px-4 py-3 text-xs text-muted-foreground">All body text</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground">Bold</td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">700</td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">font-bold</td>
              <td className="px-4 py-3 text-xs text-muted-foreground">H1, emphasis</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground">Extra Bold</td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">800</td>
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">font-extrabold</td>
              <td className="px-4 py-3 text-xs text-muted-foreground">Marketing / brand headlines</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Code Style */}
      <h2
        id="code-style"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Code Style
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        All code — inline and block — uses{" "}
        <strong className="font-semibold text-foreground">Geist Mono</strong> via the{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">font-mono</code> utility.
        Keep code text at 12–14px for comfortable reading inside prose.
      </p>

      <h3
        id="code-style-inline"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Inline code
      </h3>
      <p className="mt-3 text-sm text-muted-foreground">
        Use{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
          {"<code>"}
        </code>{" "}
        with{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
          rounded bg-muted px-1.5 py-0.5 font-mono text-xs
        </code>{" "}
        for inline references like token names, prop values, and file paths. Example: apply{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">font-lexend</code> to the
        root container.
      </p>

      <h3
        id="code-style-block"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Block code
      </h3>
      <p className="mt-3 text-sm text-muted-foreground">
        Wrap multi-line code in a{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">{"<pre>"}</code> block with{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">rounded-large border border-border bg-muted</code>.
      </p>
      <div className="mt-3 overflow-x-auto rounded-large border border-border bg-muted">
        <pre className="px-5 py-4 text-xs leading-relaxed text-foreground font-mono">
          <code>{`// Token registration in globals.css

@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --font-lexend: var(--font-lexend);
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
            <li className="flex gap-2">
              <Tick02 className="size-3" />
              Use Tailwind scale classes (
              <code className="rounded bg-muted px-1 font-mono text-xs">text-sm</code>,{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">text-base</code>) when a matching class exists.
            </li>
            <li className="flex gap-2">
              <Tick02 className="size-3" />
              Apply{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">font-lexend</code> to documentation and long-form content containers.
            </li>
            <li className="flex gap-2">
              <Tick02 className="size-3" />
              Use{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">font-mono</code> for code snippets, token names, and technical values.
            </li>
            <li className="flex gap-2">
              <Tick02 className="size-3" />
              Maintain a minimum body font size of 14px for comfortable reading.
            </li>
          </ul>
        </div>
        {/* Don't */}
        <div className="rounded-large border border-destructive/40 bg-destructive/5 p-5">
          <p className="mb-3 text-sm font-semibold text-destructive">Don&apos;t</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-destructive">✕</span>
              Use arbitrary pixel sizes outside the defined scale (e.g.{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">text-[13px]</code>,{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">text-[15px]</code>).
            </li>
            <li className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-destructive">✕</span>
              Mix more than two font families in a single view.
            </li>
            <li className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-destructive">✕</span>
              Use Extra Light (200) weight for body text — reserve it for large display headings only.
            </li>
            <li className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-destructive">✕</span>
              Override line-height without testing readability at the target font size.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TypographyPage;
