"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { SIDEBAR_SECTIONS } from "@/config/navigation";

import { cn } from "@/lib/utils";

interface ISidebarContentProps {
  pathname: string;
  onNavigate?: () => void;
}

const SidebarContent = (props: ISidebarContentProps) => {
  const [showTopFade, setShowTopFade] = useState<boolean>(false);
  const [showBottomFade, setShowBottomFade] = useState<boolean>(false);
  const topSentinelRef = useRef<HTMLDivElement>(null);
  const bottomSentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const topObserver = new IntersectionObserver(
      ([entry]) => setShowTopFade(!entry.isIntersecting),
      { threshold: 0 },
    );
    const bottomObserver = new IntersectionObserver(
      ([entry]) => setShowBottomFade(!entry.isIntersecting),
      { threshold: 0 },
    );

    if (topSentinelRef.current) topObserver.observe(topSentinelRef.current);
    if (bottomSentinelRef.current)
      bottomObserver.observe(bottomSentinelRef.current);

    return () => {
      topObserver.disconnect();
      bottomObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Top sentinel */}
      <div ref={topSentinelRef} className="h-px" />

      {/* Top fade */}
      <div
        className={cn(
          "sticky top-0 z-10 h-14 bg-linear-to-b from-background via-background via-50% to-transparent pointer-events-none transition-opacity duration-200",
          showTopFade ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Navigation content */}
      <div className="flex flex-col gap-8 w-full h-fit px-0 pb-6 -mt-8">
        {SIDEBAR_SECTIONS.map((section, i) => (
          <div
            key={i}
            className={cn(
              "flex flex-col gap-3",
              section.mobileOnly && "md:hidden",
            )}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground sm:text-[10px] lg:text-xs">
              {section.title}
            </p>
            <ul className="flex flex-col gap-2.5">
              {[...section.items]
                .sort((a, b) =>
                  section.title === "Components"
                    ? a.name.localeCompare(b.name)
                    : 0,
                )
                .map((item, j) => {
                const isActive = props.pathname === item.href;

                return (
                  <li key={j}>
                    <Link
                      href={item.href}
                      onClick={props.onNavigate}
                      className={cn(
                        "block rounded-medium px-2 py-1 size-fit text-base transition-colors sm:text-xs lg:text-sm",
                        isActive
                          ? "font-medium sm:bg-primary-subtle/75 sm:text-primary"
                          : "text-secondary-foreground hover:text-foreground hover:bg-muted",
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom sentinel */}
      <div ref={bottomSentinelRef} className="h-px" />

      {/* Bottom fade */}
      <div
        className={cn(
          "sticky bottom-0 h-20 bg-linear-to-t from-background via-background via-50% to-transparent pointer-events-none transition-opacity duration-200",
          showBottomFade ? "opacity-100" : "opacity-0",
        )}
      />
    </>
  );
};

export default SidebarContent;
