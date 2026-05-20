"use client";

import { Lozenge } from "@/components/figma/Lozenge";

export const LozengeLight = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 p-4">
      <Lozenge variant="light" color="default" label="Default" />
      <Lozenge variant="light" color="red" label="Red" />
      <Lozenge variant="light" color="blue" label="Blue" />
      <Lozenge variant="light" color="yellow" label="Yellow" />
      <Lozenge variant="light" color="lime" label="Lime" />
      <Lozenge variant="light" color="brand" label="Brand" />
      <Lozenge variant="light" color="teal" label="Teal" />
      <Lozenge variant="light" color="magenta" label="Magenta" />
      <Lozenge variant="light" color="green" label="Green" />
      <Lozenge variant="light" color="grey" label="Grey" />
    </div>
  );
};
