import { Badge, BadgeIndicator } from "@/components/figma/Badge";
import { Avatar, AvatarFallback } from "@/components/figma/Avatar";

export const BadgeCount = () => (
  <Badge>
    <BadgeIndicator count={5} />
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  </Badge>
);
