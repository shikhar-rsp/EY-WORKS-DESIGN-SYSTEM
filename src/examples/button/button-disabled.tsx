import { Button } from "@/components/figma/Button";

export const ButtonDisabled = () => {
  return (
    <div className="flex items-center gap-3">
      <Button isDisabled>Disabled</Button>
      <Button variant="outline" isDisabled>Disabled</Button>
      <Button variant="destructive" isDisabled>Disabled</Button>
    </div>
  );
};
