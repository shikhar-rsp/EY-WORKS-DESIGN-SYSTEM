"use client";

import { useState } from "react";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/figma/Menubar";

export const MenubarDetail = () => {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showPanel, setShowPanel] = useState(false);
  const [position, setPosition] = useState("bottom");

  return (
    <div className="mt-6 space-y-10">
      {/* Preview */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarGroup>
                  <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
                  <MenubarItem>New Window <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Share</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email</MenubarItem>
                    <MenubarItem>Copy Link</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>Print… <MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
                <MenubarItem>Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Cut <MenubarShortcut>⌘X</MenubarShortcut></MenubarItem>
                <MenubarItem>Copy <MenubarShortcut>⌘C</MenubarShortcut></MenubarItem>
                <MenubarItem>Paste <MenubarShortcut>⌘V</MenubarShortcut></MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
                  Show Status Bar
                </MenubarCheckboxItem>
                <MenubarCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
                  Show Panel
                </MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarLabel>Panel Position</MenubarLabel>
                <MenubarRadioGroup value={position} onValueChange={setPosition}>
                  <MenubarRadioItem value="top">Top</MenubarRadioItem>
                  <MenubarRadioItem value="bottom">Bottom</MenubarRadioItem>
                  <MenubarRadioItem value="right">Right</MenubarRadioItem>
                </MenubarRadioGroup>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <p className="mt-2 text-xs text-muted-foreground">
            Status bar: {showStatusBar ? "on" : "off"} · Panel: {showPanel ? "on" : "off"} · Position: {position}
          </p>
        </div>
      </div>

      {/* Destructive variant */}
      <div>
        <h3 id="detail-destructive" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Destructive Variant
        </h3>
        <div className="mt-4">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Actions</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Rename…</MenubarItem>
                <MenubarItem>Duplicate</MenubarItem>
                <MenubarSeparator />
                <MenubarItem variant="destructive">Delete</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>

      {/* Groups and separators */}
      <div>
        <h3 id="detail-groups" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Groups &amp; Separators
        </h3>
        <div className="mt-4">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Format</MenubarTrigger>
              <MenubarContent>
                <MenubarGroup>
                  <MenubarLabel>Text</MenubarLabel>
                  <MenubarItem>Bold <MenubarShortcut>⌘B</MenubarShortcut></MenubarItem>
                  <MenubarItem>Italic <MenubarShortcut>⌘I</MenubarShortcut></MenubarItem>
                </MenubarGroup>
                <MenubarSeparator />
                <MenubarGroup>
                  <MenubarLabel>Paragraph</MenubarLabel>
                  <MenubarItem>Align Left</MenubarItem>
                  <MenubarItem>Align Center</MenubarItem>
                  <MenubarItem>Align Right</MenubarItem>
                </MenubarGroup>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>

      {/* With submenu */}
      <div>
        <h3 id="detail-submenu" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          With Submenu
        </h3>
        <div className="mt-4">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Tools</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Spell Check</MenubarItem>
                <MenubarSub>
                  <MenubarSubTrigger>Language</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>English</MenubarItem>
                    <MenubarItem>Spanish</MenubarItem>
                    <MenubarItem>French</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>Preferences</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </div>
  );
};
