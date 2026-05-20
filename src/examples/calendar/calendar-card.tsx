import { CalendarCard } from "@/components/figma/Calendar";

export const CalendarCardMonth = () => {
  return (
    <CalendarCard
      type="month"
      month={9}
      year={2021}
      selectedDate={30}
      todayDate={21}
    />
  );
};
