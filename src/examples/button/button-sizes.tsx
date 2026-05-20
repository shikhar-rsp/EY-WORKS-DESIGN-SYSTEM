import { Button } from "@/components/figma/Button";

export const ButtonSizes = () => {
  return (
    <div className="flex flex-wrap items-end gap-4">
      <div className="flex flex-col items-center gap-1">
        <Button size="sm">Small</Button>
        <span className="text-xs text-muted-foreground">sm</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Button size="default">Default</Button>
        <span className="text-xs text-muted-foreground">default</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Button size="lg">Large</Button>
        <span className="text-xs text-muted-foreground">lg</span>
      </div>
    </div>
  );
};
