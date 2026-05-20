import { ScrollArea, ScrollBar } from "@/components/figma/ScrollArea";

const WORKS = [
  "Artwork 1", "Artwork 2", "Artwork 3", "Artwork 4",
  "Artwork 5", "Artwork 6", "Artwork 7", "Artwork 8",
];

export const ScrollAreaHorizontal = () => {
  return (
    <ScrollArea className="w-64 whitespace-nowrap rounded-medium border border-border">
      <div className="flex w-max gap-150 p-150">
        {WORKS.map((work) => (
          <div
            key={work}
            className="flex h-16 w-28 shrink-0 items-center justify-center rounded-medium bg-secondary text-xs font-medium text-secondary-foreground"
          >
            {work}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
