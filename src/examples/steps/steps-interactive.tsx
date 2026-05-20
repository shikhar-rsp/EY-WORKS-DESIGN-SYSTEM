"use client";

import { useState } from "react";

import {
  Steps,
  StepsItem,
  StepsIndicator,
  StepsContent,
  StepsTitle,
  StepsDescription,
  StepsSeparator,
} from "@/components/figma/Steps";

const STEP_VALUES = ["1", "2", "3"];

const STEP_DATA = [
  { value: "1", title: "Account", description: "Create your account" },
  { value: "2", title: "Billing", description: "Add payment method" },
  { value: "3", title: "Confirm", description: "Review and confirm" },
];

export const StepsInteractive = () => {
  const [current, setCurrent] = useState("1");

  const currentIndex = STEP_VALUES.indexOf(current);

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrent(STEP_VALUES[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < STEP_VALUES.length - 1) {
      setCurrent(STEP_VALUES[currentIndex + 1]);
    }
  };

  return (
    <div className="w-full max-w-lg p-6">
      <Steps value={current} onValueChange={setCurrent}>
        {STEP_DATA.map((step, index) => (
          <>
            <StepsItem key={step.value} value={step.value}>
              <StepsIndicator />
              <StepsContent>
                <StepsTitle>{step.title}</StepsTitle>
                <StepsDescription>{step.description}</StepsDescription>
              </StepsContent>
            </StepsItem>
            {index < STEP_DATA.length - 1 && <StepsSeparator key={`sep-${step.value}`} />}
          </>
        ))}
      </Steps>

      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={handleBack}
          disabled={currentIndex === 0}
          className="rounded-medium border border-border px-200 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:text-disabled"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={currentIndex === STEP_VALUES.length - 1}
          className="rounded-medium bg-primary px-200 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-disabled-surface disabled:text-disabled"
        >
          {currentIndex === STEP_VALUES.length - 1 ? "Finish" : "Next"}
        </button>
        <span className="text-xs text-muted-foreground">
          Step {currentIndex + 1} of {STEP_VALUES.length}
        </span>
      </div>
    </div>
  );
};
