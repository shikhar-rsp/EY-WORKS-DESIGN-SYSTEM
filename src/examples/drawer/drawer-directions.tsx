"use client";

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

export const DrawerDirections = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {(["bottom", "top", "left", "right"] as const).map((direction) => (
        <Drawer key={direction} direction={direction}>
          <DrawerTrigger asChild>
            <Button variant="secondary">
              {direction.charAt(0).toUpperCase() + direction.slice(1)}
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer — {direction}</DrawerTitle>
              <DrawerDescription>Slides in from the {direction}.</DrawerDescription>
            </DrawerHeader>
            <div className="px-300 py-150 text-sm text-secondary-foreground">
              Supports any content including forms, lists, or rich media.
            </div>
            <DrawerFooter>
              <DrawerClose className="inline-flex h-9 w-full items-center justify-center rounded-medium border border-border bg-background text-sm font-medium text-foreground transition-colors hover:bg-muted-hover">
                Close
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
};
