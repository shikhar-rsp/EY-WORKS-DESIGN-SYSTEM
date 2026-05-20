import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/figma/HoverCard";

export const HoverCardDefault = () => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <span className="cursor-pointer text-sm font-medium text-primary underline underline-offset-4">
          @nextjs
        </span>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-100">
          <div className="flex items-center gap-150">
            <div className="size-10 rounded-full bg-muted" />
            <div>
              <p className="text-sm font-semibold text-foreground">Next.js</p>
              <p className="text-xs text-muted-foreground">@nextjs</p>
            </div>
          </div>
          <p className="text-sm text-secondary-foreground">
            The React framework for the web. Used by some of the world&apos;s largest companies.
          </p>
          <p className="text-xs text-muted-foreground">Joined December 2021</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
