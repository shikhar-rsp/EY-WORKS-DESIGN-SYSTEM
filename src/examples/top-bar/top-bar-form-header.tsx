"use client";

import { useState } from "react";

import { FormHeader } from "@/components/figma/Header";

export const TopBarFormHeader = () => {
  const [isSaving, setIsSaving] = useState(false);

  const handleReset = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 2000);
  };

  return (
    <div className="w-full border border-border rounded-large overflow-x-auto">
      <FormHeader
        title="New Child Profile"
        helperMessage="Fill in the details below"
        isSaving={isSaving}
        onResetFields={handleReset}
        onClose={() => {}}
      />
    </div>
  );
};
