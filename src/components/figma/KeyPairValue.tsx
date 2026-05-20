"use client";

import { cn } from "@/lib/utils";
import { Copy01 } from "@/components/fragments/icons/catalog";

// ═══ KeyPairHeader ═══

interface IKeyPairHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  className?: string;
}

export const KeyPairHeader = (props: IKeyPairHeaderProps) => {
  const { label, iconBefore, iconAfter, className, ...rest } = props;

  return (
    <div
      className={cn("inline-flex items-center gap-1", className)}
      {...rest}
    >
      {iconBefore && (
        <span className="flex items-center justify-center size-4 shrink-0 text-subtlest">
          {iconBefore}
        </span>
      )}
      <span className="font-lexend font-normal text-sm leading-5 uppercase tracking-wide text-subtlest whitespace-nowrap">
        {label}
      </span>
      {iconAfter && (
        <span className="flex items-center justify-center size-4 shrink-0 text-subtlest">
          {iconAfter}
        </span>
      )}
    </div>
  );
};

// ═══ KeyPairValue ═══

type KeyPairOrientationTypes = "horizontal" | "vertical";

interface IKeyPairValueProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  orientation?: KeyPairOrientationTypes;
  reverse?: boolean;
  copy?: boolean;
  copyValue?: string;
  validationText?: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const KeyPairValue = (props: IKeyPairValueProps) => {
  const {
    label,
    orientation = "horizontal",
    reverse = false,
    copy = false,
    copyValue,
    validationText,
    iconBefore,
    iconAfter,
    children,
    className,
    ...rest
  } = props;

  const isHorizontal = orientation === "horizontal";

  const handleCopy = () => {
    if (copyValue) {
      navigator.clipboard.writeText(copyValue);
    }
  };

  const labelClasses = cn(
    "font-lexend text-sm leading-5 shrink-0",
    reverse ? "font-medium text-foreground" : "font-normal text-subtlest"
  );

  const valueClasses = cn(
    "font-lexend text-sm leading-5",
    reverse ? "font-normal text-subtlest" : "font-medium text-foreground"
  );

  return (
    <div
      className={cn(
        "flex py-2",
        isHorizontal ? "flex-col sm:flex-row items-start gap-1 sm:gap-4" : "flex-col gap-1",
        className
      )}
      {...rest}
    >
      {/* Label */}
      <span className={labelClasses}>{label}</span>

      {/* Value area */}
      <div className="flex flex-col gap-1 min-w-0 flex-1">
        <div className="flex items-center gap-2">
          {iconBefore && (
            <span className="flex items-center justify-center size-5 shrink-0 text-subtlest">
              {iconBefore}
            </span>
          )}
          <div className={cn("flex-1 min-w-0 overflow-hidden", valueClasses)}>
            {children}
          </div>
          {iconAfter && (
            <span className="flex items-center justify-center size-5 shrink-0 text-subtlest">
              {iconAfter}
            </span>
          )}
          {copy && (
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center justify-center size-6 shrink-0 text-subtlest hover:text-foreground transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-small"
              aria-label="Copy value"
            >
              <Copy01 className="size-4" />
            </button>
          )}
        </div>
        {validationText && (
          <p className="font-lexend text-sm leading-5 text-destructive">
            {validationText}
          </p>
        )}
      </div>
    </div>
  );
};
