"use client";

import { useState } from "react";

import {
  CreditCardInput,
  detectCreditCardNetwork,
  isValidCreditCardNumber,
  type ICreditCardValue,
} from "@/components/figma/CreditCardInput";

export const CreditCardInputControlled = () => {
  const [value, setValue] = useState<ICreditCardValue>({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const network = detectCreditCardNetwork(value.number);
  const luhnOk = isValidCreditCardNumber(value.number);

  return (
    <div className="flex flex-col gap-3">
      <CreditCardInput value={value} onChange={setValue} />
      <p className="font-mono text-xs text-muted-foreground">
        Detected network: <span className="text-foreground">{network}</span> · Luhn:{" "}
        <span className="text-foreground">{luhnOk ? "valid" : "—"}</span>
      </p>
    </div>
  );
};
