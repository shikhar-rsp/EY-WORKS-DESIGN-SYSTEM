import { DayCell } from "@/components/figma/Calendar";

export const CalendarDayCellDefault = () => {
  return (
    <DayCell
      date={1}
      state="default"
      events={[
        { variant: "holiday", label: "Full Day Session" },
        { variant: "event", label: "Event" },
      ]}
    />
  );
};
