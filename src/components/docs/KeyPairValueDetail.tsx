"use client";

import { KeyPairValue, KeyPairHeader } from "@/components/figma/KeyPairValue";
import { Lozenge } from "@/components/figma/Lozenge";
import { ArrowReloadHorizontalRound } from "@/components/fragments/icons/catalog";

export const KeyPairValueDetail = () => {
  return (
    <div className="font-preview-scope color-preview-scope">
      {/* ── Preview ───────────────────────────────────────────────── */}
      <h3
        id="detail-preview"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Preview
      </h3>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-lg border border-border p-6">
        <div>
          <p className="font-lexend text-xs text-muted-foreground mb-3">Horizontal</p>
          <div className="flex flex-col divide-y divide-border">
            <KeyPairValue label="Full Name" orientation="horizontal">
              <span>Alice Johnson</span>
            </KeyPairValue>
            <KeyPairValue label="Email" orientation="horizontal">
              <span>alice@example.com</span>
            </KeyPairValue>
            <KeyPairValue label="Role" orientation="horizontal">
              <span>Product Designer</span>
            </KeyPairValue>
          </div>
        </div>
        <div>
          <p className="font-lexend text-xs text-muted-foreground mb-3">Vertical</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <KeyPairValue label="Full Name" orientation="vertical">
              <span>Alice Johnson</span>
            </KeyPairValue>
            <KeyPairValue label="Email" orientation="vertical">
              <span>alice@example.com</span>
            </KeyPairValue>
            <KeyPairValue label="Role" orientation="vertical">
              <span>Designer</span>
            </KeyPairValue>
            <KeyPairValue label="Joined" orientation="vertical">
              <span>Jan 2024</span>
            </KeyPairValue>
          </div>
        </div>
      </div>

      {/* ── Orientations ──────────────────────────────────────────── */}
      <h3
        id="detail-orientations"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Orientations
      </h3>
      <div className="mt-3 flex flex-col gap-4 rounded-lg border border-border p-6">
        <div>
          <p className="font-lexend text-xs text-muted-foreground mb-2">orientation="horizontal" (default)</p>
          <KeyPairValue label="License Key" orientation="horizontal">
            <span>PRO-1234-ABCD-5678</span>
          </KeyPairValue>
        </div>
        <div>
          <p className="font-lexend text-xs text-muted-foreground mb-2">orientation="vertical"</p>
          <KeyPairValue label="License Key" orientation="vertical">
            <span>PRO-1234-ABCD-5678</span>
          </KeyPairValue>
        </div>
      </div>

      {/* ── Reverse ───────────────────────────────────────────────── */}
      <h3
        id="detail-reverse"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Reverse Styling
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        When <code className="rounded bg-muted px-1 py-0.5 text-xs">reverse</code> is true, the label becomes bold/dark and the value becomes subtle.
      </p>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-lg border border-border p-6">
        <div>
          <p className="font-lexend text-xs text-muted-foreground mb-2">Normal (reverse=false)</p>
          <div className="flex flex-col divide-y divide-border">
            <KeyPairValue label="Status" orientation="horizontal">
              <span>Active</span>
            </KeyPairValue>
            <KeyPairValue label="Plan" orientation="horizontal">
              <span>Enterprise</span>
            </KeyPairValue>
          </div>
        </div>
        <div>
          <p className="font-lexend text-xs text-muted-foreground mb-2">Reverse (reverse=true)</p>
          <div className="flex flex-col divide-y divide-border">
            <KeyPairValue label="Status" orientation="horizontal" reverse>
              <span>Active</span>
            </KeyPairValue>
            <KeyPairValue label="Plan" orientation="horizontal" reverse>
              <span>Enterprise</span>
            </KeyPairValue>
          </div>
        </div>
      </div>

      {/* ── With Copy ─────────────────────────────────────────────── */}
      <h3
        id="detail-with-copy"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Copy Action
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        The copy icon appears inline with the value and copies <code className="rounded bg-muted px-1 py-0.5 text-xs">copyValue</code> to the clipboard.
      </p>
      <div className="mt-3 flex flex-col divide-y divide-border rounded-lg border border-border p-6">
        <KeyPairValue
          label="API Key"
          orientation="horizontal"
          copy
          copyValue="sk-1234567890abcdef"
        >
          <span className="font-mono text-sm">sk-1234567890abcdef</span>
        </KeyPairValue>
        <KeyPairValue
          label="Webhook URL"
          orientation="horizontal"
          copy
          copyValue="https://api.example.com/hooks/abc123"
        >
          <span className="text-sm truncate">https://api.example.com/hooks/abc123</span>
        </KeyPairValue>
      </div>

      {/* ── Content Types ─────────────────────────────────────────── */}
      <h3
        id="detail-content-types"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        Content Types (children)
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Pass any React node as children — text, badges, Lozenge, avatars, or a small block placeholder.
      </p>
      <div className="mt-3 flex flex-col divide-y divide-border rounded-lg border border-border p-6">
        <KeyPairValue label="Plain text" orientation="horizontal">
          <span>The quick brown fox</span>
        </KeyPairValue>
        <KeyPairValue label="Lozenge" orientation="horizontal">
          <Lozenge variant="solid" color="green" label="Active" />
        </KeyPairValue>
        <KeyPairValue label="Pending review" orientation="horizontal">
          <Lozenge variant="solid" color="yellow" label="Pending" />
        </KeyPairValue>
        <KeyPairValue label="Access level" orientation="horizontal">
          <Lozenge variant="outline" color="teal" label="Read only" />
        </KeyPairValue>
        <KeyPairValue label="Block slot" orientation="horizontal">
          <div className="size-8 rounded border border-border shrink-0" />
        </KeyPairValue>
      </div>

      {/* ── Header ────────────────────────────────────────────────── */}
      <h3
        id="detail-header"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        KeyPairHeader
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Standalone header label used to introduce a section of key-pair rows.
      </p>
      <div className="mt-3 flex flex-col gap-4 rounded-lg border border-border p-6">
        <div>
          <p className="font-lexend text-xs text-muted-foreground mb-2">Label only</p>
          <KeyPairHeader label="Personal Information" />
        </div>
        <div>
          <p className="font-lexend text-xs text-muted-foreground mb-2">With icon before</p>
          <KeyPairHeader
            label="Synced Data"
            iconBefore={<ArrowReloadHorizontalRound className="size-4" />}
          />
        </div>
        <div>
          <p className="font-lexend text-xs text-muted-foreground mb-2">With icon after</p>
          <KeyPairHeader
            label="Settings"
            iconAfter={<ArrowReloadHorizontalRound className="size-4" />}
          />
        </div>
      </div>

      {/* ── States ────────────────────────────────────────────────── */}
      <h3
        id="detail-states"
        className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
      >
        States
      </h3>
      <div className="mt-3 flex flex-col gap-4 rounded-lg border border-border p-6">
        <div>
          <p className="font-lexend text-xs text-muted-foreground mb-2">Default</p>
          <KeyPairValue label="Email" orientation="horizontal">
            <span>alice@example.com</span>
          </KeyPairValue>
        </div>
        <div>
          <p className="font-lexend text-xs text-muted-foreground mb-2">With validation message</p>
          <KeyPairValue
            label="Email"
            orientation="horizontal"
            validationText="This email is already in use"
          >
            <span>existing@example.com</span>
          </KeyPairValue>
        </div>
        <div>
          <p className="font-lexend text-xs text-muted-foreground mb-2">Vertical with validation</p>
          <KeyPairValue
            label="API Key"
            orientation="vertical"
            validationText="API key has expired — please regenerate"
            copy
            copyValue="sk-expired-key"
          >
            <span className="font-mono text-sm text-destructive">sk-expired-key</span>
          </KeyPairValue>
        </div>
      </div>
    </div>
  );
};
