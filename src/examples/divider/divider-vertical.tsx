import { VerticalDivider } from "@/components/figma/Divider";

export const DividerVertical = () => {
  return (
    <div className="flex items-end gap-12 px-4 py-6">
      <div className="flex flex-col items-center gap-3">
        <VerticalDivider size="large" />
        <span className="text-xs text-muted-foreground font-lexend">Large</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <VerticalDivider size="medium" />
        <span className="text-xs text-muted-foreground font-lexend">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <VerticalDivider size="small" />
        <span className="text-xs text-muted-foreground font-lexend">Small</span>
      </div>
    </div>
  );
};
