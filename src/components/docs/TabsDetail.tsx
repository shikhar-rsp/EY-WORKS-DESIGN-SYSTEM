"use client";

import { useState } from "react";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/figma/Tabs";

const TABS = ["Overview", "Analytics", "Reports"];

export const TabsDetail = () => {
  const [controlled, setControlled] = useState("Overview");

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
        <div className="mt-3 p-6 rounded-medium border border-border bg-background">
          <Tabs defaultValue="Overview">
            <TabsList>
              {TABS.map((t) => (
                <TabsTrigger key={t} value={t}>
                  {t}
                </TabsTrigger>
              ))}
            </TabsList>
            {TABS.map((t) => (
              <TabsContent
                key={t}
                value={t}
                className="mt-4 text-sm font-lexend text-secondary-foreground"
              >
                Content for {t}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* All Variants */}
      <div>
        <h3
          id="detail-all-variants"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          All Variants
        </h3>
        <div className="mt-3 p-6 rounded-medium border border-border bg-background flex flex-col gap-6">
          {(["underlined", "outlined", "gradient"] as const).map((variant) => (
            <div
              key={variant}
              className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <span className="w-24 shrink-0 text-xs text-muted-foreground capitalize pt-2">
                {variant}
              </span>
              <Tabs defaultValue="Overview" className="flex-1">
                <TabsList variant={variant}>
                  {TABS.map((t) => (
                    <TabsTrigger key={t} value={t}>
                      {t}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          ))}
        </div>
      </div>

      {/* Outlined with content */}
      <div>
        <h3
          id="detail-outlined"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Outlined
        </h3>
        <div className="mt-3 p-6 rounded-medium border border-border bg-background">
          <Tabs defaultValue="Overview">
            <TabsList variant="outlined">
              {TABS.map((t) => (
                <TabsTrigger key={t} value={t}>
                  {t}
                </TabsTrigger>
              ))}
            </TabsList>
            {TABS.map((t) => (
              <TabsContent
                key={t}
                value={t}
                className="mt-4 text-sm font-lexend text-secondary-foreground"
              >
                Content for {t}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* Gradient with content */}
      <div>
        <h3
          id="detail-gradient"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Gradient
        </h3>
        <div className="mt-3 p-6 rounded-medium border border-border bg-background">
          <Tabs defaultValue="Overview">
            <TabsList variant="gradient">
              {TABS.map((t) => (
                <TabsTrigger key={t} value={t}>
                  {t}
                </TabsTrigger>
              ))}
            </TabsList>
            {TABS.map((t) => (
              <TabsContent
                key={t}
                value={t}
                className="mt-4 text-sm font-lexend text-secondary-foreground"
              >
                Content for {t}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* Controlled */}
      <div>
        <h3
          id="detail-controlled"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Controlled
        </h3>
        <div className="mt-3 p-6 rounded-medium border border-border bg-background flex flex-col gap-3">
          <p className="text-xs text-muted-foreground font-lexend">
            Active tab: <strong>{controlled}</strong>
          </p>
          <Tabs value={controlled} onValueChange={setControlled}>
            <TabsList>
              {TABS.map((t) => (
                <TabsTrigger key={t} value={t}>
                  {t}
                </TabsTrigger>
              ))}
            </TabsList>
            {TABS.map((t) => (
              <TabsContent
                key={t}
                value={t}
                className="mt-4 text-sm font-lexend text-secondary-foreground"
              >
                Content for {t}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* With Badges (Design System extension) */}
      <div>
        <h3
          id="detail-badges"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          With Badges{" "}
          <span className="text-xs text-muted-foreground font-normal ml-2">
            — Design System extension
          </span>
        </h3>
        <div className="mt-3 p-6 rounded-medium border border-border bg-background flex flex-col gap-6">
          {(["underlined", "outlined", "gradient"] as const).map((variant) => (
            <div
              key={variant}
              className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <span className="w-24 shrink-0 text-xs text-muted-foreground capitalize pt-2">
                {variant}
              </span>
              <Tabs defaultValue="Errors" className="flex-1">
                <TabsList variant={variant}>
                  <TabsTrigger value="Errors" showErrorBadge errorCount="3">
                    Errors
                  </TabsTrigger>
                  <TabsTrigger
                    value="Comments"
                    showCommentBadge
                    commentCount="5"
                  >
                    Comments
                  </TabsTrigger>
                  <TabsTrigger value="Overview">Overview</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          ))}
        </div>
      </div>

      {/* Disabled */}
      <div>
        <h3
          id="detail-disabled"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Disabled
        </h3>
        <div className="mt-3 p-6 rounded-medium border border-border bg-background">
          <Tabs defaultValue="Overview">
            <TabsList>
              <TabsTrigger value="Overview">Overview</TabsTrigger>
              <TabsTrigger value="Analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="Reports">Reports</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
