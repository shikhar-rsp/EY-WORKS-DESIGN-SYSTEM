import { Kbd, KbdGroup } from "@/components/figma/Kbd";

export const KbdGroupExample = () => {
  return (
    <div className="flex flex-col gap-3">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>⌃</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
    </div>
  );
};
