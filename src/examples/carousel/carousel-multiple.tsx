import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/figma/Carousel";

export const CarouselMultiple = () => {
  return (
    <div className="w-full px-4">
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
  );
};
