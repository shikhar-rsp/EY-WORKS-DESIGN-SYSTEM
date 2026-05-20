import { cn } from "@/lib/utils";

interface IBrandLogoProps {
  className?: string;
  /** When true, expose the full "ey works" lockup at sm+ breakpoints. When false, clip to the icon. */
  showText?: boolean;
  /** Kept for backward compatibility — the PNG already includes the wordmark, so this prop is currently a no-op. */
  textClassName?: string;
}

const LOGO_SRC = "/svg/logo/ey%20logo.png";

export const BrandLogo = (props: IBrandLogoProps) => {
  const showFull = props.showText ?? false;

  return (
    <span
      role="img"
      aria-label="EYWorks"
      className={cn(
        "inline-flex h-6 shrink-0 items-center overflow-hidden",
        showFull ? "w-6 sm:w-auto" : "w-6",
        props.className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGO_SRC}
        alt=""
        className="h-full w-auto max-w-none object-left object-contain"
      />
    </span>
  );
};
