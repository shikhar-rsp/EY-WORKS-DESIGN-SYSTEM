import { Progress } from "@/components/figma/Progress";

export const ProgressSizes = () => {
  return (
    <div className="flex flex-col gap-300 w-64">
      <div className="flex flex-col gap-100">
        <span className="text-xs text-muted-foreground font-lexend">sm</span>
        <Progress size="sm" value={40} />
      </div>
      <div className="flex flex-col gap-100">
        <span className="text-xs text-muted-foreground font-lexend">md</span>
        <Progress size="md" value={60} />
      </div>
      <div className="flex flex-col gap-100">
        <span className="text-xs text-muted-foreground font-lexend">lg</span>
        <Progress size="lg" value={80} />
      </div>
    </div>
  );
};
