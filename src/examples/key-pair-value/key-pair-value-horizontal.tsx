import { KeyPairValue } from "@/components/figma/KeyPairValue";

export const KeyPairValueHorizontal = () => (
  <div className="flex flex-col divide-y divide-border p-6 w-full min-w-80 max-w-xl">
    <KeyPairValue label="Full Name" orientation="horizontal">
      <span>Alice Johnson</span>
    </KeyPairValue>
    <KeyPairValue label="Email" orientation="horizontal">
      <span>alice@example.com</span>
    </KeyPairValue>
    <KeyPairValue label="Role" orientation="horizontal">
      <span>Product Designer</span>
    </KeyPairValue>
    <KeyPairValue label="Department" orientation="horizontal">
      <span>Design</span>
    </KeyPairValue>
    <KeyPairValue label="Location" orientation="horizontal">
      <span>San Francisco, CA</span>
    </KeyPairValue>
  </div>
);
