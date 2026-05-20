import type { Metadata } from "next";

import { AvatarDefault } from "@/examples/avatar/avatar-default";
import { AvatarSizes } from "@/examples/avatar/avatar-sizes";
import { AvatarStatus } from "@/examples/avatar/avatar-status";
import { AvatarGroupExample } from "@/examples/avatar/avatar-group";
import { AvatarDetail } from "@/components/docs/AvatarDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";

export const metadata: Metadata = {
  title: "Avatar | Design System",
  description:
    "An image element with a fallback for representing users. Supports image, initials fallback, status badges, and grouped avatar stacks.",
};

const INSTALL_CODE = `cp src/components/figma/Avatar.tsx your-project/components/Avatar.tsx`;

const USAGE_IMPORT = `import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/figma/Avatar"`;

const USAGE_CODE = `{/* Basic avatar with image */}
<Avatar>
  <AvatarImage src="/avatars/avatar-1.png" alt="@shadcn" />
  <AvatarFallback>SC</AvatarFallback>
</Avatar>

{/* Sized avatar with badge */}
<Avatar size="lg">
  <AvatarImage src="..." alt="User" />
  <AvatarFallback>MH</AvatarFallback>
  <AvatarBadge variant="online" />
</Avatar>

{/* Group with overflow */}
<AvatarGroup max={4}>
  <Avatar><AvatarFallback>AC</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>MH</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>SR</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>PK</AvatarFallback></Avatar>
</AvatarGroup>`;

const AvatarPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Avatar
        </h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        An image element with a fallback for representing users. Supports
        profile images, initials fallback, optional status badges, and grouped
        avatar stacks with overflow count.
      </p>

      {/* ── Brand Toolbar ─────────────────────────────────────────── */}
      <BrandPreviewToolbar />

      {/* ── Examples placeholder — filled by generate-docs ────────── */}
      <h2
        id="examples"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Examples
      </h2>
      <h3
        id="default"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Default
      </h3>
      <div className="mt-3">
        <ComponentPreview name="avatar/avatar-default">
          <AvatarDefault />
        </ComponentPreview>
      </div>

      <h3
        id="sizes"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Sizes
      </h3>
      <div className="mt-3">
        <ComponentPreview name="avatar/avatar-sizes">
          <AvatarSizes />
        </ComponentPreview>
      </div>

      <h3
        id="status"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Status Badge
      </h3>
      <div className="mt-3">
        <ComponentPreview name="avatar/avatar-status">
          <AvatarStatus />
        </ComponentPreview>
      </div>

      <h3
        id="group"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Avatar Group
      </h3>
      <div className="mt-3">
        <ComponentPreview name="avatar/avatar-group">
          <AvatarGroupExample />
        </ComponentPreview>
      </div>

      {/* ── Detail ────────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <AvatarDetail />

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
      <div className="mt-3 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      {/* ── API Reference ─────────────────────────────────────────── */}
      <h2
        id="api-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        API Reference
      </h2>

      <h3
        id="api-avatar"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Avatar
      </h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">
                Default
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">size</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;xs&quot; | &quot;sm&quot; | &quot;default&quot; |
                &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot;
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;default&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">shape</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;circle&quot; | &quot;square&quot;
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;circle&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                —
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">children</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                ReactNode
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                —
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        id="api-avatar-image"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        AvatarImage
      </h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">
                Default
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">src</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                —
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">alt</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                —
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        id="api-avatar-fallback"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        AvatarFallback
      </h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">
                Default
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">delayMs</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                number
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                0
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                —
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">children</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                ReactNode
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                —
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        id="api-avatar-badge"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        AvatarBadge
      </h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">
                Default
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">variant</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;online&quot; | &quot;offline&quot; | &quot;busy&quot; |
                &quot;away&quot; | &quot;default&quot;
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;online&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">focused</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                boolean
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                false
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                —
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        id="api-avatar-group"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        AvatarGroup
      </h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">
                Default
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">max</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                number
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                —
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">size</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                AvatarSizeTypes
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;default&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">children</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                ReactNode
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                —
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                —
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        id="api-avatar-group-count"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        AvatarGroupCount
      </h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">
                Default
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">count</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                number
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                —
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">size</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                AvatarSizeTypes
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                &quot;default&quot;
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                string
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                —
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AvatarPage;
