"use client";

import { Lozenge } from "@/components/figma/Lozenge";

export const LozengeOutlineFilled = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 p-4">
      <Lozenge variant="outlineFilled" color="default" label="Default" />
      <Lozenge variant="outlineFilled" color="red" label="Red" />
      <Lozenge variant="outlineFilled" color="blue" label="Blue" />
      <Lozenge variant="outlineFilled" color="yellow" label="Yellow" />
      <Lozenge variant="outlineFilled" color="lime" label="Lime" />
      <Lozenge variant="outlineFilled" color="brand" label="Brand" />
      <Lozenge variant="outlineFilled" color="teal" label="Teal" />
      <Lozenge variant="outlineFilled" color="magenta" label="Magenta" />
      <Lozenge variant="outlineFilled" color="green" label="Green" />
      <Lozenge variant="outlineFilled" color="grey" label="Grey" />
    </div>
  );
};
