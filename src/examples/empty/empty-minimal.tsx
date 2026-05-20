import { Empty, EmptyDescription, EmptyTitle } from "@/components/figma/Empty";

export const EmptyMinimal = () => {
  return (
    <Empty className="py-10">
      <EmptyTitle>Nothing here yet</EmptyTitle>
      <EmptyDescription>
        Add items to see them listed here.
      </EmptyDescription>
    </Empty>
  );
};
