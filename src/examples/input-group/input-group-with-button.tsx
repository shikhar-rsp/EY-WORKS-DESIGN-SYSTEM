import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/figma/InputGroup";

export const InputGroupWithButton = () => (
  <InputGroup className="w-64">
    <InputGroupInput placeholder="Paste or type URL…" />
    <InputGroupAddon align="inline-end">
      <InputGroupButton
        variant="default"
        size="sm"
        className="py-0.5 h-fit rounded-sm"
      >
        Copy
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
);
