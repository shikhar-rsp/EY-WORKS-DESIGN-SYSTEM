import { TypographyText } from "@/components/figma/Typography";

export const TypographyTextExample = () => {
  return (
    <div className="flex flex-col gap-3 p-4">
      <TypographyText type="default">Default — primary text for body content.</TypographyText>
      <TypographyText type="secondary">Secondary — supporting or metadata text.</TypographyText>
      <TypographyText type="success">Success — confirmation or positive feedback.</TypographyText>
      <TypographyText type="warning">Warning — caution or alert message.</TypographyText>
      <TypographyText type="danger">Danger — error or destructive action notice.</TypographyText>
    </div>
  );
};
