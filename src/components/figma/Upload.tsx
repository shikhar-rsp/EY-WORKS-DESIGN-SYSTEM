"use client";

import {
  AlertCircle,
  Cancel01,
  CheckmarkCircle02,
  Delete02,
  Download01,
  File01,
  Upload01,
  UserCircle,
} from "@/components/fragments/icons/catalog";
import { Button } from "@/components/figma/Button";
import { cn } from "@/lib/utils";

// ═══════════════════════════════════════════════════════════════════════════════
// UploadFile
// ═══════════════════════════════════════════════════════════════════════════════

type UploadFileStateTypes = "default" | "hover" | "uploaded" | "error";

interface IUploadFileProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: UploadFileStateTypes;
  headerText?: string;
  subtext?: string;
  showHeader?: boolean;
  showSubtext?: boolean;
  showButton?: boolean;
  fileName?: string;
  errorMessage?: string;
  dropzoneText?: string;
  dropzoneHint?: string;
  onFileSelect?: () => void;
  onDelete?: () => void;
}

export const UploadFile = (props: IUploadFileProps) => {
  const {
    state = "default",
    headerText = "Import Child Profile",
    subtext = "Acceptable file type: CSV. Max Size: 5MB",
    showHeader = true,
    showSubtext = true,
    showButton = true,
    fileName,
    errorMessage,
    dropzoneText = "Drag and Drop your file here",
    dropzoneHint = "(in Docx, PDF, TXT. Max Size: 1MB)",
    onFileSelect,
    onDelete,
    className,
    ...rest
  } = props;

  const isUploaded = state === "uploaded";
  const isError = state === "error";
  const isHover = state === "hover";

  return (
    <div
      className={cn("flex flex-col gap-150 items-start w-full", className)}
      {...rest}
    >
      {/* Header */}
      {showHeader && (
        <div className="flex flex-col gap-2 items-start w-full font-lexend">
          <p className="font-normal text-sm leading-5 text-foreground whitespace-nowrap">
            {headerText}
          </p>
          {showSubtext && (
            <p className="font-normal text-base leading-6 text-muted-foreground">
              {subtext}
            </p>
          )}
        </div>
      )}

      {/* Secondary button */}
      {showButton && !isUploaded && !isError && (
        <Button
          variant="outline"
          onClick={onFileSelect}
          leadingIcon={<Download01 className="size-4" />}
          className="w-full bg-disabled-surface"
        >
          Button
        </Button>
      )}

      {/* Uploaded state */}
      {isUploaded && (
        <div className="flex flex-col gap-150 items-start w-full rounded-medium border border-ring border-dashed bg-accent-purple p-150">
          <div className="flex items-center justify-between w-full">
            <span className="font-normal font-lexend text-sm leading-5 text-foreground">
              {fileName ?? "Upload_File.pdf"}
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="destructive"
                size="sm"
                onClick={onDelete}
                leadingIcon={<Delete02 className="size-4" />}
                className="min-w-[32px] sm:min-w-[40px] px-100 sm:px-200"
              >
                <span className="hidden sm:inline">Delete</span>
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={onFileSelect}
                leadingIcon={<Upload01 className="size-4" />}
                className="min-w-[32px] sm:min-w-[40px] px-100 sm:px-200"
              >
                <span className="hidden sm:inline">Upload</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Error state */}
      {isError && (
        <div className="flex flex-col gap-150 items-start w-full rounded-medium border border-destructive border-dashed bg-destructive-subtle p-150">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-0 items-start">
              <span className="font-normal font-lexend text-sm leading-5 text-foreground">
                {fileName ?? "Upload_File.pdf"}
              </span>
              <div className="flex items-center gap-050">
                <span className="text-destructive">
                  <AlertCircle className="size-3.5" />
                </span>
                <span className="font-normal text-xs leading-4 text-destructive">
                  Error...
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="destructive"
                size="sm"
                onClick={onDelete}
                leadingIcon={<Delete02 className="size-4" />}
                className="min-w-[32px] sm:min-w-[40px] px-100 sm:px-200"
              >
                <span className="hidden sm:inline">Delete</span>
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={onFileSelect}
                leadingIcon={<Upload01 className="size-4" />}
                className="min-w-[32px] sm:min-w-[40px] px-100 sm:px-200"
              >
                <span className="hidden sm:inline">Upload</span>
              </Button>
            </div>
          </div>
          {errorMessage && (
            <p className="text-[10px] leading-[1.4] text-accent-red font-normal break-words">
              {errorMessage}
            </p>
          )}
        </div>
      )}

      {/* Dropzone (default / hover) */}
      {!isUploaded && !isError && (
        <button
          onClick={onFileSelect}
          className={cn(
            "flex flex-col items-center justify-center gap-300 w-full h-[168px] p-[15px]",
            "rounded-medium border border-dashed",
            "transition-colors duration-150 cursor-pointer",
            isHover ? "bg-muted border-ring" : "bg-muted border-ring",
          )}
        >
          <span className="text-secondary-foreground">
            <File01 className="size-8" />
          </span>
          <div className="flex flex-col gap-100 items-start w-full text-center">
            <p className="font-medium font-lexend text-sm leading-5 text-foreground w-full">
              {dropzoneText}
            </p>
            <p className="font-normal text-sm leading-5 text-muted-foreground w-full">
              {dropzoneHint}
            </p>
          </div>
        </button>
      )}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// UploadPhoto
// ═══════════════════════════════════════════════════════════════════════════════

type UploadPhotoStateTypes = "default" | "uploaded" | "noImage";

interface IUploadPhotoProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: UploadPhotoStateTypes;
  title?: string;
  optionalText?: string;
  subtitle?: string;
  showUploadButton?: boolean;
  showReUploadButton?: boolean;
  fileName?: string;
  imageSrc?: string;
  onUpload?: () => void;
  onDelete?: () => void;
}

export const UploadPhoto = (props: IUploadPhotoProps) => {
  const {
    state = "default",
    title = "Childs Photo",
    optionalText = "(Optional)",
    subtitle = "JPG or PNG. Max Size: 5MB",
    showUploadButton = true,
    showReUploadButton = false,
    fileName,
    imageSrc,
    onUpload,
    onDelete,
    className,
    ...rest
  } = props;

  const isUploaded = state === "uploaded";
  const isNoImage = state === "noImage";
  const showActions = isUploaded || isNoImage;

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row gap-250 items-start sm:items-center w-full",
        className,
      )}
      {...rest}
    >
      {/* Left: image area (144×144) */}
      <div className="shrink-0 size-36 relative">
        {isUploaded && imageSrc ? (
          <div className="size-full rounded-medium overflow-hidden">
            {/* Plain img keeps this component framework-agnostic (no next/image) */}
            <img
              src={imageSrc}
              alt={fileName ?? "Uploaded photo"}
              className="size-full object-cover"
            />
          </div>
        ) : isNoImage ? (
          <div className="size-full rounded-large bg-secondary-hover flex items-center justify-center overflow-hidden">
            <UserCircle className="size-[82px] text-placeholder" />
          </div>
        ) : (
          /* default — orange placeholder */
          <div className="size-full rounded-medium bg-accent-orange flex items-center justify-center">
            <span className="text-primary">
              <Upload01 className="size-4" />
            </span>
          </div>
        )}
      </div>

      {/* Right: text + buttons */}
      <div className="flex flex-col gap-200 items-start">
        {/* Header */}
        <div className="flex flex-col gap-075 items-start w-full">
          <div className="flex items-start gap-[6px] w-full">
            <span className="font-bold font-lexend text-[20px] leading-6 text-foreground whitespace-nowrap">
              {title}
            </span>
            <span className="font-normal font-lexend text-base leading-6 text-secondary-foreground">
              {optionalText}
            </span>
          </div>
          <p className="font-normal font-lexend text-base leading-6 text-muted-foreground w-full">
            {subtitle}
          </p>
        </div>

        {/* Actions */}
        {showActions && showReUploadButton && (
          <div className="flex items-center gap-[13px]">
            {fileName && (
              <span className="font-normal font-lexend text-base leading-6 text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap w-[119px]">
                {fileName}
              </span>
            )}
            <Button
              variant="destructive"
              size="sm"
              onClick={onDelete}
              leadingIcon={<Delete02 className="size-4" />}
              className="min-w-[32px] sm:min-w-[40px] px-100 sm:px-200"
            >
              <span className="hidden sm:inline">Delete</span>
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={onUpload}
              leadingIcon={<Upload01 className="size-4" />}
              className="min-w-[32px] sm:min-w-[40px] px-100 sm:px-200"
            >
              <span className="hidden sm:inline">Upload</span>
            </Button>
          </div>
        )}

        {showUploadButton && (
          <Button
            variant="outline"
            size="sm"
            onClick={onUpload}
            leadingIcon={<Upload01 className="size-4" />}
          >
            Upload
          </Button>
        )}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// UploadingStates
// ═══════════════════════════════════════════════════════════════════════════════

type UploadingStateTypes = "uploading" | "success" | "error";

interface IUploadingStatesProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: UploadingStateTypes;
  fileName?: string;
  showDetail?: boolean;
  fileSize?: string;
  progress?: number;
  errorMessage?: string;
  onCancel?: () => void;
  onDelete?: () => void;
}

