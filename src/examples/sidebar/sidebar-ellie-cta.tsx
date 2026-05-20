import { EllieCTA } from "@/components/figma/Sidebar";

export const SidebarEllieCta = () => (
  <div className="flex flex-wrap gap-6 p-6">
    <div className="flex flex-col items-center gap-2">
      <EllieCTA isHovered={false} />
      <span className="text-xs text-muted-foreground font-lexend">Default</span>
    </div>
    <div className="flex flex-col items-center gap-2">
      <EllieCTA isHovered />
      <span className="text-xs text-muted-foreground font-lexend">Hovered</span>
    </div>
  </div>
);
