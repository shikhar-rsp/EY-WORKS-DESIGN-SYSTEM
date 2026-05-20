"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/figma/Form";

export const FormBasic = () => {
  return (
    <div className="w-80 p-6">
      <Form
        defaultValues={{ email: "" }}
        onSubmit={(values) => console.log("Submitted:", values)}
      >
        <FormField name="email">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <input
                type="email"
                placeholder="you@example.com"
                className="h-9 w-full rounded-medium border border-border-input bg-background px-200 text-sm font-lexend text-foreground placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
              />
            </FormControl>
            <FormDescription>
              We&apos;ll never share your email.
            </FormDescription>
            <FormMessage />
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
