import { AspectRatio } from "@/components/figma/AspectRatio";

const RATIOS = [
  { label: "1 / 1", value: 1 },
  { label: "4 / 3", value: 4 / 3 },
  { label: "16 / 9", value: 16 / 9 },
  { label: "21 / 9", value: 21 / 9 },
];

export const AspectRatioRatios = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      {RATIOS.map((r) => (
        <div key={r.label}>
          <p className="mb-1 text-xs text-muted-foreground">{r.label}</p>
          <AspectRatio ratio={r.value} className="rounded-medium bg-muted">
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              {r.label}
            </div>
          </AspectRatio>
        </div>
      ))}
    </div>
  );
};
