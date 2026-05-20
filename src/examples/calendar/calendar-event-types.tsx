import { CalendarEventType } from "@/components/figma/Calendar";

export const CalendarEventTypes = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <CalendarEventType variant="session" title="Full Day Session" time="8:30 to 7:30 am" showTime />
      <CalendarEventType variant="event" title="Event" time="8:30 to 7:30 am" showTime />
      <CalendarEventType variant="birthday" title="Arthur's Birthday" />
      <CalendarEventType variant="festival" title="Festival" />
      <CalendarEventType variant="leave" title="Leave" />
    </div>
  );
};
