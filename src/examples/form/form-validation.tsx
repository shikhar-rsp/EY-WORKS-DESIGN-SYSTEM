"use client";

import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/figma/Form";

export const FormValidation = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-80 p-6">
      <Form
        defaultValues={{ username: "" }}
        onSubmit={(values) => {
          const username = String(values.username ?? "").trim();
          if (!username) {
            setSubmitted(true);
            return;
          }
          setSubmitted(false);
          console.log("Submitted:", values);
        }}
      >
        <FormField name="username">
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <input
                type="text"
                placeholder="Enter a username"
                aria-invalid={submitted || undefined}
                className={[
                  "h-9 w-full rounded-medium border bg-background px-200 text-sm font-lexend text-foreground placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-offset-1",
                  submitted
                    ? "border-destructive focus:ring-destructive"
                    : "border-border-input focus:ring-ring",
                ].join(" ")}
              />
            </FormControl>
            {submitted && <FormMessage>This field is required</FormMessage>}
          </FormItem>
        </FormField>
        <button
          type="submit"
          className="inline-flex h-9 items-center justify-center rounded-medium bg-primary px-200 text-sm font-medium font-lexend text-primary-foreground transition-colors hover:bg-primary-hover disabled:pointer-events-none disabled:opacity-50"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};
