"use client";

import { Mail01, Lock, Search } from "@/components/fragments/icons/catalog";

import { Input } from "@/components/figma/Input";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/figma/Field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/figma/InputGroup";

export const InputStatesCard = () => (
  <div className="rounded-lg border border-border bg-background p-6 shadow-sm">
    <h3 className="font-lexend text-base font-semibold text-foreground">
      Input States
    </h3>
    <p className="mt-1 font-lexend text-[13px] text-secondary-foreground">
      Validation, icons, and helper messages built in.
    </p>

    <div className="mt-5 space-y-4">
      <Field>
        <FieldLabel>Username</FieldLabel>
        <InputGroup>
          <InputGroupAddon><Search className="size-3.5" /></InputGroupAddon>
          <InputGroupInput placeholder="Enter username" />
        </InputGroup>
      </Field>

      <Field>
        <FieldLabel>Email</FieldLabel>
        <InputGroup>
          <InputGroupAddon><Mail01 className="size-3.5" /></InputGroupAddon>
          <InputGroupInput type="email" placeholder="you@example.com" />
        </InputGroup>
        <FieldDescription className="text-success-foreground">Email is available</FieldDescription>
      </Field>

      <Field invalid>
        <FieldLabel>Password</FieldLabel>
        <InputGroup>
          <InputGroupAddon><Lock className="size-3.5" /></InputGroupAddon>
          <InputGroupInput type="password" placeholder="Too short" aria-invalid />
        </InputGroup>
        <FieldError errors="Must be at least 8 characters" />
      </Field>

      <Field>
        <FieldLabel>Disabled</FieldLabel>
        <Input disabled placeholder="Cannot edit" />
      </Field>
    </div>
  </div>
);
