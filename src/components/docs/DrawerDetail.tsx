"use client";

import { useState } from "react";

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

export const DrawerDetail = () => {
  const [controlled, setControlled] = useState(false);

  return (
    <div className="mt-6 space-y-10">

      {/* ── Preview ───────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 flex flex-wrap gap-3">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="primary">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Move Goal</DrawerTitle>
                <DrawerDescription>Set your daily activity goal.</DrawerDescription>
              </DrawerHeader>
              <div className="px-300 py-200 text-sm text-secondary-foreground">
                Drag the slider to set your daily step goal. The recommended amount is 10,000 steps per day.
              </div>
              <DrawerFooter>
                <Button variant="primary" className="w-full">Submit</Button>
                <DrawerClose className="inline-flex h-9 w-full items-center justify-center rounded-medium border border-border bg-background text-sm font-medium text-foreground transition-colors hover:bg-muted-hover">
                  Cancel
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      {/* ── All Directions ─────────────────── */}
      <div>
        <h3 id="detail-directions" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          All Directions
        </h3>
        <div className="mt-4 flex flex-wrap gap-3">
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
                  Content area. Supports any content including forms, lists, or rich media.
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
      </div>

      {/* ── Controlled ─────────────────────── */}
      <div>
        <h3 id="detail-controlled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Controlled
        </h3>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button variant="secondary" onClick={() => setControlled(true)}>
            Open (controlled)
          </Button>
          <Drawer open={controlled} onOpenChange={setControlled}>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Controlled Drawer</DrawerTitle>
                <DrawerDescription>Open state managed externally via useState.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="secondary" className="w-full">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      {/* ── Non-dismissible ────────────────── */}
      <div>
        <h3 id="detail-dismissible" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Non-dismissible
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Pass <code className="font-mono text-xs">dismissible={"{false}"}</code> to prevent the overlay click from closing the drawer. Only the explicit Close button dismisses it.
        </p>
        <div className="mt-4">
          <Drawer dismissible={false}>
            <DrawerTrigger asChild>
              <Button variant="secondary">Open (non-dismissible)</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Confirm Delete</DrawerTitle>
                <DrawerDescription>This action cannot be undone. Clicking outside will not close this drawer.</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button variant="primary" className="w-full bg-destructive text-destructive-foreground hover:bg-destructive-hover">
                  Delete
                </Button>
                <DrawerClose className="inline-flex h-9 w-full items-center justify-center rounded-medium border border-border bg-background text-sm font-medium text-foreground transition-colors hover:bg-muted-hover">
                  Cancel
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      {/* ── With Action ─────────────────────── */}
      <div>
        <h3 id="detail-action" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          With Action
        </h3>
        <div className="mt-4">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="primary">Subscribe</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Subscribe to Pro</DrawerTitle>
                <DrawerDescription>Get access to all premium features.</DrawerDescription>
              </DrawerHeader>
              <div className="px-300 py-150">
                <ul className="space-y-100 text-sm text-secondary-foreground">
                  <li className="flex items-center gap-100">
                    <span className="text-success">✓</span> Unlimited projects
                  </li>
                  <li className="flex items-center gap-100">
                    <span className="text-success">✓</span> Priority support
                  </li>
                  <li className="flex items-center gap-100">
                    <span className="text-success">✓</span> Advanced analytics
                  </li>
                </ul>
              </div>
              <DrawerFooter>
                <Button variant="primary" className="w-full">Get Pro — $9/month</Button>
                <DrawerClose className="inline-flex h-9 w-full items-center justify-center rounded-medium border border-border bg-background text-sm font-medium text-foreground transition-colors hover:bg-muted-hover">
                  Not now
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

    </div>
  );
};
