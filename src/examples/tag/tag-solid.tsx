import { Tag } from "@/components/figma/Tag";

export const TagSolid = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 p-6">
      <Tag variant="solid" color="default" label="Default" />
      <Tag variant="solid" color="brand" label="Brand" />
      <Tag variant="solid" color="white" label="White" />
      <Tag variant="solid" color="red" label="Red" />
      <Tag variant="solid" color="blue" label="Blue" />
      <Tag variant="solid" color="yellow" label="Yellow" />
      <Tag variant="solid" color="purple" label="Purple" />
      <Tag variant="solid" color="limeGreen" label="Lime Green" />
    </div>
  );
};
