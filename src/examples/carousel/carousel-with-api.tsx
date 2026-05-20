"use client";

import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/figma/Carousel";

export const CarouselWithApi = () => {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const handleSetApi = (api: CarouselApi) => {
    setCount(api.scrollSnapList().length);
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="font-lexend text-sm text-secondary-foreground">
        Slide <strong className="text-foreground">{current + 1}</strong> of{" "}
        <strong className="text-foreground">{count}</strong>
      </p>
      <div className="w-full max-w-xs px-8">
        <Carousel setApi={handleSetApi}>
          <CarouselContent>
            {[1, 2, 3, 4].map((n) => (
              <CarouselItem key={n}>
                <div className="flex aspect-square items-center justify-center rounded-large bg-muted text-3xl font-bold text-foreground">
                  {n}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
