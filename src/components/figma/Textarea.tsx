"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface ITextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, ITextareaProps>(
  (props: ITextareaProps, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
    const { className, ...rest } = props;

    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[80px] w-full",
          "rounded-medium border border-border-input bg-background px-200 py-150",
          "font-lexend text-sm text-foreground",
          "placeholder:text-placeholder",
          "resize-y shadow-xs",
          "transition-colors duration-150",
          "focus-visible:outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
          "disabled:cursor-not-allowed disabled:bg-disabled-surface disabled:text-disabled disabled:border-disabled-border disabled:resize-none",
          "aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20",
          className,
        )}
        {...rest}
      />
    );
  }
);

Textarea.displayName = "Textarea";
