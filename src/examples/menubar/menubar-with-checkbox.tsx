"use client";

import { useState } from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarCheckboxItem,
  MenubarSeparator,
  MenubarLabel,
} from "@/components/figma/Menubar";

export const MenubarWithCheckbox = () => {
  const [showRuler, setShowRuler] = useState(true);
  const [showGrid, setShowGrid] = useState(false);
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Interface</MenubarLabel>
          <MenubarCheckboxItem checked={showRuler} onCheckedChange={setShowRuler}>
            Show Ruler
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={showGrid} onCheckedChange={setShowGrid}>
            Show Grid
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarCheckboxItem checked={false} disabled>
            Full Screen (disabled)
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
