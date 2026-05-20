import type { Metadata } from "next";

import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ProfileCardDetail } from "@/components/docs/ProfileCardDetail";
import { ProfileCardChild } from "@/examples/profile-card/profile-card-child";
import { ProfileCardEmployee } from "@/examples/profile-card/profile-card-employee";
import { ProfileCardFocused } from "@/examples/profile-card/profile-card-focused";

export const metadata: Metadata = {
  title: "Profile Card | Design System",
  description:
    "Profile Card displays a person's photo, key details, weekly schedule, and status badges. Supports child and employee variants with an optional focused state.",
};

const INSTALL_CODE = `cp src/components/figma/ProfileCard.tsx your-project/components/ProfileCard.tsx`;

const USAGE_IMPORT = `import {
  ProfileCard,
  ProfileCardStatusBadge,
} from "@/components/figma/ProfileCard"`;

const USAGE_CODE = `const SCHEDULE = [
  { label: "Mo", active: true },
  { label: "Tu", active: false },
  { label: "We", active: true },
  { label: "Th", active: false },
  { label: "Fr", active: true },
  { label: "Sa", active: true },
];

{/* Child profile card */}
<ProfileCard
  type="child"
  name="Mark Zuckerberg Carter"
  coverImage="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=200&fit=crop"
  room="Crazy Critters (3-5 Years)"
  identifier="BRX4ABRX4ABRX4A"
  guardian="Sarah Thomas"
  age="5Y 11M"
  fundingLabel="3M Funded"
  schedule={SCHEDULE}
  tags={["Uncollectable", "Late"]}
/>

{/* Employee profile card */}
<ProfileCard
  type="employee"
  name="Peter Harris"
  coverImage="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=200&fit=crop"
  room="Crazy Critters (3-5 Years)"
  identifier="BRX4ABRX4ABRX4A"
  level="Level 3 Practitioner"
  fundingLabel="3M Funded"
  schedule={SCHEDULE}
  tags={["Excluded from Ratio"]}
/>

{/* Focused state */}
<ProfileCard
  type="child"
  focused
  name="Mark Zuckerberg Carter"
  coverImage="..."
  schedule={SCHEDULE}
/>`;

const ProfileCardPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <h1 className="text-4xl font-bold text-foreground">Profile Card</h1>
      <p className="mt-3 text-sm text-secondary-foreground">
        Displays a person&apos;s photo, key details, weekly schedule, and status badges. Supports
        child profiles (with guardian + age) and employee profiles (with qualification level), plus
        an optional focused ring state for selection.
      </p>

      {/* ── Brand Toolbar ─────────────────────────────────────────── */}
      <BrandPreviewToolbar />

      {/* ── Examples ──────────────────────────────────────────────── */}
      <h2
        id="examples"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Examples
      </h2>

      <h3 id="child" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Child
      </h3>
      <ComponentPreview name="profile-card/profile-card-child">
        <ProfileCardChild />
      </ComponentPreview>

      <h3 id="employee" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Employee
      </h3>
      <ComponentPreview name="profile-card/profile-card-employee">
        <ProfileCardEmployee />
      </ComponentPreview>

      <h3 id="focused" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Focused
      </h3>
      <ComponentPreview name="profile-card/profile-card-focused">
        <ProfileCardFocused />
      </ComponentPreview>

      {/* ── Detail ────────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <ProfileCardDetail />

      {/* ── Installation ──────────────────────────────────────────── */}
      <h2
        id="installation"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Installation
      </h2>
      <p className="mt-3 text-sm text-secondary-foreground">
        Copy the component file into your project.
      </p>
      <div className="mt-3">
        <CodeBlock code={INSTALL_CODE} />
      </div>

      {/* ── Usage ─────────────────────────────────────────────────── */}
      <h2
        id="usage"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Usage
      </h2>
      <div className="mt-3">
        <CodeBlock code={USAGE_IMPORT} />
      </div>
      <div className="mt-3">
        <CodeBlock code={USAGE_CODE} />
      </div>

      {/* ── API Reference ─────────────────────────────────────────── */}
      <h2
        id="api-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        API Reference
      </h2>

      <h3 id="api-profile-card" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        ProfileCard
      </h3>
      <div className="mt-3 overflow-hidden rounded-large border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 text-foreground"><code>type</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>&quot;child&quot; | &quot;employee&quot;</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>&quot;child&quot;</code></td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>name</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>coverImage</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>focused</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>boolean</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>false</code></td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>room</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>identifier</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>guardian</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
              <td className="px-4 py-3 text-muted-foreground">— (child only)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>age</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
              <td className="px-4 py-3 text-muted-foreground">— (child only)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>level</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
              <td className="px-4 py-3 text-muted-foreground">— (employee only)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>schedule</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>{`{ label: string; active: boolean }[]`}</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>tags</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>string[]</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>statusBadges</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>ReactNode</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>fundingLabel</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>checked</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>boolean</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>onCheckedChange</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>(checked: boolean) =&gt; void</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>className</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-status-badge" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        ProfileCardStatusBadge
      </h3>
      <div className="mt-3 overflow-hidden rounded-large border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-3 text-left font-medium text-foreground">Prop</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Type</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 text-foreground"><code>borderColor</code></td>
              <td className="px-4 py-3 text-muted-foreground">
                <code>&quot;destructive&quot; | &quot;accent-green-bold&quot; | &quot;border-hover&quot;</code>
              </td>
              <td className="px-4 py-3 text-muted-foreground"><code>&quot;border-hover&quot;</code></td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>children</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>ReactNode</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>className</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── Variant Reference ─────────────────────────────────────── */}
      <h2
        id="variant-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Variant Reference
      </h2>
      <h3 id="variant-type" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Type
      </h3>
      <div className="mt-3 overflow-hidden rounded-large border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-3 text-left font-medium text-foreground">Variant</th>
              <th className="px-4 py-3 text-left font-medium text-foreground">Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 text-foreground"><code>child</code></td>
              <td className="px-4 py-3 text-muted-foreground">
                Shows guardian name + age row. Use for children/students enrolled in a program.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>employee</code></td>
              <td className="px-4 py-3 text-muted-foreground">
                Shows qualification level row. Use for staff, practitioners, or educators.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileCardPage;
