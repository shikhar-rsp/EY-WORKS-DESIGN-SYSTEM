import { Segmented, SegmentedItem } from "@/components/figma/Segmented";

export const SegmentedSizes = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground">sm</span>
        <Segmented size="sm" defaultValue="day">
          <SegmentedItem value="day">Day</SegmentedItem>
          <SegmentedItem value="week">Week</SegmentedItem>
          <SegmentedItem value="month">Month</SegmentedItem>
        </Segmented>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground">default</span>
        <Segmented size="default" defaultValue="day">
          <SegmentedItem value="day">Day</SegmentedItem>
          <SegmentedItem value="week">Week</SegmentedItem>
          <SegmentedItem value="month">Month</SegmentedItem>
        </Segmented>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground">lg</span>
        <Segmented size="lg" defaultValue="day">
          <SegmentedItem value="day">Day</SegmentedItem>
          <SegmentedItem value="week">Week</SegmentedItem>
          <SegmentedItem value="month">Month</SegmentedItem>
        </Segmented>
      </div>
    </div>
  );
};
