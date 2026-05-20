"use client";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/figma/Breadcrumb";
import { Folder01, Setting01, Home01 } from "@/components/fragments/icons/catalog";

export const BreadcrumbDetail = () => {
  return (
    <div className="mt-6 space-y-10">

      {/* ── Preview ──────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 rounded-large border border-border p-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components/navigation">Navigation</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* ── With Icons ───────────────────────────────────────────── */}
      <div>
        <h3 id="detail-with-icons" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          With Icons
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Pass icons as children of <code>BreadcrumbLink</code> or <code>BreadcrumbPage</code>.
          Icons sit inline alongside the text label.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <Home01 className="size-4" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/projects">
                  <Folder01 className="size-4" />
                  Projects
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  <Setting01 className="size-4" />
                  Settings
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* ── With Ellipsis ────────────────────────────────────────── */}
      <div>
        <h3 id="detail-with-ellipsis" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          With Ellipsis
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Use <code>BreadcrumbEllipsis</code> to collapse middle items in long paths.
          Typically shown when there are too many items to display.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components/navigation">Navigation</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* ── Custom Separator ─────────────────────────────────────── */}
      <div>
        <h3 id="detail-custom-separator" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Custom Separator
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Pass any <code>children</code> to <code>BreadcrumbSeparator</code> to replace the
          default chevron icon with a custom character or component.
        </p>
        <div className="mt-4 flex flex-col gap-4 rounded-large border border-border p-6">
          {/* Slash separator */}
          <div>
            <p className="mb-3 text-xs text-muted-foreground">/  separator</p>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          {/* Dot separator */}
          <div>
            <p className="mb-3 text-xs text-muted-foreground">· separator</p>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>·</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>·</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

    </div>
  );
};
