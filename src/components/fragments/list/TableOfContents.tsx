"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface IHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

const SCROLL_OFFSET = 72;

const TableOfContents = () => {
  const [activeId, setActiveId] = useState<string>("");
  const [headings, setHeadings] = useState<IHeading[]>([]);
  const [showFade, setShowFade] = useState<boolean>(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Collect headings on every route change
  useEffect(() => {
    // Reset immediately so stale headings don't flash on pages without a TOC
    setHeadings([]);
    setActiveId("");

    const rafId = requestAnimationFrame(() => {
      const elements = Array.from(
        document.querySelectorAll<HTMLHeadingElement>(
          "main h2[id], main h3[id]",
        ),
      );

      const parsed: IHeading[] = elements.map((el) => ({
        id: el.id,
        // Read only direct text nodes — ignores text inside child elements (e.g. count badges)
        text:
          Array.from(el.childNodes)
            .filter((n) => n.nodeType === Node.TEXT_NODE)
            .map((n) => n.textContent?.trim())
            .filter(Boolean)
            .join(" ") ||
          el.textContent?.trim() ||
          "",
        level: el.tagName === "H2" ? 2 : 3,
      }));

      setHeadings(parsed);
      if (parsed.length > 0) setActiveId(parsed[0].id);
    });

    return () => cancelAnimationFrame(rafId);
  }, [pathname]);

  // Track scroll position to update active heading
  useEffect(() => {
    if (headings.length === 0) return;

    const onScroll = () => {
      const scrollY = window.scrollY + SCROLL_OFFSET;
      let currentId = headings[0].id;

      for (const { id } of headings) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) currentId = id;
      }

      setActiveId(currentId);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [headings]);

  // Show fade when the sentinel (bottom of list) is out of view
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowFade(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="On this page">
      <p className="sticky top-0 z-10 bg-background pb-3 pt-6 text-xs font-semibold uppercase tracking-wider text-foreground">
        On This Page
      </p>
      <ul className="space-y-1.5 pb-2">
        {headings.map((heading) => (
          <li key={heading.id} className={cn(heading.level === 3 && "pl-4")}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(heading.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={cn(
                "block text-xs leading-relaxed transition-colors",
                activeId === heading.id
                  ? "font-medium text-primary"
                  : "text-secondary-foreground hover:text-foreground",
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Sentinel — observed to detect when the list bottom is visible */}
      <div ref={sentinelRef} className="h-px" />

      {/* Bottom fade — sticky so it sits at the bottom of the aside viewport */}
      <div
        className={cn(
          "sticky bottom-0 h-20 bg-linear-to-t from-background via-background via-50% to-transparent pointer-events-none transition-opacity duration-200",
          showFade ? "opacity-100" : "opacity-0",
        )}
      />
    </nav>
  );
};

export default TableOfContents;
