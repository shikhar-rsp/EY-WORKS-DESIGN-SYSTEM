import { Label } from "@/components/figma/Label";

export const LabelDisabled = () => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="disabled-input">Disabled field</Label>
      <input
        id="disabled-input"
        type="text"
        disabled
        placeholder="Not available"
        className="peer h-9 rounded-medium border border-border-input bg-background px-200 text-sm text-foreground placeholder:text-placeholder outline-none disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
};
