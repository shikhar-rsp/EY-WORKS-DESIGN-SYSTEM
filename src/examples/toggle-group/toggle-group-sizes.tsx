import { ToggleGroup, ToggleGroupItem } from "@/components/figma/ToggleGroup";

export const ToggleGroupSizes = () => {
  return (
    <div className="flex flex-col gap-4">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size} className="flex items-center gap-4">
          <span className="w-6 font-lexend text-xs text-muted-foreground">{size}</span>
          <ToggleGroup type="single" defaultValue="a" size={size}>
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
            <ToggleGroupItem value="c">C</ToggleGroupItem>
          </ToggleGroup>
        </div>
      ))}
    </div>
  );
};
