import {
  Result,
  ResultIcon,
  ResultTitle,
  ResultDescription,
  ResultActions,
} from "@/components/figma/Result";

export const ResultError = () => {
  return (
    <Result status="error">
      <ResultIcon />
      <ResultTitle>Submission Failed</ResultTitle>
      <ResultDescription>
        There was an error processing your request. Please try again.
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
          Try Again
        </button>
      </ResultActions>
    </Result>
  );
};
