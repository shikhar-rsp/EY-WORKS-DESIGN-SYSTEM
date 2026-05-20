import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/figma/InputGroup";
import { Search02 } from "@/components/fragments/icons/catalog";

export const InputGroupWithIcon = () => (
  <InputGroup className="w-64">
    <InputGroupAddon>
      <Search02 className="size-4" />
    </InputGroupAddon>
    <InputGroupInput placeholder="Search…" />
  </InputGroup>
);
