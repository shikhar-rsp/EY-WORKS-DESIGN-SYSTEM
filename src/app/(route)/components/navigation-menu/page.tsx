import type { Metadata } from "next";

import { NavigationMenuDefault } from "@/examples/navigation-menu/navigation-menu-default";
import { NavigationMenuDetail } from "@/components/docs/NavigationMenuDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";

export const metadata: Metadata = {
  title: "Navigation Menu | Design System",
  description:
    "Accessible navigation menu with flyout dropdown panels and keyboard support.",
};

const INSTALL_CODE = `cp src/components/figma/NavigationMenu.tsx your-project/components/NavigationMenu.tsx`;
const USAGE_IMPORT = `import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/figma/NavigationMenu"`;
const USAGE_CODE = `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-50 gap-1 p-3">
          <li>
            <NavigationMenuLink href="/analytics">Analytics</NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/docs" className={navigationMenuTriggerStyle()}>
        Documentation
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`;

const NavigationMenuPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Navigation Menu
        </h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A top-level navigation component with flyout dropdown panels. Supports
        triggers with chevron indicators, rich content layouts, and plain anchor
        links. Click outside or press Escape to dismiss open panels.
      </p>

      <BrandPreviewToolbar />

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
        <ComponentPreview name="navigation-menu/navigation-menu-default">
          <NavigationMenuDefault />
        </ComponentPreview>
      </div>

      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <NavigationMenuDetail />

      <h2
        id="installation"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Installation
      </h2>
      <div className="mt-4">
        <CodeBlock code={INSTALL_CODE} />
      </div>

      <h2
        id="usage"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Usage
      </h2>
      <div className="mt-4 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      <h2
        id="api-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        API Reference
      </h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">
                Sub-component
              </th>
              <th className="px-4 py-3 font-semibold text-foreground">
                Key Props
              </th>
              <th className="px-4 py-3 font-semibold text-foreground">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">NavigationMenu</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                orientation
              </td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">
                Root nav element; manages open state and click-outside dismiss
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">
                NavigationMenuList
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                className
              </td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">
                Flex row container for menu items
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">
                NavigationMenuItem
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                className
              </td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">
                Provides item context (ID, isOpen, triggerRef)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">
                NavigationMenuTrigger
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                onClick, className
              </td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">
                Button with animated chevron; toggles content on click
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">
                NavigationMenuContent
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                className
              </td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">
                Absolutely positioned panel rendered below trigger
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">
                NavigationMenuLink
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                href, active, className
              </td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">
                Anchor tag; pass active to highlight current page
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">
                navigationMenuTriggerStyle()
              </td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">
                —
              </td>
              <td className="px-4 py-3 text-xs text-secondary-foreground">
                Utility that returns trigger class string for use with Next.js
                Link
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NavigationMenuPage;
