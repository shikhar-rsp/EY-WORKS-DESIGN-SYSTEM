import { Toast } from "@/components/figma/Toast";

export const ToastSolid = () => {
  return (
    <Toast
      type="success"
      style="solid"
      message="Profile updated successfully."
      actionLabel="View"
    />
  );
};
