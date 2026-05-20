import { Input } from "@/components/figma/Input";
import { Field, FieldLabel } from "@/components/figma/Field";

export const InputDisabled = () => {
  return (
    <Field className="w-64">
      <FieldLabel>Username</FieldLabel>
      <Input placeholder="Cannot edit" disabled />
    </Field>
  );
};
