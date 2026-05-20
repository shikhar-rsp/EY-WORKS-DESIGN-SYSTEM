import { Toast } from "@/components/figma/Toast";

export const ToastNoClose = () => {
  return (
    <Toast
      type="success"
      style="solid"
      message="Settings saved successfully."
      showClose={false}
    />
  );
};
