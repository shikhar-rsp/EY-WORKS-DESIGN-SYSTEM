import { Alert, AlertTitle, AlertDescription } from "@/components/figma/Alert";
import { InformationSquare } from "@/components/fragments/icons/catalog";

export const AlertDefault = () => {
  return (
    <div className="w-full max-w-lg">
      <Alert>
        <InformationSquare className="size-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the CLI.
        </AlertDescription>
      </Alert>
    </div>
  );
};
