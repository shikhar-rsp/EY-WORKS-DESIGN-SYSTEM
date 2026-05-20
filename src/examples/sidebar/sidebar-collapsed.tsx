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
import { SidebarBase } from "@/components/figma/Sidebar";

const MODULES = [
  {
    icon: <Home04 className="size-5" />,
    label: "Dashboard",
    module: "dashboard",
    links: [{ label: "Overview" }],
  },
  {
    icon: <Baby01 className="size-5" />,
    label: "Children",
    module: "children",
    links: [{ label: "All Children" }],
  },
  {
    icon: <Mentor className="size-5" />,
    label: "Teachers",
    module: "teachers",
    links: [{ label: "All Teachers" }],
  },
  {
    icon: <Comment01 className="size-5" />,
    label: "Messages",
    module: "messages",
    links: [{ label: "Inbox" }],
  },
  {
    icon: <Calendar02 className="size-5" />,
    label: "Calendar",
    module: "calendar",
    links: [{ label: "Monthly View" }],
  },
  {
    icon: <Folder01 className="size-5" />,
    label: "Reports",
    module: "reports",
    links: [{ label: "Attendance" }],
  },
];

export const SidebarCollapsed = () => (
  <div className="h-[500px] overflow-hidden rounded-lg shadow-lg">
    <SidebarBase
      modules={MODULES}
      productIcons={[{ icon: <Global className="size-5" />, label: "Integrations" }]}
      activeModule="dashboard"
      isOpen={false}
    />
  </div>
);
