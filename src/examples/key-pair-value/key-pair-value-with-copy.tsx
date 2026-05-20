import { KeyPairValue } from "@/components/figma/KeyPairValue";

export const KeyPairValueWithCopy = () => (
  <div className="flex flex-col divide-y divide-border p-6 w-full min-w-80 max-w-xl">
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
      <span className="truncate text-sm">
        https://api.example.com/hooks/abc123
      </span>
    </KeyPairValue>
    <KeyPairValue
      label="Client ID"
      orientation="horizontal"
      copy
      copyValue="client_9f2e3d4c5b6a7890"
    >
      <span className="font-mono text-sm">client_9f2e3d4c5b6a7890</span>
    </KeyPairValue>
  </div>
);
