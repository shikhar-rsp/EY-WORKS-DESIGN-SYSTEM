"use client";

import { Search, ArrowRight01Round } from "@/components/fragments/icons/catalog";

import { Button } from "@/components/figma/Button";

export const ComponentGridCard = () => (
  <div className="rounded-lg border border-border bg-background p-6 shadow-sm">
    <h3 className="font-lexend text-base font-semibold text-foreground">
      Button Variants
    </h3>
    <p className="mt-1 font-lexend text-[13px] text-secondary-foreground">
      11 variants, 3 sizes, full state coverage.
    </p>

    <div className="mt-5 space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="grey">Grey</Button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="link">Link style</Button>
        <Button variant="dashed">Dashed</Button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button variant="primary" leadingIcon={<Search className="size-4" />}>
          Search
        </Button>
        <Button variant="secondary" trailingIcon={<ArrowRight01Round className="size-4" />}>
          Continue
        </Button>
        <Button
          variant="primary"
          iconOnly
          leadingIcon={<ArrowRight01Round className="size-4" />}
          aria-label="Go"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button variant="primary" size="default">
          Default
        </Button>
        <Button variant="primary" size="compact">
          Compact
        </Button>
        <Button variant="primary" size="narrow">
          Narrow
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant="primary"
          notificationDot
          notificationCount="3"
          notificationColor="danger"
        >
          Notifications
        </Button>
        <Button variant="skeleton">Loading</Button>
        <Button variant="primary" isDisabled>
          Disabled
        </Button>
      </div>
    </div>
  </div>
);
