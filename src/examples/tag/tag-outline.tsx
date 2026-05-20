import { Tag } from "@/components/figma/Tag";

export const TagOutline = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 p-6">
      <Tag variant="outline" color="default" label="Default" />
      <Tag variant="outline" color="brand" label="Brand" />
      <Tag variant="outline" color="white" label="White" />
      <Tag variant="outline" color="red" label="Red" />
      <Tag variant="outline" color="blue" label="Blue" />
      <Tag variant="outline" color="yellow" label="Yellow" />
      <Tag variant="outline" color="purple" label="Purple" />
      <Tag variant="outline" color="limeGreen" label="Lime Green" />
    </div>
  );
};
