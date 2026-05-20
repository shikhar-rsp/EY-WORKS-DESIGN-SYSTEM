import { Toast } from "@/components/figma/Toast";

export const ToastOutline = () => {
  return (
    <Toast
      type="info"
      style="outline"
      message="A new version is available."
      actionLabel="Update now"
    />
  );
};
