"use client";

import { Tick02 } from "@/components/fragments/icons/catalog";

import { cn } from "@/lib/utils";

interface IColorSwatchButtonProps {
  hex: string;
  label?: string;
  selected?: boolean;
  onClick?: () => void;
}

const ColorSwatchButton = (props: IColorSwatchButtonProps) => (
  <button
    type="button"
    onClick={props.onClick}
    title={props.label ?? props.hex}
    aria-label={`Select color ${props.hex}`}
    className={cn(
      "relative h-7 w-7 shrink-0 rounded border-2 transition-transform hover:scale-110",
      props.selected ? "border-content shadow-md" : "border-transparent",
      !props.onClick && "cursor-default hover:scale-100",
    )}
    style={{ backgroundColor: props.hex }}
  >
    {props.selected && (
      <span className="absolute inset-0 flex items-center justify-center text-white drop-shadow-sm">
        <Tick02 className="size-3" />
      </span>
    )}
  </button>
);

export default ColorSwatchButton;
