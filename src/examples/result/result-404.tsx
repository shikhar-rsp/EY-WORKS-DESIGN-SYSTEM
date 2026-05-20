import {
  Result,
  ResultIcon,
  ResultTitle,
  ResultDescription,
  ResultActions,
} from "@/components/figma/Result";

export const Result404 = () => {
  return (
    <Result status="404">
      <ResultIcon />
      <ResultTitle>Page Not Found</ResultTitle>
      <ResultDescription>
        The page you are looking for doesn&apos;t exist.
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
          Go Home
        </button>
      </ResultActions>
    </Result>
  );
};
