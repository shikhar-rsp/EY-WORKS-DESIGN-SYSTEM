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

export const NavigationMenuDefault = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] min-h-fit grid-cols-[160px_1fr] auto-rows-min gap-3 p-4">
              <li className="row-span-3">
                <div className="flex h-full w-full flex-col justify-end rounded-medium bg-primary p-4">
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
                    Learn how the design system works.
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
                  <p className="text-sm font-medium text-foreground">Theming</p>
                  <p className="text-xs text-secondary-foreground">
                    Customize colors and typography.
                  </p>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-75 gap-1 p-3">
              {["Button", "Input", "Dialog", "Select", "Carousel"].map(
                (name) => (
                  <li key={name}>
                    <NavigationMenuLink
                      href="#"
                      className="block rounded-medium px-3 py-2 text-sm text-foreground hover:bg-muted"
                    >
                      {name}
                    </NavigationMenuLink>
                  </li>
                ),
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
