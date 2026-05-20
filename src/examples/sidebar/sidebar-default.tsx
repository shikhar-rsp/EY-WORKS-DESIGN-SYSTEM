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
    links: [{ label: "All Children" }, { label: "Add New Child" }],
  },
  {
    icon: <Mentor className="size-5" />,
    label: "Teachers",
    module: "teachers",
    links: [{ label: "All Teachers" }, { label: "Schedules" }],
  },
  {
    icon: <Comment01 className="size-5" />,
    label: "Messages",
    module: "messages",
    links: [{ label: "Inbox" }, { label: "Sent" }],
  },
  {
    icon: <Calendar02 className="size-5" />,
    label: "Calendar",
    module: "calendar",
    links: [{ label: "Monthly View" }, { label: "Events" }],
  },
  {
    icon: <Folder01 className="size-5" />,
    label: "Reports",
    module: "reports",
    links: [{ label: "Attendance" }, { label: "Progress Reports" }],
  },
];

export const SidebarDefault = () => (
  <div className="h-[500px] overflow-hidden rounded-lg shadow-lg">
    <SidebarBase
      modules={MODULES}
      productIcons={[{ icon: <Global className="size-5" />, label: "Integrations" }]}
      activeModule="dashboard"
      isOpen
    />
  </div>
);
