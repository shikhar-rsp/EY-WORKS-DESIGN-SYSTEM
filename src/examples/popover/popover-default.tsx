import { Button } from "@/components/figma/Button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/figma/Popover";

export const PopoverDefault = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-100 text-sm">
          <div className="flex items-center justify-between gap-100">
            <span className="text-muted-foreground">Width</span>
            <span className="font-medium text-foreground">100%</span>
          </div>
          <div className="flex items-center justify-between gap-100">
            <span className="text-muted-foreground">Height</span>
            <span className="font-medium text-foreground">auto</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
