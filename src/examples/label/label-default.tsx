import { Label } from "@/components/figma/Label";

export const LabelDefault = () => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="email">Email address</Label>
      <input
        id="email"
        type="email"
        placeholder="you@example.com"
        className="h-9 rounded-medium border border-border-input bg-background px-200 text-sm text-foreground placeholder:text-placeholder outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
};
