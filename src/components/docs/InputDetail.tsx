"use client";

import { useState } from "react";

import { Input } from "@/components/figma/Input";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/figma/Field";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/figma/InputGroup";
import { Search02 } from "@/components/fragments/icons/catalog";

export const InputDetail = () => {
  const [controlled, setControlled] = useState("Controlled value");

  return (
    <div className="mt-6 space-y-10">
      {/* Preview */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Preview</h3>
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="w-64">
            <Input placeholder="Enter text…" />
          </div>
          <div className="w-64">
            <Input type="email" placeholder="you@example.com" />
          </div>
          <div className="w-64">
            <Input type="password" placeholder="Password" />
          </div>
        </div>
      </div>

      {/* Input Types */}
      <div>
        <h3 id="detail-types" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Input Types</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-xl">
          {(["text", "email", "password", "number", "search", "url", "tel"] as const).map((type) => (
            <div key={type} className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground font-lexend">{type}</span>
              <Input type={type} placeholder={`${type}…`} />
            </div>
          ))}
          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground font-lexend">file</span>
            <Input type="file" />
          </div>
        </div>
      </div>

      {/* With Field */}
      <div>
        <h3 id="detail-with-field" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Composed with Field</h3>
        <div className="mt-4 flex flex-col gap-200 max-w-xs">
          <Field>
            <FieldLabel>Full name</FieldLabel>
            <Input placeholder="John Doe" />
            <FieldDescription>As it appears on your government ID.</FieldDescription>
          </Field>
          <Field invalid>
            <FieldLabel>Email</FieldLabel>
            <Input type="email" defaultValue="bad-email" aria-invalid />
            <FieldError errors="Enter a valid email address." />
          </Field>
          <Field>
            <FieldLabel>
              Username
              <span className="text-destructive" aria-hidden="true">*</span>
            </FieldLabel>
            <Input placeholder="your_username" required />
          </Field>
        </div>
      </div>

      {/* Controlled */}
      <div>
        <h3 id="detail-controlled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Controlled</h3>
        <div className="mt-4 flex flex-col gap-200 max-w-xs">
          <Field>
            <FieldLabel>Controlled input</FieldLabel>
            <Input
              value={controlled}
              onChange={(e) => setControlled(e.target.value)}
              placeholder="Type something…"
            />
            <FieldDescription>Current value: {controlled || "(empty)"}</FieldDescription>
          </Field>
        </div>
      </div>

      {/* With InputGroup */}
      <div>
        <h3 id="detail-with-input-group" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Composed with InputGroup</h3>
        <div className="mt-4 flex flex-col gap-200 max-w-xs">
          <InputGroup>
            <InputGroupAddon><Search02 className="size-3.5" /></InputGroupAddon>
            <InputGroupInput placeholder="Search…" />
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="yoursite.com" />
            <InputGroupButton>Go</InputGroupButton>
          </InputGroup>
        </div>
      </div>

      {/* States */}
      <div>
        <h3 id="detail-states" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">States</h3>
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="flex flex-col gap-1 w-44">
            <span className="text-xs text-muted-foreground font-lexend">Default</span>
            <Input placeholder="Default" />
          </div>
          <div className="flex flex-col gap-1 w-44">
            <span className="text-xs text-muted-foreground font-lexend">Disabled</span>
            <Input disabled placeholder="Disabled" />
          </div>
          <div className="flex flex-col gap-1 w-44">
            <span className="text-xs text-muted-foreground font-lexend">Read-only</span>
            <Input readOnly defaultValue="Read-only value" />
          </div>
          <div className="flex flex-col gap-1 w-44">
            <span className="text-xs text-muted-foreground font-lexend">Invalid</span>
            <Input aria-invalid defaultValue="bad-value" />
          </div>
        </div>
      </div>
    </div>
  );
};
