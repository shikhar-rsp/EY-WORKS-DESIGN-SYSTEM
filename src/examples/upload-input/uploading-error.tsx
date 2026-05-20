import { UploadingStates } from "@/components/figma/Upload";

export const UploadingError = () => (
  <UploadingStates state="error" progress={30} />
);
