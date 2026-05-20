"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// ─── Context ──────────────────────────────────────────────────────────────────

type ImageStatusTypes = "idle" | "loading" | "loaded" | "error";

interface IAvatarContext {
  imgStatus: ImageStatusTypes;
  setImgStatus: (status: ImageStatusTypes) => void;
}

const AvatarContext = createContext<IAvatarContext | null>(null);

const useAvatarContext = () => {
  const ctx = useContext(AvatarContext);
  if (!ctx) throw new Error("must be used inside <Avatar>");
  return ctx;
};

// ─── Types / Constants ────────────────────────────────────────────────────────

export type AvatarSizeTypes = "xs" | "sm" | "default" | "md" | "lg" | "xl";
export type AvatarShapeTypes = "circle" | "square";
export type AvatarBadgeVariantTypes = "online" | "offline" | "busy" | "away" | "default";

const AVATAR_SIZE_CLASSES: Record<AvatarSizeTypes, string> = {
  xs: "size-4 text-[8px]",
  sm: "size-6 text-[10px]",
  default: "size-8 text-xs",
  md: "size-8 text-xs",
  lg: "size-10 text-sm",
  xl: "size-12 text-sm",
};

const GROUP_OVERLAP_CLASSES: Record<AvatarSizeTypes, string> = {
  xs: "-ml-1",
  sm: "-ml-1.5",
  default: "-ml-2",
  md: "-ml-2",
  lg: "-ml-3",
  xl: "-ml-4",
};

const BADGE_STATUS_CLASSES: Record<AvatarBadgeVariantTypes, string> = {
  online: "bg-success",
  offline: "bg-muted-foreground",
  busy: "bg-destructive",
  away: "bg-warning",
  default: "bg-accent-gray",
};

// ═══════════════════════════════════════════════════════════════════════════════

// ─── Avatar ───────────────────────────────────────────────────────────────────

interface IAvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Size of the avatar. Defaults to "default" (32px). */
  size?: AvatarSizeTypes;
  /** Shape of the avatar. Defaults to "circle". */
  shape?: AvatarShapeTypes;
  className?: string;
  children?: React.ReactNode;
}

export const Avatar = (props: IAvatarProps) => {
  const { size = "default", shape = "circle", className, children, ...rest } = props;
  const [imgStatus, setImgStatus] = useState<ImageStatusTypes>("idle");

  return (
    <AvatarContext.Provider value={{ imgStatus, setImgStatus }}>
      <span
        className={cn(
          "relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden",
          "bg-muted font-lexend font-medium text-muted-foreground",
          AVATAR_SIZE_CLASSES[size],
          shape === "circle" ? "rounded-full" : "rounded-medium",
          className,
        )}
        {...rest}
      >
        {children}
      </span>
    </AvatarContext.Provider>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════

// ─── AvatarImage ──────────────────────────────────────────────────────────────

interface IAvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  className?: string;
}

export const AvatarImage = (props: IAvatarImageProps) => {
  const { src, alt = "", className, onLoad, onError, ...rest } = props;
  const { imgStatus, setImgStatus } = useAvatarContext();

  useEffect(() => {
    if (src) setImgStatus("loading");
  }, [src, setImgStatus]);

  if (imgStatus === "error" || !src) return null;

  return (
    <img
      src={src}
      alt={alt}
      onLoad={(e) => {
        setImgStatus("loaded");
        onLoad?.(e);
      }}
      onError={(e) => {
        setImgStatus("error");
        onError?.(e);
      }}
      className={cn("aspect-square h-full w-full object-cover", className)}
      {...rest}
    />
  );
};

// ═══════════════════════════════════════════════════════════════════════════════

// ─── AvatarFallback ───────────────────────────────────────────────────────────

interface IAvatarFallbackProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  className?: string;
  /** Delay before showing the fallback, in ms. Prevents flash when image loads fast. */
  delayMs?: number;
}

export const AvatarFallback = (props: IAvatarFallbackProps) => {
  const { children, className, delayMs = 0, ...rest } = props;
  const { imgStatus } = useAvatarContext();
  const [canShow, setCanShow] = useState(delayMs === 0);

  useEffect(() => {
    if (delayMs === 0) return;
    const id = setTimeout(() => setCanShow(true), delayMs);
    return () => clearTimeout(id);
  }, [delayMs]);

  if (!canShow || imgStatus === "loaded") return null;

  return (
    <span
      className={cn(
        "absolute inset-0 flex items-center justify-center",
        "bg-primary-subtle text-foreground",
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════

// ─── AvatarBadge (status indicator) ──────────────────────────────────────────

interface IAvatarBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Semantic status variant. Defaults to "online". */
  variant?: AvatarBadgeVariantTypes;
  /** Whether the badge has a focus/highlight ring. */
  focused?: boolean;
  className?: string;
}

export const AvatarBadge = (props: IAvatarBadgeProps) => {
  const { variant = "online", focused = false, className, ...rest } = props;
  return (
    <span
      className={cn(
        "absolute bottom-0 right-0 block size-2.5 translate-x-[2px] translate-y-[2px]",
        "rounded-full border-2 border-background",
        BADGE_STATUS_CLASSES[variant],
        focused && "ring-2 ring-ring ring-offset-1",
        className,
      )}
      aria-hidden="true"
      {...rest}
    />
  );
};

// ═══════════════════════════════════════════════════════════════════════════════

// ─── AvatarGroup ──────────────────────────────────────────────────────────────

interface IAvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum number of avatars to display before showing +N overflow. */
  max?: number;
  /** Size to apply to the overflow count indicator avatar. Defaults to "default". */
  size?: AvatarSizeTypes;
  children: React.ReactNode;
  className?: string;
}

export const AvatarGroup = (props: IAvatarGroupProps) => {
  const { max, size = "default", children, className, ...rest } = props;
  const childArray = React.Children.toArray(children);
  const visibleCount = max !== undefined ? Math.min(max, childArray.length) : childArray.length;
  const overflowCount = childArray.length - visibleCount;
  const visibleChildren = childArray.slice(0, visibleCount);

  return (
    <div
      className={cn("inline-flex items-center", className)}
      role="group"
      aria-label={`Avatar group, ${childArray.length} members`}
      {...rest}
    >
      {visibleChildren.map((child, i) => (
        <div
          key={i}
          className={cn(
            "relative rounded-full border-2 border-background",
            i > 0 && GROUP_OVERLAP_CLASSES[size],
          )}
        >
          {child}
        </div>
      ))}

      {overflowCount > 0 && (
        <AvatarGroupCount size={size} count={overflowCount} />
      )}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════

// ─── AvatarGroupCount ─────────────────────────────────────────────────────────

interface IAvatarGroupCountProps extends React.HTMLAttributes<HTMLSpanElement> {
  count: number;
  size?: AvatarSizeTypes;
  className?: string;
}

export const AvatarGroupCount = (props: IAvatarGroupCountProps) => {
  const { count, size = "default", className, ...rest } = props;
  return (
    <div
      className={cn(
        "relative rounded-full border-2 border-background",
        GROUP_OVERLAP_CLASSES[size],
      )}
    >
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-full",
          "bg-muted font-lexend font-medium text-muted-foreground",
          AVATAR_SIZE_CLASSES[size],
          className,
        )}
        aria-label={`+${count} more`}
        {...rest}
      >
        +{count}
      </span>
    </div>
  );
};
