"use client";

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

export const DialogDetail = () => {
  return (
    <div className="space-y-10">
      <section>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="primary">Default Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose className="inline-flex h-9 items-center justify-center rounded-medium border border-border bg-background px-200 text-sm font-medium text-foreground transition-colors hover:bg-muted-hover">
                  Cancel
                </DialogClose>
                <Button variant="primary">Continue</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">No Close Button</Button>
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>Confirm Action</DialogTitle>
                <DialogDescription>
                  Please confirm you want to proceed with this action.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose className="inline-flex h-9 items-center justify-center rounded-medium border border-border bg-background px-200 text-sm font-medium text-foreground transition-colors hover:bg-muted-hover">
                  No, cancel
                </DialogClose>
                <Button variant="primary">Yes, continue</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <section>
        <h3 id="detail-with-form" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          With Form Content
        </h3>
        <div className="mt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile. Click save when done.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-150 py-100">
                <div className="flex flex-col gap-075">
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <input
                    className="h-9 w-full rounded-medium border border-border-input bg-background px-150 text-sm text-foreground placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-ring"
                    defaultValue="Muhammad Hasan"
                  />
                </div>
                <div className="flex flex-col gap-075">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <input
                    className="h-9 w-full rounded-medium border border-border-input bg-background px-150 text-sm text-foreground placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-ring"
                    defaultValue="hasan@example.com"
                    type="email"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose className="inline-flex h-9 items-center justify-center rounded-medium border border-border bg-background px-200 text-sm font-medium text-foreground transition-colors hover:bg-muted-hover">
                  Cancel
                </DialogClose>
                <Button variant="primary">Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <section>
        <h3 id="detail-destructive" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Destructive Variant
        </h3>
        <div className="mt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="danger">Delete Account</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Account</DialogTitle>
                <DialogDescription>
                  Are you absolutely sure? This action cannot be undone. All your data will be permanently removed.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose className="inline-flex h-9 items-center justify-center rounded-medium border border-border bg-background px-200 text-sm font-medium text-foreground transition-colors hover:bg-muted-hover">
                  Cancel
                </DialogClose>
                <Button variant="danger">Delete Account</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </div>
  );
};
