"use client";

import Link from "next/link";

import { useState } from "react";

import { ArrowRight01Round } from "@/components/fragments/icons/catalog";

import Navbar from "@/components/sections/landing/Navbar";
import SidebarContent from "@/components/sections/landing/SidebarContent";

import { Button } from "@/components/figma/Button";

import { COMPONENT_PAGE_ROUTE, INTRODUCTION_PAGE_ROUTE } from "@/config/page";

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-background font-lexend">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={() => setMobileMenuOpen((prev) => !prev)}
      />
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-12.25 z-40 flex gap-2 bg-background overflow-y-auto px-4 py-6 md:hidden">
          <SidebarContent
            pathname="/"
            onNavigate={() => setMobileMenuOpen(false)}
          />
        </div>
      )}

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-245 px-6 pt-16 pb-12 text-center sm:pt-24 sm:pb-16">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          Build your design system
          <br className="hidden sm:inline" /> with production-ready components
        </h1>
        <p className="mx-auto mt-5 max-w-170 text-base leading-7 text-secondary-foreground sm:text-lg">
          Components synced from Figma, styled with Tailwind CSS v4, powered by
          design tokens.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href={INTRODUCTION_PAGE_ROUTE}>
            <Button variant="primary" size="default">
              Get Started
            </Button>
          </Link>
          <Link href={COMPONENT_PAGE_ROUTE}>
            <Button
              variant="secondary"
              size="default"
              trailingIcon={<ArrowRight01Round className="size-4" />}
            >
              View Components
            </Button>
          </Link>
        </div>
      </section>

      {/* ── Features strip ────────────────────────────────────── */}
      <section className="border-t border-border bg-muted">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground">Open Code</h3>
            <p className="mt-2 text-sm leading-6 text-secondary-foreground">
              No npm install. Copy the source into your project and own it
              completely. Full transparency.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Figma-Synced
            </h3>
            <p className="mt-2 text-sm leading-6 text-secondary-foreground">
              Design tokens extracted from Figma. One sync command keeps design
              and code in lockstep.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Tailwind v4
            </h3>
            <p className="mt-2 text-sm leading-6 text-secondary-foreground">
              CSS-first engine. Tokens registered via @theme inline — clean
              utilities, no arbitrary values.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Dark Mode</h3>
            <p className="mt-2 text-sm leading-6 text-secondary-foreground">
              Built from day one. Every token has a dark override. No flash on
              reload. Zero third-party libs.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6">
          <p className="text-sm text-muted-foreground">
            EYWorks Design System
          </p>
          <nav className="flex items-center gap-4">
            <Link
              href={INTRODUCTION_PAGE_ROUTE}
              className="text-sm text-secondary-foreground hover:text-foreground transition-colors"
            >
              Docs
            </Link>
            <Link
              href={COMPONENT_PAGE_ROUTE}
              className="text-sm text-secondary-foreground hover:text-foreground transition-colors"
            >
              Components
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
