import { KeyPairValue } from "@/components/figma/KeyPairValue";

export const KeyPairValueVertical = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2 p-6 w-full min-w-80 max-w-xl">
    <KeyPairValue label="Full Name" orientation="vertical">
      <span>Alice Johnson</span>
    </KeyPairValue>
    <KeyPairValue label="Email" orientation="vertical">
      <span>alice@example.com</span>
    </KeyPairValue>
    <KeyPairValue label="Role" orientation="vertical">
      <span>Product Designer</span>
    </KeyPairValue>
    <KeyPairValue label="Department" orientation="vertical">
      <span>Design</span>
    </KeyPairValue>
    <KeyPairValue label="Location" orientation="vertical">
      <span>San Francisco, CA</span>
    </KeyPairValue>
    <KeyPairValue label="Joined" orientation="vertical">
      <span>Jan 2024</span>
    </KeyPairValue>
  </div>
);
