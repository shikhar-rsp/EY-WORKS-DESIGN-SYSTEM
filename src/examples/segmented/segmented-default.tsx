import { Segmented, SegmentedItem } from "@/components/figma/Segmented";

export const SegmentedDefault = () => {
  return (
    <div className="flex items-center justify-center p-6">
      <Segmented defaultValue="day">
        <SegmentedItem value="day">Day</SegmentedItem>
        <SegmentedItem value="week">Week</SegmentedItem>
        <SegmentedItem value="month">Month</SegmentedItem>
      </Segmented>
    </div>
  );
};
