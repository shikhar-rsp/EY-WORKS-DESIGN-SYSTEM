"use client";

import { useState } from "react";

import { Copy01, Tick02 } from "@/components/fragments/icons/catalog";
import { cn } from "@/lib/utils";

interface ICopyButtonProps {
  code: string;
  className?: string;
}

export const CopyButton = (props: ICopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(props.code);
    } catch {
      // Fallback for older browsers
      const el = document.createElement("textarea");
      el.value = props.code;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy code"}
      style={{ color: "var(--code-lineno-fg)" }}
      className={cn(
        "absolute top-3 right-3 flex items-center justify-center",
        "size-7 rounded-medium transition-all",
        "hover:bg-black/8 dark:hover:bg-white/10 hover:text-[var(--code-fg)]",
        props.className,
      )}
    >
      {copied ? <Tick02 className="size-[15px]" /> : <Copy01 className="size-[15px]" />}
    </button>
  );
};
