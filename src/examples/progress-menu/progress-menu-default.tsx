"use client";

import { useState } from "react";

import { Baby01, Global, Home04 } from "@/components/fragments/icons/catalog";
import { ProgressMenu } from "@/components/figma/ProgressMenu";

type StepStatusTypes = "default" | "in-progress" | "success";

interface IStep {
  label: string;
  status: StepStatusTypes;
  icon?: React.ReactNode;
  tag?: string;
}

const INITIAL_STEPS: IStep[] = [
  {
    label: "Account Setup",
    status: "success",
    icon: <Home04 className="size-4" />,
    tag: "Required",
  },
  {
    label: "Child Profile",
    status: "in-progress",
    icon: <Baby01 className="size-4" />,
  },
  {
    label: "Global Settings",
    status: "default",
    icon: <Global className="size-4" />,
  },
];

export const ProgressMenuDefault = () => {
  const [steps, setSteps] = useState<IStep[]>(INITIAL_STEPS);

  const handleContinue = () => {
    setSteps((prev) => {
      const inProgressIdx = prev.findIndex((s) => s.status === "in-progress");
      if (inProgressIdx === -1) return prev;
      return prev.map((step, idx) => {
        if (idx === inProgressIdx) return { ...step, status: "success" as StepStatusTypes };
        if (idx === inProgressIdx + 1) return { ...step, status: "in-progress" as StepStatusTypes };
        return step;
      });
    });
  };

  return (
    <ProgressMenu
      title="Getting Started"
      steps={steps}
      primaryButtonLabel="Continue"
      secondaryButtonLabel="Cancel"
      onPrimaryClick={handleContinue}
    />
  );
};
