import {
  TimePicker,
  TimePickerContent,
  TimePickerColumn,
  TimePickerTrigger,
  TimePickerValue,
} from "@/components/figma/TimePicker";

export const TimePicker12h = () => {
  return (
    <TimePicker format="12h" defaultValue="02:30 PM">
      <TimePickerTrigger>
        <TimePickerValue placeholder="Select time" />
      </TimePickerTrigger>
      <TimePickerContent>
        <TimePickerColumn unit="hour" />
        <TimePickerColumn unit="minute" />
        <TimePickerColumn unit="period" />
      </TimePickerContent>
    </TimePicker>
  );
};
