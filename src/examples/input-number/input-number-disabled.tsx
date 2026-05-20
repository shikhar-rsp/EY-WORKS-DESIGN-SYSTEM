import {
  InputNumber,
  InputNumberDecrement,
  InputNumberField,
  InputNumberIncrement,
} from "@/components/figma/InputNumber";

export const InputNumberDisabled = () => {
  return (
    <InputNumber defaultValue={5} min={0} max={100} step={1} disabled>
      <InputNumberDecrement />
      <InputNumberField />
      <InputNumberIncrement />
    </InputNumber>
  );
};
