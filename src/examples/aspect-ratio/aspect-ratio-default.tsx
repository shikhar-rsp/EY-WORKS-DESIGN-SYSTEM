import { AspectRatio } from "@/components/figma/AspectRatio";

export const AspectRatioDefault = () => {
  return (
    <div className="w-full max-w-sm">
      <AspectRatio ratio={16 / 9} className="rounded-medium bg-muted">
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          16 / 9
        </div>
      </AspectRatio>
    </div>
  );
};
