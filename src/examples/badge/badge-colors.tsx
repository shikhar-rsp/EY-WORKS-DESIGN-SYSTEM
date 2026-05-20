import { Badge, BadgeIndicator } from "@/components/figma/Badge";
import { Avatar, AvatarFallback } from "@/components/figma/Avatar";

export const BadgeColors = () => (
  <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
    <Badge>
      <BadgeIndicator count={3} color="danger" />
      <Avatar><AvatarFallback>D</AvatarFallback></Avatar>
    </Badge>
    <Badge>
      <BadgeIndicator count={3} color="primary" />
      <Avatar><AvatarFallback>P</AvatarFallback></Avatar>
    </Badge>
    <Badge>
      <BadgeIndicator count={3} color="success" />
      <Avatar><AvatarFallback>S</AvatarFallback></Avatar>
    </Badge>
    <Badge>
      <BadgeIndicator count={3} color="warning" />
      <Avatar><AvatarFallback>W</AvatarFallback></Avatar>
    </Badge>
  </div>
);
