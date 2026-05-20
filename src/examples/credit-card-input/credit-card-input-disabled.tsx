import { CreditCardInput } from "@/components/figma/CreditCardInput";

export const CreditCardInputDisabled = () => {
  return (
    <CreditCardInput
      disabled
      defaultValue={{
        number: "5555 5555 5555 4444",
        name: "Jane Appleseed",
        expiry: "12/29",
        cvv: "321",
      }}
    />
  );
};
