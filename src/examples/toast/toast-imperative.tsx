"use client";

import { toast } from "@/components/figma/Toast";

export const ToastImperative = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => toast.success("Profile updated successfully.")}
        className="rounded-medium bg-success px-200 py-100 font-lexend text-sm text-background cursor-pointer"
      >
        toast.success()
      </button>
      <button
        type="button"
        onClick={() => toast.error("Failed to save changes.")}
        className="rounded-medium bg-destructive px-200 py-100 font-lexend text-sm text-destructive-foreground cursor-pointer"
      >
        toast.error()
      </button>
      <button
        type="button"
        onClick={() => toast.info("A new version is available.")}
        className="rounded-medium bg-info px-200 py-100 font-lexend text-sm text-foreground cursor-pointer"
      >
        toast.info()
      </button>
      <button
        type="button"
        onClick={() => toast.warning("Your session expires in 5 minutes.")}
        className="rounded-medium bg-warning px-200 py-100 font-lexend text-sm text-foreground cursor-pointer"
      >
        toast.warning()
      </button>
    </div>
  );
};
