import { cn } from "@/lib/utils";
import { isValidHex } from "@/lib/color";

interface ISlotRowProps {
  label: string;
  hexValue: string;
  hexInput: string;
  disabled?: boolean;
  onNativeChange: (val: string) => void;
  onTextChange: (val: string) => void;
  onBlur: () => void;
}

const SlotRowInput = (props: ISlotRowProps) => {
  const displayHex = isValidHex(props.hexValue) ? props.hexValue : "#ffffff";
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 shrink-0 text-xs text-secondary-foreground">{props.label}</span>
      <div
        className={cn(
          "relative h-7 w-7 shrink-0 overflow-hidden rounded border border-border",
          props.disabled ? "opacity-50" : "cursor-pointer",
        )}
        style={{ backgroundColor: displayHex }}
      >
        {!props.disabled && (
          <input
            type="color"
            value={displayHex}
            onChange={(e) => props.onNativeChange(e.target.value)}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            aria-label={`${props.label} color`}
          />
        )}
      </div>
      <input
        type="text"
        value={props.hexInput}
        onChange={(e) => props.onTextChange(e.target.value)}
        onBlur={props.onBlur}
        maxLength={7}
        disabled={props.disabled}
        placeholder="#000000"
        className={cn(
          "flex-1 rounded-medium border border-border bg-background px-2.5 py-1",
          "font-mono text-xs text-foreground placeholder:text-muted-foreground",
          "outline-none focus:border-primary focus:ring-1 focus:ring-brand-primary/30",
          "transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        )}
      />
    </div>
  );
};

export default SlotRowInput;
