import { Toast } from "@/components/figma/Toast";

export const ToastSubtle = () => {
  return (
    <Toast
      type="warning"
      style="subtle"
      message="Your session will expire in 5 minutes."
      actionLabel="Extend"
    />
  );
};
