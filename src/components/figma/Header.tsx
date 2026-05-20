"use client";

import { type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/figma/Button";
import {
  ArrowDown01Round,
  Setting01,
  Notification02,
  Loading03,
  CancelCircle,
  Search,
} from "@/components/fragments/icons/catalog";

// ═══ TopBar ═══

interface ITopBarProps extends HTMLAttributes<HTMLElement> {
  logo?: ReactNode;
  workspaceName?: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
  notificationCount?: number;
  avatarSrc?: string;
  onWorkspaceClick?: () => void;
  onSearchClick?: () => void;
  onSettingsClick?: () => void;
  onNotificationClick?: () => void;
  onAvatarClick?: () => void;
  className?: string;
}

export const TopBar = (props: ITopBarProps) => {
  const {
    logo,
    workspaceName = "Workspace",
    showSearch = true,
    searchPlaceholder = "Search anything",
    notificationCount,
    avatarSrc,
    onWorkspaceClick,
    onSearchClick,
    onSettingsClick,
    onNotificationClick,
    onAvatarClick,
    className,
    ...rest
  } = props;

  return (
    <header
      className={cn(
        "flex h-[62px] max-h-[62px] w-full min-w-[600px] items-center justify-between px-200",
        className
      )}
      {...rest}
    >
      {/* Left — Logo + Workspace + Search */}
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <div className="flex shrink-0 items-center gap-150">
          {logo && <div className="shrink-0">{logo}</div>}
          <button
            type="button"
            onClick={onWorkspaceClick}
            className={cn(
              "flex h-10 items-center gap-1 rounded-medium border border-border bg-background",
              "px-150 py-100 cursor-pointer"
            )}
          >
            <span className="font-lexend text-sm leading-5 text-foreground whitespace-nowrap">
              {workspaceName}
            </span>
            <ArrowDown01Round className="size-5 text-foreground" />
          </button>
        </div>

        {showSearch && (
          <button
            type="button"
            onClick={onSearchClick}
            className={cn(
              "flex h-[38px] min-w-0 flex-1 items-center justify-between rounded-medium border border-border bg-background",
              "px-150 py-100 cursor-pointer"
            )}
          >
            <span className="font-lexend text-sm leading-5 text-placeholder truncate">
              {searchPlaceholder}
            </span>
            <Search className="ml-2 size-5 shrink-0 text-muted-foreground" />
          </button>
        )}
      </div>

      {/* Right — Actions */}
      <div className="ml-4 flex shrink-0 items-center gap-5">
        <button
          type="button"
          onClick={onSettingsClick}
          className="flex items-center justify-center rounded-medium px-050 py-100 cursor-pointer"
          aria-label="Settings"
        >
          <Setting01 className="size-6 text-muted-foreground" />
        </button>

        <button
          type="button"
          onClick={onNotificationClick}
          className="relative flex items-center justify-center rounded-medium px-050 py-100 cursor-pointer"
          aria-label="Notifications"
        >
          <Notification02 className="size-6 text-muted-foreground" />
          {notificationCount !== undefined && notificationCount > 0 && (
            <span
              className={cn(
                "absolute -right-[5px] top-0 flex size-4 items-center justify-center",
                "rounded-full bg-destructive-bold",
                "font-lexend text-xs leading-4 text-primary-foreground"
              )}
            >
              {notificationCount > 9 ? "9+" : notificationCount}
            </span>
          )}
        </button>

        {avatarSrc && (
          <button
            type="button"
            onClick={onAvatarClick}
            className="size-10 shrink-0 overflow-hidden rounded-full border border-border cursor-pointer"
            aria-label="User menu"
          >
            <img
              src={avatarSrc}
              alt="User avatar"
              className="size-full object-cover"
            />
          </button>
        )}
      </div>
    </header>
  );
};

// ═══ FormHeader ═══

interface IFormHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  helperMessage?: string;
  isSaving?: boolean;
  savingText?: string;
  actions?: ReactNode;
  onResetFields?: () => void;
  onClose?: () => void;
  className?: string;
}

export const FormHeader = (props: IFormHeaderProps) => {
  const {
    title,
    helperMessage,
    isSaving = false,
    savingText = "Saving...",
    actions,
    onResetFields,
    onClose,
    className,
    ...rest
  } = props;

  return (
    <div
      className={cn(
        "flex w-full min-w-[480px] items-center justify-between overflow-hidden rounded-large bg-background",
        "px-150 py-100",
        className
      )}
      {...rest}
    >
      {/* Left — Title + Helper */}
      <div className="flex flex-col gap-050 items-start justify-center py-100">
        <p className="font-lexend text-sm font-medium leading-5 text-foreground">
          {title}
        </p>
        {helperMessage && (
          <p className="font-lexend text-sm leading-5 text-subtlest truncate">
            {helperMessage}
          </p>
        )}
      </div>

      {/* Right — Actions */}
      {actions || (
        <div className="flex items-end gap-200">
          {isSaving && (
            <div className="flex items-center gap-100 min-w-[40px] rounded-medium px-200 py-100">
              <span className="font-lexend text-sm leading-5 text-muted-foreground">
                {savingText}
              </span>
              <Loading03 className="size-4 animate-spin text-muted-foreground" />
            </div>
          )}
          {onResetFields && (
            <Button
              type="button"
              variant="outline"
              onClick={onResetFields}
            >
              Reset fields
            </Button>
          )}
          {onClose && (
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              trailingIcon={<CancelCircle className="size-4" />}
            >
              Close
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
