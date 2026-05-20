import { Skeleton } from "@/components/figma/Skeleton";

export const SkeletonCard = () => {
  return (
    <div className="flex items-start gap-3 w-64">
      <Skeleton className="size-10 rounded-full shrink-0" />
      <div className="flex flex-col gap-2 flex-1">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6" />
      </div>
    </div>
  );
};
