import { CreditCardInput } from "@/components/figma/CreditCardInput";

export const CreditCardInputError = () => {
  return (
    <CreditCardInput
      defaultValue={{
        number: "4242 4242 4242 4243",
        name: "Jane Appleseed",
        expiry: "01/20",
        cvv: "123",
      }}
      error="Card has expired. Please use a different card."
    />
  );
};
