import { Tick02, Search, ArrowRight01Round, Mail01, Lock, Star, Copy01, Calendar01 } from "@/components/fragments/icons/catalog";

// --- Types ---

interface IPrincipleCardProps {
  title: string;
  description: string;
}

interface ISizeRowProps {
  size: number;
  label: string;
}

// --- Sub-components ---

const PrincipleCard = (props: IPrincipleCardProps) => (
  <div className="rounded-large border border-border bg-muted p-5">
    <p className="font-semibold text-foreground">{props.title}</p>
    <p className="mt-1 text-sm text-muted-foreground">{props.description}</p>
  </div>
);

const SizeRow = (props: ISizeRowProps) => (
  <div className="flex items-center gap-6">
    <span className="w-8 shrink-0 text-right text-sm text-muted-foreground">{props.size}px</span>
    <span
      className="flex items-center justify-center text-foreground"
      style={{ width: props.size, height: props.size }}
    >
      <Search className="size-full" />
    </span>
    <span className="text-sm text-muted-foreground">{props.label}</span>
  </div>
);

// --- Page ---

const IconographyPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Iconography</h1>
      <p className="mt-2 text-base text-muted-foreground">
        Icons are symbols designed to represent concepts or features. This page covers the design
        principles, visual style, and rules for using and creating icons in EYWorks DS.
      </p>

      {/* Principles */}
      <h2
        id="principles"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Principles
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <PrincipleCard
          title="Universal understanding"
          description="Use widely recognized symbols so icons are understood without labels wherever possible."
        />
        <PrincipleCard
          title="Simplicity over detail"
          description="Favor minimal paths that remain legible at small sizes. Remove decorative elements that add noise."
        />
        <PrincipleCard
          title="Visual harmony"
          description="Maintain consistent stroke weight, corner radius, and overall sizing across the entire icon set."
        />
        <PrincipleCard
          title="Intentional usage"
          description="Icons should reinforce meaning, not decorate. Pair with a label whenever the meaning is ambiguous."
        />
      </div>

      {/* Visual Style */}
      <h2
        id="visual-style"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Visual Style
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        All icons in EYWorks DS follow a consistent geometric style derived from the Huge Icon Set v2.0.
      </p>
      <div className="mt-4 rounded-large border border-border bg-muted">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Property</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 text-foreground">Stroke width</td>
              <td className="px-4 py-3 font-mono text-muted-foreground">1.5px</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground">Line cap</td>
              <td className="px-4 py-3 font-mono text-muted-foreground">round</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground">Line join</td>
              <td className="px-4 py-3 font-mono text-muted-foreground">round</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground">Grid size</td>
              <td className="px-4 py-3 font-mono text-muted-foreground">24×24px</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground">Corner style</td>
              <td className="px-4 py-3 font-mono text-muted-foreground">rounded outer, sharp inner</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground">Fill</td>
              <td className="px-4 py-3 font-mono text-muted-foreground">none (stroke-based)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-6 rounded-large border border-border bg-muted px-6 py-5">
        {[Tick02, Search, ArrowRight01Round, Mail01, Lock, Star, Copy01, Calendar01].map(
          (Icon, i) => (
            <span key={i} className="flex h-10 w-10 items-center justify-center text-foreground">
              <Icon className="size-6" />
            </span>
          )
        )}
      </div>

      {/* Sizing */}
      <h2
        id="sizing"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Sizing
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Icons scale across four standard sizes. Always use one of these sizes — never scale an icon
        to an arbitrary value.
      </p>
      <div className="mt-4 flex flex-col gap-4">
        <SizeRow size={12} label="xs — inline text, badges, tight UI" />
        <SizeRow size={14} label="sm — default for inline icons next to text" />
        <SizeRow size={16} label="md — standard button icons and labels" />
        <SizeRow size={20} label="lg — standalone icons, empty states" />
        <SizeRow size={24} label="xl — feature icons, illustration accents" />
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
              <Tick02 className="size-3 shrink-0" />
              Pair icons with labels when meaning is not immediately clear.
            </li>
            <li className="flex gap-2 min-w-0 break-words">
              <Tick02 className="size-3 shrink-0" />
              Use <code className="rounded px-1 font-mono text-xs bg-muted">currentColor</code> so icons respond to the parent text color.
            </li>
            <li className="flex gap-2 min-w-0 break-words">
              <Tick02 className="size-3 shrink-0" />
              Use consistent sizing within a single UI region.
            </li>
            <li className="flex gap-2 min-w-0 break-words">
              <Tick02 className="size-3 shrink-0" />
              Add <code className="rounded px-1 font-mono text-xs bg-muted">aria-hidden=&quot;true&quot;</code> when the icon is decorative.
            </li>
          </ul>
        </div>
        {/* Don't */}
        <div className="rounded-large border border-destructive/40 bg-destructive/5 p-5">
          <p className="mb-3 text-sm font-semibold text-destructive">Don&apos;t</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2 min-w-0 break-words">
              <span className="mt-0.5 shrink-0 text-destructive">✕</span>
              Scale icons to non-standard sizes (e.g. 13px, 18px).
            </li>
            <li className="flex gap-2 min-w-0 break-words">
              <span className="mt-0.5 shrink-0 text-destructive">✕</span>
              Hardcode hex colors on an icon — always use token-based colors.
            </li>
            <li className="flex gap-2 min-w-0 break-words">
              <span className="mt-0.5 shrink-0 text-destructive">✕</span>
              Use an icon alone as the only affordance for a critical action.
            </li>
            <li className="flex gap-2 min-w-0 break-words">
              <span className="mt-0.5 shrink-0 text-destructive">✕</span>
              Define SVG icon components inside component files — keep them in <code className="rounded px-1 font-mono text-xs bg-muted">fragments/icons/</code>.
            </li>
          </ul>
        </div>
      </div>

      {/* Color */}
      <h2
        id="color"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Color
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        All icons use <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">stroke=&quot;currentColor&quot;</code> or{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">fill=&quot;currentColor&quot;</code>, which means
        they automatically inherit the text color of their parent element. You control icon color by
        setting a Tailwind text utility on the parent:
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-4 rounded-large border border-border bg-muted px-6 py-5">
        {(
          [
            ["text-foreground", "foreground"],
            ["text-primary", "primary"],
            ["text-muted-foreground", "muted"],
            ["text-destructive", "destructive"],
            ["text-success", "success"],
          ] as [string, string][]
        ).map(([cls, label]) => (
          <div key={cls} className="flex flex-col items-center gap-1.5">
            <span className={`${cls} flex h-8 w-8 items-center justify-center`}>
              <Star className="size-6" />
            </span>
            <span className="text-[11px] text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>

      {/* Creating Icons */}
      <h2
        id="creating-icons"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Creating Icons
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        When a component needs an icon that doesn&apos;t exist yet, add it to the catalog via the
        generator pipeline — never create a standalone icon file.
      </p>

      <h3 id="icon-file-convention" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Catalog pipeline
      </h3>
      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
        <li>
          Place the raw SVG file in <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">exports/icons/{"{category}/"}</code>
        </li>
        <li>
          Run <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">npx tsx scripts/generate-icon-data.ts</code> — this regenerates <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">src/data/icons/*</code> and <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">src/components/fragments/icons/catalog.tsx</code>
        </li>
        <li>
          Import the new icon via its generated named export from the catalog
        </li>
      </ul>

      <h3 id="icon-template" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Usage
      </h3>
      <div className="mt-3 overflow-x-auto rounded-large border border-border bg-muted">
        <pre className="px-5 py-4 text-xs leading-relaxed text-foreground">
          <code>{`import { Home01 } from "@/components/fragments/icons/catalog";

<Home01 className="size-4 text-foreground" />`}</code>
        </pre>
      </div>

      <h3 id="icon-rules" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Rules
      </h3>
      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
        <li className="flex gap-2 min-w-0 break-words">
          <Tick02 className="size-3 shrink-0" />
          Always import icons from <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">@/components/fragments/icons/catalog</code> — never define inline SVG or standalone icon files.
        </li>
        <li className="flex gap-2 min-w-0 break-words">
          <Tick02 className="size-3 shrink-0" />
          Size icons with Tailwind <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">size-*</code> utilities — catalog icons inherit the parent&apos;s <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">currentColor</code>.
        </li>
        <li className="flex gap-2 min-w-0 break-words">
          <Tick02 className="size-3 shrink-0" />
          Add SVGs to <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">exports/icons/</code> and regenerate the catalog when a new icon is needed — the generator normalizes SVG attributes automatically.
        </li>
        <li className="flex gap-2 min-w-0 break-words">
          <Tick02 className="size-3 shrink-0" />
          Never define inline SVG icon components inside <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">src/components/</code> files.
        </li>
      </ul>
    </div>
  );
};

export default IconographyPage;
