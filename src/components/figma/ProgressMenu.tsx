"use client";

/**
 * @registry-deps Button
 *
 * Imports Button from Button.tsx.
 * The registry generator should list "button" as a registryDependency
 * so the CLI installs Button alongside ProgressMenu.
 */

import { cn } from "@/lib/utils";
import { Tick03 } from "@/components/fragments/icons/catalog";
import { Button } from "@/components/figma/Button";

// ═══ ProgressMenu ═══

type ProgressStepStatusTypes = "default" | "in-progress" | "success";

interface IProgressStep {
  label: string;
  status: ProgressStepStatusTypes;
  icon?: React.ReactNode;
  tag?: string;
}

interface IProgressMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  steps: IProgressStep[];
  primaryButtonLabel?: string;
  onPrimaryClick?: () => void;
  secondaryButtonLabel?: string;
  onSecondaryClick?: () => void;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
  className?: string;
}

const StepIcon = (props: {
  status: ProgressStepStatusTypes;
  icon?: React.ReactNode;
}) => {
  const { status, icon } = props;

  if (status === "success") {
    return (
      <span className="flex items-center justify-center size-9 rounded-full bg-success-foreground text-primary-foreground shrink-0">
        <Tick03 className="size-4" />
      </span>
    );
  }

  if (status === "in-progress") {
    return (
      <span className="relative flex items-center justify-center size-9 rounded-full bg-primary-subtlest text-primary shrink-0">
        {icon && <span className="size-4">{icon}</span>}
        <span className="absolute inset-0 rounded-full border-2 border-primary animate-pulse" />
      </span>
    );
  }

  return (
    <span className="flex items-center justify-center size-9 rounded-full bg-accent-gray-subtlest text-subtle shrink-0">
      {icon && <span className="size-4">{icon}</span>}
    </span>
  );
};

export const ProgressMenu = (props: IProgressMenuProps) => {
  const {
    title,
    steps,
    primaryButtonLabel = "Continue",
    onPrimaryClick,
    secondaryButtonLabel = "Cancel",
    onSecondaryClick,
    showPrimaryButton = true,
    showSecondaryButton = true,
    className,
    ...rest
  } = props;

  return (
    <div
      className={cn(
        "flex flex-col gap-3 bg-background rounded-large px-6 py-4",
        className
      )}
      {...rest}
    >
      <h3 className="font-lexend font-bold text-[20px] leading-6 text-foreground m-0">
        {title}
      </h3>

      <div className="flex flex-col">
        {steps.map((step, idx) => (
          <div key={idx}>
            {/* Step row */}
            <div
              className={cn(
                "flex items-center gap-3 px-3 py-150 rounded-medium",
                step.status === "success" && "bg-success-subtle"
              )}
            >
              <StepIcon status={step.status} icon={step.icon} />
              <span
                className={cn(
                  "flex-1 font-lexend text-[14px] leading-5",
                  step.status === "default"
                    ? "font-medium text-subtle"
                    : step.status === "in-progress"
                    ? "font-semibold text-foreground"
                    : "font-medium text-foreground"
                )}
              >
                {step.label}
              </span>
              {step.tag && (
                <span className="font-lexend text-[12px] leading-4 text-muted-foreground px-150 py-050 bg-muted rounded-small">
                  {step.tag}
                </span>
              )}
            </div>

            {/* Connector */}
            {idx < steps.length - 1 && (
              <div className="ml-[30px] w-0.5 h-5 bg-accent-gray-subtler rounded-full" />
            )}
          </div>
        ))}
      </div>

      {(showPrimaryButton || showSecondaryButton) && (
        <div className="flex gap-100 mt-050">
          {showSecondaryButton && (
            <Button
              variant="secondary"
              onClick={onSecondaryClick}
            >
              {secondaryButtonLabel}
            </Button>
          )}
          {showPrimaryButton && (
            <Button
              variant="primary"
              onClick={onPrimaryClick}
            >
              {primaryButtonLabel}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
