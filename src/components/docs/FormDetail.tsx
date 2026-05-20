"use client";

import { useState } from "react";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/figma/Form";
import { Input } from "@/components/figma/Input";
import { Button } from "@/components/figma/Button";
import { Textarea } from "@/components/figma/Textarea";

export const FormDetail = () => {
  const [submitted, setSubmitted] = useState<Record<string, string | number | boolean> | null>(null);

  const handleSubmit = (values: Record<string, string | number | boolean>) => {
    setSubmitted(values);
  };

  return (
    <div className="mt-6 space-y-10">

      {/* ── Preview ──────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 rounded-large border border-border p-6">
          <Form
            defaultValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
            className="max-w-sm"
          >
            <FormField name="email">
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" />
                </FormControl>
                <FormDescription>We&apos;ll never share your email.</FormDescription>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField name="password">
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <Button type="submit" className="w-full mt-2">Sign in</Button>
          </Form>
          {submitted && (
            <p className="mt-3 text-xs text-muted-foreground">
              Submitted: {JSON.stringify(submitted)}
            </p>
          )}
        </div>
      </div>

      {/* ── Field with Error ─────────────────────────────────────── */}
      <div>
        <h3 id="detail-validation" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Inline Validation Errors
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Call <code>setFieldError</code> from <code>onSubmit</code> to show field-level errors.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <ErrorForm />
        </div>
      </div>

      {/* ── With Textarea ────────────────────────────────────────── */}
      <div>
        <h3 id="detail-textarea" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          With Textarea
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          <code>FormControl</code> works with any form element that accepts <code>id</code> and <code>aria-*</code> props.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <Form defaultValues={{ message: "" }} className="max-w-sm">
            <FormField name="message">
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write your message here…" rows={4} />
                </FormControl>
                <FormDescription>Maximum 500 characters.</FormDescription>
              </FormItem>
            </FormField>
            <Button type="submit" className="mt-2">Send</Button>
          </Form>
        </div>
      </div>

    </div>
  );
};

// Internal component for error demo (needs its own form context)
const ErrorForm = () => {
  const [key, setKey] = useState(0);

  return (
    <Form
      key={key}
      defaultValues={{ username: "" }}
      onSubmit={async (_values, ..._rest) => {
        // Simulate a validation error after submit
        // We can't call setFieldError from outside without a ref, so we use a reset trick
        setKey((k) => k + 1);
      }}
      className="max-w-sm"
    >
      <ErrorFormFields onReset={() => setKey((k) => k + 1)} />
    </Form>
  );
};

// Separate inner component to access FormContext after it mounts
const ErrorFormFields = (props: { onReset: () => void }) => {
  return (
    <>
      <FormField name="username">
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input type="text" placeholder="john_doe" aria-invalid />
          </FormControl>
          <FormMessage>
            <span>Username is already taken.</span>
          </FormMessage>
        </FormItem>
      </FormField>
      <div className="flex gap-2 mt-2">
        <Button type="submit">Submit</Button>
        <Button type="button" variant="secondary" onClick={props.onReset}>Reset</Button>
      </div>
    </>
  );
};
