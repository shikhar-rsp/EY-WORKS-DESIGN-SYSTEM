"use client";

import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle } from "@/components/figma/Field";
import { Input } from "@/components/figma/Input";
import { Switch } from "@/components/figma/Switch";

export const FieldDetail = () => {
  return (
    <div className="mt-6 space-y-10">
      {/* Preview */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Preview</h3>
        <div className="mt-4 w-72">
          <Field>
            <FieldLabel>Full name</FieldLabel>
            <Input placeholder="John Doe" />
            <FieldDescription>As it appears on your government ID.</FieldDescription>
          </Field>
        </div>
      </div>

      {/* Orientations */}
      <div>
        <h3 id="detail-orientations" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Orientations</h3>
        <div className="mt-4 flex flex-col gap-200 max-w-sm">
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">vertical (default)</span>
            <Field orientation="vertical">
              <FieldLabel>Email</FieldLabel>
              <Input type="email" placeholder="you@example.com" />
            </Field>
          </div>
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">horizontal</span>
            <Field orientation="horizontal" className="items-center justify-between">
              <div>
                <FieldLabel>Dark mode</FieldLabel>
                <FieldDescription>Switch between light and dark.</FieldDescription>
              </div>
              <Switch aria-label="Toggle dark mode" />
            </Field>
          </div>
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">responsive</span>
            <Field orientation="responsive" className="sm:items-center sm:justify-between">
              <div>
                <FieldLabel>Notifications</FieldLabel>
                <FieldDescription>Receive email notifications.</FieldDescription>
              </div>
              <Switch defaultChecked aria-label="Toggle notifications" />
            </Field>
          </div>
        </div>
      </div>

      {/* States */}
      <div>
        <h3 id="detail-states" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">States</h3>
        <div className="mt-4">
          <FieldGroup className="w-72">
            <Field>
              <FieldLabel>Default</FieldLabel>
              <Input placeholder="Enter text…" />
            </Field>
            <Field>
              <FieldLabel>Disabled</FieldLabel>
              <Input disabled placeholder="Not available" />
            </Field>
            <Field invalid>
              <FieldLabel>Invalid</FieldLabel>
              <Input type="email" defaultValue="bad-email" aria-invalid />
              <FieldError errors="Enter a valid email address." />
            </Field>
          </FieldGroup>
        </div>
      </div>

      {/* FieldSet + FieldLegend */}
      <div>
        <h3 id="detail-fieldset" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">FieldSet &amp; FieldLegend</h3>
        <div className="mt-4 max-w-sm">
          <FieldSet>
            <FieldLegend>Profile</FieldLegend>
            <FieldDescription>This appears on your public profile.</FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel>First name</FieldLabel>
                <Input placeholder="John" />
              </Field>
              <Field>
                <FieldLabel>Last name</FieldLabel>
                <Input placeholder="Doe" />
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
        <div className="mt-4 max-w-sm">
          <FieldSet>
            <FieldLegend variant="label">Notification preferences</FieldLegend>
            <FieldGroup>
              <Field orientation="horizontal" className="items-center justify-between">
                <FieldTitle>Email updates</FieldTitle>
                <Switch aria-label="Toggle email updates" />
              </Field>
              <Field orientation="horizontal" className="items-center justify-between">
                <FieldTitle>SMS alerts</FieldTitle>
                <Switch aria-label="Toggle SMS alerts" defaultChecked />
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
      </div>

      {/* FieldSeparator */}
      <div>
        <h3 id="detail-separator" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">FieldSeparator</h3>
        <div className="mt-4 max-w-sm flex flex-col gap-200">
          <FieldSeparator />
          <FieldSeparator>or continue with</FieldSeparator>
        </div>
      </div>

      {/* FieldContent + FieldTitle */}
      <div>
        <h3 id="detail-field-content" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">FieldContent &amp; FieldTitle</h3>
        <div className="mt-4 max-w-sm">
          <Field orientation="horizontal" className="items-start justify-between">
            <FieldContent>
              <FieldTitle>Email notifications</FieldTitle>
              <FieldDescription>Get notified when someone mentions you.</FieldDescription>
            </FieldContent>
            <Switch aria-label="Toggle notifications" />
          </Field>
        </div>
      </div>

      {/* FieldGroup */}
      <div>
        <h3 id="detail-field-group" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">FieldGroup</h3>
        <div className="mt-4 max-w-sm">
          <FieldGroup>
            <Field>
              <FieldLabel>Username</FieldLabel>
              <Input placeholder="your_username" />
            </Field>
            <FieldSeparator>and</FieldSeparator>
            <Field>
              <FieldLabel>Display name</FieldLabel>
              <Input placeholder="Your Name" />
              <FieldDescription>Shown on your public profile.</FieldDescription>
            </Field>
          </FieldGroup>
        </div>
      </div>
    </div>
  );
};
