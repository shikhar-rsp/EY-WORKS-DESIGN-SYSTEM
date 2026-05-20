import { UploadFile } from "@/components/figma/Upload";

export const UploadFileError = () => (
  <UploadFile
    state="error"
    fileName="Document.pdf"
    errorMessage="This document is not supported, please delete and upload another file."
  />
);
