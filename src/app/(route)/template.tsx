"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import Navbar from "@/components/sections/landing/Navbar";
import SidebarContent from "@/components/sections/landing/SidebarContent";
import TableOfContents from "@/components/fragments/list/TableOfContents";

interface IRouteTemplateProps {
  children: React.ReactNode;
}

const RouteTemplate = (props: IRouteTemplateProps) => {
  const pathname = usePathname();

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
            pathname={pathname}
            onNavigate={() => setMobileMenuOpen(false)}
          />
        </div>
      )}
      <div className="flex">
        <aside className="scrollbar-none sticky top-12.25 hidden h-[calc(100vh-49px)] w-55 shrink-0 overflow-y-auto border-r border-border px-4 md:block">
          <SidebarContent pathname={pathname} />
        </aside>
        <main className="min-w-0 flex-1">{props.children}</main>
        <aside className="scrollbar-none sticky top-12.25 hidden h-[calc(100vh-49px)] w-52 shrink-0 overflow-y-auto px-4 xl:block">
          {pathname !== "/components" && <TableOfContents />}
        </aside>
      </div>
    </div>
  );
};

export default RouteTemplate;
