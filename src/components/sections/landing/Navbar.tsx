"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

import { IoSearch } from "react-icons/io5";
import { PiSun, PiMoon } from "react-icons/pi";

import SearchModal from "@/components/sections/modal/SearchModal";
import AnimatedMenuIcon from "@/components/fragments/animations/AnimatedMenuIcon";
import { BrandLogo } from "@/components/fragments/BrandLogo";

import { NAV_LINKS } from "@/config/navigation";
import { HOME_PAGE_ROUTE } from "@/config/page";

import { cn } from "@/lib/utils";

import { useTheme } from "@/components/providers/ThemeProvider";

interface INavbarProps {
  mobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

const Navbar = (props: INavbarProps) => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  // ⌘K global shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <nav className="flex justify-between items-center gap-0.5 h-fit py-3 px-4 sm:px-6">
          <div className="flex items-center gap-0.5 sm:gap-5">
            <button
              className="flex items-center justify-center gap-2 size-8 text-foreground rounded-md sm:hidden"
              onClick={props.onMobileMenuToggle}
              aria-label={props.mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={props.mobileMenuOpen}
            >
              <AnimatedMenuIcon isOpen={props.mobileMenuOpen} />
            </button>
            <span className="text-sm font-medium text-foreground capitalize sm:hidden">
              menu
            </span>
            <Link
              href={HOME_PAGE_ROUTE}
              className="flex items-center gap-1 ml-3 text-foreground sm:ml-0"
            >
              <BrandLogo showText textClassName="hidden sm:inline-block lg:text-base" />
            </Link>
            <div className="hidden items-center gap-4 sm:flex">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className={cn(
                    "rounded-md text-sm font-medium transition-colors",
                    pathname.startsWith(link.href)
                      ? "text-foreground"
                      : "text-secondary-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 size-fit sm:gap-3">
            <button
              onClick={openSearch}
              className="cursor-pointer hidden items-center py-1 px-2 w-fit min-w-52 h-8 gap-2 bg-muted fill-placeholder text-sm text-placeholder border border-border rounded-md sm:flex lg:py-1.5 lg:px-2.5 lg:rounded-lg"
            >
              <IoSearch className="size-4 fill-inherit lg:size-5" />
              <span className="flex-1 text-xs select-none text-nowrap text-left lg:text-sm">
                Search documentation...
              </span>
              <kbd className="ml-4 rounded border border-border px-1 font-mono text-[10px] text-muted-foreground">
                ⌘K
              </kbd>
            </button>
            <button
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded-md text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {theme === "dark" ? (
                <PiSun className="size-4 lg:size-5" />
              ) : (
                <PiMoon className="size-4 lg:size-5" />
              )}
            </button>
          </div>
        </nav>
      </header>
      <SearchModal open={searchOpen} onClose={closeSearch} />
    </>
  );
};

export default Navbar;
