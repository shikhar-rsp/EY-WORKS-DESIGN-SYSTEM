import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/figma/Carousel";

export const CarouselLoop = () => {
  return (
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
  );
};
