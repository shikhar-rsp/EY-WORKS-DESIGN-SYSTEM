import { CalendarState } from "@/components/figma/Calendar";

export const CalendarStateDefault = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <CalendarState variant="holiday" label="Christmas" />
      <CalendarState variant="sick-leave" label="Sick Leave" />
      <CalendarState variant="birthday" label="Arthur's Birthday" />
      <CalendarState variant="event" label="Event" />
      <CalendarState variant="room-movement" label="Room Movement" />
    </div>
  );
};
