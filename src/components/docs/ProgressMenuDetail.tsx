"use client";

import {
  Baby01,
  Global,
  Tick03,
  Home04,
} from "@/components/fragments/icons/catalog";

import { ProgressMenu } from "@/components/figma/ProgressMenu";

const DEMO_STEPS_MIXED = [
  {
    label: "Account Setup",
    status: "success" as const,
    icon: <Home04 className="size-4" />,
    tag: "Required",
  },
  {
    label: "Child Profile",
    status: "in-progress" as const,
    icon: <Baby01 className="size-4" />,
  },
  {
    label: "Global Settings",
    status: "default" as const,
    icon: <Global className="size-4" />,
  },
];

export const ProgressMenuDetail = () => {
  return (
    <div className="font-preview-scope color-preview-scope">
      {/* ── Preview ──────────────────────────────────────────── */}
      <h3
        id="detail-preview"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Preview
      </h3>
      <div className="mt-3 rounded-lg border border-border p-6">
        <ProgressMenu
          title="Getting Started"
          steps={DEMO_STEPS_MIXED}
          primaryButtonLabel="Continue"
          secondaryButtonLabel="Cancel"
        />
      </div>

      {/* ── Step States ────────────────────────────────────────── */}
      <h3
        id="detail-step-states"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Step States
      </h3>
      <div className="mt-3 flex flex-wrap gap-6 rounded-lg border border-border p-6">
        <div className="flex flex-col gap-1">
          <ProgressMenu
            title="Default"
            steps={[
              {
                label: "Step One",
                status: "default",
                icon: <Baby01 className="size-4" />,
              },
            ]}
            showPrimaryButton={false}
            showSecondaryButton={false}
          />
          <span className="text-xs text-muted-foreground font-lexend px-6">default</span>
        </div>
        <div className="flex flex-col gap-1">
          <ProgressMenu
            title="In Progress"
            steps={[
              {
                label: "Step One",
                status: "in-progress",
                icon: <Baby01 className="size-4" />,
              },
            ]}
            showPrimaryButton={false}
            showSecondaryButton={false}
          />
          <span className="text-xs text-muted-foreground font-lexend px-6">in-progress</span>
        </div>
        <div className="flex flex-col gap-1">
          <ProgressMenu
            title="Success"
            steps={[
              {
                label: "Step One",
                status: "success",
                icon: <Tick03 className="size-4" />,
                tag: "Required",
              },
            ]}
            showPrimaryButton={false}
            showSecondaryButton={false}
          />
          <span className="text-xs text-muted-foreground font-lexend px-6">success</span>
        </div>
      </div>

      {/* ── With Buttons ───────────────────────────────────────── */}
      <h3
        id="detail-with-buttons"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        With Buttons
      </h3>
      <div className="mt-3 rounded-lg border border-border p-6">
        <ProgressMenu
          title="Onboarding"
          steps={DEMO_STEPS_MIXED}
          primaryButtonLabel="Next Step"
          secondaryButtonLabel="Skip"
          showPrimaryButton
          showSecondaryButton
        />
      </div>
    </div>
  );
};
