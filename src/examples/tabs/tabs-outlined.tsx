import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/figma/Tabs";

export const TabsOutlined = () => {
  return (
    <Tabs defaultValue="all">
      <TabsList variant="outlined">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="closed">Closed</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="mt-4 text-sm text-secondary-foreground">Showing all items.</TabsContent>
      <TabsContent value="active" className="mt-4 text-sm text-secondary-foreground">Showing active items only.</TabsContent>
      <TabsContent value="closed" className="mt-4 text-sm text-secondary-foreground">Showing closed items only.</TabsContent>
    </Tabs>
  );
};
