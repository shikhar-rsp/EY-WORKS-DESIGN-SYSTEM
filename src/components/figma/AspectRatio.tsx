"use client";

import { cn } from "@/lib/utils";

// ─── AspectRatio ──────────────────────────────────────────────────────────────

interface IAspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Width / height ratio. Defaults to 16/9. */
  ratio?: number;
  children?: React.ReactNode;
  className?: string;
}

export const AspectRatio = (props: IAspectRatioProps) => {
  const { ratio = 16 / 9, children, className, style, ...rest } = props;

  return (
    <div
      style={{ aspectRatio: ratio, ...style }}
      className={cn("relative w-full overflow-hidden", className)}
      {...rest}
    >
      {children}
    </div>
  );
};
