"use client";

import { toast } from "@/components/figma/Toast";

export const ToastPromise = () => {
  const handleClick = () => {
    toast.promise(
      new Promise<string>((resolve) => setTimeout(() => resolve("done"), 2000)),
      {
        loading: "Saving changes…",
        success: "Changes saved!",
        error: "Failed to save.",
      },
    );
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-medium border border-border bg-background px-200 py-100 font-lexend text-sm text-foreground hover:bg-muted transition-colors cursor-pointer"
    >
      toast.promise()
    </button>
  );
};
