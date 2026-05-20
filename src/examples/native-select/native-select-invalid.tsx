import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/figma/NativeSelect";

export const NativeSelectInvalid = () => {
  return (
    <div className="w-48">
      <NativeSelect defaultValue="" aria-invalid={true}>
        <NativeSelectOption value="">Select a role…</NativeSelectOption>
        <NativeSelectOption value="admin">Admin</NativeSelectOption>
        <NativeSelectOption value="editor">Editor</NativeSelectOption>
        <NativeSelectOption value="viewer">Viewer</NativeSelectOption>
      </NativeSelect>
    </div>
  );
};
