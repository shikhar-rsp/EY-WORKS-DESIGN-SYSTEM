import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/figma/Collapsible";

export const CollapsibleDisabled = () => {
  return (
    <Collapsible disabled className="w-64">
      <CollapsibleTrigger className="rounded-medium px-200 py-150">
        <span>Repositories</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p className="mt-100 text-sm font-lexend text-secondary-foreground">
          This content is unreachable when disabled.
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
};
