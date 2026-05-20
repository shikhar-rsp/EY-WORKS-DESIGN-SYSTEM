"use client";

import {
  Steps,
  StepsItem,
  StepsIndicator,
  StepsContent,
  StepsTitle,
  StepsDescription,
  StepsSeparator,
} from "@/components/figma/Steps";

const WIZARD_STEPS = [
  { value: "account", title: "Account", desc: "Set up your account credentials" },
  { value: "profile", title: "Profile", desc: "Tell us about yourself" },
  { value: "billing", title: "Billing", desc: "Add your payment method" },
  { value: "review", title: "Review", desc: "Confirm your details" },
];

export const StepsDetail = () => {
  return (
    <div className="mt-6 space-y-10">

      {/* ── Preview ──────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 rounded-large border border-border p-6">
          <Steps defaultValue="profile">
            {WIZARD_STEPS.map((step, i) => (
              <div key={step.value} className="flex flex-1 items-start">
                <StepsItem value={step.value} className="flex-col items-center">
                  <StepsIndicator />
                  <StepsContent className="items-center">
                    <StepsTitle>{step.title}</StepsTitle>
                    <StepsDescription className="text-center">{step.desc}</StepsDescription>
                  </StepsContent>
                </StepsItem>
                {i < WIZARD_STEPS.length - 1 && <StepsSeparator />}
              </div>
            ))}
          </Steps>
        </div>
      </div>

      {/* ── Horizontal ───────────────────────────────────────────── */}
      <div>
        <h3 id="detail-horizontal" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Horizontal (default)
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Click a step indicator to navigate to that step. Items before the current show as complete.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 space-y-6">
          {["account", "profile", "billing", "review"].map((current) => (
            <div key={current}>
              <span className="font-lexend text-xs text-muted-foreground block mb-3">
                value=&quot;{current}&quot;
              </span>
              <Steps value={current}>
                {WIZARD_STEPS.map((step, i) => (
                  <div key={step.value} className="flex flex-1 items-start">
                    <StepsItem value={step.value} className="flex-col items-center">
                      <StepsIndicator />
                      <StepsContent className="items-center">
                        <StepsTitle>{step.title}</StepsTitle>
                      </StepsContent>
                    </StepsItem>
                    {i < WIZARD_STEPS.length - 1 && <StepsSeparator />}
                  </div>
                ))}
              </Steps>
            </div>
          ))}
        </div>
      </div>

      {/* ── Vertical ─────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-vertical" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Vertical
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Use <code>orientation=&quot;vertical&quot;</code> for sidebar-style step flows.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <Steps defaultValue="billing" orientation="vertical">
            {WIZARD_STEPS.map((step, i) => (
              <div key={step.value}>
                <StepsItem value={step.value} className="flex-row gap-3">
                  <div className="flex flex-col items-center">
                    <StepsIndicator />
                    {i < WIZARD_STEPS.length - 1 && <StepsSeparator />}
                  </div>
                  <StepsContent className="pb-4">
                    <StepsTitle>{step.title}</StepsTitle>
                    <StepsDescription>{step.desc}</StepsDescription>
                  </StepsContent>
                </StepsItem>
              </div>
            ))}
          </Steps>
        </div>
      </div>

      {/* ── Custom Indicators ────────────────────────────────────── */}
      <div>
        <h3 id="detail-custom-indicators" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Custom Indicators
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Pass children to <code>StepsIndicator</code> to override the auto number/check icon.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <Steps defaultValue="profile">
            {[
              { value: "account", icon: "👤" },
              { value: "profile", icon: "📝" },
              { value: "billing", icon: "💳" },
            ].map((step, i, arr) => (
              <div key={step.value} className="flex flex-1 items-start">
                <StepsItem value={step.value} className="flex-col items-center">
                  <StepsIndicator>{step.icon}</StepsIndicator>
                  <StepsContent className="items-center">
                    <StepsTitle className="capitalize">{step.value}</StepsTitle>
                  </StepsContent>
                </StepsItem>
                {i < arr.length - 1 && <StepsSeparator />}
              </div>
            ))}
          </Steps>
        </div>
      </div>

    </div>
  );
};
