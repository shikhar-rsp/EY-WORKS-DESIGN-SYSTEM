import { Field, FieldError, FieldLabel } from "@/components/figma/Field";

export const FieldWithError = () => {
  return (
    <Field className="w-64">
      <FieldLabel htmlFor="field-err-email">Email</FieldLabel>
      <input
        id="field-err-email"
        type="email"
        aria-invalid={true}
        defaultValue="not-an-email"
        className="h-9 w-full rounded-medium border border-destructive bg-background px-200 text-sm font-lexend text-foreground focus:outline-none focus:ring-2 focus:ring-destructive focus:ring-offset-1"
      />
      <FieldError errors="Please enter a valid email address." />
    </Field>
  );
};
