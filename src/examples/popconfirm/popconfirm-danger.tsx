import {
  Popconfirm,
  PopconfirmTrigger,
  PopconfirmContent,
  PopconfirmHeader,
  PopconfirmIcon,
  PopconfirmTitle,
  PopconfirmDescription,
  PopconfirmFooter,
  PopconfirmCancel,
  PopconfirmAction,
} from "@/components/figma/Popconfirm";

export const PopconfirmDanger = () => {
  return (
    <Popconfirm okType="danger">
      <PopconfirmTrigger
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: "36px",
          padding: "0 16px",
          borderRadius: "var(--radius-medium, 8px)",
          border: "none",
          background: "var(--destructive, #cc0000)",
          color: "var(--destructive-foreground, #ffffff)",
          fontFamily: "var(--font-lexend, 'Lexend', sans-serif)",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        Delete
      </PopconfirmTrigger>
      <PopconfirmContent>
        <PopconfirmHeader>
          <PopconfirmIcon />
          <PopconfirmTitle>Delete the task</PopconfirmTitle>
        </PopconfirmHeader>
        <PopconfirmDescription>
          Are you sure to delete this task?
        </PopconfirmDescription>
        <PopconfirmFooter>
          <PopconfirmCancel>No</PopconfirmCancel>
          <PopconfirmAction>Yes</PopconfirmAction>
        </PopconfirmFooter>
      </PopconfirmContent>
    </Popconfirm>
  );
};
