import { Divider } from "@/components/figma/Divider";

export const DividerDefault = () => {
  return (
    <div className="w-full px-4">
      <p className="mb-2 text-sm text-foreground font-lexend">Above the divider</p>
      <Divider />
      <p className="mt-2 text-sm text-foreground font-lexend">Below the divider</p>
    </div>
  );
};
