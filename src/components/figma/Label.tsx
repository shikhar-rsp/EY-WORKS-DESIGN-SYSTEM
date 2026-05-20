"use client";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
  className?: string;
}

const labelVariants = cva(
  [
    "inline-flex items-center gap-050",
    "font-lexend text-sm font-medium leading-none text-foreground",
    "select-none",
    "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    "has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-70",
    "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
  ].join(" "),
);

export const Label = (props: ILabelProps) => {
  const { children, className, ...rest } = props;

  return (
    <label data-slot="label" className={cn(labelVariants(), className)} {...rest}>
      {children}
    </label>
  );
};
