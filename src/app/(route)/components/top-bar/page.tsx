import type { Metadata } from "next";

import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { TopBarDetail } from "@/components/docs/TopBarDetail";
import { TopBarDefault } from "@/examples/top-bar/top-bar-default";
import { TopBarFormHeader } from "@/examples/top-bar/top-bar-form-header";

export const metadata: Metadata = {
  title: "Top Bar | Design System",
  description:
    "Top Bar provides the main navigation header and a form-level sub-header. The TopBar renders logo, workspace selector, search, and action icons. FormHeader shows a title, helper message, and action buttons for form contexts.",
};

const INSTALL_CODE = `cp src/components/figma/Header.tsx your-project/components/Header.tsx`;

const USAGE_IMPORT = `import { TopBar, FormHeader } from "@/components/figma/Header"`;

const USAGE_CODE = `"use client";

import { TopBar, FormHeader } from "@/components/figma/Header";

// TopBar — main navigation
export const AppHeader = () => (
  <TopBar
    logo={<YourLogo />}
    workspaceName="Acme Corp"
    showSearch
    notificationCount={9}
    avatarSrc="/avatar.jpg"
    onSettingsClick={() => router.push("/settings")}
    onNotificationClick={() => setNotifOpen(true)}
    onAvatarClick={() => setMenuOpen(true)}
  />
);

// FormHeader — form-level sub-header
export const MyFormHeader = () => (
  <FormHeader
    title="New Child Profile"
    helperMessage="Fill in the details below"
    isSaving={isSaving}
    onResetFields={handleReset}
    onClose={() => router.back()}
  />
);`;

const TopBarPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <h1 className="text-4xl font-bold text-foreground">Top Bar</h1>
      <p className="mt-3 text-sm text-secondary-foreground">
        Provides the application-level navigation shell. <strong>TopBar</strong> renders the main
        header row with logo, workspace selector, search field, settings/notification icon buttons,
        and user avatar. <strong>FormHeader</strong> is a compact sub-header for form pages showing
        a title, helper message, and contextual action buttons.
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

      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        TopBar
      </h3>
      <ComponentPreview name="top-bar/top-bar-default">
        <TopBarDefault />
      </ComponentPreview>

      <h3 id="form-header" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Form Header
      </h3>
      <ComponentPreview name="top-bar/top-bar-form-header">
        <TopBarFormHeader />
      </ComponentPreview>

      {/* ── Detail ────────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <TopBarDetail />

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

      <h3 id="api-topbar" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        TopBar
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
              <td className="px-4 py-3 text-foreground"><code>logo</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>ReactNode</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>workspaceName</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>&quot;Workspace&quot;</code></td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>showSearch</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>boolean</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>true</code></td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>searchPlaceholder</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>&quot;Search anything&quot;</code></td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>notificationCount</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>number</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>avatarSrc</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>onWorkspaceClick</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>() =&gt; void</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>onSearchClick</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>() =&gt; void</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>onSettingsClick</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>() =&gt; void</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>onNotificationClick</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>() =&gt; void</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>onAvatarClick</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>() =&gt; void</code></td>
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

      <h3 id="api-formheader" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        FormHeader
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
              <td className="px-4 py-3 text-foreground"><code>title</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>helperMessage</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>isSaving</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>boolean</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>false</code></td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>savingText</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>string</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>&quot;Saving...&quot;</code></td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>actions</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>ReactNode</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>onResetFields</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>() =&gt; void</code></td>
              <td className="px-4 py-3 text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-foreground"><code>onClose</code></td>
              <td className="px-4 py-3 text-muted-foreground"><code>() =&gt; void</code></td>
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
    </div>
  );
};

export default TopBarPage;
