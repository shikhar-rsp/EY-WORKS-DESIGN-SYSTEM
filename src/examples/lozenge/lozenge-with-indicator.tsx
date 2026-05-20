"use client";

import { Lozenge } from "@/components/figma/Lozenge";

export const LozengeWithIndicator = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 p-4">
      <Lozenge variant="solid" color="brand" label="Active" indicator />
      <Lozenge variant="solid" color="red" label="Error" indicator />
      <Lozenge variant="solid" color="green" label="Success" indicator />
      <Lozenge variant="light" color="yellow" label="Warning" indicator />
      <Lozenge variant="outline" color="blue" label="Info" indicator />
    </div>
  );
};
