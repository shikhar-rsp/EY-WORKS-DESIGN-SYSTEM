"use client";

/**
 * @registry-deps Lozenge, Tag, Checkbox
 *
 * Imports Lozenge, Tag, and Checkbox from their respective files.
 * The registry generator should list "lozenge", "tag", and "checkbox"
 * as registryDependencies so the CLI installs them alongside ProfileCard.
 */

import { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Lozenge } from "@/components/figma/Lozenge";
import { Tag } from "@/components/figma/Tag";
import { Checkbox } from "@/components/figma/Checkbox";
import {
  Alert02,
  VegetarianFood,
  CameraOff01,
  Door02,
  StudentCard,
  UserLock01,
  BirthdayCake,
  Mentor,
  DollarCircle,
} from "@/components/fragments/icons/catalog";

// ═══════════════════════════════════════════════════════════════════
// ProfileCardStatusBadge — outline badge with a custom icon
// ═══════════════════════════════════════════════════════════════════

interface IProfileCardStatusBadgeProps {
  borderColor?: "destructive" | "accent-green-bold" | "border-hover";
  children: ReactNode;
  className?: string;
}

export const ProfileCardStatusBadge = (props: IProfileCardStatusBadgeProps) => {
  const { borderColor = "border-hover", children, className } = props;

  const borderClass = {
    destructive: "border-destructive",
    "accent-green-bold": "border-accent-green-bold",
    "border-hover": "border-border-hover",
  }[borderColor];

  return (
    <div
      className={cn(
        "flex h-6 w-6 items-center justify-center rounded-small border bg-background",
        borderClass,
        className
      )}
    >
      {children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════
// ProfileCard
// ═══════════════════════════════════════════════════════════════════

type ProfileCardTypeTypes = "child" | "employee";

interface IScheduleDay {
  label: string;
  active: boolean;
}

interface IProfileCardProps extends HTMLAttributes<HTMLDivElement> {
  type?: ProfileCardTypeTypes;
  focused?: boolean;
  name: string;
  coverImage: string;
  room?: string;
  identifier?: string;
  /** Guardian name — shown in Child type only */
  guardian?: string;
  /** Age string (e.g. "5Y 11M") — shown in Child type only */
  age?: string;
  /** Role / qualification — shown in Employee type only */
  level?: string;
  schedule?: IScheduleDay[];
  tags?: string[];
  /** Custom status badges rendered bottom-left of the cover image */
  statusBadges?: ReactNode;
  /** Label for the funding badge bottom-right of cover image (e.g. "3M Funded") */
  fundingLabel?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const ProfileCard = (props: IProfileCardProps) => {
  const {
    type = "child",
    focused = false,
    name,
    coverImage,
    room,
    identifier,
    guardian,
    age,
    level,
    schedule = [],
    tags = [],
    statusBadges,
    fundingLabel,
    checked,
    onCheckedChange,
    className,
    ...rest
  } = props;

  return (
    <div
      className={cn(
        "flex w-[244px] flex-col items-center rounded-card bg-background shadow-md",
        focused && "border-4 border-ring",
        className
      )}
      {...rest}
    >
      {/* ── Cover Image ───────────────────────────────────────── */}
      <div className="relative h-[128px] w-full shrink-0">
        {/* Background photo */}
        <div className="absolute left-1/2 top-1/2 h-[120px] w-[236px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-medium">
          <img
            alt={name}
            className="absolute inset-0 size-full object-cover"
            src={coverImage}
          />
        </div>

        {/* Overlay layer */}
        <div className="absolute left-1/2 top-1/2 flex h-[112px] w-[220px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between">
          {/* Top: select checkbox */}
          <div className="flex h-8 w-full items-start">
            <Checkbox
              size="small"
              checked={checked}
              onCheckedChange={onCheckedChange}
            />
          </div>

          {/* Bottom: status badges + funding */}
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-1">{statusBadges}</div>

            {fundingLabel && (
              <div className="flex h-6 items-center gap-1 rounded-small bg-accent-lime px-1">
                <DollarCircle className="size-3.5 text-success" />
                <span className="font-lexend text-xs font-normal leading-4 text-accent-lime-foreground whitespace-nowrap">
                  {fundingLabel}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Details ───────────────────────────────────────────── */}
      <div className="flex w-full shrink-0 flex-col gap-2 px-2 pb-3">
        {/* Name */}
        <span className="font-lexend text-[15px] font-semibold leading-[22px] text-foreground">
          {name}
        </span>

        {/* Key-value attribute rows */}
        <div className="flex flex-col gap-1">
          {room && (
            <div className="flex items-center gap-1">
              <Door02 className="size-4 shrink-0 text-subtlest" />
              <span className="font-lexend text-xs font-normal leading-4 text-subtlest">
                {room}
              </span>
            </div>
          )}

          {identifier && (
            <div className="flex items-center gap-1">
              <StudentCard className="size-4 shrink-0 text-subtlest" />
              <span className="font-lexend text-xs font-normal leading-4 text-subtlest">
                {identifier}
              </span>
            </div>
          )}

          {type === "child" && (guardian || age) && (
            <div className="flex items-center gap-3">
              {guardian && (
                <div className="flex items-center gap-1">
                  <UserLock01 className="size-4 shrink-0 text-subtlest" />
                  <span className="font-lexend text-xs font-normal leading-4 text-subtlest">
                    {guardian}
                  </span>
                </div>
              )}
              {guardian && age && (
                <span className="font-lexend text-[15px] font-semibold leading-[22px] text-muted-foreground">
                  ·
                </span>
              )}
              {age && (
                <div className="flex items-center gap-1">
                  <BirthdayCake className="size-4 shrink-0 text-subtlest" />
                  <span className="font-lexend text-xs font-normal leading-4 text-subtlest">
                    {age}
                  </span>
                </div>
              )}
            </div>
          )}

          {type === "employee" && level && (
            <div className="flex items-center gap-1">
              <Mentor className="size-4 shrink-0 text-subtlest" />
              <span className="font-lexend text-xs font-normal leading-4 text-subtlest">
                {level}
              </span>
            </div>
          )}
        </div>

        {/* Weekday schedule */}
        {schedule.length > 0 && (
          <div className="flex w-full items-center justify-between">
            {schedule.map((day) => (
              <Lozenge
                key={day.label}
                variant="light"
                color={day.active ? "blue" : "grey"}
                size="lg"
                label={day.label}
              />
            ))}
          </div>
        )}

        {/* Tag group */}
        {tags.length > 0 && (
          <div className="flex flex-1 flex-wrap items-start gap-x-2 gap-y-1">
            {tags.map((tag) => (
              <Tag
                key={tag}
                variant="subtle"
                color="default"
                label={tag}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Re-export common badge icons for convenience
export { Alert02, VegetarianFood, CameraOff01 };
