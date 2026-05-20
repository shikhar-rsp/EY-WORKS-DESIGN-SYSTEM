import { Tag } from "@/components/figma/Tag";

export const TagWithIcons = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 p-6">
      <Tag variant="solid" color="brand" label="With Left Icon" leftIcon />
      <Tag variant="solid" color="brand" label="Dismissible" rightIcon />
      <Tag variant="solid" color="brand" label="Both Icons" leftIcon rightIcon />
      <Tag variant="outline" color="default" label="With Left Icon" leftIcon />
      <Tag variant="outline" color="default" label="Dismissible" rightIcon />
      <Tag variant="subtle" color="red" label="Remove" rightIcon />
    </div>
  );
};
