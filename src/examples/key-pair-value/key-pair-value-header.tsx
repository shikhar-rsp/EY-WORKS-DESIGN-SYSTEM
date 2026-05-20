import { KeyPairHeader, KeyPairValue } from "@/components/figma/KeyPairValue";
import { ArrowReloadHorizontalRound } from "@/components/fragments/icons/catalog";

export const KeyPairValueHeader = () => (
  <div className="flex flex-col gap-4 p-6 w-full min-w-80 max-w-xl">
    <div className="flex flex-col gap-1">
      <p className="font-lexend text-xs text-muted-foreground mb-2">
        Header as section label
      </p>
      <KeyPairHeader label="Personal Information" />
      <div className="flex flex-col divide-y divide-border mt-2">
        <KeyPairValue label="Full Name" orientation="horizontal">
          <span>Alice Johnson</span>
        </KeyPairValue>
        <KeyPairValue label="Email" orientation="horizontal">
          <span>alice@example.com</span>
        </KeyPairValue>
      </div>
    </div>
    <div className="flex flex-col gap-1">
      <p className="font-lexend text-xs text-muted-foreground mb-2">
        Header with icon
      </p>
      <KeyPairHeader
        label="Synced Data"
        iconBefore={<ArrowReloadHorizontalRound className="size-4" />}
      />
      <div className="flex flex-col divide-y divide-border mt-2">
        <KeyPairValue label="Last Sync" orientation="horizontal">
          <span>2 minutes ago</span>
        </KeyPairValue>
        <KeyPairValue label="Records" orientation="horizontal">
          <span>1,284</span>
        </KeyPairValue>
      </div>
    </div>
  </div>
);
