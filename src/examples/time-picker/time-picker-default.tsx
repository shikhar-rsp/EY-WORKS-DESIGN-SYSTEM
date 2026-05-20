import {
  TimePicker,
  TimePickerContent,
  TimePickerColumn,
  TimePickerTrigger,
  TimePickerValue,
} from "@/components/figma/TimePicker";

export const TimePickerDefault = () => {
  return (
    <TimePicker defaultValue="14:30">
      <TimePickerTrigger>
        <TimePickerValue placeholder="Select time" />
      </TimePickerTrigger>
      <TimePickerContent>
        <TimePickerColumn unit="hour" />
        <TimePickerColumn unit="minute" />
      </TimePickerContent>
    </TimePicker>
  );
};
