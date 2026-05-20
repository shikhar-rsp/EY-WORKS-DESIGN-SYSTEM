import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/figma/Carousel";

export const CarouselVertical = () => {
  return (
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
  );
};
