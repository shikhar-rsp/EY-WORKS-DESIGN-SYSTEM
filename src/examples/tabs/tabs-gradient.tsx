import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/figma/Tabs";

export const TabsGradient = () => {
  return (
    <Tabs defaultValue="overview">
      <TabsList variant="gradient">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="mt-4 text-sm text-secondary-foreground">Overview content goes here.</TabsContent>
      <TabsContent value="analytics" className="mt-4 text-sm text-secondary-foreground">Analytics data goes here.</TabsContent>
      <TabsContent value="reports" className="mt-4 text-sm text-secondary-foreground">Reports content goes here.</TabsContent>
    </Tabs>
  );
};
