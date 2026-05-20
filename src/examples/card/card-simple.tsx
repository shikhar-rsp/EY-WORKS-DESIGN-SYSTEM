import { Card, CardContent, CardHeader, CardTitle } from "@/components/figma/Card";

export const CardSimple = () => {
  return (
    <Card className="w-72">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground font-lexend">
          You have 3 unread notifications.
        </p>
      </CardContent>
    </Card>
  );
};
