"use client";

import { useState } from "react";

import { Mail01, Lock } from "@/components/fragments/icons/catalog";

import { Button } from "@/components/figma/Button";
import { Switch } from "@/components/figma/Switch";
import { Checkbox } from "@/components/figma/Checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/figma/RadioGroup";
import { Field, FieldLabel } from "@/components/figma/Field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/figma/InputGroup";

export const FormDemoCard = () => {
  const [plan, setPlan] = useState<string>("pro");

  return (
    <div className="rounded-lg border border-border bg-background p-6 shadow-sm">
      <h3 className="font-lexend text-base font-semibold text-foreground">
        Create Account
      </h3>
      <p className="mt-1 font-lexend text-[13px] text-secondary-foreground">
        Enter your details to get started.
      </p>

      <div className="mt-5 space-y-4">
        <Field>
          <FieldLabel>
            Email
            <span className="text-destructive" aria-hidden="true">*</span>
          </FieldLabel>
          <InputGroup>
            <InputGroupAddon><Mail01 className="size-3.5" /></InputGroupAddon>
            <InputGroupInput type="email" placeholder="you@example.com" required />
          </InputGroup>
        </Field>

        <Field>
          <FieldLabel>
            Password
            <span className="text-destructive" aria-hidden="true">*</span>
          </FieldLabel>
          <InputGroup>
            <InputGroupAddon><Lock className="size-3.5" /></InputGroupAddon>
            <InputGroupInput type="password" placeholder="Create a password" required />
          </InputGroup>
        </Field>

        <div className="space-y-3 pt-1">
          <p className="font-lexend text-[14px] font-normal text-muted-foreground">
            Plan
          </p>
          <RadioGroup value={plan} onValueChange={setPlan}>
            {["starter", "pro", "enterprise"].map((v) => (
              <label key={v} className="inline-flex cursor-pointer items-center gap-100 font-lexend text-sm capitalize text-foreground">
                <RadioGroupItem value={v} />
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </label>
            ))}
          </RadioGroup>
        </div>

        <div className="flex items-center justify-between pt-1">
          <Checkbox label="Remember me" defaultChecked />
          <Switch label="Newsletter" defaultChecked size="small" />
        </div>

        <Button variant="primary" className="w-full">
          Create Account
        </Button>
      </div>
    </div>
  );
};
