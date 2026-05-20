import { KeyPairValue } from "@/components/figma/KeyPairValue";

export const KeyPairValueReverse = () => (
  <div className="flex flex-col gap-6 p-6 w-full min-w-80 max-w-xl">
    <div>
      <p className="font-lexend text-xs text-muted-foreground mb-3">
        Normal — label subtle, value bold
      </p>
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
      <p className="font-lexend text-xs text-muted-foreground mb-3">
        Reverse — label bold, value subtle
      </p>
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
);
