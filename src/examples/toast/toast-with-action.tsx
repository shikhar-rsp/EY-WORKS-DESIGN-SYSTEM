"use client";

import { toast } from "@/components/figma/Toast";

export const ToastWithAction = () => {
  return (
    <button
      type="button"
      onClick={() =>
        toast("File removed.", {
          action: {
            label: "Undo",
            onClick: () => toast.success("File restored."),
          },
        })
      }
      className="rounded-medium border border-border bg-background px-200 py-100 font-lexend text-sm text-foreground hover:bg-muted transition-colors cursor-pointer"
    >
      Show toast with action
    </button>
  );
};
