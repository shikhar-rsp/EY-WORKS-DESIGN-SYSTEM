"use client";

import { useState } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from "@/components/figma/InputOTP";

export const InputOTPDetail = () => {
  const [value6, setValue6] = useState("");
  const [value4, setValue4] = useState("");
  const [controlled, setControlled] = useState("123456");

  return (
    <div className="mt-6 space-y-10">
      {/* Preview */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview — 6-digit with separator
        </h3>
        <div className="mt-4 flex flex-col items-start gap-3">
          <InputOTP maxLength={6} value={value6} onChange={setValue6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-xs text-muted-foreground">Value: <span className="font-mono text-foreground">{value6 || "—"}</span></p>
        </div>
      </div>

      {/* Pattern: alphanumeric */}
      <div>
        <h3 id="detail-pattern-alphanumeric" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Pattern — Alphanumeric
        </h3>
        <div className="mt-4 flex flex-col items-start gap-3">
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-xs text-muted-foreground">Accepts letters and numbers — rejects symbols.</p>
        </div>
      </div>

      {/* 4-digit PIN */}
      <div>
        <h3 id="detail-4digit" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          4-Digit PIN
        </h3>
        <div className="mt-4 flex flex-col items-start gap-3">
          <InputOTP maxLength={4} value={value4} onChange={setValue4}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-xs text-muted-foreground">Value: <span className="font-mono text-foreground">{value4 || "—"}</span></p>
        </div>
      </div>

      {/* Controlled */}
      <div>
        <h3 id="detail-controlled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Controlled
        </h3>
        <div className="mt-4 flex flex-col items-start gap-3">
          <InputOTP maxLength={6} value={controlled} onChange={setControlled}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <div className="flex items-center gap-150">
            <button
              onClick={() => setControlled("")}
              className="rounded-small border border-border px-150 py-050 text-xs font-lexend text-foreground hover:bg-muted"
            >
              Clear
            </button>
            <button
              onClick={() => setControlled("123456")}
              className="rounded-small border border-border px-150 py-050 text-xs font-lexend text-foreground hover:bg-muted"
            >
              Fill
            </button>
          </div>
          <p className="text-xs text-muted-foreground">Value: <span className="font-mono text-foreground">{controlled || "—"}</span></p>
        </div>
      </div>

      {/* Invalid */}
      <div>
        <h3 id="detail-invalid" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Invalid
        </h3>
        <div className="mt-4 flex flex-col items-start gap-3">
          <InputOTP maxLength={6} invalid>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-xs text-destructive">Invalid code — please try again.</p>
        </div>
      </div>

      {/* Disabled */}
      <div>
        <h3 id="detail-disabled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Disabled
        </h3>
        <div className="mt-4">
          <InputOTP maxLength={6} defaultValue="123" disabled>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>
    </div>
  );
};
