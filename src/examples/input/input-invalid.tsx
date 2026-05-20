import { Input } from "@/components/figma/Input";
import { Field, FieldError, FieldLabel } from "@/components/figma/Field";

export const InputInvalid = () => {
  return (
    <Field invalid className="w-64">
      <FieldLabel>Password</FieldLabel>
      <Input type="password" defaultValue="abc" aria-invalid />
      <FieldError errors="Must be at least 8 characters." />
    </Field>
  );
};
