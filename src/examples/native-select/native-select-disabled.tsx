import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/figma/NativeSelect";

export const NativeSelectDisabled = () => {
  return (
    <div className="w-48">
      <NativeSelect defaultValue="react" disabled>
        <NativeSelectOption value="react">React</NativeSelectOption>
        <NativeSelectOption value="vue">Vue</NativeSelectOption>
      </NativeSelect>
    </div>
  );
};
