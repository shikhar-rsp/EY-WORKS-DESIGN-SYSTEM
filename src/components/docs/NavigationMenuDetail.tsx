"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/figma/NavigationMenu";

export const NavigationMenuDetail = () => {
  return (
    <div className="mt-6 space-y-10">
      {/* Preview */}
      <div>
        <h3
          id="detail-preview"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Preview
        </h3>
        <div className="mt-4 flex flex-wrap items-start gap-4 rounded-large border border-border p-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-55 gap-1 p-3">
                    {["Analytics", "Billing", "Integrations"].map((name) => (
                      <li key={name}>
                        <NavigationMenuLink
                          href="#"
                          className="block rounded-medium px-3 py-2 text-sm hover:bg-muted"
                        >
                          {name}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  Docs
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* With dropdown content */}
      <div>
        <h3
          id="detail-dropdown"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Rich Dropdown Content
        </h3>
        <p className="mt-1 text-sm text-secondary-foreground">
          NavigationMenuContent can hold any layout — grids, featured tiles, or
          simple lists.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                <NavigationMenuContent className="z-50">
                  <ul className="grid gap-3 p-4 w-105 md:grid-cols-[160px_1fr] auto-rows-auto">
                    <li className="row-span-3">
                      <div className="flex h-full flex-col justify-end rounded-medium bg-primary p-4">
                        <p className="text-sm font-bold text-primary-foreground">
                          Design System
                        </p>
                        <p className="mt-1 text-xs text-primary-foreground/80">
                          A component library with full token coverage.
                        </p>
                      </div>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="#"
                        className="flex flex-col items-start gap-1 w-full h-fit rounded-medium hover:bg-muted"
                      >
                        <p className="text-sm font-medium text-foreground">
                          Introduction
                        </p>
                        <p className="text-xs text-secondary-foreground">
                          Overview of the system.
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="#"
                        className="flex flex-col items-start gap-1 w-full h-fit rounded-medium hover:bg-muted"
                      >
                        <p className="text-sm font-medium text-foreground">
                          Installation
                        </p>
                        <p className="text-xs text-secondary-foreground">
                          Copy components into your project.
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="#"
                        className="flex flex-col items-start gap-1 w-full h-fit rounded-medium hover:bg-muted"
                      >
                        <p className="text-sm font-medium text-foreground">
                          Theming
                        </p>
                        <p className="text-xs text-secondary-foreground">
                          Customize brand colors.
                        </p>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-70 grid-cols-2 gap-1 p-3">
                    {[
                      "Button",
                      "Input",
                      "Dialog",
                      "Select",
                      "Carousel",
                      "Command",
                    ].map((name) => (
                      <li key={name}>
                        <NavigationMenuLink
                          href="#"
                          className="block rounded-medium px-3 py-2 text-sm hover:bg-muted"
                        >
                          {name}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Active link */}
      <div>
        <h3
          id="detail-active"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Active State
        </h3>
        <p className="mt-1 text-sm text-secondary-foreground">
          Pass{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            active
          </code>{" "}
          to{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            NavigationMenuLink
          </code>{" "}
          to highlight the current page.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  active
                  className={navigationMenuTriggerStyle()}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};
