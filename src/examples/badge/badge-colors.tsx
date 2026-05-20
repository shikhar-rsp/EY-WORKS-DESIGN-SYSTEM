import { Badge, BadgeIndicator } from "@/components/figma/Badge";

const AvatarStub = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex size-9 items-center justify-center rounded-full bg-muted text-xs font-medium text-foreground">
    {children}
  </span>
);

export const BadgeColors = () => (
  <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
    <Badge>
      <BadgeIndicator count={3} color="danger" />
      <AvatarStub>D</AvatarStub>
    </Badge>
    <Badge>
      <BadgeIndicator count={3} color="primary" />
      <AvatarStub>P</AvatarStub>
    </Badge>
    <Badge>
      <BadgeIndicator count={3} color="success" />
      <AvatarStub>S</AvatarStub>
    </Badge>
    <Badge>
      <BadgeIndicator count={3} color="warning" />
      <AvatarStub>W</AvatarStub>
    </Badge>
  </div>
);
