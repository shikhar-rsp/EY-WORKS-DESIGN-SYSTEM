"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/figma/InputGroup";
import {
  Search02,
  ViewOff,
  Mail01,
  Link01,
} from "@/components/fragments/icons/catalog";

export const InputGroupDetail = () => {
  return (
    <div className="mt-6 space-y-10">
      {/* ── Preview ─────────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-preview"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Preview
        </h3>
        <div className="mt-4 max-w-sm">
          <InputGroup>
            <InputGroupAddon>
              <Search02 className="size-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search components…" />
          </InputGroup>
        </div>
      </div>

      {/* ── Addon Positions ──────────────────────────────────────── */}
      <div>
        <h3
          id="detail-addon-positions"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Addon Positions
        </h3>
        <div className="mt-4 flex flex-col gap-200 max-w-sm">
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">
              inline-start (default)
            </span>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <Search02 className="size-4" />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search…" />
            </InputGroup>
          </div>
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">
              inline-end
            </span>
            <InputGroup>
              <InputGroupInput placeholder="0.00" type="number" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>USD</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">
              Both sides
            </span>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <Mail01 className="size-4" />
              </InputGroupAddon>
              <InputGroupInput placeholder="you@example.com" />
              <InputGroupAddon align="inline-end">
                <Search02 className="size-4" />
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">
              block-start
            </span>
            <InputGroup>
              <InputGroupAddon align="block-start">
                <InputGroupText>Label above</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="Enter value…" />
            </InputGroup>
          </div>
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">
              block-end
            </span>
            <InputGroup>
              <InputGroupInput placeholder="Enter value…" />
              <InputGroupAddon align="block-end">
                <InputGroupText>Helper text below</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </div>

      {/* ── With Button ──────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-with-button"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          With Button
        </h3>
        <div className="mt-4 flex flex-col gap-200 max-w-sm">
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">
              Trailing button
            </span>
            <InputGroup>
              <InputGroupInput placeholder="Password" type="password" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton aria-label="Toggle visibility">
                  <ViewOff className="size-4" />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">
              Leading icon + trailing button
            </span>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <Search02 className="size-4" />
              </InputGroupAddon>
              <InputGroupInput placeholder="Search…" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton>Search</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">
              URL pattern
            </span>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="yoursite.com" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  variant="default"
                  size="sm"
                  className="py-0.5 h-fit rounded-sm"
                >
                  Go
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </div>

      {/* ── Button Variants ──────────────────────────────────────── */}
      <div>
        <h3
          id="detail-button-variants"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Button Variants
        </h3>
        <div className="mt-4 flex flex-col gap-200 max-w-sm">
          {(
            [
              "ghost",
              "default",
              "secondary",
              "outline",
              "destructive",
              "link",
            ] as const
          ).map((variant) => (
            <div key={variant} className="flex flex-col gap-075">
              <span className="text-xs text-muted-foreground font-lexend">
                {variant}
              </span>
              <InputGroup>
                <InputGroupInput placeholder="Enter value…" />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton variant={variant}>
                    {variant}
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
          ))}
        </div>
      </div>

      {/* ── Button Sizes ─────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-button-sizes"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Button Sizes
        </h3>
        <div className="mt-4 flex flex-col gap-200 max-w-sm">
          {(["xs", "sm", "icon-xs", "icon-sm"] as const).map((size) => (
            <div key={size} className="flex flex-col gap-075">
              <span className="text-xs text-muted-foreground font-lexend">
                {size}
              </span>
              <InputGroup>
                <InputGroupInput placeholder="Enter value…" />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton size={size}>
                    {size.startsWith("icon") ? (
                      <Link01 className="size-4" />
                    ) : (
                      "Action"
                    )}
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
          ))}
        </div>
      </div>

      {/* ── With Textarea ────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-with-textarea"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          With Textarea
        </h3>
        <div className="mt-4 max-w-sm">
          <InputGroup>
            <InputGroupAddon align="block-start">
              <InputGroupText>Message</InputGroupText>
            </InputGroupAddon>
            <InputGroupTextarea rows={3} placeholder="Write your message…" />
          </InputGroup>
        </div>
      </div>

      {/* ── Disabled ─────────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-disabled"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Disabled
        </h3>
        <div className="mt-4 flex flex-col gap-200 max-w-sm">
          <InputGroup disabled>
            <InputGroupAddon>
              <Search02 className="size-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Disabled input" />
          </InputGroup>
          <InputGroup disabled>
            <InputGroupInput placeholder="Disabled with button" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton>Click</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};
