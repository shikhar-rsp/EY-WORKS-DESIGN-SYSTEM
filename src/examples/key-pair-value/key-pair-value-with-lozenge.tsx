import { KeyPairValue } from "@/components/figma/KeyPairValue";
import { Lozenge } from "@/components/figma/Lozenge";

export const KeyPairValueWithLozenge = () => (
  <div className="flex flex-col divide-y divide-border p-6 w-full min-w-80 max-w-xl">
    <KeyPairValue label="Payment Status" orientation="horizontal">
      <Lozenge variant="solid" color="green" label="Paid" />
    </KeyPairValue>
    <KeyPairValue label="Review Status" orientation="horizontal">
      <Lozenge variant="solid" color="yellow" label="Pending" />
    </KeyPairValue>
    <KeyPairValue label="Account Status" orientation="horizontal">
      <Lozenge variant="light" color="blue" label="Active" />
    </KeyPairValue>
    <KeyPairValue label="Access Level" orientation="horizontal">
      <Lozenge variant="outline" color="discoveryBlue" label="Admin" />
    </KeyPairValue>
  </div>
);
