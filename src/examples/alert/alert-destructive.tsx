import { Alert, AlertTitle, AlertDescription } from "@/components/figma/Alert";
import { CancelCircle } from "@/components/fragments/icons/catalog";

export const AlertDestructive = () => {
  return (
    <div className="w-full max-w-lg">
      <Alert variant="destructive">
        <CancelCircle className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </div>
  );
};
