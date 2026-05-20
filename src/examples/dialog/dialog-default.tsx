import { Button } from "@/components/figma/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/figma/Dialog";

export const DialogDefault = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="py-100 text-sm text-secondary-foreground">
          Your changes will be visible to other users immediately.
        </div>
        <DialogFooter>
          <DialogClose className="inline-flex h-9 items-center justify-center rounded-medium border border-border bg-background px-200 text-sm font-medium text-foreground transition-colors hover:bg-muted-hover">
            Cancel
          </DialogClose>
          <Button variant="primary" size="default">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
