"use client";

import { useState } from "react";

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

export const PopconfirmWithCallback = () => {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = async () => {
    await new Promise<void>((r) => setTimeout(r, 1200));
    setConfirmed(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Popconfirm onConfirm={handleConfirm}>
        <PopconfirmTrigger
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "36px",
            padding: "0 16px",
            borderRadius: "var(--radius-medium, 8px)",
            border: "none",
            background: "var(--primary, #f8785e)",
            color: "var(--primary-foreground, #ffffff)",
            fontFamily: "var(--font-lexend, 'Lexend', sans-serif)",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Proceed
        </PopconfirmTrigger>
        <PopconfirmContent>
          <PopconfirmHeader>
            <PopconfirmIcon />
            <PopconfirmTitle>Are you sure?</PopconfirmTitle>
          </PopconfirmHeader>
          <PopconfirmDescription>
            This will submit your changes for review. The OK button shows a loading spinner while
            confirming.
          </PopconfirmDescription>
          <PopconfirmFooter>
            <PopconfirmCancel />
            <PopconfirmAction>Confirm</PopconfirmAction>
          </PopconfirmFooter>
        </PopconfirmContent>
      </Popconfirm>

      <p
        style={{
          fontSize: "13px",
          fontFamily: "var(--font-lexend, 'Lexend', sans-serif)",
          color: confirmed ? "var(--success, #16a34a)" : "var(--muted-foreground, #7a7272)",
        }}
      >
        Status: {confirmed ? "Confirmed ✓" : "Awaiting confirmation"}
      </p>
    </div>
  );
};
