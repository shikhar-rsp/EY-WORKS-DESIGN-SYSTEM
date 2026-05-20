import { TypographyLink } from "@/components/figma/Typography";

export const TypographyLinkExample = () => {
  return (
    <div className="flex flex-col gap-3 p-4">
      <TypographyLink href="#">Visit the documentation →</TypographyLink>
      <TypographyLink href="#">Learn more about design tokens</TypographyLink>
      <TypographyLink href="#" target="_blank" rel="noopener noreferrer">
        Opens in a new tab ↗
      </TypographyLink>
    </div>
  );
};
