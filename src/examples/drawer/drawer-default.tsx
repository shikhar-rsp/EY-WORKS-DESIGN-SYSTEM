import { Button } from "@/components/figma/Button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/figma/Drawer";

export const DrawerDefault = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Move Goal</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
        <div className="px-300 py-200">
          <p className="text-sm text-secondary-foreground">
            Drag the slider to set your daily step goal. The recommended amount is 10,000 steps per day.
          </p>
          <div className="mt-200 flex h-12 items-center justify-center rounded-medium bg-muted text-sm text-muted-foreground">
            10,000 steps
          </div>
        </div>
        <DrawerFooter>
          <Button variant="primary" className="w-full">Submit</Button>
          <DrawerClose className="inline-flex h-9 w-full items-center justify-center rounded-medium border border-border bg-background text-sm font-medium text-foreground transition-colors hover:bg-muted-hover">
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
