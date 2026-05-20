import { Skeleton } from "@/components/figma/Skeleton";

export const SkeletonDefault = () => {
  return (
    <div className="flex flex-col gap-2 w-48">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
      <Skeleton className="h-4 w-3/5" />
    </div>
  );
};
