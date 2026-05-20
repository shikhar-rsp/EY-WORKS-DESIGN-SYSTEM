import type { Metadata } from "next";

import { Button } from "@/components/figma/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/figma/Card";
import { Input } from "@/components/figma/Input";
import { Field, FieldDescription, FieldLabel } from "@/components/figma/Field";
import { Switch } from "@/components/figma/Switch";
import { Avatar, AvatarFallback } from "@/components/figma/Avatar";
import { Tag } from "@/components/figma/Tag";
import { Alert, AlertDescription, AlertTitle } from "@/components/figma/Alert";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/figma/Tooltip";
import { Spinner } from "@/components/figma/Spinner";
import { Skeleton } from "@/components/figma/Skeleton";
import { Lozenge } from "@/components/figma/Lozenge";
import { Kbd } from "@/components/figma/Kbd";
import { Divider } from "@/components/figma/Divider";

import { MotionDemo } from "./_components/MotionDemo";

export const metadata: Metadata = {
  title: "Showcase",
  description: "Single-page brand verification — every token category and key components in one view.",
};

// ── Local sub-components ─────────────────────────────────────────────────

interface ISectionProps {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

const Section = (props: ISectionProps) => (
  <section className="border-b border-border px-200 py-300 md:px-300">
    <div className="mx-auto max-w-6xl">
      <h2
        id={props.id}
        className="font-display text-[24px] font-bold tracking-tight text-foreground"
      >
        {props.title}
      </h2>
      {props.description && (
        <p className="mt-100 max-w-2xl text-sm text-muted-foreground">{props.description}</p>
      )}
      <div className="mt-200">{props.children}</div>
    </div>
  </section>
);

interface IColorSwatchProps {
  token: string;
  className: string;
  textOn?: "light" | "dark";
}

const ColorSwatch = (props: IColorSwatchProps) => (
  <div className="flex flex-col gap-075">
    <div
      className={`${props.className} h-16 w-full rounded-medium border border-border`}
      aria-label={props.token}
    />
    <code className="font-mono text-[11px] text-muted-foreground">{props.token}</code>
  </div>
);

interface IRadiusSampleProps {
  token: string;
  className: string;
}

const RadiusSample = (props: IRadiusSampleProps) => (
  <div className="flex flex-col items-center gap-075">
    <div className={`${props.className} size-16 bg-primary`} />
    <code className="font-mono text-[11px] text-muted-foreground">{props.token}</code>
  </div>
);

interface IShadowSampleProps {
  token: string;
  className: string;
}

const ShadowSample = (props: IShadowSampleProps) => (
  <div className="flex flex-col items-center gap-075">
    <div className={`${props.className} size-16 rounded-medium bg-background`} />
    <code className="font-mono text-[11px] text-muted-foreground">{props.token}</code>
  </div>
);

// ── Page ────────────────────────────────────────────────────────────────

const ShowcasePage = () => (
  <>
    {/* ── Color palette ───────────────────────────────── */}
    <Section
      id="color"
      title="Color"
      description="Every brand-tied color token in :root. Toggle light/dark in the header to verify both modes."
    >
      <div className="space-y-300">
        <div>
          <h3 className="mb-100 text-sm font-medium text-foreground">Base & Primary</h3>
          <div className="grid grid-cols-2 gap-150 sm:grid-cols-4 lg:grid-cols-6">
            <ColorSwatch token="--background" className="bg-background" />
            <ColorSwatch token="--foreground" className="bg-foreground" />
            <ColorSwatch token="--primary" className="bg-primary" />
            <ColorSwatch token="--primary-hover" className="bg-primary-hover" />
            <ColorSwatch token="--primary-active" className="bg-primary-active" />
            <ColorSwatch token="--primary-foreground" className="bg-primary-foreground" />
            <ColorSwatch token="--primary-subtle" className="bg-primary-subtle" />
            <ColorSwatch token="--primary-subtlest" className="bg-primary-subtlest" />
            <ColorSwatch token="--primary-muted" className="bg-primary-muted" />
          </div>
        </div>

        <div>
          <h3 className="mb-100 text-sm font-medium text-foreground">Surfaces</h3>
          <div className="grid grid-cols-2 gap-150 sm:grid-cols-4 lg:grid-cols-6">
            <ColorSwatch token="--secondary" className="bg-secondary" />
            <ColorSwatch token="--secondary-hover" className="bg-secondary-hover" />
            <ColorSwatch token="--muted" className="bg-muted" />
            <ColorSwatch token="--muted-hover" className="bg-muted-hover" />
            <ColorSwatch token="--muted-active" className="bg-muted-active" />
            <ColorSwatch token="--neutral" className="bg-neutral" />
            <ColorSwatch token="--neutral-hover" className="bg-neutral-hover" />
            <ColorSwatch token="--accent-active" className="bg-accent-active" />
          </div>
        </div>

        <div>
          <h3 className="mb-100 text-sm font-medium text-foreground">Semantic</h3>
          <div className="grid grid-cols-2 gap-150 sm:grid-cols-4 lg:grid-cols-6">
            <ColorSwatch token="--destructive" className="bg-destructive" />
            <ColorSwatch token="--destructive-hover" className="bg-destructive-hover" />
            <ColorSwatch token="--destructive-bold" className="bg-destructive-bold" />
            <ColorSwatch token="--destructive-subtle" className="bg-destructive-subtle" />
            <ColorSwatch token="--success" className="bg-success" />
            <ColorSwatch token="--success-bold" className="bg-success-bold" />
            <ColorSwatch token="--warning" className="bg-warning" />
            <ColorSwatch token="--warning-bold" className="bg-warning-bold" />
            <ColorSwatch token="--info" className="bg-info" />
            <ColorSwatch token="--info-bold" className="bg-info-bold" />
            <ColorSwatch token="--discovery" className="bg-discovery" />
            <ColorSwatch token="--discovery-bold" className="bg-discovery-bold" />
          </div>
        </div>

        <div>
          <h3 className="mb-100 text-sm font-medium text-foreground">Accent palette</h3>
          <div className="grid grid-cols-2 gap-150 sm:grid-cols-4 lg:grid-cols-6">
            <ColorSwatch token="--accent-purple" className="bg-accent-purple" />
            <ColorSwatch token="--accent-orange" className="bg-accent-orange" />
            <ColorSwatch token="--accent-magenta" className="bg-accent-magenta" />
            <ColorSwatch token="--accent-magenta-bold" className="bg-accent-magenta-bold" />
            <ColorSwatch token="--accent-lime" className="bg-accent-lime" />
            <ColorSwatch token="--accent-lime-bold" className="bg-accent-lime-bold" />
            <ColorSwatch token="--accent-yellow" className="bg-accent-yellow" />
            <ColorSwatch token="--accent-yellow-bold" className="bg-accent-yellow-bold" />
            <ColorSwatch token="--accent-blue" className="bg-accent-blue" />
            <ColorSwatch token="--accent-blue-bold" className="bg-accent-blue-bold" />
            <ColorSwatch token="--accent-teal" className="bg-accent-teal" />
            <ColorSwatch token="--accent-teal-bold" className="bg-accent-teal-bold" />
            <ColorSwatch token="--accent-red" className="bg-accent-red" />
            <ColorSwatch token="--accent-red-bold" className="bg-accent-red-bold" />
            <ColorSwatch token="--accent-green" className="bg-accent-green" />
            <ColorSwatch token="--accent-green-bold" className="bg-accent-green-bold" />
            <ColorSwatch token="--accent-gray" className="bg-accent-gray" />
            <ColorSwatch token="--accent-gray-subtle" className="bg-accent-gray-subtle" />
          </div>
        </div>

        <div>
          <h3 className="mb-100 text-sm font-medium text-foreground">Structural</h3>
          <div className="grid grid-cols-2 gap-150 sm:grid-cols-4 lg:grid-cols-6">
            <ColorSwatch token="--border" className="bg-border" />
            <ColorSwatch token="--border-hover" className="bg-border-hover" />
            <ColorSwatch token="--border-input" className="bg-border-input" />
            <ColorSwatch token="--border-selected" className="bg-border-selected" />
            <ColorSwatch token="--ring" className="bg-ring" />
            <ColorSwatch token="--placeholder" className="bg-placeholder" />
            <ColorSwatch token="--disabled-surface" className="bg-disabled-surface" />
            <ColorSwatch token="--disabled-border" className="bg-disabled-border" />
          </div>
        </div>
      </div>
    </Section>

    {/* ── Typography ──────────────────────────────────── */}
    <Section
      id="typography"
      title="Typography"
      description="Font tokens — --font-display drives headings, --font-sans drives body, --font-mono drives code."
    >
      <div className="space-y-200">
        <p className="font-display text-[48px] font-bold leading-tight text-foreground">
          Display heading — 48px / font-display
        </p>
        <p className="font-display text-[32px] font-bold leading-tight text-foreground">
          Section heading — 32px / font-display
        </p>
        <p className="font-display text-[24px] font-bold leading-tight text-foreground">
          Subsection heading — 24px / font-display
        </p>
        <p className="font-sans text-base text-foreground">
          Body text — base / font-sans. The quick brown fox jumps over the lazy dog. 1234567890.
        </p>
        <p className="font-sans text-sm text-muted-foreground">
          Body small — text-sm / muted-foreground. Used for descriptions and captions.
        </p>
        <p className="font-sans text-xs text-muted-foreground">
          Caption — text-xs. The smallest readable size.
        </p>
        <p className="font-mono text-sm text-foreground">
          const exampleCode = &quot;font-mono / text-sm&quot;;
        </p>
      </div>
    </Section>

    {/* ── Spacing ─────────────────────────────────────── */}
    <Section
      id="spacing"
      title="Spacing"
      description="Eight-step spacing scale (--space-0 through --space-300). Used by gap-*, p-*, m-*, w-*, h-* utilities."
    >
      <div className="flex flex-wrap items-end gap-300">
        {[
          { token: "space-0", w: "w-0", px: "0" },
          { token: "space-050", w: "w-050", px: "4px" },
          { token: "space-075", w: "w-075", px: "6px" },
          { token: "space-100", w: "w-100", px: "8px" },
          { token: "space-150", w: "w-150", px: "12px" },
          { token: "space-200", w: "w-200", px: "16px" },
          { token: "space-250", w: "w-250", px: "20px" },
          { token: "space-300", w: "w-300", px: "24px" },
        ].map((s) => (
          <div key={s.token} className="flex flex-col items-center gap-075">
            <div className={`${s.w} h-16 bg-primary`} />
            <code className="font-mono text-[11px] text-muted-foreground">{s.token}</code>
            <span className="text-[10px] text-muted-foreground">{s.px}</span>
          </div>
        ))}
      </div>
    </Section>

    {/* ── Radius ──────────────────────────────────────── */}
    <Section
      id="radius"
      title="Radius"
      description="Seven radius tokens. rounded-day and rounded-card preserve historical pixel values for Calendar and Card surfaces."
    >
      <div className="flex flex-wrap gap-300">
        <RadiusSample token="rounded-xsmall" className="rounded-xsmall" />
        <RadiusSample token="rounded-small" className="rounded-small" />
        <RadiusSample token="rounded-day" className="rounded-day" />
        <RadiusSample token="rounded-medium" className="rounded-medium" />
        <RadiusSample token="rounded-card" className="rounded-card" />
        <RadiusSample token="rounded-large" className="rounded-large" />
        <RadiusSample token="rounded-full" className="rounded-full" />
      </div>
    </Section>

    {/* ── Shadow ──────────────────────────────────────── */}
    <Section
      id="shadow"
      title="Shadow"
      description="Five elevation steps. All shadows resolve to OKLCH black with varying opacity — brand can recolor by editing :root."
    >
      <div className="flex flex-wrap gap-300 rounded-medium bg-muted p-300">
        <ShadowSample token="shadow-xs" className="shadow-xs" />
        <ShadowSample token="shadow-sm" className="shadow-sm" />
        <ShadowSample token="shadow-md" className="shadow-md" />
        <ShadowSample token="shadow-lg" className="shadow-lg" />
        <ShadowSample token="shadow-xl" className="shadow-xl" />
      </div>
    </Section>

    {/* ── Motion ──────────────────────────────────────── */}
    <Section
      id="motion"
      title="Motion"
      description="Three durations × three easings. Hover the buttons to feel the difference."
    >
      <MotionDemo />
    </Section>

    {/* ── Brand gradient ──────────────────────────────── */}
    <Section
      id="gradient"
      title="Brand gradient"
      description="--brand-card-gradient is a composite token. Replace the entire linear-gradient string per brand."
    >
      <div
        className="h-32 w-full max-w-md rounded-card"
        style={{ background: "var(--brand-card-gradient)" }}
      />
    </Section>

    {/* ── Component gallery ───────────────────────────── */}
    <Section
      id="components"
      title="Components"
      description="A curated cross-section of components — verify that every variant inherits brand styling."
    >
      <div className="space-y-300">
        {/* Buttons */}
        <div>
          <h3 className="mb-150 text-sm font-medium text-foreground">Buttons</h3>
          <div className="flex flex-wrap items-center gap-150">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </div>

        {/* Inputs */}
        <div>
          <h3 className="mb-150 text-sm font-medium text-foreground">Inputs</h3>
          <div className="grid grid-cols-1 gap-200 sm:grid-cols-2 max-w-2xl">
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input type="email" placeholder="you@example.com" />
              <FieldDescription>We&apos;ll never share it.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel>Password</FieldLabel>
              <Input type="password" placeholder="••••••••" />
            </Field>
          </div>
        </div>

        {/* Switch */}
        <div>
          <h3 className="mb-150 text-sm font-medium text-foreground">Switch</h3>
          <div className="flex items-center gap-200">
            <Switch defaultChecked /> <span className="text-sm">Notifications on</span>
          </div>
        </div>

        {/* Tags & Lozenges */}
        <div>
          <h3 className="mb-150 text-sm font-medium text-foreground">Tags & Lozenges</h3>
          <div className="flex flex-wrap items-center gap-150">
            <Tag variant="solid" color="brand">Brand solid</Tag>
            <Tag variant="outline" color="brand">Brand outline</Tag>
            <Tag variant="subtle" color="default">Default subtle</Tag>
            <Tag variant="solid" color="red">Red</Tag>
            <Tag variant="solid" color="blue">Blue</Tag>
            <Lozenge variant="solid" color="brand">Brand</Lozenge>
            <Lozenge variant="solid" color="green">Success</Lozenge>
            <Lozenge variant="light" color="yellow">Warning</Lozenge>
            <Lozenge variant="outline" color="red">Error</Lozenge>
          </div>
        </div>

        {/* Avatar */}
        <div>
          <h3 className="mb-150 text-sm font-medium text-foreground">Avatar</h3>
          <div className="flex items-center gap-150">
            <Avatar size="sm"><AvatarFallback>AS</AvatarFallback></Avatar>
            <Avatar size="default"><AvatarFallback>BR</AvatarFallback></Avatar>
            <Avatar size="lg"><AvatarFallback>CK</AvatarFallback></Avatar>
            <Avatar size="xl"><AvatarFallback>RP</AvatarFallback></Avatar>
          </div>
        </div>

        {/* Loading states */}
        <div>
          <h3 className="mb-150 text-sm font-medium text-foreground">Loading states</h3>
          <div className="flex flex-wrap items-center gap-200">
            <Spinner />
            <div className="flex flex-col gap-100">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        </div>

        {/* Kbd */}
        <div>
          <h3 className="mb-150 text-sm font-medium text-foreground">Keyboard</h3>
          <div className="flex items-center gap-100 text-sm text-muted-foreground">
            Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open command palette.
          </div>
        </div>

        {/* Alerts */}
        <div>
          <h3 className="mb-150 text-sm font-medium text-foreground">Alerts</h3>
          <div className="space-y-150 max-w-2xl">
            <Alert>
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>This is a default informational alert.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Something went wrong</AlertTitle>
              <AlertDescription>Please check your input and try again.</AlertDescription>
            </Alert>
          </div>
        </div>

        {/* Tooltip */}
        <div>
          <h3 className="mb-150 text-sm font-medium text-foreground">Tooltip</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>Tooltip content rides brand colors</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <Divider />

        {/* Layout examples */}
        <div>
          <h3 className="mb-150 text-sm font-medium text-foreground">Layout — settings card</h3>
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Choose what you want to hear about.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-200">
              <div className="flex items-center justify-between">
                <span className="text-sm">Email digest</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Push notifications</span>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Weekly summary</span>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter className="justify-end gap-100">
              <Button variant="secondary" size="compact">Cancel</Button>
              <Button variant="primary" size="compact">Save</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Section>
  </>
);

export default ShowcasePage;
