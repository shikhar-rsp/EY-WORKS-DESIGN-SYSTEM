import { Badge, BadgeIndicator } from "@/components/figma/Badge";

const AvatarStub = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex size-9 items-center justify-center rounded-full bg-muted text-xs font-medium text-foreground">
    {children}
  </span>
);

export const BadgeCount = () => (
  <Badge>
    <BadgeIndicator count={5} />
    <AvatarStub>JD</AvatarStub>
  </Badge>
);
