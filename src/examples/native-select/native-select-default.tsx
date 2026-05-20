import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/figma/NativeSelect";

export const NativeSelectDefault = () => {
  return (
    <div className="w-48">
      <NativeSelect defaultValue="">
        <NativeSelectOption value="">Pick one…</NativeSelectOption>
        <NativeSelectOption value="react">React</NativeSelectOption>
        <NativeSelectOption value="vue">Vue</NativeSelectOption>
        <NativeSelectOption value="svelte">Svelte</NativeSelectOption>
        <NativeSelectOption value="angular">Angular</NativeSelectOption>
      </NativeSelect>
    </div>
  );
};
