import { Label } from "@/components/figma/Label";
import { Checkbox } from "@/components/figma/Checkbox";

export const LabelWithCheckbox = () => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" size="medium" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
};
