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

export const CarouselDetail = () => {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const handleSetApi = (newApi: CarouselApi) => {
    setApi(newApi);
    setCount(newApi.scrollSnapList().length);
    newApi.on("select", () => {
      setCurrent(newApi.selectedScrollSnap());
    });
  };

  return (
    <div className="mt-6 space-y-10">

      {/* Preview */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Preview</h3>
        <div className="mt-4 flex justify-center rounded-large border border-border p-8">
          <div className="w-full max-w-xs px-8">
            <Carousel>
              <CarouselContent>
                {[1, 2, 3].map((n) => (
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
      </div>

      {/* Multiple items */}
      <div>
        <h3 id="detail-multiple" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Multiple Items Visible</h3>
        <p className="mt-1 text-sm text-secondary-foreground">
          Use <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">basis-1/3</code> on <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">CarouselItem</code> to show multiple slides at once.
        </p>
        <div className="mt-4 rounded-large border border-border p-8">
          <div className="px-4">
            <Carousel>
              <CarouselContent className="-ml-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <CarouselItem key={n} className="pl-2 basis-1/3">
                    <div className="flex aspect-square items-center justify-center rounded-large bg-muted text-xl font-bold text-foreground">
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
      </div>

      {/* Loop */}
      <div>
        <h3 id="detail-loop" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Loop</h3>
        <p className="mt-1 text-sm text-secondary-foreground">
          Pass <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">opts={`{{ loop: true }}`}</code> to cycle infinitely. Both navigation buttons are always enabled.
        </p>
        <div className="mt-4 flex justify-center rounded-large border border-border p-8">
          <div className="w-full max-w-xs px-8">
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                {["A", "B", "C"].map((letter) => (
                  <CarouselItem key={letter}>
                    <div className="flex aspect-square items-center justify-center rounded-large bg-primary text-3xl font-bold text-primary-foreground">
                      {letter}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Vertical */}
      <div>
        <h3 id="detail-vertical" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Vertical</h3>
        <p className="mt-1 text-sm text-secondary-foreground">
          Set <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">orientation=&quot;vertical&quot;</code> for top-to-bottom scrolling. Use arrow keys ↑↓ for keyboard navigation.
        </p>
        <div className="mt-4 flex justify-center rounded-large border border-border p-8">
          <div className="py-8 h-64 w-64">
            <Carousel orientation="vertical" className="h-full">
              <CarouselContent className="h-full">
                {[1, 2, 3].map((n) => (
                  <CarouselItem key={n} className="h-full">
                    <div className="flex h-48 items-center justify-center rounded-large bg-muted text-3xl font-bold text-foreground">
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
      </div>

      {/* API */}
      <div>
        <h3 id="detail-with-api" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">With API</h3>
        <p className="mt-1 text-sm text-secondary-foreground">
          Use <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">setApi</code> to receive a <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">CarouselApi</code> instance for programmatic control and state reading.
        </p>
        <div className="mt-4 flex flex-col items-center gap-3">
          <p className="font-lexend text-sm text-secondary-foreground">
            Slide <strong className="text-foreground">{current + 1}</strong> of <strong className="text-foreground">{count}</strong>
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
      </div>

    </div>
  );
};
