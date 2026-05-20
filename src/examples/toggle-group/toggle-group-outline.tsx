import { ToggleGroup, ToggleGroupItem } from "@/components/figma/ToggleGroup";

export const ToggleGroupOutline = () => {
  return (
    <ToggleGroup type="single" variant="outline" defaultValue="monthly">
      <ToggleGroupItem value="daily">Daily</ToggleGroupItem>
      <ToggleGroupItem value="weekly">Weekly</ToggleGroupItem>
      <ToggleGroupItem value="monthly">Monthly</ToggleGroupItem>
    </ToggleGroup>
  );
};
