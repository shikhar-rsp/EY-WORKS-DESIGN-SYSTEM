"use client";

import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

// ─── Skeleton ─────────────────────────────────────────────────────

interface ISkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Skeleton = (props: ISkeletonProps) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("animate-pulse rounded-medium bg-muted", className)}
      {...rest}
    />
  );
};
