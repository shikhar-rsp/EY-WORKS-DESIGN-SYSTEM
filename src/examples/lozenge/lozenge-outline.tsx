"use client";

import { Lozenge } from "@/components/figma/Lozenge";

export const LozengeOutline = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 p-4">
      <Lozenge variant="outline" color="default" label="Default" />
      <Lozenge variant="outline" color="red" label="Red" />
      <Lozenge variant="outline" color="blue" label="Blue" />
      <Lozenge variant="outline" color="yellow" label="Yellow" />
      <Lozenge variant="outline" color="lime" label="Lime" />
      <Lozenge variant="outline" color="brand" label="Brand" />
      <Lozenge variant="outline" color="teal" label="Teal" />
      <Lozenge variant="outline" color="magenta" label="Magenta" />
      <Lozenge variant="outline" color="green" label="Green" />
      <Lozenge variant="outline" color="grey" label="Grey" />
    </div>
  );
};
