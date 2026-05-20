"use client";

import {
  Home04,
  Baby01,
  Comment01,
  Calendar02,
  Folder01,
  Mentor,
  Global,
} from "@/components/fragments/icons/catalog";

import {
  SidebarBase,
  SidebarNavLink,
  SideNavModule,
  EllieCTA,
  Submenu,
} from "@/components/figma/Sidebar";

const DEMO_MODULES = [
  {
    icon: <Home04 className="size-5" />,
    label: "Dashboard",
    module: "dashboard",
    links: [
      { label: "Overview" },
      { label: "Analytics" },
      { label: "Reports" },
    ],
  },
  {
    icon: <Baby01 className="size-5" />,
    label: "Children",
    module: "children",
    links: [
      { label: "All Children" },
      { label: "Add New Child" },
      { label: "Profiles" },
    ],
  },
  {
    icon: <Mentor className="size-5" />,
    label: "Teachers",
    module: "teachers",
    links: [
      { label: "All Teachers" },
      { label: "Schedules" },
    ],
  },
  {
    icon: <Comment01 className="size-5" />,
    label: "Messages",
    module: "messages",
    links: [
      { label: "Inbox" },
      { label: "Sent" },
    ],
  },
  {
    icon: <Calendar02 className="size-5" />,
    label: "Calendar",
    module: "calendar",
    links: [
      { label: "Monthly View" },
      { label: "Weekly View" },
      { label: "Events" },
    ],
  },
  {
    icon: <Folder01 className="size-5" />,
    label: "Reports",
    module: "reports",
    links: [
      { label: "Attendance" },
      { label: "Progress Reports" },
    ],
  },
];

const PRODUCT_ICONS = [
  { icon: <Global className="size-5" />, label: "Integrations" },
];

export const SidebarDetail = () => {
  return (
    <div className="font-preview-scope color-preview-scope">
      {/* ── Preview ──────────────────────────────────────────── */}
      <h3
        id="detail-preview"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Preview
      </h3>
      <div className="mt-3 flex gap-6 overflow-x-auto rounded-lg border border-border p-6 bg-muted">
        {/* Open */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <SidebarBase
              modules={DEMO_MODULES}
              productIcons={PRODUCT_ICONS}
              activeModule="dashboard"
              isOpen
              showEllieCTA
            />
          </div>
          <span className="text-xs text-muted-foreground font-lexend">Open (322px)</span>
        </div>
        {/* Collapsed */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <SidebarBase
              modules={DEMO_MODULES}
              productIcons={PRODUCT_ICONS}
              activeModule="dashboard"
              isOpen={false}
            />
          </div>
          <span className="text-xs text-muted-foreground font-lexend">Collapsed (72px)</span>
        </div>
      </div>

      {/* ── NavLink States ────────────────────────────────────── */}
      <h3
        id="detail-nav-link-states"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        SidebarNavLink States
      </h3>
      <div className="mt-3 flex flex-col gap-2 rounded-lg border border-border p-6 w-[240px]">
        <SidebarNavLink label="Default" state="default" />
        <SidebarNavLink label="Hover" state="hover" />
        <SidebarNavLink label="Selected" state="selected" />
        <SidebarNavLink label="Pressed" state="pressed" />
        <SidebarNavLink label="Disabled" state="disabled" />
      </div>

      {/* ── SideNavModule States ───────────────────────────────── */}
      <h3
        id="detail-nav-module-states"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        SideNavModule States
      </h3>
      <div className="mt-3 flex items-center gap-6 rounded-lg border border-border p-6">
        <div className="flex flex-col items-center gap-2">
          <SideNavModule
            icon={<Home04 className="size-5" />}
            label="Dashboard"
            state="default"
          />
          <span className="text-xs text-muted-foreground font-lexend">Default</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <SideNavModule
            icon={<Baby01 className="size-5" />}
            label="Children"
            state="hover"
          />
          <span className="text-xs text-muted-foreground font-lexend">Hover</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <SideNavModule
            icon={<Comment01 className="size-5" />}
            label="Messages"
            state="active"
          />
          <span className="text-xs text-muted-foreground font-lexend">Active</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <SideNavModule
            icon={<Calendar02 className="size-5" />}
            label="Calendar"
            state="default"
            notification
          />
          <span className="text-xs text-muted-foreground font-lexend">Notification</span>
        </div>
      </div>

      {/* ── EllieCTA ───────────────────────────────────────────── */}
      <h3
        id="detail-ellie-cta"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        EllieCTA
      </h3>
      <div className="mt-3 flex flex-wrap gap-6 rounded-lg border border-border p-6">
        <div className="flex flex-col items-center gap-2">
          <EllieCTA isHovered={false} />
          <span className="text-xs text-muted-foreground font-lexend">Default</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <EllieCTA isHovered />
          <span className="text-xs text-muted-foreground font-lexend">Hovered</span>
        </div>
      </div>

      {/* ── Floating Submenu ──────────────────────────────────── */}
      <h3
        id="detail-submenu-floating"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Floating Submenu
      </h3>
      <div className="mt-3 rounded-lg border border-border p-6 flex">
        <div className="h-[502px]">
          <Submenu
            icon={<Home04 className="size-5" />}
            title="Dashboard"
            floating
            showEllieCTA
          >
            <SidebarNavLink label="Overview" state="selected" />
            <SidebarNavLink label="Analytics" state="default" />
            <SidebarNavLink label="Reports" state="default" />
          </Submenu>
        </div>
      </div>
    </div>
  );
};
