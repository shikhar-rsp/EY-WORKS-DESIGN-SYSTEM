"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/figma/Sheet";

export const SheetDefault = () => {
  return (
    <Sheet>
      <SheetTrigger className="inline-flex h-9 items-center justify-center rounded-medium border border-border bg-background px-200 text-sm font-medium text-foreground transition-colors hover:bg-muted-hover">
        Open Sheet
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>Make changes to your profile here.</SheetDescription>
        </SheetHeader>
        <div className="py-200 space-y-150">
          <div className="flex flex-col gap-075">
            <label className="text-sm font-medium text-foreground">Name</label>
            <input
              className="h-9 rounded-medium border border-border-input bg-background px-150 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              defaultValue="Muhammad Hasan"
            />
          </div>
          <div className="flex flex-col gap-075">
            <label className="text-sm font-medium text-foreground">Username</label>
            <input
              className="h-9 rounded-medium border border-border-input bg-background px-150 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              defaultValue="@mhasan"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose className="inline-flex h-9 items-center justify-center rounded-medium border border-border bg-background px-200 text-sm font-medium text-foreground transition-colors hover:bg-muted-hover">
            Cancel
          </SheetClose>
          <SheetClose className="inline-flex h-9 items-center justify-center rounded-medium bg-primary px-200 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover">
            Save Changes
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
