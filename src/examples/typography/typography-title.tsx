import { TypographyTitle } from "@/components/figma/Typography";

export const TypographyTitleExample = () => {
  return (
    <div className="space-y-3 p-4">
      <TypographyTitle level={1}>Heading Level 1</TypographyTitle>
      <TypographyTitle level={2}>Heading Level 2</TypographyTitle>
      <TypographyTitle level={3}>Heading Level 3</TypographyTitle>
      <TypographyTitle level={4}>Heading Level 4</TypographyTitle>
    </div>
  );
};
