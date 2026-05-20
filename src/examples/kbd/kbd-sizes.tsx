import { Kbd } from "@/components/figma/Kbd";

export const KbdSizes = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Kbd size="sm">Esc</Kbd>
        <span className="text-xs text-muted-foreground">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Kbd size="md">Esc</Kbd>
        <span className="text-xs text-muted-foreground">md</span>
      </div>
    </div>
  );
};
