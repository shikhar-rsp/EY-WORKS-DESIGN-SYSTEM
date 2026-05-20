import { Avatar, AvatarFallback } from "@/components/figma/Avatar";
import type { AvatarSizeTypes } from "@/components/figma/Avatar";

const SIZES: { size: AvatarSizeTypes; label: string }[] = [
  { size: "xs", label: "xs" },
  { size: "sm", label: "sm" },
  { size: "default", label: "default" },
  { size: "lg", label: "lg" },
  { size: "xl", label: "xl" },
];

export const AvatarSizes = () => {
  return (
    <div className="flex items-end gap-4">
      {SIZES.map((s) => (
        <div key={s.size} className="flex flex-col items-center gap-2">
          <Avatar size={s.size}>
            <AvatarFallback>MH</AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">{s.label}</span>
        </div>
      ))}
    </div>
  );
};
