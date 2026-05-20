import {
  InputNumber,
  InputNumberDecrement,
  InputNumberField,
  InputNumberIncrement,
} from "@/components/figma/InputNumber";

export const InputNumberDefault = () => {
  return (
    <InputNumber defaultValue={1} min={0} max={100} step={1}>
      <InputNumberDecrement />
      <InputNumberField placeholder="0" />
      <InputNumberIncrement />
    </InputNumber>
  );
};
