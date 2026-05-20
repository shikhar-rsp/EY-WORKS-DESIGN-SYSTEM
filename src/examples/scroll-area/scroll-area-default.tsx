import { ScrollArea } from "@/components/figma/ScrollArea";

const TAGS = [
  "v1.0.0", "v1.1.0", "v1.2.0", "v1.3.0", "v2.0.0",
  "v2.1.0", "v2.2.0", "v3.0.0", "v3.1.0", "v3.2.0",
  "v4.0.0", "v4.1.0", "v4.2.0", "v5.0.0",
];

export const ScrollAreaDefault = () => {
  return (
    <ScrollArea className="h-48 w-48 rounded-medium border border-border">
      <div className="p-150">
        <h4 className="mb-100 text-sm font-semibold text-foreground">Tags</h4>
        {TAGS.map((tag) => (
          <div
            key={tag}
            className="border-b border-border py-075 text-sm text-secondary-foreground last:border-0"
          >
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};