export const UploadingStates = (props: IUploadingStatesProps) => {
  const {
    state = "uploading",
    fileName = "Upload_File.pdf",
    showDetail = true,
    fileSize = "60 KB of 18MB",
    progress = 60,
    errorMessage = "This document is not supported, please delete and upload another file.",
    onCancel,
    onDelete,
    className,
    ...rest
  } = props;

  const progressFillClass = (() => {
    if (state === "success") return "bg-success";
    if (state === "error") return "bg-destructive";
    return "bg-discovery";
  })();

  const statusContent = (() => {
    if (state === "uploading") {
      return (
        <div className="flex items-center gap-050">
          <span className="font-normal text-xs leading-4 text-muted-foreground">
            Uploading...
          </span>
        </div>
      );
    }
    if (state === "success") {
      return (
        <div className="flex items-center gap-050">
          <span className="text-success">
            <CheckmarkCircle02 className="size-4" />
          </span>
          <span className="font-normal text-xs leading-4 text-success">
            Completed
          </span>
        </div>
      );
    }
    // error
    return (
      <div className="flex items-center gap-050">
        <span className="text-destructive">
          <AlertCircle className="size-4" />
        </span>
        <span className="font-normal text-xs leading-4 text-destructive">
          Error...
        </span>
      </div>
    );
  })();

  const actionIcon =
    state === "success" ? (
      <Button
        variant="ghost"
        size="icon"
        onClick={onDelete}
        aria-label="Delete file"
        className="size-6 text-secondary-foreground hover:text-foreground shrink-0"
      >
        <Delete02 className="size-3.5" />
      </Button>
    ) : (
      <Button
        variant="ghost"
        size="icon"
        onClick={onCancel}
        aria-label="Cancel upload"
        className="size-6 text-secondary-foreground hover:text-foreground shrink-0"
      >
        <Cancel01 className="size-3.5" />
      </Button>
    );

  return (
    <div
      className={cn(
        "flex flex-col gap-[10px] items-start w-full",
        "bg-disabled-surface border border-border rounded-medium p-150",
        className,
      )}
      {...rest}
    >
      <div className="flex flex-col gap-150 items-start w-full">
        {/* Info row */}
        <div className="flex items-start justify-between w-full">
          <div className="flex items-center gap-075">
            {/* PDF icon box */}
            <div className="flex items-center p-100 border border-border rounded-medium bg-disabled-surface shrink-0">
              <span className="text-secondary-foreground">
                <File01 className="size-5" />
              </span>
            </div>

            {/* File info */}
            <div className="flex flex-col gap-0 items-start min-w-0 flex-1">
              <p className="font-normal font-lexend text-sm leading-5 text-foreground truncate">
                {fileName}
              </p>
              {showDetail && (
                <div className="flex items-center gap-100 w-full">
                  <span className="font-normal text-xs leading-4 text-muted-foreground whitespace-nowrap">
                    {fileSize}:
                  </span>
                  {statusContent}
                </div>
              )}
            </div>
          </div>

          {actionIcon}
        </div>

        {/* Progress bar */}
        <div className="bg-neutral-hover w-full h-1 rounded-large overflow-hidden shrink-0">
          <div
            className={cn("h-full rounded-large", progressFillClass)}
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>
      </div>

      {/* Error message */}
      {state === "error" && (
        <p className="text-[10px] leading-[1.4] text-accent-red font-normal break-words">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
