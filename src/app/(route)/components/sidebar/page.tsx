import type { Metadata } from "next";

import { SidebarDetail } from "@/components/docs/SidebarDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";

import { SidebarDefault } from "@/examples/sidebar/sidebar-default";
import { SidebarCollapsed } from "@/examples/sidebar/sidebar-collapsed";
import { SidebarNavLinkStates } from "@/examples/sidebar/sidebar-nav-link";
import { SidebarEllieCta } from "@/examples/sidebar/sidebar-ellie-cta";

export const metadata: Metadata = {
  title: "Sidebar | Design System",
  description:
    "Main application navigation with an icon rail, expandable submenu panel, and an AI assistant CTA.",
};

const INSTALL_CODE = `cp src/components/figma/Sidebar.tsx your-project/components/Sidebar.tsx`;

const USAGE_IMPORT = `import { SidebarBase, SidebarNavLink, SideNavModule, EllieCTA, Submenu } from "@/components/figma/Sidebar"`;

const USAGE_CODE = `<SidebarBase
  modules={[
    {
      icon: <HomeIcon />,
      label: "Dashboard",
      module: "dashboard",
      links: [
        { label: "Overview" },
        { label: "Analytics" },
      ],
    },
  ]}
  activeModule="dashboard"
  isOpen
/>`;

const SidebarDocsPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title & Description ─────────────────────────────────── */}
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Sidebar
      </h1>
      <p className="mt-2 leading-7 text-secondary-foreground">
        Main application navigation shell. Combines an icon rail with an
        expandable submenu panel, optional product icon section, and an Ellie AI
        assistant CTA footer.
      </p>

      <BrandPreviewToolbar />

      {/* ── Examples ──────────────────────────────────────────────── */}
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
        Default (Open)
      </h3>
      <div className="mt-3">
        <ComponentPreview name="sidebar/sidebar-default">
          <SidebarDefault />
        </ComponentPreview>
      </div>

      <h3
        id="collapsed"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Collapsed
      </h3>
      <div className="mt-3">
        <ComponentPreview name="sidebar/sidebar-collapsed">
          <SidebarCollapsed />
        </ComponentPreview>
      </div>

      <h3
        id="nav-link-states"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        NavLink States
      </h3>
      <div className="mt-3">
        <ComponentPreview name="sidebar/sidebar-nav-link">
          <SidebarNavLinkStates />
        </ComponentPreview>
      </div>

      <h3
        id="ellie-cta"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Ellie CTA
      </h3>
      <div className="mt-3">
        <ComponentPreview name="sidebar/sidebar-ellie-cta">
          <SidebarEllieCta />
        </ComponentPreview>
      </div>

      {/* ── Detail ──────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <SidebarDetail />

      {/* ── Installation ──────────────────────────────────────── */}
      <h2
        id="installation"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Installation
      </h2>
      <div className="mt-4">
        <CodeBlock code={INSTALL_CODE} />
      </div>

      {/* ── Usage ─────────────────────────────────────────────── */}
      <h2
        id="usage"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Usage
      </h2>
      <div className="mt-4 space-y-4">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      {/* ── API Reference ─────────────────────────────────────── */}
      <h2
        id="api-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        API Reference
      </h2>

      <h3
        id="sidebar-base-api"
        className="mt-6 scroll-mt-20 text-base font-semibold text-foreground"
      >
        SidebarBase
      </h3>
      <div className="mt-3 overflow-hidden rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">modules</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ISidebarItem[]</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">logo</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">placeholder logo mark</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">productIcons</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">{"{ icon, label, onClick }[]"}</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">undefined</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">activeModule</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">first module</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">isOpen</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">true</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onOpenChange</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">{"(open: boolean) => void"}</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">undefined</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onModuleChange</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">{"(module: string) => void"}</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">undefined</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">showEllieCTA</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">true</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        id="sidebar-nav-link-api"
        className="mt-6 scroll-mt-20 text-base font-semibold text-foreground"
      >
        SidebarNavLink
      </h3>
      <div className="mt-3 overflow-hidden rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">label</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">state</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">"default" | "hover" | "selected" | "disabled" | "pressed"</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">"default"</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">iconBefore</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">undefined</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">iconAfter</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">undefined</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        id="side-nav-module-api"
        className="mt-6 scroll-mt-20 text-base font-semibold text-foreground"
      >
        SideNavModule
      </h3>
      <div className="mt-3 overflow-hidden rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">icon</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">label</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">undefined</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">state</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">"default" | "hover" | "active"</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">"default"</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">notification</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">connect</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        id="ellie-cta-api"
        className="mt-6 scroll-mt-20 text-base font-semibold text-foreground"
      >
        EllieCTA
      </h3>
      <div className="mt-3 overflow-hidden rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">heading</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">"How can I help you today?"</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">buttonLabel</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">"Button"</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onButtonClick</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">{"() => void"}</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">undefined</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">isHovered</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        id="submenu-api"
        className="mt-6 scroll-mt-20 text-base font-semibold text-foreground"
      >
        Submenu
      </h3>
      <div className="mt-3 overflow-hidden rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">title</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">children</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">icon</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ReactNode</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">undefined</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onClose</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">{"() => void"}</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">undefined</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">showEllieCTA</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">ellieCTAProps</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">Partial&lt;IEllieCTAProps&gt;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">undefined</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">floating</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── Variant Reference ─────────────────────────────────── */}
      <h2
        id="variant-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Variant Reference
      </h2>

      <h3
        id="nav-link-variant-ref"
        className="mt-6 scroll-mt-20 text-base font-semibold text-foreground"
      >
        SidebarNavLink — state
      </h3>
      <div className="mt-3 overflow-hidden rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Variant</th>
              <th className="px-4 py-3 font-semibold text-foreground">Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">default</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">Resting state — white background, subtle text</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">hover</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">Mouse-over — light pink background</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">selected</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">Active / current page — light gray background, bold foreground text</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">pressed</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">Mouse-down — deeper pink background</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">disabled</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">Non-interactive — muted text, pointer-events disabled</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        id="module-variant-ref"
        className="mt-6 scroll-mt-20 text-base font-semibold text-foreground"
      >
        SideNavModule — state
      </h3>
      <div className="mt-3 overflow-hidden rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Variant</th>
              <th className="px-4 py-3 font-semibold text-foreground">Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">default</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">Inactive module — transparent background, subtle icon</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">hover</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">Mouse-over — light pink circle, primary icon color</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">active</td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">Current module — solid primary circle, white icon, connect line</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SidebarDocsPage;
