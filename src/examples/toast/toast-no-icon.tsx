import { Toast } from "@/components/figma/Toast";

export const ToastNoIcon = () => {
  return (
    <Toast
      type="danger"
      style="solid"
      message="Two orders have been duplicated."
      actionLabel="Undo"
      showIcon={false}
    />
  );
};
