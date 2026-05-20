import { Textarea } from "@/components/figma/Textarea";

export const TextareaInvalid = () => {
  return (
    <Textarea
      aria-invalid={true}
      defaultValue="Invalid content here"
      placeholder="Enter text"
    />
  );
};
