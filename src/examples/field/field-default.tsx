import { Field, FieldDescription, FieldLabel } from "@/components/figma/Field";

export const FieldDefault = () => {
  return (
    <Field className="w-64">
      <FieldLabel htmlFor="field-email">Email</FieldLabel>
      <input
        id="field-email"
        type="email"
        placeholder="you@example.com"
        className="h-9 w-full rounded-medium border border-border-input bg-background px-200 text-sm font-lexend text-foreground placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
      />
      <FieldDescription>We&apos;ll never share your email.</FieldDescription>
    </Field>
  );
};
