import {
  Result,
  ResultIcon,
  ResultTitle,
  ResultDescription,
  ResultActions,
} from "@/components/figma/Result";

export const ResultSuccess = () => {
  return (
    <Result status="success">
      <ResultIcon />
      <ResultTitle>Payment Successful</ResultTitle>
      <ResultDescription>
        Your order #12345 has been confirmed. A receipt has been sent to your email.
      </ResultDescription>
      <ResultActions>
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "36px",
            padding: "0 16px",
            borderRadius: "8px",
            border: "none",
            background: "var(--primary, #f8785e)",
            color: "var(--primary-foreground, #ffffff)",
            fontFamily: "var(--font-lexend, 'Lexend', sans-serif)",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          View Order
        </button>
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "36px",
            padding: "0 16px",
            borderRadius: "8px",
            border: "1px solid var(--border, #e5e7eb)",
            background: "var(--background, #ffffff)",
            color: "var(--primary, #f8785e)",
            fontFamily: "var(--font-lexend, 'Lexend', sans-serif)",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Back to Home
        </button>
      </ResultActions>
    </Result>
  );
};
