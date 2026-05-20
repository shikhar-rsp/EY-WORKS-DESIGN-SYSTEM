import { SidebarNavLink } from "@/components/figma/Sidebar";

export const SidebarNavLinkStates = () => (
  <div className="flex flex-col gap-2 w-[240px] p-4">
    <SidebarNavLink label="Default" state="default" />
    <SidebarNavLink label="Hover" state="hover" />
    <SidebarNavLink label="Selected" state="selected" />
    <SidebarNavLink label="Pressed" state="pressed" />
    <SidebarNavLink label="Disabled" state="disabled" />
  </div>
);
