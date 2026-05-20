"use client";

import { useState } from "react";

interface ITileProps {
  label: string;
  className: string;
}

const Tile = (props: ITileProps) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`flex h-20 w-32 items-center justify-center rounded-medium bg-primary text-primary-foreground text-sm font-medium ${props.className} ${hover ? "scale-110" : "scale-100"}`}
    >
      {props.label}
    </button>
  );
};

export const MotionDemo = () => (
  <div className="flex flex-wrap gap-300">
    <Tile label="fast (150ms)" className="transition-transform duration-fast ease-out" />
    <Tile label="normal (200ms)" className="transition-transform duration-normal ease-out" />
    <Tile label="slow (300ms)" className="transition-transform duration-slow ease-out" />
  </div>
);
