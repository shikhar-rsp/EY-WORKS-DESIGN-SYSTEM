import { Spinner } from "@/components/figma/Spinner";

export const SpinnerWithText = () => {
  return (
    <div className="flex items-center gap-2 text-sm text-secondary-foreground">
      <Spinner />
      <span>Loading…</span>
    </div>
  );
};
