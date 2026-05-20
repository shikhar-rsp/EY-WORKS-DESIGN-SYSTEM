import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/figma/Card";
import { Button } from "@/components/figma/Button";

export const CardDefault = () => {
  return (
    <Card className="w-72">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-secondary-foreground font-lexend">
          This is the main content area of the card. It can hold any content.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="primary" size="compact">Save</Button>
        <Button variant="secondary" size="compact">Cancel</Button>
      </CardFooter>
    </Card>
  );
};
