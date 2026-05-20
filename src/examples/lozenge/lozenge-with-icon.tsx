"use client";

import { Lozenge } from "@/components/figma/Lozenge";

export const LozengeWithIcon = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 p-4">
      <Lozenge variant="solid" color="brand" label="In Progress" leftIcon />
      <Lozenge variant="outline" color="blue" label="Review" leftIcon />
      <Lozenge variant="light" color="green" label="Approved" leftIcon />
      <Lozenge variant="outlineFilled" color="red" label="Blocked" leftIcon />
    </div>
  );
};
