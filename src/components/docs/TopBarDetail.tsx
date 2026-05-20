"use client";

import { TopBar, FormHeader } from "@/components/figma/Header";
import { BrandLogo } from "@/components/fragments/BrandLogo";

const LOGO = <BrandLogo className="text-primary" />;

export const TopBarDetail = () => {
  return (
    <div className="mt-6 space-y-10">
      {/* ── Preview ──────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 overflow-x-auto rounded-large border border-border">
          <TopBar
            logo={LOGO}
            workspaceName="Acme Corp"
            showSearch
            notificationCount={9}
            avatarSrc="https://i.pravatar.cc/40?img=5"
          />
        </div>
      </div>

      {/* ── TopBar — Without Search ───────────────────────────────── */}
      <div>
        <h3 id="detail-no-search" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Without Search
        </h3>
        <p className="mt-2 text-sm text-muted-foreground font-lexend">
          Set <code>showSearch=false</code> to hide the search field.
        </p>
        <div className="mt-4 overflow-x-auto rounded-large border border-border">
          <TopBar
            logo={LOGO}
            workspaceName="Acme Corp"
            showSearch={false}
            notificationCount={3}
            avatarSrc="https://i.pravatar.cc/40?img=5"
          />
        </div>
      </div>

      {/* ── TopBar — No Notification ─────────────────────────────── */}
      <div>
        <h3 id="detail-no-notification" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          No Notification Badge
        </h3>
        <p className="mt-2 text-sm text-muted-foreground font-lexend">
          Omit <code>notificationCount</code> or set it to <code>0</code> to hide the badge.
        </p>
        <div className="mt-4 overflow-x-auto rounded-large border border-border">
          <TopBar
            logo={LOGO}
            workspaceName="Acme Corp"
            avatarSrc="https://i.pravatar.cc/40?img=5"
          />
        </div>
      </div>

      {/* ── FormHeader — Preview ──────────────────────────────────── */}
      <div>
        <h3 id="detail-form-header-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Form Header Preview
        </h3>
        <div className="mt-4 overflow-x-auto rounded-large border border-border">
          <FormHeader
            title="New Child Profile"
            helperMessage="Fill in the details below"
            onResetFields={() => {}}
            onClose={() => {}}
          />
        </div>
      </div>

      {/* ── FormHeader — Saving ──────────────────────────────────── */}
      <div>
        <h3 id="detail-form-header-saving" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Form Header — Saving State
        </h3>
        <p className="mt-2 text-sm text-muted-foreground font-lexend">
          Set <code>isSaving=true</code> to show the saving indicator alongside the action buttons.
        </p>
        <div className="mt-4 overflow-x-auto rounded-large border border-border">
          <FormHeader
            title="New Child Profile"
            helperMessage="Saving your changes..."
            isSaving
            onResetFields={() => {}}
            onClose={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
