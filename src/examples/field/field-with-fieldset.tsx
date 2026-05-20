import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/figma/Field";
import { Input } from "@/components/figma/Input";

export const FieldWithFieldset = () => {
  return (
    <FieldSet className="w-72">
      <FieldLegend>Account details</FieldLegend>
      <FieldDescription>Used to sign in and receive notifications.</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel>Full name</FieldLabel>
          <Input placeholder="Jane Doe" />
        </Field>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input type="email" placeholder="jane@example.com" />
        </Field>
      </FieldGroup>
    </FieldSet>
  );
};
