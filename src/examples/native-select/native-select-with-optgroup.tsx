import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from "@/components/figma/NativeSelect";

export const NativeSelectWithOptgroup = () => {
  return (
    <div className="w-56">
      <NativeSelect defaultValue="">
        <NativeSelectOption value="">Choose a fruit…</NativeSelectOption>
        <NativeSelectOptGroup label="Citrus">
          <NativeSelectOption value="orange">Orange</NativeSelectOption>
          <NativeSelectOption value="lemon">Lemon</NativeSelectOption>
          <NativeSelectOption value="grapefruit">Grapefruit</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Tropical">
          <NativeSelectOption value="mango">Mango</NativeSelectOption>
          <NativeSelectOption value="papaya">Papaya</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </div>
  );
};
