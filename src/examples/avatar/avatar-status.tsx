import { Avatar, AvatarFallback, AvatarBadge } from "@/components/figma/Avatar";
import type { AvatarBadgeVariantTypes } from "@/components/figma/Avatar";

const STATUSES: AvatarBadgeVariantTypes[] = ["online", "offline", "busy", "away"];

export const AvatarStatus = () => {
  return (
    <div className="flex items-center gap-4">
      {STATUSES.map((status) => (
        <div key={status} className="flex flex-col items-center gap-2">
          <Avatar size="lg">
            <AvatarFallback>MH</AvatarFallback>
            <AvatarBadge variant={status} />
          </Avatar>
          <span className="text-xs text-muted-foreground">{status}</span>
        </div>
      ))}
    </div>
  );
};
