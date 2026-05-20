"use client";

import { TopBar } from "@/components/figma/Header";
import { BrandLogo } from "@/components/fragments/BrandLogo";

export const TopBarDefault = () => {
  return (
    <div className="w-full border border-border rounded-large overflow-x-auto">
      <TopBar
        logo={<BrandLogo className="text-primary" />}
        workspaceName="Acme Corp"
        showSearch
        notificationCount={9}
        avatarSrc="https://i.pravatar.cc/40?img=5"
      />
    </div>
  );
};
