import { Input } from "@/components/figma/Input";
import { Field, FieldDescription, FieldLabel } from "@/components/figma/Field";

export const InputDefault = () => {
  return (
    <div className="flex flex-col gap-4 w-64">
      <Input placeholder="Enter text…" />
      <Field>
        <FieldLabel>Email address</FieldLabel>
        <Input type="email" placeholder="you@example.com" />
        <FieldDescription>We&apos;ll never share your email.</FieldDescription>
      </Field>
    </div>
  );
};
