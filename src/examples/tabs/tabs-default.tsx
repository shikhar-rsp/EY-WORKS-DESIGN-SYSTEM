import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/figma/Tabs";

export const TabsDefault = () => {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="mt-4 text-sm text-secondary-foreground">
        Manage your account details and preferences.
      </TabsContent>
      <TabsContent value="password" className="mt-4 text-sm text-secondary-foreground">
        Change your password and security settings.
      </TabsContent>
      <TabsContent value="settings" className="mt-4 text-sm text-secondary-foreground">
        Configure application settings.
      </TabsContent>
    </Tabs>
  );
};
