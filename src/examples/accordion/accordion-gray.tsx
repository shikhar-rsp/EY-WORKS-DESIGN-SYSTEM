"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/figma/Accordion";

export const AccordionGray = () => {
  return (
    <div className="w-full max-w-md p-6">
      <Accordion type="multiple" defaultValue={["item-1"]} className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I open multiple at once?</AccordionTrigger>
          <AccordionContent>
            Yes. Use <code>type=&quot;multiple&quot;</code> to allow multiple items to be open simultaneously.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Does it support default open items?</AccordionTrigger>
          <AccordionContent>
            Yes. Pass an array to <code>defaultValue</code> to set which items are open by default.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is the state controlled or uncontrolled?</AccordionTrigger>
          <AccordionContent>
            Both. Use <code>defaultValue</code> for uncontrolled, or <code>value</code> + <code>onValueChange</code> for controlled state.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
