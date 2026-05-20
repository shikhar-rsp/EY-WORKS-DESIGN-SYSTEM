"use client";

import {
  Result,
  ResultIcon,
  ResultTitle,
  ResultDescription,
  ResultContent,
  ResultActions,
} from "@/components/figma/Result";
import { Button } from "@/components/figma/Button";

export const ResultDetail = () => {
  return (
    <div className="mt-6 space-y-10">

      {/* ── Preview ──────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 rounded-large border border-border p-6">
          <Result status="success">
            <ResultIcon />
            <ResultTitle>Payment Successful</ResultTitle>
            <ResultDescription>
              Your order #20240411 has been confirmed. A receipt has been sent to your email.
            </ResultDescription>
            <ResultActions>
              <Button>View Order</Button>
              <Button variant="secondary">Back to Home</Button>
            </ResultActions>
          </Result>
        </div>
      </div>

      {/* ── All Statuses ─────────────────────────────────────────── */}
      <div>
        <h3 id="detail-statuses" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          All Statuses
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Six semantic statuses: <code>success</code>, <code>error</code>, <code>info</code>, <code>warning</code>, <code>404</code>, <code>500</code>, <code>403</code>.
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(["success", "error", "info", "warning", "404", "500", "403"] as const).map((status) => (
            <div key={status} className="rounded-large border border-border p-4">
              <Result status={status}>
                <ResultIcon />
                <ResultTitle>
                  {status === "success" && "Operation Successful"}
                  {status === "error" && "Something Went Wrong"}
                  {status === "info" && "For Your Information"}
                  {status === "warning" && "Proceed with Caution"}
                  {status === "404" && "Page Not Found"}
                  {status === "500" && "Server Error"}
                  {status === "403" && "Access Denied"}
                </ResultTitle>
                <ResultDescription>
                  {`status="${status}"`}
                </ResultDescription>
              </Result>
            </div>
          ))}
        </div>
      </div>

      {/* ── With Content ─────────────────────────────────────────── */}
      <div>
        <h3 id="detail-with-content" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          With Extra Content
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Use <code>ResultContent</code> to show supplementary details — error messages, order info, etc.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <Result status="error">
            <ResultIcon />
            <ResultTitle>Submission Failed</ResultTitle>
            <ResultDescription>
              There were errors in your form submission. Please review and try again.
            </ResultDescription>
            <ResultContent>
              <ul className="list-disc pl-4 space-y-1">
                <li>Email address is already in use.</li>
                <li>Password must be at least 8 characters.</li>
              </ul>
            </ResultContent>
            <ResultActions>
              <Button variant="destructive">Retry</Button>
              <Button variant="secondary">Cancel</Button>
            </ResultActions>
          </Result>
        </div>
      </div>

      {/* ── Custom Icon ──────────────────────────────────────────── */}
      <div>
        <h3 id="detail-custom-icon" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Custom Icon
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Pass children to <code>ResultIcon</code> to override the default status icon.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <Result status="success">
            <ResultIcon>
              <span className="text-4xl">🎉</span>
            </ResultIcon>
            <ResultTitle>Congratulations!</ResultTitle>
            <ResultDescription>You have completed the onboarding process.</ResultDescription>
            <ResultActions>
              <Button>Get Started</Button>
            </ResultActions>
          </Result>
        </div>
      </div>

    </div>
  );
};
