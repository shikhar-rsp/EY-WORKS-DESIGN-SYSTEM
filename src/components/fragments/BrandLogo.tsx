import { cn } from "@/lib/utils";

interface IBrandLogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
}

export const BrandLogo = (props: IBrandLogoProps) => (
  <>
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex size-6 shrink-0 items-center justify-center [&>svg]:size-full [&>svg]:h-full [&>svg]:w-full",
        props.className,
      )}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="3" width="11" height="11" rx="3" fill="currentColor" />
        <rect x="18" y="3" width="11" height="11" rx="3" fill="currentColor" />
        <rect x="3" y="18" width="11" height="11" rx="3" fill="currentColor" />
        <rect
          x="18"
          y="18"
          width="11"
          height="11"
          rx="3"
          fill="currentColor"
          opacity="0.4"
        />
      </svg>
    </span>
    {props.showText && (
      <span
        className={cn(
          "text-sm font-semibold text-foreground",
          props.textClassName,
        )}
      >
        [Brand Name]
      </span>
    )}
  </>
);
