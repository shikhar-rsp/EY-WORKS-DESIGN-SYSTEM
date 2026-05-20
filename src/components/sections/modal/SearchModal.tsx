"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";

import { IoSearch } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";

import { SEARCH_ITEMS } from "@/config/navigation";

import { PlusSignCircle } from "@/components/fragments/icons/catalog";

import { cn } from "@/lib/utils";

type ISearchItem = (typeof SEARCH_ITEMS)[number];

interface ISearchModalProps {
  open: boolean;
  onClose: () => void;
}

const SearchModal = (props: ISearchModalProps) => {
  const router = useRouter();

  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState<string>("");

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const filtered = SEARCH_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  const sections = ["Pages", "Foundations", "Components"] as const;
  const groupedResults = sections
    .map((section) => ({
      section,
      items: filtered.filter((item) => item.section === section),
    }))
    .filter((group) => group.items.length > 0);

  const flatResults = groupedResults.flatMap((group) => group.items);

  const handleSelect = useCallback(
    (item: ISearchItem) => {
      props.onClose();
      router.push(item.href);
    },
    [props, router],
  );

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % flatResults.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev <= 0 ? flatResults.length - 1 : prev - 1));
    } else if (e.key === "Enter" && flatResults[activeIndex]) {
      e.preventDefault();
      handleSelect(flatResults[activeIndex]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      props.onClose();
    }
  };

  // Focus input on open, reset state
  useEffect(() => {
    if (props.open) {
      setQuery("");
      setActiveIndex(0);

      // Use rAF to focus after the modal renders
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [props.open]);

  // Lock body scroll when open
  useEffect(() => {
    if (props.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [props.open]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;

    const activeEl = listRef.current.querySelector("[data-active='true']");

    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  // Reset active index when query changes
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  if (!props.open) return null;

  let itemIndex = -1;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center"
      onClick={props.onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg mx-4 bg-background overflow-hidden rounded-xl border border-border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className="flex items-center gap-2.5 border-b border-border px-4 py-3">
          <IoSearch className="size-5 shrink-0 text-secondary-foreground" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documentation..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-placeholder outline-none"
          />
        </div>
        <div ref={listRef} className="max-h-80 overflow-y-auto px-2 py-2">
          {flatResults.length === 0 ? (
            <p className="px-3 py-8 text-center text-sm text-secondary-foreground">
              No results found.
            </p>
          ) : (
            groupedResults.map((group) => (
              <div key={group.section} className="mb-1">
                <p className="px-3 py-2 text-xs font-medium text-secondary-foreground">
                  {group.section}
                </p>
                {group.items.map((item, i) => {
                  itemIndex++;
                  const currentIndex = itemIndex;
                  const isActive = currentIndex === activeIndex;

                  return (
                    <button
                      key={i}
                      data-active={isActive}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted",
                      )}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setActiveIndex(currentIndex)}
                    >
                      {item.section === "Pages" ? (
                        <GoArrowRight
                          className={cn(
                            "size-4 shrink-0",
                            isActive ? "text-primary-foreground" : "text-secondary-foreground",
                          )}
                        />
                      ) : (
                        <span
                          className={cn(
                            "shrink-0",
                            isActive ? "text-primary-foreground" : "text-secondary-foreground",
                          )}
                        >
                          <PlusSignCircle className="size-3" />
                        </span>
                      )}
                      <span className="truncate">{item.name}</span>
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>
        <div className="flex items-center gap-3 border-t border-border px-4 py-2 text-xs text-secondary-foreground">
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px]">
              &crarr;
            </kbd>
            Go to Page
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px]">
              &uarr;
            </kbd>
            <kbd className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px]">
              &darr;
            </kbd>
            Navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-[10px]">
              esc
            </kbd>
            Close
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
