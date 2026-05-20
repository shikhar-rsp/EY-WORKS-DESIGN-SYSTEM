import { cn } from "@/lib/utils";

interface IBrandLogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
}

export const BrandLogo = (props: IBrandLogoProps) => (
  <>
    <span
      aria-label="EYWorks"
      role="img"
      className={cn(
        "inline-flex size-6 shrink-0 items-center justify-center [&>svg]:size-full",
        props.className,
      )}
    >
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="7" fill="#FFE600" />
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#1A1A1A"
          fontFamily="Geist, system-ui, sans-serif"
          fontSize="18"
          fontWeight="900"
          fontStyle="italic"
          letterSpacing="-0.5"
        >
          ey
        </text>
      </svg>
    </span>
    {props.showText && (
      <span
        className={cn(
          "text-sm font-semibold text-foreground",
          props.textClassName,
        )}
      >
        works
      </span>
    )}
  </>
);
