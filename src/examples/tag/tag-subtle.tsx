import { Tag } from "@/components/figma/Tag";

export const TagSubtle = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 p-6">
      <Tag variant="subtle" color="default" label="Default" />
      <Tag variant="subtle" color="brand" label="Brand" />
      <Tag variant="subtle" color="white" label="White" />
      <Tag variant="subtle" color="red" label="Red" />
      <Tag variant="subtle" color="blue" label="Blue" />
      <Tag variant="subtle" color="yellow" label="Yellow" />
      <Tag variant="subtle" color="purple" label="Purple" />
      <Tag variant="subtle" color="limeGreen" label="Lime Green" />
    </div>
  );
};
