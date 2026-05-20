"use client";

import { Lozenge } from "@/components/figma/Lozenge";

export const LozengeSolid = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 p-4">
      <Lozenge variant="solid" color="default" label="Default" />
      <Lozenge variant="solid" color="red" label="Red" />
      <Lozenge variant="solid" color="blue" label="Blue" />
      <Lozenge variant="solid" color="yellow" label="Yellow" />
      <Lozenge variant="solid" color="lime" label="Lime" />
      <Lozenge variant="solid" color="brand" label="Brand" />
      <Lozenge variant="solid" color="teal" label="Teal" />
      <Lozenge variant="solid" color="magenta" label="Magenta" />
      <Lozenge variant="solid" color="green" label="Green" />
      <Lozenge variant="solid" color="grey" label="Grey" />
    </div>
  );
};
