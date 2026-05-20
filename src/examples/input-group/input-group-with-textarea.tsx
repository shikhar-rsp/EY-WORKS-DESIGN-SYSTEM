import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/figma/InputGroup";

export const InputGroupWithTextarea = () => (
  <InputGroup className="w-64">
    <InputGroupAddon align="block-start">
      <InputGroupText>Message</InputGroupText>
    </InputGroupAddon>
    <InputGroupTextarea rows={3} placeholder="Write your message…" />
  </InputGroup>
);
