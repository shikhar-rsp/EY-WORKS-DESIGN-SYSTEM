"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/figma/Accordion";

export const AccordionDetail = () => {
  return (
    <div className="mt-6 space-y-10">

      {/* ── Preview ──────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 rounded-large border border-border p-6">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the other components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* ── Single (collapsible) ──────────────────────────────────── */}
      <div>
        <h3 id="detail-single" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Single (Collapsible)
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Only one item can be open at a time. With <code>collapsible</code>, clicking the open item again
          collapses it. Without <code>collapsible</code>, the open item stays open.
        </p>
        <div className="mt-4 space-y-4 rounded-large border border-border p-6">
          <div className="space-y-1">
            <span className="font-lexend text-xs text-muted-foreground">type=&quot;single&quot; collapsible</span>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="a">
                <AccordionTrigger>Section A</AccordionTrigger>
                <AccordionContent>Content for section A.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>Section B</AccordionTrigger>
                <AccordionContent>Content for section B.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="space-y-1">
            <span className="font-lexend text-xs text-muted-foreground">type=&quot;single&quot; (not collapsible)</span>
            <Accordion type="single" defaultValue="a" className="w-full">
              <AccordionItem value="a">
                <AccordionTrigger>Section A</AccordionTrigger>
                <AccordionContent>This item cannot be collapsed once opened.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>Section B</AccordionTrigger>
                <AccordionContent>Clicking A again won&apos;t close it.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* ── Multiple ─────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-multiple" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Multiple
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Use <code>type=&quot;multiple&quot;</code> to allow any number of items to be open at the same time.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <Accordion type="multiple" defaultValue={["item-1", "item-3"]} className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Item 1 (open by default)</AccordionTrigger>
              <AccordionContent>
                This item is open by default alongside item 3.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Item 2</AccordionTrigger>
              <AccordionContent>
                Open this item independently — it won&apos;t close the others.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Item 3 (open by default)</AccordionTrigger>
              <AccordionContent>
                Also open by default. Both item 1 and item 3 are open simultaneously.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* ── Disabled ─────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-disabled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Disabled
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Disable the entire accordion with the <code>disabled</code> prop on the root, or disable individual
          items with <code>disabled</code> on <code>AccordionItem</code>.
        </p>
        <div className="mt-4 space-y-4 rounded-large border border-border p-6">
          <div className="space-y-1">
            <span className="font-lexend text-xs text-muted-foreground">Root disabled</span>
            <Accordion type="single" collapsible disabled className="w-full">
              <AccordionItem value="a">
                <AccordionTrigger>All items disabled</AccordionTrigger>
                <AccordionContent>This content is inaccessible.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>Also disabled</AccordionTrigger>
                <AccordionContent>This content is inaccessible.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="space-y-1">
            <span className="font-lexend text-xs text-muted-foreground">Individual item disabled</span>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="a">
                <AccordionTrigger>Enabled item</AccordionTrigger>
                <AccordionContent>This item can be toggled normally.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="b" disabled>
                <AccordionTrigger>Disabled item</AccordionTrigger>
                <AccordionContent>This item cannot be toggled.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

    </div>
  );
};
