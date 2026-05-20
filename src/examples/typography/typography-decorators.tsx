import { TypographyText } from "@/components/figma/Typography";

export const TypographyDecoratorsExample = () => {
  return (
    <div className="flex flex-col gap-3 p-4">
      <TypographyText strong>Strong — bold weight for emphasis.</TypographyText>
      <TypographyText italic>Italic — slanted text for stylistic emphasis.</TypographyText>
      <TypographyText underline>Underline — draws attention with an underline.</TypographyText>
      <TypographyText delete>Delete — strikethrough for removed content.</TypographyText>
      <TypographyText mark>Mark — highlighted text like a marker.</TypographyText>
      <TypographyText code>code_snippet()</TypographyText>
    </div>
  );
};
