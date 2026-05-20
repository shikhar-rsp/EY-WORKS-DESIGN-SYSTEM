import {
  Popconfirm,
  PopconfirmTrigger,
  PopconfirmContent,
  PopconfirmHeader,
  PopconfirmIcon,
  PopconfirmTitle,
  PopconfirmFooter,
  PopconfirmCancel,
  PopconfirmAction,
} from "@/components/figma/Popconfirm";

export const PopconfirmPlacement = () => {
  return (
    <Popconfirm side="bottom" align="start">
      <PopconfirmTrigger
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: "36px",
          padding: "0 16px",
          borderRadius: "var(--radius-medium, 8px)",
          border: "1px solid var(--border, #ebe9e8)",
          background: "var(--background, #ffffff)",
          color: "var(--foreground, #2e2b2b)",
          fontFamily: "var(--font-lexend, 'Lexend', sans-serif)",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        Bottom-start placement
      </PopconfirmTrigger>
      <PopconfirmContent>
        <PopconfirmHeader>
          <PopconfirmIcon />
          <PopconfirmTitle>Confirm action</PopconfirmTitle>
        </PopconfirmHeader>
        <PopconfirmFooter>
          <PopconfirmCancel />
          <PopconfirmAction />
        </PopconfirmFooter>
      </PopconfirmContent>
    </Popconfirm>
  );
};
